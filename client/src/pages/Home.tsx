import { Link } from "wouter";
import {
  Star, ArrowRight, Phone, Shield, Users, HeartPulse, Clock, Award,
  Minimize2, GitBranch, RefreshCw, Pill, Circle, Sparkles,
  ChevronLeft, ChevronRight, Play, Calculator, Activity, TrendingDown,
  CheckCircle2, Heart, Building2, Zap,
} from "lucide-react";
import { useState, useRef, useEffect } from "react";
import ScrollFadeIn from "@/components/ScrollFadeIn";
import AnimatedCounter from "@/components/AnimatedCounter";
import LeadForm from "@/components/LeadForm";
import { PRACTICE, DOCTOR, REVIEWS, TRANSFORMATIONS } from "@/lib/constants";
import { img } from "@/lib/img";

export default function Home() {
  return (
    <div>
      <HeroSection />
      <LiveStatsBanner />
      <JourneySection />
      <TabbedProcedures />
      <BMICalculatorSection />
      <QuizCTA />
      <TransformationsCarousel />
      <DrLangeSection />
      <PostOpJourney />
      <InsurancePricing />
      <ReviewsCarousel />
      <FinalCTA />
      <ExitIntentPopup />
    </div>
  );
}

/* =============================================
   1. HERO SECTION
   ============================================= */
