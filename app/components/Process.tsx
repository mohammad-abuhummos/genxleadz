import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Target, SlidersHorizontal, Zap, TrendingUp, ArrowDown } from "lucide-react";

const steps = [
  {
    number: "01",
    icon: Target,
    title: "Choose Your Vertical",
    description:
      "Select from our 10 specialized lead categories. Whether you're in solar, HVAC, debt settlement, or any other niche — we have a dedicated pipeline ready.",
    color: "#39caff",
    bg: "#f0f9ff",
  },
  {
    number: "02",
    icon: SlidersHorizontal,
    title: "Define Your Target",
    description:
      "Tell us your ideal customer: geographic area, budget range, homeowner status, and specific project type. We tailor the lead flow to your exact specs.",
    color: "#7c3aed",
    bg: "#faf5ff",
  },
  {
    number: "03",
    icon: Zap,
    title: "We Source & Verify",
    description:
      "Our multi-channel acquisition system finds high-intent prospects. Every lead is verified — real name, valid phone, confirmed email, and intent score.",
    color: "#f59e0b",
    bg: "#fffbeb",
  },
  {
    number: "04",
    icon: TrendingUp,
    title: "Close More Deals",
    description:
      "Receive leads in real time via your preferred CRM, email, or direct API. Your team focuses on closing while we keep the pipeline full.",
    color: "#10b981",
    bg: "#f0fdf4",
  },
];

export default function Process() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section id="how-it-works" className="py-24" style={{ background: "#f8fafc" }}>
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Header */}
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="text-center mb-20"
        >
          <p
            className="text-sm font-semibold uppercase tracking-widest mb-4"
            style={{ color: "#39caff", fontFamily: "'Plus Jakarta Sans', sans-serif" }}
          >
            How It Works
          </p>
          <h2
            className="text-4xl lg:text-5xl font-extrabold mb-5"
            style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", color: "#242325" }}
          >
            From Setup to{" "}
            <span className="text-gradient">Closed Deals</span>
            <br />
            in 4 Simple Steps
          </h2>
          <p className="text-lg text-gray-500 max-w-2xl mx-auto">
            No technical setup required. No long wait times. Just a streamlined process
            built to get you in front of ready-to-buy customers fast.
          </p>
        </motion.div>

        {/* Steps: desktop horizontal, mobile vertical */}
        <div className="hidden lg:grid lg:grid-cols-4 gap-8 relative">
          {/* Connecting line */}
          <div
            className="absolute top-12 left-[12.5%] right-[12.5%] h-0.5 z-0"
            style={{
              background:
                "linear-gradient(90deg, #39caff 0%, #7c3aed 33%, #f59e0b 66%, #10b981 100%)",
              opacity: 0.3,
            }}
          />

          {steps.map((step, i) => (
            <motion.div
              key={step.number}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: i * 0.15, duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
              className="relative z-10 text-center"
            >
              {/* Circle icon */}
              <div className="flex justify-center mb-6">
                <div
                  className="w-24 h-24 rounded-full flex items-center justify-center shadow-lg border-4 border-white"
                  style={{ background: step.bg }}
                >
                  <step.icon className="w-8 h-8" style={{ color: step.color }} />
                </div>
              </div>

              {/* Number */}
              <p
                className="text-xs font-black uppercase tracking-widest mb-2"
                style={{ color: step.color, fontFamily: "'Plus Jakarta Sans', sans-serif" }}
              >
                Step {step.number}
              </p>

              {/* Title */}
              <h3
                className="text-xl font-extrabold mb-3"
                style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", color: "#242325" }}
              >
                {step.title}
              </h3>

              {/* Description */}
              <p className="text-sm text-gray-500 leading-relaxed">{step.description}</p>
            </motion.div>
          ))}
        </div>

        {/* Mobile: vertical */}
        <div className="lg:hidden flex flex-col gap-6">
          {steps.map((step, i) => (
            <motion.div
              key={step.number}
              initial={{ opacity: 0, x: -20 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{ delay: i * 0.1, duration: 0.5 }}
              className="bg-white rounded-2xl p-6 border border-gray-100 flex gap-5 items-start"
            >
              <div
                className="w-14 h-14 rounded-2xl flex items-center justify-center flex-shrink-0"
                style={{ background: step.bg }}
              >
                <step.icon className="w-6 h-6" style={{ color: step.color }} />
              </div>
              <div>
                <p
                  className="text-xs font-black uppercase tracking-widest mb-1"
                  style={{ color: step.color }}
                >
                  Step {step.number}
                </p>
                <h3
                  className="text-lg font-extrabold mb-2"
                  style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", color: "#242325" }}
                >
                  {step.title}
                </h3>
                <p className="text-sm text-gray-500 leading-relaxed">{step.description}</p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mt-16"
        >
          <button
            onClick={() =>
              document.querySelector("#contact")?.scrollIntoView({ behavior: "smooth" })
            }
            className="px-10 py-4 rounded-2xl btn-primary text-base inline-flex items-center gap-2"
          >
            Start Getting Leads Today
            <Zap className="w-4 h-4" />
          </button>
        </motion.div>
      </div>
    </section>
  );
}
