import { Link } from "wouter";
import { ArrowRight, CheckCircle2, RefreshCw, Star, AlertCircle } from "lucide-react";
import ScrollFadeIn from "@/components/ScrollFadeIn";
import LeadForm from "@/components/LeadForm";
import PageHero from "@/components/PageHero";
import { img } from "@/lib/img";

export default function RevisionSurgery() {
  return (
    <div>
      <PageHero image="/images/hero/hero-surgery.jpg" badge="Second Chance at Success" title="Revision & Conversion Surgery" subtitle="Redo. Repair. Renew. Expert revision procedures for patients who need a fresh start after a previous weight loss surgery." />

      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid lg:grid-cols-3 gap-12">
            <div className="lg:col-span-2 space-y-12">
              <ScrollFadeIn>
                <h2 className="font-serif text-2xl font-bold text-navy mb-4">When Is Revision Surgery Needed?</h2>
                <p className="text-muted-foreground leading-relaxed mb-6">
                  Sometimes a previous bariatric procedure doesn't produce the expected results, or complications arise that require correction. Dr. Lange specializes in complex revision and conversion surgeries, giving patients a second opportunity for life-changing weight loss.
                </p>
                <div className="grid sm:grid-cols-2 gap-4">
                  {[
                    "Insufficient weight loss after initial surgery",
                    "Significant weight regain over time",
                    "Complications from a previous procedure",
                    "Lap-Band issues (slippage, erosion, port problems)",
                    "Stretched stomach pouch or stoma",
                    "Persistent GERD after sleeve gastrectomy",
                  ].map((reason) => (
                    <div key={reason} className="flex items-start gap-2 p-3 bg-orange-50 rounded-xl">
                      <AlertCircle className="w-5 h-5 text-orange-500 mt-0.5 shrink-0" />
                      <span className="text-sm">{reason}</span>
                    </div>
                  ))}
                </div>
              </ScrollFadeIn>

              <ScrollFadeIn>
                <h2 className="font-serif text-2xl font-bold text-navy mb-4">Types of Revision Surgery</h2>
                <div className="space-y-4">
                  {[
                    { title: "Lap-Band to Sleeve Conversion", desc: "Removal of the adjustable gastric band and conversion to a gastric sleeve. One of the most common revisions we perform." },
                    { title: "Sleeve to Bypass Conversion", desc: "Converting a gastric sleeve to Roux-en-Y bypass for patients who need more weight loss or have developed severe reflux." },
                    { title: "Lap-Band to Bypass Conversion", desc: "Band removal with conversion to gastric bypass for enhanced metabolic benefits and sustained weight loss." },
                    { title: "Bypass Revision", desc: "Revision of a previous gastric bypass to address weight regain, typically by reducing the pouch or limb lengths." },
                    { title: "Pouch/Stoma Revision", desc: "Endoscopic or surgical tightening of a stretched stomach pouch or outlet for patients with weight regain." },
                  ].map((type) => (
                    <div key={type.title} className="bg-gray-50 rounded-xl p-5 border">
                      <h3 className="font-semibold text-navy mb-1 flex items-center gap-2">
                        <RefreshCw className="w-4 h-4 text-magenta" /> {type.title}
                      </h3>
                      <p className="text-sm text-muted-foreground">{type.desc}</p>
                    </div>
                  ))}
                </div>
              </ScrollFadeIn>

              <ScrollFadeIn>
                <div className="rounded-2xl overflow-hidden mt-8">
                  <img src={img("/images/stock/doctor-consultation.jpg")} alt="Dr. Lange consulting with a revision surgery patient" className="w-full h-64 object-cover rounded-2xl" />
                </div>
              </ScrollFadeIn>

              <ScrollFadeIn>
                <h2 className="font-serif text-2xl font-bold text-navy mb-4">Dr. Lange's Expertise in Revisions</h2>
                <div className="bg-navy/5 rounded-2xl p-6">
                  <p className="text-muted-foreground leading-relaxed mb-4">
                    Revision surgery requires significantly more skill than a primary procedure. The anatomy has been altered, scar tissue is present, and the surgical approach must be carefully planned. Dr. Lange's fellowship training at Cleveland Clinic Florida included extensive revision surgery experience.
                  </p>
                  <ul className="space-y-2">
                    {[
                      "Fellowship-trained in complex bariatric revisions",
                      "Laparoscopic approach for most revision cases",
                      "Experience with multi-stage revisions when needed",
                      "Comprehensive pre-revision evaluation and planning",
                    ].map((item) => (
                      <li key={item} className="flex items-start gap-2 text-sm">
                        <CheckCircle2 className="w-4 h-4 text-green-500 mt-0.5 shrink-0" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </ScrollFadeIn>

              <ScrollFadeIn>
                <div className="bg-navy rounded-2xl p-8 text-white">
                  <div className="flex gap-1 mb-4">{[1,2,3,4,5].map(s => <Star key={s} className="w-5 h-5 fill-yellow-500 text-yellow-500" />)}</div>
                  <p className="text-lg leading-relaxed mb-4 italic">"I had a failed lap-band from another surgeon 5 years ago. Dr. Lange converted me to a sleeve and the difference is incredible. I've lost 105 lbs and finally feel like the surgery worked. His expertise with revisions is unmatched."</p>
                  <p className="font-semibold">— Jennifer K., Revision Surgery Patient</p>
                </div>
              </ScrollFadeIn>
            </div>

            <div className="space-y-6">
              <div className="sticky top-24 space-y-6">
                <div className="bg-white rounded-2xl border shadow-sm p-6">
                  <h3 className="font-semibold text-navy mb-4">Quick Facts</h3>
                  <div className="space-y-3 text-sm">
                    <div className="flex justify-between pb-2 border-b"><span className="text-muted-foreground">Surgery Time</span><span className="font-semibold">90-180 min</span></div>
                    <div className="flex justify-between pb-2 border-b"><span className="text-muted-foreground">Hospital Stay</span><span className="font-semibold">1-3 nights</span></div>
                    <div className="flex justify-between pb-2 border-b"><span className="text-muted-foreground">Recovery</span><span className="font-semibold">3-6 weeks</span></div>
                    <div className="flex justify-between pb-2 border-b"><span className="text-muted-foreground">Weight Loss</span><span className="font-semibold text-magenta">Varies</span></div>
                    <div className="flex justify-between"><span className="text-muted-foreground">Insurance</span><span className="font-semibold">Case dependent</span></div>
                  </div>
                </div>
                <LeadForm variant="sidebar" title="Get a Revision Consultation" />
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
