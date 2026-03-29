import { Link } from "wouter";
import { ArrowRight, Star, Play, TrendingDown } from "lucide-react";
import ScrollFadeIn from "@/components/ScrollFadeIn";
import AnimatedCounter from "@/components/AnimatedCounter";
import { TRANSFORMATIONS, REVIEWS } from "@/lib/constants";

export default function Results() {
  return (
    <div>
      <section className="hero-gradient py-16 md:py-24 text-center relative overflow-hidden">
        <div className="absolute inset-0"><div className="absolute top-0 left-0 w-[500px] h-[500px] bg-gold/10 rounded-full blur-3xl" /></div>
        <div className="max-w-3xl mx-auto px-4 relative">
          <h1 className="font-serif text-4xl md:text-5xl font-bold text-white mb-4">Success Stories</h1>
          <p className="text-white/80 text-lg">Real patients. Real results. Real transformations.</p>
        </div>
      </section>

      {/* Stats Banner */}
      <section className="bg-navy py-12">
        <div className="max-w-5xl mx-auto px-4 grid grid-cols-2 md:grid-cols-4 gap-8 text-center text-white">
          {[
            { value: 50000, suffix: "+", label: "Total Pounds Lost" },
            { value: 500, suffix: "+", label: "Lives Changed" },
            { value: 98, suffix: "%", label: "Satisfaction Rate" },
            { value: 5, suffix: ".0", label: "Google Rating" },
          ].map(({ value, suffix, label }) => (
            <div key={label}>
              <div className="font-serif text-3xl md:text-4xl font-bold text-gold"><AnimatedCounter end={value} suffix={suffix} /></div>
              <div className="text-white/70 text-sm mt-1">{label}</div>
            </div>
          ))}
        </div>
      </section>

      {/* Before & After Gallery */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <ScrollFadeIn className="text-center mb-12">
            <h2 className="font-serif text-3xl font-bold text-navy mb-4">Before & After Transformations</h2>
            <p className="text-muted-foreground">These patients gave us permission to share their incredible journeys.</p>
          </ScrollFadeIn>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {TRANSFORMATIONS.map((t, i) => (
              <ScrollFadeIn key={t.name} delay={i * 100}>
                <div className="bg-white rounded-2xl border shadow-sm overflow-hidden card-hover">
                  <div className="relative h-52 bg-gradient-to-br from-gray-100 to-gray-200 flex items-center justify-center">
                    <div className="flex gap-3 items-end">
                      <div className="text-center">
                        <div className="w-14 h-24 rounded-lg bg-navy/15 mb-1" />
                        <span className="text-[10px] text-muted-foreground font-medium">{t.before} lbs</span>
                      </div>
                      <TrendingDown className="w-5 h-5 text-magenta mb-6" />
                      <div className="text-center">
                        <div className="w-10 h-20 rounded-lg bg-magenta/15 mb-1" />
                        <span className="text-[10px] text-muted-foreground font-medium">{t.after} lbs</span>
                      </div>
                    </div>
                    <div className="absolute top-3 right-3 bg-magenta text-white text-xs font-bold px-2 py-1 rounded-full">
                      -{t.before - t.after} lbs
                    </div>
                  </div>
                  <div className="p-4">
                    <div className="flex items-center justify-between mb-1">
                      <h4 className="font-semibold text-navy">{t.name}</h4>
                      <span className="text-xs text-muted-foreground">{t.months} months</span>
                    </div>
                    <span className="text-xs bg-navy/5 text-navy px-2 py-0.5 rounded-full font-medium">{t.procedure}</span>
                    <p className="text-sm text-muted-foreground mt-3 italic">"{t.quote}"</p>
                  </div>
                </div>
              </ScrollFadeIn>
            ))}
          </div>

          {/* Extended gallery with more placeholders */}
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-6">
            {[
              { name: "Patricia H.", lost: 85, months: 11, proc: "Gastric Sleeve", quote: "At 62, I thought it was too late. Dr. Lange proved me wrong." },
              { name: "James R.", lost: 130, months: 16, proc: "Gastric Bypass", quote: "I can play with my grandkids now. That's worth everything." },
              { name: "Maria S.", lost: 55, months: 8, proc: "GLP-1 Program", quote: "No surgery needed. The Semaglutide program was perfect for me." },
              { name: "Kevin W.", lost: 95, months: 12, proc: "Revision Surgery", quote: "My band failed but Dr. Lange's revision gave me real results." },
            ].map((t, i) => (
              <ScrollFadeIn key={t.name} delay={i * 100}>
                <div className="bg-white rounded-2xl border shadow-sm overflow-hidden card-hover">
                  <div className="h-40 bg-gradient-to-br from-gray-50 to-gray-100 flex items-center justify-center">
                    <div className="bg-magenta text-white text-lg font-bold px-4 py-2 rounded-xl">-{t.lost} lbs</div>
                  </div>
                  <div className="p-4">
                    <h4 className="font-semibold text-navy">{t.name}</h4>
                    <div className="flex gap-2 text-xs text-muted-foreground mt-1 mb-2">
                      <span>{t.months} months</span>•<span>{t.proc}</span>
                    </div>
                    <p className="text-sm text-muted-foreground italic">"{t.quote}"</p>
                  </div>
                </div>
              </ScrollFadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* Video Testimonials Placeholder */}
      <section className="section-gradient py-20">
        <div className="max-w-7xl mx-auto px-4">
          <ScrollFadeIn className="text-center mb-12">
            <h2 className="font-serif text-3xl font-bold text-navy mb-4">Video Testimonials</h2>
            <p className="text-muted-foreground">Hear directly from our patients about their experiences.</p>
          </ScrollFadeIn>
          <div className="grid md:grid-cols-3 gap-6">
            {["Sarah's 110 lb Transformation", "Michael Reverses Diabetes", "Jennifer's Revision Success"].map((title, i) => (
              <ScrollFadeIn key={title} delay={i * 100}>
                <div className="bg-navy/5 rounded-2xl aspect-video flex items-center justify-center group cursor-pointer card-hover">
                  <div className="text-center">
                    <div className="w-16 h-16 rounded-full bg-magenta/90 flex items-center justify-center mx-auto mb-3 group-hover:scale-110 transition-transform">
                      <Play className="w-7 h-7 text-white ml-1" />
                    </div>
                    <p className="font-semibold text-navy text-sm">{title}</p>
                  </div>
                </div>
              </ScrollFadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* Patient Reviews */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <ScrollFadeIn className="text-center mb-12">
            <h2 className="font-serif text-3xl font-bold text-navy mb-4">Patient Reviews</h2>
          </ScrollFadeIn>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {REVIEWS.map((review, i) => (
              <ScrollFadeIn key={i} delay={i * 80}>
                <div className="bg-white rounded-2xl border shadow-sm p-6 card-hover">
                  <div className="flex gap-1 mb-3">{[1,2,3,4,5].map(s => <Star key={s} className="w-4 h-4 fill-yellow-500 text-yellow-500" />)}</div>
                  <p className="text-sm text-foreground leading-relaxed mb-4">"{review.text}"</p>
                  <div className="flex items-center justify-between pt-3 border-t">
                    <div>
                      <p className="font-semibold text-navy text-sm">{review.name}</p>
                      <p className="text-xs text-muted-foreground">{review.date}</p>
                    </div>
                    <span className="text-xs bg-navy/5 text-navy px-2.5 py-1 rounded-full">{review.procedure}</span>
                  </div>
                </div>
              </ScrollFadeIn>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="max-w-3xl mx-auto px-4 text-center">
          <h2 className="font-serif text-3xl font-bold text-navy mb-4">Ready to Write Your Success Story?</h2>
          <Link href="/request-consultation"
            className="inline-flex items-center gap-2 bg-magenta hover:bg-magenta-light text-white font-semibold px-8 py-4 rounded-full transition-all shadow-lg text-lg"
            data-testid="link-results-cta">
            Start Your Journey Today <ArrowRight className="w-5 h-5" />
          </Link>
        </div>
      </section>
    </div>
  );
}
