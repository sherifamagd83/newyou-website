import { useState } from "react";
import { Link } from "wouter";
import { Calculator, CheckCircle2, ArrowRight, Clock, Stethoscope, FileCheck, HeartPulse, Scale, CalendarCheck } from "lucide-react";
import ScrollFadeIn from "@/components/ScrollFadeIn";

export default function StartHere() {
  return (
    <div>
      <PageHero />
      <BMICalculator />
      <QualifyChecklist />
      <HealthAssessmentForm />
      <WhatToExpect />
    </div>
  );
}

function PageHero() {
  return (
    <section className="hero-gradient py-16 md:py-24 text-center relative overflow-hidden">
      <div className="absolute inset-0">
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-magenta/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/4" />
      </div>
      <div className="max-w-3xl mx-auto px-4 relative">
        <h1 className="font-serif text-4xl md:text-5xl font-bold text-white mb-4">Am I a Candidate?</h1>
        <p className="text-white/80 text-lg md:text-xl max-w-2xl mx-auto">
          Find out if you qualify for weight loss surgery or our non-surgical programs. Use our BMI calculator and complete a free health assessment.
        </p>
      </div>
    </section>
  );
}

function BMICalculator() {
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
    if (bmi < 18.5) return { label: "Underweight", color: "text-blue-500", bg: "bg-blue-50" };
    if (bmi < 25) return { label: "Normal", color: "text-green-500", bg: "bg-green-50" };
    if (bmi < 30) return { label: "Overweight", color: "text-yellow-600", bg: "bg-yellow-50" };
    if (bmi < 35) return { label: "Obese (Class I)", color: "text-orange-500", bg: "bg-orange-50" };
    if (bmi < 40) return { label: "Obese (Class II)", color: "text-red-500", bg: "bg-red-50" };
    return { label: "Obese (Class III)", color: "text-red-700", bg: "bg-red-50" };
  };

  const getRecommendation = (bmi: number) => {
    if (bmi >= 40) return "You may qualify for bariatric surgery. BMI ≥ 40 meets standard surgical criteria.";
    if (bmi >= 35) return "With qualifying comorbidities (diabetes, hypertension, sleep apnea), you may qualify for bariatric surgery.";
    if (bmi >= 30) return "You may be a candidate for our GLP-1/Semaglutide program, ORBERA® balloon, or medically supervised weight loss.";
    return "Based on your BMI, you may not qualify for surgical weight loss. Our non-surgical programs may be an option.";
  };

  return (
    <section className="py-20 bg-white">
      <div className="max-w-4xl mx-auto px-4">
        <ScrollFadeIn className="text-center mb-12">
          <span className="text-magenta font-semibold text-sm tracking-wider uppercase">Step 1</span>
          <h2 className="font-serif text-3xl font-bold text-navy mt-2 mb-4">Calculate Your BMI</h2>
          <p className="text-muted-foreground">Body Mass Index (BMI) is the first step in determining if you qualify for weight loss surgery.</p>
        </ScrollFadeIn>

        <ScrollFadeIn>
          <div className="bg-white rounded-2xl border shadow-sm p-8">
            <div className="grid sm:grid-cols-3 gap-6 mb-6">
              <div>
                <label className="block text-sm font-medium mb-2">Height (feet)</label>
                <input type="number" min="3" max="8" placeholder="5" value={height.feet} onChange={(e) => setHeight({ ...height, feet: e.target.value })}
                  className="w-full px-4 py-3 rounded-xl border bg-gray-50 outline-none focus:ring-2 focus:ring-magenta/20 focus:border-magenta transition-all" data-testid="input-bmi-feet" />
              </div>
              <div>
                <label className="block text-sm font-medium mb-2">Height (inches)</label>
                <input type="number" min="0" max="11" placeholder="6" value={height.inches} onChange={(e) => setHeight({ ...height, inches: e.target.value })}
                  className="w-full px-4 py-3 rounded-xl border bg-gray-50 outline-none focus:ring-2 focus:ring-magenta/20 focus:border-magenta transition-all" data-testid="input-bmi-inches" />
              </div>
              <div>
                <label className="block text-sm font-medium mb-2">Weight (lbs)</label>
                <input type="number" min="50" max="800" placeholder="220" value={weight} onChange={(e) => setWeight(e.target.value)}
                  className="w-full px-4 py-3 rounded-xl border bg-gray-50 outline-none focus:ring-2 focus:ring-magenta/20 focus:border-magenta transition-all" data-testid="input-bmi-weight" />
              </div>
            </div>
            <button onClick={calculateBMI}
              className="w-full bg-magenta hover:bg-magenta-light text-white font-semibold py-3.5 rounded-xl transition-all flex items-center justify-center gap-2"
              data-testid="button-calculate-bmi">
              <Calculator className="w-5 h-5" /> Calculate My BMI
            </button>

            {bmi !== null && (
              <div className="mt-8 text-center animate-fade-in-up">
                <div className={`inline-block px-8 py-6 rounded-2xl ${getCategory(bmi).bg}`}>
                  <div className="text-5xl font-serif font-bold text-navy mb-1">{bmi}</div>
                  <div className={`font-semibold ${getCategory(bmi).color}`}>{getCategory(bmi).label}</div>
                </div>
                <p className="mt-4 text-foreground max-w-lg mx-auto">{getRecommendation(bmi)}</p>
                <Link href="/request-consultation"
                  className="inline-flex items-center gap-2 mt-6 bg-magenta hover:bg-magenta-light text-white font-semibold px-8 py-3 rounded-full transition-all"
                  data-testid="link-bmi-consultation">
                  Get a Free Consultation <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            )}
          </div>
        </ScrollFadeIn>
      </div>
    </section>
  );
}

