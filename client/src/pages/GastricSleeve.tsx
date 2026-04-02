import { Link } from "wouter";
import { ArrowRight, CheckCircle2, AlertTriangle, Clock, TrendingDown, Shield, Star } from "lucide-react";
import ScrollFadeIn from "@/components/ScrollFadeIn";
import LeadForm from "@/components/LeadForm";
import PageHero from "@/components/PageHero";
import { img } from "@/lib/img";

export default function GastricSleeve() {
  return (
    <div>
      <PageHero image="/images/hero/hero-surgery.jpg" badge="Most Popular Procedure" title="Gastric Sleeve Surgery" subtitle="Also known as Vertical Sleeve Gastrectomy (VSG). The #1 bariatric procedure worldwide, offering dramatic weight loss with a proven safety profile." />

      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid lg:grid-cols-3 gap-12">
            <div className="lg:col-span-2 space-y-12">
              <ScrollFadeIn>
                <h2 className="font-serif text-2xl font-bold text-navy mb-4">How It Works</h2>
                <div className="bg-gray-50 rounded-2xl p-8">
                  <div className="mb-6">
                    <img src={img("/images/site/illustration-sleeve.jpg")} alt="Gastric Sleeve Surgery — before and after illustration" className="w-full max-w-lg mx-auto rounded-xl" />
                  </div>
                  <p className="text-muted-foreground leading-relaxed">
                    During gastric sleeve surgery, Dr. Lange removes approximately 80% of the stomach laparoscopically, creating a narrow, banana-shaped "sleeve." This dramatically reduces the amount of food you can eat and decreases the production of ghrelin — the hunger hormone — so you feel satisfied with smaller portions.
                  </p>
                </div>
              </ScrollFadeIn>

              <ScrollFadeIn>
                <h2 className="font-serif text-2xl font-bold text-navy mb-4">Benefits</h2>
                <div className="grid sm:grid-cols-2 gap-4">
                  {[
                    "60-70% excess weight loss in 12-18 months",
                    "Significant reduction in hunger hormones",
                    "Improvement or resolution of Type 2 Diabetes",
                    "Lower blood pressure and cholesterol",
                    "Improved sleep apnea symptoms",
                    "Laparoscopic (minimally invasive)",
                    "No intestinal rerouting — preserves natural digestion",
                    "Shorter surgery time (45-60 minutes)",
                  ].map((benefit) => (
                    <div key={benefit} className="flex items-start gap-2 p-3 bg-green-50 rounded-xl">
                      <CheckCircle2 className="w-5 h-5 text-green-500 mt-0.5 shrink-0" />
                      <span className="text-sm">{benefit}</span>
                    </div>
                  ))}
                </div>
              </ScrollFadeIn>

              <ScrollFadeIn>
                <h2 className="font-serif text-2xl font-bold text-navy mb-4">Recovery Timeline</h2>
                <div className="space-y-4">
                  {[
                    { time: "Day 1-2", desc: "Hospital stay (most go home next day). Clear liquids only." },
                    { time: "Week 1-2", desc: "Full liquids at home. Light walking encouraged. Avoid lifting." },
                    { time: "Week 3-4", desc: "Soft/pureed foods introduced. Return to desk work." },
                    { time: "Week 5-6", desc: "Gradually introduce solid foods. Resume normal activities." },
                    { time: "3-6 Months", desc: "Rapid weight loss phase. Regular follow-ups with Dr. Lange." },
                    { time: "12-18 Months", desc: "Reach or approach goal weight. Maintenance phase begins." },
                  ].map((step) => (
                    <div key={step.time} className="flex gap-4 items-start">
                      <div className="bg-navy text-white text-xs font-semibold px-3 py-1.5 rounded-lg shrink-0 min-w-[90px] text-center">{step.time}</div>
                      <p className="text-sm text-muted-foreground">{step.desc}</p>
                    </div>
                  ))}
                </div>
              </ScrollFadeIn>

              <ScrollFadeIn>
                <h2 className="font-serif text-2xl font-bold text-navy mb-4">Risks & Considerations</h2>
                <div className="bg-amber-50 rounded-2xl p-6 border border-amber-100">
                  <div className="flex items-start gap-3 mb-3">
                    <AlertTriangle className="w-5 h-5 text-amber-500 mt-0.5" />
                    <p className="text-sm text-amber-800">As with any surgery, there are risks. Dr. Lange will discuss these in detail during your consultation.</p>
                  </div>
                  <ul className="space-y-1 text-sm text-amber-700 ml-8">
                    {["Bleeding or infection (rare)", "Staple line leak (<1%)", "Blood clots (preventable)", "Acid reflux (manageable)", "Nutritional deficiencies (with vitamin compliance)"].map((r) => (
                      <li key={r}>• {r}</li>
                    ))}
                  </ul>
                </div>
              </ScrollFadeIn>

              {/* Testimonial */}
              <ScrollFadeIn>
                <div className="bg-navy rounded-2xl p-8 text-white">
                  <div className="flex gap-1 mb-4">{[1,2,3,4,5].map(s => <Star key={s} className="w-5 h-5 fill-yellow-500 text-yellow-500" />)}</div>
                  <p className="text-lg leading-relaxed mb-4 italic">"I was terrified of surgery, but Dr. Lange made me feel so comfortable. I'm 10 months post-sleeve and have lost 105 lbs. My diabetes is gone, my blood pressure is normal, and I feel like I have my life back."</p>
                  <p className="font-semibold">— Amanda L., Gastric Sleeve Patient</p>
                </div>
              </ScrollFadeIn>
            </div>

            {/* Sidebar */}
            <div className="space-y-6">
              <div className="sticky top-24 space-y-6">
                <div className="bg-white rounded-2xl border shadow-sm p-6">
                  <h3 className="font-semibold text-navy mb-4">Quick Facts</h3>
                  <div className="space-y-3 text-sm">
                    <div className="flex justify-between pb-2 border-b"><span className="text-muted-foreground">Surgery Time</span><span className="font-semibold">45-60 min</span></div>
                    <div className="flex justify-between pb-2 border-b"><span className="text-muted-foreground">Hospital Stay</span><span className="font-semibold">1-2 nights</span></div>
                    <div className="flex justify-between pb-2 border-b"><span className="text-muted-foreground">Recovery</span><span className="font-semibold">2-4 weeks</span></div>
                    <div className="flex justify-between pb-2 border-b"><span className="text-muted-foreground">Weight Loss</span><span className="font-semibold text-magenta">60-70% EWL</span></div>
                    <div className="flex justify-between"><span className="text-muted-foreground">Insurance</span><span className="font-semibold text-green-600">Covered</span></div>
                  </div>
                </div>
                <LeadForm variant="sidebar" title="See If You Qualify" />
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
