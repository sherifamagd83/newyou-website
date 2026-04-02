import { Link } from "wouter";
import { ArrowRight, Users, Calendar, Video, MapPin, Heart, MessageCircle, Clock } from "lucide-react";
import PageHero from "@/components/PageHero";
import ScrollFadeIn from "@/components/ScrollFadeIn";

const GROUPS = [
  { title: "Monthly In-Person Support Group", schedule: "First Wednesday of every month, 6:00 PM", location: "New You Surgical Weight Loss — St. Louis Office", type: "In-Person", icon: MapPin, desc: "Join fellow patients and our behavioral health specialist Lora Grabow, LMSW, for guided discussion, accountability, and community. Open to all patients at any stage of their journey." },
  { title: "Virtual Support Group", schedule: "Third Wednesday of every month, 7:00 PM", location: "Zoom (link sent after registration)", type: "Virtual", icon: Video, desc: "Can't make it in person? Join from home. Same great support, expert guidance, and patient community in a virtual setting." },
  { title: "Pre-Surgery Preparation Group", schedule: "Second Saturday of every month, 10:00 AM", location: "New You Surgical Weight Loss — St. Louis Office", type: "In-Person", icon: Heart, desc: "For patients preparing for surgery. Learn what to expect, how to prepare, and connect with others who are at the same stage." },
  { title: "Post-Surgery Nutrition Workshop", schedule: "Fourth Thursday of every month, 5:30 PM", location: "Virtual via Zoom", type: "Virtual", icon: MessageCircle, desc: "Focused on nutrition, meal planning, and healthy eating habits after bariatric surgery. Led by our nutrition team." },
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
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">Free for all New You patients. Led by Lora Grabow, LMSW and our care team.</p>
          </ScrollFadeIn>

          <div className="grid md:grid-cols-2 gap-6">
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
                </div>
              </ScrollFadeIn>
            ))}
          </div>

          <ScrollFadeIn className="text-center mt-12">
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
