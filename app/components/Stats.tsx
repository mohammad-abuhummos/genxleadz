import { useEffect, useRef, useState } from "react";
import { motion, useInView } from "framer-motion";

const stats = [
  { value: 50000, suffix: "+", label: "Leads Delivered", description: "Across all verticals" },
  { value: 10, suffix: "+", label: "Industries Served", description: "And growing" },
  { value: 94, suffix: "%", label: "Contact Rate", description: "Verified & reachable" },
  { value: 24, suffix: "hr", label: "Delivery Speed", description: "Real-time or same day" },
];

function CountUp({ target, suffix, duration = 2 }: { target: number; suffix: string; duration?: number }) {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, margin: "-50px" });

  useEffect(() => {
    if (!inView) return;
    let start = 0;
    const step = target / (duration * 60);
    const timer = setInterval(() => {
      start += step;
      if (start >= target) {
        setCount(target);
        clearInterval(timer);
      } else {
        setCount(Math.floor(start));
      }
    }, 1000 / 60);
    return () => clearInterval(timer);
  }, [inView, target, duration]);

  return (
    <span ref={ref}>
      {count.toLocaleString()}
      {suffix}
    </span>
  );
}

export default function Stats() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section
      ref={ref}
      className="py-20 relative overflow-hidden"
      style={{ background: "#242325" }}
    >
      {/* Background decoration */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse at 50% 100%, rgba(57,202,255,0.12) 0%, transparent 60%)",
        }}
        aria-hidden="true"
      />

      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <p
            className="text-sm font-semibold uppercase tracking-widest mb-3"
            style={{ color: "#39caff", fontFamily: "'Plus Jakarta Sans', sans-serif" }}
          >
            By The Numbers
          </p>
          <h2
            className="text-3xl lg:text-5xl font-extrabold text-white"
            style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}
          >
            Results That Speak for Themselves
          </h2>
        </motion.div>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
          {stats.map((stat, i) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: i * 0.1, duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
              className="text-center p-8 rounded-3xl border"
              style={{
                background: "rgba(255,255,255,0.04)",
                borderColor: "rgba(57,202,255,0.15)",
              }}
            >
              <p
                className="text-5xl lg:text-6xl font-extrabold mb-2"
                style={{
                  color: "#39caff",
                  fontFamily: "'Plus Jakarta Sans', sans-serif",
                  letterSpacing: "-0.02em",
                }}
              >
                <CountUp target={stat.value} suffix={stat.suffix} />
              </p>
              <p
                className="text-lg font-bold text-white mb-1"
                style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}
              >
                {stat.label}
              </p>
              <p className="text-sm text-gray-400">{stat.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
