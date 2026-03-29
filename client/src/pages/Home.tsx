import { Link } from "wouter";
import { Star, ArrowRight, Phone, Shield, Users, HeartPulse, Clock, Award, Minimize2, GitBranch, RefreshCw, Pill, Circle, Sparkles, ChevronLeft, ChevronRight } from "lucide-react";
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
      <TransformationsSection />
      <ReviewsCarousel />
      <WhyNewYou />
      <DrLangeSpotlight />
    </div>
  );
}

function HeroSection() {
  return (
    <section className="hero-gradient relative overflow-hidden">
      {/* Hero background photo — right side */}
      <div className="absolute inset-0">
        <img
          src={img("/images/stock/hero-woman-walking.jpg")}
          alt=""
          aria-hidden="true"
          className="absolute right-0 top-0 h-full w-1/2 object-cover object-center opacity-20 mix-blend-luminosity"
        />
        <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-magenta/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/4" />
        <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-teal/10 rounded-full blur-3xl translate-y-1/2 -translate-x-1/4" />
      </div>
      <div className="max-w-7xl mx-auto px-4 py-16 md:py-24 relative">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left — Copy */}
          <div>
            <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur rounded-full px-4 py-1.5 text-sm text-white/80 mb-6">
              <Shield className="w-4 h-4 text-gold" />
              Board-Certified Bariatric Surgeon — St. Louis, MO
            </div>
            <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-[1.1] mb-6">
              Transform Your Life at{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-pink-300 via-magenta-light to-pink-200" style={{ WebkitBackgroundClip: "text", backgroundImage: "linear-gradient(to right, #e8a0c9, #d466a8, #e8a0c9)" }}>
                New You
              </span>
            </h1>
            <p className="text-lg md:text-xl text-white/80 mb-8 max-w-xl leading-relaxed">
              {DOCTOR.name}, {DOCTOR.credentials} — fellowship-trained at Cleveland Clinic — offers comprehensive surgical and non-surgical weight loss solutions with a caring, personalized approach.
            </p>
            <div className="flex flex-wrap gap-6 text-sm text-white/60">
              {[
                { icon: Award, text: "14+ Years Experience" },
                { icon: HeartPulse, text: "All Insurance Accepted" },
                { icon: Users, text: "500+ Lives Transformed" },
              ].map(({ icon: Icon, text }) => (
                <div key={text} className="flex items-center gap-2">
                  <Icon className="w-4 h-4 text-gold" />
                  <span>{text}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Right — Lead Form */}
          <div className="lg:pl-8">
            <LeadForm variant="hero" title="See If You Qualify — Free Assessment" />
          </div>
        </div>
      </div>
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
              <div className="bg-white rounded-2xl p-8 border border-gray-100 shadow-sm hover:shadow-lg transition-all relative text-center group card-hover">
                <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-navy to-navy-light flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform">
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
    <section className="bg-navy py-16">
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center text-white">
          {[
            { value: 500, suffix: "+", label: "Lives Transformed" },
            { value: 14, suffix: "+", label: "Years of Experience" },
            { value: 98, suffix: "%", label: "Patient Satisfaction" },
            { value: 6, suffix: "", label: "Surgical Procedures" },
          ].map(({ value, suffix, label }) => (
            <div key={label}>
              <div className="font-serif text-4xl md:text-5xl font-bold text-gold mb-2">
                <AnimatedCounter end={value} suffix={suffix} />
              </div>
              <div className="text-white/70 text-sm">{label}</div>
            </div>
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
                <div className="bg-white rounded-2xl p-6 border border-gray-100 shadow-sm card-hover h-full group cursor-pointer">
                  <div className={`w-14 h-14 rounded-xl bg-gradient-to-br ${proc.color} flex items-center justify-center mb-5 group-hover:scale-110 transition-transform`}>
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

const TRANSFORMATION_IMAGES: Record<string, { before: string; after: string }> = {
  "Sarah M.": { before: img("/images/beforeafter/chrissy-before.jpg"), after: img("/images/beforeafter/chrissy-after.jpg") },
  "Michael T.": { before: img("/images/beforeafter/stanley-before.jpg"), after: img("/images/beforeafter/stanley-after.jpg") },
  "Jennifer K.": { before: img("/images/beforeafter/rose-before.jpg"), after: img("/images/beforeafter/rose-after.jpg") },
  "Carlos G.": { before: img("/images/beforeafter/heidi-before.jpg"), after: img("/images/beforeafter/heidi-after.jpg") },
};

function TransformationsSection() {
  return (
    <section className="py-20 md:py-28 bg-white">
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
              <div className="bg-white rounded-2xl border border-gray-100 overflow-hidden shadow-sm card-hover">
                {/* Before/After real images */}
                <div className="relative h-48 overflow-hidden">
                  <div className="absolute inset-0 flex">
                    <div className="w-1/2 relative overflow-hidden">
                      {imgs ? (
                        <img src={imgs.before} alt={`${t.name} before`} className="w-full h-full object-cover object-top" />
                      ) : (
                        <div className="w-full h-full bg-navy/10" />
                      )}
                      <span className="absolute bottom-1 left-1/2 -translate-x-1/2 text-[10px] font-semibold bg-black/50 text-white px-1.5 py-0.5 rounded">Before</span>
                    </div>
                    <div className="w-px bg-white/80 shrink-0" />
                    <div className="w-1/2 relative overflow-hidden">
                      {imgs ? (
                        <img src={imgs.after} alt={`${t.name} after`} className="w-full h-full object-cover object-top" />
                      ) : (
                        <div className="w-full h-full bg-magenta/10" />
                      )}
                      <span className="absolute bottom-1 left-1/2 -translate-x-1/2 text-[10px] font-semibold bg-black/50 text-white px-1.5 py-0.5 rounded">After</span>
                    </div>
                  </div>
                  <div className="absolute top-2 right-2 bg-magenta text-white text-xs font-bold px-2 py-0.5 rounded-full">
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
            <button onClick={() => scrollTo(current - 1)} className="w-10 h-10 rounded-full border border-gray-200 flex items-center justify-center hover:bg-white transition-colors" data-testid="button-reviews-prev">
              <ChevronLeft className="w-5 h-5" />
            </button>
            <button onClick={() => scrollTo(current + 1)} className="w-10 h-10 rounded-full border border-gray-200 flex items-center justify-center hover:bg-white transition-colors" data-testid="button-reviews-next">
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>
        </ScrollFadeIn>

        <div ref={scrollRef} className="flex gap-6 overflow-x-auto pb-4 snap-x snap-mandatory scrollbar-hide" style={{ scrollbarWidth: "none" }}>
          {REVIEWS.map((review, i) => (
            <div key={i} className="min-w-[320px] max-w-[360px] bg-white rounded-2xl p-6 border border-gray-100 shadow-sm snap-start flex-shrink-0">
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
                <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-magenta/10 to-pink-100 flex items-center justify-center mx-auto mb-5 group-hover:scale-110 transition-transform">
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
              <div className="aspect-[3/4] max-w-md mx-auto rounded-2xl overflow-hidden">
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
