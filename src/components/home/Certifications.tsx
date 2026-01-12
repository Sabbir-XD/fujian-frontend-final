"use client";

import { motion, AnimatePresence, type Variants } from "framer-motion";
import Image from "next/image";
import { useState } from "react";
import { X, Award } from "lucide-react";
import CommonHead from "@/shared/CommonHead";

/* ================= DATA ================= */
const certifications = [
  {
    name: "OEKO-TEX® Standard 100",
    src: "/certifications/oeko-tex.png",
    certificate: "/certifications/oeko-tex-certificate.jpg",
    description: "Ensures textiles are free from harmful substances",
  },
  {
    name: "Forest Stewardship Council (FSC®)",
    src: "/certifications/fsc.png",
    certificate: "/certifications/fsc-certificate.jpg",
    description: "Promotes responsible management of forests",
  },
  {
    name: "Global Recycled Standard (GRS)",
    src: "/certifications/grs.png",
    certificate: "/certifications/grs-certificate.jpg",
    description: "Verifies recycled content and sustainability",
  },
];

/* ================= ANIMATIONS ================= */
const container: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const item: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.4,
      ease: [0.16, 1, 0.3, 1], // easeOut (typed-safe)
    },
  },
};

/* ================= COMPONENT ================= */
export default function Certifications() {
  const [selectedCert, setSelectedCert] = useState<
    (typeof certifications)[number] | null
  >(null);

  return (
    <section className="py-5 bg-linear-to-b from-blue-50 to-white dark:from-gray-900 dark:to-gray-900">
      <div className="max-w-7xl mx-auto px-4 md:px-6">
        {/* ===== HEADER ===== */}
        <CommonHead
          badge="Quality Assurance"
          title="Trusted Certifications"
          description="Internationally recognized certifications validating our quality"
        />

        {/* ===== GRID ===== */}
        <motion.div
          variants={container}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3"
        >
          {certifications.map((cert) => (
            <motion.div
              key={cert.name}
              variants={item}
              onClick={() => setSelectedCert(cert)}
              className="cursor-pointer group"
            >
              <div className="rounded-xl bg-white dark:bg-gray-800 p-5 border border-gray-100 dark:border-gray-700 shadow-sm hover:shadow-lg transition-all duration-300">
                {/* IMAGE */}
                <div className="flex justify-center mb-4">
                  <div className="h-40 w-58 rounded-xl bg-linear-to-br from-[#00019A]/15 to-blue-600/15 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                    <Image
                      src={cert.src}
                      alt={cert.name}
                      width={220}
                      height={200}
                      className="object-contain"
                    />
                  </div>
                </div>

                {/* TITLE */}
                <h3 className="text-base font-semibold text-center text-gray-900 dark:text-white mb-2">
                  {cert.name}
                </h3>

                {/* DESCRIPTION */}
                <p className="text-xs text-center text-gray-600 dark:text-gray-400 line-clamp-2 mb-3">
                  {cert.description}
                </p>

                {/* CTA */}
                <div className="flex justify-center items-center gap-1 text-xs font-semibold text-[#00019A] dark:text-blue-400">
                  <Award className="w-4 h-4" />
                  View Certificate
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

{
  /* ================= MODAL ================= */
}
// <AnimatePresence>
//   {selectedCert && (
//     <motion.div
//       initial={{ opacity: 0 }}
//       animate={{ opacity: 1 }}
//       exit={{ opacity: 0 }}
//       onClick={() => setSelectedCert(null)}
//       className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-sm p-4"
//     >
//       <motion.div
//         initial={{ scale: 0.9, opacity: 0 }}
//         animate={{ scale: 1, opacity: 1 }}
//         exit={{ scale: 0.9, opacity: 0 }}
//         onClick={(e) => e.stopPropagation()}
//         className="max-w-4xl w-full bg-white dark:bg-gray-800 rounded-2xl overflow-hidden shadow-2xl"
//       >
//         {/* MODAL HEADER */}
//         <div className="bg-linear-to-r from-[#00019A] to-blue-600 p-6 text-white relative">
//           <button
//             onClick={() => setSelectedCert(null)}
//             className="absolute right-4 top-4 p-2 bg-white/20 rounded-full hover:bg-white/30"
//           >
//             <X className="w-5 h-5" />
//           </button>

//           <div className="flex items-center gap-4">
//             <Award className="w-8 h-8" />
//             <div>
//               <h3 className="text-xl font-bold">
//                 {selectedCert.name}
//               </h3>
//               <p className="text-blue-100 text-sm">
//                 {selectedCert.description}
//               </p>
//             </div>
//           </div>
//         </div>

//         {/* MODAL BODY */}
//         <div className="p-6 max-h-[70vh] overflow-auto">
//           <Image
//             src={selectedCert.certificate}
//             alt={selectedCert.name}
//             width={1200}
//             height={800}
//             className="w-full object-contain rounded-xl"
//           />
//         </div>
//       </motion.div>
//     </motion.div>
//   )}
// </AnimatePresence>
