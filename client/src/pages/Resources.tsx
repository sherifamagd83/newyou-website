import { useState } from "react";
import { Link } from "wouter";
import { ArrowRight, Calculator, ChevronDown, BookOpen, Play, Download, Lock, CheckCircle2 } from "lucide-react";
import ScrollFadeIn from "@/components/ScrollFadeIn";

export default function Resources() {
  return (
    <div>
      <section className="hero-gradient py-16 md:py-24 text-center relative overflow-hidden">
        <div className="max-w-3xl mx-auto px-4 relative">
          <h1 className="font-serif text-4xl md:text-5xl font-bold text-white mb-4">Education Hub</h1>
          <p className="text-white/80 text-lg">Knowledge is power. Learn everything about weight loss surgery, nutrition, and long-term success.</p>
        </div>
      </section>

      <InlineBMI />
      <FAQSection />
      <BlogSection />
      <CookbookGate />
      <VideoLibrary />
    </div>
  );
}

function InlineBMI() {
  const [feet, setFeet] = useState("");
  const [inches, setInches] = useState("");
  const [weight, setWeight] = useState("");
  const [bmi, setBmi] = useState<number | null>(null);

  const calc = () => {
    const h = parseInt(feet) * 12 + parseInt(inches || "0");
    const w = parseFloat(weight);
    if (h > 0 && w > 0) setBmi(Math.round((w / (h * h)) * 703 * 10) / 10);
  };

  return (
    <section className="py-16 bg-white">
      <div className="max-w-3xl mx-auto px-4">
        <ScrollFadeIn>
          <div className="bg-gradient-to-br from-navy/5 to-magenta/5 rounded-2xl p-6 border">
            <div className="flex items-center gap-3 mb-4">
              <Calculator className="w-6 h-6 text-magenta" />
              <h2 className="font-serif text-xl font-bold text-navy">Quick BMI Calculator</h2>
            </div>
            <div className="flex flex-wrap gap-3 items-end">
              <div>
                <label className="text-xs font-medium block mb-1">Feet</label>
                <input type="number" value={feet} onChange={e => setFeet(e.target.value)} placeholder="5"
                  className="w-20 px-3 py-2 rounded-lg border text-sm outline-none focus:ring-2 focus:ring-magenta/20" data-testid="input-res-bmi-feet" />
              </div>
              <div>
                <label className="text-xs font-medium block mb-1">Inches</label>
                <input type="number" value={inches} onChange={e => setInches(e.target.value)} placeholder="6"
                  className="w-20 px-3 py-2 rounded-lg border text-sm outline-none focus:ring-2 focus:ring-magenta/20" data-testid="input-res-bmi-inches" />
              </div>
              <div>
                <label className="text-xs font-medium block mb-1">Weight (lbs)</label>
                <input type="number" value={weight} onChange={e => setWeight(e.target.value)} placeholder="220"
                  className="w-24 px-3 py-2 rounded-lg border text-sm outline-none focus:ring-2 focus:ring-magenta/20" data-testid="input-res-bmi-weight" />
              </div>
              <button onClick={calc} className="bg-magenta text-white px-4 py-2 rounded-lg text-sm font-medium hover:bg-magenta-light transition-colors" data-testid="button-res-calc-bmi">
                Calculate
              </button>
              {bmi && <span className="text-lg font-bold text-navy">BMI: {bmi}</span>}
            </div>
          </div>
        </ScrollFadeIn>
      </div>
    </section>
  );
}

