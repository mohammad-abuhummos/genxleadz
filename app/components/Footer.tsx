import { Mail, Phone, MapPin, ArrowUpRight } from "lucide-react";

function LinkedInIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor">
      <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
      <rect x="2" y="9" width="4" height="12" />
      <circle cx="4" cy="4" r="2" />
    </svg>
  );
}

function XIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor">
      <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-4.714-6.231-5.401 6.231H2.746l7.73-8.835L1.254 2.25H8.08l4.253 5.622zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
    </svg>
  );
}

function FacebookIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor">
      <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
    </svg>
  );
}

const footerLinks = {
  Services: [
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
  ],
  Company: [
    "About Us",
    "How It Works",
    "Pricing",
    "Case Studies",
    "Blog",
    "Careers",
  ],
  Support: [
    "Help Center",
    "Contact Us",
    "Client Portal",
    "Lead Quality Policy",
    "TCPA Compliance",
    "Privacy Policy",
    "Terms of Service",
  ],
};

export default function Footer() {
  return (
    <footer style={{ background: "#1a191a" }}>
      {/* Top gradient border */}
      <div
        className="h-px"
        style={{
          background:
            "linear-gradient(90deg, transparent, #39caff40, #39caff, #39caff40, transparent)",
        }}
      />

      <div className="max-w-7xl mx-auto px-6 lg:px-8 pt-16 pb-10">
        <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-10 mb-14">
          {/* Brand column */}
          <div className="lg:col-span-2">
            <img src="/logo.svg" alt="GenXLeadz" className="h-10 w-auto mb-5" />
            <p className="text-sm text-gray-400 leading-relaxed mb-6 max-w-sm">
              GenXLeadz is a premium lead generation company serving 10+ home services
              and financial verticals across the United States. Exclusive leads, real-time
              delivery, and transparent performance.
            </p>

            {/* Contact info */}
            <div className="space-y-3 mb-6">
              <a
                href="tel:+18005551234"
                className="flex items-center gap-3 text-sm text-gray-400 hover:text-white transition-colors"
              >
                <Phone className="w-4 h-4 flex-shrink-0" style={{ color: "#39caff" }} />
                1-800-GENXLEADZ
              </a>
              <a
                href="mailto:leads@genxleadz.com"
                className="flex items-center gap-3 text-sm text-gray-400 hover:text-white transition-colors"
              >
                <Mail className="w-4 h-4 flex-shrink-0" style={{ color: "#39caff" }} />
                leads@genxleadz.com
              </a>
              <div className="flex items-center gap-3 text-sm text-gray-400">
                <MapPin className="w-4 h-4 flex-shrink-0" style={{ color: "#39caff" }} />
                United States, Nationwide
              </div>
            </div>

            {/* Social */}
            <div className="flex items-center gap-3">
              {[
                { icon: LinkedInIcon, label: "LinkedIn" },
                { icon: XIcon, label: "X / Twitter" },
                { icon: FacebookIcon, label: "Facebook" },
              ].map(({ icon: Icon, label }) => (
                <a
                  key={label}
                  href="#"
                  aria-label={label}
                  className="w-9 h-9 rounded-xl flex items-center justify-center transition-all duration-200 hover:scale-110"
                  style={{
                    background: "rgba(57,202,255,0.1)",
                    border: "1px solid rgba(57,202,255,0.15)",
                  }}
                >
                  <Icon className="w-4 h-4" style={{ color: "#39caff" }} />
                </a>
              ))}
            </div>
          </div>

          {/* Link columns */}
          {Object.entries(footerLinks).map(([category, links]) => (
            <div key={category}>
              <h4
                className="text-xs font-bold uppercase tracking-widest text-white mb-5"
                style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}
              >
                {category}
              </h4>
              <ul className="space-y-3">
                {links.map((link) => (
                  <li key={link}>
                    <a
                      href="#"
                      className="text-sm text-gray-400 hover:text-white transition-colors flex items-center gap-1 group"
                    >
                      {link}
                      <ArrowUpRight className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity" />
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom bar */}
        <div
          className="pt-8 border-t flex flex-col sm:flex-row items-center justify-between gap-4"
          style={{ borderColor: "rgba(255,255,255,0.06)" }}
        >
          <p className="text-xs text-gray-500">
            © {new Date().getFullYear()} GenXLeadz LLC. All rights reserved. All leads
            generated through TCPA-compliant opt-in processes.
          </p>
          <div className="flex items-center gap-5">
            <a href="#" className="text-xs text-gray-500 hover:text-gray-300 transition-colors">
              Privacy Policy
            </a>
            <a href="#" className="text-xs text-gray-500 hover:text-gray-300 transition-colors">
              Terms of Service
            </a>
            <a href="#" className="text-xs text-gray-500 hover:text-gray-300 transition-colors">
              TCPA Compliance
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
