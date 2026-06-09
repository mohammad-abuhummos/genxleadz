import { motion } from "framer-motion";
import { ShieldCheck, Users, Globe, Award } from "lucide-react";

const badges = [
  { icon: ShieldCheck, label: "TCPA Compliant", sub: "All leads opt-in verified" },
  { icon: Users, label: "500+ Clients", sub: "Active nationwide accounts" },
  { icon: Globe, label: "All 50 States", sub: "National coverage available" },
  { icon: Award, label: "Top Rated", sub: "4.9 / 5 avg client score" },
];

export default function TrustStrip() {
  return (
    <section className="py-14 border-b border-gray-100 bg-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
          {badges.map((badge, i) => (
            <motion.div
              key={badge.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ delay: i * 0.08, duration: 0.5 }}
              className="flex items-center gap-4 p-5 rounded-2xl border border-gray-100 bg-white hover:border-blue-100 transition-colors"
            >
              <div
                className="w-11 h-11 rounded-xl flex items-center justify-center flex-shrink-0"
                style={{ background: "#f0f9ff" }}
              >
                <badge.icon className="w-5 h-5" style={{ color: "#39caff" }} />
              </div>
              <div>
                <p
                  className="text-sm font-extrabold leading-tight"
                  style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", color: "#242325" }}
                >
                  {badge.label}
                </p>
                <p className="text-xs text-gray-400 mt-0.5">{badge.sub}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
