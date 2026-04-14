import { useState } from "react";
import { Link } from "wouter";
import {
  ArrowRight,
  CheckCircle2,
  ChevronDown,
  ChevronUp,
  Sun,
  Zap,
  Heart,
  Smile,
  Layers,
  Activity,
  Shield,
  Phone,
  Wifi,
  Star,
  ScanLine,
  TrendingUp,
} from "lucide-react";
import ScrollFadeIn from "@/components/ScrollFadeIn";
import PageHero from "@/components/PageHero";

/* ─── Lead Form ────────────────────────────────────────────────────────────── */
function RedLightLeadForm() {
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    goal: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  if (submitted) {
    return (
      <div className="bg-white rounded-2xl shadow-xl border p-8 text-center">
        <CheckCircle2 className="w-16 h-16 text-teal mx-auto mb-4" />
        <h3 className="text-xl font-bold text-navy mb-2">Request Received!</h3>
        <p className="text-muted-foreground">
          Our team will contact you within 24 hours to schedule your no-obligation consultation.
        </p>
      </div>
    );
  }

  const inputCls =
    "w-full px-4 py-3 rounded-xl border border-gray-200 bg-gray-50 text-sm outline-none transition-all focus:ring-2 focus:ring-teal/30 focus:border-teal";

  return (
    <form
      onSubmit={handleSubmit}
      className="bg-white rounded-2xl shadow-xl border p-6 md:p-8 space-y-4"
      data-testid="form-redlight-lead"
    >
      <div>
        <h3 className="font-serif text-xl font-bold text-navy mb-1">Book Your No-Obligation Consultation</h3>
        <p className="text-sm text-muted-foreground">
          Learn which package is right for your goals. No cost, no pressure.
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <input
          type="text"
          required
          placeholder="First Name"
          value={formData.firstName}
          onChange={(e) => setFormData({ ...formData, firstName: e.target.value })}
          className={inputCls}
          data-testid="input-rl-first-name"
        />
        <input
          type="text"
          required
          placeholder="Last Name"
          value={formData.lastName}
          onChange={(e) => setFormData({ ...formData, lastName: e.target.value })}
          className={inputCls}
          data-testid="input-rl-last-name"
        />
        <input
          type="email"
          required
          placeholder="Email Address"
          value={formData.email}
          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
          className={inputCls}
          data-testid="input-rl-email"
        />
        <input
          type="tel"
          required
          placeholder="Phone Number"
          value={formData.phone}
          onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
          className={inputCls}
          data-testid="input-rl-phone"
        />
      </div>

      <select
        value={formData.goal}
        onChange={(e) => setFormData({ ...formData, goal: e.target.value })}
        className={`${inputCls} ${!formData.goal ? "text-muted-foreground" : ""}`}
        data-testid="select-rl-goal"
      >
        <option value="">What's Your Primary Goal?</option>
        <option value="contouring">Body contouring / fat reduction</option>
        <option value="skin-tightening">Skin tightening</option>
        <option value="post-surgery">Post-surgery recovery</option>
        <option value="scar-reduction">Scar reduction</option>
        <option value="wellness">General wellness</option>
        <option value="not-sure">Not sure</option>
      </select>

      <button
        type="submit"
        className="w-full bg-teal hover:bg-teal-light text-white font-semibold px-6 py-3.5 rounded-xl transition-all flex items-center justify-center gap-2 shadow-lg hover:shadow-xl text-base"
        data-testid="button-rl-submit"
      >
        Book Your Consultation <ArrowRight className="w-4 h-4" />
      </button>

      <p className="text-xs text-center text-muted-foreground flex items-center justify-center gap-1.5">
        <Shield className="w-3.5 h-3.5" />
        HIPAA secure · Zero obligation · Response within 24 hours
      </p>
    </form>
  );
}

/* ─── FAQ Item ─────────────────────────────────────────────────────────────── */
function FaqItem({ q, a }: { q: string; a: string }) {
  const [open, setOpen] = useState(false);
  return (
    <div className="border rounded-xl overflow-hidden">
      <button
        onClick={() => setOpen(!open)}
        className="w-full flex items-center justify-between p-5 text-left font-semibold text-navy hover:bg-gray-50 transition-colors"
        data-testid="faq-rl-toggle"
      >
        <span>{q}</span>
        {open ? (
          <ChevronUp className="w-5 h-5 shrink-0 text-muted-foreground" />
        ) : (
          <ChevronDown className="w-5 h-5 shrink-0 text-muted-foreground" />
        )}
      </button>
      {open && (
        <div className="px-5 pb-5 text-sm text-muted-foreground leading-relaxed border-t bg-gray-50">
          <p className="pt-4">{a}</p>
        </div>
      )}
    </div>
  );
}

