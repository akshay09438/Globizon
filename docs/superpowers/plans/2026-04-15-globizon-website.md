# Globizon Website Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Build a single-page booking-funnel website for Globizon — an immigration branding agency helping Indian business owners build social media presence for Canada PR applications.

**Architecture:** Next.js 15 App Router single-page site. All sections are independent React components assembled in `page.tsx`. Site data (stats, packages, testimonials, FAQs) lives in `lib/constants.ts` so copy changes never require touching components.

**Tech Stack:** Next.js 15, React 19, TypeScript, Tailwind CSS v4, Inter (Google Font)

---

## File Map

| File | Responsibility |
|------|---------------|
| `src/app/layout.tsx` | Root layout — font loading, metadata, body dark bg |
| `src/app/page.tsx` | Assembles all section components top-to-bottom |
| `src/app/globals.css` | Tailwind v4 `@import`, `@theme` tokens, base resets |
| `src/lib/constants.ts` | All site copy — stats, packages, testimonials, FAQs |
| `src/components/Nav.tsx` | Sticky nav — logo + "Book Free Call" CTA |
| `src/components/Hero.tsx` | Hero — headline, subheadline, CTA, urgency line |
| `src/components/Stats.tsx` | 4-stat trust bar |
| `src/components/Problem.tsx` | Problem section — headline + 3 problem cards |
| `src/components/HowItWorks.tsx` | 4-step process grid |
| `src/components/Packages.tsx` | Basic/Standard/Premium pricing cards |
| `src/components/Testimonials.tsx` | 2×2 testimonial grid |
| `src/components/FAQ.tsx` | Accordion FAQ — 5 questions |
| `src/components/BookingCTA.tsx` | Final CTA section — name/email form with success state |
| `src/components/Footer.tsx` | Minimal footer |
| `__tests__/constants.test.ts` | Data shape validation |
| `__tests__/BookingCTA.test.tsx` | Form validation + success state |
| `__tests__/FAQ.test.tsx` | Accordion open/close behavior |

---

## Task 1: Scaffold Next.js 15 project

**Files:**
- Create: `package.json`, `next.config.ts`, `tsconfig.json`, `src/app/layout.tsx`, `src/app/globals.css`, `src/app/page.tsx`

- [ ] **Step 1: Initialise the project**

```bash
cd /c/Users/Akshay
npx create-next-app@latest globizon \
  --typescript \
  --tailwind \
  --eslint \
  --app \
  --src-dir \
  --no-import-alias \
  --turbopack
```

When prompted:
- Would you like to use `src/` directory? → **Yes** (flag already set)
- Would you like to use App Router? → **Yes**
- Would you like to customize the import alias? → **No**

- [ ] **Step 2: Verify dev server starts**

```bash
cd /c/Users/Akshay/globizon
npm run dev
```

Expected: `▲ Next.js 15.x.x` output, server on `http://localhost:3000`. Stop with Ctrl+C.

- [ ] **Step 3: Install testing dependencies**

```bash
cd /c/Users/Akshay/globizon
npm install -D jest jest-environment-jsdom @testing-library/react @testing-library/jest-dom @testing-library/user-event ts-jest
```

- [ ] **Step 4: Create Jest config**

Create `jest.config.ts`:

```typescript
import type { Config } from 'jest'
import nextJest from 'next/jest.js'

const createJestConfig = nextJest({ dir: './' })

const config: Config = {
  coverageProvider: 'v8',
  testEnvironment: 'jsdom',
  setupFilesAfterEnv: ['<rootDir>/jest.setup.ts'],
}

export default createJestConfig(config)
```

- [ ] **Step 5: Create Jest setup file**

Create `jest.setup.ts`:

```typescript
import '@testing-library/jest-dom'
```

- [ ] **Step 6: Add test script to package.json**

Open `package.json` and add to `"scripts"`:

```json
"test": "jest",
"test:watch": "jest --watch"
```

- [ ] **Step 7: Create directories**

```bash
mkdir -p /c/Users/Akshay/globizon/src/components
mkdir -p /c/Users/Akshay/globizon/src/lib
mkdir -p /c/Users/Akshay/globizon/__tests__
```

- [ ] **Step 8: Commit**

```bash
cd /c/Users/Akshay/globizon
git add -A
git commit -m "chore: scaffold Next.js 15 + testing setup"
```

---

## Task 2: Global styles and theme tokens

**Files:**
- Modify: `src/app/globals.css`
- Modify: `src/app/layout.tsx`

- [ ] **Step 1: Replace globals.css with Tailwind v4 config + theme tokens**

Replace the entire contents of `src/app/globals.css`:

```css
@import "tailwindcss";

@theme {
  --color-bg-base: #0d0d0d;
  --color-bg-surface: #111111;
  --color-bg-elevated: #161616;
  --color-accent: #00e5a0;
  --color-accent-dim: rgba(0, 229, 160, 0.12);
  --color-border: rgba(255, 255, 255, 0.08);
  --color-text-primary: #ffffff;
  --color-text-muted: rgba(255, 255, 255, 0.55);
  --color-text-subtle: rgba(255, 255, 255, 0.35);
  --font-sans: 'Inter', ui-sans-serif, system-ui, sans-serif;
}

* {
  box-sizing: border-box;
}

html {
  scroll-behavior: smooth;
}

body {
  background-color: var(--color-bg-base);
  color: var(--color-text-primary);
  font-family: var(--font-sans);
  -webkit-font-smoothing: antialiased;
}
```

