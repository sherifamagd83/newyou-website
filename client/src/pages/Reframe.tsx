import { Link } from "wouter";
import { ArrowRight, CheckCircle2, Brain, Heart, Users, Calendar, Star } from "lucide-react";
import ScrollFadeIn from "@/components/ScrollFadeIn";

export default function Reframe() {
  return (
    <div>
      <section className="hero-gradient py-16 md:py-24 text-center relative overflow-hidden">
        <div className="absolute inset-0"><div className="absolute top-0 left-0 w-[400px] h-[400px] bg-magenta/10 rounded-full blur-3xl" /></div>
        <div className="max-w-3xl mx-auto px-4 relative">
          <img src="/images/site/reframe-logo.png" alt="REFRAME Coaching Program" className="h-16 w-auto mx-auto mb-6" />
          <h1 className="font-serif text-4xl md:text-5xl font-bold text-white mb-4">REFRAME Coaching Program</h1>
          <p className="text-white/80 text-lg">Behavioral coaching that transforms your mindset — not just your body. Led by Lora Grabow, LMSW.</p>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-start">
            <ScrollFadeIn>
              <span className="text-magenta font-semibold text-sm tracking-wider uppercase">The Headwork™ Method</span>
              <h2 className="font-serif text-3xl font-bold text-navy mt-2 mb-6">Your Mind is the Missing Piece</h2>
              <p className="text-muted-foreground leading-relaxed text-lg mb-4">
                Weight loss surgery changes your stomach. REFRAME changes your mind. Our behavioral coaching program addresses the emotional, psychological, and habitual patterns that drive overeating — giving you the tools for lasting success.
              </p>
              <p className="text-muted-foreground leading-relaxed mb-6">
                Led by Lora Grabow, LMSW — a licensed social worker with 20+ years of experience and creator of the Headwork™ method — REFRAME is the behavioral foundation that makes surgical weight loss permanent.
              </p>
              <div className="bg-gray-50 rounded-2xl p-6 border mb-8">
                <h3 className="font-semibold text-navy mb-4">What's Included</h3>
                <div className="grid sm:grid-cols-2 gap-3">
                  {[
                    "One-on-one behavioral coaching sessions",
                    "The Headwork™ mindset curriculum",
                    "Emotional eating identification & strategies",
                    "Habit restructuring techniques",
                    "Stress management and coping skills",
                    "Body image and self-esteem work",
                    "Relationship with food healing",
                    "Lifetime access to support groups",
                  ].map((item) => (
                    <div key={item} className="flex items-start gap-2">
                      <CheckCircle2 className="w-4 h-4 text-green-500 mt-0.5 shrink-0" />
                      <span className="text-sm">{item}</span>
                    </div>
                  ))}
                </div>
              </div>
            </ScrollFadeIn>

            <ScrollFadeIn delay={150}>
              {/* Lora bio */}
              <div className="bg-white rounded-2xl border shadow-sm p-6 mb-6">
                <div className="flex items-start gap-4 mb-4">
                  <img
                    src="/images/team/lora-grabow.jpg"
                    alt="Lora Grabow, LMSW"
                    className="w-20 h-20 rounded-full object-cover shrink-0"
                  />
                  <div>
                    <h3 className="font-semibold text-navy text-lg">Lora Grabow, LMSW</h3>
                    <p className="text-magenta text-sm font-medium">Behavioral Therapist & Coach</p>
                    <p className="text-muted-foreground text-sm mt-2">
                      20+ years of experience helping patients overcome the mental and emotional barriers to lasting weight loss. Creator of the Headwork™ method.
                    </p>
                  </div>
                </div>
                <div className="bg-navy rounded-xl p-4 text-white">
                  <p className="text-sm italic leading-relaxed">"Surgery can change your body, but if you don't change your thinking, the weight comes back. REFRAME gives you the mindset tools for permanent transformation."</p>
                  <p className="text-xs text-white/60 mt-2">— Lora Grabow</p>
                </div>
              </div>

              {/* How it integrates */}
              <div className="bg-gray-50 rounded-2xl p-6 border">
                <h3 className="font-semibold text-navy mb-4">How REFRAME Integrates</h3>
                <div className="space-y-4">
                  {[
                    { icon: Brain, title: "Pre-Surgery", desc: "Build mental readiness and realistic expectations before your procedure." },
                    { icon: Heart, title: "During Recovery", desc: "Navigate emotional changes, food grief, and identity shifts post-surgery." },
                    { icon: Users, title: "Long-Term Maintenance", desc: "Monthly support groups and ongoing coaching to prevent relapse." },
                    { icon: Calendar, title: "Non-Surgical Patients", desc: "Available for GLP-1 and medically supervised weight loss patients too." },
                  ].map(({ icon: Icon, title, desc }) => (
                    <div key={title} className="flex gap-3 items-start">
                      <div className="w-8 h-8 rounded-lg bg-magenta/10 flex items-center justify-center shrink-0">
                        <Icon className="w-4 h-4 text-magenta" />
                      </div>
                      <div>
                        <h4 className="font-medium text-navy text-sm">{title}</h4>
                        <p className="text-xs text-muted-foreground">{desc}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </ScrollFadeIn>
          </div>
        </div>
      </section>

      <section className="section-gradient py-16">
        <div className="max-w-3xl mx-auto px-4 text-center">
          <ScrollFadeIn>
            <div className="bg-navy rounded-2xl p-8 text-white">
              <div className="flex gap-1 justify-center mb-4">{[1,2,3,4,5].map(s => <Star key={s} className="w-5 h-5 fill-yellow-500 text-yellow-500" />)}</div>
              <p className="text-lg leading-relaxed italic mb-4">"Lora's support groups and coaching sessions were the secret weapon in my weight loss journey. She helped me understand WHY I was eating, not just WHAT. I'm 2 years post-op and maintaining my weight loss because of REFRAME."</p>
              <p className="font-semibold">— Amanda L., Program Participant</p>
            </div>
          </ScrollFadeIn>
        </div>
      </section>

      <section className="py-16 bg-white text-center">
        <div className="max-w-2xl mx-auto px-4">
          <h2 className="font-serif text-3xl font-bold text-navy mb-4">Ready to REFRAME Your Relationship with Food?</h2>
          <Link href="/request-consultation"
            className="inline-flex items-center gap-2 bg-magenta hover:bg-magenta-light text-white font-semibold px-8 py-4 rounded-full transition-all shadow-lg text-lg"
            data-testid="link-reframe-cta">
            Get Started <ArrowRight className="w-5 h-5" />
          </Link>
        </div>
      </section>
    </div>
  );
}
