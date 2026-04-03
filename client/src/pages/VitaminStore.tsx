import { useState } from "react";
import { Link } from "wouter";
import { ArrowRight, ShoppingBag, ShieldCheck, Truck, Heart, ExternalLink, Star, Pill, Package } from "lucide-react";
import PageHero from "@/components/PageHero";
import ScrollFadeIn from "@/components/ScrollFadeIn";
import { img } from "@/lib/img";

const SHOPIFY_URL = "https://nyswl.myshopify.com/";

type Product = {
  name: string;
  price: string;
  brand: string;
  category: string;
  soldOut?: boolean;
  featured?: boolean;
};

const PRODUCTS: Product[] = [
  // Featured / Best Sellers
  { name: "One Per Day Bariatric Multivitamin With Iron (90 Day)", price: "$46.99", brand: "Bariatric Fusion", category: "Multivitamin", featured: true },
  { name: "Chewable Ultra Solo with Iron (90 ct)", price: "$60.75", brand: "Bariatric Advantage", category: "Multivitamin", featured: true },
  { name: "Multivitamin Soft Chews", price: "$32.99", brand: "Bariatric Fusion", category: "Multivitamin" },
  { name: "Tropical Fruit Multivitamin Soft Chew", price: "$34.99", brand: "Bariatric Fusion", category: "Multivitamin" },
  { name: "Cherry Pineapple Multivitamin Soft Chew", price: "$32.99", brand: "Bariatric Fusion", category: "Multivitamin" },
  { name: "Mixed Berry Multivitamin Soft Chews", price: "$34.99", brand: "Bariatric Fusion", category: "Multivitamin" },
  { name: "Watermelon Multivitamin Soft Chews", price: "$34.99", brand: "Bariatric Fusion", category: "Multivitamin" },
  { name: "Mixed Fruit Flavors Soft Chews", price: "$36.99", brand: "Bariatric Fusion", category: "Multivitamin" },
  { name: "Multivitamin Capsules", price: "$21.99", brand: "Bariatric Fusion", category: "Multivitamin" },
  { name: "High ADEK Multivitamin with 45mg Iron", price: "$24.99", brand: "Bariatric Fusion", category: "Multivitamin" },
  { name: "Barimelts Multivitamin", price: "$26.99", brand: "Barimelts", category: "Multivitamin" },
  { name: "Barimelts Multivitamin + Iron", price: "$26.99", brand: "Barimelts", category: "Multivitamin" },

  // Calcium
  { name: "Calcium Citrate with Vitamin D", price: "$19.99", brand: "Bariatric Fusion", category: "Calcium" },
  { name: "Calcium Soft Chews", price: "$24.99", brand: "Bariatric Fusion", category: "Calcium" },
  { name: "Caramel Calcium Soft Chews", price: "$26.99", brand: "Bariatric Fusion", category: "Calcium" },
  { name: "Fruit Punch Calcium Soft Chews", price: "$26.99", brand: "Bariatric Fusion", category: "Calcium" },

  // Bundles
  { name: "Multivitamin & Calcium Soft Chew Bundle", price: "$57.98", brand: "Bariatric Fusion", category: "Bundle", featured: true },
  { name: "Bypass Bundle w/ Calcium Chews", price: "$92.96", brand: "Bariatric Fusion", category: "Bundle" },
  { name: "Sleeve Bundle w/ Calcium Chews", price: "$66.97", brand: "Bariatric Fusion", category: "Bundle" },

  // Individual Supplements
  { name: "Vitamin D 5000 IU (60 ct)", price: "$9.00", brand: "Bariatric Advantage", category: "Supplement" },
  { name: "B-Complex", price: "$15.99", brand: "Bariatric Fusion", category: "Supplement" },
  { name: "Probiotic Soft Chew", price: "$37.99", brand: "Bariatric Fusion", category: "Supplement" },
  { name: "Magnesium Citrate", price: "$25.00", brand: "Metagenics", category: "Supplement" },
  { name: "Barimelts B1", price: "$16.99", brand: "Barimelts", category: "Supplement" },
  { name: "Barimelts Iron + Vitamin C", price: "$22.99", brand: "Barimelts", category: "Supplement" },

  // Meal Replacement
  { name: "HPMR — Vanilla", price: "$4.50", brand: "Bariatric Advantage", category: "Meal Replacement" },
  { name: "HPMR — Chocolate", price: "$4.50", brand: "Bariatric Advantage", category: "Meal Replacement" },
  { name: "HPMR — Strawberry", price: "$4.50", brand: "Bariatric Advantage", category: "Meal Replacement" },

  // Hair Growth
  { name: "Women's Hair Growth Pack (3-Month)", price: "$209.00", brand: "Nutrafol", category: "Hair Growth" },
  { name: "Men's Hair Growth Pack (3-Month)", price: "$209.00", brand: "Nutrafol", category: "Hair Growth" },
  { name: "Women's Balance Hair Growth Pack (3-Month)", price: "$209.00", brand: "Nutrafol", category: "Hair Growth" },
];

