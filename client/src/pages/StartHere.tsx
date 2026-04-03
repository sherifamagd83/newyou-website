import { useState } from "react";
import { Link } from "wouter";
import { Calculator, CheckCircle2, ArrowRight, Clock, TrendingDown } from "lucide-react";
import ScrollFadeIn from "@/components/ScrollFadeIn";
import PageHero from "@/components/PageHero";

export default function StartHere() {
  return (
    <div>
      <PageHero image="/images/hero/hero-surgery.jpg" badge="Begin Your Journey" title="Start Here" subtitle="Everything you need to know about starting your weight loss journey with Dr. Lange." />
      <BMICalculator />
      <QualifyChecklist />
      <HealthAssessmentForm />
      <WhatToExpect />
    </div>
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
    if (bmi < 18.5) return { label: "Underweight", color: "text-blue-500", bg: "bg-blue-50", barColor: "bg-blue-400", pct: 15 };
    if (bmi < 25) return { label: "Normal", color: "text-green-600", bg: "bg-green-50", barColor: "bg-green-500", pct: 35 };
    if (bmi < 30) return { label: "Overweight", color: "text-yellow-600", bg: "bg-yellow-50", barColor: "bg-yellow-500", pct: 55 };
    if (bmi < 35) return { label: "Obese (Class I)", color: "text-orange-500", bg: "bg-orange-50", barColor: "bg-orange-500", pct: 70 };
    if (bmi < 40) return { label: "Obese (Class II)", color: "text-red-500", bg: "bg-red-50", barColor: "bg-red-500", pct: 85 };
    return { label: "Obese (Class III)", color: "text-red-700", bg: "bg-red-100", barColor: "bg-red-600", pct: 95 };
  };

  const getQualification = (bmi: number) => {
    if (bmi >= 40) return { qualifies: true, text: "You likely qualify for bariatric surgery. BMI ≥ 40 meets standard surgical criteria." };
    if (bmi >= 35) return { qualifies: true, text: "With qualifying comorbidities (diabetes, hypertension, sleep apnea), you may qualify for bariatric surgery." };
    if (bmi >= 30) return { qualifies: true, text: "You may be a candidate for our GLP-1/Semaglutide program, ORBERA® balloon, or medically supervised weight loss." };
    return { qualifies: false, text: "Based on your BMI, surgical weight loss is typically not indicated. Our non-surgical programs may be an option." };
  };

  return (
    <section className="py-20 bg-white">
      <div className="max-w-5xl mx-auto px-4">
        <ScrollFadeIn className="text-center mb-12">
          <div className="inline-flex items-center gap-2 bg-magenta/10 text-magenta font-semibold text-sm px-4 py-1.5 rounded-full mb-4">
            <Calculator className="w-4 h-4" />
            Step 1
          </div>
          <h2 className="font-serif text-3xl font-bold text-navy mt-2 mb-4">Calculate Your BMI</h2>
          <p className="text-muted-foreground">Body Mass Index (BMI) is the first step in determining if you qualify for weight loss surgery.</p>
        </ScrollFadeIn>

        <ScrollFadeIn>
          <div className="bg-white rounded-3xl border border-gray-100 shadow-lg p-8 md:p-10">
            <div className="grid sm:grid-cols-4 gap-5 mb-6">
              <div>
                <label className="block text-sm font-medium text-navy mb-2">Height (feet)</label>
                <input type="number" min="3" max="8" placeholder="5" value={height.feet} onChange={(e) => setHeight({ ...height, feet: e.target.value })}
                  className="w-full px-4 py-3.5 rounded-xl border border-gray-200 bg-gray-50/50 outline-none focus:ring-2 focus:ring-magenta/20 focus:border-magenta transition-all text-center text-lg font-semibold" data-testid="input-bmi-feet" />
              </div>
              <div>
                <label className="block text-sm font-medium text-navy mb-2">Height (inches)</label>
                <input type="number" min="0" max="11" placeholder="6" value={height.inches} onChange={(e) => setHeight({ ...height, inches: e.target.value })}
                  className="w-full px-4 py-3.5 rounded-xl border border-gray-200 bg-gray-50/50 outline-none focus:ring-2 focus:ring-magenta/20 focus:border-magenta transition-all text-center text-lg font-semibold" data-testid="input-bmi-inches" />
              </div>
              <div>
                <label className="block text-sm font-medium text-navy mb-2">Weight (lbs)</label>
                <input type="number" min="50" max="800" placeholder="220" value={weight} onChange={(e) => setWeight(e.target.value)}
                  className="w-full px-4 py-3.5 rounded-xl border border-gray-200 bg-gray-50/50 outline-none focus:ring-2 focus:ring-magenta/20 focus:border-magenta transition-all text-center text-lg font-semibold" data-testid="input-bmi-weight" />
              </div>
              <div className="flex items-end">
                <button onClick={calculateBMI}
                  className="w-full bg-magenta hover:bg-magenta-light text-white font-semibold py-3.5 rounded-xl transition-all flex items-center justify-center gap-2 shadow-md"
                  data-testid="button-calculate-bmi">
                  <TrendingDown className="w-5 h-5" /> Calculate
                </button>
              </div>
            </div>

            {bmi !== null && (() => {
              const cat = getCategory(bmi);
              const qual = getQualification(bmi);
              return (
                <div className="animate-bmi-reveal mt-8 pt-8 border-t border-gray-100">
                  <div className="grid md:grid-cols-2 gap-8 items-center">
                    <div className="text-center md:text-left">
                      <div className="inline-block">
                        <div className="text-6xl font-serif font-bold text-navy mb-1">{bmi}</div>
                        <div className={`text-lg font-semibold ${cat.color}`}>{cat.label}</div>
                      </div>
                      <div className="mt-5 w-full max-w-sm mx-auto md:mx-0">
                        <div className="h-3 rounded-full bg-gray-100 overflow-hidden relative">
                          <div className={`h-full rounded-full ${cat.barColor} animate-fill`} style={{ width: `${cat.pct}%` }} />
                        </div>
                        <div className="flex justify-between text-[10px] text-muted-foreground mt-1.5 px-0.5">
                          <span>18.5</span><span>25</span><span>30</span><span>35</span><span>40+</span>
                        </div>
                      </div>
                    </div>
                    <div>
                      <div className={`rounded-xl p-5 ${qual.qualifies ? "bg-green-50 border border-green-100" : "bg-gray-50 border border-gray-100"}`}>
                        <p className="text-foreground text-sm leading-relaxed mb-4">{qual.text}</p>
                        <Link href="/request-consultation"
                          className="inline-flex items-center gap-2 bg-magenta hover:bg-magenta-light text-white font-semibold px-6 py-3 rounded-full transition-all text-sm shadow-md"
                          data-testid="link-bmi-consultation">
                          Schedule Free Assessment <ArrowRight className="w-4 h-4" />
                        </Link>
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
            <p className="text-xs text-center text-muted-foreground">By submitting, you consent to receive texts from New You Surgical Weight Loss. Msg & data rates apply. Reply STOP to opt out. HIPAA compliant.</p>
          </form>
        </ScrollFadeIn>
      </div>
    </section>
  );
}

function WhatToExpect() {
  const steps = [
    { number: 1, title: "Health & History Intake", desc: "We begin by learning about your goals, medical history, and lifestyle to make sure you're a good fit for the program." },
    { number: 2, title: "In-Person Consultation with Dr. Lange", desc: "You'll meet face-to-face with Dr. Lange to ask questions, discuss your options, and map out your personalized plan." },
    { number: 3, title: "Insurance Check & Eligibility Review", desc: "We'll verify your insurance coverage and guide you through the requirements to qualify — or help with self-pay options if needed." },
    { number: 4, title: "Medical Assessments & Insurance Submission", desc: "You'll complete any necessary lab work, clearances, and evaluations, then we submit documentation to your insurance." },
    { number: 5, title: "Pre-Op Appointment", desc: "We'll walk you through what to expect, answer any last-minute questions, and make sure you're fully prepared." },
    { number: 6, title: "Surgery Day & Lifelong Support", desc: "Your journey doesn't end at surgery. We're with you every step through recovery, follow-ups, and long-term support." },
  ];

  return (
    <section className="section-gradient py-20">
      <div className="max-w-4xl mx-auto px-4">
        <ScrollFadeIn className="text-center mb-12">
          <h2 className="font-serif text-3xl font-bold text-navy mb-4">What to Expect: Your 6-Step Process</h2>
          <p className="text-muted-foreground">Here's exactly what the pre-surgical preparation process looks like, from your first contact to surgery day.</p>
        </ScrollFadeIn>
        <div className="relative">
          <div className="absolute left-6 top-0 bottom-0 w-0.5 bg-gradient-to-b from-teal via-teal to-teal hidden sm:block" />
          <div className="space-y-8">
            {steps.map((step, i) => (
              <ScrollFadeIn key={step.title} delay={i * 100}>
                <div className="flex gap-6 items-start">
                  <div className="w-12 h-12 rounded-full bg-teal flex items-center justify-center shrink-0 relative z-10 shadow-md">
                    <span className="text-white font-bold text-lg">{step.number}</span>
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
        <ScrollFadeIn className="mt-12">
          <div className="bg-teal rounded-2xl p-8 text-white text-center">
            <p className="text-xl font-serif font-bold mb-1">This can be a long process — don't get frustrated!</p>
            <p className="text-2xl font-serif font-bold tracking-wide">YOU ARE WORTH IT!</p>
          </div>
        </ScrollFadeIn>
      </div>
    </section>
  );
}
