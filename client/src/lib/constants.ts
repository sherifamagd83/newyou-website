export const PRACTICE = {
  name: "New You Surgical Weight Loss",
  fullName: "New You Surgical Weight Loss & General Surgery",
  phone: "(314) 887-7605",
  phoneLink: "tel:+13148877605",
  fax: "(314) 887-7609",
  exchange: "(314) 306-2226",
  email: "info@nyswl.com",
  address: "1000 Des Peres Rd, Suite 120",
  city: "St. Louis",
  state: "MO",
  zip: "63131",
  fullAddress: "1000 Des Peres Rd, Suite 120, St. Louis, MO 63131",
  mapUrl: "https://www.google.com/maps/place/1000+Des+Peres+Rd+Suite+120,+St.+Louis,+MO+63131",
  portalUrl: "https://mycw217.ecwcloud.com",
  billPayUrl: "https://healowpay.com",
  vitaminStoreUrl: "https://nyswl.myshopify.com",
  website: "newyousurgicalweightloss.com",
  tagline: "Missouri's Premier Bariatric Surgery & Weight Loss Center",
};

export const DOCTOR = {
  name: "Dr. Matthew A. Lange",
  credentials: "DO",
  title: "Medical Director & Lead Bariatric Surgeon",
  fellowship: "Cleveland Clinic Florida — Bariatric Surgery",
  residency: "Michigan State / Genesys Regional Medical Center",
  medSchool: "A.T. Still University, Kirksville College of Osteopathic Medicine",
  affiliations: ["Mercy Hospitals", "St. Luke's Hospitals"],
  yearsExperience: 14,
};

export const TEAM = [
  {
    name: "Dr. Matthew A. Lange, DO",
    role: "Medical Director & Lead Bariatric Surgeon",
    bio: "Board-certified bariatric surgeon with fellowship training at Cleveland Clinic Florida. Over 14 years of experience transforming lives through surgical weight loss.",
  },
  {
    name: "Lora Grabow, LMSW",
    role: "Behavioral Therapist & Coach",
    bio: "Licensed therapist with 20+ years of experience. Creator of the Headwork™ method. Facilitates support groups and leads the REFRAME behavioral coaching program.",
  },
  {
    name: "Barb Warmbrodt",
    role: "Practice Manager",
    bio: "Dedicated practice manager ensuring every patient receives an exceptional, seamless experience from first consultation through lifelong follow-up care.",
  },
  {
    name: "Kristina Mercer, CPC",
    role: "Insurance Specialist",
    bio: "Certified professional coder who ensures every patient gets maximum insurance coverage. Kristina handles pre-authorizations and works directly with insurance companies to simplify the approval process.",
  },
];

export const PROCEDURES = [
  { name: "Gastric Sleeve", slug: "gastric-sleeve", icon: "Minimize2", surgical: true, weightLoss: "60-70%", recovery: "2-4 weeks", description: "The most popular bariatric procedure. Reduces stomach size by ~80%, limiting food intake while preserving natural digestion." },
  { name: "Gastric Bypass", slug: "gastric-bypass", icon: "GitBranch", surgical: true, weightLoss: "70-80%", recovery: "3-5 weeks", description: "Roux-en-Y gastric bypass creates a small stomach pouch and reroutes the intestine for dramatic, sustained weight loss." },
  { name: "Duodenal Switch", slug: "duodenal-switch", icon: "Shuffle", surgical: true, weightLoss: "80-90%", recovery: "4-6 weeks", description: "The most powerful weight loss surgery combining a sleeve gastrectomy with intestinal bypass for maximum results." },
  { name: "SADI-S", slug: "sadi-s", icon: "Zap", surgical: true, weightLoss: "75-85%", recovery: "3-5 weeks", description: "Single Anastomosis Duodeno-Ileal bypass — a simplified version of the duodenal switch with excellent outcomes." },
  { name: "ORBERA® Balloon", slug: "orbera-balloon", icon: "Circle", surgical: false, weightLoss: "10-15%", recovery: "1-3 days", description: "Non-surgical intragastric balloon placed endoscopically. Ideal for BMI 30-40 who want to avoid surgery." },
  { name: "Revision Surgery", slug: "revision-surgery", icon: "RefreshCw", surgical: true, weightLoss: "Varies", recovery: "3-6 weeks", description: "Redo, repair, renew. Expert revision and conversion procedures for patients who need a second chance." },
];

