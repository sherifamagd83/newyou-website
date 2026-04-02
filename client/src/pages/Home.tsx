import { Link } from "wouter";
import { Star, ArrowRight, Phone, Shield, Users, HeartPulse, Clock, Award, Minimize2, GitBranch, RefreshCw, Pill, Circle, Sparkles, ChevronLeft, ChevronRight, Play, Calculator, Activity, TrendingDown } from "lucide-react";
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
      <JourneyRoadmap />
      <StatsSection />
      <ProceduresGrid />
      <BMICalculatorSection />
      <TransformationsSection />
      <VideoTestimonials />
      <ReviewsCarousel />
      <WhyNewYou />
      <DrLangeSpotlight />
    </div>
  );
}

function HeroSection() {
  return (
    <section className="relative overflow-hidden min-h-[85vh] lg:min-h-[80vh] flex items-center">
      {/* Full-bleed cinematic hero image with Ken Burns zoom */}
      <div className="absolute inset-0" aria-hidden="true">
        <img
          src={img("/images/hero/hero-bg.jpg")}
          alt=""
          className="w-full h-full object-cover animate-hero-zoom"
          style={{ objectPosition: "30% 25%" }}
        />
        {/* Lighter overlay — let the image shine through */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#0B1829]/75 via-[#0B1829]/50 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#0B1829]/60 via-transparent to-transparent" />
      </div>

      {/* Ambient glow accents — larger, warmer */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none" aria-hidden="true">
        <div className="absolute top-[10%] left-[3%] w-[280px] h-[280px] rounded-full bg-[#9B2D6B]/10 blur-[120px] animate-float-slow" />
        <div className="absolute bottom-[15%] left-[15%] w-[200px] h-[200px] rounded-full bg-[#C8973E]/8 blur-[100px] animate-float" />
        <div className="absolute top-[20%] right-[25%] w-[180px] h-[180px] rounded-full bg-[#C8973E]/6 blur-[90px] animate-float-reverse" />
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
                  <span className="text-white/40 text-xs ml-1.5">5.0 rating · 500+ procedures</span>
                </div>
              </div>
            </div>

            {/* Trust badges */}
            <div className="animate-text-reveal-delay-3 flex flex-wrap gap-x-5 gap-y-3">
              {[
                { icon: Award, text: "14+ Years Experience" },
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
              <p className="text-white/50 text-sm mb-5">Free, no-obligation assessment</p>
              <LeadForm variant="hero" className="!bg-transparent !backdrop-blur-none !border-0 !p-0 !shadow-none" />
            </div>
          </div>
        </div>
      </div>

      {/* Bottom fade to white page content */}
      <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-white to-transparent z-10" />
    </section>
  );
}

function JourneyRoadmap() {
  const steps = [
    { num: "01", title: "Free Consultation", desc: "Meet with Dr. Lange to discuss your goals, health history, and options. We'll verify your insurance at no cost.", icon: Phone, cta: "Book Free Consultation", href: "/request-consultation" },
    { num: "02", title: "Personalized Plan", desc: "Receive a customized weight loss plan — surgical or non-surgical — designed specifically for your body and lifestyle.", icon: HeartPulse, cta: "Explore Options", href: "/procedures" },
    { num: "03", title: "Your New Life", desc: "Experience lasting transformation with ongoing support from our multidisciplinary team including behavioral coaching.", icon: Sparkles, cta: "See Results", href: "/results" },
  ];

  return (
    <section className="py-20 md:py-28 bg-white">
      <div className="max-w-7xl mx-auto px-4">
        <ScrollFadeIn className="text-center mb-16">
          <span className="text-magenta font-semibold text-sm tracking-wider uppercase">Your Journey</span>
          <h2 className="font-serif text-3xl md:text-4xl font-bold text-navy mt-2 mb-4">
            Three Steps to a New You
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            We've helped hundreds of patients transform their lives. Here's how your journey begins.
          </p>
        </ScrollFadeIn>

        <div className="grid md:grid-cols-3 gap-8 relative">
          {/* Connecting line */}
          <div className="hidden md:block absolute top-20 left-[20%] right-[20%] h-0.5 bg-gradient-to-r from-magenta/30 via-teal/30 to-gold/30" />
          {steps.map((step, i) => (
            <ScrollFadeIn key={step.num} delay={i * 150}>
              <div className="bg-white rounded-2xl p-8 border border-gray-100 premium-card relative text-center group">
                <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-navy to-navy-light flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                  <step.icon className="w-7 h-7 text-white" />
                </div>
                <div className="text-magenta font-bold text-sm mb-2">{step.num}</div>
                <h3 className="font-serif text-xl font-bold text-navy mb-3">{step.title}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed mb-5">{step.desc}</p>
                <Link href={step.href} className="inline-flex items-center gap-1.5 text-magenta font-semibold text-sm hover:gap-3 transition-all" data-testid={`link-journey-${i}`}>
                  {step.cta} <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </ScrollFadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}

function StatsSection() {
  return (
    <section className="stats-pattern py-20 relative overflow-hidden">
      {/* Subtle diagonal pattern overlay */}
      <div className="absolute inset-0 opacity-[0.04]" style={{ backgroundImage: "repeating-linear-gradient(45deg, transparent, transparent 35px, rgba(255,255,255,0.5) 35px, rgba(255,255,255,0.5) 36px)" }} />
      <div className="max-w-7xl mx-auto px-4 relative">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12 text-center text-white">
          {[
            { value: 500, suffix: "+", label: "Lives Transformed", icon: Users },
            { value: 14, suffix: "+", label: "Years of Experience", icon: Award },
            { value: 98, suffix: "%", label: "Patient Satisfaction", icon: HeartPulse },
            { value: 6, suffix: "", label: "Surgical Procedures", icon: Activity },
          ].map(({ value, suffix, label, icon: Icon }) => (
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

function ProceduresGrid() {
  const procedures = [
    { name: "Gastric Sleeve", icon: Minimize2, desc: "Reduce stomach by 80% for effective, lasting weight loss. The #1 bariatric procedure worldwide.", href: "/procedures/gastric-sleeve", color: "from-blue-500/10 to-blue-600/10" },
    { name: "Gastric Bypass", icon: GitBranch, desc: "Roux-en-Y bypass for maximum weight loss with metabolic benefits including diabetes reversal.", href: "/procedures/gastric-bypass", color: "from-purple-500/10 to-purple-600/10" },
    { name: "Revision Surgery", icon: RefreshCw, desc: "Redo. Repair. Renew. Expert conversion and revision for prior weight loss surgeries.", href: "/procedures/revision-surgery", color: "from-orange-500/10 to-orange-600/10" },
    { name: "GLP-1 Program", icon: Pill, desc: "Medical weight loss with Semaglutide. Lose weight without surgery from $249/month.", href: "/glp1", color: "from-teal-500/10 to-teal-600/10" },
    { name: "Non-Surgical Options", icon: Circle, desc: "ORBERA® balloon and medically supervised programs for those who prefer a non-surgical approach.", href: "/non-surgical", color: "from-pink-500/10 to-pink-600/10" },
    { name: "Aesthetics", icon: Sparkles, desc: "Complete your transformation with hair restoration, skin tightening & body contouring.", href: "/aesthetics", color: "from-gold/10 to-amber-600/10" },
  ];

  return (
    <section className="section-gradient py-20 md:py-28">
      <div className="max-w-7xl mx-auto px-4">
        <ScrollFadeIn className="text-center mb-16">
          <span className="text-magenta font-semibold text-sm tracking-wider uppercase">Our Services</span>
          <h2 className="font-serif text-3xl md:text-4xl font-bold text-navy mt-2 mb-4">
            Comprehensive Weight Loss Solutions
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            From surgical procedures to non-invasive options, find the right path for your weight loss journey.
          </p>
        </ScrollFadeIn>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {procedures.map((proc, i) => (
            <ScrollFadeIn key={proc.name} delay={i * 100}>
              <Link href={proc.href} className="block" data-testid={`link-procedure-${proc.name.toLowerCase().replace(/\s+/g, "-")}`}>
                <div className="bg-white rounded-2xl p-6 border border-gray-100 premium-card h-full group cursor-pointer">
                  <div className={`w-14 h-14 rounded-xl bg-gradient-to-br ${proc.color} flex items-center justify-center mb-5 group-hover:scale-110 transition-transform duration-300`}>
                    <proc.icon className="w-6 h-6 text-navy" />
                  </div>
                  <h3 className="font-semibold text-lg text-navy mb-2 group-hover:text-magenta transition-colors">{proc.name}</h3>
                  <p className="text-muted-foreground text-sm leading-relaxed mb-4">{proc.desc}</p>
                  <span className="inline-flex items-center gap-1.5 text-magenta font-semibold text-sm group-hover:gap-3 transition-all">
                    Learn More <ArrowRight className="w-4 h-4" />
                  </span>
                </div>
              </Link>
            </ScrollFadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}

/* =============================================
   BMI CALCULATOR SECTION
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
            Free Tool
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
                            Schedule Free Assessment <ArrowRight className="w-4 h-4" />
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

const TRANSFORMATION_IMAGES: Record<string, { before: string; after: string }> = {
  "Sarah M.": { before: img("/images/beforeafter/chrissy-before.jpg"), after: img("/images/beforeafter/chrissy-after.jpg") },
  "Michael T.": { before: img("/images/beforeafter/stanley-before.jpg"), after: img("/images/beforeafter/stanley-after.jpg") },
  "Jennifer K.": { before: img("/images/beforeafter/rose-before.jpg"), after: img("/images/beforeafter/rose-after.jpg") },
  "Carlos G.": { before: img("/images/beforeafter/heidi-before.jpg"), after: img("/images/beforeafter/heidi-after.jpg") },
};

function TransformationsSection() {
  return (
    <section className="py-20 md:py-28 section-gradient">
      <div className="max-w-7xl mx-auto px-4">
        <ScrollFadeIn className="text-center mb-16">
          <span className="text-magenta font-semibold text-sm tracking-wider uppercase">Real Results</span>
          <h2 className="font-serif text-3xl md:text-4xl font-bold text-navy mt-2 mb-4">
            Transformations That Inspire
          </h2>
        </ScrollFadeIn>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {TRANSFORMATIONS.map((t, i) => {
            const imgs = TRANSFORMATION_IMAGES[t.name];
            return (
            <ScrollFadeIn key={t.name} delay={i * 100}>
              <div className="bg-white rounded-2xl border border-gray-100 overflow-hidden premium-card">
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
            </ScrollFadeIn>
            );
          })}
        </div>

        <ScrollFadeIn className="text-center mt-10">
          <Link href="/results" className="inline-flex items-center gap-2 bg-navy hover:bg-navy-light text-white font-semibold px-8 py-3.5 rounded-full transition-all shadow-md" data-testid="link-view-all-results">
            View All Success Stories <ArrowRight className="w-4 h-4" />
          </Link>
        </ScrollFadeIn>
      </div>
    </section>
  );
}

/* =============================================
   VIDEO TESTIMONIALS SECTION
   ============================================= */
function VideoTestimonials() {
  const videos = [
    {
      title: "Sarah's 110 lb Transformation",
      subtitle: "Gastric Sleeve Patient",
      thumbnail: img("/images/beforeafter/chrissy-after.jpg"),
      duration: "3:24",
    },
    {
      title: "Michael Reverses Diabetes",
      subtitle: "Gastric Bypass Patient",
      thumbnail: img("/images/beforeafter/stanley-after.jpg"),
      duration: "4:12",
    },
    {
      title: "Jennifer's Revision Success",
      subtitle: "Revision Surgery Patient",
      thumbnail: img("/images/beforeafter/rose-after.jpg"),
      duration: "2:58",
    },
  ];

  return (
    <section className="py-20 md:py-28 bg-white">
      <div className="max-w-7xl mx-auto px-4">
        <ScrollFadeIn className="text-center mb-14">
          <span className="text-magenta font-semibold text-sm tracking-wider uppercase">Watch Their Stories</span>
          <h2 className="font-serif text-3xl md:text-4xl font-bold text-navy mt-2 mb-4">
            Video Testimonials
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Hear directly from our patients about their life-changing experiences with Dr. Lange.
          </p>
        </ScrollFadeIn>

        <div className="grid md:grid-cols-3 gap-6">
          {videos.map((video, i) => (
            <ScrollFadeIn key={video.title} delay={i * 120}>
              <div className="video-thumbnail rounded-2xl overflow-hidden cursor-pointer group border border-gray-100" data-testid={`video-testimonial-${i}`}>
                <div className="relative aspect-video overflow-hidden">
                  <img
                    src={video.thumbnail}
                    alt={video.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-navy/70 via-navy/20 to-transparent" />

                  {/* Play button with pulse ring */}
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="relative">
                      <div className="absolute inset-0 bg-magenta/60 rounded-full animate-pulse-ring" />
                      <div className="play-btn relative w-16 h-16 rounded-full bg-magenta/90 flex items-center justify-center transition-transform duration-300 shadow-xl">
                        <Play className="w-7 h-7 text-white ml-1" fill="white" />
                      </div>
                    </div>
                  </div>

                  {/* Duration badge */}
                  <div className="absolute bottom-3 right-3 bg-black/70 text-white text-xs font-medium px-2 py-0.5 rounded-md">
                    {video.duration}
                  </div>
                </div>
                <div className="p-4 bg-white">
                  <h4 className="font-semibold text-navy text-sm mb-0.5">{video.title}</h4>
                  <p className="text-xs text-muted-foreground">{video.subtitle}</p>
                </div>
              </div>
            </ScrollFadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}

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
            <button onClick={() => scrollTo(current - 1)} className="w-10 h-10 rounded-full border border-gray-200 flex items-center justify-center hover:bg-white hover:border-magenta/30 transition-all" data-testid="button-reviews-prev">
              <ChevronLeft className="w-5 h-5" />
            </button>
            <button onClick={() => scrollTo(current + 1)} className="w-10 h-10 rounded-full border border-gray-200 flex items-center justify-center hover:bg-white hover:border-magenta/30 transition-all" data-testid="button-reviews-next">
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>
        </ScrollFadeIn>

        <div ref={scrollRef} className="flex gap-6 overflow-x-auto pb-4 snap-x snap-mandatory scrollbar-hide">
          {REVIEWS.map((review, i) => (
            <div key={i} className="min-w-[320px] max-w-[360px] bg-white rounded-2xl p-6 border border-gray-100 shadow-sm snap-start flex-shrink-0 hover:shadow-md transition-shadow">
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

function WhyNewYou() {
  const reasons = [
    { icon: Award, title: "Experienced Surgeon", desc: "Dr. Lange trained at Cleveland Clinic — one of the nation's top bariatric surgery programs. Over 14 years and 500+ procedures." },
    { icon: Users, title: "Multidisciplinary Approach", desc: "Surgery is just the beginning. Our team includes behavioral therapists, nutritionists, and dedicated support staff." },
    { icon: Shield, title: "Insurance Accepted", desc: "We work with all major insurance carriers and offer financing through CareCredit with plans as low as $300/month." },
    { icon: HeartPulse, title: "Lifetime Support", desc: "Monthly support groups, behavioral coaching, and follow-up care for life. You're never alone on your journey." },
  ];

  return (
    <section className="py-20 md:py-28 bg-white">
      <div className="max-w-7xl mx-auto px-4">
        <ScrollFadeIn className="text-center mb-16">
          <span className="text-magenta font-semibold text-sm tracking-wider uppercase">Why Choose Us</span>
          <h2 className="font-serif text-3xl md:text-4xl font-bold text-navy mt-2 mb-4">
            Why New You?
          </h2>
        </ScrollFadeIn>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {reasons.map((r, i) => (
            <ScrollFadeIn key={r.title} delay={i * 100}>
              <div className="text-center group">
                <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-magenta/10 to-pink-100 flex items-center justify-center mx-auto mb-5 group-hover:scale-110 group-hover:shadow-lg transition-all duration-300">
                  <r.icon className="w-7 h-7 text-magenta" />
                </div>
                <h3 className="font-semibold text-navy text-lg mb-2">{r.title}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">{r.desc}</p>
              </div>
            </ScrollFadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}

function DrLangeSpotlight() {
  return (
    <section className="section-gradient py-20 md:py-28">
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <ScrollFadeIn>
            {/* Dr. Lange photo */}
            <div className="relative">
              <div className="aspect-[3/4] max-w-md mx-auto rounded-2xl overflow-hidden shadow-xl">
                <img
                  src={img("/images/team/dr-lange.jpg")}
                  alt={`${DOCTOR.name}, ${DOCTOR.credentials}`}
                  className="w-full h-full object-cover rounded-2xl"
                />
              </div>
              <div className="absolute -bottom-4 -right-4 bg-white rounded-xl p-4 shadow-lg border">
                <div className="flex items-center gap-2">
                  <div className="flex -space-x-1">
                    {[1,2,3,4,5].map((s) => <Star key={s} className="w-4 h-4 fill-yellow-500 text-yellow-500" />)}
                  </div>
                  <span className="font-bold text-navy">5.0</span>
                </div>
                <p className="text-xs text-muted-foreground mt-1">Patient Rating</p>
              </div>
            </div>
          </ScrollFadeIn>

          <ScrollFadeIn delay={150}>
            <span className="text-magenta font-semibold text-sm tracking-wider uppercase">Meet Your Surgeon</span>
            <h2 className="font-serif text-3xl md:text-4xl font-bold text-navy mt-2 mb-6">
              {DOCTOR.name}, {DOCTOR.credentials}
            </h2>
            <p className="text-muted-foreground text-lg leading-relaxed mb-4">
              As Medical Director at New You Surgical Weight Loss, Dr. Lange brings fellowship training from the prestigious Cleveland Clinic Florida and over 14 years of surgical excellence.
            </p>
            <p className="text-muted-foreground leading-relaxed mb-6">
              Board-certified and affiliated with Mercy and St. Luke's Hospitals, Dr. Lange specializes in minimally invasive bariatric procedures including gastric sleeve, bypass, duodenal switch, and complex revision surgeries.
            </p>
            <ul className="space-y-2 mb-8">
              {[
                "Fellowship: Cleveland Clinic Florida — Bariatric Surgery",
                "Affiliations: Mercy Hospitals & St. Luke's Hospitals",
                "500+ successful bariatric procedures",
                "Expert in complex revision & conversion surgeries",
              ].map((item) => (
                <li key={item} className="flex items-start gap-2 text-sm">
                  <Shield className="w-4 h-4 text-magenta mt-0.5 shrink-0" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
            <Link href="/dr-lange" className="inline-flex items-center gap-2 bg-navy hover:bg-navy-light text-white font-semibold px-8 py-3.5 rounded-full transition-all shadow-md" data-testid="link-meet-dr-lange">
              Meet Dr. Lange <ArrowRight className="w-4 h-4" />
            </Link>
          </ScrollFadeIn>
        </div>
      </div>
    </section>
  );
}
