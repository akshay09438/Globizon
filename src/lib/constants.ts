export const STATS = [
  { num: "100+", label: "Clients Onboarded" },
  { num: "94%", label: "Visa Approval Rate" },
  { num: "3", label: "Platforms Managed" },
  { num: "12mo", label: "Avg. Brand Build Time" },
];

export interface Package {
  tier: string;
  name: string;
  description: string;
  features: string[];
  featured?: boolean;
}

export const PACKAGES: Package[] = [
  {
    tier: "Basic",
    name: "Personal Brand",
    description:
      "For the individual applicant who needs to establish a credible personal presence online before applying.",
    features: [
      "LinkedIn profile build & management",
      "Instagram setup & management",
      "8 posts/month (personal)",
      "Monthly activity report",
      "Bi-weekly check-in call",
    ],
  },
  {
    tier: "Standard",
    name: "Personal + Business",
    description:
      "For business owners who need both their personal profile and business pages to reflect well on their visa application.",
    features: [
      "Everything in Basic",
      "Business LinkedIn + Instagram page",
      "16 posts/month (personal + business)",
      "Business profile optimisation",
      "Monthly activity report (both profiles)",
      "Weekly strategy call",
    ],
    featured: true,
  },
  {
    tier: "Premium",
    name: "Full Visa Suite",
    description:
      "Full-service brand management with documentation support. For applicants who want nothing left to chance.",
    features: [
      "Everything in Standard",
      "Facebook business page management",
      "24 posts/month across all platforms",
      "Press release & media coverage support",
      "Visa documentation kit (letters, reports)",
      "Priority support + dedicated manager",
    ],
  },
];

export interface Testimonial {
  quote: string;
  author: string;
  meta: string;
}

export const TESTIMONIALS: Testimonial[] = [
  {
    quote:
      '"Our visa consultant told us our LinkedIn and Instagram were among the strongest she\'d seen in a business visa file. Globizon built that from scratch in 6 months."',
    author: "Rajesh M.",
    meta: "E-commerce business owner · Business visa approved, Ontario",
  },
  {
    quote:
      '"I had zero social media presence. Globizon built my personal brand, managed my business pages, and gave me reports I could directly attach to my application."',
    author: "Priya S.",
    meta: "IT consulting firm founder · Business visa approved, British Columbia",
  },
  {
    quote:
      '"The monthly reports Globizon generates were a game-changer. My consultant said it gave the application real credibility. I\'m now a permanent resident."',
    author: "Amit D.",
    meta: "Restaurant chain owner · Business visa approved, Alberta",
  },
  {
    quote:
      '"Worth every rupee. They handled everything — posts, replies, strategy. I focused on my business while they built my brand. Approved in 11 months."',
    author: "Neha K.",
    meta: "Healthcare startup founder · Business visa approved, Manitoba",
  },
];

export interface FAQ {
  q: string;
  a: string;
}

export const FAQS: FAQ[] = [
  {
    q: "Does social media actually affect my business visa application?",
    a: "Yes. Canadian visa officers and consultants now routinely check applicants' online presence to verify business activity and personal credibility. An active, professional presence strengthens your file significantly.",
  },
  {
    q: "Which Canadian visa programs does this help with?",
    a: "Globizon's packages are designed for the Start-Up Visa Program, Provincial Nominee Programs (PNP) for entrepreneurs, and the Self-Employed Persons Program — all of which evaluate business credibility.",
  },
  {
    q: "How long does it take to build a credible presence?",
    a: "Most clients see a substantial presence established within 3–6 months. For visa documentation purposes, we recommend starting at least 6–12 months before your application submission.",
  },
  {
    q: "Do I need to create the content myself?",
    a: "No. We handle everything — strategy, writing, design, and publishing. We just need a monthly 30-minute call with you to align on topics and review your activity.",
  },
  {
    q: "What makes Globizon different from a regular social media agency?",
    a: "We specialise exclusively in business visa-focused personal and business branding. Our content strategy, reporting formats, and documentation kits are built specifically to meet visa application requirements — not just get likes.",
  },
];