export const NAV_ITEMS = [
  {
    label: "Getting Started",
    href: "/start-here",
    children: [
      { label: "Am I a Candidate?", href: "/quiz" },
      { label: "What to Expect", href: "/start-here" },
      { label: "Insurance & Financing", href: "/insurance" },
      { label: "Patient Forms", href: "/patient-forms" },
    ],
  },
  {
    label: "Procedures",
    href: "/procedures",
    children: [
      { label: "Gastric Sleeve", href: "/procedures/gastric-sleeve" },
      { label: "Gastric Bypass", href: "/procedures/gastric-bypass" },
      { label: "Duodenal Switch", href: "/procedures/duodenal-switch" },
      { label: "SADI-S", href: "/procedures/sadi-s" },
      { label: "Revision Surgery", href: "/procedures/revision-surgery" },
      { label: "ORBERA® Balloon", href: "/procedures/orbera" },
      { label: "Non-Surgical Weight Loss", href: "/non-surgical" },
      { label: "GLP-1 / Semaglutide", href: "/glp1" },
    ],
  },
  {
    label: "Aesthetics",
    href: "/aesthetics",
    children: [
      { label: "Skin Tightening (AccentPrime)", href: "/skin-tightening" },
      { label: "Hair Restoration", href: "/hair-restoration" },
      { label: "Red Light Therapy", href: "/red-light-therapy" },
    ],
  },
  { label: "Results", href: "/results" },
  { label: "Dr. Lange", href: "/dr-lange" },
  {
    label: "For Patients",
    href: "/for-patients",
    children: [
      { label: "Support Groups", href: "/support-groups" },
      { label: "Vitamin Store", href: "https://nyswl.myshopify.com/", external: true },
      { label: "Patient Portal", href: "https://mycw217.ecwcloud.com/portal26390/jsp/100mp/login_otp.jsp", external: true },
      { label: "Pay My Bill", href: "https://www.healowpay.com/HealowPay/jsp/healow/login.jsp", external: true },
      { label: "FAQs", href: "/faqs" },
      { label: "Free Cookbook", href: "/free-cookbook" },
    ],
  },
  { label: "Contact", href: "/contact" },
];

export const REVIEWS = [
  { name: "Sarah M.", date: "February 2026", rating: 5, text: "Dr. Lange changed my life. I was 285 lbs and had tried every diet imaginable. After my gastric sleeve, I've lost 110 lbs and feel like a completely different person. The entire team was incredible.", procedure: "Gastric Sleeve" },
  { name: "Michael T.", date: "January 2026", rating: 5, text: "From the very first consultation, I felt heard and supported. Dr. Lange took time to explain every option. I'm 8 months post-bypass and down 95 lbs. Best decision I ever made.", procedure: "Gastric Bypass" },
  { name: "Jennifer K.", date: "December 2025", rating: 5, text: "I had a failed lap-band from another surgeon. Dr. Lange converted me to a sleeve and the difference is night and day. His expertise with revisions is unmatched in St. Louis.", procedure: "Revision Surgery" },
  { name: "David R.", date: "November 2025", rating: 5, text: "The GLP-1 program was perfect for me since I didn't qualify for surgery. Lost 45 lbs in 6 months with the Semaglutide program. Lora's coaching sessions were the secret weapon.", procedure: "GLP-1 Program" },
  { name: "Amanda L.", date: "October 2025", rating: 5, text: "I'm 2 years post-op and Dr. Lange's team still checks in on me. The support groups with Lora are amazing — it's a family. I went from 310 to 175 lbs and kept it off.", procedure: "Gastric Sleeve" },
  { name: "Robert W.", date: "March 2026", rating: 5, text: "The insurance process was seamless. Rachel and the team handled everything. I was approved in 3 weeks. Dr. Lange is the most skilled, compassionate surgeon I've ever met.", procedure: "Gastric Bypass" },
  { name: "Lisa P.", date: "January 2026", rating: 5, text: "After my weight loss surgery, I did the hair restoration and red light therapy. New You truly is a one-stop shop for transformation. I look and feel 20 years younger.", procedure: "Aesthetics" },
  { name: "Carlos G.", date: "February 2026", rating: 5, text: "Dr. Lange performed my duodenal switch and the results have been incredible. Lost 160 lbs in 14 months. His surgical skill is world-class. Could not recommend more highly.", procedure: "Duodenal Switch" },
];

export const TRANSFORMATIONS = [
  { name: "Sarah M.", before: 285, after: 175, months: 14, procedure: "Gastric Sleeve", quote: "I finally feel like the person I was always meant to be." },
  { name: "Michael T.", before: 340, after: 225, months: 10, procedure: "Gastric Bypass", quote: "My kids can't believe the change. I'm coaching their soccer team now." },
  { name: "Jennifer K.", before: 260, after: 155, months: 18, procedure: "Revision Surgery", quote: "Dr. Lange gave me a second chance when I thought all hope was lost." },
  { name: "Carlos G.", before: 380, after: 220, months: 14, procedure: "Duodenal Switch", quote: "I went from barely walking to running 5Ks. This is my new life." },
];

export const SUPPORT_GROUP_TOPICS_2026 = [
  { month: "January", topic: "New Year, New Habits — Setting Sustainable Goals" },
  { month: "February", topic: "Emotional Eating & Heart Health" },
  { month: "March", topic: "Spring Into Fitness — Movement After Surgery" },
  { month: "April", topic: "Protein Power — Nutrition Deep Dive" },
  { month: "May", topic: "Body Image & Mental Health" },
  { month: "June", topic: "Summer Social Eating Strategies" },
  { month: "July", topic: "Hydration & Vitamin Compliance" },
  { month: "August", topic: "Mindful Eating with Headwork™" },
  { month: "September", topic: "Back-to-Routine: Fall Meal Planning" },
  { month: "October", topic: "Managing Weight Loss Plateaus" },
  { month: "November", topic: "Holiday Eating Survival Guide" },
  { month: "December", topic: "Year in Review — Celebrating Your Wins" },
];
