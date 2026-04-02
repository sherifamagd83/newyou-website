import { Link } from "wouter";
import { ArrowRight, CheckCircle2, AlertTriangle, Star } from "lucide-react";
import ScrollFadeIn from "@/components/ScrollFadeIn";
import LeadForm from "@/components/LeadForm";
import PageHero from "@/components/PageHero";
import { img } from "@/lib/img";

export default function GastricBypass() {
  return (
    <div>
      <PageHero image="/images/hero/hero-surgery.jpg" badge="Gold Standard" title="Gastric Bypass Surgery" subtitle="Roux-en-Y Gastric Bypass — the gold standard for surgical weight loss with proven metabolic benefits including diabetes reversal." />

      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid lg:grid-cols-3 gap-12">
            <div className="lg:col-span-2 space-y-12">
              <ScrollFadeIn>
                <h2 className="font-serif text-2xl font-bold text-navy mb-4">How It Works</h2>
                <div className="bg-gray-50 rounded-2xl p-8">
                  <div className="mb-6">
                    <img src={img("/images/site/illustration-bypass.jpg")} alt="Gastric Bypass Roux-en-Y illustration" className="w-full max-w-xs mx-auto rounded-xl" />
                  </div>
                  <p className="text-muted-foreground leading-relaxed mb-4">
                    Roux-en-Y Gastric Bypass is a two-part procedure. First, Dr. Lange creates a small pouch from the top of your stomach (about the size of an egg). Then, the small intestine is divided and connected directly to this new pouch, bypassing most of the stomach and the first part of the small intestine.
                  </p>
                  <p className="text-muted-foreground leading-relaxed">
                    This dual mechanism — restriction (smaller stomach) plus malabsorption (bypassed intestine) — produces powerful, sustained weight loss and dramatic metabolic improvements, especially for Type 2 Diabetes.
                  </p>
                </div>
              </ScrollFadeIn>

              <ScrollFadeIn>
                <h2 className="font-serif text-2xl font-bold text-navy mb-4">Benefits</h2>
                <div className="grid sm:grid-cols-2 gap-4">
                  {[
                    "70-80% excess weight loss in 12-18 months",
                    "Up to 83% Type 2 Diabetes remission rate",
                    "Significant improvement in metabolic syndrome",
                    "Effective for patients with GERD/reflux",
                    "Proven long-term results (30+ years of data)",
                    "Reduces cardiovascular disease risk by 40%",
                    "Laparoscopic (minimally invasive) approach",
                    "Best option for patients with severe diabetes",
                  ].map((benefit) => (
                    <div key={benefit} className="flex items-start gap-2 p-3 bg-green-50 rounded-xl">
                      <CheckCircle2 className="w-5 h-5 text-green-500 mt-0.5 shrink-0" />
                      <span className="text-sm">{benefit}</span>
                    </div>
                  ))}
                </div>
              </ScrollFadeIn>

              <ScrollFadeIn>
                <h2 className="font-serif text-2xl font-bold text-navy mb-4">Gastric Bypass vs. Gastric Sleeve</h2>
                <div className="overflow-x-auto">
                  <table className="w-full text-sm rounded-xl overflow-hidden border">
                    <thead><tr className="bg-navy text-white">
                      <th className="text-left px-4 py-3">Factor</th>
                      <th className="text-center px-4 py-3">Gastric Bypass</th>
                      <th className="text-center px-4 py-3">Gastric Sleeve</th>
                    </tr></thead>
                    <tbody>
                      {[
                        ["Weight Loss", "70-80% EWL", "60-70% EWL"],
                        ["Diabetes Resolution", "Up to 83%", "Up to 66%"],
                        ["GERD/Reflux", "Improves", "May worsen"],
                        ["Surgery Time", "60-90 min", "45-60 min"],
                        ["Malabsorption", "Yes", "No"],
                        ["Reversible", "Technically yes", "No"],
                      ].map(([factor, bypass, sleeve], i) => (
                        <tr key={factor} className={i % 2 === 0 ? "bg-white" : "bg-gray-50"}>
                          <td className="px-4 py-2.5 font-medium">{factor}</td>
                          <td className="px-4 py-2.5 text-center">{bypass}</td>
                          <td className="px-4 py-2.5 text-center">{sleeve}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </ScrollFadeIn>

              <ScrollFadeIn>
                <h2 className="font-serif text-2xl font-bold text-navy mb-4">Recovery Timeline</h2>
                <div className="space-y-4">
                  {[
                    { time: "Day 1-3", desc: "Hospital stay for monitoring. Clear liquids, walking encouraged." },
                    { time: "Week 1-2", desc: "Full liquids at home. Gradually increasing activity." },
                    { time: "Week 3-5", desc: "Pureed and soft foods. Return to light work activities." },
                    { time: "Week 6+", desc: "Gradual return to regular foods. Resume all normal activities." },
                    { time: "3-6 Months", desc: "Most rapid weight loss phase. Regular vitamin monitoring." },
                    { time: "12-18 Months", desc: "Approach goal weight. Lifelong vitamin supplementation begins." },
                  ].map((step) => (
                    <div key={step.time} className="flex gap-4 items-start">
                      <div className="bg-navy text-white text-xs font-semibold px-3 py-1.5 rounded-lg shrink-0 min-w-[90px] text-center">{step.time}</div>
                      <p className="text-sm text-muted-foreground">{step.desc}</p>
                    </div>
                  ))}
                </div>
              </ScrollFadeIn>

              <ScrollFadeIn>
                <div className="bg-navy rounded-2xl p-8 text-white">
                  <div className="flex gap-1 mb-4">{[1,2,3,4,5].map(s => <Star key={s} className="w-5 h-5 fill-yellow-500 text-yellow-500" />)}</div>
                  <p className="text-lg leading-relaxed mb-4 italic">"My A1C was 11.2 before surgery. Six months after my bypass with Dr. Lange, it's 5.4 — completely normal. I'm off all my diabetes medications. This surgery literally saved my life."</p>
                  <p className="font-semibold">— Michael T., Gastric Bypass Patient</p>
                </div>
              </ScrollFadeIn>
            </div>

            <div className="space-y-6">
              <div className="sticky top-24 space-y-6">
                <div className="bg-white rounded-2xl border shadow-sm p-6">
                  <h3 className="font-semibold text-navy mb-4">Quick Facts</h3>
                  <div className="space-y-3 text-sm">
                    <div className="flex justify-between pb-2 border-b"><span className="text-muted-foreground">Surgery Time</span><span className="font-semibold">60-90 min</span></div>
                    <div className="flex justify-between pb-2 border-b"><span className="text-muted-foreground">Hospital Stay</span><span className="font-semibold">2-3 nights</span></div>
                    <div className="flex justify-between pb-2 border-b"><span className="text-muted-foreground">Recovery</span><span className="font-semibold">3-5 weeks</span></div>
                    <div className="flex justify-between pb-2 border-b"><span className="text-muted-foreground">Weight Loss</span><span className="font-semibold text-magenta">70-80% EWL</span></div>
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
