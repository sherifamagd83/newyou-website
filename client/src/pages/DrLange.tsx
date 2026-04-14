import { Link } from "wouter";
import { ArrowRight, Award, Building2, GraduationCap, Heart, Shield, Star, BookOpen } from "lucide-react";
import ScrollFadeIn from "@/components/ScrollFadeIn";
import { DOCTOR, TEAM } from "@/lib/constants";
import { img } from "@/lib/img";
import PageHero from "@/components/PageHero";

const teamImages: Record<string, string> = {
  "Dr. Matthew A. Lange, DO": img("/images/team/dr-lange.jpg"),
  "Lora Grabow, LMSW": img("/images/team/lora-grabow.jpg"),
  "Barb Warmbrodt": img("/images/team/barb-warmbrodt.jpg"),
  "Kristina Mercer, CPC": img("/images/team/kristina-mercer.jpg"),
};

export default function DrLange() {
  return (
    <div>
      <PageHero image="/images/hero/hero-doctor.jpg" badge="Top Bariatric Surgeon in St. Louis" title={`Meet ${DOCTOR.name}, ${DOCTOR.credentials}`} subtitle={DOCTOR.title} />

      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid lg:grid-cols-5 gap-12">
            {/* Photo column */}
            <div className="lg:col-span-2">
              <ScrollFadeIn>
                <div className="sticky top-24">
                  <div className="aspect-[3/4] rounded-2xl overflow-hidden mb-6">
                    <img
                      src={img("/images/team/dr-lange.jpg")}
                      alt={`${DOCTOR.name}, ${DOCTOR.credentials}`}
                      className="w-full h-full object-cover rounded-2xl"
                    />
                  </div>
                  {/* Credentials badges */}
                  <div className="grid grid-cols-2 gap-3">
                    {[
                      { icon: Shield, label: "Board Certified" },
                      { icon: Award, label: "ASMBS Member" },
                      { icon: Building2, label: "Mercy Hospitals" },
                      { icon: Heart, label: "St. Luke's" },
                    ].map(({ icon: Icon, label }) => (
                      <div key={label} className="flex items-center gap-2 bg-navy/5 rounded-xl p-3">
                        <Icon className="w-4 h-4 text-magenta" />
                        <span className="text-xs font-medium text-navy">{label}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </ScrollFadeIn>
            </div>

            {/* Bio column */}
            <div className="lg:col-span-3 space-y-10">
              <ScrollFadeIn>
                <h2 className="font-serif text-2xl font-bold text-navy mb-4">About Dr. Lange</h2>
                <div className="prose prose-gray max-w-none">
                  <p className="text-muted-foreground leading-relaxed text-lg">
                    Dr. Matthew A. Lange is a board-certified bariatric and general surgeon serving as Medical Director of New You Surgical Weight Loss & General Surgery in St. Louis, Missouri. With over 8 years of surgical experience and fellowship training at the prestigious Cleveland Clinic Florida, Dr. Lange is recognized as one of the region's top weight loss surgeons.
                  </p>
                  <p className="text-muted-foreground leading-relaxed">
                    Dr. Lange's philosophy centers on providing each patient with a comprehensive, personalized approach to weight loss. He believes that lasting transformation requires more than surgery — it demands a multidisciplinary team, behavioral support, and a genuine, caring relationship between surgeon and patient.
                  </p>
                  <p className="text-muted-foreground leading-relaxed">
                    Known for his exceptional surgical skill, calm bedside manner, and commitment to patient education, Dr. Lange takes the time to ensure every patient fully understands their options before making a decision. His expertise spans the full spectrum of bariatric procedures, with particular proficiency in complex revision and conversion surgeries.
                  </p>
                </div>
              </ScrollFadeIn>

              <ScrollFadeIn>
                <h2 className="font-serif text-2xl font-bold text-navy mb-4">Education & Training</h2>
                <div className="space-y-4">
                  {[
                    { icon: GraduationCap, title: "Fellowship — Bariatric Surgery", place: "Cleveland Clinic Florida", desc: "Advanced surgical training at one of the nation's top bariatric programs, including complex revision and metabolic surgery." },
                    { icon: BookOpen, title: "Residency — General Surgery", place: "Michigan State University / Genesys Regional Medical Center", desc: "Comprehensive surgical residency with broad exposure to advanced laparoscopic techniques." },
                    { icon: GraduationCap, title: "Medical School", place: "A.T. Still University — Kirksville College of Osteopathic Medicine", desc: "Doctor of Osteopathic Medicine (DO) with a holistic approach to patient care." },
                  ].map((edu) => (
                    <div key={edu.title} className="flex gap-4 items-start bg-gray-50 rounded-xl p-5">
                      <div className="w-10 h-10 rounded-lg bg-navy flex items-center justify-center shrink-0">
                        <edu.icon className="w-5 h-5 text-white" />
                      </div>
                      <div>
                        <h3 className="font-semibold text-navy">{edu.title}</h3>
                        <p className="text-magenta font-medium text-sm">{edu.place}</p>
                        <p className="text-sm text-muted-foreground mt-1">{edu.desc}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </ScrollFadeIn>

              <ScrollFadeIn>
                <h2 className="font-serif text-2xl font-bold text-navy mb-4">Hospital Affiliations</h2>
                <div className="grid sm:grid-cols-2 gap-4">
                  {DOCTOR.affiliations.map((aff) => (
                    <div key={aff} className="flex items-center gap-3 bg-navy/5 rounded-xl p-4">
                      <Building2 className="w-6 h-6 text-navy" />
                      <div>
                        <p className="font-semibold text-navy">{aff}</p>
                        <p className="text-xs text-muted-foreground">St. Louis, Missouri</p>
                      </div>
                    </div>
                  ))}
                </div>
              </ScrollFadeIn>

              <ScrollFadeIn>
                <div className="bg-navy rounded-2xl p-8 text-white">
                  <div className="flex gap-1 mb-3">{[1,2,3,4,5].map(s => <Star key={s} className="w-5 h-5 fill-yellow-500 text-yellow-500" />)}</div>
                  <p className="text-lg leading-relaxed italic mb-4">"From the very first consultation, Dr. Lange made me feel heard. He explained every option, answered every question, and never once made me feel rushed. His skill in the OR is matched only by his compassion as a person."</p>
                  <p className="font-semibold">— Robert W., Patient</p>
                </div>
              </ScrollFadeIn>
            </div>
          </div>
        </div>
      </section>

      {/* Meet the Team */}
      <section className="section-gradient py-20">
        <div className="max-w-7xl mx-auto px-4">
          <ScrollFadeIn className="text-center mb-12">
            <h2 className="font-serif text-3xl font-bold text-navy mb-4">Meet the Team</h2>
            <p className="text-muted-foreground">Your care is supported by a dedicated multidisciplinary team.</p>
          </ScrollFadeIn>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {TEAM.map((member, i) => (
              <ScrollFadeIn key={member.name} delay={i * 100}>
                <div className="bg-white rounded-2xl border shadow-sm p-6 text-center card-hover">
                  <img
                    src={teamImages[member.name]}
                    alt={member.name}
                    className="w-24 h-24 rounded-full object-cover mx-auto mb-4"
                  />
                  <h3 className="font-semibold text-navy text-lg">{member.name}</h3>
                  <p className="text-magenta text-sm font-medium mb-3">{member.role}</p>
                  <p className="text-muted-foreground text-sm leading-relaxed">{member.bio}</p>
                </div>
              </ScrollFadeIn>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 bg-white text-center">
        <div className="max-w-2xl mx-auto px-4">
          <h2 className="font-serif text-3xl font-bold text-navy mb-4">Ready to Meet Dr. Lange?</h2>
          <p className="text-muted-foreground mb-8">Schedule a no-obligation consultation to discuss your weight loss goals.</p>
          <Link href="/request-consultation"
            className="inline-flex items-center gap-2 bg-magenta hover:bg-magenta-light text-white font-semibold px-8 py-4 rounded-full transition-all shadow-lg text-lg"
            data-testid="link-dr-lange-cta">
            Request Consultation <ArrowRight className="w-5 h-5" />
          </Link>
        </div>
      </section>
    </div>
  );
}
