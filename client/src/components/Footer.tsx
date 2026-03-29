import { Link } from "wouter";
import { Phone, Mail, MapPin, Clock, Facebook, Instagram, Youtube, Shield, Award, Building2, Heart } from "lucide-react";
import { PRACTICE, DOCTOR } from "@/lib/constants";

export default function Footer() {
  return (
    <>
      {/* CTA Banner */}
      <section className="hero-gradient py-16 text-center">
        <div className="max-w-3xl mx-auto px-4">
          <h2 className="font-serif text-3xl md:text-4xl font-bold text-white mb-4">
            Take the First Step — See If You Qualify
          </h2>
          <p className="text-white/80 text-lg mb-8">
            Join the hundreds of patients who have transformed their lives at New You. Your journey to a healthier, happier you starts with a single step.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/request-consultation"
              className="bg-magenta hover:bg-magenta-light text-white font-semibold px-8 py-4 rounded-full text-lg transition-all shadow-lg hover:shadow-xl inline-block"
              data-testid="link-footer-cta-consultation">
              Request Free Consultation
            </Link>
            <a href={PRACTICE.phoneLink}
              className="bg-white/10 hover:bg-white/20 text-white font-semibold px-8 py-4 rounded-full text-lg transition-all border border-white/20 inline-flex items-center justify-center gap-2"
              data-testid="link-footer-cta-phone">
              <Phone className="w-5 h-5" /> Call {PRACTICE.phone}
            </a>
          </div>
        </div>
      </section>

      {/* Trust Badges */}
      <div className="bg-navy py-6 border-t border-white/10">
        <div className="max-w-7xl mx-auto px-4 flex flex-wrap items-center justify-center gap-6 md:gap-10">
          {[
            { icon: Shield, label: "Board Certified" },
            { icon: Award, label: "ASMBS Member" },
            { icon: Building2, label: "Mercy Hospital Affiliate" },
            { icon: Heart, label: "St. Luke's Affiliate" },
          ].map(({ icon: Icon, label }) => (
            <div key={label} className="flex items-center gap-2 text-white/70">
              <Icon className="w-5 h-5 text-gold" />
              <span className="text-sm font-medium">{label}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Main Footer */}
      <footer className="bg-navy text-white">
        <div className="max-w-7xl mx-auto px-4 py-12 md:py-16">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
            {/* Column 1 — About */}
            <div>
              <h3 className="font-serif text-xl font-bold mb-4">New <span className="text-magenta-light">You</span></h3>
              <p className="text-white/70 text-sm leading-relaxed mb-4">
                Missouri's premier bariatric surgery center led by {DOCTOR.name}, {DOCTOR.credentials}. Comprehensive surgical and non-surgical weight loss solutions.
              </p>
              <div className="flex gap-3 mt-4">
                {[Facebook, Instagram, Youtube].map((Icon, i) => (
                  <a key={i} href="#" target="_blank" rel="noopener noreferrer"
                    className="w-9 h-9 rounded-full bg-white/10 hover:bg-magenta flex items-center justify-center transition-colors">
                    <Icon className="w-4 h-4" />
                  </a>
                ))}
              </div>
            </div>

            {/* Column 2 — Quick Links */}
            <div>
              <h4 className="font-semibold text-white mb-4">Quick Links</h4>
              <ul className="space-y-2.5 text-sm text-white/70">
                {[
                  { label: "Start Here", href: "/start-here" },
                  { label: "Request Consultation", href: "/request-consultation" },
                  { label: "Meet Dr. Lange", href: "/dr-lange" },
                  { label: "Insurance & Financing", href: "/insurance" },
                  { label: "Patient Portal", href: PRACTICE.portalUrl, external: true },
                  { label: "Online Bill Pay", href: PRACTICE.billPayUrl, external: true },
                  { label: "Vitamin Store", href: PRACTICE.vitaminStoreUrl, external: true },
                ].map(({ label, href, external }) => (
                  <li key={label}>
                    {external ? (
                      <a href={href} target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">{label}</a>
                    ) : (
                      <Link href={href} className="hover:text-white transition-colors">{label}</Link>
                    )}
                  </li>
                ))}
              </ul>
            </div>

            {/* Column 3 — Procedures */}
            <div>
              <h4 className="font-semibold text-white mb-4">Procedures</h4>
              <ul className="space-y-2.5 text-sm text-white/70">
                {[
                  { label: "Gastric Sleeve", href: "/procedures/gastric-sleeve" },
                  { label: "Gastric Bypass", href: "/procedures/gastric-bypass" },
                  { label: "Revision Surgery", href: "/procedures/revision-surgery" },
                  { label: "GLP-1 Program", href: "/glp1" },
                  { label: "ORBERA® Balloon", href: "/non-surgical" },
                  { label: "REFRAME Coaching", href: "/reframe" },
                  { label: "Aesthetics", href: "/aesthetics" },
                ].map(({ label, href }) => (
                  <li key={label}>
                    <Link href={href} className="hover:text-white transition-colors">{label}</Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Column 4 — Contact */}
            <div>
              <h4 className="font-semibold text-white mb-4">Contact Us</h4>
              <ul className="space-y-3 text-sm text-white/70">
                <li className="flex items-start gap-2">
                  <MapPin className="w-4 h-4 mt-0.5 shrink-0 text-gold" />
                  <a href={PRACTICE.mapUrl} target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">
                    {PRACTICE.address}<br />{PRACTICE.city}, {PRACTICE.state} {PRACTICE.zip}
                  </a>
                </li>
                <li className="flex items-center gap-2">
                  <Phone className="w-4 h-4 shrink-0 text-gold" />
                  <a href={PRACTICE.phoneLink} className="hover:text-white transition-colors">{PRACTICE.phone}</a>
                </li>
                <li className="flex items-center gap-2">
                  <Mail className="w-4 h-4 shrink-0 text-gold" />
                  <a href={`mailto:${PRACTICE.email}`} className="hover:text-white transition-colors">{PRACTICE.email}</a>
                </li>
                <li className="flex items-start gap-2">
                  <Clock className="w-4 h-4 mt-0.5 shrink-0 text-gold" />
                  <div>
                    Mon - Fri: 8:00 AM - 5:00 PM<br />
                    Sat - Sun: Closed
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-white/10 py-6">
          <div className="max-w-7xl mx-auto px-4 flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-white/50">
            <p>© {new Date().getFullYear()} {PRACTICE.fullName}. All rights reserved.</p>
            <div className="flex gap-4">
              <Link href="/privacy" className="hover:text-white transition-colors">Privacy Policy</Link>
              <Link href="/terms" className="hover:text-white transition-colors">Terms of Service</Link>
              <Link href="/accessibility" className="hover:text-white transition-colors">Accessibility</Link>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}
