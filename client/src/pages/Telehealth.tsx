import { Link } from "wouter";
import {
  Video, Calendar, Shield, Clock, CheckCircle2, ArrowRight,
  Monitor, Smartphone, FileText, Heart, Phone,
} from "lucide-react";
import ScrollFadeIn from "@/components/ScrollFadeIn";
import PageHero from "@/components/PageHero";
import LeadForm from "@/components/LeadForm";
import { PRACTICE } from "@/lib/constants";

export default function Telehealth() {
  return (
    <div>
      <PageHero
        image="/images/hero/hero-surgery.jpg"
        badge="Virtual Care"
        title="Telehealth Consultations"
        subtitle="Connect with Dr. Lange from the comfort of your home. Virtual consultations available for new and existing patients."
      />

      {/* Benefits Section */}
      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <ScrollFadeIn>
            <div className="text-center max-w-2xl mx-auto mb-14">
              <span className="inline-block text-sm font-semibold text-magenta uppercase tracking-widest mb-3">
                Why Telehealth
              </span>
              <h2 className="font-serif text-3xl md:text-4xl font-bold text-navy mb-4">
                Expert Care — No Drive Required
              </h2>
              <p className="text-muted-foreground text-lg">
                Access the same world-class bariatric expertise from anywhere in Missouri. Our virtual visits deliver the same quality of care as an in-person consultation.
              </p>
            </div>
          </ScrollFadeIn>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                icon: <Clock className="w-6 h-6 text-teal" />,
                title: "No Travel Time",
                desc: "Skip the commute. Meet with Dr. Lange from your living room, office, or anywhere with an internet connection.",
              },
              {
                icon: <Shield className="w-6 h-6 text-magenta" />,
                title: "Same Quality Care",
                desc: "Our telehealth visits follow the same thorough protocols as in-person appointments — nothing is cut short.",
              },
              {
                icon: <Heart className="w-6 h-6 text-gold" />,
                title: "Insurance Accepted",
                desc: "Most major insurance plans cover telehealth consultations. Our team will verify your coverage before your visit.",
              },
              {
                icon: <Calendar className="w-6 h-6 text-navy" />,
                title: "Easy Follow-Ups",
                desc: "Post-surgery check-ins, progress reviews, and medication management — all available virtually for your convenience.",
              },
            ].map((benefit, i) => (
              <ScrollFadeIn key={i} delay={i * 80}>
                <div className="bg-gray-50 rounded-2xl p-6 border border-gray-100 hover:border-magenta/20 hover:shadow-md transition-all" data-testid={`card-benefit-${i}`}>
                  <div className="w-12 h-12 rounded-xl bg-white shadow-sm flex items-center justify-center mb-4">
                    {benefit.icon}
                  </div>
                  <h3 className="font-serif font-bold text-navy text-lg mb-2">{benefit.title}</h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">{benefit.desc}</p>
                </div>
              </ScrollFadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-16 md:py-24 bg-navy">
        <div className="max-w-5xl mx-auto px-4">
          <ScrollFadeIn>
            <div className="text-center mb-14">
              <span className="inline-block text-sm font-semibold text-gold uppercase tracking-widest mb-3">
                Simple Process
              </span>
              <h2 className="font-serif text-3xl md:text-4xl font-bold text-white mb-4">
                How It Works
              </h2>
              <p className="text-white/70 text-lg max-w-xl mx-auto">
                Three simple steps from booking to your personalized weight loss plan.
              </p>
            </div>
          </ScrollFadeIn>

          <div className="grid md:grid-cols-3 gap-8 relative">
            {/* Connector line (desktop) */}
            <div className="hidden md:block absolute top-10 left-1/3 right-1/3 h-0.5 bg-white/10" aria-hidden="true" />

            {[
              {
                step: "01",
                icon: <Calendar className="w-8 h-8 text-white" />,
                title: "Book Online",
                desc: "Choose a time that works for you using our online scheduler. Available mornings, afternoons, and select evenings.",
                cta: null,
              },
              {
                step: "02",
                icon: <Video className="w-8 h-8 text-white" />,
                title: "Virtual Visit",
                desc: "Connect via secure video link from your phone, tablet, or computer. No app downloads required — just click the link we send you.",
                cta: null,
              },
              {
                step: "03",
                icon: <FileText className="w-8 h-8 text-white" />,
                title: "Your Plan",
                desc: "Receive your personalized weight loss plan, next steps, and any referrals or prescriptions — all within 24 hours.",
                cta: null,
              },
            ].map((step, i) => (
              <ScrollFadeIn key={i} delay={i * 100}>
                <div className="relative bg-white/[0.06] border border-white/10 rounded-2xl p-8 text-center hover:bg-white/[0.09] transition-all" data-testid={`card-step-${i}`}>
                  <div className="absolute -top-4 left-1/2 -translate-x-1/2 w-8 h-8 rounded-full bg-magenta flex items-center justify-center text-white text-xs font-bold shadow-lg">
                    {step.step}
                  </div>
                  <div className="w-16 h-16 rounded-2xl bg-white/10 flex items-center justify-center mx-auto mb-5 mt-2">
                    {step.icon}
                  </div>
                  <h3 className="font-serif text-xl font-bold text-white mb-3">{step.title}</h3>
                  <p className="text-white/65 text-sm leading-relaxed">{step.desc}</p>
                </div>
              </ScrollFadeIn>
            ))}
          </div>

          <ScrollFadeIn delay={300}>
            <div className="text-center mt-10">
              <Link
                href="/book"
                className="inline-flex items-center gap-2 bg-magenta hover:bg-magenta-light text-white font-bold px-8 py-4 rounded-full transition-all shadow-lg hover:shadow-xl text-base"
                data-testid="link-book-telehealth"
              >
                Book Your Virtual Visit <ArrowRight className="w-5 h-5" />
              </Link>
            </div>
          </ScrollFadeIn>
        </div>
      </section>

      {/* Calendar Booking Embed */}
      <section className="py-16 md:py-24 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4">
          <ScrollFadeIn>
            <div className="text-center mb-10">
              <span className="inline-block text-sm font-semibold text-magenta uppercase tracking-widest mb-3">
                Schedule Now
              </span>
              <h2 className="font-serif text-3xl md:text-4xl font-bold text-navy mb-4">
                Book Your Telehealth Appointment
              </h2>
              <p className="text-muted-foreground text-lg">
                Select a date and time that works for you. Appointments confirmed instantly.
              </p>
            </div>
          </ScrollFadeIn>

          <ScrollFadeIn delay={100}>
            <div className="bg-white rounded-3xl border border-gray-200 shadow-xl overflow-hidden">
              {/* Calendar embed placeholder */}
              <div
                id="totalflow-calendar-embed"
                className="min-h-[480px] flex flex-col items-center justify-center p-12 text-center"
                data-testid="calendar-embed-telehealth"
              >
                <div className="bg-gray-50 border-2 border-dashed border-gray-200 rounded-2xl p-12 text-center">
                  <Calendar className="w-12 h-12 text-navy/30 mx-auto mb-4" />
                  <h4 className="font-semibold text-navy mb-2">Online Scheduling Coming Soon</h4>
                  <p className="text-sm text-muted-foreground mb-4">In the meantime, call us to schedule your virtual visit.</p>
                  <a href="tel:+13148877605" className="inline-flex items-center gap-2 bg-magenta hover:bg-magenta-light text-white font-semibold px-6 py-3 rounded-full transition-all">
                    <Phone className="w-4 h-4" /> Call (314) 887-7605
                  </a>
                </div>
              </div>
              <div className="border-t bg-gray-50 px-6 py-3 flex items-center justify-center gap-2">
                <span className="text-xs text-muted-foreground">Powered by</span>
                <span className="text-xs font-semibold text-navy">TotalFlow AI</span>
              </div>
            </div>
          </ScrollFadeIn>
        </div>
      </section>

      {/* What to Prepare */}
      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-5xl mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-start">
            <ScrollFadeIn>
              <div>
                <span className="inline-block text-sm font-semibold text-magenta uppercase tracking-widest mb-3">
                  Be Ready
                </span>
                <h2 className="font-serif text-3xl md:text-4xl font-bold text-navy mb-6">
                  What to Prepare for Your Virtual Visit
                </h2>
                <p className="text-muted-foreground leading-relaxed mb-8">
                  A little preparation helps us make the most of your appointment time. Have these items ready before your visit begins.
                </p>

                <div className="space-y-4">
                  {[
                    {
                      icon: <Monitor className="w-5 h-5 text-teal" />,
                      label: "Device & Connection",
                      detail: "Smartphone, tablet, or computer with a camera and stable internet. Chrome or Safari work best.",
                    },
                    {
                      icon: <FileText className="w-5 h-5 text-magenta" />,
                      label: "Insurance Card",
                      detail: "Have your insurance card or member ID handy for verification.",
                    },
                    {
                      icon: <Heart className="w-5 h-5 text-gold" />,
                      label: "Medical History",
                      detail: "List of current medications, past surgeries, and any relevant diagnoses.",
                    },
                    {
                      icon: <Smartphone className="w-5 h-5 text-navy" />,
                      label: "Quiet Private Space",
                      detail: "Find a quiet, private location where you feel comfortable discussing your health.",
                    },
                    {
                      icon: <CheckCircle2 className="w-5 h-5 text-teal" />,
                      label: "Your Questions",
                      detail: "Write down your top questions in advance — we want to address everything on your mind.",
                    },
                    {
                      icon: <Shield className="w-5 h-5 text-magenta" />,
                      label: "ID for Verification",
                      detail: "A government-issued photo ID to confirm your identity at the start of the visit.",
                    },
                  ].map((item, i) => (
                    <div key={i} className="flex items-start gap-4" data-testid={`checklist-item-${i}`}>
                      <div className="w-10 h-10 rounded-xl bg-gray-50 flex items-center justify-center shrink-0">
                        {item.icon}
                      </div>
                      <div>
                        <div className="font-semibold text-navy text-sm">{item.label}</div>
                        <div className="text-muted-foreground text-sm leading-relaxed">{item.detail}</div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </ScrollFadeIn>

            {/* Lead Form */}
            <ScrollFadeIn delay={150}>
              <div className="sticky top-24">
                <div className="bg-navy/3 rounded-2xl p-1">
                  <LeadForm
                    variant="sidebar"
                    title="Prefer a Callback Instead?"
                    className="rounded-xl"
                  />
                </div>
                <p className="text-center text-xs text-muted-foreground mt-4">
                  Our team will call you within one business day to schedule your virtual visit.
                </p>
              </div>
            </ScrollFadeIn>
          </div>
        </div>
      </section>

      {/* Device compatibility strip */}
      <section className="py-10 bg-navy">
        <div className="max-w-5xl mx-auto px-4">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-6 text-white">
            <p className="font-serif text-xl font-bold">Works on any device. No app needed.</p>
            <div className="flex items-center gap-8 text-white/70 text-sm">
              <span className="flex items-center gap-2"><Monitor className="w-5 h-5" /> Desktop</span>
              <span className="flex items-center gap-2"><Smartphone className="w-5 h-5" /> Mobile</span>
              <span className="flex items-center gap-2"><Video className="w-5 h-5" /> Tablet</span>
            </div>
            <Link
              href="/book"
              className="bg-magenta hover:bg-magenta-light text-white font-semibold px-6 py-3 rounded-full transition-all flex items-center gap-2 shrink-0"
              data-testid="link-book-bottom"
            >
              Book Now <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
