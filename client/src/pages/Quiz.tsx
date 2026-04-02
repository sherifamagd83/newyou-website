import { useState } from "react";
import { Link } from "wouter";
import { ArrowRight, ArrowLeft, CheckCircle2, Scale, Heart, Pill, Activity, User } from "lucide-react";
import PageHero from "@/components/PageHero";
import ScrollFadeIn from "@/components/ScrollFadeIn";
import LeadForm from "@/components/LeadForm";

const QUESTIONS = [
  {
    id: "bmi",
    question: "What is your current BMI range?",
    icon: Scale,
    options: [
      { label: "Under 30", value: "under30", score: 0 },
      { label: "30 – 34.9", value: "30-35", score: 1 },
      { label: "35 – 39.9", value: "35-40", score: 2 },
      { label: "40 or above", value: "40plus", score: 3 },
      { label: "I'm not sure", value: "unsure", score: 1 },
    ],
  },
  {
    id: "conditions",
    question: "Do you have any of these conditions?",
    icon: Heart,
    options: [
      { label: "Type 2 Diabetes", value: "diabetes", score: 2 },
      { label: "High Blood Pressure", value: "hbp", score: 1 },
      { label: "Sleep Apnea", value: "apnea", score: 1 },
      { label: "Joint Pain / Mobility Issues", value: "joints", score: 1 },
      { label: "None of the above", value: "none", score: 0 },
    ],
  },
  {
    id: "previous",
    question: "Have you tried other weight loss methods?",
    icon: Activity,
    options: [
      { label: "Yes, multiple diets and programs", value: "many", score: 2 },
      { label: "Yes, a few attempts", value: "some", score: 1 },
      { label: "Not yet — exploring options", value: "exploring", score: 0 },
      { label: "Previous weight loss surgery", value: "revision", score: 2 },
    ],
  },
  {
    id: "preference",
    question: "What type of solution interests you most?",
    icon: Pill,
    options: [
      { label: "Surgical weight loss", value: "surgical", score: 2 },
      { label: "Non-surgical / GLP-1 medication", value: "nonsurgical", score: 1 },
      { label: "Not sure — help me decide", value: "unsure", score: 1 },
    ],
  },
  {
    id: "timeline",
    question: "When are you looking to get started?",
    icon: User,
    options: [
      { label: "As soon as possible", value: "asap", score: 3 },
      { label: "Within the next 1-3 months", value: "soon", score: 2 },
      { label: "Just researching for now", value: "research", score: 1 },
    ],
  },
];