- [ ] **Step 2: Update layout.tsx with Inter font and metadata**

Replace the contents of `src/app/layout.tsx`:

```typescript
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({
  subsets: ['latin'],
  weight: ['400', '600', '700', '800', '900'],
  variable: '--font-inter',
})

export const metadata: Metadata = {
  title: 'Globizon — Immigration Branding for India → Canada',
  description:
    'We manage your personal and business social media so your Canada PR file is bulletproof. Book a free strategy call.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.variable}>{children}</body>
    </html>
  )
}
```

- [ ] **Step 3: Stub out page.tsx**

Replace `src/app/page.tsx`:

```typescript
export default function Home() {
  return (
    <main>
      <p style={{ color: 'white', padding: '2rem' }}>Globizon — coming soon</p>
    </main>
  )
}
```

- [ ] **Step 4: Verify styles load**

```bash
cd /c/Users/Akshay/globizon
npm run dev
```

Open `http://localhost:3000` — background should be `#0d0d0d` (near-black). Stop server.

- [ ] **Step 5: Commit**

```bash
cd /c/Users/Akshay/globizon
git add src/app/globals.css src/app/layout.tsx src/app/page.tsx
git commit -m "style: global theme tokens and Inter font"
```

---

## Task 3: Site constants (all copy in one place)

**Files:**
- Create: `src/lib/constants.ts`
- Create: `__tests__/constants.test.ts`

- [ ] **Step 1: Write the failing test**

Create `__tests__/constants.test.ts`:

```typescript
import { STATS, PACKAGES, TESTIMONIALS, FAQS } from '../src/lib/constants'

describe('constants', () => {
  it('has 4 stats each with num and label', () => {
    expect(STATS).toHaveLength(4)
    STATS.forEach(s => {
      expect(s).toHaveProperty('num')
      expect(s).toHaveProperty('label')
    })
  })

  it('has 3 packages with required fields', () => {
    expect(PACKAGES).toHaveLength(3)
    PACKAGES.forEach(p => {
      expect(p).toHaveProperty('tier')
      expect(p).toHaveProperty('name')
      expect(p).toHaveProperty('description')
      expect(p).toHaveProperty('features')
      expect(p.features.length).toBeGreaterThan(0)
    })
  })

  it('marks exactly one package as featured', () => {
    const featured = PACKAGES.filter(p => p.featured)
    expect(featured).toHaveLength(1)
  })

  it('has 4 testimonials each with quote, author, meta', () => {
    expect(TESTIMONIALS).toHaveLength(4)
    TESTIMONIALS.forEach(t => {
      expect(t).toHaveProperty('quote')
      expect(t).toHaveProperty('author')
      expect(t).toHaveProperty('meta')
    })
  })

  it('has 5 FAQs each with q and a', () => {
    expect(FAQS).toHaveLength(5)
    FAQS.forEach(f => {
      expect(f).toHaveProperty('q')
      expect(f).toHaveProperty('a')
    })
  })
})
```

- [ ] **Step 2: Run test to verify it fails**

```bash
cd /c/Users/Akshay/globizon
npx jest __tests__/constants.test.ts --no-coverage
```

Expected: FAIL — `Cannot find module '../src/lib/constants'`

- [ ] **Step 3: Create constants.ts**

Create `src/lib/constants.ts`:

