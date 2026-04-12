import { useState } from "react";
import { Link } from "wouter";
import {
  ArrowRight,
  CheckCircle2,
  Microscope,
  Bot,
  RefreshCw,
  Brain,
  Heart,
  ChevronDown,
  Phone,
  Video,
  Users,
  MapPin,
  Star,
  Zap,
  Sparkles,
  Shield,
} from "lucide-react";
import ScrollFadeIn from "@/components/ScrollFadeIn";
import PageHero from "@/components/PageHero";
import { img } from "@/lib/img";

export default function RevisionSurgery() {
  return (
    <div>
      {/* Hero */}
      <PageHero
        image="/images/hero/hero-surgery.jpg"
        badge="Free Second Opinion"
        title="Had Weight Loss Surgery That Didn't Work?"
        subtitle="You're not alone. And it's not your fault. Dr. Lange specializes in revision and conversion surgery. Whether you had a lap band, sleeve, or bypass that didn't deliver — he can help."
      />

      {/* Lead Form — HIGH PRIORITY */}
      <SecondOpinionForm />

      {/* Why Surgery Falls Short */}
      <WhySurgeryFallsShort />

      {/* Three Approaches to Revision */}
      <RevisionApproaches />

      {/* How Revision Works */}
      <HowRevisionWorks />

      {/* Insurance */}
      <InsuranceSection />

      {/* Patient Stories */}
      <PatientStories />

      {/* Dr. Lange */}
      <DrLangeSection />

      {/* Had Surgery Somewhere Else? */}
      <SomewhereElseSection />

      {/* FAQs */}
      <RevisionFAQs />

      {/* Cross-sell */}
      <FullSupportSystem />
    </div>
  );
}

