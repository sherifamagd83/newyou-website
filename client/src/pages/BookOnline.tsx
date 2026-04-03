import { Link } from "wouter";
import {
  Calendar, Video, MapPin, Clock, CheckCircle2, ArrowRight,
  Phone, Shield, Users, Star,
} from "lucide-react";
import ScrollFadeIn from "@/components/ScrollFadeIn";
import PageHero from "@/components/PageHero";
import LeadForm from "@/components/LeadForm";
import { PRACTICE } from "@/lib/constants";

export default function BookOnline() {
  return (
    <div>
      <PageHero
        image="/images/hero/hero-surgery.jpg"
        badge="Schedule Now"
        title="Book Your Appointment"
        subtitle="Choose a time that works for you. Free consultations available for new patients."
      />

      {/* Trust strip */}
      <section className="py-6 bg-navy/5 border-b">
        <div className="max-w-5xl mx-auto px-4">
          <div className="flex flex-wrap items-center justify-center gap-6 text-sm text-navy font-medium">
            <span className="flex items-center gap-2"><Shield className="w-4 h-4 text-magenta" /> Free New Patient Consult</span>
            <span className="hidden sm:block text-gray-300">|</span>
            <span className="flex items-center gap-2"><Clock className="w-4 h-4 text-teal" /> Same-Week Availability</span>
            <span className="hidden sm:block text-gray-300">|</span>
            <span className="flex items-center gap-2"><Star className="w-4 h-4 text-gold fill-gold" /> 5.0 Rating · 500+ Procedures</span>
            <span className="hidden sm:block text-gray-300">|</span>
            <span className="flex items-center gap-2"><Users className="w-4 h-4 text-navy" /> Most Insurance Accepted</span>
          </div>
        </div>
      </section>

      {/* Two booking options */}
      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-6xl mx-auto px-4">
          <ScrollFadeIn>
            <div className="text-center mb-14">
              <span className="inline-block text-sm font-semibold text-magenta uppercase tracking-widest mb-3">
                Choose Your Visit Type
              </span>
              <h2 className="font-serif text-3xl md:text-4xl font-bold text-navy mb-4">
                How Would You Like to Meet?
              </h2>
              <p className="text-muted-foreground text-lg max-w-xl mx-auto">
                Both options give you direct access to Dr. Lange and our full care team. Pick what's most convenient for you.
              </p>
            </div>
          </ScrollFadeIn>

          <div className="grid lg:grid-cols-2 gap-8">
            {/* In-Person Card */}
            <ScrollFadeIn delay={0}>
              <div className="rounded-3xl border-2 border-navy/10 hover:border-navy/20 shadow-lg hover:shadow-xl transition-all overflow-hidden flex flex-col" data-testid="card-inperson">
                {/* Card header */}
                <div className="bg-navy p-8">
                  <div className="flex items-start gap-4">
                    <div className="w-14 h-14 rounded-2xl bg-white/10 flex items-center justify-center shrink-0">
                      <MapPin className="w-7 h-7 text-white" />
                    </div>
                    <div>
                      <h3 className="font-serif text-2xl font-bold text-white mb-1">In-Person Consultation</h3>
                      <p className="text-white/70 text-sm">At our St. Louis office</p>
                    </div>
                  </div>
                </div>

                {/* Card body */}
                <div className="p-8 flex-1 flex flex-col">
                  <p className="text-muted-foreground leading-relaxed mb-6">
                    Meet face-to-face with Dr. Lange at our state-of-the-art facility in Des Peres. Includes full consultation, body composition analysis, and a personalized plan.
                  </p>

                  <div className="mb-6">
                    <p className="text-sm font-semibold text-navy mb-3">What to Expect:</p>
                    <ul className="space-y-2.5">
                      {[
                        "Full medical history review with Dr. Lange",
                        "Body composition and BMI assessment",
                        "Discussion of all surgical and non-surgical options",
                        "Insurance pre-qualification with our specialist",
                        "Personalized weight loss plan before you leave",
                      ].map((item, i) => (
                        <li key={i} className="flex items-start gap-2.5 text-sm text-foreground">
                          <CheckCircle2 className="w-4 h-4 text-teal shrink-0 mt-0.5" />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="bg-gray-50 rounded-xl p-4 text-sm text-muted-foreground mb-6 flex items-start gap-2">
                    <MapPin className="w-4 h-4 text-navy shrink-0 mt-0.5" />
                    <span>{PRACTICE.fullAddress}</span>
                  </div>

                  {/* Calendar embed */}
                  <div className="mt-auto">
                    <div
                      id="totalflow-calendar-inperson"
                      className="min-h-[300px] bg-gray-50 rounded-2xl border border-dashed border-gray-200 flex flex-col items-center justify-center p-8 text-center"
                      data-testid="calendar-inperson"
                    >
                      <Calendar className="w-12 h-12 text-navy/30 mx-auto mb-4" />
                      <h4 className="font-semibold text-navy mb-2">Online Scheduling Coming Soon</h4>
                      <p className="text-sm text-muted-foreground mb-4">In the meantime, call us to schedule your appointment.</p>
                      <a href="tel:+13148877605" className="inline-flex items-center gap-2 bg-magenta hover:bg-magenta-light text-white font-semibold px-6 py-3 rounded-full transition-all">
                        <Phone className="w-4 h-4" /> Call (314) 887-7605
                      </a>
                    </div>
                    <div className="flex items-center justify-center gap-1.5 mt-2">
                      <span className="text-xs text-muted-foreground">Powered by</span>
                      <span className="text-xs font-semibold text-navy">TotalFlow AI</span>
                    </div>
                  </div>
                </div>
              </div>
            </ScrollFadeIn>

            {/* Virtual Telehealth Card */}
            <ScrollFadeIn delay={120}>
              <div className="rounded-3xl border-2 border-magenta/15 hover:border-magenta/30 shadow-lg hover:shadow-xl transition-all overflow-hidden flex flex-col" data-testid="card-virtual">
                {/* Card header */}
                <div className="bg-gradient-to-br from-magenta to-[#7b1fa2] p-8">
                  <div className="flex items-start gap-4">
                    <div className="w-14 h-14 rounded-2xl bg-white/15 flex items-center justify-center shrink-0">
                      <Video className="w-7 h-7 text-white" />
                    </div>
                    <div>
                      <h3 className="font-serif text-2xl font-bold text-white mb-1">Virtual Telehealth Visit</h3>
                      <p className="text-white/75 text-sm">From the comfort of your home</p>
                    </div>
                  </div>
                </div>

                {/* Card body */}
                <div className="p-8 flex-1 flex flex-col">
                  <p className="text-muted-foreground leading-relaxed mb-6">
                    Connect with Dr. Lange via secure video from anywhere in Missouri. Same thorough consultation, zero commute required.
                  </p>

                  <div className="mb-6">
                    <p className="text-sm font-semibold text-navy mb-3">What to Expect:</p>
                    <ul className="space-y-2.5">
                      {[
                        "Secure HIPAA-compliant video visit",
                        "Comprehensive medical history review",
                        "Discussion of all treatment options",
                        "Insurance coverage discussion",
                        "Personalized plan and next steps by email",
                      ].map((item, i) => (
                        <li key={i} className="flex items-start gap-2.5 text-sm text-foreground">
                          <CheckCircle2 className="w-4 h-4 text-magenta shrink-0 mt-0.5" />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="bg-magenta/5 rounded-xl p-4 text-sm text-muted-foreground mb-6 flex items-start gap-2">
                    <Shield className="w-4 h-4 text-magenta shrink-0 mt-0.5" />
                    <span>Works on any device — phone, tablet, or computer. No app download needed.</span>
                  </div>

                  {/* Calendar embed */}
                  <div className="mt-auto">
                    <div
                      id="totalflow-calendar-virtual"
                      className="min-h-[300px] bg-gray-50 rounded-2xl border border-dashed border-gray-200 flex flex-col items-center justify-center p-8 text-center"
                      data-testid="calendar-virtual"
                    >
                      <Calendar className="w-12 h-12 text-navy/30 mx-auto mb-4" />
                      <h4 className="font-semibold text-navy mb-2">Online Scheduling Coming Soon</h4>
                      <p className="text-sm text-muted-foreground mb-4">In the meantime, call us to schedule your virtual visit.</p>
                      <a href="tel:+13148877605" className="inline-flex items-center gap-2 bg-magenta hover:bg-magenta-light text-white font-semibold px-6 py-3 rounded-full transition-all">
                        <Phone className="w-4 h-4" /> Call (314) 887-7605
                      </a>
                    </div>
                    <div className="flex items-center justify-center gap-1.5 mt-2">
                      <span className="text-xs text-muted-foreground">Powered by</span>
                      <span className="text-xs font-semibold text-navy">TotalFlow AI</span>
                    </div>
                  </div>
                </div>
              </div>
            </ScrollFadeIn>
          </div>
        </div>
      </section>

      {/* What Happens After You Book */}
      <section className="py-16 md:py-24 bg-gray-50">
        <div className="max-w-5xl mx-auto px-4">
          <ScrollFadeIn>
            <div className="text-center mb-14">
              <span className="inline-block text-sm font-semibold text-magenta uppercase tracking-widest mb-3">
                Next Steps
              </span>
              <h2 className="font-serif text-3xl md:text-4xl font-bold text-navy mb-4">
                What Happens After You Book
              </h2>
              <p className="text-muted-foreground text-lg max-w-xl mx-auto">
                We make every step easy so you can focus on what matters — your health.
              </p>
            </div>
          </ScrollFadeIn>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                num: "1",
                title: "Instant Confirmation",
                desc: "You'll receive a confirmation email and calendar invite immediately after booking.",
                color: "bg-navy",
              },
              {
                num: "2",
                title: "Intake Forms",
                desc: "We'll email you a short health questionnaire to complete before your visit.",
                color: "bg-magenta",
              },
              {
                num: "3",
                title: "Reminder & Link",
                desc: "We'll send a reminder 24 hours and 1 hour before your appointment with your video link (if virtual).",
                color: "bg-teal",
              },
              {
                num: "4",
                title: "Your Consultation",
                desc: "Meet with Dr. Lange. Leave with a clear, personalized weight loss plan and next steps.",
                color: "bg-gold",
              },
            ].map((step, i) => (
              <ScrollFadeIn key={i} delay={i * 80}>
                <div className="bg-white rounded-2xl border border-gray-100 p-6 shadow-sm hover:shadow-md transition-all" data-testid={`after-book-step-${i}`}>
                  <div className={`w-10 h-10 rounded-full ${step.color} text-white font-bold text-lg flex items-center justify-center mb-4`}>
                    {step.num}
                  </div>
                  <h3 className="font-serif font-bold text-navy text-lg mb-2">{step.title}</h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">{step.desc}</p>
                </div>
              </ScrollFadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* Lead Form — prefer a callback */}
      <section className="py-16 md:py-20 bg-white">
        <div className="max-w-2xl mx-auto px-4">
          <ScrollFadeIn>
            <div className="text-center mb-8">
              <span className="inline-block text-sm font-semibold text-magenta uppercase tracking-widest mb-3">
                Prefer a Callback?
              </span>
              <h2 className="font-serif text-2xl md:text-3xl font-bold text-navy mb-3">
                Have Us Reach Out to You
              </h2>
              <p className="text-muted-foreground">
                Fill in your info below and a member of our team will call you within one business day to help you get scheduled.
              </p>
            </div>
          </ScrollFadeIn>
          <ScrollFadeIn delay={100}>
            <LeadForm variant="sidebar" title="" />
          </ScrollFadeIn>
        </div>
      </section>

      {/* Bottom CTA */}
      <section className="py-10 bg-navy">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <p className="text-white/80 text-sm mb-2">Questions before booking?</p>
          <a
            href={PRACTICE.phoneLink}
            className="inline-flex items-center gap-2 text-white font-bold text-lg hover:text-gold transition-colors"
            data-testid="link-phone-bottom"
          >
            <Phone className="w-5 h-5" /> {PRACTICE.phone}
          </a>
        </div>
      </section>
    </div>
  );
}
