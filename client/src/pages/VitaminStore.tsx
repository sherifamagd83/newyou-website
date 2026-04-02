import { Link } from "wouter";
import { ArrowRight, ShoppingBag, Star, CheckCircle2, Pill, ShieldCheck, Truck, Heart } from "lucide-react";
import PageHero from "@/components/PageHero";
import ScrollFadeIn from "@/components/ScrollFadeIn";

const PRODUCTS = [
  { name: "Bariatric Complete Multivitamin", desc: "All-in-one daily vitamin specifically formulated for post-bariatric surgery patients. Chewable tablets.", price: "$34.99/mo", badge: "Best Seller", category: "Essential" },
  { name: "Calcium Citrate + D3", desc: "Highly absorbable calcium citrate with Vitamin D3 for bone health after bariatric surgery.", price: "$24.99/mo", badge: null, category: "Essential" },
  { name: "B12 Sublingual", desc: "Fast-absorbing sublingual B12 for optimal energy and neurological health post-surgery.", price: "$18.99/mo", badge: null, category: "Essential" },
  { name: "Iron + Vitamin C", desc: "Gentle iron supplement with Vitamin C for enhanced absorption. Critical after gastric bypass.", price: "$19.99/mo", badge: null, category: "Essential" },
  { name: "Protein Powder — Vanilla", desc: "High-quality whey protein isolate. 30g protein per serving, low sugar, easy on the stomach.", price: "$39.99", badge: "Popular", category: "Protein" },
  { name: "Protein Powder — Chocolate", desc: "Rich chocolate flavor whey protein isolate. 30g protein per serving, bariatric-friendly.", price: "$39.99", badge: null, category: "Protein" },
  { name: "Biotin + Collagen", desc: "Hair, skin, and nail support. Helps address post-surgical hair thinning.", price: "$22.99/mo", badge: null, category: "Wellness" },
  { name: "Probiotic 50B", desc: "50 billion CFU probiotic for gut health and digestion support after bariatric surgery.", price: "$29.99/mo", badge: null, category: "Wellness" },
];

export default function VitaminStore() {
  return (
    <div>
      <PageHero
        image="/images/hero/hero-nonsurgical.jpg"
        badge="Bariatric Nutrition"
        title="Vitamin & Supplement Store"
        subtitle="Doctor-recommended vitamins and supplements specifically formulated for weight loss surgery patients."
      />

      {/* Trust strip */}
      <div className="bg-navy py-4">
        <div className="max-w-7xl mx-auto px-4 flex flex-wrap items-center justify-center gap-6 md:gap-10 text-white/80 text-sm">
          {[
            { icon: ShieldCheck, text: "Doctor Recommended" },
            { icon: Pill, text: "Bariatric-Specific Formulas" },
            { icon: Truck, text: "Free Shipping on Orders $50+" },
            { icon: Heart, text: "Subscribe & Save 15%" },
          ].map(({ icon: Icon, text }) => (
            <div key={text} className="flex items-center gap-2">
              <Icon className="w-4 h-4 text-gold" />
              <span>{text}</span>
            </div>
          ))}
        </div>
      </div>

      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <ScrollFadeIn className="text-center mb-14">
            <h2 className="font-serif text-3xl md:text-4xl font-bold text-navy mb-4">Essential Post-Surgery Vitamins</h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">After bariatric surgery, your body needs specialized nutrition. Our curated selection ensures you get exactly what you need — nothing more, nothing less.</p>
          </ScrollFadeIn>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {PRODUCTS.map((product, i) => (
              <ScrollFadeIn key={product.name} delay={i * 80}>
                <div className="bg-white rounded-2xl border border-gray-100 p-6 shadow-sm hover:shadow-md transition-all h-full flex flex-col group">
                  {product.badge && (
                    <span className="inline-flex self-start bg-magenta/10 text-magenta text-xs font-bold px-2.5 py-1 rounded-full mb-3">{product.badge}</span>
                  )}
                  {!product.badge && <div className="mb-3 h-[26px]" />}
                  <h3 className="font-semibold text-navy text-sm mb-2 group-hover:text-magenta transition-colors">{product.name}</h3>
                  <p className="text-xs text-muted-foreground leading-relaxed mb-4 flex-1">{product.desc}</p>
                  <div className="flex items-center justify-between mt-auto pt-3 border-t border-gray-100">
                    <span className="font-bold text-navy">{product.price}</span>
                    <span className="text-xs bg-navy/5 text-navy px-2 py-1 rounded-full">{product.category}</span>
                  </div>
                </div>
              </ScrollFadeIn>
            ))}
          </div>

          <ScrollFadeIn className="text-center mt-12">
            <p className="text-muted-foreground mb-4">Full store with subscriptions and auto-ship coming soon.</p>
            <Link href="/request-consultation" className="inline-flex items-center gap-2 bg-magenta hover:bg-magenta-light text-white font-semibold px-8 py-3.5 rounded-full transition-all shadow-md" data-testid="link-vitamin-order">
              Contact Us to Order <ArrowRight className="w-4 h-4" />
            </Link>
          </ScrollFadeIn>
        </div>
      </section>

      {/* Why Bariatric Vitamins Matter */}
      <section className="py-16 md:py-24 section-gradient">
        <div className="max-w-4xl mx-auto px-4">
          <ScrollFadeIn className="text-center mb-12">
            <h2 className="font-serif text-2xl md:text-3xl font-bold text-navy mb-4">Why Bariatric Vitamins Are Essential</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">After weight loss surgery, your body absorbs nutrients differently. Standard over-the-counter vitamins aren't enough. You need bariatric-specific formulations.</p>
          </ScrollFadeIn>
          <div className="grid sm:grid-cols-2 gap-6">
            {[
              { title: "Prevent Deficiencies", desc: "Bariatric surgery changes how your body absorbs vitamins and minerals. Without proper supplementation, deficiencies can develop within months." },
              { title: "Protect Bone Health", desc: "Calcium and Vitamin D are critical after surgery. Insufficient levels can lead to osteoporosis and bone density loss over time." },
              { title: "Maintain Energy", desc: "B12 and iron deficiencies are common post-surgery and can cause fatigue, brain fog, and weakness. Proper supplementation keeps you energized." },
              { title: "Support Hair & Skin", desc: "Protein, biotin, and zinc support hair growth and skin health — common concerns in the first year after bariatric surgery." },
            ].map(({ title, desc }, i) => (
              <ScrollFadeIn key={title} delay={i * 100}>
                <div className="flex items-start gap-4 bg-white rounded-2xl p-6 border border-gray-100 shadow-sm">
                  <CheckCircle2 className="w-6 h-6 text-teal shrink-0 mt-0.5" />
                  <div>
                    <h3 className="font-semibold text-navy mb-1">{title}</h3>
                    <p className="text-sm text-muted-foreground leading-relaxed">{desc}</p>
                  </div>
                </div>
              </ScrollFadeIn>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
