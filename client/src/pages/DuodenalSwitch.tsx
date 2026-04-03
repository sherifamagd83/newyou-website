import { Link } from "wouter";
import { ArrowRight, CheckCircle2, AlertTriangle, Shuffle, Star } from "lucide-react";
import ScrollFadeIn from "@/components/ScrollFadeIn";
import LeadForm from "@/components/LeadForm";
import PageHero from "@/components/PageHero";
import { img } from "@/lib/img";

export default function DuodenalSwitch() {
  return (
    <div>
      <PageHero
        image="/images/hero/hero-surgery.jpg"
        badge="Maximum Weight Loss"
        title="Duodenal Switch Surgery"
        subtitle="The most powerful bariatric procedure — combining sleeve gastrectomy with intestinal bypass for maximum weight loss and metabolic improvement."
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
                      <Shuffle className="w-7 h-7 text-navy" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-navy text-lg mb-2">Two-Part Procedure</h3>
                      <p className="text-muted-foreground leading-relaxed">
                        The duodenal switch is a two-component procedure. First, Dr. Lange reduces the size of the stomach by creating a sleeve gastrectomy — removing approximately 80% of the stomach. Second, he reroutes a significant portion of the small intestine, limiting the amount of calories and fat your body can absorb. Both components are performed laparoscopically through small incisions, meaning minimal scarring and faster recovery compared to open surgery.
                      </p>
                    </div>
                  </div>
                  <div className="grid sm:grid-cols-2 gap-4 mt-4 text-sm text-muted-foreground">
                    <div className="bg-white rounded-xl p-4 border">
                      <span className="font-semibold text-navy block mb-1">Step 1 — Restrictive</span>
                      Sleeve gastrectomy reduces stomach capacity, limiting food intake and reducing hunger hormones.
                    </div>
                    <div className="bg-white rounded-xl p-4 border">
                      <span className="font-semibold text-navy block mb-1">Step 2 — Malabsorptive</span>
                      Intestinal rerouting limits calorie and fat absorption, driving maximum metabolic improvement.
                    </div>
                  </div>
                </div>
              </ScrollFadeIn>

              {/* Benefits */}
              <ScrollFadeIn>
                <h2 className="font-serif text-2xl font-bold text-navy mb-4">Benefits</h2>
                <div className="grid sm:grid-cols-2 gap-4">
                  {[
                    "Maximum weight loss — approximately 80% excess weight loss",
                    "Strongest diabetes resolution of any bariatric procedure",
                    "Long-term sustainability with proper nutrition compliance",
                    "Addresses multiple obesity-related comorbidities simultaneously",
                    "Significant improvement in blood pressure and cholesterol",
                    "Laparoscopic — small incisions, minimal scarring",
                    "Powerful metabolic reset for patients with severe obesity",
                    "Superior outcomes vs. sleeve alone for high-BMI patients",
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
                      The duodenal switch is a powerful procedure that requires strong vitamin compliance for life. Dr. Lange will discuss all risks in detail during your consultation.
                    </p>
                  </div>
                  <ul className="space-y-1 text-sm text-amber-700 ml-8">
                    {[
                      "Lifelong vitamin and protein supplementation required",
                      "Loose stools or increased bowel movements (manageable)",
                      "Higher nutritional complexity vs. sleeve or bypass",
                      "Longer surgery time and complexity",
                      "Requires committed follow-up care",
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
                  <p className="text-lg leading-relaxed mb-4 italic">"Dr. Lange performed my duodenal switch and the results have been incredible. Lost 160 lbs in 14 months. His surgical skill is world-class. Could not recommend more highly."</p>
                  <p className="font-semibold">— Carlos G., Duodenal Switch Patient</p>
                </div>
              </ScrollFadeIn>
            </div>

            {/* Sidebar */}
            <div className="space-y-6">
              <div className="sticky top-24 space-y-6">
                <div className="bg-white rounded-2xl border shadow-sm p-6">
                  <h3 className="font-semibold text-navy mb-4">Quick Facts</h3>
                  <div className="space-y-3 text-sm">
                    <div className="flex justify-between pb-2 border-b"><span className="text-muted-foreground">Surgery Time</span><span className="font-semibold">2–3 hours</span></div>
                    <div className="flex justify-between pb-2 border-b"><span className="text-muted-foreground">Hospital Stay</span><span className="font-semibold">2–3 nights</span></div>
                    <div className="flex justify-between pb-2 border-b"><span className="text-muted-foreground">Recovery</span><span className="font-semibold">2–4 weeks</span></div>
                    <div className="flex justify-between pb-2 border-b"><span className="text-muted-foreground">Weight Loss</span><span className="font-semibold text-magenta">~80% EWL</span></div>
                    <div className="flex justify-between"><span className="text-muted-foreground">Insurance</span><span className="font-semibold">Case by case</span></div>
                  </div>
                </div>
                <LeadForm variant="sidebar" title="See If You Qualify" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Is This Right For You + Lead Form */}
      <section className="section-gradient py-20" data-testid="section-ds-lead-form">
        <div className="max-w-2xl mx-auto px-4">
          <ScrollFadeIn className="text-center mb-10">
            <h2 className="font-serif text-3xl font-bold text-navy mb-4">Is This Right for You?</h2>
            <p className="text-muted-foreground text-lg">
              The duodenal switch is typically recommended for patients with higher BMI or significant metabolic disease. Dr. Lange will help you determine the best procedure for your individual goals and health profile.
            </p>
          </ScrollFadeIn>
          <ScrollFadeIn>
            <LeadForm variant="full" title="" data-testid="form-ds-lead" />
          </ScrollFadeIn>
        </div>
      </section>
    </div>
  );
}
