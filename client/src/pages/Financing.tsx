import { useEffect } from "react";
import { Link } from "wouter";
import { DollarSign, CheckCircle2, CreditCard, Shield, Clock, ArrowRight } from "lucide-react";
import PageHero from "@/components/PageHero";
import ScrollFadeIn from "@/components/ScrollFadeIn";

export default function Financing() {
  useEffect(() => {
    // Load Cherry widget script
    const script = document.createElement("script");
    script.src = "https://files.withcherry.com/widgets/widget.js";
    script.async = true;
    script.id = "_hw";
    document.body.appendChild(script);

    script.onload = () => {
      if (typeof (window as any)._hw === "function") {
        (window as any)._hw("init", {
          debug: false,
          variables: {
            slug: "new-you-surgical-weight-loss",
            name: "NEW YOU SURGICAL WEIGHT LOSS",
            images: [37],
            customLogo: "",
            defaultPurchaseAmount: 5000,
            customImage: "",
            imageCategory: "plastics",
            language: "en",
          },
          styles: {
            primaryColor: "#936C56",
            secondaryColor: "#936C5610",
            fontFamily: "Montserrat",
            headerFontFamily: "Montserrat",
          },
        }, ["hero", "calculator", "howitworks", "faq"]);
      }
    };

    return () => {
      const el = document.getElementById("_hw");
      if (el) el.remove();
    };
  }, []);

  return (
    <div>
      <PageHero
        image="/images/hero/hero-surgery.jpg"
        badge="Flexible Payment Plans"
        title="Patient Financing"
        subtitle="Affordable payment plans with no hard credit checks. Get pre-approved in minutes."
      />

      {/* Cherry as Primary */}
      <section className="py-6 bg-gradient-to-r from-[#936C56]/10 to-[#936C56]/5">
        <div className="max-w-4xl mx-auto px-4 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <CreditCard className="w-8 h-8 text-[#936C56]" />
            <div>
              <p className="font-semibold text-navy">Cherry Patient Financing — Our Preferred Partner</p>
              <p className="text-sm text-muted-foreground">Treat now, pay later. No hard credit checks. Plans starting at 0% APR.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Cherry Widget Sections */}
      <section className="py-8 bg-white">
        <div className="max-w-5xl mx-auto px-4">
          <div id="hero"></div>
          <div id="calculator"></div>
          <div id="howitworks"></div>
          <div id="faq"></div>
        </div>
      </section>

      {/* Other Financing Options — Below Cherry */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4">
          <ScrollFadeIn className="text-center mb-10">
            <h2 className="font-serif text-2xl font-bold text-navy mb-3">Additional Financing Options</h2>
            <p className="text-muted-foreground">We also accept these financing options for qualifying patients.</p>
          </ScrollFadeIn>

          <div className="grid sm:grid-cols-2 gap-6">
            <ScrollFadeIn>
              <div className="bg-white rounded-2xl border border-gray-100 p-6 shadow-sm">
                <h3 className="font-semibold text-navy mb-2">CareCredit</h3>
                <p className="text-sm text-muted-foreground mb-4">Healthcare credit card accepted by providers nationwide. Special financing options available for qualifying purchases.</p>
                <a href="https://www.carecredit.com/" target="_blank" rel="noopener noreferrer" className="text-sm font-semibold text-teal hover:underline">Learn More →</a>
              </div>
            </ScrollFadeIn>
            <ScrollFadeIn delay={100}>
              <div className="bg-white rounded-2xl border border-gray-100 p-6 shadow-sm">
                <h3 className="font-semibold text-navy mb-2">Insurance Coverage</h3>
                <p className="text-sm text-muted-foreground mb-4">Most bariatric procedures are covered by insurance when medically necessary. We handle the authorization process for you.</p>
                <Link href="/insurance" className="text-sm font-semibold text-teal hover:underline">Check Your Coverage →</Link>
              </div>
            </ScrollFadeIn>
          </div>
        </div>
      </section>
    </div>
  );
}
