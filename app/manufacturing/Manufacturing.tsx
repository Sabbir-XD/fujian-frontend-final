import Image from "next/image";
import {
  Factory,
  Users,
  MapPin,
  Calendar,
  Ruler,
  Timer,
  TrendingUp,
  Gauge,
  Boxes,
} from "lucide-react";

const data = {
  hero: {
    tag: "ISO Certified Manufacturing",
    title: "Reliable Manufacturer & Supplier of Garment Accessories",
    subtitle:
      "Fujian Accessories Co. Ltd. is a professional manufacturer and supplier of high-quality garment accessories, delivering consistent, scalable, and export-ready solutions for global apparel brands.",
    location: "Dhaka Division, Bangladesh",
    established: "2010",
    image:
      "https://thumbs.dreamstime.com/b/interior-modern-factory-production-clothing-accessories-270657742.jpg",
  },
  factoryOverview: {
    stats: [
      { icon: "Ruler", value: "20,000+", label: "Square Meters", unit: "m²" },
      { icon: "Users", value: "300+", label: "Skilled Workers" },
      { icon: "Factory", value: "15", label: "Production Lines" },
      { icon: "Calendar", value: "14+", label: "Years Operating" },
    ],
    description:
      "Our vertically integrated facility combines advanced automation with skilled craftsmanship to deliver consistent, high-quality garment accessories at industrial scale. Located in Bangladesh's premier manufacturing hub, we operate a fully compliant, modernized production environment serving global fashion brands.",
  },
  machinery: {
    title: "Production Machinery & Equipment",
    subtitle: "Advanced manufacturing technology for precision and efficiency",
    equipment: [
      {
        name: "Injection Molding Systems",
        count: 15,
        capacity: "50,000 units/day",
        application: "Plastic buttons, snaps, and buckles",
        specs: "Fully automated with real-time quality monitoring",
      },
      {
        name: "Die-Casting Machines",
        count: 10,
        capacity: "30,000 units/day",
        application: "Metal zippers, sliders, and hardware components",
        specs: "Precision tooling with ±0.02mm tolerance",
      },
      {
        name: "Automated Cutting & Sewing Lines",
        count: 8,
        capacity: "100,000 labels/day",
        application: "Woven labels, care labels, and fabric trims",
        specs: "Computer-controlled pattern cutting and ultrasonic welding",
      },
      {
        name: "Digital Printing & Engraving",
        count: 12,
        capacity: "75,000 prints/day",
        application: "Custom logos, branding, and surface treatments",
        specs: "UV printing, laser engraving, and embossing capabilities",
      },
    ],
    image:
      "https://static.fibre2fashion.com//articleresources/images/103/10206/ss4946e8_Small.jpg",
  },
  capacity: {
    title: "Production Capacity & Lead Times",
    subtitle: "Scalable manufacturing infrastructure for global demand",
    metrics: [
      {
        category: "Buttons & Snaps",
        monthly: "5,000,000",
        annual: "60,000,000",
        leadTime: "15-20 days",
      },
      {
        category: "Zippers & Hardware",
        monthly: "1,000,000",
        annual: "12,000,000",
        leadTime: "18-25 days",
      },
      {
        category: "Labels & Trims",
        monthly: "2,000,000",
        annual: "24,000,000",
        leadTime: "12-18 days",
      },
      {
        category: "Custom Components",
        monthly: "500,000",
        annual: "6,000,000",
        leadTime: "20-30 days",
      },
    ],
    totalCapacity: "100+ Million Units Annually",
    utilizationRate: "85%",
    image:
      "https://images.pond5.com/busy-factory-floor-garment-manufacturing-footage-061030225_iconl.jpeg",
  },
};