/* ─── Lead Form ─────────────────────────────────────────── */
function SecondOpinionForm() {
  const [form, setForm] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    previousSurgery: "",
    challenges: "",
    consultationPref: "",
  });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  const inputCls =
    "w-full border border-gray-300 rounded-xl px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-magenta/40 focus:border-magenta transition-all";
  const labelCls = "block text-sm font-medium text-navy mb-1";

  return (
    <section className="py-16 bg-gradient-to-b from-navy/5 to-white">
      <div className="max-w-3xl mx-auto px-4">
        <ScrollFadeIn>
          <div className="bg-white rounded-3xl border border-gray-200 shadow-xl overflow-hidden">
            {/* Header */}
            <div className="bg-navy px-8 py-7">
              <h2 className="font-serif text-2xl md:text-3xl font-bold text-white mb-1">
                Request a Free Second Opinion
              </h2>
              <p className="text-white/75 text-sm">
                Whether you had your original surgery with us or elsewhere.
              </p>
            </div>

            {/* Form body */}
            <div className="px-8 py-8">
              {submitted ? (
                <div className="text-center py-8" data-testid="form-success">
                  <CheckCircle2 className="w-16 h-16 text-green-500 mx-auto mb-4" />
                  <h3 className="font-serif text-xl font-bold text-navy mb-2">
                    Request Received!
                  </h3>
                  <p className="text-muted-foreground">
                    Dr. Lange's team will contact you within 24 hours to schedule your free second opinion.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5" data-testid="form-second-opinion">
                  <div className="grid sm:grid-cols-2 gap-4">
                    <div>
                      <label className={labelCls}>First Name</label>
                      <input
                        type="text"
                        className={inputCls}
                        placeholder="First Name"
                        required
                        data-testid="input-first-name"
                        value={form.firstName}
                        onChange={(e) => setForm({ ...form, firstName: e.target.value })}
                      />
                    </div>
                    <div>
                      <label className={labelCls}>Last Name</label>
                      <input
                        type="text"
                        className={inputCls}
                        placeholder="Last Name"
                        required
                        data-testid="input-last-name"
                        value={form.lastName}
                        onChange={(e) => setForm({ ...form, lastName: e.target.value })}
                      />
                    </div>
                  </div>

                  <div className="grid sm:grid-cols-2 gap-4">
                    <div>
                      <label className={labelCls}>Email</label>
                      <input
                        type="email"
                        className={inputCls}
                        placeholder="your@email.com"
                        required
                        data-testid="input-email"
                        value={form.email}
                        onChange={(e) => setForm({ ...form, email: e.target.value })}
                      />
                    </div>
                    <div>
                      <label className={labelCls}>Phone</label>
                      <input
                        type="tel"
                        className={inputCls}
                        placeholder="(314) 000-0000"
                        required
                        data-testid="input-phone"
                        value={form.phone}
                        onChange={(e) => setForm({ ...form, phone: e.target.value })}
                      />
                    </div>
                  </div>

                  <div>
                    <label className={labelCls}>What surgery did you have previously?</label>
                    <select
                      className={inputCls}
                      required
                      data-testid="select-previous-surgery"
                      value={form.previousSurgery}
                      onChange={(e) => setForm({ ...form, previousSurgery: e.target.value })}
                    >
                      <option value="">Select one</option>
                      <option value="sleeve">Gastric Sleeve</option>
                      <option value="bypass">Gastric Bypass (Roux-en-Y)</option>
                      <option value="lapband">Lap Band</option>
                      <option value="ds">Duodenal Switch</option>
                      <option value="balloon">Gastric Balloon</option>
                      <option value="other">Other / Not sure</option>
                    </select>
                  </div>

                  <div>
                    <label className={labelCls}>What challenges are you experiencing?</label>
                    <textarea
                      className={`${inputCls} h-28 resize-none`}
                      placeholder="Weight regain, complications, poor results, pain..."
                      data-testid="textarea-challenges"
                      value={form.challenges}
                      onChange={(e) => setForm({ ...form, challenges: e.target.value })}
                    />
                  </div>

                  <div>
                    <label className={labelCls}>Consultation Preference</label>
                    <select
                      className={inputCls}
                      required
                      data-testid="select-consult-pref"
                      value={form.consultationPref}
                      onChange={(e) => setForm({ ...form, consultationPref: e.target.value })}
                    >
                      <option value="">Select one</option>
                      <option value="inperson">In-person (St. Louis office)</option>
                      <option value="telehealth">Telehealth / Virtual</option>
                      <option value="nopref">No preference</option>
                    </select>
                  </div>

                  <button
                    type="submit"
                    className="w-full bg-magenta hover:bg-magenta/90 text-white font-semibold px-8 py-4 rounded-full transition-all shadow-lg flex items-center justify-center gap-2 text-base"
                    data-testid="button-submit-second-opinion"
                  >
                    Request My Second Opinion <ArrowRight className="w-5 h-5" />
                  </button>

                  {/* Trust badges */}
                  <div className="flex items-center justify-center gap-2 pt-1">
                    <Shield className="w-4 h-4 text-teal shrink-0" />
                    <p className="text-xs text-muted-foreground text-center">
                      HIPAA secure · Dr. Lange's team contacts you within 24 hours
                    </p>
                  </div>
                </form>
              )}
            </div>

            {/* Stats strip */}
            <div className="bg-navy/5 border-t px-8 py-4 grid grid-cols-2 sm:grid-cols-4 gap-4">
              {[
                { val: "Free", label: "Second Opinion" },
                { val: "24 hr", label: "Response Time" },
                { val: "3", label: "Revision Approaches" },
                { val: "No", label: "Referral Needed" },
              ].map(({ val, label }) => (
                <div key={label} className="text-center">
                  <p className="font-serif text-lg font-bold text-navy">{val}</p>
                  <p className="text-xs text-muted-foreground">{label}</p>
                </div>
              ))}
            </div>
          </div>
        </ScrollFadeIn>
      </div>
    </section>
  );
}