function QualifyChecklist() {
  const criteria = [
    { text: "BMI of 40 or higher (approximately 100+ lbs overweight)", qualifies: true },
    { text: "BMI of 35-39.9 with obesity-related health conditions", qualifies: true },
    { text: "BMI of 30-34.9 with severe metabolic conditions (select procedures)", qualifies: true },
    { text: "Have tried diet and exercise without lasting success", qualifies: true },
    { text: "Are committed to long-term lifestyle changes", qualifies: true },
    { text: "Are willing to attend follow-up appointments", qualifies: true },
  ];

  return (
    <section className="section-gradient py-20">
      <div className="max-w-4xl mx-auto px-4">
        <ScrollFadeIn className="text-center mb-12">
          <span className="text-magenta font-semibold text-sm tracking-wider uppercase">Step 2</span>
          <h2 className="font-serif text-3xl font-bold text-navy mt-2 mb-4">Do You Qualify?</h2>
          <p className="text-muted-foreground">Most patients who meet one or more of these criteria are candidates for weight loss surgery.</p>
        </ScrollFadeIn>
        <ScrollFadeIn>
          <div className="bg-white rounded-2xl border shadow-sm p-8 space-y-4">
            {criteria.map((item, i) => (
              <div key={i} className="flex items-start gap-3 p-3 rounded-xl hover:bg-gray-50 transition-colors">
                <CheckCircle2 className="w-5 h-5 text-green-500 mt-0.5 shrink-0" />
                <span className="text-foreground">{item.text}</span>
              </div>
            ))}
            <p className="text-sm text-muted-foreground pt-4 border-t mt-4">
              Don't meet surgical criteria? Our GLP-1 program and ORBERA® balloon are available for patients with BMI 27-40.
            </p>
          </div>
        </ScrollFadeIn>
      </div>
    </section>
  );
}

