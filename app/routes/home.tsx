import type { Route } from "./+types/home";
import Navbar from "~/components/Navbar";
import Hero from "~/components/Hero";
import Ticker from "~/components/Ticker";
import TrustStrip from "~/components/TrustStrip";
import Stats from "~/components/Stats";
import Services from "~/components/Services";
import Process from "~/components/Process";
import WhyUs from "~/components/WhyUs";
import Testimonials from "~/components/Testimonials";
import CTA from "~/components/CTA";
import Footer from "~/components/Footer";

export function meta({}: Route.MetaArgs) {
  return [
    {
      title:
        "GenXLeadz — Premium Lead Generation for Home Services & Financial Verticals",
    },
    {
      name: "description",
      content:
        "GenXLeadz delivers exclusive, real-time leads for Debt Settlement, Roofing, HVAC, Solar, Windows, Gutters, Bathroom Remodeling, Walk-in Tubs, Pest Control, and Home Security. 100% exclusive. Verified. Live.",
    },
    { name: "theme-color", content: "#ffffff" },
  ];
}

export default function Home() {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <Hero />
      <Ticker />
      <TrustStrip />
      <Stats />
      <Services />
      <Process />
      <WhyUs />
      <Testimonials />
      <CTA />
      <Footer />
    </div>
  );
}