/* ─── Why Surgery Falls Short ───────────────────────────── */
function WhySurgeryFallsShort() {
  const reasons = [
    {
      icon: Microscope,
      title: "Anatomical Changes Over Time",
      desc: "The stomach pouch or sleeve can stretch. Connections can widen. The original anatomy changes in ways that reduce the surgery's effectiveness.",
    },
    {
      icon: Zap,
      title: "Hormonal and Metabolic Shifts",
      desc: "Hunger hormones adapt. Metabolic rate changes. The body's weight 'set point' can fight back, especially without ongoing medical support.",
    },
    {
      icon: RefreshCw,
      title: "Technical Issues From Original Surgery",
      desc: "Band slippage, staple line failure, or inadequate pouch size from the first operation may require surgical correction.",
    },
    {
      icon: Brain,
      title: "Behavioral and Lifestyle Factors",
      desc: "Stress, emotional eating, lack of follow-up support. These are treatable with the right combination of medical and behavioral interventions.",
    },
  ];

  return (
    <section className="py-20 bg-white">
      <div className="max-w-6xl mx-auto px-4">
        <ScrollFadeIn>
          <div className="text-center mb-12">
            <span className="inline-block bg-navy/5 text-navy text-sm font-semibold px-4 py-1.5 rounded-full mb-4">
              You're Not Alone
            </span>
            <h2 className="font-serif text-3xl md:text-4xl font-bold text-navy mb-4">
              Why Bariatric Surgery Sometimes Falls Short
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto leading-relaxed">
              Weight regain after bariatric surgery happens to more people than you'd think. It's not a moral failing. It's a medical reality. Dr. Lange approaches every revision patient with zero judgment and full commitment.
            </p>
          </div>
        </ScrollFadeIn>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {reasons.map(({ icon: Icon, title, desc }, i) => (
            <ScrollFadeIn key={title} delay={i * 80}>
              <div className="bg-gradient-to-br from-navy/3 to-navy/6 rounded-2xl p-6 border border-navy/10 h-full">
                <div className="w-12 h-12 bg-magenta/10 rounded-xl flex items-center justify-center mb-4">
                  <Icon className="w-6 h-6 text-magenta" />
                </div>
                <h3 className="font-serif text-lg font-bold text-navy mb-2">{title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{desc}</p>
              </div>
            </ScrollFadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ─── Three Approaches to Revision ─────────────────────── */
function RevisionApproaches() {
  const approaches = [
    {
      icon: Microscope,
      tag: "Non-surgical / Incision-free",
      title: "Endoscopic Revision",
      desc: "A flexible endoscope revises the anatomy from the inside. No new incisions. Faster recovery. Ideal for gastric bypass patients with a stretched pouch or widened stoma. Outpatient in many cases.",
      color: "teal",
    },
    {
      icon: Bot,
      tag: "Minimally Invasive",
      title: "Robotic / Laparoscopic",
      desc: "Small incisions with robotic precision. For sleeve revisions, bypass revisions, band removals with conversion, and complex anatomical corrections. Shorter hospital stay than open surgery.",
      color: "magenta",
    },
    {
      icon: RefreshCw,
      tag: "Changing Procedure Type",
      title: "Conversion Surgery",
      desc: "Lap band to sleeve. Sleeve to bypass. Bypass to duodenal switch. When the original procedure type wasn't the right fit, conversion can deliver dramatically better results.",
      color: "navy",
    },
  ];

  return (
    <section className="py-20 bg-navy/3">
      <div className="max-w-6xl mx-auto px-4">
        <ScrollFadeIn>
          <div className="text-center mb-12">
            <span className="inline-block bg-magenta/10 text-magenta text-sm font-semibold px-4 py-1.5 rounded-full mb-4">
              Revision Options
            </span>
            <h2 className="font-serif text-3xl md:text-4xl font-bold text-navy mb-4">
              Three Approaches to Revision
            </h2>
            <p className="text-muted-foreground max-w-xl mx-auto">
              Dr. Lange offers the full range. The right approach depends on your original surgery, current anatomy, and goals.
            </p>
          </div>
        </ScrollFadeIn>

        <div className="grid md:grid-cols-3 gap-6">
          {approaches.map(({ icon: Icon, tag, title, desc, color }, i) => (
            <ScrollFadeIn key={title} delay={i * 100}>
              <div className="bg-white rounded-2xl p-7 border shadow-sm h-full flex flex-col">
                <div
                  className={`w-12 h-12 rounded-xl flex items-center justify-center mb-5 ${
                    color === "teal"
                      ? "bg-teal/10"
                      : color === "magenta"
                      ? "bg-magenta/10"
                      : "bg-navy/10"
                  }`}
                >
                  <Icon
                    className={`w-6 h-6 ${
                      color === "teal"
                        ? "text-teal"
                        : color === "magenta"
                        ? "text-magenta"
                        : "text-navy"
                    }`}
                  />
                </div>
                <span className="text-xs font-semibold uppercase tracking-wide text-muted-foreground mb-1">
                  {tag}
                </span>
                <h3 className="font-serif text-xl font-bold text-navy mb-3">{title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed flex-1">{desc}</p>
              </div>
            </ScrollFadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ─── How Revision Works ────────────────────────────────── */
function HowRevisionWorks() {
  const steps = [
    {
      num: "1",
      title: "Free Second Opinion",
      desc: "Meet with Dr. Lange. Share your history. He evaluates your anatomy and identifies the root cause of the issue.",
    },
    {
      num: "2",
      title: "Personalized Plan",
      desc: "Endoscopic, robotic, or conversion — Dr. Lange recommends the right revision approach for your specific situation.",
    },
    {
      num: "3",
      title: "Insurance + Prep",
      desc: "We verify coverage (many plans cover revision). Pre-op testing, nutrition counseling, and thorough preparation.",
    },
    {
      num: "4",
      title: "Revision + Recovery",
      desc: "The procedure, followed by comprehensive post-op support. This time with the ongoing care to make it last.",
    },
  ];

  return (
    <section className="py-20 bg-white">
      <div className="max-w-5xl mx-auto px-4">
        <ScrollFadeIn>
          <div className="text-center mb-14">
            <span className="inline-block bg-teal/10 text-teal text-sm font-semibold px-4 py-1.5 rounded-full mb-4">
              Your Path Forward
            </span>
            <h2 className="font-serif text-3xl md:text-4xl font-bold text-navy mb-3">
              How Revision Works
            </h2>
            <p className="text-muted-foreground">From second opinion to second chance.</p>
          </div>
        </ScrollFadeIn>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {steps.map(({ num, title, desc }, i) => (
            <ScrollFadeIn key={num} delay={i * 80}>
              <div className="relative">
                <div className="bg-navy rounded-2xl p-6 h-full text-white">
                  <div className="w-10 h-10 bg-magenta rounded-xl flex items-center justify-center font-bold text-lg mb-4">
                    {num}
                  </div>
                  <h3 className="font-serif text-lg font-bold mb-2">{title}</h3>
                  <p className="text-white/75 text-sm leading-relaxed">{desc}</p>
                </div>
              </div>
            </ScrollFadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ─── Insurance Section ─────────────────────────────────── */
function InsuranceSection() {
  const carriers = [
    "BCBS",
    "UnitedHealthcare",
    "Aetna",
    "Cigna",
    "Humana",
    "Medicare",
    "Medicaid",
  ];

  return (
    <section className="py-20 bg-gradient-to-b from-navy/5 to-white">
      <div className="max-w-4xl mx-auto px-4">
        <ScrollFadeIn>
          <div className="text-center mb-10">
            <span className="inline-block bg-green-100 text-green-700 text-sm font-semibold px-4 py-1.5 rounded-full mb-4">
              Insurance & Financing
            </span>
            <h2 className="font-serif text-3xl md:text-4xl font-bold text-navy mb-4">
              Many Plans Cover Revision Surgery
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto leading-relaxed">
              Insurance coverage for revision surgery depends on your plan and the medical necessity of the revision. Our insurance specialist verifies your benefits free of charge.
            </p>
          </div>

          {/* Carrier logos */}
          <div className="flex flex-wrap justify-center gap-3 mb-8">
            {carriers.map((carrier) => (
              <span
                key={carrier}
                className="bg-white border rounded-xl px-5 py-2.5 text-sm font-semibold text-navy shadow-sm"
              >
                {carrier}
              </span>
            ))}
          </div>

          <p className="text-center text-sm text-muted-foreground mb-8">
            Cash pay · CareCredit · Cherry Financing also available
          </p>

          <div className="text-center">
            <Link
              href="/request-consultation"
              className="inline-flex items-center gap-2 bg-magenta hover:bg-magenta/90 text-white font-semibold px-8 py-3.5 rounded-full transition-all shadow-lg"
              data-testid="button-check-coverage"
            >
              Check My Coverage <ArrowRight className="w-4 h-4" />
            </Link>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-6 mt-12">
            {[
              { val: "Free", label: "Second Opinion Consultation" },
              { val: "3", label: "Revision Approaches" },
              { val: "8+ yrs", label: "Revision Experience" },
              { val: "Any", label: "Original Surgery Type" },
            ].map(({ val, label }) => (
              <div key={label} className="text-center">
                <p className="font-serif text-2xl font-bold text-navy">{val}</p>
                <p className="text-xs text-muted-foreground mt-1">{label}</p>
              </div>
            ))}
          </div>
        </ScrollFadeIn>
      </div>
    </section>
  );
}

/* ─── Patient Stories ───────────────────────────────────── */
function PatientStories() {
  const stories = [
    {
      quote:
        "After my lap band failed, I thought I was out of options. Dr. Lange removed the band and converted me to a sleeve. I've lost 80 pounds and feel like a completely different person.",
      name: "Patricia L.",
      label: "Lap band to sleeve conversion",
    },
    {
      quote:
        "I had bypass 6 years ago and regained almost all the weight. Dr. Lange did an endoscopic revision with no new incisions. I'm down 45 pounds and dropping. I wish I'd come here sooner.",
      name: "Marcus W.",
      label: "Endoscopic bypass revision",
    },
    {
      quote:
        "The support with New You is unmatched. I've been other places and felt completely like a number. The team here makes me feel supported, heard, and seen! My results have been amazing.",
      name: "Rainier E.",
      label: "Verified patient",
    },
  ];

  return (
    <section className="py-20 bg-navy">
      <div className="max-w-6xl mx-auto px-4">
        <ScrollFadeIn>
          <div className="text-center mb-12">
            <span className="inline-block bg-white/10 text-white/90 text-sm font-semibold px-4 py-1.5 rounded-full mb-4">
              Patient Stories
            </span>
            <h2 className="font-serif text-3xl md:text-4xl font-bold text-white mb-3">
              Second Chances, Real Results
            </h2>
            <p className="text-white/65">
              From patients who came to Dr. Lange after a previous surgery didn't work.
            </p>
          </div>
        </ScrollFadeIn>

        <div className="grid md:grid-cols-3 gap-6">
          {stories.map(({ quote, name, label }, i) => (
            <ScrollFadeIn key={name} delay={i * 100}>
              <div className="bg-white/8 border border-white/10 rounded-2xl p-7 h-full flex flex-col">
                <div className="flex gap-1 mb-4">
                  {[1, 2, 3, 4, 5].map((s) => (
                    <Star key={s} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                  ))}
                </div>
                <p className="text-white/85 text-sm leading-relaxed italic flex-1 mb-6">
                  "{quote}"
                </p>
                <div>
                  <p className="font-semibold text-white">{name}</p>
                  <p className="text-xs text-white/55">{label}</p>
                </div>
              </div>
            </ScrollFadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ─── Dr. Lange Section ─────────────────────────────────── */
function DrLangeSection() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-4xl mx-auto px-4">
        <ScrollFadeIn>
          <div className="bg-gradient-to-br from-navy/5 to-teal/5 rounded-3xl p-8 md:p-12 border border-navy/10">
            <div className="flex flex-col md:flex-row gap-8 items-start">
              <div className="md:w-24 shrink-0">
                <div className="w-20 h-20 bg-navy rounded-2xl flex items-center justify-center">
                  <Users className="w-10 h-10 text-white" />
                </div>
              </div>
              <div className="flex-1">
                <h2 className="font-serif text-2xl md:text-3xl font-bold text-navy mb-2">
                  Dr. Matthew Lange
                </h2>
                <p className="text-magenta font-semibold text-sm mb-4">
                  Fellowship-Trained Bariatric &amp; Revision Surgeon
                </p>
                <p className="text-muted-foreground leading-relaxed mb-6">
                  Dr. Lange completed his bariatric surgery fellowship at the Cleveland Clinic, one of the top programs in the country. He specializes in complex revision and conversion cases. Whether your original surgery was done 2 years ago or 20, whether it was done in St. Louis or across the country, he can evaluate your anatomy and recommend a path forward.
                </p>
                <div className="flex flex-wrap gap-3">
                  {[
                    "Cleveland Clinic Fellowship",
                    "Revision Specialist",
                    "Endoscopic + Robotic",
                    "Mercy & St. Luke's",
                  ].map((cred) => (
                    <span
                      key={cred}
                      className="bg-navy/8 text-navy text-xs font-semibold px-3 py-1.5 rounded-full"
                    >
                      {cred}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </ScrollFadeIn>
      </div>
    </section>
  );
}

/* ─── Had Surgery Somewhere Else? ───────────────────────── */
function SomewhereElseSection() {
  return (
    <section className="py-16 bg-teal/5">
      <div className="max-w-3xl mx-auto px-4">
        <ScrollFadeIn>
          <div className="text-center">
            <div className="w-14 h-14 bg-teal/15 rounded-2xl flex items-center justify-center mx-auto mb-6">
              <Video className="w-7 h-7 text-teal" />
            </div>
            <h2 className="font-serif text-2xl md:text-3xl font-bold text-navy mb-4">
              Had Surgery Somewhere Else?
            </h2>
            <p className="text-muted-foreground max-w-xl mx-auto mb-8 leading-relaxed">
              No problem. Start with a virtual consultation from anywhere. Dr. Lange can review your history, assess your situation, and discuss revision options before you travel to St. Louis for the procedure.
            </p>
            <Link
              href="/request-consultation"
              className="inline-flex items-center gap-2 bg-teal hover:bg-teal/90 text-white font-semibold px-8 py-3.5 rounded-full transition-all shadow-lg"
              data-testid="button-virtual-consult"
            >
              Book Virtual Consult <ArrowRight className="w-4 h-4" />
            </Link>
            <div className="flex items-center justify-center gap-2 mt-5 text-sm text-muted-foreground">
              <MapPin className="w-4 h-4 text-navy shrink-0" />
              <span>1000 Des Peres Rd, Suite 120, St. Louis, MO 63131</span>
            </div>
            <div className="flex items-center justify-center gap-2 mt-1 text-sm text-muted-foreground">
              <Phone className="w-4 h-4 text-navy shrink-0" />
              <span>314-887-7605 · Mon-Fri 8AM–5PM</span>
            </div>
          </div>
        </ScrollFadeIn>
      </div>
    </section>
  );
}

/* ─── FAQs ──────────────────────────────────────────────── */
function RevisionFAQs() {
  const [open, setOpen] = useState<number | null>(null);

  const faqs = [
    {
      q: "Does insurance cover revision surgery?",
      a: "Many plans cover revision when medically necessary. Requirements vary. Our insurance specialist verifies your benefits free of charge. Cash pay and CareCredit financing also available.",
    },
    {
      q: "I had surgery at a different practice. Can I still come to you?",
      a: "Absolutely. Dr. Lange evaluates patients regardless of where their original surgery was performed. We'll request your records and conduct our own comprehensive evaluation.",
    },
    {
      q: "What's the difference between endoscopic and surgical revision?",
      a: "Endoscopic revision uses a flexible scope through the mouth — no incisions, faster recovery. Surgical revision uses small laparoscopic or robotic incisions for more complex corrections. Dr. Lange recommends the best approach for your anatomy.",
    },
    {
      q: "How long is recovery for revision surgery?",
      a: "Endoscopic: 1-3 days. Laparoscopic/robotic: 2-4 weeks. Recovery varies by the complexity of the revision. Dr. Lange provides detailed recovery expectations during your consultation.",
    },
    {
      q: "My lap band failed. What are my options?",
      a: "Common conversions include lap band to gastric sleeve and lap band to gastric bypass. Dr. Lange removes the band and converts to a procedure with better long-term outcomes — in a single operation when possible.",
    },
    {
      q: "I regained weight after gastric sleeve. Is revision possible?",
      a: "Yes. Options include sleeve revision (re-sleeving), conversion to gastric bypass, or conversion to duodenal switch/SADI-S. The choice depends on your anatomy and goals.",
    },
    {
      q: "What about GLP-1 instead of more surgery?",
      a: "GLP-1 medications can help with weight regain after surgery. Dr. Lange may recommend GLP-1 alone, as a bridge before revision, or in combination with surgical revision for the best outcome.",
    },
  ];

  return (
    <section className="py-20 bg-white">
      <div className="max-w-3xl mx-auto px-4">
        <ScrollFadeIn>
          <div className="text-center mb-10">
            <span className="inline-block bg-navy/5 text-navy text-sm font-semibold px-4 py-1.5 rounded-full mb-4">
              Questions
            </span>
            <h2 className="font-serif text-3xl md:text-4xl font-bold text-navy mb-3">
              Frequently Asked
            </h2>
            <p className="text-muted-foreground">Everything about revision surgery.</p>
          </div>
        </ScrollFadeIn>

        <div className="space-y-3">
          {faqs.map((faq, i) => (
            <ScrollFadeIn key={i} delay={i * 40}>
              <div className="border rounded-2xl overflow-hidden">
                <button
                  onClick={() => setOpen(open === i ? null : i)}
                  className="w-full flex items-center justify-between p-5 text-left hover:bg-gray-50 transition-colors"
                  data-testid={`button-faq-revision-${i}`}
                >
                  <span className="font-medium text-navy pr-4">{faq.q}</span>
                  <ChevronDown
                    className={`w-5 h-5 text-muted-foreground shrink-0 transition-transform duration-200 ${
                      open === i ? "rotate-180" : ""
                    }`}
                  />
                </button>
                {open === i && (
                  <div className="px-5 pb-5 text-sm text-muted-foreground leading-relaxed border-t pt-4">
                    {faq.a}
                  </div>
                )}
              </div>
            </ScrollFadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ─── Cross-sell / Full Support System ─────────────────── */
function FullSupportSystem() {
  const services = [
    {
      icon: Heart,
      title: "GLP-1 Program",
      desc: "GLP-1 can complement revision surgery or help manage weight regain without additional surgery.",
      detail: "$249–$349/month",
      href: "/glp1",
    },
    {
      icon: Sparkles,
      title: "Red Light Therapy",
      desc: "Body contouring and skin tightening after significant weight loss. Many revision patients add at month 3.",
      detail: "From $440",
      href: "/red-light-therapy",
    },
    {
      icon: Zap,
      title: "Hair Restoration",
      desc: "Weight loss after revision can trigger temporary shedding. ALMA TED restores density.",
      detail: "Free evaluation",
      href: "/hair-restoration",
    },
    {
      icon: Brain,
      title: "REFRAME Coaching",
      desc: "Behavioral and mindset support to make lasting changes. Stress management, emotional eating strategies.",
      detail: "Included in membership",
      href: "/membership",
    },
  ];

  return (
    <section className="py-20 bg-gradient-to-b from-navy/3 to-white">
      <div className="max-w-6xl mx-auto px-4">
        <ScrollFadeIn>
          <div className="text-center mb-12">
            <span className="inline-block bg-teal/10 text-teal text-sm font-semibold px-4 py-1.5 rounded-full mb-4">
              Complete Care
            </span>
            <h2 className="font-serif text-3xl md:text-4xl font-bold text-navy mb-3">
              Your Full Support System
            </h2>
            <p className="text-muted-foreground max-w-xl mx-auto">
              The difference this time? Ongoing care. Every service you need for lasting results.
            </p>
          </div>
        </ScrollFadeIn>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {services.map(({ icon: Icon, title, desc, detail, href }, i) => (
            <ScrollFadeIn key={title} delay={i * 80}>
              <Link href={href} className="block h-full group">
                <div className="bg-white border rounded-2xl p-6 h-full hover:shadow-md hover:border-teal/40 transition-all">
                  <div className="w-10 h-10 bg-teal/10 rounded-xl flex items-center justify-center mb-4">
                    <Icon className="w-5 h-5 text-teal" />
                  </div>
                  <h3 className="font-serif text-base font-bold text-navy mb-2">{title}</h3>
                  <p className="text-xs text-muted-foreground leading-relaxed mb-3">{desc}</p>
                  <p className="text-xs font-semibold text-magenta">{detail}</p>
                  <p className="text-xs text-teal font-semibold mt-2 group-hover:underline">
                    Learn More →
                  </p>
                </div>
              </Link>
            </ScrollFadeIn>
          ))}
        </div>

        {/* Final CTA */}
        <ScrollFadeIn>
          <div className="bg-navy rounded-3xl p-10 text-center">
            <h2 className="font-serif text-3xl md:text-4xl font-bold text-white mb-3">
              You Deserve a Second Chance.
            </h2>
            <p className="text-white/70 mb-8 max-w-xl mx-auto">
              Free second opinion with Dr. Lange. No referral needed. No judgment. Just a plan that works this time.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/request-consultation"
                className="inline-flex items-center justify-center gap-2 bg-magenta hover:bg-magenta/90 text-white font-semibold px-8 py-3.5 rounded-full transition-all shadow-lg"
                data-testid="button-final-cta-revision"
              >
                Request Second Opinion <ArrowRight className="w-4 h-4" />
              </Link>
              <a
                href="tel:3148877605"
                className="inline-flex items-center justify-center gap-2 bg-white/10 hover:bg-white/20 border border-white/20 text-white font-semibold px-8 py-3.5 rounded-full transition-all"
                data-testid="button-call-revision"
              >
                <Phone className="w-4 h-4" /> 314-887-7605
              </a>
            </div>
          </div>
        </ScrollFadeIn>
      </div>
    </section>
  );
}