export default function Manufacturing() {
  return (
    <div className="min-h-screen bg-linear-to-b from-slate-50 to-white">
      <section className="relative overflow-hidden bg-linear-to-br from-slate-900 via-slate-800 to-slate-900 text-white">
        <div className="absolute inset-0 opacity-10">
          <div
            className="absolute inset-0"
            style={{
              backgroundImage:
                "repeating-linear-gradient(0deg, transparent, transparent 59px, rgba(255,255,255,0.03) 59px, rgba(255,255,255,0.03) 60px), repeating-linear-gradient(90deg, transparent, transparent 59px, rgba(255,255,255,0.03) 59px, rgba(255,255,255,0.03) 60px)",
            }}
          ></div>
        </div>
        ;
        <div className="max-w-7xl mx-auto px-2 lg:px-4 py-16 lg:py-24 relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full px-4 py-2">
                <Factory className="w-4 h-4" style={{ color: "#00019A" }} />
                <span
                  className="text-sm font-medium"
                  style={{ color: "#ffffff" }}
                >
                  {data.hero.tag}
                </span>
              </div>

              <div className="space-y-4">
                <h1 className="text-4xl lg:text-5xl xl:text-5xl font-bold leading-tight">
                  {data.hero.title}
                </h1>
                <p className="text-md lg:text-xl text-slate-300 font-light">
                  {data.hero.subtitle}
                </p>
              </div>

              <div className="flex flex-wrap gap-6 pt-4">
                <div className="flex items-center gap-2">
                  <MapPin className="w-5 h-5" style={{ color: "#ffffff" }} />
                  <span className="text-slate-300">{data.hero.location}</span>
                </div>
                <div className="flex items-center gap-2">
                  <Calendar className="w-5 h-5" style={{ color: "#ffffff" }} />
                  <span className="text-slate-300">
                    Est. {data.hero.established}
                  </span>
                </div>
              </div>
            </div>

            <div className="relative">
              <div
                className="absolute -inset-4 rounded-2xl blur-2xl opacity-20"
                style={{
                  background: "linear-gradient(to right, #00019A, #0003CC)",
                }}
              ></div>
              <Image
                src={data.hero.image}
                alt="Manufacturing facility"
                className="relative rounded-2xl shadow-2xl border border-white/10 w-full h-auto"
                width={800}
                height={600}
              />
            </div>
          </div>
        </div>
      </section>

      <section className="max-w-7xl mx-auto px-4 -mt-12 relative z-20">
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {data.factoryOverview.stats.map((stat, idx) => (
            <div
              key={idx}
              className="bg-white rounded-xl shadow-lg border border-slate-200 p-6 hover:shadow-xl transition-shadow"
            >
              <div className="flex items-start justify-between mb-4">
                <div
                  className="p-3 rounded-lg"
                  style={{ backgroundColor: "#00019A15" }}
                >
                  {stat.icon === "Ruler" && (
                    <Ruler className="w-6 h-6" style={{ color: "#00019A" }} />
                  )}
                  {stat.icon === "Users" && (
                    <Users className="w-6 h-6" style={{ color: "#00019A" }} />
                  )}
                  {stat.icon === "Factory" && (
                    <Factory className="w-6 h-6" style={{ color: "#00019A" }} />
                  )}
                  {stat.icon === "Calendar" && (
                    <Calendar
                      className="w-6 h-6"
                      style={{ color: "#00019A" }}
                    />
                  )}
                </div>
                {stat.unit && (
                  <span className="text-xs text-slate-500 font-medium">
                    {stat.unit}
                  </span>
                )}
              </div>
              <div className="text-3xl font-bold text-slate-900 mb-1">
                {stat.value}
              </div>
              <div className="text-sm text-slate-600 font-medium">
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="max-w-7xl mx-auto px-4 py-16">
        <div className="max-w-4xl mx-auto">
          <div
            className="rounded-2xl p-8 lg:p-12 border border-slate-200"
            style={{
              background:
                "linear-gradient(to bottom right, #f8fafc, #00019A08)",
            }}
          >
            <h2 className="text-2xl lg:text-3xl font-bold text-slate-900 mb-6">
              Manufacturing Excellence
            </h2>
            <p className="text-lg text-slate-700 leading-relaxed">
              {data.factoryOverview.description}
            </p>
          </div>
        </div>
      </section>

      <section className="bg-slate-900 text-white py-20">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold mb-4">
              {data.machinery.title}
            </h2>
            <p className="text-xl text-slate-300 max-w-3xl mx-auto">
              {data.machinery.subtitle}
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-8 mb-12">
            {data.machinery.equipment.map((item, idx) => (
              <div
                key={idx}
                className="bg-slate-800/50 backdrop-blur border border-slate-700 rounded-xl p-6 hover:bg-slate-800 transition-colors"
              >
                <div className="mb-4">
                  <h3 className="text-xl font-bold text-white mb-2">
                    {item.name}
                  </h3>
                  <div className="flex items-center gap-4 text-sm">
                    <span
                      className="inline-flex items-center gap-1"
                      style={{ color: "#00019A" }}
                    >
                      <Boxes className="w-4 h-4" />
                      {item.count} Units
                    </span>
                    <span className="inline-flex items-center gap-1 text-emerald-400">
                      <Gauge className="w-4 h-4" />
                      {item.capacity}
                    </span>
                  </div>
                </div>

                <div className="space-y-3">
                  <div>
                    <div className="text-xs text-slate-400 font-semibold uppercase mb-1">
                      Application
                    </div>
                    <div className="text-sm text-slate-300">
                      {item.application}
                    </div>
                  </div>
                  <div>
                    <div className="text-xs text-slate-400 font-semibold uppercase mb-1">
                      Specifications
                    </div>
                    <div className="text-sm text-slate-300">{item.specs}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="relative max-w-5xl mx-auto">
            <div
              className="absolute -inset-4 rounded-2xl blur-3xl opacity-20"
              style={{
                background: "linear-gradient(to right, #00019A, #0003CC)",
              }}
            ></div>
            <Image
              src={data.machinery.image}
              alt="Manufacturing machinery"
              className="relative rounded-xl shadow-2xl border border-slate-700 w-full h-auto"
              width={800}
              height={600}
            />
          </div>
        </div>
      </section>

      <section className="max-w-7xl mx-auto px-4 py-20">
        <div className="text-center mb-12">
          <h2 className="text-3xl lg:text-4xl font-bold text-slate-900 mb-4">
            {data.capacity.title}
          </h2>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto">
            {data.capacity.subtitle}
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8 items-center">
          <div className="space-y-6">
            <div
              className="text-white rounded-2xl p-8 shadow-xl"
              style={{
                background:
                  "linear-gradient(to bottom right, #00019A, #0002CC)",
              }}
            >
              <div className="flex items-center gap-3 mb-4">
                <TrendingUp className="w-8 h-8" />
                <div>
                  <div className="text-sm opacity-90">
                    Total Annual Capacity
                  </div>
                  <div className="text-3xl font-bold">
                    {data.capacity.totalCapacity}
                  </div>
                </div>
              </div>
              <div className="flex items-center gap-2 text-sm bg-white/10 rounded-lg px-4 py-2 w-fit">
                <Gauge className="w-4 h-4" />
                <span>
                  Capacity Utilization: {data.capacity.utilizationRate}
                </span>
              </div>
            </div>

            {data.capacity.metrics.map((metric, idx) => (
              <div
                key={idx}
                className="bg-white rounded-xl border-2 border-slate-200 p-6 hover:shadow-lg transition-all"
                style={{ "--hover-border-color": "#00019A" } as React.CSSProperties}
              >
                <div className="flex items-start justify-between mb-3">
                  <h3 className="text-lg font-bold text-slate-900">
                    {metric.category}
                  </h3>
                  <div className="flex items-center gap-1 text-xs bg-emerald-100 text-emerald-700 px-2 py-1 rounded-full font-medium">
                    <Timer className="w-3 h-3" />
                    {metric.leadTime}
                  </div>
                </div>
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <div className="text-xs text-slate-500 mb-1">
                      Monthly Output
                    </div>
                    <div
                      className="text-xl font-bold"
                      style={{ color: "#00019A" }}
                    >
                      {metric.monthly}
                    </div>
                  </div>
                  <div>
                    <div className="text-xs text-slate-500 mb-1">
                      Annual Capacity
                    </div>
                    <div className="text-xl font-bold text-slate-900">
                      {metric.annual}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="relative">
            <div
              className="absolute -inset-4 rounded-2xl blur-2xl opacity-20"
              style={{
                background: "linear-gradient(to right, #00019A, #0003CC)",
              }}
            ></div>
            <Image
              src={data.capacity.image}
              alt="Production capacity"
              className="relative rounded-2xl shadow-2xl border border-slate-200 w-full h-auto"
              width={800}
              height={500}
            />
            <Image
              src={data.capacity.image}
              alt="Production capacity"
              className="relative rounded-2xl shadow-2xl border border-slate-200 w-full h-auto"
              width={800}
              height={500}
            />
            <Image
              src={data.capacity.image}
              alt="Production capacity"
              className="relative rounded-2xl shadow-2xl border border-slate-200 w-full h-auto"
              width={800}
              height={500}
            />
          </div>
        </div>
      </section>
    </div>
  );
}
