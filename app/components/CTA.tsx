import { useState, useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Send, CheckCircle2, ArrowRight, Phone } from "lucide-react";

const industries = [
  "Debt Settlement",
  "Roofing",
  "HVAC",
  "Windows",
  "Solar",
  "Gutters",
  "Bathroom Remodeling",
  "Walk-in Tubs",
  "Pest Control",
  "Home Security",
  "Other",
];

export default function CTA() {
  const [submitted, setSubmitted] = useState(false);
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    industry: "",
    volume: "",
    message: "",
  });
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <section id="contact" ref={ref} className="py-24 relative overflow-hidden" style={{ background: "#242325" }}>
      {/* Background */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse at 50% 0%, rgba(57,202,255,0.18) 0%, transparent 60%)",
        }}
        aria-hidden="true"
      />
      <div
        className="absolute bottom-0 left-0 right-0 h-px"
        style={{ background: "linear-gradient(90deg, transparent, #39caff40, transparent)" }}
        aria-hidden="true"
      />

      <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-start">
          {/* Left: Copy */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.55 }}
          >
            <p
              className="text-sm font-semibold uppercase tracking-widest mb-4"
              style={{ color: "#39caff", fontFamily: "'Plus Jakarta Sans', sans-serif" }}
            >
              Get Started Today
            </p>
            <h2
              className="text-4xl lg:text-5xl font-extrabold text-white leading-tight mb-6"
              style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}
            >
              Ready to Fill Your{" "}
              <span className="text-gradient">Pipeline?</span>
            </h2>
            <p className="text-lg text-gray-300 leading-relaxed mb-10">
              Tell us about your business and we'll send you a free sample batch of
              leads from your target vertical. No credit card. No commitment.
              Just proof that our leads convert.
            </p>

            {/* Benefits */}
            <div className="space-y-4 mb-10">
              {[
                "Free sample leads with no credit card",
                "Response within 1 business day",
                "Flexible volume — start small or go big",
                "Dedicated account manager from day one",
              ].map((benefit) => (
                <div key={benefit} className="flex items-center gap-3">
                  <CheckCircle2 className="w-5 h-5 flex-shrink-0" style={{ color: "#39caff" }} />
                  <p className="text-base text-gray-300">{benefit}</p>
                </div>
              ))}
            </div>

            {/* Phone */}
            <a
              href="tel:+18005551234"
              className="inline-flex items-center gap-3 text-white hover:text-brand transition-colors"
            >
              <div
                className="w-10 h-10 rounded-xl flex items-center justify-center"
                style={{ background: "rgba(57,202,255,0.15)" }}
              >
                <Phone className="w-5 h-5" style={{ color: "#39caff" }} />
              </div>
              <div>
                <p className="text-xs text-gray-400 font-medium">Call us directly</p>
                <p
                  className="text-base font-bold"
                  style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}
                >
                  1-800-GENXLEADZ
                </p>
              </div>
            </a>
          </motion.div>

          {/* Right: Form */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.55, delay: 0.15 }}
          >
            <div
              className="bg-white rounded-3xl p-8 lg:p-10"
              style={{ boxShadow: "0 30px 80px rgba(0,0,0,0.3)" }}
            >
              {submitted ? (
                <div className="text-center py-12">
                  <div
                    className="w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-5"
                    style={{ background: "#f0f9ff" }}
                  >
                    <CheckCircle2 className="w-8 h-8" style={{ color: "#39caff" }} />
                  </div>
                  <h3
                    className="text-2xl font-extrabold mb-3"
                    style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", color: "#242325" }}
                  >
                    You're All Set!
                  </h3>
                  <p className="text-gray-500">
                    We'll review your request and send your free sample leads within 1
                    business day. Check your inbox!
                  </p>
                </div>
              ) : (
                <>
                  <h3
                    className="text-2xl font-extrabold mb-2"
                    style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", color: "#242325" }}
                  >
                    Request Free Sample Leads
                  </h3>
                  <p className="text-sm text-gray-400 mb-7">
                    Fill out the form and we'll send you sample leads from your target industry
                    within 24 hours.
                  </p>

                  <form onSubmit={handleSubmit} className="space-y-4">
                    <div className="grid grid-cols-2 gap-4">
                      <div>
                        <label className="block text-xs font-semibold text-gray-600 mb-1.5">
                          Full Name *
                        </label>
                        <input
                          type="text"
                          required
                          value={form.name}
                          onChange={(e) => setForm({ ...form, name: e.target.value })}
                          placeholder="John Smith"
                          className="w-full px-4 py-3 rounded-xl border border-gray-200 text-sm focus:outline-none focus:border-brand transition-colors"
                          style={{ color: "#242325" }}
                        />
                      </div>
                      <div>
                        <label className="block text-xs font-semibold text-gray-600 mb-1.5">
                          Email *
                        </label>
                        <input
                          type="email"
                          required
                          value={form.email}
                          onChange={(e) => setForm({ ...form, email: e.target.value })}
                          placeholder="john@company.com"
                          className="w-full px-4 py-3 rounded-xl border border-gray-200 text-sm focus:outline-none focus:border-brand transition-colors"
                          style={{ color: "#242325" }}
                        />
                      </div>
                    </div>

                    <div>
                      <label className="block text-xs font-semibold text-gray-600 mb-1.5">
                        Phone Number *
                      </label>
                      <input
                        type="tel"
                        required
                        value={form.phone}
                        onChange={(e) => setForm({ ...form, phone: e.target.value })}
                        placeholder="(555) 000-0000"
                        className="w-full px-4 py-3 rounded-xl border border-gray-200 text-sm focus:outline-none focus:border-brand transition-colors"
                        style={{ color: "#242325" }}
                      />
                    </div>

                    <div className="grid grid-cols-2 gap-4">
                      <div>
                        <label className="block text-xs font-semibold text-gray-600 mb-1.5">
                          Industry *
                        </label>
                        <select
                          required
                          value={form.industry}
                          onChange={(e) => setForm({ ...form, industry: e.target.value })}
                          className="w-full px-4 py-3 rounded-xl border border-gray-200 text-sm focus:outline-none focus:border-brand transition-colors bg-white"
                          style={{ color: form.industry ? "#242325" : "#9ca3af" }}
                        >
                          <option value="" disabled>
                            Select industry
                          </option>
                          {industries.map((ind) => (
                            <option key={ind} value={ind} style={{ color: "#242325" }}>
                              {ind}
                            </option>
                          ))}
                        </select>
                      </div>
                      <div>
                        <label className="block text-xs font-semibold text-gray-600 mb-1.5">
                          Monthly Volume
                        </label>
                        <select
                          value={form.volume}
                          onChange={(e) => setForm({ ...form, volume: e.target.value })}
                          className="w-full px-4 py-3 rounded-xl border border-gray-200 text-sm focus:outline-none focus:border-brand transition-colors bg-white"
                          style={{ color: form.volume ? "#242325" : "#9ca3af" }}
                        >
                          <option value="" disabled>
                            Leads/month
                          </option>
                          <option style={{ color: "#242325" }}>10–50</option>
                          <option style={{ color: "#242325" }}>50–200</option>
                          <option style={{ color: "#242325" }}>200–500</option>
                          <option style={{ color: "#242325" }}>500+</option>
                        </select>
                      </div>
                    </div>

                    <div>
                      <label className="block text-xs font-semibold text-gray-600 mb-1.5">
                        Tell us about your business
                      </label>
                      <textarea
                        value={form.message}
                        onChange={(e) => setForm({ ...form, message: e.target.value })}
                        placeholder="Target states, specific services, any special requirements..."
                        rows={3}
                        className="w-full px-4 py-3 rounded-xl border border-gray-200 text-sm focus:outline-none focus:border-brand transition-colors resize-none"
                        style={{ color: "#242325" }}
                      />
                    </div>

                    <button
                      type="submit"
                      className="w-full py-4 rounded-2xl btn-primary text-base flex items-center justify-center gap-2"
                    >
                      Send My Request
                      <Send className="w-4 h-4" />
                    </button>

                    <p className="text-center text-xs text-gray-400">
                      No spam. No credit card. Just free leads within 24 hours.
                    </p>
                  </form>
                </>
              )}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