export default function Quiz() {
  const [step, setStep] = useState(0);
  const [answers, setAnswers] = useState<Record<string, string>>({});
  const [showResults, setShowResults] = useState(false);

  const totalScore = Object.keys(answers).reduce((sum, key) => {
    const q = QUESTIONS.find((q) => q.id === key);
    const opt = q?.options.find((o) => o.value === answers[key]);
    return sum + (opt?.score || 0);
  }, 0);

  const handleSelect = (questionId: string, value: string) => {
    setAnswers({ ...answers, [questionId]: value });
    if (step < QUESTIONS.length - 1) {
      setTimeout(() => setStep(step + 1), 300);
    } else {
      setTimeout(() => setShowResults(true), 300);
    }
  };

  const getResult = () => {
    if (totalScore >= 8) return { title: "Strong Candidate for Surgery", desc: "Based on your answers, you may be an excellent candidate for bariatric surgery. Dr. Lange can help you explore gastric sleeve, bypass, or other surgical options.", color: "text-green-600", bg: "bg-green-50", borderColor: "border-green-200", cta: "Schedule Free Consultation", href: "/book" };
    if (totalScore >= 5) return { title: "Good Candidate — Multiple Options", desc: "You may qualify for both surgical and non-surgical weight loss programs. A consultation with Dr. Lange will help determine the best path for your goals.", color: "text-teal", bg: "bg-teal/5", borderColor: "border-teal/20", cta: "Explore Your Options", href: "/book" };
    return { title: "Non-Surgical Options Available", desc: "Based on your answers, our GLP-1/Semaglutide program or medically supervised weight loss may be the best fit. These are effective, proven programs.", color: "text-blue-600", bg: "bg-blue-50", borderColor: "border-blue-200", cta: "Learn About GLP-1 Program", href: "/glp1" };
  };

  const currentQ = QUESTIONS[step];
  const progress = showResults ? 100 : ((step) / QUESTIONS.length) * 100;

  return (
    <div>
      <PageHero
        image="/images/hero/hero-surgery.jpg"
        badge="Free Assessment"
        title="Am I a Candidate?"
        subtitle="Take our 2-minute quiz to find out which weight loss option is right for you."
      />

      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-2xl mx-auto px-4">
          {/* Progress bar */}
          <div className="mb-10">
            <div className="flex justify-between text-sm text-muted-foreground mb-2">
              <span>Question {Math.min(step + 1, QUESTIONS.length)} of {QUESTIONS.length}</span>
              <span>{Math.round(progress)}% complete</span>
            </div>
            <div className="h-2 rounded-full bg-gray-100 overflow-hidden">
              <div className="h-full rounded-full bg-gradient-to-r from-magenta to-teal transition-all duration-500" style={{ width: `${progress}%` }} />
            </div>
          </div>

          {!showResults ? (
            <ScrollFadeIn key={step}>
              <div className="text-center mb-8">
                <div className="w-16 h-16 rounded-2xl bg-navy flex items-center justify-center mx-auto mb-4">
                  <currentQ.icon className="w-7 h-7 text-white" />
                </div>
                <h2 className="font-serif text-2xl md:text-3xl font-bold text-navy">{currentQ.question}</h2>
              </div>

              <div className="space-y-3">
                {currentQ.options.map((opt) => (
                  <button
                    key={opt.value}
                    onClick={() => handleSelect(currentQ.id, opt.value)}
                    className={`w-full text-left px-6 py-4 rounded-2xl border-2 transition-all duration-200 font-medium ${
                      answers[currentQ.id] === opt.value
                        ? "border-magenta bg-magenta/5 text-magenta"
                        : "border-gray-200 hover:border-magenta/30 hover:bg-gray-50 text-foreground"
                    }`}
                    data-testid={`quiz-option-${opt.value}`}
                  >
                    {opt.label}
                  </button>
                ))}
              </div>

              {step > 0 && (
                <button
                  onClick={() => setStep(step - 1)}
                  className="mt-6 inline-flex items-center gap-2 text-muted-foreground hover:text-navy transition-colors text-sm"
                  data-testid="quiz-back"
                >
                  <ArrowLeft className="w-4 h-4" /> Back
                </button>
              )}
            </ScrollFadeIn>
          ) : (
            <ScrollFadeIn>
              {(() => {
                const result = getResult();
                return (
                  <div className={`${result.bg} ${result.borderColor} border-2 rounded-3xl p-8 md:p-10 text-center`}>
                    <CheckCircle2 className={`w-16 h-16 mx-auto mb-4 ${result.color}`} />
                    <h2 className={`font-serif text-2xl md:text-3xl font-bold mb-3 ${result.color}`}>{result.title}</h2>
                    <p className="text-muted-foreground leading-relaxed mb-8 max-w-md mx-auto">{result.desc}</p>
                    <Link
                      href={result.href}
                      className="inline-flex items-center gap-2 bg-magenta hover:bg-magenta-light text-white font-bold px-8 py-4 rounded-full transition-all shadow-lg text-base"
                      data-testid="quiz-result-cta"
                    >
                      {result.cta} <ArrowRight className="w-5 h-5" />
                    </Link>
                    <p className="text-xs text-muted-foreground mt-6">This quiz is for informational purposes only. A medical evaluation is required to determine candidacy.</p>
                  </div>
                );
              })()}
            </ScrollFadeIn>
          )}
        </div>
      </section>

      {showResults && (
        <section className="py-16 bg-gray-50">
          <div className="max-w-xl mx-auto px-4">
            <ScrollFadeIn>
              <div className="text-center mb-8">
                <h3 className="font-serif text-xl font-bold text-navy mb-2">Prefer to Talk to Someone?</h3>
                <p className="text-muted-foreground text-sm">Fill out the form below and our team will reach out within 24 hours.</p>
              </div>
              <LeadForm variant="full" />
            </ScrollFadeIn>
          </div>
        </section>
      )}
    </div>
  );
}
