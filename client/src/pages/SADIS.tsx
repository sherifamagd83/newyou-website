import { Link } from "wouter";
import { ArrowRight, CheckCircle2, AlertTriangle, Zap, Star } from "lucide-react";
import ScrollFadeIn from "@/components/ScrollFadeIn";
import LeadForm from "@/components/LeadForm";
import PageHero from "@/components/PageHero";
import { img } from "@/lib/img";

export default function SADIS() {
  return (
    <div>
      <PageHero
        image="/images/hero/hero-surgery.jpg"
        badge="Advanced Procedure"
        title="SADI-S Surgery"
        subtitle="Single Anastomosis Duodeno-Ileal Bypass with Sleeve Gastrectomy — a simplified, highly effective alternative to the traditional duodenal switch."
      />

      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid lg:grid-cols-3 gap-12">
            <div className="lg:col-span-2 space-y-12">

              {/* How It Works */}
              <ScrollFadeIn>
                <h2 className="font-serif text-2xl font-bold text-navy mb-4">How It Works</h2>
                <div className="bg-gray-50 rounded-2xl p-8">
                  <div className="flex items-start gap-4 mb-4">
                    <div className="w-14 h-14 rounded-xl bg-navy/10 flex items-center justify-center shrink-0">
                      <Zap className="w-7 h-7 text-navy" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-navy text-lg mb-2">Sleeve + Single-Loop Bypass</h3>
                      <p className="text-muted-foreground leading-relaxed">
                        SADI-S combines a sleeve gastrectomy with a single-loop intestinal bypass. Unlike the traditional duodenal switch — which requires two intestinal connections (anastomoses) — SADI-S uses only one, making it a technically simpler procedure with fewer potential complications while delivering comparable weight loss results. All performed laparoscopically through small incisions.
                      </p>
                    </div>
                  </div>
                  <div className="grid sm:grid-cols-2 gap-4 mt-4 text-sm text-muted-foreground">
                    <div className="bg-white rounded-xl p-4 border">
                      <span className="font-semibold text-navy block mb-1">Sleeve Component</span>
                      Creates a smaller stomach, reducing food intake and lowering hunger hormone production.
                    </div>
                    <div className="bg-white rounded-xl p-4 border">
                      <span className="font-semibold text-navy block mb-1">Single Anastomosis Bypass</span>
                      One intestinal connection reroutes digestion to limit calorie and fat absorption effectively.
                    </div>
                  </div>
                </div>
              </ScrollFadeIn>

              {/* Benefits */}
              <ScrollFadeIn>
                <h2 className="font-serif text-2xl font-bold text-navy mb-4">Benefits</h2>
                <div className="grid sm:grid-cols-2 gap-4">
                  {[
                    "Nearly 100% excess weight loss in clinical studies",
                    "Powerful metabolic improvement — diabetes, blood pressure, cholesterol",
                    "Simpler than traditional duodenal switch — one anastomosis (connection)",
                    "Lower risk profile compared to full DS while maintaining similar results",
                    "Laparoscopic — small incisions, minimal scarring",
                    "Excellent long-term weight loss maintenance",
                    "Strong improvement in sleep apnea and joint pain",
                    "Shorter operating time vs. traditional duodenal switch",
                  ].map((benefit) => (
                    <div key={benefit} className="flex items-start gap-2 p-3 bg-green-50 rounded-xl">
                      <CheckCircle2 className="w-5 h-5 text-green-500 mt-0.5 shrink-0" />
                      <span className="text-sm">{benefit}</span>
                    </div>
                  ))}
                </div>
              </ScrollFadeIn>

              {/* Risks & Considerations */}
              <ScrollFadeIn>
                <h2 className="font-serif text-2xl font-bold text-navy mb-4">Risks & Considerations</h2>
                <div className="bg-amber-50 rounded-2xl p-6 border border-amber-100">
                  <div className="flex items-start gap-3 mb-3">
                    <AlertTriangle className="w-5 h-5 text-amber-500 mt-0.5 shrink-0" />
                    <p className="text-sm text-amber-800">
                      Like all malabsorptive procedures, SADI-S requires lifetime vitamin and protein supplementation. Dr. Lange will review all risks and requirements with you during your consultation.
                    </p>
                  </div>
                  <ul className="space-y-1 text-sm text-amber-700 ml-8">
                    {[
                      "Lifelong vitamin and protein supplementation required",
                      "Nutritional monitoring through regular lab work",
                      "Possible changes in bowel habits",
                      "Not recommended for patients unable to commit to follow-up",
                    ].map((r) => (
                      <li key={r}>• {r}</li>
                    ))}
                  </ul>
                </div>
              </ScrollFadeIn>

              {/* Testimonial */}
              <ScrollFadeIn>
                <div className="bg-navy rounded-2xl p-8 text-white">
                  <div className="flex gap-1 mb-4">{[1,2,3,4,5].map(s => <Star key={s} className="w-5 h-5 fill-yellow-500 text-yellow-500" />)}</div>
                  <p className="text-lg leading-relaxed mb-4 italic">"I went from barely walking to running 5Ks. Dr. Lange's expertise and the entire New You team made this the best decision of my life. This is my new life."</p>
                  <p className="font-semibold">— Carlos G., Bariatric Surgery Patient</p>
                </div>
              </ScrollFadeIn>
            </div>

            {/* Sidebar */}
            <div className="space-y-6">
              <div className="sticky top-24 space-y-6">
                <div className="bg-white rounded-2xl border shadow-sm p-6">
                  <h3 className="font-semibold text-navy mb-4">Quick Facts</h3>
                  <div className="space-y-3 text-sm">
                    <div className="flex justify-between pb-2 border-b"><span className="text-muted-foreground">Surgery Time</span><span className="font-semibold">1.5–2.5 hours</span></div>
                    <div className="flex justify-between pb-2 border-b"><span className="text-muted-foreground">Hospital Stay</span><span className="font-semibold">2–3 nights</span></div>
                    <div className="flex justify-between pb-2 border-b"><span className="text-muted-foreground">Recovery</span><span className="font-semibold">1–4 weeks</span></div>
                    <div className="flex justify-between pb-2 border-b"><span className="text-muted-foreground">Weight Loss</span><span className="font-semibold text-magenta">Up to 100% EWL</span></div>
                    <div className="flex justify-between"><span className="text-muted-foreground">Insurance</span><span className="font-semibold">Case by case</span></div>
                  </div>
                </div>
                <LeadForm variant="sidebar" title="See If You Qualify" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Lead Form Section */}
      <section className="section-gradient py-20" data-testid="section-sadis-lead-form">
        <div className="max-w-2xl mx-auto px-4">
          <ScrollFadeIn className="text-center mb-10">
            <h2 className="font-serif text-3xl font-bold text-navy mb-4">Is SADI-S Right for You?</h2>
            <p className="text-muted-foreground text-lg">
              Dr. Lange will evaluate your BMI, health profile, and goals to determine if SADI-S is the optimal procedure for your transformation. Schedule a free consultation to find out.
            </p>
          </ScrollFadeIn>
          <ScrollFadeIn>
            <LeadForm variant="full" title="" data-testid="form-sadis-lead" />
          </ScrollFadeIn>
        </div>
      </section>
    </div>
  );
}