```typescript
export const STATS = [
  { num: '80+', label: 'Clients Onboarded' },
  { num: '94%', label: 'PR Approval Rate' },
  { num: '3', label: 'Platforms Managed' },
  { num: '12mo', label: 'Avg. Brand Build Time' },
]

export interface Package {
  tier: string
  name: string
  description: string
  features: string[]
  featured?: boolean
}

export const PACKAGES: Package[] = [
  {
    tier: 'Basic',
    name: 'Personal Brand',
    description:
      'For the individual applicant who needs to establish a credible personal presence online before applying.',
    features: [
      'LinkedIn profile build & management',
      'Instagram setup & management',
      '8 posts/month (personal)',
      'Monthly PR activity report',
      'Bi-weekly check-in call',
    ],
  },
  {
    tier: 'Standard',
    name: 'Personal + Business',
    description:
      'For business owners who need both their personal profile and business pages to reflect well on their application.',
    features: [
      'Everything in Basic',
      'Business LinkedIn + Instagram page',
      '16 posts/month (personal + business)',
      'Business profile optimisation',
      'Monthly PR activity report (both profiles)',
      'Weekly strategy call',
    ],
    featured: true,
  },
  {
    tier: 'Premium',
    name: 'Full PR Suite',
    description:
      'Full-service brand management with documentation support. For applicants who want nothing left to chance.',
    features: [
      'Everything in Standard',
      'Facebook business page management',
      '24 posts/month across all platforms',
      'Press release & media coverage support',
      'PR documentation kit (letters, reports)',
      'Priority support + dedicated manager',
    ],
  },
]

export interface Testimonial {
  quote: string
  author: string
  meta: string
}

export const TESTIMONIALS: Testimonial[] = [
  {
    quote:
      '"Our immigration consultant told us our LinkedIn and Instagram were among the strongest she\'d seen in a PR file. Globizon built that from scratch in 6 months."',
    author: 'Rajesh M.',
    meta: 'E-commerce business owner · PR approved, Ontario',
  },
  {
    quote:
      '"I had zero social media presence. Globizon built my personal brand, managed my business pages, and gave me reports I could directly attach to my application."',
    author: 'Priya S.',
    meta: 'IT consulting firm founder · PR approved, British Columbia',
  },
  {
    quote:
      '"The monthly reports Globizon generates were a game-changer. My consultant said it gave the application real credibility. I\'m now a permanent resident."',
    author: 'Amit D.',
    meta: 'Restaurant chain owner · PR approved, Alberta',
  },
  {
    quote:
      '"Worth every rupee. They handled everything — posts, replies, strategy. I focused on my business while they built my brand. Approved in 11 months."',
    author: 'Neha K.',
    meta: 'Healthcare startup founder · PR approved, Manitoba',
  },
]

export interface FAQ {
  q: string
  a: string
}

export const FAQS: FAQ[] = [
  {
    q: 'Does social media actually affect my PR application?',
    a: "Yes. Canadian immigration officers and consultants now routinely check applicants' online presence to verify business activity and personal credibility. An active, professional presence strengthens your file significantly.",
  },
  {
    q: "Which Canadian immigration programs does this help with?",
    a: "Globizon's packages are designed for the Start-Up Visa Program, Provincial Nominee Programs (PNP) for entrepreneurs, and the Self-Employed Persons Program — all of which evaluate business credibility.",
  },
  {
    q: 'How long does it take to build a credible presence?',
    a: 'Most clients see a substantial presence established within 3–6 months. For PR documentation purposes, we recommend starting at least 6–12 months before your application submission.',
  },
  {
    q: 'Do I need to create the content myself?',
    a: 'No. We handle everything — strategy, writing, design, and publishing. We just need a monthly 30-minute call with you to align on topics and review your activity.',
  },
  {
    q: 'What makes Globizon different from a regular social media agency?',
    a: 'We specialise exclusively in immigration-focused personal and business branding. Our content strategy, reporting formats, and documentation kits are built specifically to meet PR application requirements — not just get likes.',
  },
]
```

- [ ] **Step 4: Run test to verify it passes**

```bash
cd /c/Users/Akshay/globizon
npx jest __tests__/constants.test.ts --no-coverage
```

Expected: PASS — 5 tests passing

- [ ] **Step 5: Commit**

```bash
cd /c/Users/Akshay/globizon
git add src/lib/constants.ts __tests__/constants.test.ts
git commit -m "feat: site constants with all copy and data shapes"
```

---

## Task 4: Nav component

**Files:**
- Create: `src/components/Nav.tsx`

- [ ] **Step 1: Create Nav.tsx**

Create `src/components/Nav.tsx`:

```typescript
'use client'

export default function Nav() {
  const scrollToBooking = () => {
    document.getElementById('booking')?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <nav className="sticky top-0 z-50 bg-black/90 backdrop-blur-sm border-b border-white/[0.08]">
      <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
        <span className="text-xl font-black tracking-[0.2em] uppercase text-white">
          GLOBI<span className="text-[#00e5a0]">ZON</span>
        </span>
        <button
          onClick={scrollToBooking}
          className="bg-[#00e5a0] text-black text-[11px] font-black tracking-[0.15em] uppercase px-5 py-2.5 hover:bg-[#00c98e] transition-colors"
        >
          Book Free Call
        </button>
      </div>
    </nav>
  )
}
```

- [ ] **Step 2: Add Nav to page.tsx**

Replace `src/app/page.tsx`:

```typescript
import Nav from '@/components/Nav'

export default function Home() {
  return (
    <main>
      <Nav />
      <p style={{ color: 'white', padding: '2rem' }}>sections coming soon</p>
    </main>
  )
}
```

- [ ] **Step 3: Verify in browser**

```bash
npm run dev
```

Open `http://localhost:3000` — sticky dark nav with GLOBIZON logo and green button visible. Stop server.

- [ ] **Step 4: Commit**

```bash
cd /c/Users/Akshay/globizon
git add src/components/Nav.tsx src/app/page.tsx
git commit -m "feat: sticky nav with scroll-to-booking CTA"
```

---

## Task 5: Hero section

**Files:**
- Create: `src/components/Hero.tsx`

- [ ] **Step 1: Create Hero.tsx**

Create `src/components/Hero.tsx`:

```typescript
'use client'

export default function Hero() {
  const scrollToBooking = () => {
    document.getElementById('booking')?.scrollIntoView({ behavior: 'smooth' })
  }

  const scrollToProcess = () => {
    document.getElementById('how-it-works')?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <section className="bg-[#0d0d0d] px-6 pt-24 pb-20 min-h-[90vh] flex items-center">
      <div className="max-w-6xl mx-auto w-full">
        <p className="text-[11px] font-bold tracking-[0.3em] uppercase text-[#00e5a0] mb-6">
          India → Canada Immigration Branding
        </p>

        <h1 className="text-5xl md:text-7xl font-black leading-[1.05] text-white mb-6 max-w-4xl">
          Your Social Media Is<br />
          Your{' '}
          <em className="not-italic text-[#00e5a0]">Visa Application.</em>
        </h1>

        <p className="text-lg text-white/55 leading-relaxed max-w-xl mb-10">
          Immigration officers look you up online. We make sure what they find
          builds your case — not breaks it. Globizon manages your personal and
          business social presence so your PR file is bulletproof.
        </p>

        <div className="flex flex-wrap items-center gap-4 mb-6">
          <button
            onClick={scrollToBooking}
            className="bg-[#00e5a0] text-black text-[12px] font-black tracking-[0.15em] uppercase px-8 py-4 hover:bg-[#00c98e] transition-colors"
          >
            Book Your Free Strategy Call
          </button>
          <button
            onClick={scrollToProcess}
            className="text-white/50 text-[12px] font-semibold tracking-wide uppercase border-b border-white/20 pb-0.5 hover:text-white/80 transition-colors"
          >
            See How It Works
          </button>
        </div>

        <p className="text-[12px] text-white/35 tracking-wide">
          ⚡ <span className="text-red-400 font-bold">3 spots left</span> for onboarding this month
        </p>
      </div>
    </section>
  )
}
```

