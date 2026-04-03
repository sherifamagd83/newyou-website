import { Link } from "wouter";
import { ArrowRight, CheckCircle2, Sparkles, Clock, Zap, User, Baby, Dna, Brain } from "lucide-react";
import ScrollFadeIn from "@/components/ScrollFadeIn";
import LeadForm from "@/components/LeadForm";
import PageHero from "@/components/PageHero";
import { img } from "@/lib/img";

export default function HairRestoration() {
  return (
    <div>
      <PageHero
        image="/images/hero/hero-aesthetics.jpg"
        badge="Restore Your Confidence"
        title="Hair Restoration"
        subtitle="Needle-free, medical-grade hair restoration with the ALMA TED — no downtime, no pain."
      />

      {/* How It Works */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid lg:grid-cols-3 gap-12">
            <div className="lg:col-span-2 space-y-12">

              <ScrollFadeIn>
                <h2 className="font-serif text-2xl font-bold text-navy mb-4">How It Works</h2>
                <div className="bg-gray-50 rounded-2xl p-8">
                  <div className="flex items-start gap-4 mb-6">
                    <div className="w-14 h-14 rounded-xl bg-navy/10 flex items-center justify-center shrink-0">
                      <Zap className="w-7 h-7 text-navy" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-navy text-lg mb-2">The ALMA TED Device</h3>
                      <p className="text-muted-foreground leading-relaxed">
                        ALMA TED (TransEpidermal Delivery) uses acoustic sound waves and air pressure to drive a specialized hair care formula deep into the scalp — without needles, numbing cream, or any downtime. The ultrasound energy opens channels in the scalp to deliver active ingredients directly to the hair follicles, strengthening them and improving density over time.
                      </p>
                    </div>
                  </div>
                  <div className="grid sm:grid-cols-3 gap-4 mt-6">
                    {[
                      { label: "Session Length", value: "20–30 min" },
                      { label: "Needles Required", value: "None" },
                      { label: "Downtime", value: "Zero" },
                    ].map(({ label, value }) => (
                      <div key={label} className="bg-white rounded-xl p-4 text-center border">
                        <div className="text-xl font-bold text-navy">{value}</div>
                        <div className="text-xs text-muted-foreground mt-1">{label}</div>
                      </div>
                    ))}
                  </div>
                </div>
              </ScrollFadeIn>

              {/* Who It's For */}
              <ScrollFadeIn>
                <h2 className="font-serif text-2xl font-bold text-navy mb-4">Who It's For</h2>
                <div className="grid sm:grid-cols-2 gap-4">
                  {[
                    {
                      icon: User,
                      title: "Post-Weight-Loss Hair Thinning",
                      desc: "Hair shedding is common 3–6 months after bariatric surgery due to caloric restriction and rapid weight loss. ALMA TED helps reset the hair cycle.",
                    },
                    {
                      icon: Clock,
                      title: "Age-Related Changes",
                      desc: "Gradual follicle weakening from hormonal and aging changes — ALMA TED strengthens and revitalizes existing follicles.",
                    },
                    {
                      icon: Baby,
                      title: "Postpartum Hair Loss",
                      desc: "Postpartum shedding is extremely common. ALMA TED can help accelerate recovery and restore fullness after childbirth.",
                    },
                    {
                      icon: Dna,
                      title: "Genetic & Stress-Related Thinning",
                      desc: "Family history of thinning or stress-triggered shedding can both respond well to the targeted follicle stimulation ALMA TED provides.",
                    },
                  ].map(({ icon: Icon, title, desc }) => (
                    <div key={title} className="bg-white rounded-2xl border shadow-sm p-6">
                      <div className="w-10 h-10 rounded-lg bg-purple-50 flex items-center justify-center mb-3">
                        <Icon className="w-5 h-5 text-navy" />
                      </div>
                      <h3 className="font-semibold text-navy mb-2">{title}</h3>
                      <p className="text-sm text-muted-foreground leading-relaxed">{desc}</p>
                    </div>
                  ))}
                </div>
              </ScrollFadeIn>

              {/* What to Expect */}
              <ScrollFadeIn>
                <h2 className="font-serif text-2xl font-bold text-navy mb-6">What to Expect</h2>
                <div className="space-y-4">
                  {[
                    {
                      step: "01",
                      title: "Free Scalp Consultation",
                      desc: "We assess your hair health, identify the type of hair loss, and determine if ALMA TED is right for you. No commitment required.",
                    },
                    {
                      step: "02",
                      title: "Treatment Session",
                      desc: "You'll feel gentle warmth and light vibration as the device works — completely comfortable, no needles, no numbing. Drive yourself, go back to work, hit the gym — immediately after.",
                    },
                    {
                      step: "03",
                      title: "Gradual Results",
                      desc: "Hair follows a natural growth cycle. Most patients notice reduced shedding first, followed by improved density and thickness over 2–4 months. Results build with each session.",
                    },
                  ].map(({ step, title, desc }) => (
                    <div key={step} className="flex gap-5 items-start p-6 bg-gray-50 rounded-2xl">
                      <div className="w-12 h-12 rounded-full bg-navy text-white font-bold text-lg flex items-center justify-center shrink-0">
                        {step}
                      </div>
                      <div>
                        <h3 className="font-semibold text-navy mb-1">{title}</h3>
                        <p className="text-sm text-muted-foreground leading-relaxed">{desc}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </ScrollFadeIn>

              {/* Note */}
              <ScrollFadeIn>
                <div className="bg-teal-50 border border-teal-100 rounded-2xl p-6">
                  <div className="flex items-start gap-3">
                    <Sparkles className="w-5 h-5 text-teal-600 mt-0.5 shrink-0" />
                    <div>
                      <h4 className="font-semibold text-teal-900 mb-1">Good to Know</h4>
                      <p className="text-sm text-teal-800 leading-relaxed">
                        Results build gradually as your hair cycle resets and follicles strengthen. You can drive, return to work, and exercise immediately after every session — zero restrictions.
                      </p>
                    </div>
                  </div>
                </div>
              </ScrollFadeIn>
            </div>

            {/* Sidebar */}
            <div className="space-y-6">
              <div className="sticky top-24 space-y-6">
                <div className="bg-white rounded-2xl border shadow-sm p-6">
                  <h3 className="font-semibold text-navy mb-4">Treatment Facts</h3>
                  <div className="space-y-3 text-sm">
                    <div className="flex justify-between pb-2 border-b"><span className="text-muted-foreground">Device</span><span className="font-semibold">ALMA TED</span></div>
                    <div className="flex justify-between pb-2 border-b"><span className="text-muted-foreground">Session Length</span><span className="font-semibold">20–30 min</span></div>
                    <div className="flex justify-between pb-2 border-b"><span className="text-muted-foreground">Needles</span><span className="font-semibold text-green-600">None</span></div>
                    <div className="flex justify-between pb-2 border-b"><span className="text-muted-foreground">Downtime</span><span className="font-semibold text-green-600">Zero</span></div>
                    <div className="flex justify-between"><span className="text-muted-foreground">Results Begin</span><span className="font-semibold">2–4 months</span></div>
                  </div>
                </div>
                <LeadForm variant="sidebar" title="Free Hair Evaluation" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Lead Form Section */}
      <section className="section-gradient py-20" data-testid="section-hair-lead-form">
        <div className="max-w-2xl mx-auto px-4">
          <ScrollFadeIn className="text-center mb-10">
            <h2 className="font-serif text-3xl font-bold text-navy mb-4">Schedule Your Free Hair Evaluation</h2>
            <p className="text-muted-foreground text-lg">
              Our team will assess your scalp health and create a personalized treatment plan — no needles, no commitment, no downtime.
            </p>
          </ScrollFadeIn>
          <ScrollFadeIn>
            <LeadForm variant="full" title="" data-testid="form-hair-restoration-lead" />
          </ScrollFadeIn>
        </div>
      </section>
    </div>
  );
}
