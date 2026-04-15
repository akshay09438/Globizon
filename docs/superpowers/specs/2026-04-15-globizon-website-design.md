# Globizon Website — Design Spec
**Date:** 2026-04-15

## Overview

Single-page booking-funnel website for **Globizon** — an immigration branding agency that helps Indian business owners build their social media presence (Instagram, LinkedIn, etc.) to strengthen their Canada PR/immigration applications.

**Target audience:** Indian business owners applying for Canada PR via investment/entrepreneur routes (Start-Up Visa, PNP, Self-Employed Persons Program).

**Goal of the site:** One action — get visitors to book a free strategy call.

---

## Visual Direction

- **Reference:** dragonfruitmedia.co — copy aesthetic exactly
- **Background:** Dark (`#0d0d0d` / `#111`)
- **Primary accent:** Electric green (`#00e5a0`)
- **Typography:** Bold, heavy-weight sans-serif (Inter or similar), large display headlines
- **Tone:** Results-driven, punchy, premium agency feel
- **Tech stack:** Next.js 15 + Tailwind CSS v4 (consistent with user's other projects)

---

## Site Structure (Single Page, Top to Bottom)

### 1. Sticky Nav
- Logo: **GLOBIZON** (accent color on last letters or dot)
- Single CTA button: **"Book Free Call"** — scrolls to booking section

### 2. Hero
- Eyebrow: `India → Canada Immigration Branding`
- H1: `Your Social Media Is Your Visa Application.`
- Subheadline: Immigration officers look you up online. We make sure what they find builds your case — not breaks it.
- Primary CTA: **Book Your Free Strategy Call**
- Secondary link: See How It Works
- Urgency line: `⚡ 3 spots left for onboarding this month`

### 3. Stats Bar
- 80+ Clients Onboarded
- 94% PR Approval Rate
- 3 Platforms Managed
- 12mo Avg. Brand Build Time

### 4. The Problem
- Section label: `THE PROBLEM`
- H2: `Immigration Officers Google You. What Do They Find?`
- Body copy explaining why online presence is now evidence
- 3 cards:
  - Your Online Presence Is Evidence
  - Documentation Needs Proof
  - Competition Is Fierce

### 5. How It Works
- Section label: `HOW IT WORKS`
- H2: `We Handle Everything. You Focus on Your Move.`
- 4 steps:
  1. Brand Strategy Session
  2. Profile Setup & Optimization
  3. Ongoing Content & Management
  4. Monthly PR-Ready Reports

### 6. Packages
- Section label: `PACKAGES`
- H2: `Pick Your Package.`
- Sub: All packages include a free onboarding strategy call and monthly PR documentation reports.
- 3 tiers:

| | Basic | Standard (Featured) | Premium |
|---|---|---|---|
| Name | Personal Brand | Personal + Business | Full PR Suite |
| Platforms | LinkedIn + Instagram | All Basic + Business pages | All Standard + Facebook |
| Posts/month | 8 | 16 | 24 |
| PR Report | ✓ | ✓ (both profiles) | ✓ + Documentation kit |
| Calls | Bi-weekly | Weekly | Dedicated manager |
| Extras | — | Business profile optimisation | Press release + media coverage |

### 7. Testimonials
- Section label: `RESULTS`
- H2: `Real Clients. Real Approvals.`
- 4 testimonial cards (2×2 grid):
  - Rajesh M. — E-commerce, Ontario
  - Priya S. — IT consulting, British Columbia
  - Amit D. — Restaurant chain, Alberta
  - Neha K. — Healthcare startup, Manitoba

### 8. FAQ
- 5 questions:
  1. Does social media actually affect my PR application?
  2. Which Canadian immigration programs does this help with?
  3. How long does it take to build a credible presence?
  4. Do I need to create the content myself?
  5. What makes Globizon different from a regular social media agency?

### 9. Booking CTA (Conversion Section)
- H2: `Ready to Build the Brand That Gets You to Canada?`
- Body: Book a free 30-minute strategy call description
- Form: Name + Email + "Book Free Call" button
- Note: `No commitment. No fees. Just clarity on your next step.`

### 10. Footer
- Logo
- Copyright line: `© 2025 Globizon. Immigration branding specialists.`

---

## Key Interactions
- Nav CTA and all package CTAs scroll to / focus the booking form
- Booking form submits name + email (integration TBD — Calendly embed or form submission)
- Smooth scroll throughout

---

## Out of Scope
- Multi-page navigation
- Blog or resources section
- Client portal / login
- Payment processing
- Mobile app

---

## Open Questions
- Does Globizon have a logo file? (If not, text-based logo with accent color)
- Booking form: direct form submission (email notification) or Calendly embed?
- Real testimonial photos or avatar placeholders?
- Actual stats to replace placeholder numbers (80+, 94%, etc.)?