- [ ] **Step 2: Add Hero to page.tsx**

```typescript
import Nav from '@/components/Nav'
import Hero from '@/components/Hero'

export default function Home() {
  return (
    <main>
      <Nav />
      <Hero />
    </main>
  )
}
```

- [ ] **Step 3: Verify in browser**

```bash
npm run dev
```

Open `http://localhost:3000` — full-height dark hero with large headline, green accent on "Visa Application.", two CTAs, urgency line. Stop server.

- [ ] **Step 4: Commit**

```bash
cd /c/Users/Akshay/globizon
git add src/components/Hero.tsx src/app/page.tsx
git commit -m "feat: hero section with headline and CTAs"
```

---

## Task 6: Stats bar

**Files:**
- Create: `src/components/Stats.tsx`

- [ ] **Step 1: Create Stats.tsx**

Create `src/components/Stats.tsx`:

```typescript
import { STATS } from '@/lib/constants'

export default function Stats() {
  return (
    <div className="bg-[#161616] border-y border-white/[0.06] px-6 py-8">
      <div className="max-w-6xl mx-auto flex flex-wrap gap-x-16 gap-y-6">
        {STATS.map((stat) => (
          <div key={stat.label}>
            <div className="text-4xl font-black text-white">
              {stat.num}
            </div>
            <div className="text-[11px] text-white/40 tracking-[0.15em] uppercase mt-1">
              {stat.label}
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
```

- [ ] **Step 2: Add Stats to page.tsx**

```typescript
import Nav from '@/components/Nav'
import Hero from '@/components/Hero'
import Stats from '@/components/Stats'

export default function Home() {
  return (
    <main>
      <Nav />
      <Hero />
      <Stats />
    </main>
  )
}
```

- [ ] **Step 3: Commit**

```bash
cd /c/Users/Akshay/globizon
git add src/components/Stats.tsx src/app/page.tsx
git commit -m "feat: stats trust bar"
```

---

## Task 7: Problem section

**Files:**
- Create: `src/components/Problem.tsx`

- [ ] **Step 1: Create Problem.tsx**

Create `src/components/Problem.tsx`:

```typescript
const PROBLEMS = [
  {
    icon: '🔍',
    title: 'Your Online Presence Is Evidence',
    body: 'Visa officers and immigration consultants verify your business credibility through your digital footprint. A weak online presence raises red flags.',
  },
  {
    icon: '📄',
    title: 'Documentation Needs Proof',
    body: 'Your PR file needs to show active business operations. A consistent posting history across platforms serves as timestamped, verifiable evidence.',
  },
  {
    icon: '🏆',
    title: 'Competition Is Fierce',
    body: 'Thousands of Indian entrepreneurs are applying. The ones with a strong personal brand and active business profile stand out — and get approved faster.',
  },
]

export default function Problem() {
  return (
    <section className="bg-[#0d0d0d] px-6 py-24">
      <div className="max-w-6xl mx-auto">
        <span className="inline-block text-[10px] font-bold tracking-[0.3em] uppercase text-[#00e5a0] bg-[#00e5a0]/10 px-2.5 py-1 mb-5">
          The Problem
        </span>

        <h2 className="text-4xl md:text-5xl font-black leading-[1.1] text-white mb-6 max-w-2xl">
          Immigration Officers{' '}
          <em className="not-italic text-[#00e5a0]">Google You.</em>
          <br />What Do They Find?
        </h2>

        <p className="text-[17px] text-white/55 leading-relaxed max-w-xl mb-14">
          Canada's PR programs require you to prove your business is real, your
          leadership is credible, and your presence is established. A blank
          Instagram and a LinkedIn with 12 connections doesn't cut it anymore.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {PROBLEMS.map((p) => (
            <div
              key={p.title}
              className="bg-white/[0.03] border border-white/[0.08] p-7"
            >
              <div className="text-3xl mb-4">{p.icon}</div>
              <h4 className="text-[15px] font-bold text-white mb-2">{p.title}</h4>
              <p className="text-[13px] text-white/45 leading-relaxed">{p.body}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
```

- [ ] **Step 2: Add Problem to page.tsx**

```typescript
import Nav from '@/components/Nav'
import Hero from '@/components/Hero'
import Stats from '@/components/Stats'
import Problem from '@/components/Problem'

export default function Home() {
  return (
    <main>
      <Nav />
      <Hero />
      <Stats />
      <Problem />
    </main>
  )
}
```

- [ ] **Step 3: Commit**

