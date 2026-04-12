import { useState } from "react";
import { Link } from "wouter";
import {
  ArrowRight,
  CheckCircle2,
  ChevronDown,
  Star,
  Shield,
  Phone,
  Video,
  Sparkles,
  Zap,
  Brain,
  Heart,
  Users,
  Calendar,
  Activity,
  Utensils,
  BarChart2,
  Smartphone,
  Gift,
} from "lucide-react";
import ScrollFadeIn from "@/components/ScrollFadeIn";
import PageHero from "@/components/PageHero";
import LeadForm from "@/components/LeadForm";
import { img } from "@/lib/img";

export default function GLP1() {
  return (
    <div>
      {/* Hero */}
      <PageHero
        image="/images/hero/hero-glp1.jpg"
        badge="No Surgery Required"
        title="Lose 15-20% of Your Body Weight"
        subtitle="FDA-approved GLP-1 medication with medical supervision by Dr. Lange. Starting at $249/month."
      />

      {/* Quick Stats Strip */}
      <QuickStatsStrip />

      {/* Quote Section */}
      <QuoteSection />

      {/* What's Included Monthly */}
      <WhatsIncluded />

      {/* How It Works */}
      <HowItWorks />

      {/* Pricing */}
      <PricingSection />

      {/* Milestone Rewards */}
      <MilestoneRewards />

      {/* Comparison Table */}
      <ComparisonTable />

      {/* Telehealth CTA */}
      <TelehealthCTA />

      {/* Patient Stories */}
      <PatientStories />

      {/* FAQs */}
      <GLP1FAQs />

      {/* Cross-sell */}
      <PatientsAlsoExplore />

      {/* New You Membership callout */}
      <MembershipCallout />
    </div>
  );
}

