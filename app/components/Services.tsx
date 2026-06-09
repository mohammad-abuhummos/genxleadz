import { useRef, useState } from "react";
import { motion, useInView } from "framer-motion";
import {
  DollarSign,
  Home,
  Thermometer,
  LayoutGrid,
  Sun,
  Droplets,
  Bath,
  Accessibility,
  Bug,
  Shield,
  ArrowUpRight,
  TrendingUp,
  Users,
  Zap,
  ImageOff,
} from "lucide-react";

// ─── Image config ────────────────────────────────────────────────────
// Place your downloaded Freepik images at: /public/images/services/
// e.g. /public/images/services/debt-settlement.jpg
// See IMAGE_PROMPTS.md for the exact prompts used to generate each image.

const services = [
  {
    id: "debt",
    icon: DollarSign,
    title: "Debt Settlement",
    tagline: "Financial Relief Leads",
    stat: "$15k+ avg debt",
    description:
      "Pre-qualified consumers carrying $10k+ in unsecured debt, actively seeking settlement solutions. High intent, premium close rates.",
    accent: "#0ea5e9",
    placeholderBg: "0ea5e9",
    placeholderText: "Debt+Settlement",
    imagePath: "/images/services/debt-settlement.jpg",
    wide: true,
  },
  {
    id: "solar",
    icon: Sun,
    title: "Solar",
    tagline: "Residential & Commercial",
    stat: "$15k–$40k installs",
    description:
      "Homeowners with high utility bills, roof-qualified and financing-ready. Intent-scored before delivery.",
    accent: "#f59e0b",
    placeholderBg: "f59e0b",
    placeholderText: "Solar+Leads",
    imagePath: "/images/services/solar.jpg",
    wide: false,
  },
  {
    id: "roofing",
    icon: Home,
    title: "Roofing",
    tagline: "Storm & Age Damage",
    stat: "$8k–$25k projects",
    description:
      "Insurance-approved replacements, storm-damage urgency leads, and planned upgrades. High conversion potential.",
    accent: "#64748b",
    placeholderBg: "64748b",
    placeholderText: "Roofing+Leads",
    imagePath: "/images/services/roofing.jpg",
    wide: false,
  },
  {
    id: "hvac",
    icon: Thermometer,
    title: "HVAC",
    tagline: "Heating & Cooling",
    stat: "$5k–$15k jobs",
    description:
      "System replacements, new AC, furnaces, and seasonal installs. Geo-targeted, verified homeowners.",
    accent: "#f97316",
    placeholderBg: "f97316",
    placeholderText: "HVAC+Leads",
    imagePath: "/images/services/hvac.jpg",
    wide: false,
  },
  {
    id: "windows",
    icon: LayoutGrid,
    title: "Windows",
    tagline: "Replacement & Upgrades",
    stat: "3–15 windows avg",
    description:
      "Energy-efficient window replacement projects. Verified homeowners with confirmed project scope.",
    accent: "#0d9488",
    placeholderBg: "0d9488",
    placeholderText: "Window+Leads",
    imagePath: "/images/services/windows.jpg",
    wide: false,
  },
  {
    id: "gutters",
    icon: Droplets,
    title: "Gutters",
    tagline: "Install & Guards",
    stat: "$800–$3k projects",
    description:
      "Replacement, cleaning, and leaf guard installation leads. Ideal for seasonal bundling with roofing.",
    accent: "#3b82f6",
    placeholderBg: "3b82f6",
    placeholderText: "Gutter+Leads",
    imagePath: "/images/services/gutters.jpg",
    wide: false,
  },
  {
    id: "bathroom",
    icon: Bath,
    title: "Bathroom Remodeling",
    tagline: "Full Renovations",
    stat: "$5k–$30k budgets",
    description:
      "Mid-range to luxury bathroom remodels. Budget-qualified leads with confirmed renovation intent.",
    accent: "#7c3aed",
    placeholderBg: "7c3aed",
    placeholderText: "Bathroom+Remodel",
    imagePath: "/images/services/bathroom.jpg",
    wide: true,
  },
  {
    id: "walkin-tub",
    icon: Accessibility,
    title: "Walk-in Tubs",
    tagline: "Senior Safety & Mobility",
    stat: "$4k–$12k jobs",
    description:
      "Seniors and caregivers seeking ADA-compliant bathtub or walk-in shower solutions.",
    accent: "#10b981",
    placeholderBg: "10b981",
    placeholderText: "Walk-in+Tub",
    imagePath: "/images/services/walk-in-tub.jpg",
    wide: false,
  },
  {
    id: "pest",
    icon: Bug,
    title: "Pest Control",
    tagline: "Residential & Commercial",
    stat: "6:1 avg client ROI",
    description:
      "Homeowners with active infestations requesting immediate treatment quotes. Termite, rodent, bed bug and general pest control.",
    accent: "#65a30d",
    placeholderBg: "65a30d",
    placeholderText: "Pest+Control",
    imagePath: "/images/services/pest-control.jpg",
    wide: false,
  },
  {
    id: "security",
    icon: Shield,
    title: "Home Security",
    tagline: "Smart Surveillance Systems",
    stat: "$500–$5k installs",
    description:
      "Security system, camera, and alarm monitoring leads. Move-in and upgrade-driven homeowners.",
    accent: "#f43f5e",
    placeholderBg: "f43f5e",
    placeholderText: "Home+Security",
    imagePath: "/images/services/home-security.jpg",
    wide: false,
  },
];

