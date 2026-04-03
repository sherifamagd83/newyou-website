import { useState } from "react";
import { ChevronDown, HelpCircle } from "lucide-react";
import PageHero from "@/components/PageHero";
import ScrollFadeIn from "@/components/ScrollFadeIn";
import LeadForm from "@/components/LeadForm";

type FAQ = { q: string; a: string };
type FAQSection = { title: string; faqs: FAQ[] };

const FAQ_DATA: FAQSection[] = [
  {
    title: "Before Surgery",
    faqs: [
      { q: "What are the routine tests before surgery?", a: "Certain basic tests are done prior to surgery: Complete Blood Count (CBC), Urinalysis, Chemistry Panel, thyroid function test, Glucose Tolerance Test, chest X-ray, and electrocardiogram. Additional tests like sleep studies, echocardiogram, or GI evaluation may be required based on your individual needs. You'll receive a detailed list at your initial evaluation." },
      { q: "Why do I need a psychiatric evaluation?", a: "Most insurance companies require it, but more importantly, it helps evaluate your understanding of the risks, your ability to follow the recovery plan, and identifies any potential concerns that may affect your long-term success. We believe in giving our patients every tool to succeed." },
      { q: "What can I do to prepare before my appointment?", a: "Select a primary care physician, make a list of all diets you've tried, forward pertinent medical records to our office, list all medications with doses, stop smoking (required at least one month before surgery), and start an exercise program to build strength and endurance." },
      { q: "How long does insurance approval take?", a: "After your pre-surgical requirements are met, we submit to your insurance within 1-2 days. Approval typically takes 3-4 weeks or longer. Our insurance specialist Kristina follows up regularly and keeps you updated. We recommend you also call your insurance company about a week after submission to check status." },
    ],
  },
  {
    title: "Surgery & Hospital Stay",
    faqs: [
      { q: "Does laparoscopic surgery increase the risk?", a: "No. Laparoscopic operations carry the same risk as open procedures but with significant benefits: less discomfort, shorter hospital stay, earlier return to work, reduced scarring, and significantly fewer incisional hernias." },
      { q: "Will I have a lot of pain?", a: "Every attempt is made to control pain. We use a multi-modal approach that minimizes narcotic use. We often place tiny catheters that deliver local anesthetic directly to the wound. Many of our patients require minimal to no narcotic use post-operatively." },
      { q: "How long will I be in the hospital?", a: "Generally 23 hours for a laparoscopic bariatric procedure, though this may vary by case complexity. You'll be walking the evening of surgery." },
      { q: "What is done to prevent blood clots (DVT)?", a: "Prevention begins before surgery with sequential leg compression stockings and blood thinners. Both continue throughout your stay. Getting you up and walking as soon as possible after surgery is the third major preventive measure." },
    ],
  },
  {
    title: "Life After Surgery",
    faqs: [
      { q: "How important is exercise after surgery?", a: "Essential. Without daily exercise, your body will burn muscle instead of fat. We'll create a customized plan incorporating resistance training and aerobic exercise. Exercise begins the afternoon of surgery — patients must be up and walking." },
      { q: "Will I lose my hair after surgery?", a: "Many patients experience some hair thinning between months 3-6 after surgery. This is due to the stress of surgery and rapid weight loss. Consistent protein intake is the most important preventive measure. Hair typically stabilizes around month 6 with regrowth beginning after. We also offer hair restoration treatments with the ALMA TED device." },
      { q: "Can I get pregnant after weight loss surgery?", a: "Yes, but you must wait at least one year after surgery. By then your body will be stable from a weight and nutrition standpoint. Our studies show lower rates of cesarean sections, gestational diabetes, and gestational hypertension in post-operative patients." },
      { q: "How soon can I drive?", a: "You should not drive until you've stopped taking narcotic medications and can move quickly and alertly. This is usually 7-14 days after surgery." },
      { q: "Will I need to take vitamins for life?", a: "Yes. After surgery you'll need bariatric-specific vitamins and minerals. At your 2-month follow-up, we'll assess your levels and adjust as needed. We carry all recommended supplements in our vitamin store." },
      { q: "Will I be miserably hungry?", a: "Most patients say no. For the first 4-6 weeks, many have almost no appetite. Over the next several months appetite returns, but it's not the ravenous hunger you're used to. Protein helps control hunger best and lasts longest." },
    ],
  },
  {
    title: "Diet & Nutrition",
    faqs: [
      { q: "How long will I be on liquids after surgery?", a: "You'll be on a full liquid diet for 2 weeks following surgery, then advance to pureed foods. Our expert dietitian will guide you through each step with detailed instructions." },
      { q: "Why is water so important?", a: "High water intake helps eliminate waste products (preventing kidney stones), fills your stomach to prolong satisfaction, and promotes better weight loss. If you feel hungry between meals, you may not have drunk enough water." },
      { q: "What is Dumping Syndrome?", a: "Eating sugars on an empty stomach after gastric bypass can cause your body to dilute them with water, leading to cold sweats, rapid pulse, cramps, and diarrhea lasting 30-60 minutes. It's avoidable by not eating sugary foods on an empty stomach." },
      { q: "How much protein do I need?", a: "60-70 grams per day during rapid weight loss, and 40 grams thereafter. Best sources include eggs, low-fat cottage cheese, fish, lean meats, chicken, and turkey. Supplementation may be needed initially." },
      { q: "Can I drink alcohol after surgery?", a: "Even small amounts will affect you much more quickly. One standard drink may be too much. You'll have higher blood alcohol levels with less consumption, and alcohol is more toxic to your liver post-surgery." },
    ],
  },
  {
    title: "Insurance & General",
    faqs: [
      { q: "Why might insurance deny coverage?", a: "Denial may occur due to a specific policy exclusion for obesity surgery, or for lack of 'medical necessity' documentation. This may include requiring 1-5 years of physician-supervised dieting records. Our insurance specialist Kristina is trained to submit authorization correctly and can guide you through appeals." },
      { q: "What can I do to help the insurance process?", a: "Gather all diet records, medical records, and test results. Letters from your physicians attesting to medical necessity are very valuable. After submission, call your carrier regularly to check status. Your employer's HR department may also help with delays." },
      { q: "What is the youngest age for surgery?", a: "Generally 18 years and older per ASMBS and NIH guidelines. There is concern that younger patients may not have reached full developmental or emotional maturity for this lifelong commitment." },
      { q: "Can weight loss surgery prolong my life?", a: "Yes. Scientific research shows that if you have Type 2 diabetes or other serious obesity-related conditions, are at least 100 lbs over ideal weight, and comply with lifestyle changes, weight loss surgery may significantly prolong your life." },
    ],
  },
];

