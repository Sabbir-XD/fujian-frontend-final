"use client";

import { memo } from "react";
import Link from "next/link";
import { PhoneCall } from "lucide-react";
import { FaWhatsapp } from "react-icons/fa";

function FloatingContact() {
  return (
    <div className="fixed bottom-2 right-2 z-50 flex flex-col gap-3 lg:bottom-5 lg:right-5">
      <Link
        href="tel:+8801714813840"
        aria-label="Call Fujian Accessories"
        className="relative flex h-10 w-10 items-center justify-center rounded-2xl bg-white backdrop-blur-xl
        ring-1 ring-black/5 shadow-[0_6px_16px_rgba(0,0,0,0.14)]
        transition-all hover:-translate-y-0.5 lg:h-12 lg:w-12"
      >
        <span className="absolute inset-0 rounded-2xl bg-[#00019A]/25 blur-xl" />
        <PhoneCall className="relative h-4 w-4 text-[#00019A] lg:h-6 lg:w-6" />
      </Link>

      <Link
        href="https://wa.me/8801714813840"
        target="_blank"
        aria-label="WhatsApp Fujian Accessories"
        className="relative flex h-10 w-10 items-center justify-center rounded-2xl bg-white backdrop-blur-xl
        ring-1 ring-black/5 shadow-[0_6px_16px_rgba(0,0,0,0.14)]
        transition-all hover:-translate-y-0.5 lg:h-12 lg:w-12"
      >
        <span className="absolute inset-0 rounded-2xl bg-[#25D366]/25 blur-xl" />
        <FaWhatsapp className="relative h-4 w-4 text-[#25D366] lg:h-6 lg:w-6" />
      </Link>
    </div>
  );
}

export default memo(FloatingContact);