function HeroSection() {
  return (
    <section className="relative overflow-hidden min-h-[90vh] lg:min-h-[85vh] flex items-center">
      {/* Full-bleed cinematic hero image */}
      <div className="absolute inset-0" aria-hidden="true">
        <img
          src={img("/images/hero/hero-bg.jpg")}
          alt=""
          className="w-full h-full object-cover animate-hero-zoom"
          style={{ objectPosition: "center 35%" }}
        />
        {/* Minimal overlays — just enough for text readability */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#0B1829]/70 via-[#0B1829]/25 to-[#0B1829]/50" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#0B1829]/40 via-transparent to-[#0B1829]/20" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-14 md:py-16 lg:py-20 relative z-10 w-full">
        <div className="grid lg:grid-cols-[1fr_420px] gap-10 lg:gap-14 items-center">
          {/* Left — Copy */}
          <div>
            <div className="animate-text-reveal inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm rounded-full px-4 py-1.5 text-sm text-white/90 mb-6 border border-white/10">
              <Shield className="w-4 h-4 text-gold" />
              Board-Certified Bariatric Surgeon
            </div>

            <h1 className="animate-text-reveal-delay-1 font-serif text-4xl sm:text-5xl lg:text-[3.5rem] xl:text-6xl font-bold text-white leading-[1.08] mb-6 tracking-tight">
              Your New Life{" "}
              <br className="hidden sm:block" />
              Starts at{" "}
              <span
                className="text-transparent bg-clip-text"
                style={{
                  backgroundImage: "linear-gradient(135deg, #f0b4d4, #d466a8, #C8973E)",
                  WebkitBackgroundClip: "text",
                }}
              >
                New You
              </span>
            </h1>

            <p className="animate-text-reveal-delay-2 text-lg md:text-xl text-white/80 mb-8 leading-relaxed max-w-lg">
              Comprehensive surgical and non-surgical weight loss with {DOCTOR.name}, {DOCTOR.credentials}, fellowship-trained at Cleveland Clinic.
            </p>

            {/* Dr. Lange card */}
            <div className="animate-text-reveal-delay-2 flex items-center gap-4 mb-8 bg-white/[0.07] backdrop-blur-md rounded-2xl px-5 py-4 border border-white/10 max-w-md">
              <div className="w-16 h-16 rounded-2xl overflow-hidden ring-2 ring-gold/30 shrink-0 shadow-lg">
                <img
                  src={img("/images/team/dr-lange-formal.jpg")}
                  alt={DOCTOR.name}
                  className="w-full h-full object-cover object-top"
                />
              </div>
              <div className="min-w-0">
                <div className="text-white font-semibold">{DOCTOR.name}, {DOCTOR.credentials}</div>
                <div className="text-white/50 text-sm mb-1">Fellowship, Cleveland Clinic</div>
                <div className="flex items-center gap-1">
                  {[1,2,3,4,5].map((s) => <Star key={s} className="w-3.5 h-3.5 fill-yellow-400 text-yellow-400" />)}
                  <span className="text-white/40 text-xs ml-1.5">5.0 rating · Hundreds of patients helped</span>
                </div>
              </div>
            </div>

            {/* Trust badges */}
            <div className="animate-text-reveal-delay-3 flex flex-wrap gap-x-5 gap-y-3">
              {[
                { icon: Award, text: "8+ Years Experience" },
                { icon: HeartPulse, text: "All Insurance Accepted" },
                { icon: Users, text: "500+ Lives Transformed" },
              ].map(({ icon: Icon, text }) => (
                <div key={text} className="flex items-center gap-2 bg-white/[0.05] backdrop-blur-sm rounded-full px-3.5 py-1.5 border border-white/[0.06]">
                  <Icon className="w-4 h-4 text-gold" />
                  <span className="text-white/70 text-sm font-medium">{text}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Right — Lead Form */}
          <div className="animate-text-reveal-delay-4 relative z-20">
            <div className="bg-[#0B1829]/80 backdrop-blur-xl rounded-3xl p-7 md:p-8 border border-white/[0.12] shadow-2xl shadow-black/40 animate-border-glow">
              <h3 className="text-xl font-bold text-white mb-1">See If You Qualify</h3>
              <p className="text-white/50 text-sm mb-5">No-obligation assessment</p>
              <LeadForm variant="hero" className="!bg-transparent !backdrop-blur-none !border-0 !p-0 !shadow-none" />
            </div>
          </div>
        </div>
      </div>

      {/* Bottom fade to stats banner */}
      <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-[#1B2A4A] to-transparent z-10" />
    </section>
  );
}

/* =============================================
   2. LIVE STATS BANNER
   ============================================= */
function LiveStatsBanner() {
  const stats = [
    { value: 500, suffix: "+", label: "Lives Transformed", icon: Users },
    { value: 8, suffix: "+", label: "Years Experience", icon: Award },
    { value: 98, suffix: "%", label: "Patient Satisfaction", icon: HeartPulse },
    { value: 5, suffix: ".0", label: "Google Rating", icon: Star },
  ];

  return (
    <section className="stats-pattern py-16 relative overflow-hidden">
      {/* Subtle diagonal pattern overlay */}
      <div
        className="absolute inset-0 opacity-[0.03]"
        style={{ backgroundImage: "repeating-linear-gradient(45deg, transparent, transparent 35px, rgba(255,255,255,0.5) 35px, rgba(255,255,255,0.5) 36px)" }}
      />
      <div className="max-w-7xl mx-auto px-4 relative">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12 text-center text-white">
          {stats.map(({ value, suffix, label, icon: Icon }) => (
            <ScrollFadeIn key={label}>
              <div className="group">
                <div className="w-12 h-12 rounded-xl bg-white/10 flex items-center justify-center mx-auto mb-4 group-hover:bg-white/15 transition-colors">
                  <Icon className="w-5 h-5 text-gold" />
                </div>
                <div className="font-serif text-5xl md:text-6xl font-bold text-gold mb-2 tracking-tight">
                  <AnimatedCounter end={value} suffix={suffix} />
                </div>
                <div className="text-white/60 text-sm font-medium tracking-wide uppercase">{label}</div>
              </div>
            </ScrollFadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}

/* =============================================
   3. YOUR JOURNEY — 3-Step Process
   ============================================= */
function JourneySection() {
  const steps = [
    {
      num: "01",
      title: "No-Obligation Consultation",
      desc: "Meet with Dr. Lange to discuss your goals and verify your insurance at no cost.",
      href: "/request-consultation",
      cta: "Book Your Consultation",
    },
    {
      num: "02",
      title: "Personalized Plan",
      desc: "Receive a customized surgical or non-surgical plan designed for your body and lifestyle.",
      href: "/procedures",
      cta: "Explore Options",
    },
    {
      num: "03",
      title: "Your New Life",
      desc: "Experience lasting transformation with lifetime support from our multidisciplinary team.",
      href: "/results",
      cta: "See Results",
    },
  ];

  return (
    <section className="py-20 md:py-28 bg-white">
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Left — Steps */}
          <div>
            <ScrollFadeIn>
              <span className="text-teal font-semibold text-sm tracking-wider uppercase">Your Journey</span>
              <h2 className="font-serif text-3xl md:text-4xl font-bold text-navy mt-2 mb-10">
                Three Steps to a New You
              </h2>
            </ScrollFadeIn>

            <div className="space-y-8 relative">
              {/* Vertical connector line */}
              <div className="absolute left-[22px] top-12 bottom-0 w-0.5 bg-gradient-to-b from-teal/40 via-teal/20 to-transparent hidden sm:block" />

              {steps.map((step, i) => (
                <ScrollFadeIn key={step.num} delay={i * 120}>
                  <div className="flex gap-5 group">
                    {/* Teal numbered circle */}
                    <div className="shrink-0 w-11 h-11 rounded-full bg-teal flex items-center justify-center text-white font-bold text-sm relative z-10 shadow-md group-hover:scale-110 transition-transform duration-300">
                      {step.num}
                    </div>
                    <div className="pt-1 pb-4">
                      <h3 className="font-serif text-xl font-bold text-navy mb-2">{step.title}</h3>
                      <p className="text-muted-foreground text-sm leading-relaxed mb-3">{step.desc}</p>
                      <Link
                        href={step.href}
                        className="inline-flex items-center gap-1.5 text-teal font-semibold text-sm hover:gap-3 transition-all"
                        data-testid={`link-journey-step-${i}`}
                      >
                        {step.cta} <ArrowRight className="w-4 h-4" />
                      </Link>
                    </div>
                  </div>
                </ScrollFadeIn>
              ))}
            </div>
          </div>

          {/* Right — Video placeholder */}
          <ScrollFadeIn delay={200}>
            <div className="relative rounded-2xl overflow-hidden shadow-2xl group cursor-pointer" data-testid="video-consultation-placeholder">
              <div className="aspect-[4/3] relative">
                <img
                  src={img("/images/stock/consultation.jpg")}
                  alt="Consultation with Dr. Lange"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-navy/60 via-navy/20 to-transparent" />

                {/* Play button */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="relative">
                    <div className="absolute inset-0 bg-magenta/50 rounded-full animate-pulse-ring" />
                    <div className="play-btn relative w-20 h-20 rounded-full bg-magenta/90 flex items-center justify-center shadow-2xl transition-transform duration-300">
                      <Play className="w-8 h-8 text-white ml-1" fill="white" />
                    </div>
                  </div>
                </div>

                {/* Caption */}
                <div className="absolute bottom-5 left-5 right-5">
                  <p className="text-white font-semibold text-lg leading-tight drop-shadow-lg">Watch: Your First Consultation</p>
                  <p className="text-white/70 text-sm mt-0.5">See what to expect at New You</p>
                </div>
              </div>
            </div>
          </ScrollFadeIn>
        </div>
      </div>
    </section>
  );
}

/* =============================================
   4. TABBED PROCEDURES SECTION
   ============================================= */
const PROCEDURE_TABS = [
  {
    id: "gastric-sleeve",
    label: "Gastric Sleeve",
    title: "Gastric Sleeve Surgery",
    desc: "Removes ~80% of the stomach laparoscopically, creating a banana-shaped sleeve. The #1 bariatric procedure worldwide with proven results and rapid recovery.",
    benefits: [
      "60–70% excess weight loss in 12–18 months",
      "Significant reduction in hunger hormones",
      "Laparoscopic (minimally invasive)",
      "1–2 night hospital stay",
      "Most insurance plans accepted",
    ],
    learnMore: "/procedures/gastric-sleeve",
  },
  {
    id: "gastric-bypass",
    label: "Gastric Bypass",
    title: "Gastric Bypass (Roux-en-Y)",
    desc: "Creates a small stomach pouch and reroutes the small intestine. Gold standard for maximum weight loss with metabolic benefits including Type 2 Diabetes remission.",
    benefits: [
      "70–80% excess weight loss",
      "Up to 83% Type 2 Diabetes remission",
      "Proven 30+ year track record",
      "Best for patients with severe GERD",
      "Insurance typically covers",
    ],
    learnMore: "/procedures/gastric-bypass",
  },
  {
    id: "revision-surgery",
    label: "Revision Surgery",
    title: "Revision & Conversion Surgery",
    desc: "Expert conversion and revision for prior weight loss surgeries that didn't produce expected results. Dr. Lange specializes in complex revision cases throughout the St. Louis region.",
    benefits: [
      "Lap-Band to Sleeve conversion",
      "Sleeve to Bypass conversion",
      "Addresses weight regain effectively",
      "Complex procedure expertise",
      "Insurance coverage case-by-case",
    ],
    learnMore: "/procedures/revision-surgery",
  },
  {
    id: "glp1",
    label: "GLP-1 Program",
    title: "GLP-1 / Semaglutide Program",
    desc: "Medically supervised weight loss with Semaglutide — the breakthrough medication delivering 15–20% body weight loss without surgery. Monitored by Dr. Lange and our clinical team.",
    benefits: [
      "No surgery required",
      "Weekly self-administered injection",
      "Starting at $249/month",
      "Medical monitoring included",
      "Ideal for BMI 27+",
    ],
    learnMore: "/glp1",
  },
  {
    id: "non-surgical",
    label: "Non-Surgical",
    title: "Non-Surgical Weight Loss",
    desc: "ORBERA® intragastric balloon and medically supervised programs for those who prefer a non-surgical approach. Effective, safe, and removed after 6 months.",
    benefits: [
      "Placed in 20 minutes, no incisions",
      "Average 10–15% body weight loss",
      "Removed after 6 months",
      "Nutritional counseling included",
      "Ideal for BMI 30–40",
    ],
    learnMore: "/non-surgical",
  },
  {
    id: "aesthetics",
    label: "Aesthetics",
    title: "Aesthetic Transformation",
    desc: "Complete your transformation with hair restoration, red light therapy, skin tightening, and body contouring. Non-invasive treatments to help you look as great as you feel.",
    benefits: [
      "Hair restoration & PRP therapy",
      "Red light therapy",
      "Radiofrequency skin tightening",
      "AccentPrime body contouring",
      "Non-invasive treatments",
    ],
    learnMore: "/aesthetics",
  },
];

function TabbedProcedures() {
  const [activeTab, setActiveTab] = useState(0);
  const tab = PROCEDURE_TABS[activeTab];

  return (
    <section className="section-gradient py-20 md:py-28">
      <div className="max-w-7xl mx-auto px-4">
        <ScrollFadeIn className="text-center mb-12">
          <span className="text-magenta font-semibold text-sm tracking-wider uppercase">Our Services</span>
          <h2 className="font-serif text-3xl md:text-4xl font-bold text-navy mt-2 mb-4">
            Comprehensive Weight Loss Solutions
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            From surgical procedures to non-invasive options, find the right path for your journey.
          </p>
        </ScrollFadeIn>

        {/* Tab Bar */}
        <ScrollFadeIn>
          <div className="flex flex-wrap gap-2 justify-center mb-8" role="tablist" aria-label="Procedures">
            {PROCEDURE_TABS.map((t, i) => (
              <button
                key={t.id}
                role="tab"
                aria-selected={i === activeTab}
                aria-controls={`tab-panel-${t.id}`}
                onClick={() => setActiveTab(i)}
                data-testid={`tab-procedure-${t.id}`}
                className={`px-5 py-2.5 rounded-full text-sm font-semibold transition-all duration-200 border ${
                  i === activeTab
                    ? "bg-magenta text-white border-magenta shadow-md shadow-magenta/20"
                    : "bg-white text-navy border-gray-200 hover:border-magenta/30 hover:text-magenta"
                }`}
              >
                {t.label}
              </button>
            ))}
          </div>
        </ScrollFadeIn>

        {/* Tab Content Panel */}
        <div
          id={`tab-panel-${tab.id}`}
          role="tabpanel"
          className="bg-white rounded-3xl shadow-lg border border-gray-100 overflow-hidden"
        >
          <div className="grid lg:grid-cols-2">
            {/* Left — Procedure Info */}
            <div className="p-8 md:p-10 lg:p-12 flex flex-col justify-center">
              <span className="inline-flex items-center gap-2 bg-magenta/10 text-magenta text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wider mb-5 w-fit">
                {tab.label}
              </span>
              <h3 className="font-serif text-2xl md:text-3xl font-bold text-navy mb-4">
                {tab.title}
              </h3>
              <p className="text-muted-foreground leading-relaxed mb-6">
                {tab.desc}
              </p>
              <ul className="space-y-3 mb-8">
                {tab.benefits.map((benefit) => (
                  <li key={benefit} className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-teal shrink-0 mt-0.5" />
                    <span className="text-sm text-foreground">{benefit}</span>
                  </li>
                ))}
              </ul>
              <div className="flex flex-wrap gap-3">
                <Link
                  href={tab.learnMore}
                  className="inline-flex items-center gap-2 bg-magenta hover:bg-magenta-light text-white font-semibold px-6 py-3 rounded-full transition-all shadow-md text-sm"
                  data-testid={`link-procedure-learn-more-${tab.id}`}
                >
                  Learn More <ArrowRight className="w-4 h-4" />
                </Link>
                <Link
                  href="/request-consultation"
                  className="inline-flex items-center gap-2 border-2 border-navy text-navy hover:bg-navy hover:text-white font-semibold px-6 py-3 rounded-full transition-all text-sm"
                  data-testid="link-procedure-request-consultation"
                >
                  Request Consultation
                </Link>
              </div>
            </div>

            {/* Right — Image */}
            <div className="relative min-h-[320px] lg:min-h-0">
              <img
                src={img("/images/stock/doctor-consultation.jpg")}
                alt={tab.title}
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-l from-transparent to-white/10" />
              {/* Floating stat badge */}
              <div className="absolute top-6 right-6 bg-white/90 backdrop-blur-sm rounded-2xl px-4 py-3 shadow-lg border border-white/50">
                <div className="text-2xl font-serif font-bold text-navy">
                  {activeTab === 0 ? "60–70%" : activeTab === 1 ? "70–80%" : activeTab === 2 ? "Varies" : activeTab === 3 ? "15–20%" : activeTab === 4 ? "10–15%" : "100%"}
                </div>
                <div className="text-xs text-muted-foreground font-medium">
                  {activeTab <= 3 ? "Excess Weight Loss" : activeTab === 4 ? "Body Weight Loss" : "Non-Invasive"}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

/* =============================================
   5. BMI CALCULATOR SECTION
   ============================================= */
function BMICalculatorSection() {
  const [height, setHeight] = useState({ feet: "", inches: "" });
  const [weight, setWeight] = useState("");
  const [bmi, setBmi] = useState<number | null>(null);

  const calculateBMI = () => {
    const totalInches = parseInt(height.feet) * 12 + parseInt(height.inches || "0");
    const w = parseFloat(weight);
    if (totalInches > 0 && w > 0) {
      setBmi(Math.round((w / (totalInches * totalInches)) * 703 * 10) / 10);
    }
  };

  const getCategory = (bmi: number) => {
    if (bmi < 18.5) return { label: "Underweight", color: "text-blue-500", bg: "bg-blue-50", barColor: "bg-blue-400", pct: 15 };
    if (bmi < 25) return { label: "Normal", color: "text-green-600", bg: "bg-green-50", barColor: "bg-green-500", pct: 35 };
    if (bmi < 30) return { label: "Overweight", color: "text-yellow-600", bg: "bg-yellow-50", barColor: "bg-yellow-500", pct: 55 };
    if (bmi < 35) return { label: "Obese (Class I)", color: "text-orange-500", bg: "bg-orange-50", barColor: "bg-orange-500", pct: 70 };
    if (bmi < 40) return { label: "Obese (Class II)", color: "text-red-500", bg: "bg-red-50", barColor: "bg-red-500", pct: 85 };
    return { label: "Obese (Class III)", color: "text-red-700", bg: "bg-red-100", barColor: "bg-red-600", pct: 95 };
  };

  const getQualification = (bmi: number) => {
    if (bmi >= 40) return { qualifies: true, text: "You likely qualify for bariatric surgery. BMI ≥ 40 meets standard surgical criteria.", level: "surgical" };
    if (bmi >= 35) return { qualifies: true, text: "With qualifying comorbidities (diabetes, hypertension, sleep apnea), you may qualify for bariatric surgery.", level: "surgical-conditional" };
    if (bmi >= 30) return { qualifies: true, text: "You may be a candidate for our GLP-1/Semaglutide program, ORBERA® balloon, or medically supervised weight loss.", level: "non-surgical" };
    return { qualifies: false, text: "Based on your BMI, surgical weight loss is typically not indicated. Our non-surgical programs may be an option.", level: "none" };
  };

  return (
    <section className="py-20 md:py-28 bg-white relative">
      <div className="max-w-5xl mx-auto px-4">
        <ScrollFadeIn className="text-center mb-14">
          <div className="inline-flex items-center gap-2 bg-magenta/10 text-magenta font-semibold text-sm px-4 py-1.5 rounded-full mb-4">
            <Calculator className="w-4 h-4" />
            BMI Tool
          </div>
          <h2 className="font-serif text-3xl md:text-4xl font-bold text-navy mt-2 mb-4">
            Check Your BMI
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Body Mass Index (BMI) is the first step in determining if you qualify for weight loss surgery or our non-surgical programs.
          </p>
        </ScrollFadeIn>

        <ScrollFadeIn>
          <div className="bg-white rounded-3xl border border-gray-100 shadow-lg p-8 md:p-10">
            <div className="grid sm:grid-cols-4 gap-5 mb-6">
              <div>
                <label className="block text-sm font-medium text-navy mb-2">Height (feet)</label>
                <input
                  type="number" min="3" max="8" placeholder="5"
                  value={height.feet}
                  onChange={(e) => setHeight({ ...height, feet: e.target.value })}
                  className="w-full px-4 py-3.5 rounded-xl border border-gray-200 bg-gray-50/50 outline-none focus:ring-2 focus:ring-magenta/20 focus:border-magenta transition-all text-center text-lg font-semibold"
                  data-testid="input-home-bmi-feet"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-navy mb-2">Height (inches)</label>
                <input
                  type="number" min="0" max="11" placeholder="6"
                  value={height.inches}
                  onChange={(e) => setHeight({ ...height, inches: e.target.value })}
                  className="w-full px-4 py-3.5 rounded-xl border border-gray-200 bg-gray-50/50 outline-none focus:ring-2 focus:ring-magenta/20 focus:border-magenta transition-all text-center text-lg font-semibold"
                  data-testid="input-home-bmi-inches"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-navy mb-2">Weight (lbs)</label>
                <input
                  type="number" min="50" max="800" placeholder="220"
                  value={weight}
                  onChange={(e) => setWeight(e.target.value)}
                  className="w-full px-4 py-3.5 rounded-xl border border-gray-200 bg-gray-50/50 outline-none focus:ring-2 focus:ring-magenta/20 focus:border-magenta transition-all text-center text-lg font-semibold"
                  data-testid="input-home-bmi-weight"
                />
              </div>
              <div className="flex items-end">
                <button
                  onClick={calculateBMI}
                  className="w-full bg-navy hover:bg-navy-light text-white font-semibold py-3.5 rounded-xl transition-all flex items-center justify-center gap-2 shadow-md hover:shadow-lg"
                  data-testid="button-home-calculate-bmi"
                >
                  <TrendingDown className="w-5 h-5" /> Calculate
                </button>
              </div>
            </div>

            {/* BMI Result */}
            {bmi !== null && (() => {
              const cat = getCategory(bmi);
              const qual = getQualification(bmi);
              return (
                <div className="animate-bmi-reveal mt-8 pt-8 border-t border-gray-100">
                  <div className="grid md:grid-cols-2 gap-8 items-center">
                    {/* Left: BMI number + gauge */}
                    <div className="text-center md:text-left">
                      <div className="inline-block">
                        <div className="text-6xl font-serif font-bold text-navy mb-1">{bmi}</div>
                        <div className={`text-lg font-semibold ${cat.color}`}>{cat.label}</div>
                      </div>
                      {/* Visual gauge bar */}
                      <div className="mt-5 w-full max-w-sm mx-auto md:mx-0">
                        <div className="h-3 rounded-full bg-gray-100 overflow-hidden relative">
                          <div className={`h-full rounded-full ${cat.barColor} animate-fill`} style={{ width: `${cat.pct}%` }} />
                        </div>
                        <div className="flex justify-between text-[10px] text-muted-foreground mt-1.5 px-0.5">
                          <span>18.5</span><span>25</span><span>30</span><span>35</span><span>40+</span>
                        </div>
                      </div>
                    </div>
                    {/* Right: Qualification + CTA */}
                    <div>
                      <div className={`rounded-xl p-5 ${qual.qualifies ? "bg-green-50 border border-green-100" : "bg-gray-50 border border-gray-100"}`}>
                        <p className="text-foreground text-sm leading-relaxed mb-4">{qual.text}</p>
                        {qual.qualifies && (
                          <Link
                            href="/request-consultation"
                            className="inline-flex items-center gap-2 bg-magenta hover:bg-magenta-light text-white font-semibold px-6 py-3 rounded-full transition-all text-sm shadow-md"
                            data-testid="link-bmi-schedule"
                          >
                            Schedule Your Assessment <ArrowRight className="w-4 h-4" />
                          </Link>
                        )}
                        {!qual.qualifies && (
                          <Link
                            href="/glp1"
                            className="inline-flex items-center gap-2 bg-navy hover:bg-navy-light text-white font-semibold px-6 py-3 rounded-full transition-all text-sm shadow-md"
                            data-testid="link-bmi-nonsurgical"
                          >
                            Explore Non-Surgical Options <ArrowRight className="w-4 h-4" />
                          </Link>
                        )}
                      </div>
                    </div>
                  </div>
                </div>
              );
            })()}
          </div>
        </ScrollFadeIn>
      </div>
    </section>
  );
}

/* =============================================
   QUIZ CTA SECTION
   ============================================= */
function QuizCTA() {
  return (
    <section className="py-16 md:py-20 bg-gradient-to-r from-navy via-[#1e3358] to-navy relative overflow-hidden">
      <div className="absolute inset-0 opacity-10" style={{ backgroundImage: "radial-gradient(circle at 30% 50%, rgba(155,45,107,0.4) 0%, transparent 50%), radial-gradient(circle at 70% 50%, rgba(26,143,158,0.4) 0%, transparent 50%)" }} />
      <div className="max-w-4xl mx-auto px-4 relative text-center">
        <ScrollFadeIn>
          <h2 className="font-serif text-3xl md:text-4xl font-bold text-white mb-4">Not Sure Which Option Is Right for You?</h2>
          <p className="text-white/70 text-lg mb-8 max-w-2xl mx-auto">Take our 2-minute quiz to find out if you're a candidate for weight loss surgery, GLP-1 medication, or non-surgical options.</p>
          <Link href="/quiz" className="inline-flex items-center gap-2 bg-magenta hover:bg-magenta-light text-white font-bold px-10 py-4 rounded-full transition-all shadow-xl shadow-magenta/30 text-lg" data-testid="link-quiz-cta">
            Take the Quiz <ArrowRight className="w-5 h-5" />
          </Link>
        </ScrollFadeIn>
      </div>
    </section>
  );
}

/* =============================================
   6. BEFORE/AFTER TRANSFORMATIONS CAROUSEL
   ============================================= */
const TRANSFORMATION_IMAGES: Record<string, { before: string; after: string }> = {
  "Sarah M.": { before: img("/images/beforeafter/chrissy-before.jpg"), after: img("/images/beforeafter/chrissy-after.jpg") },
  "Michael T.": { before: img("/images/beforeafter/stanley-before.jpg"), after: img("/images/beforeafter/stanley-after.jpg") },
  "Jennifer K.": { before: img("/images/beforeafter/rose-before.jpg"), after: img("/images/beforeafter/rose-after.jpg") },
  "Carlos G.": { before: img("/images/beforeafter/heidi-before.jpg"), after: img("/images/beforeafter/heidi-after.jpg") },
};

function TransformationsCarousel() {
  const scrollRef = useRef<HTMLDivElement>(null);

  const scroll = (dir: "left" | "right") => {
    if (!scrollRef.current) return;
    scrollRef.current.scrollBy({ left: dir === "left" ? -360 : 360, behavior: "smooth" });
  };

  return (
    <section className="py-20 md:py-28 section-gradient">
      <div className="max-w-7xl mx-auto px-4">
        <ScrollFadeIn className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-4">
          <div>
            <span className="text-magenta font-semibold text-sm tracking-wider uppercase">Real Results</span>
            <h2 className="font-serif text-3xl md:text-4xl font-bold text-navy mt-2">
              Transformations That Inspire
            </h2>
          </div>
          <div className="flex items-center gap-3">
            <button
              onClick={() => scroll("left")}
              className="w-10 h-10 rounded-full border border-gray-200 bg-white flex items-center justify-center hover:border-magenta/40 hover:text-magenta transition-all shadow-sm"
              aria-label="Scroll left"
              data-testid="button-transformations-prev"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>
            <button
              onClick={() => scroll("right")}
              className="w-10 h-10 rounded-full border border-gray-200 bg-white flex items-center justify-center hover:border-magenta/40 hover:text-magenta transition-all shadow-sm"
              aria-label="Scroll right"
              data-testid="button-transformations-next"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>
        </ScrollFadeIn>

        {/* Carousel */}
        <div
          ref={scrollRef}
          className="flex gap-6 overflow-x-auto pb-4 snap-x snap-mandatory scrollbar-hide"
        >
          {TRANSFORMATIONS.map((t, i) => {
            const imgs = TRANSFORMATION_IMAGES[t.name];
            return (
              <div
                key={t.name}
                className="min-w-[300px] max-w-[340px] bg-white rounded-2xl border border-gray-100 overflow-hidden premium-card snap-start flex-shrink-0"
                data-testid={`card-transformation-${i}`}
              >
                {/* Before/After real images */}
                <div className="relative h-52 overflow-hidden">
                  <div className="absolute inset-0 flex">
                    <div className="w-1/2 relative overflow-hidden">
                      {imgs ? (
                        <img src={imgs.before} alt={`${t.name} before`} className="w-full h-full object-cover object-top" />
                      ) : (
                        <div className="w-full h-full bg-navy/10" />
                      )}
                      <span className="absolute bottom-2 left-1/2 -translate-x-1/2 text-[10px] font-bold bg-black/60 text-white px-2 py-0.5 rounded-full uppercase tracking-wider">Before</span>
                    </div>
                    <div className="w-px bg-white/80 shrink-0" />
                    <div className="w-1/2 relative overflow-hidden">
                      {imgs ? (
                        <img src={imgs.after} alt={`${t.name} after`} className="w-full h-full object-cover object-top" />
                      ) : (
                        <div className="w-full h-full bg-magenta/10" />
                      )}
                      <span className="absolute bottom-2 left-1/2 -translate-x-1/2 text-[10px] font-bold bg-magenta/80 text-white px-2 py-0.5 rounded-full uppercase tracking-wider">After</span>
                    </div>
                  </div>
                  <div className="absolute top-2 right-2 bg-magenta text-white text-xs font-bold px-2.5 py-1 rounded-full shadow-md">
                    -{t.before - t.after} lbs
                  </div>
                </div>
                <div className="p-5">
                  <div className="flex items-center justify-between mb-2">
                    <h4 className="font-semibold text-navy">{t.name}</h4>
                    <span className="text-xs bg-magenta/10 text-magenta px-2 py-0.5 rounded-full font-medium">{t.procedure}</span>
                  </div>
                  <div className="flex gap-3 mb-3 text-sm">
                    <span className="text-muted-foreground">Lost <strong className="text-navy">{t.before - t.after} lbs</strong></span>
                    <span className="text-muted-foreground">in <strong className="text-navy">{t.months} months</strong></span>
                  </div>
                  <p className="text-sm text-muted-foreground italic">"{t.quote}"</p>
                </div>
              </div>
            );
          })}
        </div>

        <ScrollFadeIn className="text-center mt-10">
          <Link
            href="/results"
            className="inline-flex items-center gap-2 bg-navy hover:bg-navy-light text-white font-semibold px-8 py-3.5 rounded-full transition-all shadow-md"
            data-testid="link-view-all-results"
          >
            View All Success Stories <ArrowRight className="w-4 h-4" />
          </Link>
        </ScrollFadeIn>
      </div>
    </section>
  );
}

/* =============================================
   7. MEET YOUR SURGEON — Dr. Lange
   ============================================= */
function DrLangeSection() {
  const credentials = [
    { icon: Shield, label: "Fellowship", value: "Cleveland Clinic" },
    { icon: Award, label: "Board Certified", value: "DO" },
    { icon: Building2, label: "Hospitals", value: "Mercy & St. Luke's" },
    { icon: Heart, label: "Procedures", value: "Hundreds" },
  ];

  return (
    <section className="py-20 md:py-28 bg-white">
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* LEFT — Photo */}
          <ScrollFadeIn>
            <div className="relative max-w-md mx-auto lg:mx-0">
              <div className="aspect-[3/4] rounded-2xl overflow-hidden shadow-2xl">
                <img
                  src={img("/images/team/dr-lange.jpg")}
                  alt={`${DOCTOR.name}, ${DOCTOR.credentials}`}
                  className="w-full h-full object-cover"
                />
              </div>
              {/* Floating rating card */}
              <div className="absolute -bottom-5 -right-5 bg-white rounded-2xl px-5 py-4 shadow-xl border border-gray-100">
                <div className="flex items-center gap-1.5 mb-1">
                  {[1,2,3,4,5].map((s) => (
                    <Star key={s} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                  ))}
                  <span className="font-bold text-navy ml-1">5.0</span>
                </div>
                <p className="text-xs text-muted-foreground font-medium">Patient Rating</p>
              </div>
            </div>
          </ScrollFadeIn>

          {/* RIGHT — Bio + Credentials */}
          <ScrollFadeIn delay={150}>
            <span className="inline-flex items-center gap-2 bg-teal/10 text-teal font-semibold text-sm px-4 py-1.5 rounded-full uppercase tracking-wider mb-5">
              Meet Your Surgeon
            </span>
            <h2 className="font-serif text-3xl md:text-4xl font-bold text-navy mb-5">
              {DOCTOR.name}, {DOCTOR.credentials}
            </h2>
            <p className="text-muted-foreground text-lg leading-relaxed mb-4">
              As Medical Director at New You Surgical Weight Loss, Dr. Lange brings fellowship training from the prestigious Cleveland Clinic Florida and over 8 years of surgical excellence in bariatric and metabolic surgery.
            </p>
            <p className="text-muted-foreground leading-relaxed mb-8">
              Board-certified and affiliated with Mercy and St. Luke's Hospitals, Dr. Lange specializes in minimally invasive bariatric procedures including gastric sleeve, bypass, duodenal switch, and complex revision surgeries. His commitment to patient-centered care extends far beyond the operating room.
            </p>

            {/* Credential badges — 2x2 grid */}
            <div className="grid grid-cols-2 gap-3 mb-8">
              {credentials.map(({ icon: Icon, label, value }) => (
                <div
                  key={label}
                  className="flex items-center gap-3 bg-gray-50 rounded-xl px-4 py-3 border border-gray-100 hover:border-navy/20 transition-colors"
                >
                  <div className="w-9 h-9 rounded-lg bg-navy flex items-center justify-center shrink-0">
                    <Icon className="w-4 h-4 text-white" />
                  </div>
                  <div>
                    <div className="text-xs text-muted-foreground font-medium">{label}</div>
                    <div className="text-sm font-bold text-navy">{value}</div>
                  </div>
                </div>
              ))}
            </div>

            <Link
              href="/dr-lange"
              className="inline-flex items-center gap-2 bg-navy hover:bg-navy-light text-white font-semibold px-8 py-3.5 rounded-full transition-all shadow-md"
              data-testid="link-meet-dr-lange"
            >
              Meet Dr. Lange <ArrowRight className="w-4 h-4" />
            </Link>
          </ScrollFadeIn>
        </div>
      </div>
    </section>
  );
}

/* =============================================
   POST-OP JOURNEY TIMELINE
   ============================================= */
function PostOpJourney() {
  const steps = [
    { week: "Week 1", title: "Surgery & Recovery", desc: "Laparoscopic procedure. 1-2 night hospital stay. Walking the same day. Liquid diet begins.", icon: Heart, color: "bg-magenta" },
    { week: "Weeks 2-4", title: "Healing & Adaptation", desc: "Transition to pureed foods. Follow-up with Dr. Lange. Energy starts returning. First weigh-in milestones.", icon: Activity, color: "bg-teal" },
    { week: "Months 2-6", title: "Rapid Weight Loss", desc: "Most dramatic changes happen here. Advance to regular foods. Monthly check-ins. Lab work at 3 months. Clothes sizes dropping fast.", icon: TrendingDown, color: "bg-navy" },
    { week: "Months 6-12", title: "Transformation", desc: "Approaching goal weight. Comorbidities improving or resolved. Exercise routine established. InBody composition tracking.", icon: Zap, color: "bg-gold" },
    { week: "Year 1+", title: "New Life & Maintenance", desc: "One year celebration. Long-term care plan. Membership options for ongoing support. Maintenance nutrition. Support groups.", icon: Star, color: "bg-magenta" },
  ];

  return (
    <section className="py-16 md:py-24 bg-white">
      <div className="max-w-5xl mx-auto px-4">
        <ScrollFadeIn className="text-center mb-14">
          <span className="text-xs font-bold tracking-[0.2em] uppercase text-magenta mb-2 block">Your Transformation Timeline</span>
          <h2 className="font-serif text-3xl md:text-4xl font-bold text-navy mb-4">Your Post-Op Journey</h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">From surgery day to your new life — here's what to expect at every stage.</p>
        </ScrollFadeIn>

        <div className="relative">
          {/* Vertical line */}
          <div className="absolute left-6 md:left-1/2 top-0 bottom-0 w-0.5 bg-gray-200 -translate-x-1/2 hidden md:block" />
          <div className="absolute left-6 top-0 bottom-0 w-0.5 bg-gray-200 md:hidden" />

          <div className="space-y-8 md:space-y-12">
            {steps.map((step, i) => (
              <ScrollFadeIn key={step.week} delay={i * 100}>
                <div className={`flex items-start gap-6 md:gap-12 ${i % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"}`}>
                  {/* Content */}
                  <div className={`flex-1 ${i % 2 === 0 ? "md:text-right" : "md:text-left"} pl-16 md:pl-0`}>
                    <span className="text-xs font-bold tracking-wider uppercase text-muted-foreground">{step.week}</span>
                    <h3 className="font-serif text-xl font-bold text-navy mt-1 mb-2">{step.title}</h3>
                    <p className="text-muted-foreground text-sm leading-relaxed">{step.desc}</p>
                  </div>

                  {/* Icon circle */}
                  <div className={`absolute left-6 md:relative md:left-auto w-12 h-12 rounded-full ${step.color} flex items-center justify-center shrink-0 shadow-lg -translate-x-1/2 md:translate-x-0`}>
                    <step.icon className="w-5 h-5 text-white" />
                  </div>

                  {/* Spacer for alternating layout */}
                  <div className="hidden md:block flex-1" />
                </div>
              </ScrollFadeIn>
            ))}
          </div>
        </div>

        <ScrollFadeIn className="text-center mt-14">
          <div className="bg-navy/5 rounded-2xl p-6 inline-block">
            <p className="text-navy font-semibold mb-1">You're never alone on this journey.</p>
            <p className="text-sm text-muted-foreground">Dr. Lange and the New You team support you at every stage — from pre-op through lifetime maintenance.</p>
          </div>
        </ScrollFadeIn>
      </div>
    </section>
  );
}

/* =============================================
   8. INSURANCE & PRICING TRANSPARENCY
   ============================================= */
function InsurancePricing() {
  return (
    <section className="bg-navy py-20 md:py-28 relative overflow-hidden">
      {/* Background pattern */}
      <div
        className="absolute inset-0 opacity-[0.04]"
        style={{ backgroundImage: "radial-gradient(circle at 20% 50%, rgba(200,151,62,0.6) 0%, transparent 50%), radial-gradient(circle at 80% 20%, rgba(26,143,158,0.5) 0%, transparent 50%)" }}
      />
      <div className="max-w-7xl mx-auto px-4 relative">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* LEFT — Insurance info */}
          <ScrollFadeIn>
            <span className="inline-flex items-center gap-2 bg-gold/20 text-gold font-semibold text-sm px-4 py-1.5 rounded-full uppercase tracking-wider mb-6">
              Coverage & Financing
            </span>
            <h2 className="font-serif text-3xl md:text-4xl font-bold text-white mb-5">
              Insurance Accepted &amp; Affordable Options
            </h2>
            <p className="text-white/70 leading-relaxed mb-6">
              We work with all major insurance carriers. Most bariatric procedures are covered when medically necessary. We also offer financing through CareCredit to ensure everyone can access life-changing care.
            </p>
            <ul className="space-y-3 mb-8">
              {[
                "All major insurance accepted",
                "Complimentary insurance verification",
                "CareCredit financing available",
                "Plans as low as $300/month",
                "No-obligation cost estimate",
                "Cash pay from $15,000 — schedule in 30 days",
              ].map((item) => (
                <li key={item} className="flex items-center gap-3">
                  <CheckCircle2 className="w-5 h-5 text-teal shrink-0" />
                  <span className="text-white/80 text-sm">{item}</span>
                </li>
              ))}
            </ul>
            <Link
              href="/insurance"
              className="inline-flex items-center gap-2 border-2 border-white/30 hover:border-white text-white font-semibold px-7 py-3 rounded-full transition-all text-sm"
              data-testid="link-insurance-page"
            >
              Learn About Coverage <ArrowRight className="w-4 h-4" />
            </Link>
          </ScrollFadeIn>

          {/* RIGHT — Cost card */}
          <ScrollFadeIn delay={150}>
            <div className="bg-white/[0.06] backdrop-blur-sm rounded-3xl p-8 md:p-10 border border-white/10 shadow-2xl text-center">
              <div className="inline-flex items-center gap-2 bg-white/10 text-white/70 text-xs font-bold px-3 py-1.5 rounded-full uppercase tracking-wider mb-6">
                <Shield className="w-4 h-4 text-gold" />
                With Insurance Coverage
              </div>
              <h3 className="font-serif text-xl font-bold text-white mb-3">Your Out-of-Pocket Cost</h3>
              <p className="text-white/50 text-sm mb-4">Most patients pay</p>
              <div className="font-serif text-6xl md:text-7xl font-bold text-gold mb-3 tracking-tight">
                $0–$2,500
              </div>
              <p className="text-white/60 text-sm mb-8">with insurance coverage</p>

              {/* Mini stats */}
              <div className="grid grid-cols-2 gap-4 mb-8">
                {[
                  { label: "Insurance plans accepted", value: "All Major" },
                  { label: "Avg. approval time", value: "3–4 Weeks" },
                ].map(({ label, value }) => (
                  <div key={label} className="bg-white/[0.06] rounded-xl p-4 border border-white/10">
                    <div className="text-lg font-bold text-white mb-0.5">{value}</div>
                    <div className="text-white/50 text-xs">{label}</div>
                  </div>
                ))}
              </div>

              <div className="border-t border-white/10 mt-4 pt-4 mb-4">
                <p className="text-white/50 text-xs uppercase tracking-wider mb-1">Cash Pay Option</p>
                <p className="text-white text-lg font-bold">From $15,000</p>
                <p className="text-white/60 text-xs">Surgery in as little as 30 days · CareCredit available</p>
              </div>
              <Link href="/financing" className="block w-full text-center bg-[#936C56] hover:opacity-90 text-white font-bold py-3 rounded-xl transition-all mb-3">
                Cherry Payment Plans →
              </Link>
              <Link
                href="/insurance"
                className="inline-flex items-center justify-center gap-2 bg-magenta hover:bg-magenta-light text-white font-bold px-8 py-4 rounded-full transition-all shadow-lg shadow-magenta/30 text-sm uppercase tracking-wide w-full"
                data-testid="link-free-insurance-check"
              >
                Complimentary Insurance Check <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </ScrollFadeIn>
        </div>
      </div>
    </section>
  );
}

/* =============================================
   9. REVIEWS CAROUSEL
   ============================================= */
function ReviewsCarousel() {
  const [current, setCurrent] = useState(0);
  const scrollRef = useRef<HTMLDivElement>(null);

  const scrollTo = (idx: number) => {
    const clamped = Math.max(0, Math.min(idx, REVIEWS.length - 1));
    setCurrent(clamped);
    scrollRef.current?.children[clamped]?.scrollIntoView({ behavior: "smooth", block: "nearest", inline: "start" });
  };

  return (
    <section className="section-gradient py-20 md:py-28">
      <div className="max-w-7xl mx-auto px-4">
        <ScrollFadeIn className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-4">
          <div>
            <span className="text-magenta font-semibold text-sm tracking-wider uppercase">Patient Reviews</span>
            <h2 className="font-serif text-3xl md:text-4xl font-bold text-navy mt-2">
              Hear From Our Patients
            </h2>
          </div>
          <div className="flex items-center gap-3">
            <div className="flex items-center gap-1 mr-4">
              {[1,2,3,4,5].map((s) => <Star key={s} className="w-5 h-5 fill-yellow-500 text-yellow-500" />)}
              <span className="ml-2 font-semibold text-navy">5.0</span>
              <span className="text-muted-foreground text-sm ml-1">({REVIEWS.length} reviews)</span>
            </div>
            <button
              onClick={() => scrollTo(current - 1)}
              className="w-10 h-10 rounded-full border border-gray-200 flex items-center justify-center hover:bg-white hover:border-magenta/30 transition-all"
              data-testid="button-reviews-prev"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>
            <button
              onClick={() => scrollTo(current + 1)}
              className="w-10 h-10 rounded-full border border-gray-200 flex items-center justify-center hover:bg-white hover:border-magenta/30 transition-all"
              data-testid="button-reviews-next"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>
        </ScrollFadeIn>

        <div ref={scrollRef} className="flex gap-6 overflow-x-auto pb-4 snap-x snap-mandatory scrollbar-hide">
          {REVIEWS.map((review, i) => (
            <div
              key={i}
              className="min-w-[320px] max-w-[360px] bg-white rounded-2xl p-6 border border-gray-100 shadow-sm snap-start flex-shrink-0 hover:shadow-md transition-shadow"
            >
              <div className="flex items-center gap-1 mb-3">
                {[1,2,3,4,5].map((s) => <Star key={s} className="w-4 h-4 fill-yellow-500 text-yellow-500" />)}
              </div>
              <p className="text-sm text-foreground leading-relaxed mb-4">"{review.text}"</p>
              <div className="flex items-center justify-between pt-3 border-t border-gray-100">
                <div>
                  <p className="font-semibold text-navy text-sm">{review.name}</p>
                  <p className="text-xs text-muted-foreground">{review.date}</p>
                </div>
                <span className="text-xs bg-navy/5 text-navy px-2.5 py-1 rounded-full font-medium">{review.procedure}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* =============================================
   10. FINAL CTA SECTION
   ============================================= */
function FinalCTA() {
  return (
    <section className="relative overflow-hidden py-24 md:py-32">
      {/* Background image */}
      <div className="absolute inset-0" aria-hidden="true">
        <img
          src={img("/images/hero/hero-bg.jpg")}
          alt=""
          className="w-full h-full object-cover"
          style={{ objectPosition: "30% 25%" }}
        />
        <div className="absolute inset-0 bg-navy/80" />
      </div>

      {/* Ambient glows */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none" aria-hidden="true">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 rounded-full bg-magenta/15 blur-[120px]" />
        <div className="absolute bottom-1/4 right-1/4 w-64 h-64 rounded-full bg-teal/10 blur-[100px]" />
      </div>

      <div className="max-w-4xl mx-auto px-4 relative z-10 text-center">
        <ScrollFadeIn>
          <div className="inline-flex items-center gap-2 bg-white/10 text-white/80 text-sm px-4 py-1.5 rounded-full border border-white/10 mb-8">
            <HeartPulse className="w-4 h-4 text-gold" />
            {PRACTICE.tagline}
          </div>
          <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
            Ready to Start Your New Life?
          </h2>
          <p className="text-xl text-white/70 mb-10 max-w-2xl mx-auto leading-relaxed">
            Schedule your consultation with Dr. Lange today. Most insurance accepted.
          </p>
          <div className="flex flex-wrap items-center justify-center gap-4">
            <Link
              href="/request-consultation"
              className="inline-flex items-center gap-2 bg-magenta hover:bg-magenta-light text-white font-bold px-8 py-4 rounded-full transition-all shadow-xl shadow-magenta/30 text-base"
              data-testid="link-final-cta-consultation"
            >
              Request Consultation <ArrowRight className="w-5 h-5" />
            </Link>
            <a
              href={PRACTICE.phoneLink}
              className="inline-flex items-center gap-2 border-2 border-white/40 hover:border-white text-white font-bold px-8 py-4 rounded-full transition-all text-base"
              data-testid="link-final-cta-phone"
            >
              <Phone className="w-5 h-5" /> Call {PRACTICE.phone}
            </a>
          </div>
        </ScrollFadeIn>
      </div>
    </section>
  );
}

/* =============================================
   EXIT INTENT POPUP
   ============================================= */
function ExitIntentPopup() {
  const [show, setShow] = useState(false);
  const [dismissed, setDismissed] = useState(false);

  useEffect(() => {
    if (dismissed) return;
    const handler = (e: MouseEvent) => {
      if (e.clientY <= 5) {
        setShow(true);
      }
    };
    document.addEventListener("mousemove", handler);
    return () => document.removeEventListener("mousemove", handler);
  }, [dismissed]);

  if (!show || dismissed) return null;

  return (
    <div className="fixed inset-0 z-[60] flex items-center justify-center bg-black/50 backdrop-blur-sm animate-fade-in-up" onClick={() => setDismissed(true)}>
      <div className="bg-white rounded-3xl p-8 md:p-10 max-w-md mx-4 shadow-2xl relative" onClick={(e) => e.stopPropagation()}>
        <button onClick={() => setDismissed(true)} className="absolute top-4 right-4 w-8 h-8 rounded-full bg-gray-100 flex items-center justify-center hover:bg-gray-200 transition-colors text-gray-500" data-testid="button-exit-intent-close">
          ✕
        </button>
        <div className="text-center">
          <div className="w-16 h-16 rounded-full bg-magenta/10 flex items-center justify-center mx-auto mb-4">
            <HeartPulse className="w-8 h-8 text-magenta" />
          </div>
          <h3 className="font-serif text-2xl font-bold text-navy mb-2">Wait — Don't Leave Yet!</h3>
          <p className="text-muted-foreground mb-6">Get a complimentary insurance verification and find out if weight loss surgery is covered — in less than 5 minutes.</p>
          <Link href="/insurance" onClick={() => setDismissed(true)} className="inline-flex items-center gap-2 bg-magenta hover:bg-magenta-light text-white font-bold px-8 py-4 rounded-full transition-all shadow-lg w-full justify-center text-base" data-testid="link-exit-intent-insurance">
            Complimentary Insurance Check <ArrowRight className="w-5 h-5" />
          </Link>
          <p className="text-xs text-muted-foreground mt-4">By providing your phone number, you consent to receive texts from New You Surgical Weight Loss. Msg & data rates apply. Reply STOP to opt out. HIPAA compliant.</p>
        </div>
      </div>
    </div>
  );
}
