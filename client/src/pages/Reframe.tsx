import { Link } from "wouter";
import { ArrowRight, CheckCircle2, Brain, Heart, Users, Calendar, Star } from "lucide-react";
import ScrollFadeIn from "@/components/ScrollFadeIn";
import { img } from "@/lib/img";

export default function Reframe() {
  return (
    <div>
      <section className="hero-gradient py-16 md:py-24 text-center relative overflow-hidden">
        <div className="absolute inset-0"><div className="absolute top-0 left-0 w-[400px] h-[400px] bg-magenta/10 rounded-full blur-3xl" /></div>
        <div className="max-w-3xl mx-auto px-4 relative">
          <div className="w-16 h-16 rounded-2xl bg-magenta/10 flex items-center justify-center mx-auto mb-6"><Brain className="w-8 h-8 text-magenta" /></div>
          <h1 className="font-serif text-4xl md:text-5xl font-bold text-white mb-4">REFRAME Behavioral Coaching</h1>
          <p className="text-white/80 text-lg">A virtual, bi-monthly mindset and behavioral support series for people navigating surgical or medical weight loss. Offered in collaboration with Lora Grabow, LMSW.</p>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-start">
            <ScrollFadeIn>
              <span className="text-magenta font-semibold text-sm tracking-wider uppercase">Mindset & Behavioral Support</span>
              <h2 className="font-serif text-3xl font-bold text-navy mt-2 mb-6">Surgery changes how you eat. REFRAME changes how you think.</h2>
              <p className="text-muted-foreground leading-relaxed text-lg mb-4">
                Each REFRAME session is a guided conversation to retrain your thoughts, rebuild your habits, and reclaim your identity — in a judgment-free, safe space.
              </p>
              <p className="text-muted-foreground leading-relaxed mb-6">
                Offered in collaboration with Lora Grabow, LMSW, REFRAME meets virtually on a bi-monthly basis so you can participate from anywhere. No matter where you are in your journey, these sessions are designed to meet you there.
              </p>
              <div className="bg-gray-50 rounded-2xl p-6 border mb-8">
                <h3 className="font-semibold text-navy mb-4">What You Get</h3>
                <div className="grid sm:grid-cols-2 gap-3">
                  {[
                    "Bi-monthly virtual group sessions (live)",
                    "1:1 therapy access with preferred scheduling",
                    "Special pricing for program participants",
                    "Community & accountability between sessions",
                    "Cravings & emotional eating strategies",
                    "Boundaries and self-talk work",
                    "Identity and life after rapid change",
                    "A judgment-free, safe space to grow",
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
                    src={img("/images/team/lora-grabow.jpg")}
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
                  <p className="text-sm italic leading-relaxed">"Surgery changes how you eat. We started REFRAME to change how you think and who you become."</p>
                  <p className="text-xs text-white/60 mt-2">— Dr. Lange</p>
                </div>
              </div>

              {/* How it integrates */}
              <div className="bg-gray-50 rounded-2xl p-6 border">
                <h3 className="font-semibold text-navy mb-4">Who REFRAME Is For</h3>
                <div className="space-y-4">
                  {[
                    { icon: Brain, title: "Pre-Surgery Patients", desc: "Build the mental habits and emotional readiness before your procedure." },
                    { icon: Heart, title: "Post-Op Patients", desc: "Navigate new routines, identity shifts, and the emotional side of rapid change." },
                    { icon: Users, title: "Non-Surgical Clients", desc: "Ready for lifelong change through medical weight loss or GLP-1 therapy." },
                    { icon: Calendar, title: "Topics We Explore", desc: "Cravings, emotional eating, boundaries, self-talk, and life after rapid change." },
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
            <div className="rounded-2xl overflow-hidden mt-8 mb-8">
              <img src={img("/images/stock/consultation.jpg")} alt="REFRAME behavioral coaching session" className="w-full h-56 object-cover rounded-2xl" />
            </div>
          </ScrollFadeIn>
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
          <h2 className="font-serif text-3xl font-bold text-navy mb-4">Ready to Change How You Think?</h2>
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
