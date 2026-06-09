import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import {
  Lock,
  Bolt,
  BadgeCheck,
  BarChart3,
  Headphones,
  Repeat2,
  Globe,
  ShieldCheck,
} from "lucide-react";

const features = [
  {
    icon: Lock,
    title: "100% Exclusive Leads",
    description:
      "Every lead we generate goes to one client only. No recycled, shared, or aged data — your leads are yours alone.",
    color: "#39caff",
    bg: "#f0f9ff",
  },
  {
    icon: Bolt,
    title: "Real-Time Delivery",
    description:
      "Leads are pushed to your CRM or inbox the moment a prospect fills out their request — within seconds, not days.",
    color: "#f59e0b",
    bg: "#fffbeb",
  },
  {
    icon: BadgeCheck,
    title: "Multi-Point Verification",
    description:
      "Phone, email, and address are validated before delivery. We also score every lead for intent, budget, and urgency.",
    color: "#10b981",
    bg: "#f0fdf4",
  },
  {
    icon: BarChart3,
    title: "Transparent Reporting",
    description:
      "Access a live dashboard showing your lead volume, contact rates, and ROI. No guesswork — just clear performance data.",
    color: "#7c3aed",
    bg: "#faf5ff",
  },
  {
    icon: Headphones,
    title: "Dedicated Account Support",
    description:
      "Every client gets a dedicated account manager. We tweak targeting, adjust volume, and optimize campaigns with you.",
    color: "#f43f5e",
    bg: "#fff1f2",
  },
  {
    icon: Repeat2,
    title: "Flexible Volume & Pause",
    description:
      "Scale up during your busy season, pause when you're at capacity. No minimum commitments or punishing contracts.",
    color: "#0d9488",
    bg: "#f0fdfa",
  },
  {
    icon: Globe,
    title: "National & Local Coverage",
    description:
      "We operate across the entire US. Target specific zip codes, counties, states — or go nationwide for max scale.",
    color: "#3b82f6",
    bg: "#eff6ff",
  },
  {
    icon: ShieldCheck,
    title: "TCPA & Compliance Safe",
    description:
      "All leads are generated through compliant opt-in processes. We stay on top of regulatory changes so you don't have to.",
    color: "#242325",
    bg: "#f8f9fa",
  },
];

export default function WhyUs() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section id="industries" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Header */}
        <div className="grid lg:grid-cols-2 gap-12 items-start mb-16">
          <motion.div
            ref={ref}
            initial={{ opacity: 0, x: -20 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.55 }}
          >
            <p
              className="text-sm font-semibold uppercase tracking-widest mb-4"
              style={{ color: "#39caff", fontFamily: "'Plus Jakarta Sans', sans-serif" }}
            >
              Why GenXLeadz
            </p>
            <h2
              className="text-4xl lg:text-5xl font-extrabold leading-tight"
              style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", color: "#242325" }}
            >
              Not Just A Lead Vendor.{" "}
              <span className="text-gradient">Your Growth Partner.</span>
            </h2>
          </motion.div>
          <motion.p
            initial={{ opacity: 0, x: 20 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.55, delay: 0.1 }}
            className="text-lg text-gray-500 leading-relaxed self-end lg:pb-2"
          >
            The lead generation industry is full of brokers recycling the same data to dozens
            of companies. GenXLeadz was built on a different principle: exclusive leads,
            transparent pricing, and a partnership model that actually grows your business.
          </motion.p>
        </div>

        {/* Feature grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {features.map((feat, i) => (
            <motion.div
              key={feat.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ delay: (i % 4) * 0.08, duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
              className="group p-6 rounded-3xl border border-gray-100 bg-white card-hover"
            >
              <div
                className="w-12 h-12 rounded-2xl flex items-center justify-center mb-5"
                style={{ background: feat.bg }}
              >
                <feat.icon className="w-5 h-5" style={{ color: feat.color }} />
              </div>
              <h3
                className="text-base font-extrabold mb-2"
                style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", color: "#242325" }}
              >
                {feat.title}
              </h3>
              <p className="text-sm text-gray-500 leading-relaxed">{feat.description}</p>
            </motion.div>
          ))}
        </div>

        {/* Bottom comparison strip */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mt-14 rounded-3xl border border-gray-100 overflow-hidden"
        >
          <div className="grid md:grid-cols-2">
            {/* Left: Others */}
            <div className="p-8 lg:p-10 border-b md:border-b-0 md:border-r border-gray-100">
              <p
                className="text-xs font-bold uppercase tracking-widest text-gray-400 mb-6"
                style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}
              >
                Typical Lead Vendors
              </p>
              {[
                "Shared leads sold to 5–10 competitors",
                "Aged data, no freshness guarantee",
                "No verification or intent scoring",
                "One-size-fits-all targeting",
                "Hidden fees and lock-in contracts",
              ].map((item) => (
                <div key={item} className="flex items-center gap-3 py-2.5 border-b border-gray-50">
                  <span
                    className="w-5 h-5 rounded-full flex-shrink-0 text-center text-white text-xs font-bold flex items-center justify-center"
                    style={{ background: "#e5e7eb", color: "#9ca3af" }}
                  >
                    ✕
                  </span>
                  <p className="text-sm text-gray-400">{item}</p>
                </div>
              ))}
            </div>

            {/* Right: GenXLeadz */}
            <div
              className="p-8 lg:p-10"
              style={{ background: "linear-gradient(135deg, #f0f9ff 0%, #fff 100%)" }}
            >
              <p
                className="text-xs font-bold uppercase tracking-widest mb-6"
                style={{ color: "#39caff", fontFamily: "'Plus Jakarta Sans', sans-serif" }}
              >
                GenXLeadz
              </p>
              {[
                "100% exclusive — yours alone",
                "Real-time delivery, max freshness",
                "Verified phone, email + intent score",
                "Custom geo, budget & service targeting",
                "Transparent pricing, pause anytime",
              ].map((item) => (
                <div key={item} className="flex items-center gap-3 py-2.5 border-b border-blue-50">
                  <span
                    className="w-5 h-5 rounded-full flex-shrink-0 text-center text-white text-xs font-bold flex items-center justify-center"
                    style={{ background: "#39caff" }}
                  >
                    ✓
                  </span>
                  <p className="text-sm font-medium" style={{ color: "#242325" }}>
                    {item}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
