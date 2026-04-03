import { Link } from "wouter";
import { ArrowRight, MapPin, Heart, Clock } from "lucide-react";
import PageHero from "@/components/PageHero";
import ScrollFadeIn from "@/components/ScrollFadeIn";

const GROUPS = [
  { 
    title: "Monthly Patient Support Group", 
    schedule: "Third Tuesday of every month · Evening", 
    location: "New You Surgical Weight Loss — St. Louis Office", 
    type: "In-Person" as const, 
    icon: MapPin, 
    desc: "An evening of conversation, encouragement, and real talk about life before and after weight loss treatment. Open to all patients and anyone considering care through New You. Led by our dietitian or a special guest expert." 
  },
];

const TOPICS = [
  "Handling food choices and meal prep after surgery",
  "Building a positive relationship with your body",
  "Staying motivated through plateaus & busy seasons",
  "Eating well when traveling or socializing",
  "How to get back on track after a setback",
  "Community Q&A with our care team",
];

export default function SupportGroups() {
  return (
    <div>
      <PageHero
        image="/images/hero/hero-results.jpg"
        badge="Community"
        title="Patient Support Groups"
        subtitle="You're never alone on your journey. Join our supportive community of patients at every stage."
      />

      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <ScrollFadeIn className="text-center mb-14">
            <h2 className="font-serif text-3xl md:text-4xl font-bold text-navy mb-4">Upcoming Support Groups</h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">Free for all patients and anyone considering care. Led by our dietitian Nicole Dirnbeck, RD or a special guest expert.</p>
          </ScrollFadeIn>

          <div className="grid md:grid-cols-1 gap-6 max-w-2xl mx-auto">
            {GROUPS.map((group, i) => (
              <ScrollFadeIn key={group.title} delay={i * 100}>
                <div className="bg-white rounded-2xl border border-gray-100 p-6 shadow-sm hover:shadow-md transition-all h-full">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-10 h-10 rounded-xl bg-navy flex items-center justify-center">
                      <group.icon className="w-5 h-5 text-white" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-navy">{group.title}</h3>
                      <span className={`text-xs font-medium px-2 py-0.5 rounded-full ${group.type === "Virtual" ? "bg-teal/10 text-teal" : "bg-magenta/10 text-magenta"}`}>{group.type}</span>
                    </div>
                  </div>
                  <p className="text-sm text-muted-foreground leading-relaxed mb-4">{group.desc}</p>
                  <div className="space-y-2 text-sm">
                    <div className="flex items-center gap-2 text-muted-foreground">
                      <Clock className="w-4 h-4 text-gold shrink-0" />
                      <span>{group.schedule}</span>
                    </div>
                    <div className="flex items-center gap-2 text-muted-foreground">
                      <MapPin className="w-4 h-4 text-gold shrink-0" />
                      <span>{group.location}</span>
                    </div>
                  </div>
                  <p className="text-xs text-muted-foreground mt-3 italic">Free for all patients and anyone considering care. Occasionally we host special workshops with a small fee.</p>
                </div>
              </ScrollFadeIn>
            ))}
          </div>

          {/* Topics We Cover */}
          <ScrollFadeIn className="mt-14">
            <h3 className="font-serif text-2xl font-bold text-navy text-center mb-6">Topics We Cover</h3>
            <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4">
              {TOPICS.map((topic) => (
                <div key={topic} className="bg-white rounded-xl border border-gray-100 p-4 shadow-sm flex items-start gap-3">
                  <Heart className="w-4 h-4 text-magenta mt-0.5 shrink-0" />
                  <span className="text-sm text-foreground">{topic}</span>
                </div>
              ))}
            </div>
            <p className="text-center text-sm text-muted-foreground mt-6">
              Questions? Contact our support group host{" "}
              <a href="mailto:ndirnbeck@nyswl.com" className="text-teal font-medium hover:underline">Nicole Dirnbeck, RD at ndirnbeck@nyswl.com</a>
            </p>
          </ScrollFadeIn>

          {/* REFRAME Behavioral Coaching */}
          <ScrollFadeIn className="mt-14">
            <div className="bg-navy rounded-2xl p-8 text-white flex flex-col md:flex-row items-start md:items-center gap-6">
              <div className="flex-1">
                <span className="text-teal text-xs font-semibold uppercase tracking-wider">Also Available</span>
                <h3 className="font-serif text-2xl font-bold mt-1 mb-2">REFRAME Behavioral Coaching</h3>
                <p className="text-white/80 text-sm leading-relaxed">Bi-monthly virtual mindset sessions with Lora Grabow, LMSW — designed to retrain how you think about food, your body, and lasting change.</p>
              </div>
              <Link href="/reframe" className="inline-flex items-center gap-2 bg-magenta hover:bg-magenta-light text-white font-semibold px-6 py-3 rounded-full transition-all shadow-md shrink-0" data-testid="link-reframe-from-support">
                Learn More <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </ScrollFadeIn>

          <ScrollFadeIn className="text-center mt-10">
            <Link href="/book" className="inline-flex items-center gap-2 bg-magenta hover:bg-magenta-light text-white font-semibold px-8 py-3.5 rounded-full transition-all shadow-md" data-testid="link-register-support-group">
              Register for a Group <ArrowRight className="w-4 h-4" />
            </Link>
          </ScrollFadeIn>
        </div>
      </section>

      {/* Why Support Groups Matter */}
      <section className="py-16 md:py-24 section-gradient">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <ScrollFadeIn>
            <Users className="w-12 h-12 text-magenta mx-auto mb-4" />
            <h2 className="font-serif text-2xl md:text-3xl font-bold text-navy mb-4">Why Support Groups Matter</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto mb-8">Research shows that bariatric patients who attend regular support groups lose more weight and maintain their results longer. Community support is one of the strongest predictors of long-term success.</p>
            <div className="grid grid-cols-3 gap-8 max-w-lg mx-auto">
              {[
                { stat: "2x", label: "More Weight Loss" },
                { stat: "85%", label: "Better Maintenance" },
                { stat: "Free", label: "For All Patients" },
              ].map(({ stat, label }) => (
                <div key={label}>
                  <div className="font-serif text-3xl font-bold text-gold">{stat}</div>
                  <div className="text-sm text-muted-foreground">{label}</div>
                </div>
              ))}
            </div>
          </ScrollFadeIn>
        </div>
      </section>
    </div>
  );
}
