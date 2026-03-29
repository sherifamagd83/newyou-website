import { useState } from "react";
import { Link } from "wouter";
import { ArrowRight, CheckCircle2, Shield, CreditCard, DollarSign, Upload, FileCheck } from "lucide-react";
import ScrollFadeIn from "@/components/ScrollFadeIn";

export default function Insurance() {
  return (
    <div>
      <section className="hero-gradient py-16 md:py-24 text-center relative overflow-hidden">
        <div className="absolute inset-0"><div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-gold/15 rounded-full blur-3xl" /></div>
        <div className="max-w-3xl mx-auto px-4 relative">
          <h1 className="font-serif text-4xl md:text-5xl font-bold text-white mb-4">Insurance & Financing</h1>
          <p className="text-white/80 text-lg">We make weight loss surgery accessible. Free insurance verification, financing options, and transparent pricing.</p>
        </div>
      </section>

      <InsuranceVerificationForm />

      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <ScrollFadeIn className="text-center mb-12">
            <h2 className="font-serif text-3xl font-bold text-navy mb-4">Insurance We Work With</h2>
            <p className="text-muted-foreground">We accept and work with all major insurance carriers. Our team handles pre-authorization for you.</p>
          </ScrollFadeIn>
          <ScrollFadeIn>
            <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-4">
              {["Blue Cross Blue Shield", "UnitedHealthcare", "Aetna", "Cigna", "Humana", "Medicare", "Medicaid", "Anthem", "Centene", "HealthSpring", "Ambetter", "Tricare", "WellCare", "Coventry", "And Many More..."].map((carrier) => (
                <div key={carrier} className="bg-gray-50 rounded-xl p-4 text-center text-sm font-medium text-navy border hover:border-magenta/30 transition-colors">
                  {carrier}
                </div>
              ))}
            </div>
            <p className="text-center text-sm text-muted-foreground mt-6">Don't see your insurance? Contact us — we likely work with your carrier.</p>
          </ScrollFadeIn>
        </div>
      </section>

      <section className="section-gradient py-20">
        <div className="max-w-7xl mx-auto px-4">
          <ScrollFadeIn className="text-center mb-12">
            <h2 className="font-serif text-3xl font-bold text-navy mb-4">Financing Options</h2>
            <p className="text-muted-foreground">Don't let cost stand in the way of your health. We offer flexible payment options.</p>
          </ScrollFadeIn>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              { icon: CreditCard, title: "CareCredit", desc: "Our preferred financing partner. Plans as low as $300/month with promotional 0% APR options available.", highlight: "Plans from $300/mo" },
              { icon: DollarSign, title: "Self-Pay Pricing", desc: "Competitive, transparent self-pay rates for patients without insurance coverage or who prefer cash pricing.", highlight: "Transparent pricing" },
              { icon: FileCheck, title: "Payment Plans", desc: "We work directly with patients to create customized payment plans that fit your budget.", highlight: "Flexible terms" },
            ].map(({ icon: Icon, title, desc, highlight }, i) => (
              <ScrollFadeIn key={title} delay={i * 100}>
                <div className="bg-white rounded-2xl border shadow-sm p-6 card-hover">
                  <div className="w-12 h-12 rounded-xl bg-gold/10 flex items-center justify-center mb-4">
                    <Icon className="w-6 h-6 text-gold" />
                  </div>
                  <h3 className="font-semibold text-navy text-lg mb-1">{title}</h3>
                  <span className="text-magenta text-sm font-medium">{highlight}</span>
                  <p className="text-muted-foreground text-sm mt-3">{desc}</p>
                </div>
              </ScrollFadeIn>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4">
          <ScrollFadeIn className="text-center mb-12">
            <h2 className="font-serif text-3xl font-bold text-navy mb-4">Self-Pay Pricing Guide</h2>
            <p className="text-muted-foreground">Transparent pricing for patients who prefer cash-pay or whose insurance doesn't cover bariatric surgery.</p>
          </ScrollFadeIn>
          <ScrollFadeIn>
            <div className="bg-white rounded-2xl border shadow-sm overflow-hidden">
              <table className="w-full text-sm">
                <thead><tr className="bg-navy text-white">
                  <th className="text-left px-6 py-3">Procedure</th>
                  <th className="text-right px-6 py-3">Self-Pay Price</th>
                  <th className="text-right px-6 py-3 hidden sm:table-cell">CareCredit/mo*</th>
                </tr></thead>
                <tbody>
                  {[
                    ["Gastric Sleeve", "$12,500 - $16,000", "~$300"],
                    ["Gastric Bypass", "$15,000 - $20,000", "~$375"],
                    ["Duodenal Switch", "$18,000 - $25,000", "~$450"],
                    ["Revision Surgery", "$15,000 - $25,000", "Varies"],
                    ["ORBERA® Balloon", "$6,500 - $8,500", "~$175"],
                    ["GLP-1 Program", "$249 - $349/month", "N/A"],
                  ].map(([proc, price, monthly], i) => (
                    <tr key={proc} className={i % 2 === 0 ? "bg-white" : "bg-gray-50"}>
                      <td className="px-6 py-3 font-medium text-navy">{proc}</td>
                      <td className="px-6 py-3 text-right font-semibold">{price}</td>
                      <td className="px-6 py-3 text-right text-muted-foreground hidden sm:table-cell">{monthly}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
              <p className="px-6 py-3 text-xs text-muted-foreground bg-gray-50 border-t">
                *Estimated monthly payments based on 60-month CareCredit plan. Actual terms vary. Prices include surgeon fees, facility fees, and anesthesia. Individual pricing may vary based on medical complexity.
              </p>
            </div>
          </ScrollFadeIn>
        </div>
      </section>
    </div>
  );
}

function InsuranceVerificationForm() {
  const [submitted, setSubmitted] = useState(false);

  if (submitted) {
    return (
      <section className="py-16 bg-green-50">
        <div className="max-w-2xl mx-auto px-4 text-center">
          <CheckCircle2 className="w-16 h-16 text-green-500 mx-auto mb-4" />
          <h2 className="font-serif text-2xl font-bold text-navy mb-3">Verification Request Submitted!</h2>
          <p className="text-muted-foreground">Our team will verify your insurance benefits and contact you within 1-2 business days with your coverage details.</p>
        </div>
      </section>
    );
  }

  return (
    <section className="py-16 bg-magenta/5">
      <div className="max-w-3xl mx-auto px-4">
        <ScrollFadeIn>
          <div className="bg-white rounded-2xl border shadow-lg p-8">
            <div className="text-center mb-8">
              <div className="w-14 h-14 rounded-xl bg-magenta/10 flex items-center justify-center mx-auto mb-4">
                <Shield className="w-7 h-7 text-magenta" />
              </div>
              <h2 className="font-serif text-2xl font-bold text-navy mb-2">Free Insurance Verification</h2>
              <p className="text-muted-foreground text-sm">Submit your insurance info and we'll check your bariatric surgery benefits at no cost.</p>
            </div>
            <form onSubmit={(e) => { e.preventDefault(); setSubmitted(true); }} className="space-y-4" data-testid="form-insurance-verification">
              <div className="grid sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium mb-1.5">Full Name *</label>
                  <input type="text" required className="w-full px-4 py-3 rounded-xl border bg-gray-50 outline-none focus:ring-2 focus:ring-magenta/20 focus:border-magenta" data-testid="input-ins-name" />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-1.5">Phone *</label>
                  <input type="tel" required className="w-full px-4 py-3 rounded-xl border bg-gray-50 outline-none focus:ring-2 focus:ring-magenta/20 focus:border-magenta" data-testid="input-ins-phone" />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-1.5">Email *</label>
                  <input type="email" required className="w-full px-4 py-3 rounded-xl border bg-gray-50 outline-none focus:ring-2 focus:ring-magenta/20 focus:border-magenta" data-testid="input-ins-email" />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-1.5">Insurance Provider *</label>
                  <input type="text" required placeholder="e.g., Blue Cross" className="w-full px-4 py-3 rounded-xl border bg-gray-50 outline-none focus:ring-2 focus:ring-magenta/20 focus:border-magenta" data-testid="input-ins-provider" />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-1.5">Member ID</label>
                  <input type="text" className="w-full px-4 py-3 rounded-xl border bg-gray-50 outline-none focus:ring-2 focus:ring-magenta/20 focus:border-magenta" data-testid="input-ins-memberid" />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-1.5">Group Number</label>
                  <input type="text" className="w-full px-4 py-3 rounded-xl border bg-gray-50 outline-none focus:ring-2 focus:ring-magenta/20 focus:border-magenta" data-testid="input-ins-group" />
                </div>
              </div>
              <div>
                <label className="block text-sm font-medium mb-1.5">Upload Insurance Card (Front & Back)</label>
                <div className="border-2 border-dashed rounded-xl p-6 text-center hover:border-magenta/40 transition-colors cursor-pointer">
                  <Upload className="w-8 h-8 text-muted-foreground mx-auto mb-2" />
                  <p className="text-sm text-muted-foreground">Click or drag to upload photos of your insurance card</p>
                  <p className="text-xs text-muted-foreground mt-1">JPG, PNG, or PDF. Max 10MB each.</p>
                  <input type="file" multiple accept="image/*,.pdf" className="hidden" />
                </div>
              </div>
              <button type="submit"
                className="w-full bg-magenta hover:bg-magenta-light text-white font-semibold py-4 rounded-xl transition-all flex items-center justify-center gap-2 text-lg"
                data-testid="button-submit-insurance">
                Check My Coverage <ArrowRight className="w-5 h-5" />
              </button>
            </form>
          </div>
        </ScrollFadeIn>
      </div>
    </section>
  );
}
