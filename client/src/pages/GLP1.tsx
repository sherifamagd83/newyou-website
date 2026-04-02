import { useState } from "react";
import { Link } from "wouter";
import { ArrowRight, CheckCircle2, Pill, DollarSign, Stethoscope, TrendingDown, ChevronDown, Star } from "lucide-react";
import ScrollFadeIn from "@/components/ScrollFadeIn";
import LeadForm from "@/components/LeadForm";
import PageHero from "@/components/PageHero";
import { img } from "@/lib/img";

export default function GLP1() {
  return (
    <div>
      <PageHero image="/images/hero/hero-glp1.jpg" badge="No Surgery Required" title="GLP-1 / Semaglutide Program" subtitle="Medically supervised weight loss with Semaglutide — the breakthrough medication helping patients lose 15-20% of body weight without surgery." />

      <GLP1Quiz />

      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid lg:grid-cols-3 gap-12">
            <div className="lg:col-span-2 space-y-12">
              <ScrollFadeIn>
                <h2 className="font-serif text-2xl font-bold text-navy mb-4">How GLP-1 Medications Work</h2>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  GLP-1 receptor agonists like Semaglutide mimic a natural hormone that regulates appetite and blood sugar. They work by slowing gastric emptying, reducing hunger signals in the brain, and improving insulin sensitivity — leading to significant, sustained weight loss.
                </p>
                <div className="rounded-2xl overflow-hidden mb-6">
                  <img src={img("/images/stock/doctor-patient.jpg")} alt="Medical consultation for GLP-1 program" className="w-full h-56 object-cover rounded-2xl" />
                </div>
                <div className="grid sm:grid-cols-3 gap-4 mt-6">
                  {[
                    { icon: Pill, title: "Weekly Injection", desc: "Simple self-administered injection once per week" },
                    { icon: Stethoscope, title: "Medical Monitoring", desc: "Regular check-ins with our medical team" },
                    { icon: TrendingDown, title: "15-20% Weight Loss", desc: "Average body weight reduction in clinical trials" },
                  ].map(({ icon: Icon, title, desc }) => (
                    <div key={title} className="text-center p-4 bg-teal/5 rounded-xl">
                      <Icon className="w-8 h-8 text-teal mx-auto mb-2" />
                      <h3 className="font-semibold text-navy text-sm mb-1">{title}</h3>
                      <p className="text-xs text-muted-foreground">{desc}</p>
                    </div>
                  ))}
                </div>
              </ScrollFadeIn>

              <ScrollFadeIn>
                <h2 className="font-serif text-2xl font-bold text-navy mb-4">What's Included</h2>
                <div className="bg-gradient-to-br from-teal/5 to-navy/5 rounded-2xl p-6 border">
                  <div className="grid sm:grid-cols-2 gap-4">
                    {[
                      "Initial medical consultation with Dr. Lange",
                      "Semaglutide medication (compounded)",
                      "Weekly dosing protocol with gradual escalation",
                      "Monthly medical check-ins",
                      "Nutritional counseling and meal planning",
                      "Body composition monitoring",
                      "Lab work and metabolic panel",
                      "Access to behavioral coaching with Lora Grabow",
                    ].map((item) => (
                      <div key={item} className="flex items-start gap-2">
                        <CheckCircle2 className="w-4 h-4 text-teal mt-0.5 shrink-0" />
                        <span className="text-sm">{item}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </ScrollFadeIn>

              <ScrollFadeIn>
                <h2 className="font-serif text-2xl font-bold text-navy mb-6">Pricing</h2>
                <div className="grid sm:grid-cols-2 gap-6">
                  <div className="bg-white rounded-2xl border-2 border-teal p-6 relative">
                    <span className="absolute -top-3 left-4 bg-teal text-white text-xs font-bold px-3 py-1 rounded-full">MOST POPULAR</span>
                    <h3 className="font-serif text-xl font-bold text-navy mb-1">Standard Program</h3>
                    <div className="flex items-baseline gap-1 mb-4">
                      <span className="text-3xl font-bold text-navy">$249</span>
                      <span className="text-muted-foreground">/month</span>
                    </div>
                    <ul className="space-y-2 text-sm">
                      {["Semaglutide medication", "Monthly medical visits", "Nutritional guidance", "Body composition tracking"].map((f) => (
                        <li key={f} className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-teal" />{f}</li>
                      ))}
                    </ul>
                  </div>
                  <div className="bg-white rounded-2xl border p-6">
                    <h3 className="font-serif text-xl font-bold text-navy mb-1">Premium Program</h3>
                    <div className="flex items-baseline gap-1 mb-4">
                      <span className="text-3xl font-bold text-navy">$349</span>
                      <span className="text-muted-foreground">/month</span>
                    </div>
                    <ul className="space-y-2 text-sm">
                      {["Everything in Standard", "Higher dose Semaglutide", "Behavioral coaching sessions", "Priority scheduling", "Vitamin B12 injections"].map((f) => (
                        <li key={f} className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-navy" />{f}</li>
                      ))}
                    </ul>
                  </div>
                </div>
              </ScrollFadeIn>

              <ScrollFadeIn>
                <h2 className="font-serif text-2xl font-bold text-navy mb-4">GLP-1 vs. Surgery — Who's a Better Candidate?</h2>
                <div className="overflow-x-auto">
                  <table className="w-full text-sm rounded-xl overflow-hidden border">
                    <thead><tr className="bg-navy text-white">
                      <th className="text-left px-4 py-3">Factor</th>
                      <th className="text-center px-4 py-3">GLP-1 Program</th>
                      <th className="text-center px-4 py-3">Bariatric Surgery</th>
                    </tr></thead>
                    <tbody>
                      {[
                        ["Best BMI Range", "27-40", "35+"],
                        ["Weight Loss", "15-20% body weight", "60-80% excess weight"],
                        ["Method", "Weekly injection", "Surgical procedure"],
                        ["Recovery", "None", "2-6 weeks"],
                        ["Duration", "Ongoing medication", "One-time procedure"],
                        ["Insurance", "Varies", "Most plans cover"],
                        ["Diabetes Resolution", "Improvement", "Up to 83% remission"],
                      ].map(([factor, glp1, surgery], i) => (
                        <tr key={factor} className={i % 2 === 0 ? "bg-white" : "bg-gray-50"}>
                          <td className="px-4 py-2.5 font-medium">{factor}</td>
                          <td className="px-4 py-2.5 text-center">{glp1}</td>
                          <td className="px-4 py-2.5 text-center">{surgery}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </ScrollFadeIn>

              <ScrollFadeIn>
                <FAQ />
              </ScrollFadeIn>
            </div>

            <div className="space-y-6">
              <div className="sticky top-24 space-y-6">
                <div className="bg-white rounded-2xl border shadow-sm p-6">
                  <h3 className="font-semibold text-navy mb-4">Program Details</h3>
                  <div className="space-y-3 text-sm">
                    <div className="flex justify-between pb-2 border-b"><span className="text-muted-foreground">Starting Cost</span><span className="font-semibold">$249/mo</span></div>
                    <div className="flex justify-between pb-2 border-b"><span className="text-muted-foreground">Avg. Weight Loss</span><span className="font-semibold text-magenta">15-20%</span></div>
                    <div className="flex justify-between pb-2 border-b"><span className="text-muted-foreground">Surgery Required</span><span className="font-semibold text-green-600">No</span></div>
                    <div className="flex justify-between"><span className="text-muted-foreground">Min. BMI</span><span className="font-semibold">27+</span></div>
                  </div>
                </div>
                <LeadForm variant="sidebar" title="Start Your GLP-1 Journey" />
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

function GLP1Quiz() {
  const [step, setStep] = useState(0);
  const [answers, setAnswers] = useState<Record<number, string>>({});
  const [showResult, setShowResult] = useState(false);

  const questions = [
    { q: "What is your current BMI range?", options: ["Under 27", "27-30", "30-35", "35-40", "Over 40"] },
    { q: "Have you tried other weight loss methods?", options: ["Diet & exercise only", "Previous medications", "Previous surgery", "Multiple methods"] },
    { q: "Do you have any of these conditions?", options: ["Type 2 Diabetes", "High Blood Pressure", "Both", "Neither"] },
    { q: "Are you open to weekly self-injections?", options: ["Yes, comfortable", "Willing to try", "Prefer other options"] },
    { q: "What's your primary weight loss goal?", options: ["Lose 20-40 lbs", "Lose 40-70 lbs", "Lose 70+ lbs", "Improve health conditions"] },
  ];

  const handleAnswer = (answer: string) => {
    setAnswers({ ...answers, [step]: answer });
    if (step < questions.length - 1) {
      setStep(step + 1);
    } else {
      setShowResult(true);
    }
  };

  if (showResult) {
    const isCandidate = answers[0] !== "Under 27";
    return (
      <section className="py-16 bg-teal/5">
        <div className="max-w-2xl mx-auto px-4 text-center">
          <CheckCircle2 className={`w-16 h-16 mx-auto mb-4 ${isCandidate ? "text-green-500" : "text-orange-500"}`} />
          <h2 className="font-serif text-2xl font-bold text-navy mb-4">
            {isCandidate ? "Great News — You May Be a Candidate!" : "Let's Explore Your Options"}
          </h2>
          <p className="text-muted-foreground mb-6">
            {isCandidate
              ? "Based on your responses, you may be a good candidate for our GLP-1 / Semaglutide program. Schedule a consultation to get started."
              : "Based on your responses, a different weight loss approach may be more effective. Let's discuss all your options."}
          </p>
          <Link href="/request-consultation"
            className="inline-flex items-center gap-2 bg-magenta hover:bg-magenta-light text-white font-semibold px-8 py-3.5 rounded-full transition-all shadow-lg"
            data-testid="link-glp1-quiz-result">
            Schedule Free Consultation <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </section>
    );
  }

  return (
    <section className="py-16 bg-teal/5">
      <div className="max-w-2xl mx-auto px-4">
        <ScrollFadeIn>
          <div className="bg-white rounded-2xl border shadow-sm p-8">
            <div className="flex items-center justify-between mb-6">
              <h2 className="font-serif text-xl font-bold text-navy">Is GLP-1 Right For You?</h2>
              <span className="text-sm text-muted-foreground">{step + 1} of {questions.length}</span>
            </div>
            <div className="w-full bg-gray-100 rounded-full h-2 mb-8">
              <div className="bg-teal h-2 rounded-full transition-all duration-300" style={{ width: `${((step + 1) / questions.length) * 100}%` }} />
            </div>
            <h3 className="text-lg font-semibold text-foreground mb-6">{questions[step].q}</h3>
            <div className="space-y-3">
              {questions[step].options.map((option) => (
                <button key={option} onClick={() => handleAnswer(option)}
                  className="w-full text-left p-4 rounded-xl border hover:border-teal hover:bg-teal/5 transition-all text-sm font-medium"
                  data-testid={`button-quiz-${option.toLowerCase().replace(/\s+/g, "-")}`}>
                  {option}
                </button>
              ))}
            </div>
          </div>
        </ScrollFadeIn>
      </div>
    </section>
  );
}

function FAQ() {
  const [open, setOpen] = useState<number | null>(null);
  const faqs = [
    { q: "How quickly will I see results?", a: "Most patients begin noticing weight loss within the first 2-4 weeks. Significant results typically appear within 3-6 months of treatment." },
    { q: "Are there side effects?", a: "Common side effects include nausea, decreased appetite, and digestive changes. These typically diminish within the first few weeks as your body adjusts." },
    { q: "How long do I need to take the medication?", a: "Treatment duration varies by patient. Many patients take GLP-1 medications for 12-24 months. Dr. Lange will create a personalized plan for you." },
    { q: "Is this the same as Ozempic or Wegovy?", a: "Our program uses compounded Semaglutide, which is the same active ingredient found in Ozempic and Wegovy, administered under direct medical supervision." },
    { q: "Can I switch to surgery if needed?", a: "Absolutely. Some patients start with GLP-1 and later transition to surgery for more dramatic results. Dr. Lange can guide this transition." },
  ];

  return (
    <div>
      <h2 className="font-serif text-2xl font-bold text-navy mb-6">Frequently Asked Questions</h2>
      <div className="space-y-3">
        {faqs.map((faq, i) => (
          <div key={i} className="border rounded-xl overflow-hidden">
            <button onClick={() => setOpen(open === i ? null : i)}
              className="w-full flex items-center justify-between p-4 text-left hover:bg-gray-50 transition-colors"
              data-testid={`button-faq-${i}`}>
              <span className="font-medium text-navy pr-4">{faq.q}</span>
              <ChevronDown className={`w-5 h-5 text-muted-foreground shrink-0 transition-transform ${open === i ? "rotate-180" : ""}`} />
            </button>
            {open === i && (
              <div className="px-4 pb-4 text-sm text-muted-foreground leading-relaxed border-t pt-3">
                {faq.a}
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}
