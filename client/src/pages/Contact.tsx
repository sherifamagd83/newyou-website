import { useState } from "react";
import { Phone, Mail, MapPin, Clock, Printer, PhoneForwarded, CheckCircle2 } from "lucide-react";
import ScrollFadeIn from "@/components/ScrollFadeIn";
import { PRACTICE } from "@/lib/constants";

export default function Contact() {
  const [submitted, setSubmitted] = useState(false);

  return (
    <div>
      <section className="hero-gradient py-16 md:py-20 text-center relative overflow-hidden">
        <div className="max-w-3xl mx-auto px-4 relative">
          <h1 className="font-serif text-4xl md:text-5xl font-bold text-white mb-4">Contact Us</h1>
          <p className="text-white/80 text-lg">We'd love to hear from you. Reach out by phone, email, or visit us in Des Peres.</p>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Info */}
            <ScrollFadeIn>
              <div className="space-y-8">
                <div>
                  <h2 className="font-serif text-2xl font-bold text-navy mb-6">Get in Touch</h2>
                  <div className="space-y-5">
                    {[
                      { icon: MapPin, label: "Address", value: PRACTICE.fullAddress, link: PRACTICE.mapUrl, external: true },
                      { icon: Phone, label: "Phone", value: PRACTICE.phone, link: PRACTICE.phoneLink },
                      { icon: Printer, label: "Fax", value: PRACTICE.fax },
                      { icon: PhoneForwarded, label: "After-Hours Exchange", value: PRACTICE.exchange },
                      { icon: Mail, label: "Email", value: PRACTICE.email, link: `mailto:${PRACTICE.email}` },
                    ].map(({ icon: Icon, label, value, link, external }) => (
                      <div key={label} className="flex items-start gap-4">
                        <div className="w-10 h-10 rounded-xl bg-navy/5 flex items-center justify-center shrink-0">
                          <Icon className="w-5 h-5 text-magenta" />
                        </div>
                        <div>
                          <p className="text-sm text-muted-foreground">{label}</p>
                          {link ? (
                            <a href={link} target={external ? "_blank" : undefined} rel={external ? "noopener noreferrer" : undefined}
                              className="font-medium text-navy hover:text-magenta transition-colors">
                              {value}
                            </a>
                          ) : (
                            <p className="font-medium text-navy">{value}</p>
                          )}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                <div>
                  <h3 className="font-semibold text-navy mb-3">Office Hours</h3>
                  <div className="bg-gray-50 rounded-xl p-4 space-y-2 text-sm">
                    {[
                      { day: "Monday - Friday", hours: "8:00 AM - 5:00 PM" },
                      { day: "Saturday", hours: "Closed" },
                      { day: "Sunday", hours: "Closed" },
                    ].map(({ day, hours }) => (
                      <div key={day} className="flex justify-between">
                        <span className="text-muted-foreground">{day}</span>
                        <span className="font-medium text-navy">{hours}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div>
                  <h3 className="font-semibold text-navy mb-3">Directions & Parking</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    We're located in the Des Peres Professional Building at 1000 Des Peres Road, Suite 120. Free parking is available in the building's parking lot. From I-270, take the Manchester Road exit and head east. Turn south on Des Peres Road. The building is on the left.
                  </p>
                </div>

                {/* Google Maps embed */}
                <div className="aspect-[4/3] rounded-2xl overflow-hidden border shadow-sm">
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3118.5!2d-90.44!3d38.6!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2s1000+Des+Peres+Rd+Suite+120+St+Louis+MO+63131!5e0!3m2!1sen!2sus"
                    width="100%"
                    height="100%"
                    style={{ border: 0 }}
                    allowFullScreen
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    title="New You Surgical Weight Loss location map"
                    data-testid="link-map"
                  />
                </div>
              </div>
            </ScrollFadeIn>

            {/* General Inquiry Form */}
            <ScrollFadeIn delay={150}>
              {submitted ? (
                <div className="bg-white rounded-2xl border shadow-sm p-8 text-center">
                  <CheckCircle2 className="w-16 h-16 text-green-500 mx-auto mb-4" />
                  <h2 className="font-serif text-2xl font-bold text-navy mb-3">Message Sent!</h2>
                  <p className="text-muted-foreground">Thank you for reaching out. We'll respond to your inquiry within 1 business day.</p>
                </div>
              ) : (
                <div className="bg-white rounded-2xl border shadow-sm p-8">
                  <h2 className="font-serif text-2xl font-bold text-navy mb-6">Send Us a Message</h2>
                  <form onSubmit={(e) => { e.preventDefault(); setSubmitted(true); }} className="space-y-4" data-testid="form-contact">
                    <div className="grid sm:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-sm font-medium mb-1.5">First Name *</label>
                        <input type="text" required className="w-full px-4 py-3 rounded-xl border bg-gray-50 outline-none focus:ring-2 focus:ring-magenta/20 focus:border-magenta" data-testid="input-contact-firstname" />
                      </div>
                      <div>
                        <label className="block text-sm font-medium mb-1.5">Last Name *</label>
                        <input type="text" required className="w-full px-4 py-3 rounded-xl border bg-gray-50 outline-none focus:ring-2 focus:ring-magenta/20 focus:border-magenta" data-testid="input-contact-lastname" />
                      </div>
                    </div>
                    <div>
                      <label className="block text-sm font-medium mb-1.5">Email *</label>
                      <input type="email" required className="w-full px-4 py-3 rounded-xl border bg-gray-50 outline-none focus:ring-2 focus:ring-magenta/20 focus:border-magenta" data-testid="input-contact-email" />
                    </div>
                    <div>
                      <label className="block text-sm font-medium mb-1.5">Phone</label>
                      <input type="tel" className="w-full px-4 py-3 rounded-xl border bg-gray-50 outline-none focus:ring-2 focus:ring-magenta/20 focus:border-magenta" data-testid="input-contact-phone" />
                    </div>
                    <div>
                      <label className="block text-sm font-medium mb-1.5">Subject *</label>
                      <select required className="w-full px-4 py-3 rounded-xl border bg-gray-50 outline-none focus:ring-2 focus:ring-magenta/20 focus:border-magenta" data-testid="select-contact-subject">
                        <option value="">Select a subject</option>
                        <option value="general">General Inquiry</option>
                        <option value="appointment">Appointment Request</option>
                        <option value="billing">Billing Question</option>
                        <option value="records">Medical Records</option>
                        <option value="other">Other</option>
                      </select>
                    </div>
                    <div>
                      <label className="block text-sm font-medium mb-1.5">Message *</label>
                      <textarea rows={5} required className="w-full px-4 py-3 rounded-xl border bg-gray-50 outline-none focus:ring-2 focus:ring-magenta/20 focus:border-magenta resize-none" data-testid="textarea-contact-message" />
                    </div>
                    <button type="submit" className="w-full bg-magenta hover:bg-magenta-light text-white font-semibold py-3.5 rounded-xl transition-all" data-testid="button-contact-submit">
                      Send Message
                    </button>
                  </form>
                </div>
              )}
            </ScrollFadeIn>
          </div>
        </div>
      </section>
    </div>
  );
}
