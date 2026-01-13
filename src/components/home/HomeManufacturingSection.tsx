import Image from "next/image";
import {
  Factory,
  Gauge,
  TrendingUp,
  ArrowRight,
  CheckCircle2,
  Award,
  Link,
} from "lucide-react";

const manufacturingData = {
  tag: "Manufacturing Excellence",
  title: "Industrial-Scale Production Facility",
  description:
    "State-of-the-art manufacturing infrastructure with 20,000+ sqm facility, 300+ skilled workers, and 15 automated production lines delivering 100M+ units annually to global fashion brands.",
  image: "/manufacturing/manufacturing-home.webp",
  stats: [
    { value: "100M+", label: "Units Annually", icon: "Gauge" },
    { value: "15", label: "Production Lines", icon: "Factory" },
    { value: "85%", label: "Capacity Utilization", icon: "TrendingUp" },
  ],
  capabilities: [
    "Injection molding & die-casting machinery",
    "Automated cutting & digital printing systems",
    "ISO-compliant quality management",
    "15-30 day lead times on standard orders",
  ],
  cta: {
    primary: "Tour Our Facility",
    secondary: "View Capabilities",
  },
};

export default function HomeManufacturingSection() {
  return (
    <section className="relative py-10 lg:py-20 overflow-hidden bg-linear-to-b from-slate-100 to-blue-50 dark:from-gray-900 dark:to-gray-900">
      <div className="absolute inset-0 opacity-5">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage:
              "repeating-linear-gradient(0deg, transparent, transparent 59px, rgba(255,255,255,0.1) 59px, rgba(255,255,255,0.1) 60px), repeating-linear-gradient(90deg, transparent, transparent 59px, rgba(255,255,255,0.1) 59px, rgba(255,255,255,0.1) 60px)",
          }}
        ></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8 text-white">
            <div className="space-y-4">
              <div className="inline-flex items-center gap-2 bg-[#00019A]/20 border border-[#00019A]/30 rounded-full px-4 py-2 backdrop-blur-sm">
                <Factory className="w-4 h-4 text-[#00019A]" />
                <span className="text-sm font-medium text-[#00019A]">
                  {manufacturingData.tag}
                </span>
              </div>

              <h2 className="text-4xl lg:text-5xl text-gray-800 font-bold leading-tight">
                {manufacturingData.title}
              </h2>

              <p className="text-lg text-slate-600 leading-relaxed">
                {manufacturingData.description}
              </p>
            </div>

            <div className="grid grid-cols-3 gap-4">
              {manufacturingData.stats.map((stat, idx) => (
                <div
                  key={idx}
                  className="bg-linear-to-br from-[#00019A]/10 to-blue-600/15 backdrop-blur border border-[#00019A]/30 rounded-xl p-4"
                >
                  <div className="mb-2">
                    {stat.icon === "Gauge" && (
                      <Gauge className="w-5 h-5 text-[#00019A]" />
                    )}
                    {stat.icon === "Factory" && (
                      <Factory className="w-5 h-5 text-[#00019A]" />
                    )}
                    {stat.icon === "TrendingUp" && (
                      <TrendingUp className="w-5 h-5 text-[#00019A]" />
                    )}
                  </div>
                  <div className="text-2xl font-bold mb-1 text-black">{stat.value}</div>
                  <div className="text-xs md:text-md text-[#000000]">
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>

            <div className="space-y-3">
              <div className="flex items-center gap-2 text-sm text-slate-300">
                <Award className="w-4 h-4 text-[#00019A] shrink-0" />
                <span className="font-semibold text-black">
                  Key Capabilities:
                </span>
              </div>
              <div className="grid sm:grid-cols-2 gap-3">
                {manufacturingData.capabilities.map((item, idx) => (
                  <div key={idx} className="flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0 mt-0.5" />
                    <span className="text-sm text-slate-800">{item}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="flex flex-wrap gap-4 pt-4">
             
             
              <Link href="/manufacturing">
                <button className="inline-flex items-center gap-2 bg-slate-800 hover:bg-slate-700 border border-slate-700 text-white px-6 py-3 rounded-lg font-semibold transition-colors">
                {manufacturingData.cta.secondary}
              </button>
              </Link>
              
            </div>
          </div>

          <div className="relative">
            <div className="absolute -inset-4 bg-gradient-to-r from-[#00019A] to-cyan-600 rounded-2xl blur-3xl opacity-20"></div>

            <div className="relative rounded-2xl overflow-hidden shadow-xl">
              <Image
                src={manufacturingData.image}
                alt="Manufacturing facility"
                width={600}
                height={400}
                className="w-full h-auto opacity-90 object-cover"
              />

              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-slate-900/90 to-transparent p-6">
                <div className="flex items-center justify-between">
                  <div>
                    <div className="text-xs text-slate-300 mb-1">
                      Production Floor
                    </div>
                    <div className="text-white font-semibold">
                      Dhaka Division, Bangladesh
                    </div>
                  </div>
                  <div className="bg-emerald-500/20 border border-emerald-400/30 text-emerald-400 px-3 py-1 rounded-full text-xs font-medium">
                    ISO Certified
                  </div>
                </div>
              </div>
            </div>

            <div className="absolute -bottom-6 -right-6 bg-[#00019A] text-white rounded-xl p-4 shadow-xl border border-blue-500 hidden lg:block">
              <div className="flex items-center gap-3">
                <div className="bg-white/10 p-2 rounded-lg">
                  <TrendingUp className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-xs opacity-90">Annual Capacity</div>
                  <div className="text-lg font-bold">100M+ Units</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 mt-16">
        <div className="bg-gradient-to-r from-slate-800 to-slate-900 border border-slate-700 rounded-2xl p-8">
          <div className="grid md:grid-cols-4 gap-8 text-center">
            <div className="space-y-2">
              <div className="text-3xl font-bold text-[#ffffff]">50K+</div>
              <div className="text-sm text-slate-400">Units/Day Capacity</div>
            </div>
            <div className="space-y-2">
              <div className="text-3xl font-bold text-[#ffffff]">±0.02mm</div>
              <div className="text-sm text-slate-400">Precision Tolerance</div>
            </div>
            <div className="space-y-2">
              <div className="text-3xl font-bold text-[#ffffff]">04+ Years</div>
              <div className="text-sm text-slate-400">Industry Experience</div>
            </div>
            <div className="space-y-2">
              <div className="text-3xl font-bold text-[#ffffff]">30+</div>
              <div className="text-sm text-slate-400">Countries Served</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