function FAQItem({ faq }: { faq: FAQ }) {
  const [open, setOpen] = useState(false);
  return (
    <div className="border border-gray-100 rounded-xl overflow-hidden">
      <button
        onClick={() => setOpen(!open)}
        className="w-full flex items-center justify-between p-5 text-left hover:bg-gray-50 transition-colors"
        data-testid={`faq-toggle`}
      >
        <span className="font-semibold text-navy pr-4">{faq.q}</span>
        <ChevronDown className={`w-5 h-5 text-muted-foreground shrink-0 transition-transform duration-200 ${open ? "rotate-180" : ""}`} />
      </button>
      {open && (
        <div className="px-5 pb-5 text-muted-foreground text-sm leading-relaxed border-t border-gray-50 pt-4">
          {faq.a}
        </div>
      )}
    </div>
  );
}

export default function FAQs() {
  return (
    <div>
      <PageHero
        image="/images/hero/hero-doctor.jpg"
        badge="Education Hub"
        title="Frequently Asked Questions"
        subtitle="Everything you need to know about bariatric surgery, recovery, diet, insurance, and life after weight loss."
      />

      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-4xl mx-auto px-4">
          {FAQ_DATA.map((section, si) => (
            <ScrollFadeIn key={section.title} delay={si * 80}>
              <div className="mb-12">
                <h2 className="font-serif text-2xl font-bold text-navy mb-6 flex items-center gap-3">
                  <HelpCircle className="w-6 h-6 text-magenta" />
                  {section.title}
                </h2>
                <div className="space-y-3">
                  {section.faqs.map((faq) => (
                    <FAQItem key={faq.q} faq={faq} />
                  ))}
                </div>
              </div>
            </ScrollFadeIn>
          ))}
        </div>
      </section>

      <section className="py-16 bg-section-gradient">
        <div className="max-w-xl mx-auto px-4">
          <ScrollFadeIn>
            <div className="text-center mb-8">
              <h3 className="font-serif text-xl font-bold text-navy mb-2">Still Have Questions?</h3>
              <p className="text-muted-foreground text-sm">Our team is here to help. Fill out the form below or call us at (314) 887-7605.</p>
            </div>
            <LeadForm variant="full" />
          </ScrollFadeIn>
        </div>
      </section>
    </div>
  );
}