/* ─── Page ─────────────────────────────────────────────────────────────────── */
export default function RedLightTherapy() {
  return (
    <div>
      {/* Hero */}
      <PageHero
        image="/images/hero/hero-aesthetics.jpg"
        badge="Body Contouring · Skin Tightening · Recovery"
        title="Tighten. Contour. Glow."
        subtitle="Medical-grade Lumara red light therapy. Shrink fat cells, tighten skin, reduce scars, and accelerate recovery. 25-minute sessions."
      />

      {/* Quick Stats Strip */}
      <section className="bg-navy py-4">
        <div className="max-w-5xl mx-auto px-4">
          <div className="flex flex-wrap items-center justify-center gap-x-6 gap-y-2 text-white/90 text-sm font-medium">
            {[
              "FDA Registered",
              "Board-Certified",
              "HIPAA Secure",
              "25 min/Session",
              "$440 Packages From",
              "0 Pain or Downtime",
            ].map((stat, i) => (
              <span key={stat} className="flex items-center gap-2">
                {i > 0 && <span className="text-white/30 hidden sm:inline">·</span>}
                <span className="text-teal font-semibold">✦</span> {stat}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* Lead Form + Stats — Early Placement */}
      <section
        className="py-16 bg-gradient-to-br from-teal/5 via-white to-navy/5"
        data-testid="section-rl-early-form"
      >
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-start">
            <ScrollFadeIn>
              <div className="space-y-8">
                <div>
                  <span className="inline-block text-teal font-semibold text-sm uppercase tracking-wide mb-2">
                    Lumara Red Light Therapy
                  </span>
                  <h2 className="font-serif text-3xl md:text-4xl font-bold text-navy mb-4">
                    Let Your Outside Match How Far You've Come.
                  </h2>
                  <p className="text-muted-foreground text-lg leading-relaxed">
                    Medical-grade red and near-infrared light penetrates your skin and triggers your cells to release stored fat, produce collagen, and accelerate healing — all in a comfortable 25-minute session.
                  </p>
                </div>

                <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
                  {[
                    { value: "25 min", label: "Per Session" },
                    { value: "$440", label: "Packages From" },
                    { value: "0", label: "Pain or Downtime" },
                    { value: "FDA", label: "Registered Device" },
                    { value: "6,000+", label: "Joules Delivered" },
                    { value: "Class II", label: "Medical Device" },
                  ].map(({ value, label }) => (
                    <div key={label} className="bg-white rounded-xl border shadow-sm p-4 text-center">
                      <div className="text-2xl font-bold text-navy">{value}</div>
                      <div className="text-xs text-muted-foreground mt-1">{label}</div>
                    </div>
                  ))}
                </div>

                <div className="flex items-center gap-3 text-sm text-muted-foreground">
                  <Shield className="w-4 h-4 text-teal" />
                  Board-Certified · Cleveland Clinic Fellowship · HIPAA Secure
                </div>
              </div>
            </ScrollFadeIn>

            <ScrollFadeIn delay={100}>
              <RedLightLeadForm />
            </ScrollFadeIn>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-20 bg-white" data-testid="section-rl-how-it-works">
        <div className="max-w-5xl mx-auto px-4">
          <ScrollFadeIn className="text-center mb-12">
            <span className="inline-block text-teal font-semibold text-sm uppercase tracking-wide mb-2">Your Experience</span>
            <h2 className="font-serif text-3xl font-bold text-navy mb-3">How It Works</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Simple, relaxing, and effective. Here's your complete experience from start to finish.
            </p>
          </ScrollFadeIn>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                step: "1",
                title: "No-Obligation Consultation",
                desc: "We assess your goals, discuss treatment areas, and recommend a package customized to your body and budget.",
                color: "bg-teal/5",
                accent: "text-teal",
              },
              {
                step: "2",
                title: "Red Light Session",
                desc: "Relax for 25 minutes in a private room while Lumara panels deliver targeted wavelengths to your treatment areas. Warm and comfortable.",
                color: "bg-magenta/5",
                accent: "text-magenta",
              },
              {
                step: "3",
                title: "Walk Out Glowing",
                desc: "No pain, no downtime. Resume everything immediately. Many patients feel an immediate warming effect and notice smoother skin within days.",
                color: "bg-gold/10",
                accent: "text-gold",
              },
              {
                step: "4",
                title: "Results Build",
                desc: "Fat cells release contents naturally over days. With consistent sessions, collagen rebuilds, skin tightens, and scars fade progressively.",
                color: "bg-navy/5",
                accent: "text-navy",
              },
            ].map(({ step, title, desc, color, accent }) => (
              <ScrollFadeIn key={step} delay={parseInt(step) * 80}>
                <div className={`rounded-2xl p-6 ${color} h-full`}>
                  <div className={`text-3xl font-bold ${accent} mb-3`}>{step}</div>
                  <h3 className="font-semibold text-navy mb-2">{title}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">{desc}</p>
                </div>
              </ScrollFadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* What Red Light Can Target */}
      <section className="py-20 bg-gray-50" data-testid="section-rl-targets">
        <div className="max-w-5xl mx-auto px-4">
          <ScrollFadeIn className="text-center mb-12">
            <span className="inline-block text-teal font-semibold text-sm uppercase tracking-wide mb-2">Is This for Me?</span>
            <h2 className="font-serif text-3xl font-bold text-navy mb-3">Red Light Therapy May Be Perfect If…</h2>
            <p className="text-muted-foreground">Whether you're recovering from surgery or just want to feel more confident, here's who benefits most.</p>
          </ScrollFadeIn>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                icon: Activity,
                title: "Body Contouring & Fat Reduction",
                desc: "Red light creates tiny openings in fat cell membranes, releasing stored fat to be processed naturally. Belly, arms, thighs, love handles — target areas that resist diet and exercise.",
                color: "bg-amber-50",
                iconColor: "text-amber-600",
              },
              {
                icon: Layers,
                title: "Skin Tightening & Collagen",
                desc: "Activates fibroblasts to produce collagen and elastin — the proteins that keep skin firm and youthful. Ideal after significant weight loss when skin hasn't bounced back.",
                color: "bg-pink-50",
                iconColor: "text-magenta",
              },
              {
                icon: Heart,
                title: "Post-Surgery Scar Reduction",
                desc: "Stimulates the skin's natural healing processes to break down scar tissue and rebuild with healthier collagen. Reduces bariatric, C-section, and surgical scars.",
                color: "bg-teal/10",
                iconColor: "text-teal",
              },
              {
                icon: Zap,
                title: "Inflammation & Recovery",
                desc: "Increases blood flow and reduces inflammation at the cellular level — helping surgical incisions, swelling, and bruising heal up to 50% faster.",
                color: "bg-red-50",
                iconColor: "text-red-500",
              },
              {
                icon: Sun,
                title: "Cellulite Reduction",
                desc: "Improves microcirculation and skin texture in areas prone to cellulite. Smooths and contours outer thighs, hips, and abdomen for a slimmer silhouette.",
                color: "bg-orange-50",
                iconColor: "text-orange-500",
              },
              {
                icon: Smile,
                title: "Mood & Metabolism Support",
                desc: "Red light energizes cells at the mitochondrial level, supporting your body's natural recovery systems — improving sleep, mood, and metabolic function.",
                color: "bg-yellow-50",
                iconColor: "text-yellow-600",
              },
            ].map(({ icon: Icon, title, desc, color, iconColor }) => (
              <ScrollFadeIn key={title}>
                <div className={`rounded-2xl p-6 ${color} h-full`}>
                  <div className="w-10 h-10 rounded-lg bg-white flex items-center justify-center mb-3">
                    <Icon className={`w-5 h-5 ${iconColor}`} />
                  </div>
                  <h3 className="font-semibold text-navy mb-2 text-sm">{title}</h3>
                  <p className="text-xs text-muted-foreground leading-relaxed">{desc}</p>
                </div>
              </ScrollFadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* Treatment Packages */}
      <section className="py-20 bg-white" data-testid="section-rl-pricing">
        <div className="max-w-5xl mx-auto px-4">
          <ScrollFadeIn className="text-center mb-12">
            <span className="inline-block text-teal font-semibold text-sm uppercase tracking-wide mb-2">Transparent Pricing</span>
            <h2 className="font-serif text-3xl font-bold text-navy mb-3">Treatment Packages</h2>
            <p className="text-muted-foreground">Every package includes InBody body composition scans to track your progress beyond the mirror.</p>
          </ScrollFadeIn>

          <div className="grid md:grid-cols-3 gap-6">
            {/* Post-Op Boost */}
            <ScrollFadeIn>
              <div className="bg-white rounded-2xl border shadow-sm p-6 h-full flex flex-col">
                <h3 className="font-serif text-xl font-bold text-navy mb-1">Post-Op Boost</h3>
                <p className="text-sm text-muted-foreground mb-4">Jump-start your recovery</p>
                <div className="mb-1">
                  <span className="text-3xl font-bold text-navy">$440</span>
                  <span className="text-muted-foreground text-sm line-through ml-2">$530</span>
                </div>
                <p className="text-muted-foreground text-xs mb-4">10 sessions · save $90</p>
                <ul className="space-y-2.5 mb-6 flex-1">
                  {[
                    "10 red light sessions",
                    "1 InBody composition scan (after 10th session)",
                    "Personalized treatment plan",
                    "Progress tracking",
                  ].map((f) => (
                    <li key={f} className="flex items-start gap-2 text-sm">
                      <CheckCircle2 className="w-4 h-4 text-teal mt-0.5 shrink-0" />
                      {f}
                    </li>
                  ))}
                </ul>
                <a
                  href="#book-rl"
                  className="block text-center border-2 border-teal text-teal font-semibold px-5 py-3 rounded-xl hover:bg-teal hover:text-white transition-all"
                  data-testid="btn-rl-starter"
                >
                  Get Started
                </a>
              </div>
            </ScrollFadeIn>

            {/* Steady Strength */}
            <ScrollFadeIn delay={80}>
              <div className="bg-teal rounded-2xl shadow-xl p-6 h-full flex flex-col relative text-white">
                <span className="absolute -top-3 left-1/2 -translate-x-1/2 bg-gold text-white text-xs font-bold px-4 py-1 rounded-full whitespace-nowrap">
                  MOST POPULAR
                </span>
                <h3 className="font-serif text-xl font-bold mb-1">Steady Strength</h3>
                <p className="text-white/70 text-sm mb-4">Consistent treatment, real results</p>
                <div className="mb-1">
                  <span className="text-3xl font-bold">$740</span>
                  <span className="text-white/60 text-sm line-through ml-2">$840</span>
                </div>
                <p className="text-white/70 text-xs mb-4">14 sessions · save $100</p>
                <ul className="space-y-2.5 mb-6 flex-1">
                  {[
                    "14 red light sessions",
                    "2 InBody scans (start + end)",
                    "Personalized treatment plan",
                    "Progress photos & tracking",
                    "Mid-course adjustments",
                  ].map((f) => (
                    <li key={f} className="flex items-start gap-2 text-sm">
                      <CheckCircle2 className="w-4 h-4 text-white/80 mt-0.5 shrink-0" />
                      {f}
                    </li>
                  ))}
                </ul>
                <a
                  href="#book-rl"
                  className="block text-center bg-white text-teal font-semibold px-5 py-3 rounded-xl hover:bg-white/90 transition-all"
                  data-testid="btn-rl-steady"
                >
                  Get Started →
                </a>
              </div>
            </ScrollFadeIn>

            {/* Full Recharge */}
            <ScrollFadeIn delay={160}>
              <div className="bg-white rounded-2xl border-2 border-navy shadow-sm p-6 h-full flex flex-col">
                <h3 className="font-serif text-xl font-bold text-navy mb-1">Full Recharge</h3>
                <p className="text-sm text-muted-foreground mb-4">Maximum results, full support</p>
                <div className="mb-1">
                  <span className="text-3xl font-bold text-navy">$960</span>
                  <span className="text-muted-foreground text-sm line-through ml-2">$1,040</span>
                </div>
                <p className="text-muted-foreground text-xs mb-4">18 sessions · save $80</p>
                <ul className="space-y-2.5 mb-6 flex-1">
                  {[
                    "18 red light sessions",
                    "3 InBody scans (start, mid, end)",
                    "Personalized treatment plan",
                    "Progress photos & tracking",
                    "Priority scheduling",
                    "Skin care product samples",
                  ].map((f) => (
                    <li key={f} className="flex items-start gap-2 text-sm">
                      <CheckCircle2 className="w-4 h-4 text-teal mt-0.5 shrink-0" />
                      {f}
                    </li>
                  ))}
                </ul>
                <a
                  href="#book-rl"
                  className="block text-center bg-navy text-white font-semibold px-5 py-3 rounded-xl hover:bg-navy-light transition-all"
                  data-testid="btn-rl-full"
                >
                  Get Started
                </a>
              </div>
            </ScrollFadeIn>
          </div>

          <p className="text-center text-sm text-muted-foreground mt-6">
            Payment plans available. All packages include an initial no-obligation consultation. Can't decide? Book a no-obligation consultation and we'll help you choose.
          </p>
        </div>
      </section>

      {/* Red Light at Every Stage */}
      <section className="py-20 bg-navy text-white" data-testid="section-rl-stages">
        <div className="max-w-5xl mx-auto px-4">
          <ScrollFadeIn className="text-center mb-12">
            <span className="inline-block text-teal font-semibold text-sm uppercase tracking-wide mb-2">Your Journey</span>
            <h2 className="font-serif text-3xl font-bold mb-3">Red Light at Every Stage of Your Transformation</h2>
            <p className="text-white/70 max-w-2xl mx-auto">
              Whether you're preparing for surgery, recovering, or months into your GLP-1 program, red light amplifies your results at every stage.
            </p>
          </ScrollFadeIn>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {[
              {
                icon: "🏥",
                stage: "Post-Surgery Recovery",
                timing: "Weeks 4–8",
                desc: "Accelerate healing, reduce swelling and bruising, minimize scarring. Supports tissue repair during your critical recovery window.",
              },
              {
                icon: "⚖️",
                stage: "Post-Weight-Loss Shaping",
                timing: "Month 3–6",
                desc: "Tighten skin that hasn't bounced back after rapid weight loss. Contour stubborn areas that diet and exercise can't reach.",
              },
              {
                icon: "🎯",
                stage: "Stubborn Fat Areas",
                timing: "Any stage",
                desc: "Target love handles, abdomen, thighs, and bra line. Red light helps shrink fat cells in resistant areas for a slimmer silhouette.",
              },
              {
                icon: "🪞",
                stage: "Skin Quality Concerns",
                timing: "Ongoing",
                desc: "Improve texture, reduce cellulite, boost collagen production. Fine lines, wrinkles, and uneven skin tone all respond to consistent treatment.",
              },
              {
                icon: "🩹",
                stage: "Scar Concerns",
                timing: "Month 1+",
                desc: "Fade surgical and stretch mark scars. Red light promotes scar remodeling — gradually improving appearance, texture, and color.",
              },
              {
                icon: "⚡",
                stage: "Energy & Wellness",
                timing: "Anytime",
                desc: "Improve sleep, mood, and metabolism. Red light energizes cells at the mitochondrial level, supporting whole-body recovery systems.",
              },
            ].map(({ icon, stage, timing, desc }) => (
              <ScrollFadeIn key={stage}>
                <div className="bg-white/10 rounded-2xl p-6 h-full hover:bg-white/15 transition-colors">
                  <div className="text-2xl mb-3">{icon}</div>
                  <div className="flex items-center justify-between mb-2">
                    <h3 className="font-semibold">{stage}</h3>
                    <span className="text-xs bg-teal/20 text-teal px-2.5 py-1 rounded-full">{timing}</span>
                  </div>
                  <p className="text-sm text-white/70 leading-relaxed">{desc}</p>
                </div>
              </ScrollFadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* InBody Scans */}
      <section className="py-20 bg-white" data-testid="section-rl-inbody">
        <div className="max-w-5xl mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <ScrollFadeIn>
              <span className="inline-block text-teal font-semibold text-sm uppercase tracking-wide mb-2">Track Your Progress</span>
              <h2 className="font-serif text-3xl font-bold text-navy mb-4">Every Package Includes InBody Scans</h2>
              <p className="text-muted-foreground leading-relaxed mb-4">
                The scale only tells part of the story. InBody is a clinical-grade body composition analyzer that shows you exactly what's changing beneath the surface.
              </p>
              <p className="text-muted-foreground leading-relaxed mb-6">
                In 60 seconds, InBody measures your muscle mass, body fat percentage, visceral fat levels, water distribution, and more. You get a detailed printout that proves your progress is real — even when the mirror is slow to catch up.
              </p>
              <div className="grid grid-cols-2 gap-4 mb-4">
                {[
                  { value: "60 sec", label: "Scan time" },
                  { value: "10+", label: "Metrics tracked" },
                ].map(({ value, label }) => (
                  <div key={label} className="bg-teal/5 rounded-xl p-4 text-center border border-teal/10">
                    <div className="text-2xl font-bold text-teal">{value}</div>
                    <div className="text-xs text-muted-foreground mt-1">{label}</div>
                  </div>
                ))}
              </div>
            </ScrollFadeIn>

            <ScrollFadeIn delay={100}>
              <div className="bg-gray-50 rounded-2xl p-6 border">
                <h3 className="font-semibold text-navy mb-4 flex items-center gap-2">
                  <ScanLine className="w-5 h-5 text-teal" />
                  What InBody Measures
                </h3>
                <ul className="space-y-3">
                  {[
                    { metric: "Body Fat %", detail: "total and by body segment" },
                    { metric: "Muscle Mass", detail: "so you know you're losing fat, not muscle" },
                    { metric: "Visceral Fat", detail: "the dangerous fat around organs" },
                    { metric: "Water Balance", detail: "hydration and swelling levels" },
                    { metric: "Segmental Analysis", detail: "arms, legs, and trunk individually" },
                    { metric: "Basal Metabolic Rate", detail: "calories your body burns at rest" },
                  ].map(({ metric, detail }) => (
                    <li key={metric} className="flex items-start gap-3">
                      <CheckCircle2 className="w-4 h-4 text-teal mt-0.5 shrink-0" />
                      <div>
                        <span className="font-semibold text-navy text-sm">{metric}</span>
                        <span className="text-muted-foreground text-sm"> — {detail}</span>
                      </div>
                    </li>
                  ))}
                </ul>
              </div>
            </ScrollFadeIn>
          </div>
        </div>
      </section>

      {/* Clinical vs At-Home Comparison */}
      <section className="py-20 bg-gray-50" data-testid="section-rl-comparison">
        <div className="max-w-5xl mx-auto px-4">
          <ScrollFadeIn className="text-center mb-10">
            <span className="inline-block text-teal font-semibold text-sm uppercase tracking-wide mb-2">Why Lumara</span>
            <h2 className="font-serif text-3xl font-bold text-navy mb-3">Clinical vs. At-Home Devices</h2>
            <p className="text-muted-foreground">Not all red light is created equal. Here's why in-office Lumara outperforms anything you can buy online.</p>
          </ScrollFadeIn>

          <ScrollFadeIn>
            <div className="overflow-x-auto rounded-2xl border shadow-sm">
              <table className="w-full text-sm">
                <thead>
                  <tr className="border-b">
                    <th className="text-left p-4 font-semibold text-navy bg-gray-50 rounded-tl-2xl">Feature</th>
                    <th className="p-4 font-semibold text-white bg-teal text-center">New You (Lumara)</th>
                    <th className="p-4 font-semibold text-navy bg-gray-50 text-center">At-Home Panel</th>
                    <th className="p-4 font-semibold text-navy bg-gray-50 text-center rounded-tr-2xl">At-Home Mask</th>
                  </tr>
                </thead>
                <tbody>
                  {[
                    ["Energy Output", "6,000+ Joules", "200–800 J", "50–150 J"],
                    ["Session Time", "25 minutes", "20–40 min", "10–20 min"],
                    ["Tissue Penetration", "Deep", "Moderate", "Surface only"],
                    ["Body Contouring", "Yes", "Minimal", "No"],
                    ["Fat Cell Reduction", "Yes", "Minimal", "No"],
                    ["FDA Registered", "Class II", "Varies", "Varies"],
                    ["Medical Supervision", "Yes (Dr. Lange's team)", "No", "No"],
                    ["Progress Tracking", "InBody Scans", "No", "No"],
                  ].map(([feature, lumara, panel, mask], i) => (
                    <tr key={feature} className={i % 2 === 0 ? "bg-white" : "bg-gray-50"}>
                      <td className="p-4 font-medium text-navy">{feature}</td>
                      <td className="p-4 text-center font-semibold text-teal bg-teal/5">{lumara}</td>
                      <td className="p-4 text-center text-muted-foreground">{panel}</td>
                      <td className="p-4 text-center text-muted-foreground">{mask}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <p className="text-xs text-muted-foreground mt-3 text-center">
              Lumara devices are FDA-registered Class II medical devices. At-home device specs vary by manufacturer.
            </p>
          </ScrollFadeIn>
        </div>
      </section>

      {/* Patient Stories */}
      <section className="py-20 bg-white" data-testid="section-rl-testimonials">
        <div className="max-w-5xl mx-auto px-4">
          <ScrollFadeIn className="text-center mb-10">
            <span className="inline-block text-teal font-semibold text-sm uppercase tracking-wide mb-2">Patient Stories</span>
            <h2 className="font-serif text-3xl font-bold text-navy mb-3">What Our Patients Say</h2>
            <p className="text-muted-foreground">Real experiences from people who invested in themselves at New You.</p>
          </ScrollFadeIn>

          <div className="grid md:grid-cols-3 gap-6">
            {[
              {
                quote:
                  "I added red light after my sleeve surgery and the difference is incredible. My scars are fading, the swelling went down faster, and my skin is tightening in places I was worried about. It's become part of my routine now.",
                name: "Michelle R.",
                role: "Post-bariatric patient",
              },
              {
                quote:
                  "The support with New You is unmatched. I've been other places and felt completely like a number. The team here makes me feel supported, heard, and seen! My results have been amazing.",
                name: "Rainier E.",
                role: "Verified patient",
              },
              {
                quote:
                  "I was skeptical about red light but after 14 sessions the results speak for themselves. My arms and belly area look noticeably tighter and I've lost inches I couldn't budge with the gym. The InBody scans proved it wasn't just in my head.",
                name: "Danielle K.",
                role: "Body contouring patient",
              },
            ].map(({ quote, name, role }) => (
              <ScrollFadeIn key={name}>
                <div className="bg-gray-50 rounded-2xl border shadow-sm p-6 h-full flex flex-col">
                  <div className="flex text-gold mb-4">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-current" />
                    ))}
                  </div>
                  <p className="text-sm text-muted-foreground leading-relaxed flex-1 italic mb-4">"{quote}"</p>
                  <div>
                    <div className="font-semibold text-navy text-sm">{name}</div>
                    <div className="text-xs text-muted-foreground">{role}</div>
                  </div>
                </div>
              </ScrollFadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* Telehealth CTA */}
      <section className="py-16 bg-gray-50" data-testid="section-rl-telehealth">
        <div className="max-w-4xl mx-auto px-4">
          <ScrollFadeIn>
            <div className="bg-gradient-to-br from-teal/10 to-navy/10 rounded-2xl p-8 md:p-10 flex flex-col md:flex-row items-center gap-6">
              <div className="w-14 h-14 rounded-2xl bg-teal/20 flex items-center justify-center shrink-0">
                <Wifi className="w-7 h-7 text-teal" />
              </div>
              <div className="flex-1 text-center md:text-left">
                <h3 className="font-serif text-2xl font-bold text-navy mb-2">Not Sure if Red Light Is Right? Ask Virtually.</h3>
                <p className="text-muted-foreground leading-relaxed">
                  Red light sessions are in-person, but your initial consultation can be done via telehealth. Dr. Lange can assess your goals, review your treatment history, and recommend the right package before you come in.
                </p>
              </div>
              <a
                href="#book-rl"
                className="shrink-0 bg-teal hover:bg-teal-light text-white font-semibold px-6 py-3 rounded-xl transition-all whitespace-nowrap"
                data-testid="btn-rl-telehealth"
              >
                Book Virtual Consult →
              </a>
            </div>
          </ScrollFadeIn>
        </div>
      </section>

      {/* Booking Calendar */}
      <section id="book-rl" className="py-16 bg-white" data-testid="section-rl-booking">
        <div className="max-w-3xl mx-auto px-4 text-center">
          <ScrollFadeIn>
            <h2 className="font-serif text-3xl font-bold text-navy mb-3">Choose Your Session Time</h2>
            <p className="text-muted-foreground mb-8">
              Select a date and time for your no-obligation consultation or first session. In-person at our St. Louis office.
            </p>
            <div className="bg-gray-50 rounded-2xl border shadow-sm p-10 text-muted-foreground text-sm">
              <div className="text-4xl mb-3">📅</div>
              <p className="font-medium text-navy mb-1">TotalFlow AI Calendar</p>
              <p>Calendar embed for "In-Person Red Light Session" (30 min, Mon–Fri 8AM–5PM CT) and "In-Person Consultation" goes here.</p>
            </div>
            <div className="mt-6 flex items-center justify-center gap-2 text-muted-foreground text-sm">
              <Phone className="w-4 h-4" />
              Prefer to call?
              <a href="tel:3148877605" className="font-semibold text-navy hover:text-teal transition-colors">
                314-887-7605
              </a>
              · Mon–Fri 8AM–5PM
            </div>
          </ScrollFadeIn>
        </div>
      </section>

      {/* Membership Callout */}
      <section className="py-16 bg-navy text-white" data-testid="section-rl-membership">
        <div className="max-w-4xl mx-auto px-4">
          <ScrollFadeIn>
            <div className="text-center mb-8">
              <span className="inline-block text-teal font-semibold text-sm uppercase tracking-wide mb-2">Unlimited Sessions</span>
              <h2 className="font-serif text-3xl font-bold mb-3">New You Membership</h2>
              <p className="text-white/70 max-w-2xl mx-auto">
                Want ongoing sessions? New You Membership includes unlimited red light sessions, priority booking, and exclusive pricing across all services. Plans from $99/month.
              </p>
            </div>
            <div className="grid sm:grid-cols-3 gap-4">
              {[
                {
                  tier: "Wellness",
                  price: "$99",
                  features: ["10% off all services", "Monthly telehealth check-in", "Community access"],
                },
                {
                  tier: "Transform",
                  price: "$249",
                  features: ["Everything in Wellness", "2 red light sessions/month", "Monthly InBody scan"],
                  highlight: true,
                },
                {
                  tier: "VIP",
                  price: "$449",
                  features: ["Everything in Transform", "Unlimited red light sessions", "Priority scheduling"],
                },
              ].map(({ tier, price, features, highlight }) => (
                <div
                  key={tier}
                  className={`rounded-2xl p-6 ${highlight ? "bg-teal text-white" : "bg-white/10 text-white"}`}
                >
                  <div className="font-semibold text-sm mb-1 opacity-80">{tier}</div>
                  <div className="text-2xl font-bold mb-1">{price}<span className="text-sm font-normal opacity-70">/mo</span></div>
                  <ul className="space-y-1.5 mt-4">
                    {features.map((f) => (
                      <li key={f} className="text-xs flex items-start gap-2 opacity-80">
                        <CheckCircle2 className="w-3.5 h-3.5 mt-0.5 shrink-0" />
                        {f}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
            <p className="text-center text-white/50 text-sm mt-6">
              Ask about membership during your consultation or call{" "}
              <a href="tel:3148877605" className="text-teal hover:underline">314-887-7605</a>
            </p>
          </ScrollFadeIn>
        </div>
      </section>

      {/* Cross-sell */}
      <section className="py-20 bg-white" data-testid="section-rl-crosssell">
        <div className="max-w-5xl mx-auto px-4">
          <ScrollFadeIn className="text-center mb-10">
            <span className="inline-block text-teal font-semibold text-sm uppercase tracking-wide mb-2">Patients Also Explore</span>
            <h2 className="font-serif text-3xl font-bold text-navy mb-3">Complement Your Results</h2>
          </ScrollFadeIn>
          <div className="grid sm:grid-cols-3 gap-6">
            {[
              {
                icon: "🧬",
                title: "ALMA TED Hair Restoration",
                desc: "Weight loss can trigger hair shedding. If you're noticing thinning alongside your transformation, our needle-free ALMA TED treatment restores density. Complimentary evaluation.",
                href: "/hair-restoration",
                label: "Learn More →",
              },
              {
                icon: "✨",
                title: "Skin Tightening (AccentPrime)",
                desc: "Radiofrequency skin tightening for loose skin after weight loss. Pairs perfectly with red light therapy for comprehensive body contouring.",
                href: "/skin-tightening",
                label: "Learn More →",
              },
              {
                icon: "💉",
                title: "GLP-1 / Semaglutide",
                desc: "Red light + GLP-1 is one of our most popular combinations. Lose weight with medically supervised medication while red light contours and tightens as you go. From $249/month.",
                href: "/glp1",
                label: "Learn More →",
              },
            ].map(({ icon, title, desc, href, label }) => (
              <ScrollFadeIn key={title}>
                <div className="bg-gray-50 rounded-2xl border p-6 h-full flex flex-col">
                  <div className="text-2xl mb-3">{icon}</div>
                  <h3 className="font-semibold text-navy mb-2">{title}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed flex-1 mb-4">{desc}</p>
                  <Link href={href} className="text-sm font-semibold text-teal hover:text-teal-light transition-colors">
                    {label}
                  </Link>
                </div>
              </ScrollFadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* FAQs */}
      <section className="py-20 bg-gray-50" data-testid="section-rl-faqs">
        <div className="max-w-3xl mx-auto px-4">
          <ScrollFadeIn className="text-center mb-10">
            <span className="inline-block text-teal font-semibold text-sm uppercase tracking-wide mb-2">Questions</span>
            <h2 className="font-serif text-3xl font-bold text-navy mb-3">Frequently Asked</h2>
            <p className="text-muted-foreground">Everything you need to know before your first session.</p>
          </ScrollFadeIn>
          <ScrollFadeIn>
            <div className="space-y-3">
              {[
                {
                  q: "Does it hurt?",
                  a: "Not at all. You'll feel a gentle warmth on your skin. There are no needles, no burning, no discomfort. Most patients find the sessions deeply relaxing.",
                },
                {
                  q: "How many sessions do I need?",
                  a: "We recommend 2–3 sessions per week for several weeks. Our packages range from 10 to 18 sessions. Results are cumulative, so consistency is key. Your consultation will determine the right plan.",
                },
                {
                  q: "When will I see results?",
                  a: "Many patients notice smoother skin and reduced inflammation within the first few sessions. Measurable body contouring and skin tightening results typically emerge after 4–6 sessions. InBody scans track your progress objectively.",
                },
                {
                  q: "Is it safe after surgery?",
                  a: "Yes, and it's one of the best times to start. Red light helps reduce swelling, supports tissue repair, and may accelerate healing. Many of our bariatric patients add red light to their post-op plan. Always consult with Dr. Lange about timing.",
                },
                {
                  q: "What should I wear?",
                  a: "Wear something easy to slip off. Light needs direct access to the treatment area for best results. You'll be in a private room. Most patients wear undergarments or loose activewear.",
                },
                {
                  q: "Can I combine this with other services?",
                  a: "Absolutely. Red light therapy pairs beautifully with GLP-1 weight loss, bariatric surgery recovery, skin tightening procedures, and even hair restoration. Many patients use it as an accelerator alongside other treatments.",
                },
              ].map((faq) => (
                <FaqItem key={faq.q} q={faq.q} a={faq.a} />
              ))}
            </div>
          </ScrollFadeIn>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-20 bg-gradient-to-br from-navy to-teal text-white" data-testid="section-rl-final-cta">
        <div className="max-w-3xl mx-auto px-4 text-center">
          <ScrollFadeIn>
            <h2 className="font-serif text-4xl font-bold mb-4">Your Body Deserves to Catch Up</h2>
            <p className="font-serif text-2xl text-white/70 mb-4">With How Far You've Come.</p>
            <p className="text-white/70 text-lg mb-8">
              You've already done the hard work. Let red light therapy help your outside match how you feel on the inside. Book your no-obligation consultation today.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <a
                href="#book-rl"
                className="inline-flex items-center gap-2 bg-white text-teal font-semibold px-8 py-4 rounded-xl transition-all shadow-xl text-lg hover:bg-white/90"
                data-testid="btn-rl-final-cta"
              >
                Book Your Consultation <ArrowRight className="w-5 h-5" />
              </a>
              <a
                href="tel:3148877605"
                className="inline-flex items-center gap-2 bg-white/10 hover:bg-white/20 text-white font-semibold px-8 py-4 rounded-xl transition-all border border-white/20"
              >
                <Phone className="w-5 h-5" /> 314-887-7605
              </a>
            </div>
            <p className="text-white/40 text-sm mt-6">
              📍 1000 Des Peres Rd, Suite 120, St. Louis, MO 63131 · Appointments Mon–Fri 8AM–5PM
            </p>
          </ScrollFadeIn>
        </div>
      </section>
    </div>
  );
}
