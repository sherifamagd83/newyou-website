import { FileText, ExternalLink, ClipboardList, UserCheck, Shield } from "lucide-react";
import PageHero from "@/components/PageHero";
import ScrollFadeIn from "@/components/ScrollFadeIn";

const FORMS = [
  { title: "New Patient Registration", desc: "Complete before your first appointment. Includes medical history, medications, and insurance information.", icon: ClipboardList },
  { title: "Health History Questionnaire", desc: "Detailed health and weight loss history to help Dr. Lange create your personalized plan.", icon: UserCheck },
  { title: "Insurance Authorization Form", desc: "Required for insurance pre-authorization of bariatric procedures.", icon: Shield },
  { title: "HIPAA Consent & Privacy Notice", desc: "Acknowledgment of privacy practices and consent for treatment.", icon: FileText },
];

export default function PatientForms() {
  return (
    <div>
      <PageHero
        image="/images/hero/hero-surgery.jpg"
        badge="For New Patients"
        title="Patient Forms"
        subtitle="Save time at your appointment by completing your forms ahead of time."
      />

      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-3xl mx-auto px-4">
          <ScrollFadeIn className="text-center mb-12">
            <p className="text-muted-foreground text-lg">Complete these forms before your first visit, or arrive 15 minutes early to fill them out in our office. You can also access your records anytime through the patient portal.</p>
          </ScrollFadeIn>

          <div className="space-y-4 mb-12">
            {FORMS.map((form, i) => (
              <ScrollFadeIn key={form.title} delay={i * 100}>
                <div className="bg-white rounded-2xl border border-gray-100 p-6 flex items-start gap-4 shadow-sm hover:shadow-md transition-all">
                  <div className="w-12 h-12 rounded-xl bg-navy flex items-center justify-center shrink-0">
                    <form.icon className="w-6 h-6 text-white" />
                  </div>
                  <div className="flex-1">
                    <h3 className="font-semibold text-navy mb-1">{form.title}</h3>
                    <p className="text-sm text-muted-foreground">{form.desc}</p>
                  </div>
                  <span className="text-xs bg-gray-100 text-gray-500 px-3 py-1.5 rounded-full whitespace-nowrap">Available at visit</span>
                </div>
              </ScrollFadeIn>
            ))}
          </div>

          <ScrollFadeIn>
            <div className="bg-navy rounded-2xl p-8 text-center">
              <h3 className="font-serif text-xl font-bold text-white mb-3">Access Your Patient Portal</h3>
              <p className="text-white/70 text-sm mb-6">View records, message your care team, and manage your appointments online.</p>
              <a
                href="https://mycw217.ecwcloud.com/portal26390/jsp/100mp/login_otp.jsp"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-magenta hover:bg-magenta-light text-white font-semibold px-6 py-3 rounded-full transition-all"
              >
                Open Patient Portal <ExternalLink className="w-4 h-4" />
              </a>
            </div>
          </ScrollFadeIn>
        </div>
      </section>
    </div>
  );
}
