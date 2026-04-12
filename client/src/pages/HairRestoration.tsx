import { useState } from "react";
import { Link } from "wouter";
import {
  ArrowRight,
  CheckCircle2,
  ChevronDown,
  ChevronUp,
  Zap,
  Wind,
  Sparkles,
  Clock,
  Baby,
  Dna,
  Brain,
  Pill,
  User,
  TrendingUp,
  Star,
  Shield,
  Wifi,
  Phone,
} from "lucide-react";
import ScrollFadeIn from "@/components/ScrollFadeIn";
import PageHero from "@/components/PageHero";

/* ─── Lead Form ────────────────────────────────────────────────────────────── */
function HairLeadForm() {
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    concern: "",
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
          Our team will contact you within 24 hours to schedule your free scalp evaluation.
        </p>
      </div>
    );
  }

  const inputCls =
    "w-full px-4 py-3 rounded-xl border border-gray-200 bg-gray-50 text-sm outline-none transition-all focus:ring-2 focus:ring-magenta/20 focus:border-magenta";

  return (
    <form
      onSubmit={handleSubmit}
      className="bg-white rounded-2xl shadow-xl border p-6 md:p-8 space-y-4"
      data-testid="form-hair-lead"
    >
      <div>
        <h3 className="font-serif text-xl font-bold text-navy mb-1">
          Book Your Free Scalp Evaluation
        </h3>
        <p className="text-sm text-muted-foreground">
          No cost, no commitment. We'll assess your situation and build your plan.
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
          data-testid="input-hair-first-name"
        />
        <input
          type="text"
          required
          placeholder="Last Name"
          value={formData.lastName}
          onChange={(e) => setFormData({ ...formData, lastName: e.target.value })}
          className={inputCls}
          data-testid="input-hair-last-name"
        />
        <input
          type="email"
          required
          placeholder="Email Address"
          value={formData.email}
          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
          className={inputCls}
          data-testid="input-hair-email"
        />
        <input
          type="tel"
          required
          placeholder="Phone Number"
          value={formData.phone}
          onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
          className={inputCls}
          data-testid="input-hair-phone"
        />
      </div>

      <select
        value={formData.concern}
        onChange={(e) => setFormData({ ...formData, concern: e.target.value })}
        className={`${inputCls} ${!formData.concern ? "text-muted-foreground" : ""}`}
        data-testid="select-hair-concern"
      >
        <option value="">What Best Describes Your Hair Concern?</option>
        <option value="post-weight-loss">Post-weight-loss shedding</option>
        <option value="postpartum">Postpartum hair loss</option>
        <option value="genetic">Genetic thinning</option>
        <option value="stress">Stress-related loss</option>
        <option value="age">Age-related thinning</option>
        <option value="medication">Medication side effects</option>
        <option value="other">Other</option>
      </select>

      <button
        type="submit"
        className="w-full bg-magenta hover:bg-magenta-light text-white font-semibold px-6 py-3.5 rounded-xl transition-all flex items-center justify-center gap-2 shadow-lg hover:shadow-xl text-base"
        data-testid="button-hair-submit"
      >
        Request Free Evaluation <ArrowRight className="w-4 h-4" />
      </button>

      <p className="text-xs text-center text-muted-foreground flex items-center justify-center gap-1.5">
        <Shield className="w-3.5 h-3.5" />
        HIPAA secure · Zero obligation · Results within 24 hours
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
        data-testid="faq-toggle"
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
export default function HairRestoration() {
  return (
    <div>
      {/* Hero */}
      <PageHero
        image="/images/hero/hero-aesthetics.jpg"
        badge="No Needles · No Downtime"
        title="Thicker, Fuller Hair. No Needles. No Downtime."
        subtitle="Medical-grade ALMA TED ultrasound hair restoration. Strengthens follicles and stimulates regrowth in just 20 minutes."
      />

      {/* Quick Stats Strip */}
      <section className="bg-navy py-4">
        <div className="max-w-5xl mx-auto px-4">
          <div className="flex flex-wrap items-center justify-center gap-x-8 gap-y-2 text-white/90 text-sm font-medium">
            {["No Needles", "No Pain", "Zero Downtime", "20-Min Sessions"].map((stat, i) => (
              <span key={stat} className="flex items-center gap-2">
                {i > 0 && <span className="text-white/30 hidden sm:inline">·</span>}
                <span className="text-teal font-semibold">✦</span> {stat}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* Lead Form + Stats — Early Placement */}
      <section className="py-16 bg-gradient-to-br from-navy/5 via-white to-teal/5" data-testid="section-hair-early-form">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-start">
            <ScrollFadeIn>
              <div className="space-y-8">
                <div>
                  <span className="inline-block text-magenta font-semibold text-sm uppercase tracking-wide mb-2">
                    ALMA TED Hair Restoration
                  </span>
                  <h2 className="font-serif text-3xl md:text-4xl font-bold text-navy mb-4">
                    Hair Loss Doesn't Have to Be Permanent.
                  </h2>
                  <p className="text-muted-foreground text-lg leading-relaxed">
                    Most follicles affected by thinning are still alive — they just need targeted support to reactivate. ALMA TED delivers growth factors directly where they're needed, without a single needle.
                  </p>
                </div>

                {/* Clinical stats */}
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
                  {[
                    { value: "31%", label: "Density Increase" },
                    { value: "98%", label: "Reduced Shedding" },
                    { value: "100%", label: "Satisfaction Rate" },
                    { value: "0", label: "Needles Required" },
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
              <HairLeadForm />
            </ScrollFadeIn>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-20 bg-white" data-testid="section-hair-how-it-works">
        <div className="max-w-5xl mx-auto px-4">
          <ScrollFadeIn className="text-center mb-12">
            <span className="inline-block text-magenta font-semibold text-sm uppercase tracking-wide mb-2">Your Journey</span>
            <h2 className="font-serif text-3xl font-bold text-navy mb-3">How It Works</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              From your first consultation to visible results — here's your complete timeline.
            </p>
          </ScrollFadeIn>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                step: "1",
                title: "Free Evaluation",
                desc: "Our team assesses your scalp health, thinning patterns, and medical history. You leave with a personalized treatment plan and clear pricing.",
                color: "bg-navy/5",
                accent: "text-navy",
              },
              {
                step: "2",
                title: "ALMA TED Session",
                desc: "Relax for 20 minutes as ultrasound waves deliver growth-boosting peptides deep into your scalp. No needles, no numbing cream, no pain.",
                color: "bg-magenta/5",
                accent: "text-magenta",
              },
              {
                step: "3",
                title: "Walk Out & Live",
                desc: "Zero downtime. Drive, work, exercise — just avoid washing your hair for 24 hours. Life doesn't stop.",
                color: "bg-teal/5",
                accent: "text-teal",
              },
              {
                step: "4",
                title: "Watch It Grow",
                desc: "Reduced shedding within weeks. Visible density improvements by month 2–3. Optimal results after 3 sessions, one month apart.",
                color: "bg-gold/10",
                accent: "text-gold",
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

      {/* Why ALMA TED Works */}
      <section className="py-20 bg-navy text-white" data-testid="section-hair-technology">
        <div className="max-w-5xl mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <ScrollFadeIn>
              <span className="inline-block text-teal font-semibold text-sm uppercase tracking-wide mb-2">The Technology</span>
              <h2 className="font-serif text-3xl font-bold mb-4">Why ALMA TED Works</h2>
              <p className="text-white/80 leading-relaxed mb-6">
                TED stands for TransEpidermal Delivery — a patented system that creates temporary micro-channels in the scalp using acoustic sound waves and air pressure. This delivers a serum of peptides and growth factors directly to your follicles, bypassing the skin barrier entirely. No needles. No incisions. Just science.
              </p>
              <p className="text-white/80 leading-relaxed mb-6">
                Unlike topical products that sit on the surface, ALMA TED increases blood flow to the scalp, nourishes dormant follicles, and supports your hair's natural growth cycle. Most follicles affected by thinning are still alive — they just need the right support to reactivate.
              </p>
              <div className="grid grid-cols-2 gap-4">
                {[
                  { value: "23%", label: "Density at 1 month" },
                  { value: "31%", label: "Density at 6 months" },
                  { value: "96%", label: "Increased growth" },
                  { value: "89%", label: "Visible improvement" },
                ].map(({ value, label }) => (
                  <div key={label} className="bg-white/10 rounded-xl p-4 text-center">
                    <div className="text-2xl font-bold text-teal">{value}</div>
                    <div className="text-xs text-white/60 mt-1">{label}</div>
                  </div>
                ))}
              </div>
              <p className="text-xs text-white/40 mt-3">Based on Alma clinical studies (N=31, N=50). Individual results may vary.</p>
            </ScrollFadeIn>

            <ScrollFadeIn delay={100}>
              <div className="space-y-4">
                {[
                  {
                    icon: Zap,
                    title: "Acoustic Sound Waves",
                    desc: "Opens temporary micro-channels in the scalp surface, allowing precise delivery of active ingredients.",
                  },
                  {
                    icon: Wind,
                    title: "Air Pressure Technology",
                    desc: "Drives the serum deep into follicle-level tissue — far more effective than anything applied topically at home.",
                  },
                  {
                    icon: Sparkles,
                    title: "Growth Factor Serum",
                    desc: "Vitamins, peptides, and growth factors delivered directly to follicles where they can actually make a difference.",
                  },
                ].map(({ icon: Icon, title, desc }) => (
                  <div key={title} className="flex items-start gap-4 bg-white/10 rounded-xl p-5">
                    <div className="w-10 h-10 rounded-lg bg-teal/20 flex items-center justify-center shrink-0">
                      <Icon className="w-5 h-5 text-teal" />
                    </div>
                    <div>
                      <h3 className="font-semibold mb-1">{title}</h3>
                      <p className="text-sm text-white/70 leading-relaxed">{desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </ScrollFadeIn>
          </div>
        </div>
      </section>

      {/* Who It's For */}
      <section className="py-20 bg-white" data-testid="section-hair-who-its-for">
        <div className="max-w-5xl mx-auto px-4">
          <ScrollFadeIn className="text-center mb-12">
            <span className="inline-block text-magenta font-semibold text-sm uppercase tracking-wide mb-2">Is This for Me?</span>
            <h2 className="font-serif text-3xl font-bold text-navy mb-3">ALMA TED Treats Many Types of Hair Loss</h2>
            <p className="text-muted-foreground">Men and women. All hair types. Here are the most common situations we see.</p>
          </ScrollFadeIn>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                icon: TrendingUp,
                title: "Post-Weight-Loss Shedding",
                desc: "Rapid changes in nutrition and hormones after surgery or GLP-1 can shift hair into shedding phase 3–6 months post-op. TED helps reset the growth cycle.",
                tag: "Very Common",
                tagColor: "bg-magenta/10 text-magenta",
              },
              {
                icon: Baby,
                title: "Postpartum Hair Loss",
                desc: "Hormonal shifts after pregnancy cause noticeable thinning. TED supports follicle recovery during this transitional period.",
                tag: "Hormonal",
                tagColor: "bg-teal/10 text-teal",
              },
              {
                icon: Dna,
                title: "Genetic Thinning",
                desc: "Male pattern baldness, receding hairlines, hereditary thinning. TED strengthens weakened follicles and promotes density.",
                tag: "Genetic",
                tagColor: "bg-navy/10 text-navy",
              },
              {
                icon: Brain,
                title: "Stress-Related Loss",
                desc: "Telogen effluvium from life stress, illness, or emotional strain. TED nourishes follicles and supports return to healthy growth.",
                tag: "Effluvium",
                tagColor: "bg-gold/20 text-gold",
              },
              {
                icon: Clock,
                title: "Age-Related Thinning",
                desc: "Natural thinning that comes with aging. TED increases blood flow and delivers growth factors to revitalize slowing follicles.",
                tag: "Age-Related",
                tagColor: "bg-teal/10 text-teal",
              },
              {
                icon: Pill,
                title: "Medication Side Effects",
                desc: "Some medications cause hair changes. TED provides external support to help follicles maintain strength during treatment.",
                tag: "Medication",
                tagColor: "bg-magenta/10 text-magenta",
              },
            ].map(({ icon: Icon, title, desc, tag, tagColor }) => (
              <ScrollFadeIn key={title}>
                <div className="bg-gray-50 rounded-2xl p-6 h-full border hover:border-magenta/20 hover:shadow-md transition-all">
                  <div className="flex items-start justify-between mb-3">
                    <div className="w-10 h-10 rounded-lg bg-white border flex items-center justify-center">
                      <Icon className="w-5 h-5 text-navy" />
                    </div>
                    <span className={`text-xs font-semibold px-2.5 py-1 rounded-full ${tagColor}`}>{tag}</span>
                  </div>
                  <h3 className="font-semibold text-navy mb-2">{title}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">{desc}</p>
                </div>
              </ScrollFadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* Treatment Packages */}
      <section className="py-20 bg-gradient-to-br from-navy/5 to-teal/5" data-testid="section-hair-pricing">
        <div className="max-w-5xl mx-auto px-4">
          <ScrollFadeIn className="text-center mb-12">
            <span className="inline-block text-magenta font-semibold text-sm uppercase tracking-wide mb-2">Transparent Pricing</span>
            <h2 className="font-serif text-3xl font-bold text-navy mb-3">Treatment Packages</h2>
            <p className="text-muted-foreground">Clear pricing, no surprises. Every package starts with a free scalp evaluation.</p>
          </ScrollFadeIn>

          <div className="grid md:grid-cols-3 gap-6">
            {/* Starter */}
            <ScrollFadeIn>
              <div className="bg-white rounded-2xl border shadow-sm p-6 h-full flex flex-col">
                <h3 className="font-serif text-xl font-bold text-navy mb-1">Starter</h3>
                <p className="text-sm text-muted-foreground mb-4">Try a single session</p>
                <div className="mb-4">
                  <span className="text-3xl font-bold text-navy">$600</span>
                  <span className="text-muted-foreground text-sm"> / session</span>
                </div>
                <ul className="space-y-2.5 mb-6 flex-1">
                  {[
                    "1 ALMA TED treatment",
                    "Full scalp evaluation",
                    "Personalized treatment plan",
                    "Post-treatment care guide",
                  ].map((f) => (
                    <li key={f} className="flex items-start gap-2 text-sm">
                      <CheckCircle2 className="w-4 h-4 text-teal mt-0.5 shrink-0" />
                      {f}
                    </li>
                  ))}
                </ul>
                <a
                  href="#book"
                  className="block text-center border-2 border-navy text-navy font-semibold px-5 py-3 rounded-xl hover:bg-navy hover:text-white transition-all"
                  data-testid="btn-hair-starter"
                >
                  Book Evaluation
                </a>
              </div>
            </ScrollFadeIn>

            {/* Complete — Recommended */}
            <ScrollFadeIn delay={80}>
              <div className="bg-magenta rounded-2xl shadow-xl p-6 h-full flex flex-col relative text-white">
                <span className="absolute -top-3 left-1/2 -translate-x-1/2 bg-gold text-white text-xs font-bold px-4 py-1 rounded-full whitespace-nowrap">
                  RECOMMENDED
                </span>
                <h3 className="font-serif text-xl font-bold mb-1">Complete</h3>
                <p className="text-white/70 text-sm mb-4">Recommended 3-session series</p>
                <div className="mb-1">
                  <span className="text-3xl font-bold">$1,500</span>
                </div>
                <p className="text-white/70 text-xs mb-4">3 sessions · $500/ea · save $300</p>
                <ul className="space-y-2.5 mb-6 flex-1">
                  {[
                    "3 ALMA TED treatments",
                    "Full scalp evaluation",
                    "Personalized treatment plan",
                    "Progress photos at each session",
                    "Email support between sessions",
                  ].map((f) => (
                    <li key={f} className="flex items-start gap-2 text-sm">
                      <CheckCircle2 className="w-4 h-4 text-white/80 mt-0.5 shrink-0" />
                      {f}
                    </li>
                  ))}
                </ul>
                <a
                  href="#book"
                  className="block text-center bg-white text-magenta font-semibold px-5 py-3 rounded-xl hover:bg-white/90 transition-all"
                  data-testid="btn-hair-complete"
                >
                  Book Evaluation →
                </a>
              </div>
            </ScrollFadeIn>

            {/* Premium */}
            <ScrollFadeIn delay={160}>
              <div className="bg-white rounded-2xl border-2 border-navy shadow-sm p-6 h-full flex flex-col">
                <h3 className="font-serif text-xl font-bold text-navy mb-1">Premium</h3>
                <p className="text-sm text-muted-foreground mb-4">Full treatment + maintenance</p>
                <div className="mb-1">
                  <span className="text-3xl font-bold text-navy">$2,700</span>
                </div>
                <p className="text-muted-foreground text-xs mb-4">6 sessions · $450/ea · save $900</p>
                <ul className="space-y-2.5 mb-6 flex-1">
                  {[
                    "6 ALMA TED treatments",
                    "Full scalp evaluation",
                    "Personalized treatment plan",
                    "Progress photos at each session",
                    "Priority scheduling",
                    "Nutrafol supplement kit",
                    "Direct provider access",
                  ].map((f) => (
                    <li key={f} className="flex items-start gap-2 text-sm">
                      <CheckCircle2 className="w-4 h-4 text-teal mt-0.5 shrink-0" />
                      {f}
                    </li>
                  ))}
                </ul>
                <a
                  href="#book"
                  className="block text-center bg-navy text-white font-semibold px-5 py-3 rounded-xl hover:bg-navy-light transition-all"
                  data-testid="btn-hair-premium"
                >
                  Book Evaluation
                </a>
              </div>
            </ScrollFadeIn>
          </div>

          <p className="text-center text-sm text-muted-foreground mt-6">
            Payment plans available. Your exact treatment plan and pricing will be confirmed during your free evaluation.
          </p>
        </div>
      </section>

      {/* Comparison Table */}
      <section className="py-20 bg-white" data-testid="section-hair-comparison">
        <div className="max-w-5xl mx-auto px-4">
          <ScrollFadeIn className="text-center mb-10">
            <span className="inline-block text-magenta font-semibold text-sm uppercase tracking-wide mb-2">Compare Options</span>
            <h2 className="font-serif text-3xl font-bold text-navy mb-3">How ALMA TED Stacks Up</h2>
            <p className="text-muted-foreground">See why patients choose TED over traditional hair restoration methods.</p>
          </ScrollFadeIn>

          <ScrollFadeIn>
            <div className="overflow-x-auto rounded-2xl border shadow-sm">
              <table className="w-full text-sm">
                <thead>
                  <tr className="border-b">
                    <th className="text-left p-4 font-semibold text-navy bg-gray-50 rounded-tl-2xl">Feature</th>
                    <th className="p-4 font-semibold text-white bg-magenta text-center">ALMA TED</th>
                    <th className="p-4 font-semibold text-navy bg-gray-50 text-center">PRP Injections</th>
                    <th className="p-4 font-semibold text-navy bg-gray-50 text-center">Topical (Minoxidil)</th>
                    <th className="p-4 font-semibold text-navy bg-gray-50 text-center rounded-tr-2xl">Hair Transplant</th>
                  </tr>
                </thead>
                <tbody>
                  {[
                    ["Needles", "None", "Yes (many)", "None", "Yes (surgical)"],
                    ["Pain", "None", "Moderate", "None", "Significant"],
                    ["Downtime", "Zero", "24–48 hrs", "None", "1–2 weeks"],
                    ["Sessions", "3–6", "3–6", "Daily (ongoing)", "1 (long)"],
                    ["Results Timeline", "3–6 months", "3–6 months", "4–6 months", "6–12 months"],
                    ["Cost", "$450–600/session", "$500–1,500/session", "$20–50/month", "$4,000–15,000"],
                  ].map(([feature, ted, prp, topical, transplant], i) => (
                    <tr key={feature} className={i % 2 === 0 ? "bg-white" : "bg-gray-50"}>
                      <td className="p-4 font-medium text-navy">{feature}</td>
                      <td className="p-4 text-center font-semibold text-magenta bg-magenta/5">{ted}</td>
                      <td className="p-4 text-center text-muted-foreground">{prp}</td>
                      <td className="p-4 text-center text-muted-foreground">{topical}</td>
                      <td className="p-4 text-center text-muted-foreground">{transplant}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </ScrollFadeIn>
        </div>
      </section>

      {/* Patient Stories */}
      <section className="py-20 bg-gradient-to-br from-navy/5 to-magenta/5" data-testid="section-hair-testimonials">
        <div className="max-w-5xl mx-auto px-4">
          <ScrollFadeIn className="text-center mb-10">
            <span className="inline-block text-magenta font-semibold text-sm uppercase tracking-wide mb-2">Patient Stories</span>
            <h2 className="font-serif text-3xl font-bold text-navy mb-3">What Our Patients Say</h2>
            <p className="text-muted-foreground">Real experiences from people who took the first step with New You.</p>
          </ScrollFadeIn>

          <div className="grid md:grid-cols-3 gap-6">
            {[
              {
                quote:
                  "I started noticing thinning about 4 months after my sleeve surgery. Dr. Lange's team explained exactly why it was happening and the ALMA TED sessions made a huge difference. My hair feels thicker and I've stopped shedding.",
                name: "Sarah T.",
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
                  "I was so nervous about my receding hairline and had tried everything. The ALMA TED treatment was so easy — no pain at all, 20 minutes, and I was done. After my second session I could already see baby hairs coming in.",
                name: "Marcus J.",
                role: "Age-related thinning",
              },
            ].map(({ quote, name, role }) => (
              <ScrollFadeIn key={name}>
                <div className="bg-white rounded-2xl border shadow-sm p-6 h-full flex flex-col">
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
      <section className="py-16 bg-white" data-testid="section-hair-telehealth">
        <div className="max-w-4xl mx-auto px-4">
          <ScrollFadeIn>
            <div className="bg-gradient-to-br from-teal/10 to-navy/10 rounded-2xl p-8 md:p-10 flex flex-col md:flex-row items-center gap-6">
              <div className="w-14 h-14 rounded-2xl bg-teal/20 flex items-center justify-center shrink-0">
                <Wifi className="w-7 h-7 text-teal" />
              </div>
              <div className="flex-1 text-center md:text-left">
                <h3 className="font-serif text-2xl font-bold text-navy mb-2">Can't Make It In? Start Virtually.</h3>
                <p className="text-muted-foreground leading-relaxed">
                  Virtual hair consultations available for an initial assessment and treatment planning. Dr. Lange can evaluate your situation via video and recommend a path forward before you travel to St. Louis.
                </p>
              </div>
              <a
                href="#book"
                className="shrink-0 bg-teal hover:bg-teal-light text-white font-semibold px-6 py-3 rounded-xl transition-all whitespace-nowrap"
                data-testid="btn-hair-telehealth"
              >
                Book Virtual Consult →
              </a>
            </div>
          </ScrollFadeIn>
        </div>
      </section>

      {/* Booking Calendar */}
      <section id="book" className="py-16 bg-gray-50" data-testid="section-hair-booking">
        <div className="max-w-3xl mx-auto px-4 text-center">
          <ScrollFadeIn>
            <h2 className="font-serif text-3xl font-bold text-navy mb-3">Choose Your Evaluation Time</h2>
            <p className="text-muted-foreground mb-8">
              Select a date and time. In-person at our St. Louis office or virtual consultation via telehealth. Free, no obligation.
            </p>
            <div className="bg-white rounded-2xl border shadow-sm p-10 text-muted-foreground text-sm">
              <div className="text-4xl mb-3">📅</div>
              <p className="font-medium text-navy mb-1">TotalFlow AI Calendar</p>
              <p>Calendar embed for "In-Person Hair/Scalp Evaluation" (30 min, Mon–Fri 9AM–5PM CT) and "Telehealth Hair Consultation" goes here.</p>
            </div>
            <div className="mt-6 flex items-center justify-center gap-2 text-muted-foreground text-sm">
              <Phone className="w-4 h-4" />
              Prefer to call?
              <a href="tel:3148877605" className="font-semibold text-navy hover:text-magenta transition-colors">
                314-887-7605
              </a>
              · Mon–Fri 8AM–5PM
            </div>
          </ScrollFadeIn>
        </div>
      </section>

      {/* Membership Callout */}
      <section className="py-16 bg-navy text-white" data-testid="section-hair-membership">
        <div className="max-w-4xl mx-auto px-4">
          <ScrollFadeIn>
            <div className="text-center mb-8">
              <span className="inline-block text-teal font-semibold text-sm uppercase tracking-wide mb-2">Save More</span>
              <h2 className="font-serif text-3xl font-bold mb-3">New You Membership</h2>
              <p className="text-white/70 max-w-2xl mx-auto">
                Members save 10–20% on all hair restoration packages. Plans from $99/month. Plus access to all New You services at discounted rates.
              </p>
            </div>
            <div className="grid sm:grid-cols-3 gap-4">
              {[
                {
                  tier: "Wellness",
                  price: "$99",
                  features: ["10% off all services", "Monthly telehealth check-in", "Community access", "Vitamin store discounts"],
                },
                {
                  tier: "Transform",
                  price: "$249",
                  features: ["Everything in Wellness", "2 red light sessions/month", "Bi-weekly check-ins", "Monthly InBody scan"],
                  highlight: true,
                },
                {
                  tier: "VIP",
                  price: "$449",
                  features: ["Everything in Transform", "Unlimited red light sessions", "Monthly dietitian sessions", "Priority scheduling"],
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
      <section className="py-20 bg-white" data-testid="section-hair-crosssell">
        <div className="max-w-5xl mx-auto px-4">
          <ScrollFadeIn className="text-center mb-10">
            <span className="inline-block text-magenta font-semibold text-sm uppercase tracking-wide mb-2">Patients Also Explore</span>
            <h2 className="font-serif text-3xl font-bold text-navy mb-3">Complement Your Results</h2>
          </ScrollFadeIn>
          <div className="grid sm:grid-cols-3 gap-6">
            {[
              {
                icon: "🔴",
                title: "Red Light Therapy",
                desc: "Medical-grade Lumara red light supports scalp health, skin tightening, and body contouring. Many hair patients add red light sessions to accelerate overall results. Packages from $440.",
                href: "/red-light-therapy",
                label: "Learn More →",
              },
              {
                icon: "💊",
                title: "Nutrafol Supplements",
                desc: "Clinician-recommended hair growth supplements available in our vitamin store. The perfect complement to your ALMA TED treatment series.",
                href: "/vitamin-store",
                label: "Shop Supplements →",
              },
              {
                icon: "✨",
                title: "Skin Tightening",
                desc: "AccentPrime radiofrequency for loose skin after weight loss. Commonly paired with hair restoration for a complete confidence transformation.",
                href: "/skin-tightening",
                label: "Learn More →",
              },
            ].map(({ icon, title, desc, href, label }) => (
              <ScrollFadeIn key={title}>
                <div className="bg-gray-50 rounded-2xl border p-6 h-full flex flex-col">
                  <div className="text-2xl mb-3">{icon}</div>
                  <h3 className="font-semibold text-navy mb-2">{title}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed flex-1 mb-4">{desc}</p>
                  <Link href={href} className="text-sm font-semibold text-magenta hover:text-magenta-light transition-colors">
                    {label}
                  </Link>
                </div>
              </ScrollFadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* FAQs */}
      <section className="py-20 bg-gray-50" data-testid="section-hair-faqs">
        <div className="max-w-3xl mx-auto px-4">
          <ScrollFadeIn className="text-center mb-10">
            <span className="inline-block text-magenta font-semibold text-sm uppercase tracking-wide mb-2">Questions</span>
            <h2 className="font-serif text-3xl font-bold text-navy mb-3">Frequently Asked</h2>
            <p className="text-muted-foreground">Everything you need to know before your first session.</p>
          </ScrollFadeIn>
          <ScrollFadeIn>
            <div className="space-y-3">
              {[
                {
                  q: "Does ALMA TED hurt?",
                  a: "Not at all. Most patients describe a gentle warmth and light vibration. No needles, no incisions, no anesthesia. Many find the treatment relaxing.",
                },
                {
                  q: "How many sessions do I need?",
                  a: "3 sessions spaced one month apart is standard. After the initial series, maintenance sessions every 3–6 months sustain results. Your plan is customized during the free evaluation.",
                },
                {
                  q: "When will I see results?",
                  a: "Reduced shedding within weeks. Visible density improvements by month 2–3. Continued improvement through 6 months after treatment.",
                },
                {
                  q: "Can men and women both get this?",
                  a: "Absolutely. ALMA TED works for all hair types and both genders — thinning, shedding, receding, or density loss from any cause.",
                },
                {
                  q: "What if I've had weight loss surgery?",
                  a: "Post-bariatric shedding peaks around 3–6 months after surgery and is very common. ALMA TED is ideal for these patients. Dr. Lange's team understands the unique nutritional and hormonal factors at play.",
                },
                {
                  q: "Any aftercare required?",
                  a: "Minimal. Avoid washing your hair for 24 hours. Avoid heavy sweating for 24 hours. Skip heat styling tools for a day. That's it — resume normal life immediately.",
                },
              ].map((faq) => (
                <FaqItem key={faq.q} q={faq.q} a={faq.a} />
              ))}
            </div>
          </ScrollFadeIn>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-20 bg-gradient-to-br from-navy to-navy-light text-white" data-testid="section-hair-final-cta">
        <div className="max-w-3xl mx-auto px-4 text-center">
          <ScrollFadeIn>
            <h2 className="font-serif text-4xl font-bold mb-4">Your Hair Can Grow Back.</h2>
            <p className="font-serif text-2xl text-white/70 mb-4">Let's Make It Happen.</p>
            <p className="text-white/70 text-lg mb-8">
              Book your free scalp evaluation. No cost, no commitment — just a conversation about your options with a team that understands hair loss from the inside out.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <a
                href="#book"
                className="inline-flex items-center gap-2 bg-magenta hover:bg-magenta-light text-white font-semibold px-8 py-4 rounded-xl transition-all shadow-xl text-lg"
                data-testid="btn-hair-final-cta"
              >
                Book Free Evaluation <ArrowRight className="w-5 h-5" />
              </a>
              <a
                href="tel:3148877605"
                className="inline-flex items-center gap-2 bg-white/10 hover:bg-white/20 text-white font-semibold px-8 py-4 rounded-xl transition-all border border-white/20"
              >
                <Phone className="w-5 h-5" /> 314-887-7605
              </a>
            </div>
            <p className="text-white/40 text-sm mt-6">
              📍 1000 Des Peres Rd, Suite 120, St. Louis, MO 63131 · Telehealth evaluations available
            </p>
          </ScrollFadeIn>
        </div>
      </section>
    </div>
  );
}