```bash
cd /c/Users/Akshay/globizon
git add src/components/Problem.tsx src/app/page.tsx
git commit -m "feat: problem section with 3 cards"
```

---

## Task 8: How It Works section

**Files:**
- Create: `src/components/HowItWorks.tsx`

- [ ] **Step 1: Create HowItWorks.tsx**

Create `src/components/HowItWorks.tsx`:

```typescript
const STEPS = [
  {
    num: '01',
    title: 'Brand Strategy Session',
    body: 'We map out your personal narrative, business story, and the exact angles that resonate with Canadian immigration standards.',
  },
  {
    num: '02',
    title: 'Profile Setup & Optimisation',
    body: 'LinkedIn, Instagram, and more — fully built out with professional copy, visuals, and keyword-optimised bios.',
  },
  {
    num: '03',
    title: 'Ongoing Content & Management',
    body: 'Monthly content calendars, post creation, publishing, and community management — all done for you.',
  },
  {
    num: '04',
    title: 'Monthly PR-Ready Reports',
    body: 'We generate activity reports you can submit directly as supporting documentation in your PR application file.',
  },
]

export default function HowItWorks() {
  return (
    <section id="how-it-works" className="bg-[#111] px-6 py-24">
      <div className="max-w-6xl mx-auto">
        <span className="inline-block text-[10px] font-bold tracking-[0.3em] uppercase text-[#00e5a0] bg-[#00e5a0]/10 px-2.5 py-1 mb-5">
          How It Works
        </span>

        <h2 className="text-4xl md:text-5xl font-black leading-[1.1] text-white mb-16 max-w-xl">
          We Handle Everything.<br />You Focus on Your Move.
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {STEPS.map((step) => (
            <div key={step.num}>
              <div className="text-6xl font-black text-[#00e5a0]/10 leading-none mb-4">
                {step.num}
              </div>
              <h4 className="text-[15px] font-bold text-white mb-2">{step.title}</h4>
              <p className="text-[13px] text-white/45 leading-relaxed">{step.body}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
```

- [ ] **Step 2: Add HowItWorks to page.tsx**

```typescript
import Nav from '@/components/Nav'
import Hero from '@/components/Hero'
import Stats from '@/components/Stats'
import Problem from '@/components/Problem'
import HowItWorks from '@/components/HowItWorks'

export default function Home() {
  return (
    <main>
      <Nav />
      <Hero />
      <Stats />
      <Problem />
      <HowItWorks />
    </main>
  )
}
```

- [ ] **Step 3: Commit**

```bash
cd /c/Users/Akshay/globizon
git add src/components/HowItWorks.tsx src/app/page.tsx
git commit -m "feat: how it works 4-step section"
```

---

## Task 9: Packages section

**Files:**
- Create: `src/components/Packages.tsx`

- [ ] **Step 1: Create Packages.tsx**

Create `src/components/Packages.tsx`:

```typescript
'use client'

import { PACKAGES } from '@/lib/constants'

export default function Packages() {
  const scrollToBooking = () => {
    document.getElementById('booking')?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <section className="bg-[#0d0d0d] px-6 py-24">
      <div className="max-w-6xl mx-auto">
        <span className="inline-block text-[10px] font-bold tracking-[0.3em] uppercase text-[#00e5a0] bg-[#00e5a0]/10 px-2.5 py-1 mb-5">
          Packages
        </span>

        <h2 className="text-4xl md:text-5xl font-black text-white mb-3">
          Pick Your Package.
        </h2>
        <p className="text-[16px] text-white/45 mb-16 max-w-lg">
          All packages include a free onboarding strategy call and monthly PR
          documentation reports.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {PACKAGES.map((pkg) => (
            <div
              key={pkg.tier}
              className={`relative p-9 border ${
                pkg.featured
                  ? 'bg-[#00e5a0]/[0.06] border-[#00e5a0]/30'
                  : 'bg-white/[0.03] border-white/[0.08]'
              }`}
            >
              {pkg.featured && (
                <span className="absolute -top-3 left-7 bg-[#00e5a0] text-black text-[10px] font-black tracking-[0.15em] uppercase px-3 py-1">
                  Most Popular
                </span>
              )}

              <p className="text-[11px] font-bold tracking-[0.25em] uppercase text-white/40 mb-3">
                {pkg.tier}
              </p>
              <h3 className="text-2xl font-black text-white mb-2">{pkg.name}</h3>
              <p className="text-[13px] text-white/45 leading-relaxed mb-7 pb-7 border-b border-white/[0.06]">
                {pkg.description}
              </p>

              <ul className="space-y-0 mb-8">
                {pkg.features.map((feature) => (
                  <li
                    key={feature}
                    className="flex gap-2.5 text-[13px] text-white/60 py-2 border-b border-white/[0.04]"
                  >
                    <span className="text-[#00e5a0] flex-shrink-0">→</span>
                    {feature}
                  </li>
                ))}
              </ul>

              <button
                onClick={scrollToBooking}
                className={`w-full text-[11px] font-bold tracking-[0.15em] uppercase py-3.5 transition-colors ${
                  pkg.featured
                    ? 'bg-[#00e5a0] text-black hover:bg-[#00c98e]'
                    : 'border border-white/20 text-white hover:border-white/40'
                }`}
              >
                Book a Call
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
```

- [ ] **Step 2: Add Packages to page.tsx**