/* ─── Quick Stats Strip ─────────────────────────────────── */
function QuickStatsStrip() {
  const stats = [
    { val: "25 min", label: "Consultation" },
    { val: "$249", label: "Starts At / Month" },
    { val: "0", label: "Surgery Required" },
    { val: "FDA", label: "Approved Medication" },
    { val: "📱", label: "Telehealth Option" },
  ];

  return (
    <section className="bg-navy py-4 border-b border-white/10">
      <div className="max-w-5xl mx-auto px-4">
        <div className="flex flex-wrap justify-center gap-x-8 gap-y-2">
          {stats.map(({ val, label }) => (
            <div key={label} className="flex items-center gap-2">
              <span className="font-bold text-white">{val}</span>
              <span className="text-white/55 text-sm">{label}</span>
              <span className="text-white/20 hidden sm:inline">·</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ─── Quote Section ─────────────────────────────────────── */
function QuoteSection() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-4xl mx-auto px-4">
        <ScrollFadeIn>
          <div className="text-center mb-10">
            <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl font-bold text-navy mb-6">
              "This Isn't a Shortcut.{" "}
              <span className="text-magenta">It's a Medical Tool."</span>
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto leading-relaxed text-lg">
              GLP-1 medications work by regulating the same appetite hormones your body already produces. They help you feel full sooner, reduce cravings, and slow digestion so you stay satisfied longer.
            </p>
          </div>

          <div className="bg-gradient-to-br from-navy/5 to-teal/5 border border-navy/10 rounded-3xl p-8 md:p-10">
            <p className="text-muted-foreground leading-relaxed mb-6">
              Combined with nutrition guidance and behavioral support, the results can be transformative. But it's not magic. It's medicine, managed by a surgeon who understands how your body works.
            </p>
            <blockquote className="border-l-4 border-magenta pl-6">
              <p className="text-navy font-medium italic leading-relaxed">
                "Using GLP-1 medication is no different than using blood pressure medication to manage hypertension. Obesity is a chronic disease, and GLP-1 is a proven, FDA-approved treatment for it."
              </p>
              <footer className="mt-3 text-sm font-semibold text-magenta">
                — Dr. Matthew Lange
              </footer>
            </blockquote>
          </div>
        </ScrollFadeIn>
      </div>
    </section>
  );
}

/* ─── What's Included Monthly ───────────────────────────── */
function WhatsIncluded() {
  const items = [
    {
      icon: Activity,
      title: "Prescription Management",
      desc: "Dr. Lange prescribes and manages your GLP-1 medication, adjusting dosage as needed. Semaglutide, Liraglutide, and other FDA-approved options.",
    },
    {
      icon: Calendar,
      title: "Regular Check-Ins with Dr. Lange",
      desc: "Monthly appointments (in-person or telehealth) to monitor progress, adjust treatment, address side effects, and keep you on track.",
    },
    {
      icon: Utensils,
      title: "Nutrition Guidance",
      desc: "Personalized meal plan from our registered dietitian. Reduced-calorie, high-protein approach designed for your lifestyle.",
    },
    {
      icon: BarChart2,
      title: "InBody Tracking",
      desc: "Body composition scans to track fat loss, muscle preservation, hydration, and visceral fat. See what's changing beyond the scale.",
    },
    {
      icon: Brain,
      title: "Behavioral Coaching",
      desc: "Access to the REFRAME program. Stress management, emotional eating strategies, habit building, and mindset work.",
    },
    {
      icon: Smartphone,
      title: "Telehealth Access",
      desc: "See Dr. Lange from home. Virtual appointments for check-ins, refills, and consultations. Perfect for busy schedules or distance.",
    },
  ];

  return (
    <section className="py-20 bg-gradient-to-b from-navy/3 to-white">
      <div className="max-w-6xl mx-auto px-4">
        <ScrollFadeIn>
          <div className="text-center mb-12">
            <span className="inline-block bg-teal/10 text-teal text-sm font-semibold px-4 py-1.5 rounded-full mb-4">
              Complete Program
            </span>
            <h2 className="font-serif text-3xl md:text-4xl font-bold text-navy mb-4">
              What's Included Every Month
            </h2>
            <p className="text-muted-foreground max-w-xl mx-auto">
              This isn't a prescription mill. It's a comprehensive, doctor-supervised weight management program.
            </p>
          </div>
        </ScrollFadeIn>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {items.map(({ icon: Icon, title, desc }, i) => (
            <ScrollFadeIn key={title} delay={i * 80}>
              <div className="bg-white rounded-2xl p-6 border border-gray-100 shadow-sm h-full">
                <div className="w-11 h-11 bg-teal/10 rounded-xl flex items-center justify-center mb-4">
                  <Icon className="w-5 h-5 text-teal" />
                </div>
                <h3 className="font-serif text-base font-bold text-navy mb-2">{title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{desc}</p>
              </div>
            </ScrollFadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ─── How It Works ──────────────────────────────────────── */
function HowItWorks() {
  const steps = [
    {
      num: "1",
      title: "Free Consultation",
      desc: "Meet Dr. Lange (in-person or virtual). We assess your health, goals, and determine if GLP-1 is right for you.",
    },
    {
      num: "2",
      title: "Start Treatment",
      desc: "Begin your prescription with a low dose, gradually increasing. Get your meal plan and first injection guidance.",
    },
    {
      num: "3",
      title: "Monthly Check-Ins",
      desc: "Regular appointments to monitor progress, adjust dosage, review nutrition, and provide ongoing accountability.",
    },
    {
      num: "4",
      title: "Maintain Results",
      desc: "As you reach your goals, transition to maintenance. GLP-1 maintenance therapy, membership options, long-term support.",
    },
  ];

  return (
    <section className="py-20 bg-white">
      <div className="max-w-5xl mx-auto px-4">
        <ScrollFadeIn>
          <div className="text-center mb-14">
            <span className="inline-block bg-magenta/10 text-magenta text-sm font-semibold px-4 py-1.5 rounded-full mb-4">
              Your Journey
            </span>
            <h2 className="font-serif text-3xl md:text-4xl font-bold text-navy mb-3">
              How It Works
            </h2>
            <p className="text-muted-foreground">From first consultation to lasting results.</p>
          </div>
        </ScrollFadeIn>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {steps.map(({ num, title, desc }, i) => (
            <ScrollFadeIn key={num} delay={i * 80}>
              <div className="bg-navy rounded-2xl p-6 h-full text-white">
                <div className="w-10 h-10 bg-magenta rounded-xl flex items-center justify-center font-bold text-lg mb-4">
                  {num}
                </div>
                <h3 className="font-serif text-lg font-bold mb-2">{title}</h3>
                <p className="text-white/70 text-sm leading-relaxed">{desc}</p>
              </div>
            </ScrollFadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ─── Pricing Section ───────────────────────────────────── */
function PricingSection() {
  const plans = [
    {
      name: "Standard",
      tagline: "Everything you need to get started",
      price: "$249",
      highlight: false,
      features: [
        "GLP-1 prescription management",
        "Monthly check-in with Dr. Lange",
        "Nutrition guidance",
        "Telehealth access",
        "InBody scan (quarterly)",
      ],
    },
    {
      name: "Complete",
      tagline: "Maximum support and accountability",
      price: "$349",
      highlight: true,
      features: [
        "Everything in Standard, plus:",
        "Bi-weekly check-ins",
        "Dietitian sessions (monthly)",
        "Behavioral coaching (REFRAME)",
        "InBody scan (monthly)",
        "Priority scheduling",
        "10% off vitamin store",
      ],
    },
  ];

  return (
    <section className="py-20 bg-gradient-to-b from-white to-navy/3">
      <div className="max-w-4xl mx-auto px-4">
        <ScrollFadeIn>
          <div className="text-center mb-12">
            <span className="inline-block bg-navy/5 text-navy text-sm font-semibold px-4 py-1.5 rounded-full mb-4">
              Transparent Pricing
            </span>
            <h2 className="font-serif text-3xl md:text-4xl font-bold text-navy mb-3">
              Monthly Program
            </h2>
            <p className="text-muted-foreground">Everything included. No hidden fees. Cancel anytime.</p>
          </div>
        </ScrollFadeIn>

        <div className="grid sm:grid-cols-2 gap-6 mb-6">
          {plans.map(({ name, tagline, price, highlight, features }, i) => (
            <ScrollFadeIn key={name} delay={i * 100}>
              <div
                className={`rounded-2xl p-7 border-2 relative h-full flex flex-col ${
                  highlight
                    ? "border-magenta shadow-lg shadow-magenta/10 bg-white"
                    : "border-gray-200 bg-white"
                }`}
              >
                {highlight && (
                  <span className="absolute -top-3.5 left-6 bg-magenta text-white text-xs font-bold px-3 py-1 rounded-full">
                    MOST COMPLETE
                  </span>
                )}
                <h3 className="font-serif text-xl font-bold text-navy mb-1">{name}</h3>
                <p className="text-xs text-muted-foreground mb-4">{tagline}</p>
                <div className="flex items-baseline gap-1 mb-5">
                  <span className="text-4xl font-bold text-navy">{price}</span>
                  <span className="text-muted-foreground">/month</span>
                </div>
                <ul className="space-y-2.5 flex-1 mb-6">
                  {features.map((f) => (
                    <li key={f} className="flex items-start gap-2 text-sm">
                      <CheckCircle2
                        className={`w-4 h-4 mt-0.5 shrink-0 ${highlight ? "text-magenta" : "text-teal"}`}
                      />
                      <span className={f === "Everything in Standard, plus:" ? "font-semibold text-navy" : ""}>{f}</span>
                    </li>
                  ))}
                </ul>
                <Link
                  href="/request-consultation"
                  className={`w-full text-center font-semibold px-6 py-3 rounded-full transition-all block ${
                    highlight
                      ? "bg-magenta hover:bg-magenta/90 text-white shadow-md"
                      : "bg-navy hover:bg-navy/90 text-white"
                  }`}
                  data-testid={`button-book-${name.toLowerCase()}`}
                >
                  Book Consultation
                </Link>
              </div>
            </ScrollFadeIn>
          ))}
        </div>

        <ScrollFadeIn>
          <p className="text-center text-xs text-muted-foreground max-w-xl mx-auto">
            Medication cost is separate and varies by pharmacy and insurance. Some plans cover GLP-1 medications. Our team can help navigate coverage. The consultation is free with zero obligation.
          </p>
        </ScrollFadeIn>
      </div>
    </section>
  );
}

/* ─── Milestone Rewards ─────────────────────────────────── */
function MilestoneRewards() {
  const milestones = [
    { lbs: "25 lbs", reward: "$25 vitamin store credit", icon: Gift },
    { lbs: "50 lbs", reward: "Free red light therapy session", icon: Sparkles },
    { lbs: "75 lbs", reward: "Free hair restoration evaluation", icon: Zap },
    { lbs: "100 lbs", reward: "$100 referral bonus unlocked", icon: Star },
  ];

  return (
    <section className="py-20 bg-navy">
      <div className="max-w-5xl mx-auto px-4">
        <ScrollFadeIn>
          <div className="text-center mb-12">
            <span className="inline-block bg-white/10 text-white/90 text-sm font-semibold px-4 py-1.5 rounded-full mb-4">
              Your Transformation
            </span>
            <h2 className="font-serif text-3xl md:text-4xl font-bold text-white mb-3">
              Every Pound Is a Victory
            </h2>
            <p className="text-white/65">
              We celebrate every milestone with you. Each one unlocks a new reward.
            </p>
          </div>
        </ScrollFadeIn>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {milestones.map(({ lbs, reward, icon: Icon }, i) => (
            <ScrollFadeIn key={lbs} delay={i * 80}>
              <div className="bg-white/8 border border-white/10 rounded-2xl p-6 text-center">
                <div className="w-12 h-12 bg-magenta/20 rounded-2xl flex items-center justify-center mx-auto mb-4">
                  <Icon className="w-6 h-6 text-magenta" />
                </div>
                <p className="font-serif text-2xl font-bold text-white mb-1">{lbs}</p>
                <p className="text-white/70 text-sm">{reward}</p>
              </div>
            </ScrollFadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ─── Comparison Table ──────────────────────────────────── */
function ComparisonTable() {
  const rows = [
    ["Average Weight Loss", "15-20%", "25-35%"],
    ["Surgery Required?", "No", "Yes"],
    ["Downtime", "None", "2-4 weeks"],
    ["Monthly Cost", "From $249", "Insurance typically covers"],
    ["Best For", "BMI 27-40", "BMI 35+"],
    ["Reversible?", "Yes", "Permanent"],
  ];

  return (
    <section className="py-20 bg-white">
      <div className="max-w-4xl mx-auto px-4">
        <ScrollFadeIn>
          <div className="text-center mb-10">
            <span className="inline-block bg-teal/10 text-teal text-sm font-semibold px-4 py-1.5 rounded-full mb-4">
              Which Path Is Right?
            </span>
            <h2 className="font-serif text-3xl md:text-4xl font-bold text-navy mb-3">
              GLP-1 vs. Surgery
            </h2>
            <p className="text-muted-foreground max-w-xl mx-auto">
              Not sure which route? Dr. Lange offers both and will recommend what's best for you.
            </p>
          </div>
        </ScrollFadeIn>

        <ScrollFadeIn>
          <div className="overflow-x-auto rounded-2xl border shadow-sm">
            <table className="w-full text-sm">
              <thead>
                <tr>
                  <th className="bg-navy text-white text-left px-5 py-4 font-semibold rounded-tl-2xl"> </th>
                  <th className="bg-teal text-white text-center px-5 py-4 font-bold">GLP-1 Program</th>
                  <th className="bg-navy text-white text-center px-5 py-4 font-semibold rounded-tr-2xl">
                    Bariatric Surgery
                  </th>
                </tr>
              </thead>
              <tbody>
                {rows.map(([factor, glp1, surgery], i) => (
                  <tr key={factor} className={i % 2 === 0 ? "bg-white" : "bg-gray-50"}>
                    <td className="px-5 py-3.5 font-medium text-navy">{factor}</td>
                    <td className="px-5 py-3.5 text-center text-teal font-semibold">{glp1}</td>
                    <td className="px-5 py-3.5 text-center text-muted-foreground">{surgery}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <p className="text-center text-sm text-muted-foreground mt-6">
            Not sure? That's exactly what the free consultation is for.{" "}
            <Link
              href="/request-consultation"
              className="text-teal font-semibold hover:underline"
              data-testid="link-comparison-cta"
            >
              Book yours →
            </Link>
          </p>
        </ScrollFadeIn>
      </div>
    </section>
  );
}

/* ─── Telehealth CTA ────────────────────────────────────── */
function TelehealthCTA() {
  return (
    <section className="py-16 bg-teal/5">
      <div className="max-w-3xl mx-auto px-4">
        <ScrollFadeIn>
          <div className="text-center">
            <div className="w-14 h-14 bg-teal/15 rounded-2xl flex items-center justify-center mx-auto mb-6">
              <Video className="w-7 h-7 text-teal" />
            </div>
            <h2 className="font-serif text-2xl md:text-3xl font-bold text-navy mb-4">
              Can't Make It to St. Louis? See Dr. Lange Virtually.
            </h2>
            <p className="text-muted-foreground max-w-xl mx-auto mb-8 leading-relaxed">
              Telehealth consultations available for GLP-1 management, weight loss evaluations, and ongoing check-ins. Same doctor, same program, from the comfort of your home. Available in Missouri and expanding.
            </p>
            <Link
              href="/request-consultation"
              className="inline-flex items-center gap-2 bg-teal hover:bg-teal/90 text-white font-semibold px-8 py-3.5 rounded-full transition-all shadow-lg"
              data-testid="button-telehealth-glp1"
            >
              Book Virtual Consult <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </ScrollFadeIn>
      </div>
    </section>
  );
}

/* ─── Patient Stories ───────────────────────────────────── */
function PatientStories() {
  const stories = [
    {
      quote:
        "I've tried every diet imaginable. In 4 months on Dr. Lange's GLP-1 program, I've lost 38 pounds. My appetite is actually under control for the first time in my life. The monthly check-ins keep me accountable.",
      name: "Jennifer M.",
      label: "GLP-1 patient, 4 months",
    },
    {
      quote:
        "The support with New You is unmatched. I've been other places and felt completely like a number. The team here makes me feel supported, heard, and seen! My results have been amazing.",
      name: "Rainier E.",
      label: "Verified patient",
    },
    {
      quote:
        "I was nervous about side effects but Dr. Lange started me on a low dose and gradually increased. The nausea was minimal. Down 52 pounds in 6 months. My blood pressure is normal for the first time in a decade.",
      name: "David S.",
      label: "GLP-1 patient, 6 months",
    },
  ];

  return (
    <section className="py-20 bg-navy">
      <div className="max-w-6xl mx-auto px-4">
        <ScrollFadeIn>
          <div className="text-center mb-12">
            <span className="inline-block bg-white/10 text-white/90 text-sm font-semibold px-4 py-1.5 rounded-full mb-4">
              Patient Stories
            </span>
            <h2 className="font-serif text-3xl md:text-4xl font-bold text-white mb-3">
              What Our Patients Say
            </h2>
            <p className="text-white/65">Real experiences from people on the GLP-1 program.</p>
          </div>
        </ScrollFadeIn>

        <div className="grid md:grid-cols-3 gap-6">
          {stories.map(({ quote, name, label }, i) => (
            <ScrollFadeIn key={name} delay={i * 100}>
              <div className="bg-white/8 border border-white/10 rounded-2xl p-7 h-full flex flex-col">
                <div className="flex gap-1 mb-4">
                  {[1, 2, 3, 4, 5].map((s) => (
                    <Star key={s} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                  ))}
                </div>
                <p className="text-white/85 text-sm leading-relaxed italic flex-1 mb-6">
                  "{quote}"
                </p>
                <div>
                  <p className="font-semibold text-white">{name}</p>
                  <p className="text-xs text-white/55">{label}</p>
                </div>
              </div>
            </ScrollFadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ─── FAQs ──────────────────────────────────────────────── */
function GLP1FAQs() {
  const [open, setOpen] = useState<number | null>(null);

  const faqs = [
    {
      q: "What is GLP-1 / Semaglutide?",
      a: "GLP-1 receptor agonists are FDA-approved medications that regulate appetite hormones, reduce hunger, and slow gastric emptying. Semaglutide (Wegovy/Ozempic) is the most well-known. They help patients lose 15-20% of body weight when combined with lifestyle changes.",
    },
    {
      q: "Am I a candidate?",
      a: "Generally, candidates have a BMI of 30+ or 27+ with at least one weight-related condition (high blood pressure, type 2 diabetes, high cholesterol). The free consultation determines if GLP-1 is right for you.",
    },
    {
      q: "What are the side effects?",
      a: "The most common are gastrointestinal: nausea, vomiting, and diarrhea. These are typically mild and improve as your body adjusts. Dr. Lange starts at a low dose and gradually increases to minimize them.",
    },
    {
      q: "Does insurance cover GLP-1?",
      a: "Coverage varies. Some plans cover GLP-1 medications. Our insurance specialist can review your policy. The monthly program fee ($249-$349) covers Dr. Lange's supervision. Medication cost is separate.",
    },
    {
      q: "Is this just Ozempic?",
      a: "No. We offer Semaglutide (Wegovy/Ozempic), Liraglutide, Phentermine, Contrave, and Qsymia. Dr. Lange finds the right medication for your body and goals.",
    },
    {
      q: "Is using GLP-1 'cheating'?",
      a: "No. Obesity is a chronic disease, and GLP-1 is an FDA-approved medical treatment. Using it is no different than using blood pressure medication for hypertension. Dr. Lange combines it with nutrition and behavioral support for lasting results.",
    },
    {
      q: "Can I do telehealth?",
      a: "Yes. Both consultations and monthly check-ins are available virtually. Same doctor, same program, from home. Especially convenient for patients outside the immediate St. Louis area.",
    },
  ];

  return (
    <section className="py-20 bg-white">
      <div className="max-w-3xl mx-auto px-4">
        <ScrollFadeIn>
          <div className="text-center mb-10">
            <span className="inline-block bg-navy/5 text-navy text-sm font-semibold px-4 py-1.5 rounded-full mb-4">
              Questions
            </span>
            <h2 className="font-serif text-3xl md:text-4xl font-bold text-navy mb-3">
              Frequently Asked
            </h2>
            <p className="text-muted-foreground">Everything you want to know about GLP-1 therapy.</p>
          </div>
        </ScrollFadeIn>

        <div className="space-y-3">
          {faqs.map((faq, i) => (
            <ScrollFadeIn key={i} delay={i * 40}>
              <div className="border rounded-2xl overflow-hidden">
                <button
                  onClick={() => setOpen(open === i ? null : i)}
                  className="w-full flex items-center justify-between p-5 text-left hover:bg-gray-50 transition-colors"
                  data-testid={`button-faq-glp1-${i}`}
                >
                  <span className="font-medium text-navy pr-4">{faq.q}</span>
                  <ChevronDown
                    className={`w-5 h-5 text-muted-foreground shrink-0 transition-transform duration-200 ${
                      open === i ? "rotate-180" : ""
                    }`}
                  />
                </button>
                {open === i && (
                  <div className="px-5 pb-5 text-sm text-muted-foreground leading-relaxed border-t pt-4">
                    {faq.a}
                  </div>
                )}
              </div>
            </ScrollFadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ─── Patients Also Explore (Cross-sell) ────────────────── */
function PatientsAlsoExplore() {
  const services = [
    {
      icon: Sparkles,
      title: "Red Light Therapy",
      desc: "Many GLP-1 patients add red light to contour as they lose weight. Tighten skin, reduce stubborn fat, support recovery.",
      detail: "Packages from $440",
      href: "/red-light-therapy",
    },
    {
      icon: Zap,
      title: "Hair Restoration",
      desc: "Weight loss can trigger temporary shedding. Our needle-free ALMA TED treatment restores density.",
      detail: "Free scalp evaluation",
      href: "/hair-restoration",
    },
    {
      icon: Heart,
      title: "Bariatric Surgery",
      desc: "For patients who need more significant weight loss. Dr. Lange offers the full spectrum: sleeve, bypass, and more.",
      detail: "Free consultation",
      href: "/bariatric-surgery",
    },
  ];

  return (
    <section className="py-20 bg-gradient-to-b from-navy/3 to-white">
      <div className="max-w-5xl mx-auto px-4">
        <ScrollFadeIn>
          <div className="text-center mb-12">
            <span className="inline-block bg-magenta/10 text-magenta text-sm font-semibold px-4 py-1.5 rounded-full mb-4">
              Amplify Your Results
            </span>
            <h2 className="font-serif text-3xl md:text-4xl font-bold text-navy mb-3">
              Patients Also Explore
            </h2>
          </div>
        </ScrollFadeIn>

        <div className="grid sm:grid-cols-3 gap-6">
          {services.map(({ icon: Icon, title, desc, detail, href }, i) => (
            <ScrollFadeIn key={title} delay={i * 80}>
              <Link href={href} className="block h-full group">
                <div className="bg-white border rounded-2xl p-6 h-full hover:shadow-md hover:border-teal/40 transition-all">
                  <div className="w-10 h-10 bg-teal/10 rounded-xl flex items-center justify-center mb-4">
                    <Icon className="w-5 h-5 text-teal" />
                  </div>
                  <h3 className="font-serif text-base font-bold text-navy mb-2">{title}</h3>
                  <p className="text-xs text-muted-foreground leading-relaxed mb-3">{desc}</p>
                  <p className="text-xs font-semibold text-magenta">{detail}</p>
                  <p className="text-xs text-teal font-semibold mt-2 group-hover:underline">
                    Learn More →
                  </p>
                </div>
              </Link>
            </ScrollFadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ─── New You Membership Callout ────────────────────────── */
function MembershipCallout() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-5xl mx-auto px-4">
        {/* Membership brief mention */}
        <ScrollFadeIn>
          <div className="bg-gradient-to-br from-navy/5 to-teal/5 border border-navy/10 rounded-3xl p-8 md:p-12 mb-10">
            <div className="text-center mb-8">
              <span className="inline-block bg-navy/8 text-navy text-sm font-semibold px-4 py-1.5 rounded-full mb-4">
                Long-Term Value
              </span>
              <h2 className="font-serif text-2xl md:text-3xl font-bold text-navy mb-3">
                New You Membership
              </h2>
              <p className="text-muted-foreground max-w-xl mx-auto">
                For patients who want ongoing care beyond the GLP-1 program. Memberships include access to all New You services at exclusive rates.
              </p>
            </div>
            <div className="grid sm:grid-cols-3 gap-4">
              {[
                { name: "Wellness", price: "$99/mo", perks: ["Monthly telehealth check-in", "InBody scan (quarterly)", "10% off all services"] },
                { name: "Transform", price: "$249/mo", perks: ["Everything in Wellness", "GLP-1 management", "2 red light sessions/mo"], highlight: true },
                { name: "VIP", price: "$449/mo", perks: ["Everything in Transform", "Unlimited red light", "Monthly dietitian sessions"] },
              ].map(({ name, price, perks, highlight }) => (
                <div
                  key={name}
                  className={`rounded-2xl p-5 ${
                    highlight ? "bg-navy text-white" : "bg-white border"
                  }`}
                >
                  <p className={`font-serif text-lg font-bold mb-0.5 ${highlight ? "text-white" : "text-navy"}`}>{name}</p>
                  <p className={`text-sm font-semibold mb-3 ${highlight ? "text-teal" : "text-magenta"}`}>{price}</p>
                  <ul className="space-y-1.5">
                    {perks.map((p) => (
                      <li key={p} className={`text-xs flex items-start gap-1.5 ${highlight ? "text-white/75" : "text-muted-foreground"}`}>
                        <CheckCircle2 className={`w-3.5 h-3.5 mt-0.5 shrink-0 ${highlight ? "text-teal" : "text-teal"}`} />
                        {p}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
            <div className="text-center mt-6">
              <Link
                href="/membership"
                className="inline-flex items-center gap-2 text-teal font-semibold hover:underline text-sm"
                data-testid="link-membership-glp1"
              >
                View all membership benefits <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </ScrollFadeIn>

        {/* Final CTA */}
        <ScrollFadeIn>
          <div className="bg-navy rounded-3xl p-10 text-center">
            <h2 className="font-serif text-3xl md:text-4xl font-bold text-white mb-3">
              You Deserve a Body That Matches How Hard You're Trying.
            </h2>
            <p className="text-white/70 mb-8 max-w-xl mx-auto">
              Your free consultation with Dr. Lange is waiting. No obligation. No pressure. In-person or telehealth.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/request-consultation"
                className="inline-flex items-center justify-center gap-2 bg-magenta hover:bg-magenta/90 text-white font-semibold px-8 py-3.5 rounded-full transition-all shadow-lg"
                data-testid="button-final-cta-glp1"
              >
                Book Free Consultation <ArrowRight className="w-4 h-4" />
              </Link>
              <a
                href="tel:3148877605"
                className="inline-flex items-center justify-center gap-2 bg-white/10 hover:bg-white/20 border border-white/20 text-white font-semibold px-8 py-3.5 rounded-full transition-all"
                data-testid="button-call-glp1"
              >
                <Phone className="w-4 h-4" /> 314-887-7605
              </a>
            </div>
            <p className="text-white/45 text-xs mt-6">
              📍 1000 Des Peres Rd, Suite 120, St. Louis, MO 63131 · Telehealth Available · Mon-Fri 8AM–5PM
            </p>
          </div>
        </ScrollFadeIn>
      </div>
    </section>
  );
}
