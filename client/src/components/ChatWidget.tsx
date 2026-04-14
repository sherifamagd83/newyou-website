import { useState, useRef, useEffect } from "react";
import { MessageCircle, X, Send, ArrowRight, Bot } from "lucide-react";

type Message = { role: "bot" | "user"; text: string; actions?: { label: string; href: string }[] };

const KNOWLEDGE_BASE: { patterns: string[]; answer: string; actions?: { label: string; href: string }[] }[] = [
  // Procedures
  { patterns: ["gastric sleeve", "sleeve surgery", "vsg", "sleeve gastrectomy"], answer: "Gastric sleeve (VSG) removes about 80% of the stomach, creating a banana-shaped sleeve. It's the #1 bariatric procedure worldwide with 60-70% excess weight loss in 12-18 months. Most insurance plans cover it.", actions: [{ label: "Learn More", href: "/procedures/gastric-sleeve" }, { label: "Book Consultation", href: "/book" }] },
  { patterns: ["gastric bypass", "roux-en-y", "rny", "bypass surgery"], answer: "Gastric bypass (Roux-en-Y) creates a small stomach pouch and reroutes the small intestine. It's the gold standard for maximum weight loss — 70-80% excess weight loss with up to 83% Type 2 Diabetes remission.", actions: [{ label: "Learn More", href: "/procedures/gastric-bypass" }, { label: "Book Consultation", href: "/book" }] },
  { patterns: ["revision", "redo", "failed surgery", "weight regain", "second opinion", "lap band", "band removal"], answer: "Dr. Lange specializes in revision and conversion surgery for patients whose previous weight loss surgery didn't deliver expected results. He offers endoscopic, robotic/laparoscopic, and conversion approaches. We welcome patients from other practices.", actions: [{ label: "Learn More", href: "/procedures/revision-surgery" }, { label: "Request Second Opinion", href: "/procedures/revision-surgery" }] },
  { patterns: ["duodenal switch", "ds surgery"], answer: "The Duodenal Switch is the most powerful bariatric procedure — combining sleeve gastrectomy with intestinal bypass for up to 80% excess weight loss. Best for patients with severe obesity or multiple comorbidities.", actions: [{ label: "Learn More", href: "/procedures/duodenal-switch" }] },
  { patterns: ["sadi", "sadi-s", "single anastomosis"], answer: "SADI-S is a simplified, highly effective alternative to the traditional duodenal switch. Studies show up to 100% excess weight loss. It combines a sleeve with a single-loop intestinal bypass.", actions: [{ label: "Learn More", href: "/procedures/sadi-s" }] },
  { patterns: ["orbera", "balloon", "intragastric", "gastric balloon"], answer: "ORBERA® is a soft, saline-filled balloon placed in your stomach in just 20 minutes — no surgery, no incisions. It stays for 6 months and helps you lose 10-15% of your body weight. Ideal for BMI 30-40.", actions: [{ label: "Learn More", href: "/procedures/orbera" }] },

  // GLP-1
  { patterns: ["glp-1", "glp1", "semaglutide", "ozempic", "wegovy", "injection", "medication weight loss", "no surgery"], answer: "Our GLP-1/Semaglutide program starts at $249/month with medical supervision by Dr. Lange. Average weight loss is 15-20% of body weight — no surgery required. We also offer a Complete plan at $349/month with more frequent check-ins and dietitian sessions.", actions: [{ label: "View Plans", href: "/glp1" }, { label: "Book Consultation", href: "/book" }] },

  // Aesthetics
  { patterns: ["hair restoration", "hair loss", "hair thinning", "alma ted", "hair growth"], answer: "We offer needle-free ALMA TED hair restoration — 20-minute sessions with zero downtime. Packages start at $600/session, with a 3-pack at $1,500 ($500/ea) and 6-pack at $2,700 ($450/ea). We also carry Nutrafol supplements.", actions: [{ label: "Learn More", href: "/hair-restoration" }, { label: "Book Evaluation", href: "/hair-restoration" }] },
  { patterns: ["skin tightening", "accent prime", "accentprime", "body contouring", "loose skin", "coolsculpting"], answer: "Accent Prime uses ultrasound + radiofrequency to reduce fat and tighten skin — no surgery, no downtime. Single session $350, Transform 4-pack $1,200, Sculpt 6-pack $1,650. Unlike CoolSculpting, Accent Prime tightens skin AND reduces fat simultaneously.", actions: [{ label: "Learn More", href: "/skin-tightening" }, { label: "Book Consultation", href: "/skin-tightening" }] },
  { patterns: ["red light", "light therapy", "lumara", "scar", "cellulite"], answer: "Our Lumara red light therapy sessions are 25 minutes and help with body contouring, skin tightening, scar reduction, and recovery. Packages start at $440 for 4 sessions. Every package includes an InBody composition scan.", actions: [{ label: "Learn More", href: "/red-light-therapy" }, { label: "Book Consultation", href: "/red-light-therapy" }] },

  // Insurance & Pricing
  { patterns: ["insurance", "coverage", "covered", "does insurance", "which insurance", "bcbs", "united", "aetna", "cigna", "humana", "medicare", "medicaid"], answer: "We accept most major insurance plans including BCBS, UnitedHealthcare, Aetna, Cigna, Humana, Medicare, and Medicaid. Most bariatric procedures are covered when medically necessary. Our specialist Kristina handles the entire authorization process. We offer complimentary insurance verification.", actions: [{ label: "Verify Insurance", href: "/insurance" }] },
  { patterns: ["cost", "price", "how much", "afford", "payment", "finance", "financing", "cherry", "carecredit", "cash pay"], answer: "Costs vary by procedure. With insurance, most patients pay $0-$2,500 out of pocket. Cash pay starts at $15,000 with surgery in as little as 30 days. We offer Cherry patient financing (no hard credit check, 0% APR options) and CareCredit. GLP-1 starts at $249/month.", actions: [{ label: "View Financing", href: "/financing" }, { label: "Verify Insurance", href: "/insurance" }] },

  // BMI & Candidacy
  { patterns: ["bmi", "qualify", "candidate", "am i eligible", "do i qualify", "weight requirement"], answer: "Generally, bariatric surgery candidates have a BMI of 40+ or BMI 35+ with obesity-related conditions (diabetes, sleep apnea, high blood pressure). For GLP-1 medication, BMI 27+ with a weight-related condition. Take our 2-minute quiz to find out which option may be right for you.", actions: [{ label: "Take the Quiz", href: "/quiz" }, { label: "BMI Calculator", href: "/#bmi" }] },

  // Recovery
  { patterns: ["recovery", "how long", "back to work", "hospital stay", "pain", "diet after", "what to eat"], answer: "Most patients stay 1-2 nights after surgery and return to work in 2-4 weeks. You'll start with a liquid diet for 2 weeks, then advance to pureed foods and eventually regular meals. Dr. Lange uses a multi-modal pain approach that minimizes narcotic use.", actions: [{ label: "What to Expect", href: "/start-here" }, { label: "FAQs", href: "/faqs" }] },

  // Hair loss after surgery
  { patterns: ["hair loss after surgery", "losing hair", "hair falling out"], answer: "Hair thinning 3-6 months after bariatric surgery is very common and temporary — it's caused by the stress of surgery and rapid weight loss. Consistent protein intake (60-70g/day) is the most important preventive measure. Hair typically stabilizes around month 6. We also offer ALMA TED hair restoration treatments.", actions: [{ label: "Hair Restoration", href: "/hair-restoration" }, { label: "Vitamin Store", href: "/vitamins" }] },

  // Support
  { patterns: ["support group", "community", "emotional", "mental health", "counseling", "coaching"], answer: "We offer monthly patient support groups (3rd Tuesday of each month) led by our dietitian, plus the REFRAME behavioral coaching program — bi-monthly virtual sessions with Lora Grabow, LMSW. Both are available to all patients.", actions: [{ label: "Support Groups", href: "/support-groups" }, { label: "REFRAME Coaching", href: "/reframe" }] },

  // Vitamins
  { patterns: ["vitamin", "supplement", "protein", "nutrition", "b12", "calcium", "bariatric fusion", "barimelts", "nutrafol"], answer: "We carry 37 bariatric-specific products in our vitamin store — Bariatric Fusion, Bariatric Advantage, Barimelts, Nutrafol, and Metagenics. After surgery, you'll need specialized vitamins for life. Subscriptions available with auto-ship.", actions: [{ label: "Vitamin Store", href: "/vitamins" }] },

  // Dr. Lange
  { patterns: ["dr lange", "doctor", "surgeon", "who is", "credentials", "experience", "about"], answer: "Dr. Matthew A. Lange, DO is a board-certified bariatric surgeon with a fellowship from the Cleveland Clinic. He operates at Mercy and St. Luke's hospitals in St. Louis and has helped hundreds of patients transform their lives through surgical and non-surgical weight loss.", actions: [{ label: "Meet Dr. Lange", href: "/dr-lange" }] },

  // Telehealth
  { patterns: ["telehealth", "virtual", "online", "video visit", "remote", "out of state", "out of town"], answer: "Yes! Dr. Lange offers telehealth consultations for both new and existing patients. You can have your initial consultation virtually from anywhere, and many follow-up appointments can be done via telehealth too.", actions: [{ label: "Telehealth Info", href: "/telehealth" }, { label: "Book Virtual Visit", href: "/book" }] },

  // Location
  { patterns: ["location", "address", "where", "office", "directions", "parking", "st louis"], answer: "We're located at 1000 Des Peres Road, Suite #120, St. Louis, MO 63131. Our office hours are Monday-Friday. Phone: (314) 887-7605.", actions: [{ label: "Contact Us", href: "/contact" }, { label: "Get Directions", href: "https://maps.google.com/?q=1000+Des+Peres+Rd+Suite+120+St+Louis+MO+63131" }] },

  // Booking
  { patterns: ["book", "appointment", "schedule", "consult", "how do i start", "get started", "first step", "next step"], answer: "The first step is a no-obligation consultation with Dr. Lange — available in-person or via telehealth. You can book online or call us at (314) 887-7605. We'll discuss your goals, evaluate your options, and if applicable, start the insurance verification process.", actions: [{ label: "Book Now", href: "/book" }, { label: "Call (314) 887-7605", href: "tel:+13148877605" }] },

  // Membership
  { patterns: ["membership", "member", "discount", "wellness plan", "transform plan"], answer: "New You Membership gives you ongoing access to services at discounted rates. Wellness tier starts at $99/month, Transform at $249/month, and VIP at $449/month — with savings on all procedures, priority scheduling, and InBody tracking.", actions: [{ label: "View Memberships", href: "/glp1#membership" }] },
];

