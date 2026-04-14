import { useState } from "react";
import { Link } from "wouter";
import {
  ArrowRight, CheckCircle2, ChevronDown, Zap, Waves,
  Star, Shield, Clock, TrendingDown, Users, CreditCard
} from "lucide-react";
import ScrollFadeIn from "@/components/ScrollFadeIn";
import PageHero from "@/components/PageHero";
import { img } from "@/lib/img";

/* ── Accordion FAQ ── */
function FAQItem({ q, a }: { q: string; a: string }) {
  const [open, setOpen] = useState(false);
  return (
    <div className="border-b border-gray-200 last:border-0">
      <button
        onClick={() => setOpen(!open)}
        className="flex justify-between items-center w-full py-5 text-left gap-4 group"
      >
        <span className="font-semibold text-navy text-sm leading-snug">{q}</span>
        <ChevronDown
          className={`w-5 h-5 text-magenta shrink-0 transition-transform duration-200 ${open ? "rotate-180" : ""}`}
        />
      </button>
      {open && (
        <p className="text-muted-foreground text-sm leading-relaxed pb-5">{a}</p>
      )}
    </div>
  );
}

export default function SkinTightening() {
  const [form, setForm] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    area: "",
  });

  function handleChange(e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) {
    setForm({ ...form, [e.target.name]: e.target.value });
  }

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    // TotalFlow AI calendar integration point
  }

  return (
    <div>
      <PageHero
        image="/images/hero/hero-aesthetics.jpg"
        badge="Non-Surgical Body Contouring"
        title="Sculpt Your Body. Without Surgery."
        subtitle="Accent Prime uses advanced ultrasound and radiofrequency to reduce stubborn fat, tighten skin, and contour your body — zero downtime, visible results in as few as 4 treatments."
      />

      {/* Quick Stats Strip */}
      <div className="bg-navy border-b border-white/10">
        <div className="max-w-7xl mx-auto px-4 py-4">
          <div className="flex flex-wrap justify-center gap-x-8 gap-y-2 text-center">
            {[
              "30 min Sessions",
              "From $275/Session",
              "4-6 Sessions for Best Results",
              "Zero Downtime",
              "FDA Cleared",
            ].map((stat, i) => (
              <span key={stat} className="text-white/80 text-sm font-medium flex items-center gap-2">
                {i > 0 && <span className="hidden sm:inline text-white/30">·</span>}
                {stat}
              </span>
            ))}
          </div>
        </div>
      </div>

      {/* Lead Form — prominent early */}
      <section className="py-16 bg-white">
        <div className="max-w-3xl mx-auto px-4">
          <ScrollFadeIn>
            <div className="bg-gradient-to-br from-navy to-navy/90 rounded-3xl p-8 md:p-10 shadow-2xl">
              <div className="text-center mb-8">
                <span className="inline-flex items-center gap-2 bg-magenta/20 text-magenta font-semibold text-xs px-4 py-1.5 rounded-full uppercase tracking-wider mb-4">
                  Complimentary Consultation
                </span>
                <h2 className="font-serif text-2xl md:text-3xl font-bold text-white mb-2">
                  Complimentary Body Contouring Consultation
                </h2>
                <p className="text-white/60">See if Accent Prime is right for you</p>
              </div>
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-white/70 text-xs font-semibold uppercase tracking-wider mb-1.5">First Name</label>
                    <input
                      type="text"
                      name="firstName"
                      value={form.firstName}
                      onChange={handleChange}
                      placeholder="Jane"
                      className="w-full bg-white/10 border border-white/20 rounded-xl px-4 py-3 text-white placeholder:text-white/30 text-sm focus:outline-none focus:border-teal focus:bg-white/15 transition-all"
                      required
                    />
                  </div>
                  <div>
                    <label className="block text-white/70 text-xs font-semibold uppercase tracking-wider mb-1.5">Last Name</label>
                    <input
                      type="text"
                      name="lastName"
                      value={form.lastName}
                      onChange={handleChange}
                      placeholder="Smith"
                      className="w-full bg-white/10 border border-white/20 rounded-xl px-4 py-3 text-white placeholder:text-white/30 text-sm focus:outline-none focus:border-teal focus:bg-white/15 transition-all"
                      required
                    />
                  </div>
                </div>
                <div className="grid sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-white/70 text-xs font-semibold uppercase tracking-wider mb-1.5">Email</label>
                    <input
                      type="email"
                      name="email"
                      value={form.email}
                      onChange={handleChange}
                      placeholder="jane@example.com"
                      className="w-full bg-white/10 border border-white/20 rounded-xl px-4 py-3 text-white placeholder:text-white/30 text-sm focus:outline-none focus:border-teal focus:bg-white/15 transition-all"
                      required
                    />
                  </div>
                  <div>
                    <label className="block text-white/70 text-xs font-semibold uppercase tracking-wider mb-1.5">Phone</label>
                    <input
                      type="tel"
                      name="phone"
                      value={form.phone}
                      onChange={handleChange}
                      placeholder="(314) 000-0000"
                      className="w-full bg-white/10 border border-white/20 rounded-xl px-4 py-3 text-white placeholder:text-white/30 text-sm focus:outline-none focus:border-teal focus:bg-white/15 transition-all"
                      required
                    />
                  </div>
                </div>
                <div>
                  <label className="block text-white/70 text-xs font-semibold uppercase tracking-wider mb-1.5">Primary Treatment Area</label>
                  <select
                    name="area"
                    value={form.area}
                    onChange={handleChange}
                    className="w-full bg-white/10 border border-white/20 rounded-xl px-4 py-3 text-white text-sm focus:outline-none focus:border-teal focus:bg-white/15 transition-all appearance-none"
                    required
                  >
                    <option value="" className="text-gray-800">Select your primary concern...</option>
                    <option value="abdomen" className="text-gray-800">Abdomen / Stomach</option>
                    <option value="flanks" className="text-gray-800">Flanks / Love Handles</option>
                    <option value="arms" className="text-gray-800">Arms</option>
                    <option value="thighs" className="text-gray-800">Thighs</option>
                    <option value="chin" className="text-gray-800">Chin / Jawline</option>
                    <option value="multiple" className="text-gray-800">Multiple Areas</option>
                    <option value="notsure" className="text-gray-800">Not sure</option>
                  </select>
                </div>
                <button
                  type="submit"
                  className="w-full bg-magenta hover:bg-magenta-light text-white font-bold py-4 rounded-xl transition-all shadow-lg shadow-magenta/30 flex items-center justify-center gap-2 text-base"
                >
                  Book Your Consultation <ArrowRight className="w-5 h-5" />
                </button>
                <p className="text-center text-white/40 text-xs flex items-center justify-center gap-2">
                  <Shield className="w-3.5 h-3.5" />
                  HIPAA secure · Complimentary InBody scan included
                </p>
              </form>
            </div>
          </ScrollFadeIn>
        </div>
      </section>

      {/* What Is Accent Prime */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          <ScrollFadeIn className="text-center mb-14">
            <span className="inline-flex items-center gap-2 bg-teal/10 text-teal font-semibold text-sm px-4 py-1.5 rounded-full uppercase tracking-wider mb-4">
              The Technology
            </span>
            <h2 className="font-serif text-3xl md:text-4xl font-bold text-navy mb-4">What Is Accent Prime?</h2>
            <p className="text-muted-foreground text-lg max-w-3xl mx-auto leading-relaxed">
              Accent Prime is an FDA-cleared, non-surgical body contouring system that combines two powerful technologies to reshape your body — without incisions, anesthesia, or recovery time.
            </p>
          </ScrollFadeIn>

          <div className="grid md:grid-cols-2 gap-8 mb-12">
            <ScrollFadeIn>
              <div className="bg-white rounded-2xl p-8 border shadow-sm h-full">
                <div className="w-14 h-14 rounded-xl bg-blue-50 flex items-center justify-center mb-5">
                  <Waves className="w-7 h-7 text-blue-600" />
                </div>
                <h3 className="font-serif text-xl font-bold text-navy mb-3">Ultrasound</h3>
                <p className="text-muted-foreground leading-relaxed">
                  Targets and disrupts fat cells beneath the skin. Your body naturally eliminates them over the following weeks. Permanent fat reduction — those cells don't come back.
                </p>
                <div className="mt-4 inline-flex items-center gap-2 bg-blue-50 text-blue-700 text-xs font-semibold px-3 py-1.5 rounded-full">
                  Fat Disruption
                </div>
              </div>
            </ScrollFadeIn>
            <ScrollFadeIn delay={100}>
              <div className="bg-white rounded-2xl p-8 border shadow-sm h-full">
                <div className="w-14 h-14 rounded-xl bg-gold/10 flex items-center justify-center mb-5">
                  <Zap className="w-7 h-7 text-gold" />
                </div>
                <h3 className="font-serif text-xl font-bold text-navy mb-3">Radiofrequency</h3>
                <p className="text-muted-foreground leading-relaxed">
                  Heats deep tissue to stimulate collagen production, tightening and firming skin from the inside out. Unlike other treatments that only address fat OR skin, Accent Prime does both simultaneously.
                </p>
                <div className="mt-4 inline-flex items-center gap-2 bg-gold/10 text-gold text-xs font-semibold px-3 py-1.5 rounded-full">
                  Skin Tightening
                </div>
              </div>
            </ScrollFadeIn>
          </div>

          <ScrollFadeIn>
            <div className="bg-navy rounded-2xl p-8 text-center">
              <div className="flex flex-wrap justify-center gap-8">
                {[
                  { value: "FDA Cleared", label: "Clinically proven technology" },
                  { value: "3M+", label: "Treatments worldwide" },
                  { value: "Zero", label: "Downtime required" },
                  { value: "Both", label: "Fat + skin in one session" },
                ].map(({ value, label }) => (
                  <div key={label} className="text-center px-4">
                    <div className="font-serif text-2xl font-bold text-gold mb-1">{value}</div>
                    <div className="text-white/60 text-xs">{label}</div>
                  </div>
                ))}
              </div>
            </div>
          </ScrollFadeIn>
        </div>
      </section>

      {/* Treatment Areas */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <ScrollFadeIn className="text-center mb-14">
            <h2 className="font-serif text-3xl md:text-4xl font-bold text-navy mb-4">Treatment Areas</h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              Accent Prime can target virtually any area where stubborn fat or loose skin is a concern.
            </p>
          </ScrollFadeIn>

          <div className="grid sm:grid-cols-2 lg:grid-cols-5 gap-6">
            {[
              {
                icon: "🎯",
                area: "Abdomen",
                tagline: "Core sculpting and tightening",
                desc: "Flatten and tighten the midsection. Ideal for post-pregnancy skin and stubborn belly fat that won't respond to diet.",
              },
              {
                icon: "↔️",
                area: "Flanks / Love Handles",
                tagline: "Side profile contouring",
                desc: "Reduce love handles and improve your side silhouette. One of the most requested treatment areas.",
              },
              {
                icon: "💪",
                area: "Arms",
                tagline: "Upper arm firming",
                desc: "Firm and tighten the upper arms — sometimes called 'bat wings.' Visible improvement with no surgery.",
              },
              {
                icon: "🦵",
                area: "Thighs",
                tagline: "Inner & outer sculpting",
                desc: "Target inner thigh gap, outer thigh bulk, and improve skin texture and firmness throughout.",
              },
              {
                icon: "👤",
                area: "Chin & Jawline",
                tagline: "Double chin reduction",
                desc: "Define the chin, sharpen jaw contour, and reduce submental fat without injections or surgery.",
              },
            ].map(({ icon, area, tagline, desc }) => (
              <ScrollFadeIn key={area}>
                <div className="bg-white rounded-2xl border shadow-sm p-6 h-full flex flex-col hover:shadow-md hover:-translate-y-0.5 transition-all">
                  <div className="text-3xl mb-4">{icon}</div>
                  <h3 className="font-serif font-bold text-navy text-lg mb-1">{area}</h3>
                  <p className="text-teal text-xs font-semibold uppercase tracking-wider mb-3">{tagline}</p>
                  <p className="text-muted-foreground text-sm leading-relaxed flex-1">{desc}</p>
                </div>
              </ScrollFadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          <ScrollFadeIn className="text-center mb-14">
            <h2 className="font-serif text-3xl md:text-4xl font-bold text-navy mb-4">How It Works</h2>
            <p className="text-muted-foreground text-lg max-w-xl mx-auto">From consultation to results in 4 simple steps.</p>
          </ScrollFadeIn>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                step: "1",
                title: "No-Obligation Consultation",
                desc: "Meet with Dr. Lange to discuss your goals, assess your target areas, and create a personalized treatment plan.",
                color: "bg-magenta/10 text-magenta",
              },
              {
                step: "2",
                title: "Treatment Sessions",
                desc: "Relax during 30-minute sessions. Most patients describe the feeling as a warm massage. No pain, no anesthesia.",
                color: "bg-teal/10 text-teal",
              },
              {
                step: "3",
                title: "Resume Life",
                desc: "Walk out and go about your day. No downtime, no restrictions. Some redness may last 1-2 hours.",
                color: "bg-gold/10 text-gold",
              },
              {
                step: "4",
                title: "See Results",
                desc: "Results build over 4-6 sessions. Fat reduction is permanent — those cells don't come back.",
                color: "bg-green-100 text-green-700",
              },
            ].map(({ step, title, desc, color }) => (
              <ScrollFadeIn key={step}>
                <div className="relative bg-white rounded-2xl border shadow-sm p-7 h-full">
                  <div className={`w-10 h-10 rounded-xl ${color} flex items-center justify-center font-bold text-lg mb-5`}>
                    {step}
                  </div>
                  <h3 className="font-semibold text-navy text-lg mb-3">{title}</h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">{desc}</p>
                </div>
              </ScrollFadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* Treatment Timeline */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4">
          <ScrollFadeIn className="text-center mb-14">
            <h2 className="font-serif text-3xl md:text-4xl font-bold text-navy mb-4">Your Results Timeline</h2>
            <p className="text-muted-foreground text-lg max-w-xl mx-auto">What to expect at each stage of your Accent Prime journey.</p>
          </ScrollFadeIn>

          <div className="space-y-6">
            {[
              {
                phase: "Session 1",
                headline: "Immediate skin tightening",
                desc: "Immediate skin tightening effect. Area may feel warm for 1-2 hours after treatment.",
                num: "01",
              },
              {
                phase: "Sessions 2–3",
                headline: "Progressive fat reduction",
                desc: "Fat cells begin breaking down. Subtle changes start to appear. Clothes start fitting differently.",
                num: "02",
              },
              {
                phase: "Session 4",
                headline: "Visible contouring",
                desc: "Visible contouring and measurable reduction. Most patients see clear results here. Friends start noticing.",
                num: "03",
              },
              {
                phase: "Sessions 5–6",
                headline: "Full results",
                desc: "Full results achieved. Collagen remodeling continues improving skin quality for months afterward.",
                num: "04",
              },
            ].map(({ phase, headline, desc, num }) => (
              <ScrollFadeIn key={num}>
                <div className="flex gap-6 items-start bg-gray-50 rounded-2xl p-6">
                  <div className="font-serif text-4xl font-bold text-navy/10 shrink-0 w-14 text-right leading-none mt-1">{num}</div>
                  <div className="flex-1">
                    <div className="text-magenta text-xs font-bold uppercase tracking-wider mb-1">{phase}</div>
                    <h3 className="font-semibold text-navy text-lg mb-1">{headline}</h3>
                    <p className="text-muted-foreground text-sm leading-relaxed">{desc}</p>
                  </div>
                </div>
              </ScrollFadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* Comparison Table */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-5xl mx-auto px-4">
          <ScrollFadeIn className="text-center mb-14">
            <h2 className="font-serif text-3xl md:text-4xl font-bold text-navy mb-4">How Accent Prime Compares</h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">See why patients choose Accent Prime over traditional body contouring options.</p>
          </ScrollFadeIn>

          <ScrollFadeIn>
            <div className="overflow-x-auto">
              <table className="w-full bg-white rounded-2xl border shadow-sm overflow-hidden text-sm">
                <thead>
                  <tr>
                    <th className="text-left px-5 py-4 bg-gray-50 font-semibold text-muted-foreground text-xs uppercase tracking-wider">Feature</th>
                    <th className="px-5 py-4 bg-navy text-white font-bold text-center">
                      <span className="text-gold">⚡</span> Accent Prime
                    </th>
                    <th className="px-5 py-4 bg-gray-50 text-center font-semibold text-muted-foreground text-xs uppercase tracking-wider">CoolSculpting</th>
                    <th className="px-5 py-4 bg-gray-50 text-center font-semibold text-muted-foreground text-xs uppercase tracking-wider">Liposuction</th>
                  </tr>
                </thead>
                <tbody>
                  {[
                    ["Downtime", "None", "Mild swelling", "2-4 weeks"],
                    ["Session Time", "30 min", "35-60 min", "1-3 hours + anesthesia"],
                    ["Pain Level", "Warm massage", "Cold + tugging", "Surgical pain"],
                    ["Skin Tightening", "✓ Built-in RF", "✗ Not included", "✗ May worsen"],
                    ["Risk of PAH", "None", "Documented risk", "N/A"],
                    ["Cost (Per Area)", "From $275", "$600–$900", "$2,000–$5,000"],
                  ].map(([feature, ap, cool, lipo], i) => (
                    <tr key={feature} className={i % 2 === 0 ? "bg-white" : "bg-gray-50"}>
                      <td className="px-5 py-3.5 font-semibold text-navy">{feature}</td>
                      <td className="px-5 py-3.5 text-center font-semibold text-teal bg-teal/5">{ap}</td>
                      <td className="px-5 py-3.5 text-center text-muted-foreground">{cool}</td>
                      <td className="px-5 py-3.5 text-center text-muted-foreground">{lipo}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <p className="text-muted-foreground text-xs mt-4 text-center">
              * PAH = Paradoxical Adipose Hyperplasia, a rare CoolSculpting side effect where treated fat grows larger.
            </p>
          </ScrollFadeIn>
        </div>
      </section>

      {/* Pricing */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <ScrollFadeIn className="text-center mb-14">
            <h2 className="font-serif text-3xl md:text-4xl font-bold text-navy mb-3">Transparent Pricing. No hidden fees.</h2>
            <p className="text-muted-foreground text-lg">Choose the package that fits your goals.</p>
          </ScrollFadeIn>

          <div className="grid md:grid-cols-3 gap-8 mb-10">
            {[
              {
                name: "Intro",
                tag: "Single Session",
                price: "$350",
                per: "per treatment",
                highlight: false,
                features: [
                  "1 Accent Prime session",
                  "Single treatment area",
                  "Consultation included",
                  "InBody scan baseline",
                ],
                cta: "Book Consultation",
              },
              {
                name: "Transform",
                tag: "4 Sessions",
                price: "$1,200",
                per: "$300/session · Save $200",
                highlight: false,
                features: [
                  "4 Accent Prime sessions",
                  "1-2 treatment areas",
                  "Consultation + plan included",
                  "InBody scans (before + after)",
                  "Progress photos at each visit",
                ],
                cta: "Book Consultation",
              },
              {
                name: "Sculpt",
                tag: "6 Sessions · Best Value",
                price: "$1,650",
                per: "$275/session · Save $450",
                highlight: true,
                features: [
                  "6 Accent Prime sessions",
                  "Multiple treatment areas",
                  "Consultation + plan included",
                  "InBody scans (before, mid, after)",
                  "Progress photos at each visit",
                  "Priority scheduling",
                ],
                cta: "Book Consultation",
              },
            ].map(({ name, tag, price, per, highlight, features, cta }) => (
              <ScrollFadeIn key={name}>
                <div className={`rounded-2xl border p-8 h-full flex flex-col relative ${highlight ? "bg-navy border-navy shadow-2xl shadow-navy/20 ring-2 ring-gold" : "bg-white shadow-sm"}`}>
                  {highlight && (
                    <div className="absolute -top-4 left-1/2 -translate-x-1/2">
                      <span className="bg-gold text-navy text-xs font-bold px-4 py-1.5 rounded-full uppercase tracking-wider">Best Value</span>
                    </div>
                  )}
                  <div className="mb-6">
                    <h3 className={`font-serif text-xl font-bold mb-1 ${highlight ? "text-white" : "text-navy"}`}>{name}</h3>
                    <p className={`text-sm ${highlight ? "text-white/60" : "text-muted-foreground"}`}>{tag}</p>
                  </div>
                  <div className="mb-6">
                    <span className={`font-serif text-4xl font-bold ${highlight ? "text-gold" : "text-navy"}`}>{price}</span>
                    <p className={`text-xs mt-1 ${highlight ? "text-white/50" : "text-muted-foreground"}`}>{per}</p>
                  </div>
                  <ul className="space-y-2.5 flex-1 mb-8">
                    {features.map((f) => (
                      <li key={f} className="flex items-start gap-2">
                        <CheckCircle2 className={`w-4 h-4 mt-0.5 shrink-0 ${highlight ? "text-teal" : "text-teal"}`} />
                        <span className={`text-sm ${highlight ? "text-white/80" : "text-muted-foreground"}`}>{f}</span>
                      </li>
                    ))}
                  </ul>
                  <Link
                    href="/request-consultation"
                    className={`inline-flex items-center justify-center gap-2 w-full py-3.5 rounded-xl font-semibold transition-all text-sm ${highlight ? "bg-magenta hover:bg-magenta-light text-white shadow-lg shadow-magenta/30" : "bg-navy/5 hover:bg-navy hover:text-white text-navy"}`}
                  >
                    {cta} <ArrowRight className="w-4 h-4" />
                  </Link>
                </div>
              </ScrollFadeIn>
            ))}
          </div>

          <ScrollFadeIn>
            <div className="bg-gray-50 rounded-2xl p-6 text-center">
              <div className="flex flex-wrap items-center justify-center gap-3 mb-2">
                <CreditCard className="w-5 h-5 text-muted-foreground" />
                <p className="text-muted-foreground text-sm">
                  CareCredit financing available. Flexible payment plans from <strong className="text-navy">$100/month</strong>.
                  Cherry financing also available.
                </p>
              </div>
              <p className="text-muted-foreground text-xs">Visa · Mastercard · Amex · Discover · CareCredit · Cherry</p>
            </div>
          </ScrollFadeIn>
        </div>
      </section>

      {/* Is Accent Prime Right For You */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          <ScrollFadeIn className="text-center mb-14">
            <h2 className="font-serif text-3xl md:text-4xl font-bold text-navy mb-4">Is Accent Prime Right for You?</h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              Accent Prime works best for people who are close to their goal weight but have specific areas that won't respond to diet and exercise.
            </p>
          </ScrollFadeIn>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                icon: "🎯",
                title: "Stubborn Pockets",
                desc: "You're active and eat well, but certain areas won't budge — belly, love handles, arms, thighs.",
              },
              {
                icon: "⬇️",
                title: "Post Weight Loss",
                desc: "You've lost significant weight (surgery, GLP-1, or naturally) but the skin hasn't caught up yet.",
              },
              {
                icon: "📅",
                title: "Pre-Event",
                desc: "You want to look your best for a wedding, vacation, or reunion and need visible results fast.",
              },
              {
                icon: "✨",
                title: "Maintenance",
                desc: "You've already had surgery or a GLP-1 program and want to fine-tune your final results.",
              },
            ].map(({ icon, title, desc }) => (
              <ScrollFadeIn key={title}>
                <div className="bg-white rounded-2xl border shadow-sm p-7 h-full hover:shadow-md hover:-translate-y-0.5 transition-all">
                  <div className="text-3xl mb-4">{icon}</div>
                  <h3 className="font-semibold text-navy text-lg mb-2">{title}</h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">{desc}</p>
                </div>
              </ScrollFadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* Patient Testimonials */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <ScrollFadeIn className="text-center mb-14">
            <h2 className="font-serif text-3xl md:text-4xl font-bold text-navy mb-4">What Patients Are Saying</h2>
            <p className="text-muted-foreground text-lg">Real feedback from New You Accent Prime patients.</p>
          </ScrollFadeIn>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                stars: 5,
                quote: "I couldn't believe the difference after just 4 sessions. My abdomen is so much flatter and my flanks are finally smooth. And zero downtime — I went right back to work after every session.",
                name: "Jennifer M.",
                detail: "Abdomen + Flanks · 4 sessions",
              },
              {
                stars: 5,
                quote: "After my gastric sleeve I had loose skin around my midsection. Accent Prime tightened everything up without another surgery. Dr. Lange's team made the whole process easy.",
                name: "Patricia D.",
                detail: "Post-surgical contouring · 6 sessions",
              },
              {
                stars: 5,
                quote: "I was skeptical about non-surgical treatments but the results speak for themselves. My arms and bra line look completely different. I wish I'd done this years ago.",
                name: "Monica R.",
                detail: "Arms + Back · 4 sessions",
              },
            ].map(({ stars, quote, name, detail }) => (
              <ScrollFadeIn key={name}>
                <div className="bg-navy rounded-2xl p-8 text-white h-full flex flex-col">
                  <div className="flex gap-1 mb-5">
                    {Array.from({ length: stars }).map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                    ))}
                  </div>
                  <p className="text-white/80 italic leading-relaxed text-sm flex-1 mb-6">"{quote}"</p>
                  <div>
                    <p className="font-semibold text-white text-sm">{name}</p>
                    <p className="text-white/50 text-xs mt-0.5">{detail}</p>
                  </div>
                </div>
              </ScrollFadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* Telehealth CTA */}
      <section className="py-16 bg-gradient-to-r from-teal/10 to-navy/5">
        <div className="max-w-3xl mx-auto px-4 text-center">
          <ScrollFadeIn>
            <h2 className="font-serif text-2xl md:text-3xl font-bold text-navy mb-3">
              Not Sure if Accent Prime Is Right? Start with a Virtual Consult.
            </h2>
            <p className="text-muted-foreground mb-6">
              Dr. Lange can assess your goals and recommend the best treatment plan from the comfort of your home.
            </p>
            <Link
              href="/request-consultation"
              className="inline-flex items-center gap-2 bg-teal hover:opacity-90 text-white font-semibold px-8 py-4 rounded-full transition-all shadow-lg"
            >
              Book Virtual Consultation <ArrowRight className="w-5 h-5" />
            </Link>
          </ScrollFadeIn>
        </div>
      </section>

      {/* Membership Callout */}
      <section className="py-16 bg-gold/5 border-y border-gold/20">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <ScrollFadeIn>
            <div className="inline-flex items-center gap-2 bg-gold/20 text-gold font-semibold text-xs px-4 py-1.5 rounded-full uppercase tracking-wider mb-4">
              New You Membership
            </div>
            <h2 className="font-serif text-2xl md:text-3xl font-bold text-navy mb-3">
              Members Save on All Accent Prime Packages
            </h2>
            <p className="text-muted-foreground mb-6">
              Ongoing care, exclusive pricing, and priority access to all services. Plans from <strong className="text-navy">$99/month</strong>.
            </p>
            <Link
              href="/membership"
              className="inline-flex items-center gap-2 border-2 border-navy text-navy hover:bg-navy hover:text-white font-semibold px-6 py-3 rounded-full transition-all"
            >
              View Membership Plans <ArrowRight className="w-4 h-4" />
            </Link>
          </ScrollFadeIn>
        </div>
      </section>

      {/* Cross-Sell */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <ScrollFadeIn className="text-center mb-10">
            <h2 className="font-serif text-2xl md:text-3xl font-bold text-navy mb-2">Patients Also Explore</h2>
            <p className="text-muted-foreground">Complement your Accent Prime results with these services.</p>
          </ScrollFadeIn>
          <div className="grid md:grid-cols-3 gap-6">
            {[
              {
                icon: "☀️",
                title: "Red Light Therapy",
                desc: "Add Lumara red light therapy for deeper skin rejuvenation, scar reduction, and enhanced recovery. From $440.",
                href: "/aesthetics/red-light-therapy",
              },
              {
                icon: "💊",
                title: "GLP-1 Program",
                desc: "Accelerate fat loss with FDA-approved GLP-1 medication while Accent Prime sculpts and tightens. From $249/month.",
                href: "/glp1",
              },
              {
                icon: "🧬",
                title: "Hair Restoration",
                desc: "Weight loss can trigger temporary shedding. ALMA TED restores density with zero needles, zero downtime.",
                href: "/aesthetics/hair-restoration",
              },
            ].map(({ icon, title, desc, href }) => (
              <ScrollFadeIn key={title}>
                <Link href={href} className="block bg-gray-50 rounded-2xl p-7 border hover:border-navy hover:shadow-md transition-all group h-full">
                  <div className="text-3xl mb-4">{icon}</div>
                  <h3 className="font-semibold text-navy text-lg mb-2 group-hover:text-magenta transition-colors">{title}</h3>
                  <p className="text-muted-foreground text-sm leading-relaxed mb-4">{desc}</p>
                  <span className="inline-flex items-center gap-1 text-magenta text-sm font-semibold">
                    Learn More <ArrowRight className="w-3.5 h-3.5" />
                  </span>
                </Link>
              </ScrollFadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-3xl mx-auto px-4">
          <ScrollFadeIn className="text-center mb-12">
            <h2 className="font-serif text-3xl md:text-4xl font-bold text-navy mb-4">Frequently Asked Questions</h2>
            <p className="text-muted-foreground text-lg">Everything you need to know about Accent Prime body contouring.</p>
          </ScrollFadeIn>
          <ScrollFadeIn>
            <div className="bg-white rounded-2xl border shadow-sm px-8 py-4">
              {[
                {
                  q: "Does Accent Prime hurt?",
                  a: "Most patients describe the sensation as a warm massage. There's no pain and no anesthesia needed. The treated area may feel warm for 1-2 hours afterward, but you can return to all normal activities immediately.",
                },
                {
                  q: "How many sessions do I need?",
                  a: "Most patients see optimal results with 4-6 sessions spaced 2 weeks apart. Dr. Lange will create a personalized plan based on your specific goals and the areas being treated during your consultation.",
                },
                {
                  q: "How long do results last?",
                  a: "Fat reduction results are permanent — the treated fat cells are destroyed and eliminated by your body. Skin tightening results can last 1-2 years or longer with proper maintenance. Many patients do 1-2 maintenance sessions per year to keep results optimal.",
                },
                {
                  q: "What's the difference between Accent Prime and CoolSculpting?",
                  a: "CoolSculpting freezes fat cells (cryolipolysis), while Accent Prime uses ultrasound to disrupt fat AND radiofrequency to tighten skin simultaneously. Accent Prime treats both fat and skin in one session, is more comfortable, and carries less risk of side effects like the paradoxical adipose hyperplasia (PAH) associated with CoolSculpting.",
                },
                {
                  q: "Can I combine Accent Prime with other treatments?",
                  a: "Absolutely. Many of our patients combine Accent Prime with GLP-1 weight loss medication, red light therapy, or as a complement to bariatric surgery recovery. Dr. Lange will recommend the best combination based on your goals.",
                },
                {
                  q: "Is Accent Prime safe after weight loss surgery?",
                  a: "Yes. Accent Prime is an excellent option for post-bariatric patients who have loose skin or stubborn fat deposits remaining after significant weight loss. We typically recommend starting Accent Prime 3-6 months after surgery when your weight has stabilized.",
                },
              ].map(({ q, a }) => (
                <FAQItem key={q} q={q} a={a} />
              ))}
            </div>
          </ScrollFadeIn>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-20 bg-navy">
        <div className="max-w-3xl mx-auto px-4 text-center">
          <ScrollFadeIn>
            <h2 className="font-serif text-3xl md:text-4xl font-bold text-white mb-4">
              Ready to Sculpt Your New Shape?
            </h2>
            <p className="text-white/70 text-lg mb-8">
              Book your consultation with Dr. Lange. See your options. No pressure, no obligation.
            </p>
            <Link
              href="/request-consultation"
              className="inline-flex items-center gap-2 bg-magenta hover:bg-magenta-light text-white font-bold px-10 py-4 rounded-full transition-all shadow-lg shadow-magenta/30 text-lg"
            >
              Book My Consultation <ArrowRight className="w-5 h-5" />
            </Link>
            <p className="text-white/40 text-sm mt-5">
              Or call <a href="tel:3148877605" className="text-white/60 hover:text-white transition-colors">314-887-7605</a>
            </p>
          </ScrollFadeIn>
        </div>
      </section>
    </div>
  );
}