function HealthAssessmentForm() {
  const [submitted, setSubmitted] = useState(false);

  if (submitted) {
    return (
      <section className="py-20 bg-white">
        <div className="max-w-2xl mx-auto px-4 text-center">
          <CheckCircle2 className="w-20 h-20 text-green-500 mx-auto mb-6" />
          <h2 className="font-serif text-3xl font-bold text-navy mb-4">Assessment Submitted!</h2>
          <p className="text-muted-foreground text-lg">Our team will review your health assessment and contact you within 24 hours to discuss your options and next steps.</p>
        </div>
      </section>
    );
  }

  return (
    <section className="py-20 bg-white">
      <div className="max-w-3xl mx-auto px-4">
        <ScrollFadeIn className="text-center mb-12">
          <span className="text-magenta font-semibold text-sm tracking-wider uppercase">Step 3</span>
          <h2 className="font-serif text-3xl font-bold text-navy mt-2 mb-4">Free Health Assessment</h2>
          <p className="text-muted-foreground">Complete this confidential assessment and our team will evaluate your candidacy at no cost.</p>
        </ScrollFadeIn>
        <ScrollFadeIn>
          <form onSubmit={(e) => { e.preventDefault(); setSubmitted(true); }} className="bg-white rounded-2xl border shadow-sm p-8 space-y-6" data-testid="form-health-assessment">
            <div className="grid sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium mb-2">Full Name *</label>
                <input type="text" required className="w-full px-4 py-3 rounded-xl border bg-gray-50 outline-none focus:ring-2 focus:ring-magenta/20 focus:border-magenta" data-testid="input-assessment-name" />
              </div>
              <div>
                <label className="block text-sm font-medium mb-2">Email *</label>
                <input type="email" required className="w-full px-4 py-3 rounded-xl border bg-gray-50 outline-none focus:ring-2 focus:ring-magenta/20 focus:border-magenta" data-testid="input-assessment-email" />
              </div>
              <div>
                <label className="block text-sm font-medium mb-2">Phone *</label>
                <input type="tel" required className="w-full px-4 py-3 rounded-xl border bg-gray-50 outline-none focus:ring-2 focus:ring-magenta/20 focus:border-magenta" data-testid="input-assessment-phone" />
              </div>
              <div>
                <label className="block text-sm font-medium mb-2">Insurance Provider</label>
                <input type="text" placeholder="e.g., Blue Cross, Aetna" className="w-full px-4 py-3 rounded-xl border bg-gray-50 outline-none focus:ring-2 focus:ring-magenta/20 focus:border-magenta" data-testid="input-assessment-insurance" />
              </div>
              <div>
                <label className="block text-sm font-medium mb-2">Current Weight (lbs)</label>
                <input type="number" className="w-full px-4 py-3 rounded-xl border bg-gray-50 outline-none focus:ring-2 focus:ring-magenta/20 focus:border-magenta" data-testid="input-assessment-weight" />
              </div>
              <div>
                <label className="block text-sm font-medium mb-2">Height</label>
                <input type="text" placeholder="e.g., 5'6&quot;" className="w-full px-4 py-3 rounded-xl border bg-gray-50 outline-none focus:ring-2 focus:ring-magenta/20 focus:border-magenta" data-testid="input-assessment-height" />
              </div>
            </div>
            <div>
              <label className="block text-sm font-medium mb-3">Health Conditions (check all that apply)</label>
              <div className="grid sm:grid-cols-2 gap-2">
                {["Type 2 Diabetes", "High Blood Pressure", "Sleep Apnea", "High Cholesterol", "Joint Pain/Arthritis", "GERD/Acid Reflux", "PCOS", "Depression/Anxiety"].map((condition) => (
                  <label key={condition} className="flex items-center gap-2 p-2 rounded-lg hover:bg-gray-50 cursor-pointer">
                    <input type="checkbox" className="w-4 h-4 rounded border-gray-300 text-magenta focus:ring-magenta" />
                    <span className="text-sm">{condition}</span>
                  </label>
                ))}
              </div>
            </div>
            <button type="submit"
              className="w-full bg-magenta hover:bg-magenta-light text-white font-semibold py-4 rounded-xl transition-all flex items-center justify-center gap-2 text-lg"
              data-testid="button-submit-assessment">
              Submit Your Assessment <ArrowRight className="w-5 h-5" />
            </button>
            <p className="text-xs text-center text-muted-foreground">100% confidential. HIPAA compliant. No obligation.</p>
          </form>
        </ScrollFadeIn>
      </div>
    </section>
  );
}

function WhatToExpect() {
  const timeline = [
    { icon: CalendarCheck, title: "Initial Consultation", desc: "Meet with Dr. Lange for a comprehensive evaluation. We'll discuss your goals and determine the best approach." },
    { icon: FileCheck, title: "Insurance Verification", desc: "Our team handles all insurance pre-authorization. Most patients are approved within 2-4 weeks." },
    { icon: Stethoscope, title: "Pre-Op Preparation", desc: "Complete required evaluations: nutritional counseling, psychological assessment, and pre-op testing." },
    { icon: HeartPulse, title: "Surgery Day", desc: "Minimally invasive, laparoscopic procedures. Most patients go home the same day or next morning." },
    { icon: Scale, title: "Recovery & Follow-Up", desc: "Structured recovery plan with regular check-ins. Return to most activities within 2-4 weeks." },
    { icon: CheckCircle2, title: "Lifelong Support", desc: "Monthly support groups, behavioral coaching, nutritional guidance, and annual check-ups for life." },
  ];

  return (
    <section className="section-gradient py-20">
      <div className="max-w-4xl mx-auto px-4">
        <ScrollFadeIn className="text-center mb-12">
          <h2 className="font-serif text-3xl font-bold text-navy mb-4">What to Expect</h2>
          <p className="text-muted-foreground">Your complete weight loss surgery timeline from first consultation to your new life.</p>
        </ScrollFadeIn>
        <div className="relative">
          <div className="absolute left-6 top-0 bottom-0 w-0.5 bg-gradient-to-b from-magenta via-teal to-gold hidden sm:block" />
          <div className="space-y-8">
            {timeline.map((step, i) => (
              <ScrollFadeIn key={step.title} delay={i * 100}>
                <div className="flex gap-6 items-start">
                  <div className="w-12 h-12 rounded-full bg-white border-2 border-magenta flex items-center justify-center shrink-0 relative z-10">
                    <step.icon className="w-5 h-5 text-magenta" />
                  </div>
                  <div className="bg-white rounded-xl p-5 border shadow-sm flex-1">
                    <h3 className="font-semibold text-navy mb-1">{step.title}</h3>
                    <p className="text-sm text-muted-foreground">{step.desc}</p>
                  </div>
                </div>
              </ScrollFadeIn>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