```typescript
import Nav from '@/components/Nav'
import Hero from '@/components/Hero'
import Stats from '@/components/Stats'
import Problem from '@/components/Problem'
import HowItWorks from '@/components/HowItWorks'
import Packages from '@/components/Packages'

export default function Home() {
  return (
    <main>
      <Nav />
      <Hero />
      <Stats />
      <Problem />
      <HowItWorks />
      <Packages />
    </main>
  )
}
```

- [ ] **Step 3: Commit**

```bash
cd /c/Users/Akshay/globizon
git add src/components/Packages.tsx src/app/page.tsx
git commit -m "feat: packages section with 3 pricing tiers"
```

---

## Task 10: Testimonials section

**Files:**
- Create: `src/components/Testimonials.tsx`

- [ ] **Step 1: Create Testimonials.tsx**

Create `src/components/Testimonials.tsx`:

```typescript
import { TESTIMONIALS } from '@/lib/constants'

export default function Testimonials() {
  return (
    <section className="bg-[#111] px-6 py-24">
      <div className="max-w-6xl mx-auto">
        <span className="inline-block text-[10px] font-bold tracking-[0.3em] uppercase text-[#00e5a0] bg-[#00e5a0]/10 px-2.5 py-1 mb-5">
          Results
        </span>

        <h2 className="text-4xl md:text-5xl font-black text-white mb-16">
          Real Clients. Real Approvals.
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {TESTIMONIALS.map((t) => (
            <div
              key={t.author}
              className="bg-white/[0.03] border border-white/[0.07] p-8"
            >
              <p className="text-[15px] text-white/65 leading-relaxed italic mb-6">
                {t.quote}
              </p>
              <p className="text-[12px] font-bold text-white tracking-wide">{t.author}</p>
              <p className="text-[11px] text-white/35 mt-1">{t.meta}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
```

- [ ] **Step 2: Add Testimonials to page.tsx**

```typescript
import Nav from '@/components/Nav'
import Hero from '@/components/Hero'
import Stats from '@/components/Stats'
import Problem from '@/components/Problem'
import HowItWorks from '@/components/HowItWorks'
import Packages from '@/components/Packages'
import Testimonials from '@/components/Testimonials'

export default function Home() {
  return (
    <main>
      <Nav />
      <Hero />
      <Stats />
      <Problem />
      <HowItWorks />
      <Packages />
      <Testimonials />
    </main>
  )
}
```

- [ ] **Step 3: Commit**

```bash
cd /c/Users/Akshay/globizon
git add src/components/Testimonials.tsx src/app/page.tsx
git commit -m "feat: testimonials 2x2 grid"
```

---

## Task 11: FAQ accordion

**Files:**
- Create: `src/components/FAQ.tsx`
- Create: `__tests__/FAQ.test.tsx`

- [ ] **Step 1: Write the failing test**

Create `__tests__/FAQ.test.tsx`:

```typescript
import { render, screen, fireEvent } from '@testing-library/react'
import FAQ from '../src/components/FAQ'

describe('FAQ', () => {
  it('renders all question headings', () => {
    render(<FAQ />)
    expect(screen.getByText('Does social media actually affect my PR application?')).toBeInTheDocument()
    expect(screen.getByText("Which Canadian immigration programs does this help with?")).toBeInTheDocument()
  })

  it('answer is hidden by default', () => {
    render(<FAQ />)
    const answer = screen.getByText(/Yes\. Canadian immigration officers/)
    expect(answer).not.toBeVisible()
  })

  it('clicking a question reveals the answer', () => {
    render(<FAQ />)
    const question = screen.getByText('Does social media actually affect my PR application?')
    fireEvent.click(question)
    const answer = screen.getByText(/Yes\. Canadian immigration officers/)
    expect(answer).toBeVisible()
  })

  it('clicking an open question closes it', () => {
    render(<FAQ />)
    const question = screen.getByText('Does social media actually affect my PR application?')
    fireEvent.click(question)
    fireEvent.click(question)
    const answer = screen.getByText(/Yes\. Canadian immigration officers/)
    expect(answer).not.toBeVisible()
  })
})
```

- [ ] **Step 2: Run test to verify it fails**

```bash
cd /c/Users/Akshay/globizon
npx jest __tests__/FAQ.test.tsx --no-coverage
```

Expected: FAIL — `Cannot find module '../src/components/FAQ'`

- [ ] **Step 3: Create FAQ.tsx**

Create `src/components/FAQ.tsx`:

```typescript
'use client'

import { useState } from 'react'
import { FAQS } from '@/lib/constants'

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null)

  const toggle = (i: number) => setOpenIndex(openIndex === i ? null : i)

  return (
    <section className="bg-[#0d0d0d] px-6 py-24">
      <div className="max-w-3xl mx-auto">
        <span className="inline-block text-[10px] font-bold tracking-[0.3em] uppercase text-[#00e5a0] bg-[#00e5a0]/10 px-2.5 py-1 mb-5">
          FAQ
        </span>

        <h2 className="text-4xl md:text-5xl font-black text-white mb-12">
          Common Questions.
        </h2>

        <div>
          {FAQS.map((faq, i) => (
            <div key={faq.q} className="border-b border-white/[0.07]">
              <button
                onClick={() => toggle(i)}
                className="w-full flex items-center justify-between py-6 text-left"
              >
                <span className="text-[15px] font-bold text-white pr-4">{faq.q}</span>
                <span className="text-[#00e5a0] text-xl flex-shrink-0 transition-transform duration-200"
                  style={{ transform: openIndex === i ? 'rotate(45deg)' : 'rotate(0deg)' }}>
                  +
                </span>
              </button>
              <div
                style={{ display: openIndex === i ? 'block' : 'none' }}
                className="pb-6 text-[14px] text-white/45 leading-relaxed"
              >
                {faq.a}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
```

