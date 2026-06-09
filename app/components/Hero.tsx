import { motion } from "framer-motion";
import {
  ArrowRight,
  Star,
  CheckCircle2,
  TrendingUp,
  Phone,
  MapPin,
  Clock,
  Zap,
} from "lucide-react";

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (i = 0) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.12, duration: 0.6, ease: [0.22, 1, 0.36, 1] },
  }),
};

const SAMPLE_LEADS = [
  {
    name: "Robert M.",
    location: "Austin, TX",
    service: "Solar Panels",
    score: 97,
    time: "Just now",
    color: "#f0f9ff",
    border: "#39caff",
  },
  {
    name: "Patricia L.",
    location: "Miami, FL",
    service: "Debt Settlement",
    score: 94,
    time: "2 min ago",
    color: "#f0fdf4",
    border: "#22c55e",
  },
  {
    name: "Daniel K.",
    location: "Phoenix, AZ",
    service: "HVAC Replacement",
    score: 91,
    time: "5 min ago",
    color: "#fff7ed",
    border: "#f97316",
  },
];

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden bg-white pt-20">
      {/* Background decorations */}
      <div
        className="absolute inset-0 bg-grid-pattern opacity-60 pointer-events-none"
        aria-hidden="true"
      />
      <div
        className="absolute top-0 right-0 w-[600px] h-[600px] rounded-full pointer-events-none"
        style={{
          background:
            "radial-gradient(circle at 70% 30%, rgba(57,202,255,0.12) 0%, transparent 70%)",
        }}
        aria-hidden="true"
      />
      <div
        className="absolute bottom-0 left-0 w-[400px] h-[400px] rounded-full pointer-events-none"
        style={{
          background:
            "radial-gradient(circle at 30% 70%, rgba(57,202,255,0.08) 0%, transparent 60%)",
        }}
        aria-hidden="true"
      />

      <div className="max-w-7xl mx-auto px-6 lg:px-8 w-full py-16 lg:py-24">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left: Copy */}
          <div>
            {/* Badge */}
            <motion.div
              variants={fadeUp}
              initial="hidden"
              animate="visible"
              custom={0}
              className="inline-flex items-center gap-2 bg-blue-50 border border-blue-100 rounded-full px-4 py-2 mb-8"
            >
              <span className="live-dot" />
              <span
                className="text-sm font-semibold"
                style={{
                  color: "#0084b4",
                  fontFamily: "'Plus Jakarta Sans', sans-serif",
                }}
              >
                Live leads delivered 24/7
              </span>
            </motion.div>

            {/* Headline */}
            <motion.h1
              variants={fadeUp}
              initial="hidden"
              animate="visible"
              custom={1}
              className="font-display text-5xl lg:text-6xl xl:text-7xl font-extrabold leading-[1.05] tracking-tight mb-6"
              style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", color: "#242325" }}
            >
              Premium Leads{" "}
              <span className="relative inline-block">
                <span className="text-gradient">That Close</span>
                <motion.svg
                  className="absolute -bottom-2 left-0 w-full"
                  viewBox="0 0 300 10"
                  fill="none"
                  initial={{ pathLength: 0, opacity: 0 }}
                  animate={{ pathLength: 1, opacity: 1 }}
                  transition={{ delay: 0.8, duration: 0.6 }}
                >
                  <path
                    d="M2 6 Q150 2 298 6"
                    stroke="#39caff"
                    strokeWidth="3"
                    strokeLinecap="round"
                    fill="none"
                  />
                </motion.svg>
              </span>
              <br />
              For Every Industry
            </motion.h1>

            {/* Sub */}
            <motion.p
              variants={fadeUp}
              initial="hidden"
              animate="visible"
              custom={2}
              className="text-lg text-gray-500 leading-relaxed mb-10 max-w-xl"
            >
              GenXLeadz delivers exclusive, real-time, intent-based leads for
              home services, financial services, and more. Stop chasing dead
              data — start closing real deals.
            </motion.p>

            {/* Trust points */}
            <motion.ul
              variants={fadeUp}
              initial="hidden"
              animate="visible"
              custom={3}
              className="flex flex-wrap gap-x-6 gap-y-3 mb-10"
            >
              {[
                "100% Exclusive Leads",
                "Real-time Delivery",
                "Verified Contact Info",
                "No Long-term Contracts",
              ].map((item) => (
                <li key={item} className="flex items-center gap-2 text-sm font-medium text-gray-600">
                  <CheckCircle2 className="w-4 h-4 flex-shrink-0" style={{ color: "#39caff" }} />
                  {item}
                </li>
              ))}
            </motion.ul>

            {/* CTAs */}
            <motion.div
              variants={fadeUp}
              initial="hidden"
              animate="visible"
              custom={4}
              className="flex flex-wrap gap-4 mb-12"
            >
              <button
                onClick={() => {
                  document
                    .querySelector("#contact")
                    ?.scrollIntoView({ behavior: "smooth" });
                }}
                className="px-8 py-4 rounded-2xl btn-primary text-base flex items-center gap-2"
              >
                Get Free Sample Leads
                <ArrowRight className="w-4 h-4" />
              </button>
              <button
                onClick={() => {
                  document
                    .querySelector("#services")
                    ?.scrollIntoView({ behavior: "smooth" });
                }}
                className="px-8 py-4 rounded-2xl btn-outline text-base"
              >
                Explore Services
              </button>
            </motion.div>

            {/* Social proof */}
            <motion.div
              variants={fadeUp}
              initial="hidden"
              animate="visible"
              custom={5}
              className="flex items-center gap-4"
            >
              <div className="flex -space-x-3">
                {["T", "M", "S", "J"].map((letter, i) => (
                  <div
                    key={i}
                    className="w-9 h-9 rounded-full border-2 border-white flex items-center justify-center text-xs font-bold text-white"
                    style={{
                      background: i % 2 === 0 ? "#39caff" : "#242325",
                    }}
                  >
                    {letter}
                  </div>
                ))}
              </div>
              <div>
                <div className="flex items-center gap-1 mb-0.5">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      className="w-3.5 h-3.5 fill-current"
                      style={{ color: "#f59e0b" }}
                    />
                  ))}
                </div>
                <p className="text-xs text-gray-500">
                  <span className="font-semibold text-ink">500+</span> businesses trust GenXLeadz
                </p>
              </div>
            </motion.div>
          </div>

          {/* Right: Animated Lead Cards Panel */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
            className="relative lg:pl-8"
          >
            {/* Main panel */}
            <div
              className="relative bg-white rounded-3xl shadow-2xl border border-gray-100 p-6 lg:p-8"
              style={{ boxShadow: "0 30px 80px rgba(57,202,255,0.15), 0 10px 30px rgba(0,0,0,0.08)" }}
            >
              {/* Panel header */}
              <div className="flex items-center justify-between mb-6">
                <div>
                  <p className="text-xs font-medium text-gray-400 uppercase tracking-widest mb-1">
                    Live Lead Stream
                  </p>
                  <h3
                    className="text-lg font-bold"
                    style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", color: "#242325" }}
                  >
                    Today's Leads
                  </h3>
                </div>
                <div className="flex items-center gap-2 bg-green-50 border border-green-100 rounded-full px-3 py-1.5">
                  <span className="live-dot" />
                  <span className="text-xs font-semibold text-green-700">LIVE</span>
                </div>
              </div>

              {/* Stats row */}
              <div className="grid grid-cols-3 gap-3 mb-6">
                {[
                  { label: "New Today", value: "127", icon: TrendingUp, color: "#39caff" },
                  { label: "Contact Rate", value: "94%", icon: Phone, color: "#22c55e" },
                  { label: "Avg Score", value: "93/100", icon: Zap, color: "#f59e0b" },
                ].map((stat) => (
                  <div key={stat.label} className="bg-gray-50 rounded-2xl p-3 text-center">
                    <stat.icon className="w-4 h-4 mx-auto mb-1" style={{ color: stat.color }} />
                    <p
                      className="text-base font-extrabold leading-tight"
                      style={{ color: "#242325", fontFamily: "'Plus Jakarta Sans', sans-serif" }}
                    >
                      {stat.value}
                    </p>
                    <p className="text-[10px] text-gray-400 font-medium">{stat.label}</p>
                  </div>
                ))}
              </div>

              {/* Lead cards */}
              <div className="space-y-3">
                {SAMPLE_LEADS.map((lead, i) => (
                  <motion.div
                    key={lead.name}
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.6 + i * 0.15 }}
                    className="flex items-center gap-3 p-3 rounded-xl border"
                    style={{
                      background: lead.color,
                      borderColor: lead.border + "40",
                    }}
                  >
                    {/* Avatar */}
                    <div
                      className="w-9 h-9 rounded-full flex items-center justify-center text-white text-xs font-bold flex-shrink-0"
                      style={{ background: lead.border }}
                    >
                      {lead.name.charAt(0)}
                    </div>
                    <div className="flex-1 min-w-0">
                      <p className="text-sm font-bold leading-tight" style={{ color: "#242325" }}>
                        {lead.name}
                      </p>
                      <div className="flex items-center gap-2 mt-0.5">
                        <span className="flex items-center gap-1 text-[11px] text-gray-500">
                          <MapPin className="w-3 h-3" />
                          {lead.location}
                        </span>
                        <span
                          className="text-[11px] font-semibold px-1.5 py-0.5 rounded-full"
                          style={{ background: lead.border + "20", color: lead.border }}
                        >
                          {lead.service}
                        </span>
                      </div>
                    </div>
                    <div className="text-right flex-shrink-0">
                      <p
                        className="text-sm font-extrabold"
                        style={{ color: lead.border, fontFamily: "'Plus Jakarta Sans', sans-serif" }}
                      >
                        {lead.score}
                      </p>
                      <p className="text-[10px] text-gray-400 flex items-center gap-1">
                        <Clock className="w-2.5 h-2.5" />
                        {lead.time}
                      </p>
                    </div>
                  </motion.div>
                ))}
              </div>

              {/* Footer */}
              <div className="mt-4 pt-4 border-t border-gray-100 flex items-center justify-between">
                <p className="text-xs text-gray-400">Updated in real-time</p>
                <button
                  className="text-xs font-semibold flex items-center gap-1"
                  style={{ color: "#39caff" }}
                >
                  View all leads <ArrowRight className="w-3 h-3" />
                </button>
              </div>
            </div>

            {/* Floating badge top-right */}
            <motion.div
              className="absolute -top-4 -right-4 bg-white rounded-2xl shadow-lg border border-gray-100 px-4 py-3 flex items-center gap-2"
              animate={{ y: [0, -8, 0] }}
              transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
            >
              <div
                className="w-8 h-8 rounded-xl flex items-center justify-center"
                style={{ background: "#39caff" }}
              >
                <CheckCircle2 className="w-4 h-4 text-white" />
              </div>
              <div>
                <p className="text-xs font-bold" style={{ color: "#242325" }}>
                  Lead Verified
                </p>
                <p className="text-[10px] text-gray-400">Identity confirmed</p>
              </div>
            </motion.div>

            {/* Floating badge bottom-left */}
            <motion.div
              className="absolute -bottom-4 -left-4 bg-white rounded-2xl shadow-lg border border-gray-100 px-4 py-3"
              animate={{ y: [0, 8, 0] }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut", delay: 1 }}
            >
              <p className="text-xs text-gray-400 mb-0.5">This month</p>
              <p
                className="text-xl font-extrabold"
                style={{ color: "#242325", fontFamily: "'Plus Jakarta Sans', sans-serif" }}
              >
                3,847{" "}
                <span className="text-sm font-semibold" style={{ color: "#22c55e" }}>
                  ↑ 28%
                </span>
              </p>
              <p className="text-xs text-gray-400">leads delivered</p>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