function FAQSection() {
  const [openSection, setOpenSection] = useState<string | null>("preparation");
  const [openQ, setOpenQ] = useState<string | null>(null);

  const sections: Record<string, { q: string; a: string }[]> = {
    "Preparation": [
      { q: "How do I know if I qualify for surgery?", a: "Generally, patients with a BMI of 40+ or BMI 35+ with obesity-related conditions qualify. Schedule a free consultation for a personalized evaluation." },
      { q: "What tests are required before surgery?", a: "Pre-op testing typically includes blood work, EKG, chest X-ray, psychological evaluation, nutritional counseling, and sometimes a sleep study." },
      { q: "How long does the approval process take?", a: "Insurance approval typically takes 2-6 weeks. Our team handles all pre-authorization paperwork for you." },
    ],
    "Insurance": [
      { q: "Does insurance cover weight loss surgery?", a: "Most major insurance plans cover bariatric surgery when medical criteria are met. We offer free insurance verification." },
      { q: "What if my insurance doesn't cover it?", a: "We offer competitive self-pay pricing and CareCredit financing with plans as low as $300/month." },
    ],
    "Recovery": [
      { q: "How long is the hospital stay?", a: "Most patients go home the same day or next morning for sleeve/bypass. Revision surgeries may require 1-3 nights." },
      { q: "When can I return to work?", a: "Most patients return to desk work in 1-2 weeks and physical jobs in 3-4 weeks." },
      { q: "Will I have visible scars?", a: "Laparoscopic surgery uses 4-5 tiny incisions (5-12mm each). Scars are minimal and fade over time." },
    ],
    "Nutrition": [
      { q: "What can I eat after surgery?", a: "You'll progress through stages: clear liquids (week 1), full liquids (week 2), pureed foods (week 3-4), then gradually to regular foods." },
      { q: "Will I need to take vitamins for life?", a: "Yes. Lifelong multivitamins, calcium, B12, and iron supplementation is required to prevent nutritional deficiencies." },
    ],
    "Long-term": [
      { q: "Can the weight come back?", a: "Significant weight regain is possible without lifestyle changes. Our support groups, behavioral coaching, and follow-up program help prevent this." },
      { q: "Will I have loose skin?", a: "Some patients experience loose skin after significant weight loss. We offer skin tightening, red light therapy, and body contouring services." },
    ],
  };

  return (
    <section className="section-gradient py-20">
      <div className="max-w-4xl mx-auto px-4">
        <ScrollFadeIn className="text-center mb-12">
          <h2 className="font-serif text-3xl font-bold text-navy mb-4">Frequently Asked Questions</h2>
        </ScrollFadeIn>
        <ScrollFadeIn>
          <div className="flex flex-wrap gap-2 mb-8 justify-center">
            {Object.keys(sections).map((section) => (
              <button key={section} onClick={() => { setOpenSection(section); setOpenQ(null); }}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${openSection === section ? "bg-navy text-white" : "bg-white text-navy border hover:bg-gray-50"}`}
                data-testid={`button-faq-section-${section.toLowerCase()}`}>
                {section}
              </button>
            ))}
          </div>
          <div className="space-y-3">
            {openSection && sections[openSection]?.map((faq, i) => (
              <div key={i} className="bg-white border rounded-xl overflow-hidden">
                <button onClick={() => setOpenQ(openQ === `${openSection}-${i}` ? null : `${openSection}-${i}`)}
                  className="w-full flex items-center justify-between p-4 text-left hover:bg-gray-50 transition-colors">
                  <span className="font-medium text-navy pr-4">{faq.q}</span>
                  <ChevronDown className={`w-5 h-5 text-muted-foreground shrink-0 transition-transform ${openQ === `${openSection}-${i}` ? "rotate-180" : ""}`} />
                </button>
                {openQ === `${openSection}-${i}` && (
                  <div className="px-4 pb-4 text-sm text-muted-foreground leading-relaxed border-t pt-3">{faq.a}</div>
                )}
              </div>
            ))}
          </div>
        </ScrollFadeIn>
      </div>
    </section>
  );
}

function BlogSection() {
  const articles = [
    { title: "5 Things to Know Before Gastric Sleeve Surgery", category: "Preparation", readTime: "5 min" },
    { title: "GLP-1 Medications: A Complete Guide for 2026", category: "Non-Surgical", readTime: "8 min" },
    { title: "Life After Bariatric Surgery: What to Expect Year 1", category: "Recovery", readTime: "7 min" },
    { title: "How to Maximize Weight Loss After Surgery", category: "Nutrition", readTime: "6 min" },
    { title: "Revision Surgery: Signs It May Be Time", category: "Procedures", readTime: "5 min" },
    { title: "The Role of Behavioral Health in Weight Loss", category: "Mental Health", readTime: "4 min" },
  ];

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4">
        <ScrollFadeIn className="text-center mb-12">
          <h2 className="font-serif text-3xl font-bold text-navy mb-4">Educational Articles</h2>
        </ScrollFadeIn>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {articles.map((article, i) => (
            <ScrollFadeIn key={article.title} delay={i * 80}>
              <div className="bg-white rounded-2xl border shadow-sm overflow-hidden card-hover group cursor-pointer">
                <div className="h-40 bg-gradient-to-br from-navy/5 to-magenta/5 flex items-center justify-center">
                  <BookOpen className="w-10 h-10 text-navy/20" />
                </div>
                <div className="p-5">
                  <div className="flex items-center gap-2 mb-2">
                    <span className="text-xs bg-magenta/10 text-magenta px-2 py-0.5 rounded-full font-medium">{article.category}</span>
                    <span className="text-xs text-muted-foreground">{article.readTime} read</span>
                  </div>
                  <h3 className="font-semibold text-navy group-hover:text-magenta transition-colors">{article.title}</h3>
                </div>
              </div>
            </ScrollFadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}

function CookbookGate() {
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [submitted, setSubmitted] = useState(false);

  if (submitted) {
    return (
      <section className="py-16 bg-gold/10">
        <div className="max-w-2xl mx-auto px-4 text-center">
          <CheckCircle2 className="w-16 h-16 text-green-500 mx-auto mb-4" />
          <h2 className="font-serif text-2xl font-bold text-navy mb-3">Check Your Email!</h2>
          <p className="text-muted-foreground">We've sent the free bariatric cookbook to your inbox. Enjoy 50+ recipes designed for life after weight loss surgery!</p>
        </div>
      </section>
    );
  }

  return (
    <section className="py-16 bg-gold/10">
      <div className="max-w-3xl mx-auto px-4">
        <ScrollFadeIn>
          <div className="bg-white rounded-2xl border shadow-lg p-8 flex flex-col md:flex-row items-center gap-8">
            <div className="md:w-1/3">
              <div className="w-32 h-44 bg-gradient-to-br from-navy to-magenta rounded-lg mx-auto flex items-center justify-center shadow-lg">
                <div className="text-center text-white">
                  <BookOpen className="w-8 h-8 mx-auto mb-1" />
                  <p className="text-[10px] font-medium">FREE DOWNLOAD</p>
                  <p className="font-serif text-sm font-bold leading-tight mt-1">Bariatric<br/>Cookbook</p>
                </div>
              </div>
            </div>
            <div className="md:w-2/3">
              <div className="flex items-center gap-2 mb-2">
                <Lock className="w-4 h-4 text-gold" />
                <span className="text-gold font-semibold text-sm">FREE DOWNLOAD</span>
              </div>
              <h2 className="font-serif text-xl font-bold text-navy mb-2">The New You Bariatric Cookbook</h2>
              <p className="text-muted-foreground text-sm mb-4">50+ high-protein, bariatric-friendly recipes for every stage of your journey. From clear liquids to gourmet meals.</p>
              <form onSubmit={(e) => { e.preventDefault(); setSubmitted(true); }} className="flex flex-col sm:flex-row gap-2" data-testid="form-cookbook-gate">
                <input type="text" required placeholder="First Name" value={name} onChange={e => setName(e.target.value)}
                  className="flex-1 px-3 py-2.5 rounded-lg border text-sm outline-none focus:ring-2 focus:ring-magenta/20" data-testid="input-cookbook-name" />
                <input type="email" required placeholder="Email Address" value={email} onChange={e => setEmail(e.target.value)}
                  className="flex-1 px-3 py-2.5 rounded-lg border text-sm outline-none focus:ring-2 focus:ring-magenta/20" data-testid="input-cookbook-email" />
                <button type="submit" className="bg-magenta hover:bg-magenta-light text-white font-semibold px-5 py-2.5 rounded-lg text-sm transition-colors whitespace-nowrap" data-testid="button-cookbook-submit">
                  Get Free Cookbook
                </button>
              </form>
            </div>
          </div>
        </ScrollFadeIn>
      </div>
    </section>
  );
}

function VideoLibrary() {
  return (
    <section className="section-gradient py-20">
      <div className="max-w-7xl mx-auto px-4">
        <ScrollFadeIn className="text-center mb-12">
          <h2 className="font-serif text-3xl font-bold text-navy mb-4">Video Library</h2>
          <p className="text-muted-foreground">Educational videos about procedures, nutrition, and patient experiences.</p>
        </ScrollFadeIn>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {[
            "Understanding Gastric Sleeve Surgery",
            "What to Eat After Bariatric Surgery",
            "GLP-1 Medications Explained",
            "Bariatric Surgery Myths Debunked",
            "Patient Journey: First Year After Surgery",
            "Meet Dr. Lange — Surgeon Introduction",
          ].map((title, i) => (
            <ScrollFadeIn key={title} delay={i * 80}>
              <div className="bg-navy/5 rounded-2xl aspect-video flex items-center justify-center group cursor-pointer card-hover">
                <div className="text-center">
                  <div className="w-14 h-14 rounded-full bg-magenta/90 flex items-center justify-center mx-auto mb-2 group-hover:scale-110 transition-transform">
                    <Play className="w-6 h-6 text-white ml-0.5" />
                  </div>
                  <p className="font-medium text-navy text-sm px-4">{title}</p>
                </div>
              </div>
            </ScrollFadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}