- [ ] **Step 4: Run test to verify it passes**

```bash
cd /c/Users/Akshay/globizon
npx jest __tests__/FAQ.test.tsx --no-coverage
```

Expected: PASS — 4 tests passing

- [ ] **Step 5: Add FAQ to page.tsx**

```typescript
import Nav from '@/components/Nav'
import Hero from '@/components/Hero'
import Stats from '@/components/Stats'
import Problem from '@/components/Problem'
import HowItWorks from '@/components/HowItWorks'
import Packages from '@/components/Packages'
import Testimonials from '@/components/Testimonials'
import FAQ from '@/components/FAQ'

export default function Home() {
  return (
    <main>
      <Nav />
      <Hero />
      <Stats />
      <Problem />
      <HowItWorks />
      <Packages />
      <Testimonials />
      <FAQ />
    </main>
  )
}
```

- [ ] **Step 6: Commit**

```bash
cd /c/Users/Akshay/globizon
git add src/components/FAQ.tsx __tests__/FAQ.test.tsx src/app/page.tsx
git commit -m "feat: FAQ accordion with open/close behavior"
```

---

## Task 12: Booking CTA section

**Files:**
- Create: `src/components/BookingCTA.tsx`
- Create: `__tests__/BookingCTA.test.tsx`

- [ ] **Step 1: Write the failing test**

Create `__tests__/BookingCTA.test.tsx`:

```typescript
import { render, screen, fireEvent } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import BookingCTA from '../src/components/BookingCTA'

describe('BookingCTA', () => {
  it('renders the form fields', () => {
    render(<BookingCTA />)
    expect(screen.getByPlaceholderText('Your name')).toBeInTheDocument()
    expect(screen.getByPlaceholderText('Email address')).toBeInTheDocument()
    expect(screen.getByRole('button', { name: /book free call/i })).toBeInTheDocument()
  })

  it('shows success message after valid submission', async () => {
    const user = userEvent.setup()
    render(<BookingCTA />)
    await user.type(screen.getByPlaceholderText('Your name'), 'Rajesh Kumar')
    await user.type(screen.getByPlaceholderText('Email address'), 'rajesh@example.com')
    await user.click(screen.getByRole('button', { name: /book free call/i }))
    expect(await screen.findByText(/we'll be in touch/i)).toBeInTheDocument()
  })

  it('does not submit when fields are empty', async () => {
    const user = userEvent.setup()
    render(<BookingCTA />)
    await user.click(screen.getByRole('button', { name: /book free call/i }))
    expect(screen.queryByText(/we'll be in touch/i)).not.toBeInTheDocument()
  })
})
```

- [ ] **Step 2: Run test to verify it fails**

```bash
cd /c/Users/Akshay/globizon
npx jest __tests__/BookingCTA.test.tsx --no-coverage
```

Expected: FAIL — `Cannot find module '../src/components/BookingCTA'`

- [ ] **Step 3: Create BookingCTA.tsx**

Create `src/components/BookingCTA.tsx`:

```typescript
'use client'

import { useState } from 'react'

export default function BookingCTA() {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (!name.trim() || !email.trim()) return
    setSubmitted(true)
  }

  return (
    <section id="booking" className="bg-[#0d0d0d] border-t border-white/[0.06] px-6 py-28 flex flex-col items-center text-center">
      <span className="inline-block text-[10px] font-bold tracking-[0.3em] uppercase text-[#00e5a0] bg-[#00e5a0]/10 px-2.5 py-1 mb-6">
        Get Started
      </span>

      <h2 className="text-4xl md:text-6xl font-black leading-[1.1] text-white mb-5 max-w-2xl">
        Ready to Build the Brand<br />
        That Gets You to{' '}
        <em className="not-italic text-[#00e5a0]">Canada?</em>
      </h2>

      <p className="text-[17px] text-white/45 leading-relaxed max-w-md mb-10">
        Book a free 30-minute strategy call. We'll review your current online
        presence, identify the gaps, and tell you exactly what it'll take to
        strengthen your PR file.
      </p>

      {submitted ? (
        <div className="bg-[#00e5a0]/10 border border-[#00e5a0]/30 px-8 py-6 max-w-md w-full">
          <p className="text-[#00e5a0] font-bold text-lg mb-1">You're on the list!</p>
          <p className="text-white/55 text-[14px]">
            We'll be in touch within 24 hours to confirm your call.
          </p>
        </div>
      ) : (
        <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3 max-w-xl w-full mb-4">
          <input
            type="text"
            placeholder="Your name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="flex-1 bg-white/[0.06] border border-white/[0.12] text-white placeholder-white/30 px-5 py-3.5 text-[14px] outline-none focus:border-[#00e5a0]/50 transition-colors"
          />
          <input
            type="email"
            placeholder="Email address"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="flex-[1.2] bg-white/[0.06] border border-white/[0.12] text-white placeholder-white/30 px-5 py-3.5 text-[14px] outline-none focus:border-[#00e5a0]/50 transition-colors"
          />
          <button
            type="submit"
            className="bg-[#00e5a0] text-black text-[11px] font-black tracking-[0.15em] uppercase px-7 py-3.5 hover:bg-[#00c98e] transition-colors whitespace-nowrap"
          >
            Book Free Call
          </button>
        </form>
      )}

      <p className="text-[12px] text-white/25 tracking-wide">
        No commitment. No fees. Just clarity on your next step.
      </p>
    </section>
  )
}
```

