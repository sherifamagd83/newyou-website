import { useState } from "react";
import { CheckCircle2, ArrowRight, ArrowLeft, Phone, Calendar, FileCheck, Heart } from "lucide-react";
import ScrollFadeIn from "@/components/ScrollFadeIn";
import { PRACTICE } from "@/lib/constants";

export default function RequestConsultation() {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    firstName: "", lastName: "", email: "", phone: "", dob: "",
    interests: [] as string[],
    insuranceProvider: "", memberId: "",
    hearAbout: "", message: "",
  });

  const totalSteps = 4;

  const toggleInterest = (interest: string) => {
    setFormData((prev) => ({
      ...prev,
      interests: prev.interests.includes(interest)
        ? prev.interests.filter((i) => i !== interest)
        : [...prev.interests, interest],
    }));
  };

  const handleSubmit = () => setStep(5);

  return (
    <div>
      <section className="hero-gradient py-12 md:py-16 text-center relative overflow-hidden">
        <div className="max-w-3xl mx-auto px-4 relative">
          <h1 className="font-serif text-3xl md:text-4xl font-bold text-white mb-3">Request a Consultation</h1>
          <p className="text-white/80">Take the first step toward your transformation. Free, no-obligation consultation.</p>
        </div>
      </section>

      <section className="py-12 md:py-20 bg-white">
        <div className="max-w-5xl mx-auto px-4">
          <div className="grid lg:grid-cols-3 gap-10">
            {/* Form */}
            <div className="lg:col-span-2">
              {step <= totalSteps && (
                <div className="mb-8">
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-sm font-medium text-muted-foreground">Step {step} of {totalSteps}</span>
                    <span className="text-sm text-muted-foreground">{Math.round((step / totalSteps) * 100)}% complete</span>
                  </div>
                  <div className="w-full bg-gray-100 rounded-full h-2.5">
                    <div className="bg-magenta h-2.5 rounded-full transition-all duration-500" style={{ width: `${(step / totalSteps) * 100}%` }} />
                  </div>
                </div>
              )}

              {step === 1 && (
                <ScrollFadeIn>
                  <h2 className="font-serif text-2xl font-bold text-navy mb-6">Your Contact Information</h2>
                  <div className="space-y-4">
                    <div className="grid sm:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-sm font-medium mb-1.5">First Name *</label>
                        <input type="text" required value={formData.firstName} onChange={(e) => setFormData({ ...formData, firstName: e.target.value })}
                          className="w-full px-4 py-3 rounded-xl border bg-gray-50 outline-none focus:ring-2 focus:ring-magenta/20 focus:border-magenta" data-testid="input-consult-firstname" />
                      </div>
                      <div>
                        <label className="block text-sm font-medium mb-1.5">Last Name *</label>
                        <input type="text" required value={formData.lastName} onChange={(e) => setFormData({ ...formData, lastName: e.target.value })}
                          className="w-full px-4 py-3 rounded-xl border bg-gray-50 outline-none focus:ring-2 focus:ring-magenta/20 focus:border-magenta" data-testid="input-consult-lastname" />
                      </div>
                    </div>
                    <div>
                      <label className="block text-sm font-medium mb-1.5">Email Address *</label>
                      <input type="email" required value={formData.email} onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        className="w-full px-4 py-3 rounded-xl border bg-gray-50 outline-none focus:ring-2 focus:ring-magenta/20 focus:border-magenta" data-testid="input-consult-email" />
                    </div>
                    <div>
                      <label className="block text-sm font-medium mb-1.5">Phone Number *</label>
                      <input type="tel" required value={formData.phone} onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        className="w-full px-4 py-3 rounded-xl border bg-gray-50 outline-none focus:ring-2 focus:ring-magenta/20 focus:border-magenta" data-testid="input-consult-phone" />
                    </div>
                    <div>
                      <label className="block text-sm font-medium mb-1.5">Date of Birth</label>
                      <input type="date" value={formData.dob} onChange={(e) => setFormData({ ...formData, dob: e.target.value })}
                        className="w-full px-4 py-3 rounded-xl border bg-gray-50 outline-none focus:ring-2 focus:ring-magenta/20 focus:border-magenta" data-testid="input-consult-dob" />
                    </div>
                  </div>
                  <button onClick={() => setStep(2)} className="mt-6 bg-magenta hover:bg-magenta-light text-white font-semibold px-8 py-3.5 rounded-xl transition-all flex items-center gap-2 w-full justify-center" data-testid="button-consult-next-1">
                    Continue <ArrowRight className="w-4 h-4" />
                  </button>
                </ScrollFadeIn>
              )}

              {step === 2 && (
                <ScrollFadeIn>
                  <h2 className="font-serif text-2xl font-bold text-navy mb-6">What Are You Interested In?</h2>
                  <p className="text-muted-foreground mb-6 text-sm">Select all that apply.</p>
                  <div className="grid sm:grid-cols-2 gap-3">
                    {[
                      "Gastric Sleeve", "Gastric Bypass", "Duodenal Switch", "SADI-S",
                      "Revision Surgery", "ORBERA® Balloon", "GLP-1 / Semaglutide",
                      "REFRAME Coaching", "Hair Restoration", "Red Light Therapy",
                      "Skin Tightening", "Body Contouring", "Not Sure — Help Me Decide",
                    ].map((interest) => (
                      <button key={interest} onClick={() => toggleInterest(interest)}
                        className={`p-3 rounded-xl border text-sm font-medium text-left transition-all ${formData.interests.includes(interest) ? "border-magenta bg-magenta/5 text-magenta" : "hover:border-gray-300 text-foreground"}`}
                        data-testid={`button-interest-${interest.toLowerCase().replace(/[^a-z0-9]/g, "-")}`}>
                        <span className="flex items-center gap-2">
                          {formData.interests.includes(interest) && <CheckCircle2 className="w-4 h-4" />}
                          {interest}
                        </span>
                      </button>
                    ))}
                  </div>
                  <div className="flex gap-3 mt-6">
                    <button onClick={() => setStep(1)} className="flex items-center gap-2 px-6 py-3.5 rounded-xl border font-medium hover:bg-gray-50 transition-colors" data-testid="button-consult-back-2">
                      <ArrowLeft className="w-4 h-4" /> Back
                    </button>
                    <button onClick={() => setStep(3)} className="flex-1 bg-magenta hover:bg-magenta-light text-white font-semibold py-3.5 rounded-xl transition-all flex items-center gap-2 justify-center" data-testid="button-consult-next-2">
                      Continue <ArrowRight className="w-4 h-4" />
                    </button>
                  </div>
                </ScrollFadeIn>
              )}

              {step === 3 && (
                <ScrollFadeIn>
                  <h2 className="font-serif text-2xl font-bold text-navy mb-6">Insurance & Additional Info</h2>
                  <div className="space-y-4">
                    <div className="grid sm:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-sm font-medium mb-1.5">Insurance Provider</label>
                        <input type="text" placeholder="e.g., Blue Cross Blue Shield" value={formData.insuranceProvider} onChange={(e) => setFormData({ ...formData, insuranceProvider: e.target.value })}
                          className="w-full px-4 py-3 rounded-xl border bg-gray-50 outline-none focus:ring-2 focus:ring-magenta/20 focus:border-magenta" data-testid="input-consult-insurance" />
                      </div>
                      <div>
                        <label className="block text-sm font-medium mb-1.5">Member ID</label>
                        <input type="text" value={formData.memberId} onChange={(e) => setFormData({ ...formData, memberId: e.target.value })}
                          className="w-full px-4 py-3 rounded-xl border bg-gray-50 outline-none focus:ring-2 focus:ring-magenta/20 focus:border-magenta" data-testid="input-consult-memberid" />
                      </div>
                    </div>
                    <div>
                      <label className="block text-sm font-medium mb-1.5">How did you hear about us? *</label>
                      <select value={formData.hearAbout} onChange={(e) => setFormData({ ...formData, hearAbout: e.target.value })}
                        className="w-full px-4 py-3 rounded-xl border bg-gray-50 outline-none focus:ring-2 focus:ring-magenta/20 focus:border-magenta" data-testid="select-consult-hearabout">
                        <option value="">Select an option</option>
                        <option value="google">Google Search</option>
                        <option value="facebook">Facebook / Instagram</option>
                        <option value="referral">Friend / Family Referral</option>
                        <option value="doctor">Doctor Referral</option>
                        <option value="support-group">Support Group</option>
                        <option value="insurance">Insurance Provider</option>
                        <option value="other">Other</option>
                      </select>
                    </div>
                    <div>
                      <label className="block text-sm font-medium mb-1.5">Anything else you'd like us to know?</label>
                      <textarea rows={3} value={formData.message} onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                        className="w-full px-4 py-3 rounded-xl border bg-gray-50 outline-none focus:ring-2 focus:ring-magenta/20 focus:border-magenta resize-none" data-testid="textarea-consult-message" />
                    </div>
                  </div>
                  <div className="flex gap-3 mt-6">
                    <button onClick={() => setStep(2)} className="flex items-center gap-2 px-6 py-3.5 rounded-xl border font-medium hover:bg-gray-50 transition-colors">
                      <ArrowLeft className="w-4 h-4" /> Back
                    </button>
                    <button onClick={() => setStep(4)} className="flex-1 bg-magenta hover:bg-magenta-light text-white font-semibold py-3.5 rounded-xl transition-all flex items-center gap-2 justify-center" data-testid="button-consult-next-3">
                      Review & Submit <ArrowRight className="w-4 h-4" />
                    </button>
                  </div>
                </ScrollFadeIn>
              )}

              {step === 4 && (
                <ScrollFadeIn>
                  <h2 className="font-serif text-2xl font-bold text-navy mb-6">Review Your Information</h2>
                  <div className="bg-gray-50 rounded-2xl p-6 border space-y-4 text-sm">
                    <div className="grid sm:grid-cols-2 gap-4">
                      <div><span className="text-muted-foreground">Name:</span> <strong>{formData.firstName} {formData.lastName}</strong></div>
                      <div><span className="text-muted-foreground">Email:</span> <strong>{formData.email}</strong></div>
                      <div><span className="text-muted-foreground">Phone:</span> <strong>{formData.phone}</strong></div>
                      <div><span className="text-muted-foreground">Insurance:</span> <strong>{formData.insuranceProvider || "Not provided"}</strong></div>
                    </div>
                    {formData.interests.length > 0 && (
                      <div><span className="text-muted-foreground">Interested in:</span> <strong>{formData.interests.join(", ")}</strong></div>
                    )}
                    {formData.hearAbout && (
                      <div><span className="text-muted-foreground">Heard about us:</span> <strong>{formData.hearAbout}</strong></div>
                    )}
                  </div>
                  <div className="flex gap-3 mt-6">
                    <button onClick={() => setStep(3)} className="flex items-center gap-2 px-6 py-3.5 rounded-xl border font-medium hover:bg-gray-50 transition-colors">
                      <ArrowLeft className="w-4 h-4" /> Edit
                    </button>
                    <button onClick={handleSubmit} className="flex-1 bg-magenta hover:bg-magenta-light text-white font-semibold py-3.5 rounded-xl transition-all flex items-center gap-2 justify-center text-lg" data-testid="button-consult-submit">
                      Submit Request <ArrowRight className="w-5 h-5" />
                    </button>
                  </div>
                </ScrollFadeIn>
              )}

              {step === 5 && (
                <div className="text-center py-12">
                  <CheckCircle2 className="w-20 h-20 text-green-500 mx-auto mb-6" />
                  <h2 className="font-serif text-3xl font-bold text-navy mb-4">Request Submitted!</h2>
                  <p className="text-muted-foreground text-lg mb-8">
                    Thank you, {formData.firstName}! Our team will review your information and reach out within 24 hours to schedule your free consultation.
                  </p>
                  <div className="bg-gray-50 rounded-2xl p-6 border text-left max-w-md mx-auto">
                    <h3 className="font-semibold text-navy mb-3">What Happens Next?</h3>
                    <ol className="space-y-3 text-sm">
                      {[
                        "Our team reviews your information",
                        "We verify your insurance benefits (if provided)",
                        "A care coordinator calls to schedule your visit",
                        "You meet with Dr. Lange for a comprehensive consultation",
                      ].map((s, i) => (
                        <li key={i} className="flex items-start gap-3">
                          <span className="w-6 h-6 rounded-full bg-magenta text-white text-xs flex items-center justify-center shrink-0 font-bold">{i + 1}</span>
                          <span className="text-muted-foreground">{s}</span>
                        </li>
                      ))}
                    </ol>
                  </div>
                </div>
              )}
            </div>

            {/* Sidebar */}
            <div className="hidden lg:block">
              <div className="sticky top-24 space-y-6">
                <div className="bg-navy rounded-2xl p-6 text-white">
                  <h3 className="font-semibold mb-4">What Happens Next?</h3>
                  <div className="space-y-4">
                    {[
                      { icon: FileCheck, text: "We review your info within 24 hours" },
                      { icon: Phone, text: "Care coordinator calls to schedule" },
                      { icon: Calendar, text: "Meet Dr. Lange for consultation" },
                      { icon: Heart, text: "Begin your transformation journey" },
                    ].map(({ icon: Icon, text }, i) => (
                      <div key={i} className="flex items-start gap-3">
                        <div className="w-8 h-8 rounded-lg bg-white/10 flex items-center justify-center shrink-0">
                          <Icon className="w-4 h-4" />
                        </div>
                        <span className="text-sm text-white/80">{text}</span>
                      </div>
                    ))}
                  </div>
                </div>
                <div className="bg-gray-50 rounded-2xl p-6 border text-center">
                  <p className="text-sm text-muted-foreground mb-2">Prefer to call?</p>
                  <a href={PRACTICE.phoneLink} className="text-lg font-bold text-navy block">{PRACTICE.phone}</a>
                  <p className="text-xs text-muted-foreground mt-1">Mon-Fri 8am-5pm CST</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
