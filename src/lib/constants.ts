export const STATS = [
  { num: "100+", label: "Clients Onboarded" },
  { num: "94%", label: "Visa Approval Rate" },
  { num: "3", label: "Platforms Managed" },
  { num: "12mo", label: "Avg. Brand Build Time" },
];

export interface PackageRow {
  feature: string;
  prestige: string;
  pinnacle: string;
}

export const PACKAGE_ROWS: PackageRow[] = [
  { feature: "Website",           prestige: "✓ Included",                        pinnacle: "✓ Included" },
  { feature: "Annual Maintenance", prestige: "₹24,000",                          pinnacle: "₹24,000" },
  { feature: "Branding & USP",    prestige: "Full brand messaging + content",     pinnacle: "Complete brand identity system" },
  { feature: "LinkedIn",          prestige: "✗",                                  pinnacle: "✓ Personal + Business page" },
  { feature: "Instagram",         prestige: "✓ Managed + posts",                 pinnacle: "✓ Managed + posts" },
  { feature: "Posts per Year",    prestige: "108 static (12→24→36→36)",          pinnacle: "108 static + 12 videos (1/month)" },
  { feature: "Posting Platforms", prestige: "Instagram only",                     pinnacle: "Instagram + LinkedIn" },
  { feature: "Blogs",             prestige: "✗",                                  pinnacle: "✓ 4 blogs/year" },
  { feature: "Company Video",     prestige: "✓ 1 brand video",                   pinnacle: "✓ 1 brand video + 2 reels/month" },
  { feature: "Strategy Calls",    prestige: "Monthly",                            pinnacle: "Monthly + dedicated manager" },
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
