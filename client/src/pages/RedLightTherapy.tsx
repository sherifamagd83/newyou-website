import { Link } from "wouter";
import { ArrowRight, CheckCircle2, Sun, Zap, Heart, Smile, Layers, Activity } from "lucide-react";
import ScrollFadeIn from "@/components/ScrollFadeIn";
import LeadForm from "@/components/LeadForm";
import PageHero from "@/components/PageHero";
import { img } from "@/lib/img";

export default function RedLightTherapy() {
  return (
    <div>
      <PageHero
        image="/images/hero/hero-aesthetics.jpg"
        badge="Advanced Wellness"
        title="Red Light Therapy"
        subtitle="Medical-grade red and near-infrared light therapy to contour, tighten, and heal — 25-minute sessions."
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
                    <div className="w-14 h-14 rounded-xl bg-red-50 flex items-center justify-center shrink-0">
                      <Sun className="w-7 h-7 text-red-500" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-navy text-lg mb-2">The Lumara Medical-Grade System</h3>
                      <p className="text-muted-foreground leading-relaxed">
                        Red and near-infrared light wavelengths penetrate beneath the skin and create tiny temporary openings in fat cells, releasing stored fat naturally — a process called photobiomodulation. The Lumara system is medical-grade, far stronger than at-home devices, and penetrates significantly deeper to produce clinical results. Sessions are completely painless and require no downtime.
                      </p>
                    </div>
                  </div>
                  <div className="grid sm:grid-cols-3 gap-4 mt-2">
                    {[
                      { label: "Session Length", value: "25 min" },
                      { label: "Pain Level", value: "None" },
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

              {/* Benefits */}
              <ScrollFadeIn>
                <h2 className="font-serif text-2xl font-bold text-navy mb-4">Benefits</h2>
                <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4">
                  {[
                    {
                      icon: Zap,
                      title: "Body Contouring & Fat Reduction",
                      desc: "Photobiomodulation releases stored fat from cells, supporting inch loss and a leaner silhouette.",
                      color: "bg-amber-50",
                      iconColor: "text-amber-600",
                    },
                    {
                      icon: Layers,
                      title: "Skin Tightening & Collagen",
                      desc: "Stimulates fibroblast activity to produce more collagen and elastin, tightening loose skin.",
                      color: "bg-pink-50",
                      iconColor: "text-pink-600",
                    },
                    {
                      icon: Activity,
                      title: "Post-Surgery Scar Reduction",
                      desc: "Near-infrared light accelerates tissue repair and reduces the appearance of surgical scars.",
                      color: "bg-teal-50",
                      iconColor: "text-teal-600",
                    },
                    {
                      icon: Heart,
                      title: "Inflammation & Recovery",
                      desc: "Reduces systemic inflammation and speeds muscle recovery — ideal post-surgery or post-workout.",
                      color: "bg-red-50",
                      iconColor: "text-red-600",
                    },
                    {
                      icon: Smile,
                      title: "Mood & Metabolism Support",
                      desc: "Red light therapy supports mitochondrial health, which can improve energy, mood, and metabolic rate.",
                      color: "bg-yellow-50",
                      iconColor: "text-yellow-600",
                    },
                    {
                      icon: Sun,
                      title: "Cellulite Reduction",
                      desc: "Improves microcirculation and skin texture in areas prone to cellulite, including thighs and hips.",
                      color: "bg-orange-50",
                      iconColor: "text-orange-600",
                    },
                  ].map(({ icon: Icon, title, desc, color, iconColor }) => (
                    <div key={title} className={`rounded-2xl p-5 ${color}`}>
                      <div className={`w-9 h-9 rounded-lg bg-white flex items-center justify-center mb-3`}>
                        <Icon className={`w-5 h-5 ${iconColor}`} />
                      </div>
                      <h3 className="font-semibold text-navy mb-1 text-sm">{title}</h3>
                      <p className="text-xs text-muted-foreground leading-relaxed">{desc}</p>
                    </div>
                  ))}
                </div>
              </ScrollFadeIn>

              {/* What to Expect */}
              <ScrollFadeIn>
                <h2 className="font-serif text-2xl font-bold text-navy mb-4">What to Expect</h2>
                <div className="bg-gray-50 rounded-2xl p-8 space-y-4">
                  {[
                    { label: "Session Format", value: "25-minute private sessions in a relaxing environment." },
                    { label: "Comfort Level", value: "Completely pain-free. No heat discomfort, no UV exposure." },
                    { label: "Frequency", value: "We recommend 2–3 sessions per week for optimal results." },
                    { label: "Packages", value: "Discounted session packages are available — ask at your first visit." },
                    { label: "What to Wear", value: "Loose activewear recommended for full body access." },
                  ].map(({ label, value }) => (
                    <div key={label} className="flex gap-3 items-start">
                      <CheckCircle2 className="w-5 h-5 text-green-500 mt-0.5 shrink-0" />
                      <div>
                        <span className="font-semibold text-navy text-sm">{label}: </span>
                        <span className="text-sm text-muted-foreground">{value}</span>
                      </div>
                    </div>
                  ))}
                </div>
              </ScrollFadeIn>
            </div>

            {/* Sidebar */}
            <div className="space-y-6">
              <div className="sticky top-24 space-y-6">
                <div className="bg-white rounded-2xl border shadow-sm p-6">
                  <h3 className="font-semibold text-navy mb-4">Session Facts</h3>
                  <div className="space-y-3 text-sm">
                    <div className="flex justify-between pb-2 border-b"><span className="text-muted-foreground">Device</span><span className="font-semibold">Lumara</span></div>
                    <div className="flex justify-between pb-2 border-b"><span className="text-muted-foreground">Session Length</span><span className="font-semibold">25 min</span></div>
                    <div className="flex justify-between pb-2 border-b"><span className="text-muted-foreground">Pain</span><span className="font-semibold text-green-600">None</span></div>
                    <div className="flex justify-between pb-2 border-b"><span className="text-muted-foreground">Downtime</span><span className="font-semibold text-green-600">Zero</span></div>
                    <div className="flex justify-between"><span className="text-muted-foreground">Recommended Freq.</span><span className="font-semibold">2–3x/week</span></div>
                  </div>
                </div>
                <LeadForm variant="sidebar" title="Book Your First Session" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Lead Form Section */}
      <section className="section-gradient py-20" data-testid="section-rlt-lead-form">
        <div className="max-w-2xl mx-auto px-4">
          <ScrollFadeIn className="text-center mb-10">
            <h2 className="font-serif text-3xl font-bold text-navy mb-4">Book Your First Session</h2>
            <p className="text-muted-foreground text-lg">
              Experience the Lumara difference. 25 minutes, zero downtime, real results.
            </p>
          </ScrollFadeIn>
          <ScrollFadeIn>
            <LeadForm variant="full" title="" data-testid="form-rlt-lead" />
          </ScrollFadeIn>
        </div>
      </section>
    </div>
  );
}