const DEFAULT_ACTIONS = [
  { label: "Book Consultation", href: "/book" },
  { label: "Call (314) 887-7605", href: "tel:+13148877605" },
];

function findAnswer(input: string): Message {
  const lower = input.toLowerCase();
  for (const entry of KNOWLEDGE_BASE) {
    if (entry.patterns.some((p) => lower.includes(p))) {
      return { role: "bot", text: entry.answer, actions: entry.actions };
    }
  }
  return {
    role: "bot",
    text: "That's a great question! For the most accurate answer, I'd recommend speaking directly with our team. Would you like to book a consultation or give us a call?",
    actions: DEFAULT_ACTIONS,
  };
}

export default function ChatWidget() {
  const [open, setOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    {
      role: "bot",
      text: "Hi! I'm the New You assistant. I can help with questions about procedures, pricing, insurance, recovery, and more. What can I help you with?",
      actions: [
        { label: "Am I a Candidate?", href: "/quiz" },
        { label: "View Procedures", href: "/procedures" },
        { label: "Insurance Info", href: "/insurance" },
      ],
    },
  ]);
  const [input, setInput] = useState("");
  const messagesEndRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  const handleSend = () => {
    if (!input.trim()) return;
    const userMsg: Message = { role: "user", text: input.trim() };
    const botResponse = findAnswer(input.trim());
    setMessages((prev) => [...prev, userMsg, botResponse]);
    setInput("");
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      handleSend();
    }
  };

  return (
    <>
      {/* Chat toggle button — offset from Cherry widget */}
      {!open && (
        <button
          onClick={() => setOpen(true)}
          className="fixed bottom-20 sm:bottom-6 right-4 z-50 w-14 h-14 bg-navy hover:bg-navy-light text-white rounded-full shadow-xl flex items-center justify-center transition-all hover:scale-105"
          data-testid="chat-toggle"
          aria-label="Open chat"
        >
          <MessageCircle className="w-6 h-6" />
        </button>
      )}

      {/* Chat window */}
      {open && (
        <div
          className="fixed bottom-20 sm:bottom-6 right-4 z-50 w-[360px] max-w-[calc(100vw-2rem)] bg-white rounded-2xl shadow-2xl border border-gray-200 flex flex-col overflow-hidden"
          style={{ height: "500px", maxHeight: "calc(100vh - 120px)" }}
        >
          {/* Header */}
          <div className="bg-navy px-4 py-3 flex items-center justify-between shrink-0">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 rounded-full bg-white/20 flex items-center justify-center">
                <Bot className="w-4 h-4 text-white" />
              </div>
              <div>
                <p className="text-white font-semibold text-sm">New You Assistant</p>
                <p className="text-white/60 text-xs">Powered by TotalFlow AI</p>
              </div>
            </div>
            <button
              onClick={() => setOpen(false)}
              className="text-white/70 hover:text-white p-1"
              aria-label="Close chat"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Messages */}
          <div
            className="flex-1 overflow-y-auto px-4 py-3 space-y-3"
            style={{ WebkitOverflowScrolling: "touch" }}
          >
            {messages.map((msg, i) => (
              <div key={i} className={`flex ${msg.role === "user" ? "justify-end" : "justify-start"}`}>
                <div
                  className={`max-w-[85%] ${
                    msg.role === "user"
                      ? "bg-navy text-white rounded-2xl rounded-br-md px-4 py-2.5"
                      : "bg-gray-100 text-gray-800 rounded-2xl rounded-bl-md px-4 py-2.5"
                  }`}
                >
                  <p className="text-sm leading-relaxed">{msg.text}</p>
                  {msg.actions && (
                    <div className="flex flex-wrap gap-2 mt-2">
                      {msg.actions.map((action) => (
                        <a
                          key={action.href}
                          href={action.href}
                          onClick={() => setOpen(false)}
                          className={`inline-flex items-center gap-1 text-xs font-semibold px-3 py-1.5 rounded-full transition-colors ${
                            msg.role === "user"
                              ? "bg-white/20 text-white hover:bg-white/30"
                              : "bg-magenta/10 text-magenta hover:bg-magenta/20"
                          }`}
                        >
                          {action.label} <ArrowRight className="w-3 h-3" />
                        </a>
                      ))}
                    </div>
                  )}
                </div>
              </div>
            ))}
            <div ref={messagesEndRef} />
          </div>

          {/* Input */}
          <div className="border-t px-3 py-2.5 shrink-0 bg-white">
            <div className="flex items-center gap-2">
              <input
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyDown={handleKeyDown}
                placeholder="Ask about procedures, pricing, insurance..."
                className="flex-1 px-3 py-2 text-sm rounded-xl bg-gray-100 border-0 outline-none focus:ring-2 focus:ring-magenta/20"
                data-testid="chat-input"
              />
              <button
                onClick={handleSend}
                disabled={!input.trim()}
                className="w-9 h-9 bg-magenta text-white rounded-xl flex items-center justify-center shrink-0 disabled:opacity-40 hover:bg-magenta-light transition-colors"
                data-testid="chat-send"
              >
                <Send className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