- [ ] **Step 4: Run test to verify it passes**

```bash
cd /c/Users/Akshay/globizon
npx jest __tests__/BookingCTA.test.tsx --no-coverage
```

Expected: PASS — 3 tests passing

- [ ] **Step 5: Commit**

```bash
cd /c/Users/Akshay/globizon
git add src/components/BookingCTA.tsx __tests__/BookingCTA.test.tsx
git commit -m "feat: booking CTA with form and success state"
```

---

## Task 13: Footer + final page assembly

**Files:**
- Create: `src/components/Footer.tsx`
- Modify: `src/app/page.tsx` (final version)

- [ ] **Step 1: Create Footer.tsx**

Create `src/components/Footer.tsx`:

```typescript
export default function Footer() {
  return (
    <footer className="bg-[#080808] border-t border-white/[0.06] px-6 py-8">
      <div className="max-w-6xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
        <span className="text-[16px] font-black tracking-[0.2em] uppercase text-white">
          GLOBI<span className="text-[#00e5a0]">ZON</span>
        </span>
        <p className="text-[12px] text-white/25">
          © 2025 Globizon. Immigration branding specialists.
        </p>
      </div>
    </footer>
  )
}
```

- [ ] **Step 2: Final page.tsx with all sections**

Replace `src/app/page.tsx` with the complete assembly:

```typescript
import Nav from '@/components/Nav'
import Hero from '@/components/Hero'
import Stats from '@/components/Stats'
import Problem from '@/components/Problem'
import HowItWorks from '@/components/HowItWorks'
import Packages from '@/components/Packages'
import Testimonials from '@/components/Testimonials'
import FAQ from '@/components/FAQ'
import BookingCTA from '@/components/BookingCTA'
import Footer from '@/components/Footer'

export default function Home() {
  return (
    <main>
      <Nav />
      <Hero />
      <Stats />
      <Problem />
      <HowItWorks />
      <Packages />
      <Testimonials />
      <FAQ />
      <BookingCTA />
      <Footer />
    </main>
  )
}
```

- [ ] **Step 3: Run full test suite**

```bash
cd /c/Users/Akshay/globizon
npx jest --no-coverage
```

Expected: All tests passing (constants + FAQ + BookingCTA)

- [ ] **Step 4: Verify full page in browser**

```bash
npm run dev
```

Open `http://localhost:3000` — scroll through all sections: Nav → Hero → Stats → Problem → How It Works → Packages → Testimonials → FAQ → Booking CTA → Footer. Verify:
- Nav "Book Free Call" button scrolls to booking form
- Package "Book a Call" buttons scroll to booking form
- Hero "See How It Works" scrolls to How It Works section
- FAQ accordion opens and closes
- Booking form shows success message after submission

Stop server.

- [ ] **Step 5: Commit**

```bash
cd /c/Users/Akshay/globizon
git add src/components/Footer.tsx src/app/page.tsx
git commit -m "feat: footer and complete page assembly"
```

---

## Task 14: Responsive polish

**Files:**
- Modify: `src/components/Hero.tsx` — ensure headline scales on mobile
- Modify: `src/components/Stats.tsx` — wrap stats on small screens
- Modify: `src/components/BookingCTA.tsx` — stack form vertically on mobile

- [ ] **Step 1: Verify mobile layout**

Open browser DevTools, set viewport to 375px wide. Check each section:

- Hero headline: should be readable (not overflowing) — `text-5xl md:text-7xl` handles this ✓
- Stats: should wrap into 2×2 grid — `flex flex-wrap` handles this ✓
- Packages: should stack single column — `grid-cols-1 md:grid-cols-3` handles this ✓
- Booking form: should stack vertically — `flex-col sm:flex-row` handles this ✓

- [ ] **Step 2: Fix any overflow issues**

If any section has horizontal overflow at 375px, add `overflow-x-hidden` to `<main>` in `page.tsx`:

```typescript
<main className="overflow-x-hidden">
```

- [ ] **Step 3: Final production build check**

```bash
cd /c/Users/Akshay/globizon
npm run build
```

Expected: Build completes with no errors. If TypeScript errors appear, fix them before proceeding.

- [ ] **Step 4: Final commit**

```bash
cd /c/Users/Akshay/globizon
git add -A
git commit -m "feat: responsive polish and production build verified"
```

---

## Done ✓

At this point you have:
- A fully built single-page Next.js 15 site
- All 10 sections: Nav, Hero, Stats, Problem, How It Works, Packages, Testimonials, FAQ, Booking CTA, Footer
- Booking form with success state
- FAQ accordion
- All tests passing
- Production build verified

**Next steps (out of scope for this plan):**
- Connect booking form to Calendly embed or email service (Resend, Formspree)
- Deploy to Vercel
- Add real client photos to testimonials
- Replace placeholder stats with real numbers