const CATEGORIES = ["All", "Multivitamin", "Calcium", "Bundle", "Supplement", "Meal Replacement", "Hair Growth"];

const brandColor = (brand: string) => {
  if (brand === "Bariatric Fusion") return "bg-teal/10 text-teal";
  if (brand === "Bariatric Advantage") return "bg-blue-100 text-blue-700";
  if (brand === "Barimelts") return "bg-purple-100 text-purple-700";
  if (brand === "Nutrafol") return "bg-green-100 text-green-700";
  if (brand === "Metagenics") return "bg-amber-100 text-amber-700";
  return "bg-gray-100 text-gray-600";
};

export default function VitaminStore() {
  const [filter, setFilter] = useState("All");
  const filtered = filter === "All" ? PRODUCTS : PRODUCTS.filter((p) => p.category === filter);

  return (
    <div>
      <PageHero
        image="/images/hero/hero-nonsurgical.jpg"
        badge="Official Vitamin Store"
        title="Bariatric Vitamins & Supplements"
        subtitle="Doctor-recommended vitamins and supplements from trusted brands — shipped directly to your door."
      />

      {/* Trust strip */}
      <div className="bg-navy py-4">
        <div className="max-w-7xl mx-auto px-4 flex flex-wrap items-center justify-center gap-6 md:gap-10 text-white/80 text-sm">
          {[
            { icon: ShieldCheck, text: "Doctor Recommended" },
            { icon: Pill, text: "Bariatric-Specific Formulas" },
            { icon: Truck, text: "Ships to Your Door" },
            { icon: Heart, text: "Subscribe & Save" },
          ].map(({ icon: Icon, text }) => (
            <div key={text} className="flex items-center gap-2">
              <Icon className="w-4 h-4 text-gold" />
              <span>{text}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Shop CTA Banner */}
      <section className="py-8 bg-gradient-to-r from-magenta/5 to-teal/5">
        <div className="max-w-4xl mx-auto px-4 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <ShoppingBag className="w-8 h-8 text-magenta" />
            <div>
              <p className="font-semibold text-navy">Shop Our Full Store — 37 Products Available</p>
              <p className="text-sm text-muted-foreground">Bariatric Fusion · Bariatric Advantage · Barimelts · Nutrafol · Metagenics</p>
            </div>
          </div>
          <a
            href={SHOPIFY_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-magenta hover:bg-magenta-light text-white font-semibold px-6 py-3 rounded-full transition-all shadow-md whitespace-nowrap"
            data-testid="link-shopify-store"
          >
            Visit Store <ExternalLink className="w-4 h-4" />
          </a>
        </div>
      </section>

      {/* Product Catalog */}
      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <ScrollFadeIn className="text-center mb-8">
            <h2 className="font-serif text-3xl md:text-4xl font-bold text-navy mb-4">Our Product Catalog</h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">Every product is hand-selected by Dr. Lange for bariatric patients. Click any product to order from our store.</p>
          </ScrollFadeIn>

          {/* Category Filter */}
          <div className="flex flex-wrap justify-center gap-2 mb-10">
            {CATEGORIES.map((cat) => (
              <button
                key={cat}
                onClick={() => setFilter(cat)}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${
                  filter === cat
                    ? "bg-navy text-white shadow-md"
                    : "bg-gray-100 text-gray-600 hover:bg-gray-200"
                }`}
                data-testid={`filter-${cat.toLowerCase().replace(/ /g, "-")}`}
              >
                {cat} {cat !== "All" && <span className="text-xs opacity-70">({PRODUCTS.filter((p) => p.category === cat).length})</span>}
              </button>
            ))}
          </div>

          {/* Product Grid */}
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
            {filtered.map((product, i) => (
              <ScrollFadeIn key={product.name} delay={Math.min(i * 50, 400)}>
                <a
                  href={SHOPIFY_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block bg-white rounded-2xl border border-gray-100 p-5 shadow-sm hover:shadow-lg hover:border-magenta/20 transition-all h-full group cursor-pointer"
                >
                  <div className="flex items-center justify-between mb-3">
                    <span className={`text-[11px] font-bold px-2.5 py-1 rounded-full ${brandColor(product.brand)}`}>{product.brand}</span>
                    {product.featured && (
                      <span className="flex items-center gap-1 text-[11px] font-bold text-gold">
                        <Star className="w-3 h-3 fill-gold" /> Best Seller
                      </span>
                    )}
                  </div>
                  <h3 className="font-semibold text-navy text-sm leading-snug mb-3 group-hover:text-magenta transition-colors min-h-[40px]">{product.name}</h3>
                  <div className="flex items-center justify-between pt-3 border-t border-gray-100">
                    <span className="font-bold text-navy text-lg">{product.price}</span>
                    <span className="text-xs bg-navy/5 text-navy px-2 py-1 rounded-full">{product.category}</span>
                  </div>
                </a>
              </ScrollFadeIn>
            ))}
          </div>

          {/* Shop CTA */}
          <ScrollFadeIn className="text-center mt-12">
            <a
              href={SHOPIFY_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-magenta hover:bg-magenta-light text-white font-bold px-10 py-4 rounded-full transition-all shadow-lg text-lg"
            >
              Shop All 37 Products <ExternalLink className="w-5 h-5" />
            </a>
            <p className="text-sm text-muted-foreground mt-4">Secure checkout · Subscriptions available · Pause or cancel anytime</p>
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
              { icon: ShieldCheck, title: "Prevent Deficiencies", desc: "Bariatric surgery changes how your body absorbs vitamins and minerals. Without proper supplementation, deficiencies can develop within months." },
              { icon: Package, title: "Surgery-Specific Bundles", desc: "We offer pre-packaged bundles for sleeve and bypass patients — everything you need in one order, no guesswork." },
              { icon: Heart, title: "Maintain Energy & Wellness", desc: "B12 and iron deficiencies are common post-surgery and can cause fatigue and brain fog. Proper supplementation keeps you energized." },
              { icon: Star, title: "Trusted Brands Only", desc: "We only carry brands trusted by bariatric surgeons nationwide — Bariatric Fusion, Bariatric Advantage, Barimelts, Nutrafol, and Metagenics." },
            ].map(({ icon: Icon, title, desc }, i) => (
              <ScrollFadeIn key={title} delay={i * 100}>
                <div className="flex items-start gap-4 bg-white rounded-2xl p-6 border border-gray-100 shadow-sm">
                  <div className="w-10 h-10 rounded-xl bg-navy flex items-center justify-center shrink-0">
                    <Icon className="w-5 h-5 text-white" />
                  </div>
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
