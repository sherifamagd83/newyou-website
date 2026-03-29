import { Link } from "wouter";
import { ExternalLink, FileText, ShoppingBag, CreditCard, Users, Calendar, Download, ArrowRight } from "lucide-react";
import ScrollFadeIn from "@/components/ScrollFadeIn";
import { PRACTICE, SUPPORT_GROUP_TOPICS_2026 } from "@/lib/constants";

export default function ForPatients() {
  return (
    <div>
      <section className="hero-gradient py-16 md:py-24 text-center relative overflow-hidden">
        <div className="max-w-3xl mx-auto px-4 relative">
          <h1 className="font-serif text-4xl md:text-5xl font-bold text-white mb-4">For Patients</h1>
          <p className="text-white/80 text-lg">Access your patient portal, pay bills, order vitamins, and find resources for your weight loss journey.</p>
        </div>
      </section>

      {/* Quick Links Grid */}
      <section className="py-20 bg-white">
        <div className="max-w-5xl mx-auto px-4">
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { icon: FileText, title: "Patient Portal", desc: "Access your medical records, lab results, and communicate with our team.", url: PRACTICE.portalUrl, color: "bg-blue-50 text-blue-600" },
              { icon: CreditCard, title: "Online Bill Pay", desc: "Make a payment on your account quickly and securely.", url: PRACTICE.billPayUrl, color: "bg-green-50 text-green-600" },
              { icon: ShoppingBag, title: "Vitamin Store", desc: "Order bariatric vitamins and supplements from our online store.", url: PRACTICE.vitaminStoreUrl, color: "bg-purple-50 text-purple-600" },
            ].map(({ icon: Icon, title, desc, url, color }, i) => (
              <ScrollFadeIn key={title} delay={i * 100}>
                <a href={url} target="_blank" rel="noopener noreferrer"
                  className="block bg-white rounded-2xl border shadow-sm p-6 card-hover group" data-testid={`link-patient-${title.toLowerCase().replace(/\s+/g, "-")}`}>
                  <div className={`w-12 h-12 rounded-xl ${color} flex items-center justify-center mb-4`}>
                    <Icon className="w-6 h-6" />
                  </div>
                  <h3 className="font-semibold text-navy text-lg mb-2 group-hover:text-magenta transition-colors">{title}</h3>
                  <p className="text-muted-foreground text-sm mb-3">{desc}</p>
                  <span className="inline-flex items-center gap-1 text-magenta text-sm font-medium">
                    Open <ExternalLink className="w-3.5 h-3.5" />
                  </span>
                </a>
              </ScrollFadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* Support Groups */}
      <section className="section-gradient py-20">
        <div className="max-w-5xl mx-auto px-4">
          <ScrollFadeIn className="text-center mb-12">
            <div className="w-14 h-14 rounded-xl bg-magenta/10 flex items-center justify-center mx-auto mb-4">
              <Users className="w-7 h-7 text-magenta" />
            </div>
            <h2 className="font-serif text-3xl font-bold text-navy mb-3">Monthly Support Groups</h2>
            <p className="text-muted-foreground">Every 3rd Tuesday of the month | Free for all patients | Led by Lora Grabow, LMSW</p>
          </ScrollFadeIn>
          <ScrollFadeIn>
            <div className="bg-white rounded-2xl border shadow-sm overflow-hidden">
              <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-px bg-gray-100">
                {SUPPORT_GROUP_TOPICS_2026.map((item) => (
                  <div key={item.month} className="bg-white p-4">
                    <div className="flex items-center gap-3">
                      <Calendar className="w-4 h-4 text-magenta shrink-0" />
                      <div>
                        <p className="font-semibold text-navy text-sm">{item.month} 2026</p>
                        <p className="text-xs text-muted-foreground">{item.topic}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </ScrollFadeIn>
        </div>
      </section>

      {/* Downloadable Forms & Guides */}
      <section className="py-20 bg-white">
        <div className="max-w-5xl mx-auto px-4">
          <ScrollFadeIn className="text-center mb-12">
            <h2 className="font-serif text-3xl font-bold text-navy mb-3">Patient Resources</h2>
            <p className="text-muted-foreground">Downloadable forms, nutrition guides, and educational materials.</p>
          </ScrollFadeIn>
          <div className="grid sm:grid-cols-2 gap-4">
            {[
              { title: "New Patient Registration Forms", desc: "Complete these forms before your first visit." },
              { title: "Pre-Op Diet Guide", desc: "Nutrition guidelines to follow before your surgery." },
              { title: "Post-Op Diet Stages", desc: "Week-by-week nutrition guide after bariatric surgery." },
              { title: "Vitamin & Supplement Guide", desc: "Recommended vitamins and dosages for life after surgery." },
              { title: "Exercise Progression Guide", desc: "Safe return to exercise after weight loss surgery." },
              { title: "Insurance Pre-Authorization Checklist", desc: "What you need to get approved by your insurance." },
            ].map((form, i) => (
              <ScrollFadeIn key={form.title} delay={i * 80}>
                <div className="flex items-center gap-4 bg-gray-50 rounded-xl p-4 border hover:border-magenta/30 transition-colors">
                  <Download className="w-8 h-8 text-magenta shrink-0" />
                  <div className="flex-1">
                    <h3 className="font-medium text-navy text-sm">{form.title}</h3>
                    <p className="text-xs text-muted-foreground">{form.desc}</p>
                  </div>
                  <button className="text-magenta hover:text-magenta-light text-sm font-medium" data-testid={`button-download-${i}`}>
                    PDF
                  </button>
                </div>
              </ScrollFadeIn>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
