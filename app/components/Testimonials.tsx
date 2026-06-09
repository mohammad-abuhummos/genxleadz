import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Quote, Star } from "lucide-react";

const testimonials = [
  {
    name: "Marcus T.",
    role: "Owner, SunPath Solar",
    location: "Phoenix, AZ",
    industry: "Solar",
    accentColor: "#f59e0b",
    quote:
      "GenXLeadz transformed our pipeline. The solar leads they send us are pre-qualified homeowners with real intent. Our close rate went from 12% to 31% in 90 days. This is the only lead vendor we use now.",
    result: "31% close rate",
    avatar: "M",
  },
  {
    name: "Sandra K.",
    role: "VP Sales, ClearDebt Financial",
    location: "Dallas, TX",
    industry: "Debt Settlement",
    accentColor: "#39caff",
    quote:
      "We'd tried every lead aggregator out there and the quality was garbage. GenXLeadz actually delivers people who pick up the phone, confirm their situation, and are ready to talk. Night and day difference.",
    result: "3× contact rate",
    avatar: "S",
  },
  {
    name: "Derek P.",
    role: "GM, TopLine Roofing",
    location: "Houston, TX",
    industry: "Roofing",
    accentColor: "#475569",
    quote:
      "Storm season used to be chaos — chasing leads from 10 vendors, tons of duplicates. Now we flip the switch with GenXLeadz and get exclusive local homeowners looking for roof replacements. Revenue doubled last season.",
    result: "Revenue doubled",
    avatar: "D",
  },
  {
    name: "Angela R.",
    role: "Director, ComfortAir HVAC",
    location: "Atlanta, GA",
    industry: "HVAC",
    accentColor: "#f97316",
    quote:
      "Their geo-targeting is insane. I give them a 15-mile radius around our shop and every lead is genuinely local, has confirmed the service need, and most of them book a quote on the first call. We scaled to 40 leads/week.",
    result: "40 leads/week",
    avatar: "A",
  },
  {
    name: "James L.",
    role: "Owner, EcoGuard Pest",
    location: "Orlando, FL",
    industry: "Pest Control",
    accentColor: "#65a30d",
    quote:
      "Running a pest control business means competing with big franchise brands. GenXLeadz gets me in front of homeowners before they call anyone else. The ROI on their leads is easily 6:1 for us.",
    result: "6:1 ROI",
    avatar: "J",
  },
  {
    name: "Tina W.",
    role: "Owner, SecureHome Systems",
    location: "Chicago, IL",
    industry: "Home Security",
    accentColor: "#f43f5e",
    quote:
      "I was skeptical at first — I've been burned by lead companies before. But GenXLeadz offered a free sample batch and every single lead was a real homeowner. We've been on auto-purchase ever since. Highly recommended.",
    result: "100% real contacts",
    avatar: "T",
  },
];

export default function Testimonials() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section id="testimonials" className="py-24" style={{ background: "#f8fafc" }}>
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Header */}
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <p
            className="text-sm font-semibold uppercase tracking-widest mb-4"
            style={{ color: "#39caff", fontFamily: "'Plus Jakarta Sans', sans-serif" }}
          >
            Client Testimonials
          </p>
          <h2
            className="text-4xl lg:text-5xl font-extrabold mb-5"
            style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", color: "#242325" }}
          >
            Real Companies,{" "}
            <span className="text-gradient">Real Results</span>
          </h2>
          <p className="text-lg text-gray-500 max-w-xl mx-auto">
            Join hundreds of sales teams across the US who've replaced unreliable lead
            sources with GenXLeadz's exclusive pipeline.
          </p>
        </motion.div>

        {/* Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {testimonials.map((t, i) => (
            <motion.div
              key={t.name}
              initial={{ opacity: 0, y: 35 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ delay: (i % 3) * 0.1, duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
              className="bg-white rounded-3xl border border-gray-100 p-7 flex flex-col gap-5 card-hover"
            >
              {/* Quote icon */}
              <Quote className="w-8 h-8" style={{ color: t.accentColor, opacity: 0.4 }} />

              {/* Stars */}
              <div className="flex gap-1">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    className="w-4 h-4 fill-current"
                    style={{ color: "#f59e0b" }}
                  />
                ))}
              </div>

              {/* Quote */}
              <p className="text-sm text-gray-600 leading-relaxed flex-1">&ldquo;{t.quote}&rdquo;</p>

              {/* Result badge */}
              <div
                className="inline-flex self-start items-center gap-2 px-3 py-1.5 rounded-full text-xs font-bold"
                style={{ background: t.accentColor + "15", color: t.accentColor }}
              >
                <span className="w-1.5 h-1.5 rounded-full" style={{ background: t.accentColor }} />
                {t.result}
              </div>

              {/* Divider */}
              <div className="border-t border-gray-100" />

              {/* Author */}
              <div className="flex items-center gap-3">
                <div
                  className="w-10 h-10 rounded-full flex items-center justify-center text-white font-bold text-sm flex-shrink-0"
                  style={{ background: t.accentColor }}
                >
                  {t.avatar}
                </div>
                <div>
                  <p
                    className="text-sm font-extrabold"
                    style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", color: "#242325" }}
                  >
                    {t.name}
                  </p>
                  <p className="text-xs text-gray-400">
                    {t.role} · {t.location}
                  </p>
                </div>
                <div className="ml-auto">
                  <span
                    className="text-xs font-semibold px-2 py-1 rounded-lg"
                    style={{ background: t.accentColor + "15", color: t.accentColor }}
                  >
                    {t.industry}
                  </span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
