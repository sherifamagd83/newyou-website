import { Link } from "wouter";
import { ArrowRight, CheckCircle2, Circle, Star } from "lucide-react";
import ScrollFadeIn from "@/components/ScrollFadeIn";
import LeadForm from "@/components/LeadForm";
import PageHero from "@/components/PageHero";
import { img } from "@/lib/img";

export default function ORBERA() {
  return (
    <div>
      <PageHero
        image="/images/hero/hero-nonsurgical.jpg"
        badge="No Surgery Required"
        title="ORBERA® Intragastric Balloon"
        subtitle="A soft, saline-filled balloon placed in your stomach to help you eat less and lose weight — no incisions, no surgery."
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
                    <div className="w-14 h-14 rounded-xl bg-blue-50 flex items-center justify-center shrink-0">
                      <Circle className="w-7 h-7 text-navy" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-navy text-lg mb-2">Placed Endoscopically — No Incisions</h3>
                      <p className="text-muted-foreground leading-relaxed">
                        The ORBERA balloon is placed in your stomach endoscopically in approximately 20 minutes, under mild sedation — no incisions, no surgery, no general anesthesia. Once in place, the balloon is filled with saline solution, taking up space in your stomach so you feel full faster and eat less. After 6 months, the balloon is removed in the same simple, non-surgical fashion. The program includes nutrition counseling throughout to help you build lasting habits.
                      </p>
                    </div>
                  </div>
                  <div className="grid sm:grid-cols-3 gap-4 mt-4">
                    {[
                      { label: "Placement Time", value: "~20 min" },
                      { label: "Anesthesia", value: "Mild sedation" },
                      { label: "Duration", value: "6 months" },
                    ].map(({ label, value }) => (
                      <div key={label} className="bg-white rounded-xl p-4 text-center border">
                        <div className="text-xl font-bold text-navy">{value}</div>
                        <div className="text-xs text-muted-foreground mt-1">{label}</div>
                      </div>
                    ))}
                  </div>
                </div>
              </ScrollFadeIn>

              {/* Process */}
              <ScrollFadeIn>
                <h2 className="font-serif text-2xl font-bold text-navy mb-6">The ORBERA Process</h2>
                <div className="space-y-4">
                  {[
                    {
                      step: "01",
                      title: "Placement",
                      desc: "A thin, deflated balloon is passed through the mouth into the stomach via an endoscope under mild sedation. It's then filled with saline and positioned. You go home the same day.",
                    },
                    {
                      step: "02",
                      title: "6-Month Program",
                      desc: "With the balloon in place, you feel satisfied with smaller portions. You'll work alongside our nutrition team to build new eating habits that last beyond balloon removal.",
                    },
                    {
                      step: "03",
                      title: "Removal",
                      desc: "After 6 months, the balloon is deflated and removed endoscopically — same simple, sedation-based process. No surgery, no recovery time.",
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

              {/* Benefits */}
              <ScrollFadeIn>
                <h2 className="font-serif text-2xl font-bold text-navy mb-4">Benefits</h2>
                <div className="grid sm:grid-cols-2 gap-4">
                  {[
                    "No incisions or surgical scars",
                    "Short 20-minute placement procedure",
                    "Effective for patients with BMI 30–40",
                    "Includes structured nutrition counseling program",
                    "Can be a bridge to surgery or used as a standalone solution",
                    "Recovery time of only 1–3 days",
                    "No general anesthesia required",
                    "Average 10–15% total body weight loss",
                  ].map((benefit) => (
                    <div key={benefit} className="flex items-start gap-2 p-3 bg-green-50 rounded-xl">
                      <CheckCircle2 className="w-5 h-5 text-green-500 mt-0.5 shrink-0" />
                      <span className="text-sm">{benefit}</span>
                    </div>
                  ))}
                </div>
              </ScrollFadeIn>

              {/* Testimonial */}
              <ScrollFadeIn>
                <div className="bg-navy rounded-2xl p-8 text-white">
                  <div className="flex gap-1 mb-4">{[1,2,3,4,5].map(s => <Star key={s} className="w-5 h-5 fill-yellow-500 text-yellow-500" />)}</div>
                  <p className="text-lg leading-relaxed mb-4 italic">"I didn't want surgery, and ORBERA was the perfect option for me. I lost 35 lbs in 6 months and learned to eat differently. The nutrition coaching made all the difference."</p>
                  <p className="font-semibold">— New You Patient</p>
                </div>
              </ScrollFadeIn>
            </div>

            {/* Sidebar */}
            <div className="space-y-6">
              <div className="sticky top-24 space-y-6">
                <div className="bg-white rounded-2xl border shadow-sm p-6">
                  <h3 className="font-semibold text-navy mb-4">Quick Facts</h3>
                  <div className="space-y-3 text-sm">
                    <div className="flex justify-between pb-2 border-b"><span className="text-muted-foreground">Procedure Time</span><span className="font-semibold">~20 min</span></div>
                    <div className="flex justify-between pb-2 border-b"><span className="text-muted-foreground">Recovery</span><span className="font-semibold">1–3 days</span></div>
                    <div className="flex justify-between pb-2 border-b"><span className="text-muted-foreground">Duration</span><span className="font-semibold">6 months</span></div>
                    <div className="flex justify-between pb-2 border-b"><span className="text-muted-foreground">Weight Loss</span><span className="font-semibold text-magenta">10–15% body weight</span></div>
                    <div className="flex justify-between"><span className="text-muted-foreground">Anesthesia</span><span className="font-semibold">Mild sedation</span></div>
                  </div>
                </div>
                <LeadForm variant="sidebar" title="See If You Qualify" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Lead Form Section */}
      <section className="section-gradient py-20" data-testid="section-orbera-lead-form">
        <div className="max-w-2xl mx-auto px-4">
          <ScrollFadeIn className="text-center mb-10">
            <h2 className="font-serif text-3xl font-bold text-navy mb-4">Ready to Learn More?</h2>
            <p className="text-muted-foreground text-lg">
              ORBERA is ideal for patients with a BMI of 30–40 who want to lose weight without surgery. Schedule a free consultation to find out if you're a candidate.
            </p>
          </ScrollFadeIn>
          <ScrollFadeIn>
            <LeadForm variant="full" title="" data-testid="form-orbera-lead" />
          </ScrollFadeIn>
        </div>
      </section>
    </div>
  );
}
