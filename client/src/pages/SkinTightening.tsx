import { Link } from "wouter";
import { ArrowRight, CheckCircle2, AlertTriangle, Waves, Zap } from "lucide-react";
import ScrollFadeIn from "@/components/ScrollFadeIn";
import LeadForm from "@/components/LeadForm";
import PageHero from "@/components/PageHero";
import { img } from "@/lib/img";

export default function SkinTightening() {
  return (
    <div>
      <PageHero
        image="/images/hero/hero-aesthetics.jpg"
        badge="Non-Surgical Contouring"
        title="Skin Tightening with AccentPrime"
        subtitle="Tighten skin, smooth texture, and contour your body — without surgery, scars, or downtime."
      />

      {/* Meet AccentPrime */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid lg:grid-cols-3 gap-12">
            <div className="lg:col-span-2 space-y-12">

              <ScrollFadeIn>
                <h2 className="font-serif text-2xl font-bold text-navy mb-4">Meet AccentPrime</h2>
                <div className="bg-gray-50 rounded-2xl p-8">
                  <div className="flex items-start gap-4 mb-6">
                    <div className="w-14 h-14 rounded-xl bg-teal-50 flex items-center justify-center shrink-0">
                      <Waves className="w-7 h-7 text-navy" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-navy text-lg mb-2">Radiofrequency + Ultrasound Technology</h3>
                      <p className="text-muted-foreground leading-relaxed">
                        AccentPrime combines specialized RF (radiofrequency) and ultrasound applicators to target two things at once: skin quality and body contouring. The RF energy heats deeper tissue to stimulate collagen and tighten loose skin, while the ultrasound works on stubborn fat and surface texture. Most patients describe it as feeling like a warm, relaxing massage.
                      </p>
                    </div>
                  </div>
                  <div className="grid sm:grid-cols-3 gap-4 mt-2">
                    {[
                      { label: "Technology", value: "RF + Ultrasound" },
                      { label: "Sensation", value: "Warm massage" },
                      { label: "Downtime", value: "Zero" },
                    ].map(({ label, value }) => (
                      <div key={label} className="bg-white rounded-xl p-4 text-center border">
                        <div className="text-base font-bold text-navy">{value}</div>
                        <div className="text-xs text-muted-foreground mt-1">{label}</div>
                      </div>
                    ))}
                  </div>
                </div>
              </ScrollFadeIn>

              {/* Treatment Areas */}
              <ScrollFadeIn>
                <h2 className="font-serif text-2xl font-bold text-navy mb-4">Treatment Areas</h2>
                <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4">
                  {[
                    { area: "Double Chin & Jawline", desc: "Define your chin and sharpen jaw contour." },
                    { area: "Abdomen", desc: "Tighten post-weight-loss or post-pregnancy skin on the belly." },
                    { area: "Love Handles & Flanks", desc: "Reduce stubborn side fat and improve skin texture." },
                    { area: "Back & Bra Line", desc: "Smooth bra-line bulge and soften excess back skin." },
                    { area: "Buttocks", desc: "Lift and firm without surgery or downtime." },
                    { area: "Thighs", desc: "Inner and outer thigh skin tightening and cellulite improvement." },
                  ].map(({ area, desc }) => (
                    <div key={area} className="bg-white rounded-2xl border shadow-sm p-5">
                      <div className="w-8 h-8 rounded-lg bg-teal-100 flex items-center justify-center mb-3">
                        <Zap className="w-4 h-4 text-teal-700" />
                      </div>
                      <h3 className="font-semibold text-navy mb-1 text-sm">{area}</h3>
                      <p className="text-xs text-muted-foreground leading-relaxed">{desc}</p>
                    </div>
                  ))}
                </div>
              </ScrollFadeIn>

              {/* Is AccentPrime Right for You? */}
              <ScrollFadeIn>
                <h2 className="font-serif text-2xl font-bold text-navy mb-4">Is AccentPrime Right for You?</h2>
                <div className="space-y-4">
                  <div className="bg-green-50 rounded-2xl p-6 border border-green-100">
                    <h4 className="font-semibold text-green-900 mb-3">Ideal Candidates</h4>
                    <ul className="space-y-2">
                      {[
                        "Mild-to-moderate skin laxity after weight loss",
                        "Patients wanting to preserve elasticity during ongoing weight loss",
                        "Post-bariatric patients looking to tone without surgery",
                        "Anyone wanting non-invasive body contouring and skin quality improvement",
                      ].map((item) => (
                        <li key={item} className="flex items-start gap-2 text-sm text-green-800">
                          <CheckCircle2 className="w-4 h-4 text-green-600 mt-0.5 shrink-0" />
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div className="bg-amber-50 rounded-2xl p-6 border border-amber-100">
                    <div className="flex items-start gap-3">
                      <AlertTriangle className="w-5 h-5 text-amber-500 mt-0.5 shrink-0" />
                      <div>
                        <h4 className="font-semibold text-amber-900 mb-1">When Surgery May Be Better</h4>
                        <p className="text-sm text-amber-800 leading-relaxed">
                          AccentPrime is not a replacement for body contouring surgery when significant excess skin is present. If you have large, hanging skin panels — particularly after 100+ lbs of weight loss — a surgical consultation may be the more appropriate path. Our team will give you an honest recommendation.
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="bg-gray-50 rounded-2xl p-6">
                    <div className="grid sm:grid-cols-2 gap-4 text-sm">
                      <div>
                        <span className="font-semibold text-navy">Session Length: </span>
                        <span className="text-muted-foreground">30–60 minutes</span>
                      </div>
                      <div>
                        <span className="font-semibold text-navy">Recommended: </span>
                        <span className="text-muted-foreground">Series of treatments</span>
                      </div>
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
                    <div className="flex justify-between pb-2 border-b"><span className="text-muted-foreground">Device</span><span className="font-semibold">AccentPrime</span></div>
                    <div className="flex justify-between pb-2 border-b"><span className="text-muted-foreground">Session Length</span><span className="font-semibold">30–60 min</span></div>
                    <div className="flex justify-between pb-2 border-b"><span className="text-muted-foreground">Technology</span><span className="font-semibold">RF + Ultrasound</span></div>
                    <div className="flex justify-between pb-2 border-b"><span className="text-muted-foreground">Downtime</span><span className="font-semibold text-green-600">Zero</span></div>
                    <div className="flex justify-between"><span className="text-muted-foreground">Best Results</span><span className="font-semibold">Series of sessions</span></div>
                  </div>
                </div>
                <LeadForm variant="sidebar" title="Book a Skin Consultation" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Lead Form Section */}
      <section className="section-gradient py-20" data-testid="section-skin-tightening-lead-form">
        <div className="max-w-2xl mx-auto px-4">
          <ScrollFadeIn className="text-center mb-10">
            <h2 className="font-serif text-3xl font-bold text-navy mb-4">Schedule Your Skin Consultation</h2>
            <p className="text-muted-foreground text-lg">
              Find out if AccentPrime is the right fit for your body contouring goals — no obligation, no downtime.
            </p>
          </ScrollFadeIn>
          <ScrollFadeIn>
            <LeadForm variant="full" title="" data-testid="form-skin-tightening-lead" />
          </ScrollFadeIn>
        </div>
      </section>
    </div>
  );
}