// ─── Image with styled placeholder fallback ───────────────────────────
function ServiceImage({
  src,
  alt,
  accent,
  placeholderBg,
  placeholderText,
  icon: Icon,
}: {
  src: string;
  alt: string;
  accent: string;
  placeholderBg: string;
  placeholderText: string;
  icon: React.ComponentType<{ className?: string; style?: React.CSSProperties }>;
}) {
  const [loaded, setLoaded] = useState(false);
  const [errored, setErrored] = useState(false);

  // Use placehold.co as fallback when the local file isn't there yet
  const fallbackUrl = `https://placehold.co/800x480/${placeholderBg}/ffffff?text=${placeholderText.replace(/\+/g, " ")}`;

  return (
    <div className="relative w-full h-full overflow-hidden bg-gray-100">
      {/* Real image (hidden until loaded) */}
      {!errored && (
        <img
          src={src}
          alt={alt}
          className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-500 ${
            loaded ? "opacity-100" : "opacity-0"
          }`}
          onLoad={() => setLoaded(true)}
          onError={() => setErrored(true)}
        />
      )}

      {/* Placeholder shown while loading OR on error */}
      {(!loaded || errored) && (
        <div
          className="absolute inset-0 flex flex-col items-center justify-center gap-3"
          style={{ background: `#${placeholderBg}18` }}
        >
          {/* Branded icon placeholder */}
          <div
            className="w-16 h-16 rounded-2xl flex items-center justify-center shadow-md"
            style={{ background: accent }}
          >
            <Icon className="w-8 h-8 text-white" />
          </div>
          <p
            className="text-xs font-bold px-4 py-1.5 rounded-full"
            style={{
              background: accent + "20",
              color: accent,
              fontFamily: "'Plus Jakarta Sans', sans-serif",
            }}
          >
            {alt} · Image Coming Soon
          </p>
          <p className="text-[10px] text-gray-400">See IMAGE_PROMPTS.md to generate</p>
        </div>
      )}
    </div>
  );
}

