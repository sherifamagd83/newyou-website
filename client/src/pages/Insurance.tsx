import { useState } from "react";
import { Link } from "wouter";
import { ArrowRight, CheckCircle2, Shield, CreditCard, DollarSign, Upload, FileCheck } from "lucide-react";
import ScrollFadeIn from "@/components/ScrollFadeIn";
import PageHero from "@/components/PageHero";
import { img } from "@/lib/img";

export default function Insurance() {
  return (
    <div>
      <PageHero image="/images/hero/hero-surgery.jpg" title="Insurance & Financing" subtitle="We accept all major insurance carriers and offer flexible financing options." />

      <section className="py-10 bg-gradient-to-r from-[#936C56]/10 to-[#936C56]/5">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <ScrollFadeIn>
            <h2 className="font-serif text-2xl font-bold text-navy mb-3">Cherry Patient Financing — Our Preferred Partner</h2>
            <p className="text-muted-foreground mb-6">Treat now, pay later. No hard credit checks. Plans starting at 0% APR. Get pre-approved in minutes.</p>
            <div className="flex flex-wrap justify-center gap-4 mb-6">
              {[
                "No hard credit check to apply",
                "Plans starting at 0% APR",
                "Approvals up to $10,000+",
                "Quick 30-second application",
              ].map((item) => (
                <span key={item} className="flex items-center gap-2 text-sm bg-white px-4 py-2 rounded-full shadow-sm">
                  <CheckCircle2 className="w-4 h-4 text-[#936C56]" />
                  {item}
                </span>
              ))}
            </div>
            <Link href="/financing" className="inline-flex items-center gap-2 bg-[#936C56] hover:opacity-90 text-white font-semibold px-8 py-3.5 rounded-full transition-all shadow-md">
              View Payment Plans <ArrowRight className="w-4 h-4" />
            </Link>
          </ScrollFadeIn>
        </div>
      </section>

      {/* Advanced Insurance Verification + Two-Column Layout */}
      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-6xl mx-auto px-4">
          <ScrollFadeIn className="text-center mb-12">
            <h2 className="font-serif text-3xl md:text-4xl font-bold text-navy mb-4">Free Insurance Verification</h2>
            <p className="text-muted-foreground text-lg">Find out if your plan covers weight loss surgery. Results in 24 hours.</p>
          </ScrollFadeIn>
          <div className="grid lg:grid-cols-[1fr_380px] gap-10 items-start">
            <ScrollFadeIn>
              <div className="space-y-6">
                <div className="bg-navy/5 rounded-2xl p-6">
                  <h3 className="font-semibold text-navy mb-3">How Insurance Verification Works</h3>
                  <div className="space-y-3">
                    {[
                      { step: "1", text: "Submit your information using the form" },
                      { step: "2", text: "Kristina, our insurance specialist, verifies your benefits" },
                      { step: "3", text: "We contact you within 24 hours with your coverage details" },
                      { step: "4", text: "If covered, we schedule your consultation with Dr. Lange" },
                    ].map(({ step, text }) => (
                      <div key={step} className="flex items-center gap-3">
                        <span className="w-7 h-7 rounded-full bg-navy text-white text-xs font-bold flex items-center justify-center shrink-0">{step}</span>
                        <span className="text-sm text-muted-foreground">{text}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div>
                  <h3 className="font-semibold text-navy mb-3">Carriers We Work With</h3>
                  <div className="flex flex-wrap gap-2">
                    {["BCBS", "UnitedHealthcare", "Aetna", "Cigna", "Humana", "Medicare", "Medicaid"].map(c => (
                      <span key={c} className="bg-gray-100 text-gray-700 text-sm px-3 py-1.5 rounded-full font-medium">{c}</span>
                    ))}
                  </div>
                </div>

                <div className="bg-navy rounded-2xl p-6">
                  <h3 className="font-semibold text-white mb-2">No Insurance? Cash Pay Gets You in Fast.</h3>
                  <p className="text-white/70 text-sm mb-3">Skip the approval process. Surgery in as little as 30 days. CareCredit financing available from $300/month.</p>
                  <Link href="/financing" className="text-gold font-semibold text-sm hover:underline">Explore Financing →</Link>
                </div>
              </div>
            </ScrollFadeIn>

            <ScrollFadeIn delay={200}>
              <div className="sticky top-24">
                <InsuranceVerificationForm />
              </div>
            </ScrollFadeIn>
          </div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <ScrollFadeIn className="mt-8">
            <div className="rounded-2xl overflow-hidden">
              <img src={img("/images/stock/office-2.jpg")} alt="New You Surgical Weight Loss office" className="w-full h-56 object-cover rounded-2xl" />
            </div>
          </ScrollFadeIn>
          <ScrollFadeIn className="text-center mb-12 mt-12">
            <h2 className="font-serif text-3xl font-bold text-navy mb-4">Insurance We Work With</h2>
            <p className="text-muted-foreground">We accept and work with all major insurance carriers. Our team handles pre-authorization for you.</p>
          </ScrollFadeIn>
          <ScrollFadeIn>
            <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-4">
              {["Blue Cross Blue Shield", "UnitedHealthcare", "Aetna", "Cigna", "Humana", "Medicare", "Medicaid", "Anthem", "Centene", "HealthSpring", "Ambetter", "Tricare", "WellCare", "Coventry", "And Many More..."].map((carrier) => (
                <div key={carrier} className="bg-gray-50 rounded-xl p-4 text-center text-sm font-medium text-navy border hover:border-magenta/30 transition-colors">
                  {carrier}
                </div>
              ))}
            </div>
            <p className="text-center text-sm text-muted-foreground mt-6">Don't see your insurance? Contact us — we likely work with your carrier.</p>
          </ScrollFadeIn>
        </div>
      </section>

      <section className="section-gradient py-20">
        <div className="max-w-7xl mx-auto px-4">
          <ScrollFadeIn className="text-center mb-12">
            <h2 className="font-serif text-3xl font-bold text-navy mb-4">Financing Options</h2>
            <p className="text-muted-foreground">Don't let cost stand in the way of your health. We offer flexible payment options.</p>
          </ScrollFadeIn>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              { icon: CreditCard, title: "CareCredit", desc: "Our preferred financing partner. Plans as low as $300/month with promotional 0% APR options available.", highlight: "Plans from $300/mo" },
              { icon: DollarSign, title: "Self-Pay Pricing", desc: "Competitive, transparent self-pay rates for patients without insurance coverage or who prefer cash pricing.", highlight: "Transparent pricing" },
              { icon: FileCheck, title: "Payment Plans", desc: "We work directly with patients to create customized payment plans that fit your budget.", highlight: "Flexible terms" },
            ].map(({ icon: Icon, title, desc, highlight }, i) => (
              <ScrollFadeIn key={title} delay={i * 100}>
                <div className="bg-white rounded-2xl border shadow-sm p-6 card-hover">
                  <div className="w-12 h-12 rounded-xl bg-gold/10 flex items-center justify-center mb-4">
                    <Icon className="w-6 h-6 text-gold" />
                  </div>
                  <h3 className="font-semibold text-navy text-lg mb-1">{title}</h3>
                  <span className="text-magenta text-sm font-medium">{highlight}</span>
                  <p className="text-muted-foreground text-sm mt-3">{desc}</p>
                </div>
              </ScrollFadeIn>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4">
          <ScrollFadeIn className="text-center mb-12">
            <h2 className="font-serif text-3xl font-bold text-navy mb-4">Self-Pay Pricing Guide</h2>
            <p className="text-muted-foreground">Transparent pricing for patients who prefer cash-pay or whose insurance doesn't cover bariatric surgery.</p>
          </ScrollFadeIn>
          <ScrollFadeIn>
            <div className="bg-white rounded-2xl border shadow-sm overflow-hidden">
              <table className="w-full text-sm">
                <thead><tr className="bg-navy text-white">
                  <th className="text-left px-6 py-3">Procedure</th>
                  <th className="text-right px-6 py-3">Self-Pay Price</th>
                  <th className="text-right px-6 py-3 hidden sm:table-cell">CareCredit/mo*</th>
                </tr></thead>
                <tbody>
                  {[
                    ["Gastric Sleeve", "$12,500 - $16,000", "~$300"],
                    ["Gastric Bypass", "$15,000 - $20,000", "~$375"],
                    ["Duodenal Switch", "$18,000 - $25,000", "~$450"],
                    ["Revision Surgery", "$15,000 - $25,000", "Varies"],
                    ["ORBERA® Balloon", "$6,500 - $8,500", "~$175"],
                    ["GLP-1 Program", "$249 - $349/month", "N/A"],
                  ].map(([proc, price, monthly], i) => (
                    <tr key={proc} className={i % 2 === 0 ? "bg-white" : "bg-gray-50"}>
                      <td className="px-6 py-3 font-medium text-navy">{proc}</td>
                      <td className="px-6 py-3 text-right font-semibold">{price}</td>
                      <td className="px-6 py-3 text-right text-muted-foreground hidden sm:table-cell">{monthly}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
              <p className="px-6 py-3 text-xs text-muted-foreground bg-gray-50 border-t">
                *Estimated monthly payments based on 60-month CareCredit plan. Actual terms vary. Prices include surgeon fees, facility fees, and anesthesia. Individual pricing may vary based on medical complexity.
              </p>
            </div>
          </ScrollFadeIn>
        </div>
      </section>
    </div>
  );
}

function InsuranceVerificationForm() {
  const [form, setForm] = useState({
    firstName: "", lastName: "", email: "", phone: "",
    insuranceProvider: "", dob: "", policyNumber: "",
    weightLbs: "", heightFt: "", heightIn: "",
    consultPref: "",
  });
  const [submitted, setSubmitted] = useState(false);

  const bmi = (() => {
    const w = parseFloat(form.weightLbs);
    const ft = parseFloat(form.heightFt);
    const inches = parseFloat(form.heightIn) || 0;
    if (!w || !ft) return null;
    const totalInches = ft * 12 + inches;
    return ((w / (totalInches * totalInches)) * 703).toFixed(1);
  })();

  const bmiCategory = (() => {
    if (!bmi) return null;
    const b = parseFloat(bmi);
    if (b < 25) return { label: "Normal", color: "text-green-600", note: "You may not qualify for bariatric surgery, but our GLP-1 program may be a great fit." };
    if (b < 30) return { label: "Overweight", color: "text-yellow-600", note: "You may qualify for GLP-1 medication or non-surgical options." };
    if (b < 35) return { label: "Obese (Class I)", color: "text-orange-600", note: "You may qualify for surgery if you have obesity-related conditions (diabetes, sleep apnea, etc.)." };
    if (b < 40) return { label: "Obese (Class II)", color: "text-red-500", note: "You likely qualify for bariatric surgery. Most insurance plans cover at this BMI." };
    return { label: "Obese (Class III)", color: "text-red-700", note: "You are a strong candidate for bariatric surgery. Most insurance plans will cover the procedure." };
  })();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  const update = (field: string, value: string) => setForm({ ...form, [field]: value });

  const inputClass = "w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-magenta focus:ring-2 focus:ring-magenta/20 outline-none transition-all text-sm bg-white";
  const selectClass = inputClass + " appearance-none";

  if (submitted) {
    return (
      <div className="bg-green-50 border-2 border-green-200 rounded-3xl p-8 text-center">
        <CheckCircle2 className="w-14 h-14 text-green-500 mx-auto mb-4" />
        <h3 className="font-serif text-2xl font-bold text-navy mb-2">Verification Submitted!</h3>
        <p className="text-muted-foreground">Our insurance specialist Kristina will contact you within 24 hours with your coverage details.</p>
        {bmi && <p className="mt-4 text-sm text-muted-foreground">Your BMI: <strong className="text-navy">{bmi}</strong></p>}
      </div>
    );
  }

  return (
    <div className="bg-white rounded-3xl border-2 border-gray-100 shadow-xl p-6 md:p-8">
      <div className="text-center mb-6">
        <Shield className="w-10 h-10 text-magenta mx-auto mb-3" />
        <h3 className="font-serif text-xl font-bold text-navy mb-1">Free Insurance Verification</h3>
        <p className="text-sm text-muted-foreground">Results in 24 hours. Zero obligation.</p>
      </div>

      <form onSubmit={handleSubmit} className="space-y-4" data-testid="insurance-verification-form">
        <div className="grid grid-cols-2 gap-3">
          <input type="text" placeholder="First Name" required value={form.firstName} onChange={e => update("firstName", e.target.value)} className={inputClass} />
          <input type="text" placeholder="Last Name" required value={form.lastName} onChange={e => update("lastName", e.target.value)} className={inputClass} />
        </div>
        <input type="email" placeholder="Email" required value={form.email} onChange={e => update("email", e.target.value)} className={inputClass} />
        <input type="tel" placeholder="Phone" required value={form.phone} onChange={e => update("phone", e.target.value)} className={inputClass} />

        <div className="border-t border-gray-100 pt-4 mt-4">
          <p className="text-xs font-bold text-navy uppercase tracking-wider mb-3">Insurance Details</p>
          <div className="space-y-3">
            <select value={form.insuranceProvider} onChange={e => update("insuranceProvider", e.target.value)} className={selectClass} required>
              <option value="">Insurance Provider</option>
              <option>Blue Cross Blue Shield</option>
              <option>UnitedHealthcare</option>
              <option>Aetna</option>
              <option>Cigna</option>
              <option>Humana</option>
              <option>Medicare</option>
              <option>Medicaid</option>
              <option>Other</option>
              <option>No Insurance / Cash Pay</option>
            </select>
            <div className="grid grid-cols-2 gap-3">
              <input type="date" placeholder="Date of Birth" value={form.dob} onChange={e => update("dob", e.target.value)} className={inputClass} />
              <input type="text" placeholder="Policy # (optional)" value={form.policyNumber} onChange={e => update("policyNumber", e.target.value)} className={inputClass} />
            </div>
          </div>
        </div>

        <div className="border-t border-gray-100 pt-4 mt-4">
          <p className="text-xs font-bold text-navy uppercase tracking-wider mb-3">Calculate Your BMI</p>
          <div className="grid grid-cols-3 gap-3">
            <input type="number" placeholder="Weight (lbs)" value={form.weightLbs} onChange={e => update("weightLbs", e.target.value)} className={inputClass} />
            <input type="number" placeholder="Height (ft)" value={form.heightFt} onChange={e => update("heightFt", e.target.value)} className={inputClass} />
            <input type="number" placeholder="Height (in)" value={form.heightIn} onChange={e => update("heightIn", e.target.value)} className={inputClass} />
          </div>

          {bmi && bmiCategory && (
            <div className="mt-3 bg-gray-50 rounded-xl p-4">
              <div className="flex items-center justify-between mb-1">
                <span className="text-sm font-semibold text-navy">Your BMI:</span>
                <span className={`text-lg font-bold ${bmiCategory.color}`}>{bmi} — {bmiCategory.label}</span>
              </div>
              <p className="text-xs text-muted-foreground">{bmiCategory.note}</p>
            </div>
          )}
        </div>

        <select value={form.consultPref} onChange={e => update("consultPref", e.target.value)} className={selectClass}>
          <option value="">Consultation Preference</option>
          <option>In-person (St. Louis office)</option>
          <option>Telehealth / Virtual</option>
          <option>No preference</option>
        </select>

        <button type="submit" className="w-full bg-magenta hover:bg-magenta-light text-white font-bold py-4 rounded-xl transition-all shadow-md flex items-center justify-center gap-2 text-base">
          <Shield className="w-5 h-5" /> Check My Coverage →
        </button>

        <p className="text-[11px] text-center text-muted-foreground">🔒 HIPAA secure. Our insurance specialist contacts you within 24 hours. By submitting, you consent to receive texts from New You Surgical Weight Loss. Msg &amp; data rates apply. Reply STOP to opt out.</p>
      </form>
    </div>
  );
}
