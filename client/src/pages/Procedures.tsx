import { Link } from "wouter";
import { ArrowRight, CheckCircle2, Minimize2, GitBranch, Shuffle, Zap, Circle, RefreshCw } from "lucide-react";
import ScrollFadeIn from "@/components/ScrollFadeIn";

const FULL_PROCEDURES = [
  { name: "Gastric Sleeve", slug: "gastric-sleeve", icon: Minimize2, weightLoss: "60-70%", recovery: "2-4 weeks", insurance: "Yes", how: "Removes ~80% of the stomach, creating a banana-shaped sleeve", desc: "The most popular bariatric procedure worldwide. Reduces hunger hormones while restricting food intake." },
  { name: "Gastric Bypass (Roux-en-Y)", slug: "gastric-bypass", icon: GitBranch, weightLoss: "70-80%", recovery: "3-5 weeks", insurance: "Yes", how: "Creates small stomach pouch and reroutes small intestine", desc: "Gold-standard for maximum weight loss with metabolic benefits including type 2 diabetes reversal." },
  { name: "Duodenal Switch", slug: "duodenal-switch", icon: Shuffle, weightLoss: "80-90%", recovery: "4-6 weeks", insurance: "Select plans", how: "Combines sleeve gastrectomy with intestinal bypass", desc: "The most powerful weight loss surgery, ideal for patients with very high BMI or severe metabolic conditions." },
  { name: "SADI-S", slug: "sadi-s", icon: Zap, weightLoss: "75-85%", recovery: "3-5 weeks", insurance: "Select plans", how: "Single anastomosis duodeno-ileal bypass with sleeve", desc: "A simplified duodenal switch variant with fewer complications and excellent long-term outcomes." },
  { name: "ORBERA® Balloon", slug: "orbera-balloon", icon: Circle, weightLoss: "10-15%", recovery: "1-3 days", insurance: "Typically not", how: "Soft balloon placed endoscopically in the stomach for 6 months", desc: "Non-surgical option for BMI 30-40. No incisions, no anesthesia, placed in 20 minutes." },
  { name: "Revision Surgery", slug: "revision-surgery", icon: RefreshCw, weightLoss: "Varies", recovery: "3-6 weeks", insurance: "Case dependent", how: "Converts or revises a previous bariatric procedure", desc: "Expert revision and conversion procedures for patients who need a second chance at success." },
];

export default function Procedures() {
  return (
    <div>
      <section className="hero-gradient py-16 md:py-24 text-center relative overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-teal/10 rounded-full blur-3xl translate-y-1/2" />
        </div>
        <div className="max-w-3xl mx-auto px-4 relative">
          <h1 className="font-serif text-4xl md:text-5xl font-bold text-white mb-4">Our Procedures</h1>
          <p className="text-white/80 text-lg md:text-xl">Comprehensive surgical and non-surgical weight loss solutions tailored to your needs.</p>
        </div>
      </section>

      {/* Procedure Cards */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {FULL_PROCEDURES.map((proc, i) => (
              <ScrollFadeIn key={proc.slug} delay={i * 80}>
                <div className="bg-white rounded-2xl border shadow-sm overflow-hidden card-hover h-full flex flex-col">
                  <div className="p-6 flex-1">
                    <div className="w-12 h-12 rounded-xl bg-navy/5 flex items-center justify-center mb-4">
                      <proc.icon className="w-6 h-6 text-navy" />
                    </div>
                    <h3 className="font-serif text-xl font-bold text-navy mb-2">{proc.name}</h3>
                    <p className="text-muted-foreground text-sm leading-relaxed mb-4">{proc.desc}</p>
                    <div className="space-y-2 text-sm">
                      <div className="flex justify-between"><span className="text-muted-foreground">Expected Weight Loss</span><span className="font-semibold text-navy">{proc.weightLoss}</span></div>
                      <div className="flex justify-between"><span className="text-muted-foreground">Recovery Time</span><span className="font-semibold text-navy">{proc.recovery}</span></div>
                      <div className="flex justify-between"><span className="text-muted-foreground">Insurance</span><span className="font-semibold text-navy">{proc.insurance}</span></div>
                    </div>
                  </div>
                  <div className="px-6 pb-6">
                    <Link href={proc.slug === "orbera-balloon" || proc.slug === "sadi-s" || proc.slug === "duodenal-switch" ? "/non-surgical" : `/procedures/${proc.slug}`}
                      className="flex items-center justify-center gap-2 w-full bg-navy/5 hover:bg-magenta hover:text-white text-navy font-semibold py-3 rounded-xl transition-all"
                      data-testid={`link-proc-detail-${proc.slug}`}>
                      Learn More <ArrowRight className="w-4 h-4" />
                    </Link>
                  </div>
                </div>
              </ScrollFadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* Comparison Table */}
      <section className="section-gradient py-20">
        <div className="max-w-7xl mx-auto px-4">
          <ScrollFadeIn className="text-center mb-12">
            <h2 className="font-serif text-3xl font-bold text-navy mb-4">Compare Procedures at a Glance</h2>
          </ScrollFadeIn>
          <ScrollFadeIn>
            <div className="overflow-x-auto">
              <table className="w-full bg-white rounded-2xl border shadow-sm overflow-hidden text-sm">
                <thead>
                  <tr className="bg-navy text-white">
                    <th className="text-left px-4 py-3 font-semibold">Procedure</th>
                    <th className="text-left px-4 py-3 font-semibold">How It Works</th>
                    <th className="text-center px-4 py-3 font-semibold">Weight Loss</th>
                    <th className="text-center px-4 py-3 font-semibold">Recovery</th>
                    <th className="text-center px-4 py-3 font-semibold">Insurance</th>
                  </tr>
                </thead>
                <tbody>
                  {FULL_PROCEDURES.map((proc, i) => (
                    <tr key={proc.slug} className={i % 2 === 0 ? "bg-white" : "bg-gray-50"}>
                      <td className="px-4 py-3 font-semibold text-navy">{proc.name}</td>
                      <td className="px-4 py-3 text-muted-foreground">{proc.how}</td>
                      <td className="px-4 py-3 text-center font-semibold text-magenta">{proc.weightLoss}</td>
                      <td className="px-4 py-3 text-center">{proc.recovery}</td>
                      <td className="px-4 py-3 text-center">{proc.insurance}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </ScrollFadeIn>
        </div>
      </section>

      {/* Which procedure quiz */}
      <section className="py-20 bg-white">
        <div className="max-w-3xl mx-auto px-4 text-center">
          <ScrollFadeIn>
            <h2 className="font-serif text-3xl font-bold text-navy mb-4">Not Sure Which Procedure Is Right?</h2>
            <p className="text-muted-foreground text-lg mb-8">Every patient is unique. Dr. Lange will work with you to determine the best approach based on your BMI, health conditions, lifestyle, and goals.</p>
            <Link href="/request-consultation"
              className="inline-flex items-center gap-2 bg-magenta hover:bg-magenta-light text-white font-semibold px-8 py-4 rounded-full transition-all shadow-lg text-lg"
              data-testid="link-procedures-cta">
              Schedule a Free Consultation <ArrowRight className="w-5 h-5" />
            </Link>
          </ScrollFadeIn>
        </div>
      </section>
    </div>
  );
}