// ─── Individual card ──────────────────────────────────────────────────
function ServiceCard({
  service,
  index,
}: {
  service: (typeof services)[number];
  index: number;
}) {
  return (
    <motion.article
      initial={{ opacity: 0, y: 32, scale: 0.97 }}
      whileInView={{ opacity: 1, y: 0, scale: 1 }}
      viewport={{ once: true, margin: "-40px" }}
      transition={{ delay: (index % 5) * 0.07, duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
      whileHover={{ y: -5, transition: { duration: 0.22 } }}
      className={`group bg-white rounded-3xl overflow-hidden border border-gray-100 flex flex-col cursor-pointer ${
        service.wide ? "sm:col-span-2" : ""
      }`}
      style={{
        boxShadow: "0 4px 24px rgba(0,0,0,0.06)",
        transition: "box-shadow 0.25s ease",
      }}
      onMouseEnter={(e) =>
        (e.currentTarget.style.boxShadow = `0 20px 60px ${service.accent}28`)
      }
      onMouseLeave={(e) =>
        (e.currentTarget.style.boxShadow = "0 4px 24px rgba(0,0,0,0.06)")
      }
    >
      {/* ── Image area ───────────────────────────── */}
      <div
        className={`relative overflow-hidden flex-shrink-0 ${
          service.wide ? "h-56" : "h-44"
        }`}
      >
        <ServiceImage
          src={service.imagePath}
          alt={service.title}
          accent={service.accent}
          placeholderBg={service.placeholderBg}
          placeholderText={service.placeholderText}
          icon={service.icon}
        />

        {/* Gradient overlay for polish */}
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            background: `linear-gradient(to top, ${service.accent}30 0%, transparent 60%)`,
          }}
        />

        {/* Stat badge */}
        <div className="absolute top-3 right-3 bg-white/90 backdrop-blur-sm px-3 py-1.5 rounded-xl shadow-sm">
          <p
            className="text-xs font-extrabold"
            style={{ color: service.accent, fontFamily: "'Plus Jakarta Sans', sans-serif" }}
          >
            {service.stat}
          </p>
        </div>

        {/* Icon badge bottom-left */}
        <div
          className="absolute bottom-3 left-3 w-9 h-9 rounded-xl flex items-center justify-center shadow-md"
          style={{ background: service.accent }}
        >
          <service.icon className="w-4 h-4 text-white" />
        </div>
      </div>

      {/* ── Content ───────────────────────────────── */}
      <div className="p-6 flex flex-col flex-1">
        <p
          className="text-xs font-bold uppercase tracking-widest mb-1.5"
          style={{ color: service.accent, fontFamily: "'Plus Jakarta Sans', sans-serif" }}
        >
          {service.tagline}
        </p>
        <h3
          className="text-xl font-extrabold mb-2 leading-snug"
          style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", color: "#242325" }}
        >
          {service.title}
        </h3>
        <p className="text-sm text-gray-500 leading-relaxed flex-1 mb-5">
          {service.description}
        </p>

        <button
          className="inline-flex items-center gap-2 text-sm font-bold transition-all duration-200 group-hover:gap-3"
          style={{ color: service.accent }}
          onClick={() =>
            document.querySelector("#contact")?.scrollIntoView({ behavior: "smooth" })
          }
        >
          Get {service.title} Leads
          <ArrowUpRight
            className="w-4 h-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
          />
        </button>
      </div>
    </motion.article>
  );
}

// ─── Section ──────────────────────────────────────────────────────────
export default function Services() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section id="services" className="py-24" style={{ background: "#f8fafc" }}>
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Header */}
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6 mb-14"
        >
          <div>
            <p
              className="text-sm font-semibold uppercase tracking-widest mb-4"
              style={{ color: "#39caff", fontFamily: "'Plus Jakarta Sans', sans-serif" }}
            >
              Lead Verticals
            </p>
            <h2
              className="text-4xl lg:text-5xl font-extrabold leading-tight"
              style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", color: "#242325" }}
            >
              10 Industries.{" "}
              <span className="text-gradient">One Pipeline.</span>
            </h2>
          </div>
          <p className="text-base text-gray-500 max-w-sm lg:text-right leading-relaxed">
            Each vertical has its own dedicated acquisition system, verified lead
            flow, and custom targeting parameters.
          </p>
        </motion.div>

        {/* Card Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {services.map((service, i) => (
            <ServiceCard key={service.id} service={service} index={i} />
          ))}
        </div>

        {/* Bottom trust strip */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mt-10 grid grid-cols-1 sm:grid-cols-3 gap-5"
        >
          {[
            { icon: Zap, label: "Same-day delivery across all verticals", color: "#f59e0b" },
            {
              icon: Users,
              label: "Every lead goes to ONE client — never shared",
              color: "#39caff",
            },
            { icon: TrendingUp, label: "94% avg contact rate across all industries", color: "#10b981" },
          ].map((item) => (
            <div
              key={item.label}
              className="flex items-center gap-4 p-5 bg-white rounded-2xl border border-gray-100"
            >
              <div
                className="w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0"
                style={{ background: item.color + "15" }}
              >
                <item.icon className="w-5 h-5" style={{ color: item.color }} />
              </div>
              <p
                className="text-sm font-semibold"
                style={{ color: "#242325", fontFamily: "'Plus Jakarta Sans', sans-serif" }}
              >
                {item.label}
              </p>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
