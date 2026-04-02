import { Link } from "wouter";
import { ArrowRight, CheckCircle2, Circle, Pill, Scale, Sparkles } from "lucide-react";
import ScrollFadeIn from "@/components/ScrollFadeIn";
import PageHero from "@/components/PageHero";
import { img } from "@/lib/img";

export default function NonSurgical() {
  return (
    <div>
      <PageHero image="/images/hero/hero-nonsurgical.jpg" title="Non-Surgical Options" subtitle="Not ready for surgery? We offer effective, medically supervised non-surgical weight loss solutions." />

      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: Circle, title: "ORBERA® Intragastric Balloon", price: "Starting at $6,500",
                features: ["Non-surgical, placed endoscopically in 20 min", "Occupies space in stomach to reduce hunger", "Removed after 6 months", "Average 10-15% total body weight loss", "No incisions, no anesthesia required", "Ideal for BMI 30-40"],
                desc: "A soft, saline-filled balloon placed in your stomach through a quick, non-surgical endoscopic procedure. It reduces hunger and helps you feel full faster.",
                href: "/request-consultation"
              },
              {
                icon: Pill, title: "GLP-1 / Semaglutide Program", price: "$249-$349/month",
                features: ["Weekly self-administered injection", "Medical monitoring and check-ins", "Nutritional counseling included", "Average 15-20% body weight loss", "No surgery or procedures", "Ideal for BMI 27+"],
                desc: "The breakthrough weight loss medication that mimics natural hormones to reduce appetite and improve blood sugar control.",
                href: "/glp1"
              },
              {
                icon: Scale, title: "Medically Supervised Weight Loss", price: "Custom pricing",
                features: ["Comprehensive metabolic evaluation", "Personalized nutrition plans", "Behavioral coaching with Lora Grabow", "Body composition monitoring", "Prescription medications if appropriate", "Ideal for any BMI"],
                desc: "A comprehensive, physician-directed program combining nutrition, behavioral change, and medical optimization for sustainable weight loss.",
                href: "/request-consultation"
              },
            ].map((option, i) => (
              <ScrollFadeIn key={option.title} delay={i * 100}>
                <div className="bg-white rounded-2xl border shadow-sm p-6 h-full flex flex-col card-hover">
                  <div className="w-14 h-14 rounded-xl bg-teal/10 flex items-center justify-center mb-5">
                    <option.icon className="w-7 h-7 text-teal" />
                  </div>
                  <h3 className="font-serif text-xl font-bold text-navy mb-2">{option.title}</h3>
                  <p className="text-magenta font-semibold mb-4">{option.price}</p>
                  <p className="text-muted-foreground text-sm leading-relaxed mb-6">{option.desc}</p>
                  <ul className="space-y-2 mb-6 flex-1">
                    {option.features.map((f) => (
                      <li key={f} className="flex items-start gap-2 text-sm">
                        <CheckCircle2 className="w-4 h-4 text-green-500 mt-0.5 shrink-0" />
                        <span>{f}</span>
                      </li>
                    ))}
                  </ul>
                  <Link href={option.href}
                    className="block text-center bg-navy hover:bg-navy-light text-white font-semibold py-3 rounded-xl transition-all"
                    data-testid={`link-nonsurgical-${i}`}>
                    Learn More
                  </Link>
                </div>
              </ScrollFadeIn>
            ))}
          </div>
          <ScrollFadeIn className="mt-12">
            <div className="rounded-2xl overflow-hidden">
              <img src={img("/images/stock/consultation.jpg")} alt="Non-surgical weight loss consultation" className="w-full h-64 object-cover rounded-2xl" />
            </div>
          </ScrollFadeIn>
        </div>
      </section>

      <section className="section-gradient py-20">
        <div className="max-w-3xl mx-auto px-4 text-center">
          <ScrollFadeIn>
            <h2 className="font-serif text-3xl font-bold text-navy mb-4">Not Sure Which Option Is Right?</h2>
            <p className="text-muted-foreground text-lg mb-8">Every patient's journey is unique. Schedule a free consultation with Dr. Lange to explore all your options — surgical and non-surgical.</p>
            <Link href="/request-consultation"
              className="inline-flex items-center gap-2 bg-magenta hover:bg-magenta-light text-white font-semibold px-8 py-4 rounded-full transition-all shadow-lg text-lg"
              data-testid="link-nonsurgical-cta">
              Schedule Free Consultation <ArrowRight className="w-5 h-5" />
            </Link>
          </ScrollFadeIn>
        </div>
      </section>
    </div>
  );
}
