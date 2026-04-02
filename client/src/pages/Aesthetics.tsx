import { Link } from "wouter";
import { ArrowRight, Sparkles, Sun, Waves, Zap, CheckCircle2 } from "lucide-react";
import ScrollFadeIn from "@/components/ScrollFadeIn";
import PageHero from "@/components/PageHero";

export default function Aesthetics() {
  return (
    <div>
      <PageHero image="/images/hero/hero-aesthetics.jpg" badge="Complete Your Transformation" title="Aesthetics & Body Confidence" subtitle="After weight loss comes the final step — looking as amazing as you feel. Hair restoration, skin tightening, and body contouring." />

      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <ScrollFadeIn className="text-center mb-16">
            <h2 className="font-serif text-3xl font-bold text-navy mb-4">Our Aesthetic Services</h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">Designed specifically for weight loss patients to address the cosmetic concerns that come with dramatic body transformation.</p>
          </ScrollFadeIn>

          <div className="grid md:grid-cols-2 gap-8">
            {[
              {
                icon: Sparkles, title: "Hair Restoration",
                desc: "Weight loss surgery can sometimes lead to temporary hair thinning. Our hair restoration treatments stimulate growth and restore fullness, helping you regain confidence in your appearance.",
                features: ["Non-surgical hair growth stimulation", "PRP (Platelet-Rich Plasma) therapy", "Targeted nutritional supplementation", "Visible results in 3-6 months"],
                color: "from-purple-500/10 to-purple-600/5"
              },
              {
                icon: Sun, title: "Red Light Therapy",
                desc: "FDA-cleared red light therapy promotes cellular regeneration, reduces inflammation, and improves skin elasticity — especially beneficial after significant weight loss.",
                features: ["Stimulates collagen production", "Improves skin elasticity and texture", "Non-invasive, pain-free sessions", "Promotes cellular healing"],
                color: "from-red-500/10 to-orange-500/5"
              },
              {
                icon: Waves, title: "Skin Tightening",
                desc: "After significant weight loss, excess skin is a common concern. Our skin tightening treatments use advanced technology to firm and contour loose skin without surgery.",
                features: ["Radiofrequency skin tightening", "Targets arms, abdomen, thighs, neck", "Progressive improvement over sessions", "No downtime, return to activities immediately"],
                color: "from-teal-500/10 to-teal-600/5"
              },
              {
                icon: Zap, title: "AccentPrime Body Contouring",
                desc: "AccentPrime uses ultrasound and radiofrequency technology to reduce stubborn fat pockets and tighten skin — the perfect finishing touch after weight loss surgery.",
                features: ["Dual-technology: ultrasound + RF", "Targets resistant fat deposits", "Skin tightening and contouring", "Comfortable, non-invasive treatment"],
                color: "from-gold/10 to-amber-500/5"
              },
            ].map((service, i) => (
              <ScrollFadeIn key={service.title} delay={i * 100}>
                <div className="bg-white rounded-2xl border shadow-sm overflow-hidden card-hover">
                  <div className={`p-8 bg-gradient-to-br ${service.color}`}>
                    <div className="w-14 h-14 rounded-xl bg-white/80 flex items-center justify-center mb-4">
                      <service.icon className="w-7 h-7 text-navy" />
                    </div>
                    <h3 className="font-serif text-2xl font-bold text-navy mb-3">{service.title}</h3>
                    <p className="text-muted-foreground leading-relaxed">{service.desc}</p>
                  </div>
                  <div className="p-6">
                    <h4 className="font-medium text-navy mb-3 text-sm">What to Expect</h4>
                    <ul className="space-y-2 mb-5">
                      {service.features.map((f) => (
                        <li key={f} className="flex items-start gap-2 text-sm">
                          <CheckCircle2 className="w-4 h-4 text-green-500 mt-0.5 shrink-0" />
                          <span className="text-muted-foreground">{f}</span>
                        </li>
                      ))}
                    </ul>
                    <Link href="/request-consultation"
                      className="inline-flex items-center gap-1.5 text-magenta font-semibold text-sm hover:gap-3 transition-all">
                      Book a Consultation <ArrowRight className="w-4 h-4" />
                    </Link>
                  </div>
                </div>
              </ScrollFadeIn>
            ))}
          </div>
        </div>
      </section>

      <section className="section-gradient py-20">
        <div className="max-w-3xl mx-auto px-4 text-center">
          <ScrollFadeIn>
            <h2 className="font-serif text-3xl font-bold text-navy mb-4">Why Aesthetics After Weight Loss?</h2>
            <p className="text-muted-foreground text-lg mb-8">
              You've done the hard work of losing the weight. Now it's time to address the cosmetic concerns that can affect your confidence — loose skin, stubborn fat pockets, and hair changes. Our aesthetic services are the final step in your complete transformation.
            </p>
            <div className="bg-navy rounded-2xl p-8 text-white text-left">
              <p className="text-lg leading-relaxed italic mb-4">"After losing 130 lbs, I was thrilled with my health but self-conscious about loose skin and thinning hair. The aesthetics team at New You helped me with skin tightening and hair restoration. Now I look as good as I feel."</p>
              <p className="font-semibold">— Lisa P., Patient</p>
            </div>
          </ScrollFadeIn>
        </div>
      </section>

      <section className="py-16 bg-white text-center">
        <div className="max-w-2xl mx-auto px-4">
          <h2 className="font-serif text-3xl font-bold text-navy mb-4">Ready to Complete Your Transformation?</h2>
          <Link href="/request-consultation"
            className="inline-flex items-center gap-2 bg-magenta hover:bg-magenta-light text-white font-semibold px-8 py-4 rounded-full transition-all shadow-lg text-lg"
            data-testid="link-aesthetics-cta">
            Schedule Aesthetics Consultation <ArrowRight className="w-5 h-5" />
          </Link>
        </div>
      </section>
    </div>
  );
}
