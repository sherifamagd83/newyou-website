import { useState } from "react";
import { CheckCircle2, ArrowRight } from "lucide-react";

interface Props {
  variant?: "hero" | "sidebar" | "full";
  title?: string;
  className?: string;
}

export default function LeadForm({ variant = "hero", title, className = "" }: Props) {
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({ name: "", email: "", phone: "", interest: "" });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  if (submitted) {
    return (
      <div className={`text-center py-8 px-6 ${variant === "hero" ? "bg-white/10 backdrop-blur-md rounded-2xl" : "bg-white rounded-2xl shadow-xl border"} ${className}`}>
        <CheckCircle2 className={`w-16 h-16 mx-auto mb-4 ${variant === "hero" ? "text-green-400" : "text-green-500"}`} />
        <h3 className={`text-xl font-bold mb-2 ${variant === "hero" ? "text-white" : "text-navy"}`}>We've Received Your Info!</h3>
        <p className={`${variant === "hero" ? "text-white/80" : "text-muted-foreground"}`}>
          Our team will review your information and reach out within 24 hours to discuss your options.
        </p>
      </div>
    );
  }

  const inputBase = variant === "hero"
    ? "bg-white/10 backdrop-blur text-white placeholder:text-white/50 border-white/20 focus:border-white/40 focus:ring-white/20"
    : "bg-gray-50 text-foreground placeholder:text-muted-foreground border-gray-200 focus:border-magenta focus:ring-magenta/20";

  return (
    <form onSubmit={handleSubmit} className={`${variant === "hero" ? "bg-white/10 backdrop-blur-md rounded-2xl p-6 border border-white/10" : variant === "full" ? "space-y-4" : "bg-white rounded-2xl shadow-xl border p-6"} ${className}`} data-testid="form-lead">
      {title && (
        <h3 className={`text-lg font-bold mb-4 ${variant === "hero" ? "text-white" : "text-foreground"}`}>
          {title}
        </h3>
      )}
      <div className={variant === "full" ? "grid grid-cols-1 md:grid-cols-2 gap-4" : "space-y-3"}>
        <input
          type="text" required placeholder="Full Name"
          value={formData.name} onChange={(e) => setFormData({ ...formData, name: e.target.value })}
          className={`w-full px-4 py-3 rounded-xl border text-sm outline-none transition-all focus:ring-2 ${inputBase}`}
          data-testid="input-lead-name"
        />
        <input
          type="email" required placeholder="Email Address"
          value={formData.email} onChange={(e) => setFormData({ ...formData, email: e.target.value })}
          className={`w-full px-4 py-3 rounded-xl border text-sm outline-none transition-all focus:ring-2 ${inputBase}`}
          data-testid="input-lead-email"
        />
        <input
          type="tel" required placeholder="Phone Number"
          value={formData.phone} onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
          className={`w-full px-4 py-3 rounded-xl border text-sm outline-none transition-all focus:ring-2 ${inputBase}`}
          data-testid="input-lead-phone"
        />
        <select
          value={formData.interest} onChange={(e) => setFormData({ ...formData, interest: e.target.value })}
          className={`w-full px-4 py-3 rounded-xl border text-sm outline-none transition-all focus:ring-2 ${inputBase} ${!formData.interest ? (variant === "hero" ? "text-white/50" : "text-muted-foreground") : ""}`}
          data-testid="select-lead-interest"
        >
          <option value="">What are you interested in?</option>
          <option value="gastric-sleeve">Gastric Sleeve</option>
          <option value="gastric-bypass">Gastric Bypass</option>
          <option value="revision">Revision Surgery</option>
          <option value="glp1">GLP-1 / Semaglutide</option>
          <option value="non-surgical">Non-Surgical Options</option>
          <option value="aesthetics">Aesthetics</option>
          <option value="not-sure">Not Sure — Help Me Decide</option>
        </select>
      </div>
      <button
        type="submit"
        className="w-full mt-4 bg-magenta hover:bg-magenta-light text-white font-semibold px-6 py-3.5 rounded-xl transition-all flex items-center justify-center gap-2 shadow-lg hover:shadow-xl text-base"
        data-testid="button-lead-submit"
      >
        See If You Qualify <ArrowRight className="w-4 h-4" />
      </button>
      <p className={`text-xs mt-3 text-center ${variant === "hero" ? "text-white/50" : "text-muted-foreground"}`}>
        Your information is confidential. No obligation. HIPAA compliant.
      </p>
    </form>
  );
}
