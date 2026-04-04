# JEE Exports & Imports - Agricultural Export Website
## Product Requirements Document (PRD)

---

## Original Problem Statement
Build a professional agricultural export website for JEE Exports & Imports, specializing in organic vetiver products (roots, essential oil, powder). The website should be clean, simple, professional, and trustworthy - similar to pureoilsindia.com but without appearing new to the business. Key focus: quality, 100% organic products, and large-scale operations.

---

## User Persona
**Target Audience:**
- B2B buyers (international importers, distributors)
- Bulk order clients
- Industries: Perfumery, aromatherapy, cosmetics, herbal applications
- Geographic: Global (primarily USA, Europe, Middle East)

---

## Core Requirements (Static)

### Design Principles
1. **Visual Style:** Natural + Modern + Minimal
2. **Color Scheme:** Earth tones (emerald greens, amber/browns) signifying root agriculture
3. **Content Tone:** Trustworthy, professional, established
4. **UX:** Clean, concise, easy navigation, not cluttered
5. **Interaction:** Slightly interactive (hover effects, smooth transitions)

### Website Sections
1. **Home Page**
   - Hero section with company tagline
   - About section (brief intro)
   - Products showcase (3 products)
   - Why Choose Us (6 value propositions)
   - CTA section

2. **Products Page**
   - Detailed product cards with features and applications
   - Product benefits section
   - Bulk order CTA

3. **About Us Page**
   - Company story
   - Core values (Purity, Quality, Sustainability, Traceability)
   - Services (Packaging & Logistics)
   - Mission statement
   - Image gallery

4. **Contact Page**
   - Contact information cards
   - Contact form (name, email, phone, message)
   - Minimal, non-intrusive design

---

## What's Been Implemented ✅

### Phase 1: Frontend MVP (December 2025)
**Completed Components:**
- ✅ Navbar with top contact bar + main navigation
- ✅ Footer with company info, quick links, contact details
- ✅ Home page with all sections (hero, about, products, why choose us, CTA)
- ✅ Products page with detailed product information
- ✅ About Us page with company story, values, services
- ✅ Contact page with contact form (frontend only - MOCK)
- ✅ Responsive design for all pages
- ✅ Custom color scheme (emerald/amber earth tones)
- ✅ Product cards with hover effects
- ✅ Route navigation using React Router
- ✅ Professional images from Unsplash via vision_expert_agent

**Mock Data Location:** `/app/frontend/src/mock/data.js`
- Company information
- 3 Products (Vetiver Oil, Roots, Powder)
- 6 Why Choose Us points
- 3 Services

**Tech Stack:**
- React 19
- React Router DOM 7.5.1
- Tailwind CSS
- Shadcn UI components
- Lucide React icons
- Sonner for toasts

---

## Prioritized Backlog

### P0 Features (Next Phase - Backend Development)
1. **Contact Form Backend**
   - Create MongoDB schema for contact inquiries
   - Build POST `/api/contact` endpoint
   - Email notification service (send to jeeexportsandimports@gmail.com)
   - Form validation and error handling
   - Success toast notification integration

2. **Backend API Setup**
   - FastAPI routes for contact form
   - MongoDB connection for storing inquiries
   - Email service integration (SMTP or SendGrid)

### P1 Features (Enhancement)
1. **Admin Dashboard** (Optional)
   - View contact form submissions
   - Manage product information
   - Update company details

2. **SEO Optimization**
   - Meta tags for all pages
   - Open Graph tags
   - Structured data for products

3. **Analytics**
   - Google Analytics integration
   - Track form submissions and user flow

### P2 Features (Future Considerations)
1. **Product Inquiry Form**
   - Product-specific inquiry forms
   - Quote request system

2. **Multilingual Support**
   - English, Hindi, other languages

3. **Blog Section**
   - Articles about vetiver, organic farming
   - Industry insights

---

## Next Tasks
1. **User Review:** Get feedback on frontend design and content
2. **Backend Planning:** Create API contracts for contact form
3. **Email Service:** Choose email service (SMTP/SendGrid) for contact notifications
4. **Testing:** Test all pages, forms, navigation, mobile responsiveness
5. **Backend Development:** Implement contact form backend + email notifications

---

## Notes
- **MOCK Data:** Contact form currently shows success toast but doesn't save data
- **Images:** All product and section images sourced from Unsplash
- **No Auth Required:** Public-facing website, no user authentication needed
- **Deployment:** Ready for deployment after backend implementation

---

**Last Updated:** December 2025
