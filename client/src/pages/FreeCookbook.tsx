import { useState } from "react";
import { Book, ChefHat, CheckCircle2, Download, Utensils, Flame, Zap, Heart } from "lucide-react";
import PageHero from "@/components/PageHero";
import ScrollFadeIn from "@/components/ScrollFadeIn";

export default function FreeCookbook() {
  const [submitted, setSubmitted] = useState(false);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div>
      <PageHero
        image="/images/hero/hero-nonsurgical.jpg"
        badge="Free Download"
        title="Free Bariatric Cookbook"
        subtitle="25+ delicious, protein-packed recipes designed for weight loss surgery patients — by our registered dietitian."
      />

      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-5xl mx-auto px-4">
          <div className="grid lg:grid-cols-[1fr_400px] gap-12 items-start">
            {/* Left — Info */}
            <ScrollFadeIn>
              <div>
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-14 h-14 rounded-2xl bg-magenta/10 flex items-center justify-center">
                    <Book className="w-7 h-7 text-magenta" />
                  </div>
                  <div>
                    <h2 className="font-serif text-2xl font-bold text-navy">New You Recipe Collection</h2>
                    <p className="text-sm text-muted-foreground">Developed by our registered dietitian</p>
                  </div>
                </div>

                <p className="text-muted-foreground leading-relaxed mb-8">
                  Diet plays a big role in your weight loss journey — but healthy eating doesn't have to be bland. This free cookbook contains over 25 recipes that will help you hit your protein goals, support fat loss, boost energy, and still enjoy the flavors you love.
                </p>

                <h3 className="font-semibold text-navy mb-4">What's Inside:</h3>
                <div className="grid sm:grid-cols-2 gap-3 mb-8">
                  {[
                    { icon: Utensils, text: "25+ bariatric-friendly recipes" },
                    { icon: Flame, text: "High-protein meal ideas" },
                    { icon: Zap, text: "Quick & easy prep options" },
                    { icon: Heart, text: "Post-surgery approved" },
                    { icon: ChefHat, text: "Developed by a registered dietitian" },
                    { icon: CheckCircle2, text: "Covers all dietary phases" },
                  ].map(({ icon: Icon, text }) => (
                    <div key={text} className="flex items-center gap-3 text-sm">
                      <Icon className="w-5 h-5 text-teal shrink-0" />
                      <span className="text-foreground">{text}</span>
                    </div>
                  ))}
                </div>

                <div className="bg-teal/5 border border-teal/10 rounded-2xl p-6">
                  <p className="text-sm text-muted-foreground">
                    <strong className="text-navy">Perfect for every stage:</strong> Whether you're in the liquid phase, pureed phase, soft foods, or back to regular meals — there are recipes for every step of your journey.
                  </p>
                </div>
              </div>
            </ScrollFadeIn>

            {/* Right — Form */}
            <ScrollFadeIn delay={200}>
              <div className="bg-white rounded-3xl border-2 border-gray-100 p-7 shadow-lg sticky top-24">
                {!submitted ? (
                  <>
                    <div className="text-center mb-6">
                      <Download className="w-10 h-10 text-magenta mx-auto mb-3" />
                      <h3 className="font-serif text-xl font-bold text-navy mb-1">Download Free Cookbook</h3>
                      <p className="text-sm text-muted-foreground">Enter your info and we'll send it right over.</p>
                    </div>
                    <form onSubmit={handleSubmit} className="space-y-4" data-testid="cookbook-form">
                      <input
                        type="text"
                        placeholder="Full Name"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        required
                        className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-magenta focus:ring-2 focus:ring-magenta/20 outline-none transition-all text-sm"
                      />
                      <input
                        type="email"
                        placeholder="Email Address"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        required
                        className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-magenta focus:ring-2 focus:ring-magenta/20 outline-none transition-all text-sm"
                      />
                      <button
                        type="submit"
                        className="w-full bg-magenta hover:bg-magenta-light text-white font-bold py-3.5 rounded-xl transition-all shadow-md flex items-center justify-center gap-2"
                      >
                        <Download className="w-4 h-4" /> Get My Free Cookbook
                      </button>
                      <p className="text-[11px] text-center text-muted-foreground">No spam. Unsubscribe anytime. HIPAA compliant.</p>
                    </form>
                  </>
                ) : (
                  <div className="text-center py-6">
                    <CheckCircle2 className="w-14 h-14 text-green-500 mx-auto mb-4" />
                    <h3 className="font-serif text-xl font-bold text-navy mb-2">Check Your Email!</h3>
                    <p className="text-sm text-muted-foreground">Your free cookbook is on its way to <strong>{email}</strong>. Check your inbox (and spam folder) in the next few minutes.</p>
                  </div>
                )}
              </div>
            </ScrollFadeIn>
          </div>
        </div>
      </section>
    </div>
  );
}
