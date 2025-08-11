# Local Service Business Website Template

A professional, conversion-optimized website template built with Astro, TypeScript, and Tailwind CSS specifically for local service businesses. Originally designed for a pressure washing company, this template has been generalized to work for any local service business.

## 🎯 What This Template Provides

### **Business Features**
- ✅ **Lead Generation Focus**: Multiple contact methods, scheduling integration
- ✅ **Local SEO Optimized**: Structured data, location-specific pages
- ✅ **Professional Design**: Modern, mobile-first responsive design
- ✅ **Conversion Optimized**: Clear CTAs, trust signals, testimonials
- ✅ **Fast Performance**: Static site generation, optimized images

### **Technical Features**
- ✅ **Modern Stack**: Astro + TypeScript + Tailwind CSS
- ✅ **SEO Powerhouse**: Meta tags, structured data, sitemaps
- ✅ **Component Architecture**: Reusable, modular components
- ✅ **Data-Driven**: Configurable business data in TypeScript files

---

## 🚀 Quick Start

### Prerequisites
- Node.js 18+ installed
- Basic knowledge of web development

### Installation
```bash
# Clone the repository
git clone [your-repo-url]
cd local-service-business-template

# Install dependencies
npm install

# Start development server
npm run dev
```

Visit `http://localhost:4321` to see your site!

---

## 📋 Business Setup Checklist

### **Step 1: Basic Business Information**
Update `src/data/company.ts` with your business details:

- [ ] **Company name** and domain
- [ ] **Phone number** and email address
- [ ] **Business type** and tagline
- [ ] **Service description** and areas
- [ ] **Business hours** and social media links
- [ ] **Brand colors** (primary/secondary)
- [ ] **Key features** and value propositions
- [ ] **Customer testimonials** (replace with real ones)

### **Step 2: Services Configuration**
Update `src/data/services.ts`:

- [ ] **Replace template services** with your actual services
- [ ] **Update service descriptions** and benefits
- [ ] **Customize process steps** for each service
- [ ] **Write industry-specific FAQs**
- [ ] **Add service icons** and imagery

### **Step 3: Location Setup**
Update `src/data/locations.ts`:

- [ ] **Replace template locations** with your service areas
- [ ] **Add county and city information**
- [ ] **Include local landmarks** and features
- [ ] **Write location-specific descriptions**
- [ ] **Set correct state abbreviations**

### **Step 4: Branding & Design**
Update visual elements:

- [ ] **Replace logo files** (`/public/logo-icon.webp`, `/public/logo-icon-with-name.webp`)
- [ ] **Update hero background** (`/public/images/business-hero.webp`)
- [ ] **Replace service images** in `/public/images/`
- [ ] **Update brand colors** in `tailwind.config.mjs` and `src/styles/global.css`
- [ ] **Customize font choices** if needed

### **Step 5: SEO & Analytics**
Configure tracking and SEO:

- [ ] **Update domain** in `astro.config.mjs`
- [ ] **Replace Google Analytics ID** in `src/layouts/Layout.astro`
- [ ] **Update structured data** with your business info
- [ ] **Customize meta tags** and descriptions
- [ ] **Set up Google My Business** listing
- [ ] **Configure Google Search Console**

### **Step 6: Content Creation**
Replace template content:

- [ ] **Write compelling headlines** and descriptions
- [ ] **Create genuine customer testimonials**
- [ ] **Develop service-specific content**
- [ ] **Add location-specific information**
- [ ] **Create privacy policy** and terms of service
- [ ] **Write about page** content

### **Step 7: Contact & Scheduling**
Set up lead generation:

- [ ] **Configure contact forms** (replace Calendly with your scheduling)
- [ ] **Set up email handling** for contact forms
- [ ] **Test phone number** links work correctly
- [ ] **Verify email** links function properly
- [ ] **Set up automated responses** for form submissions

---

## 📁 Project Structure

```
/
├── public/                 # Static assets
│   ├── images/            # Business photos, before/after, equipment
│   ├── logo-icon.webp     # Favicon and small logo
│   ├── logo-icon-with-name.webp  # Full logo with business name
│   └── robots.txt         # Search engine instructions
├── src/
│   ├── components/        # Reusable UI components
│   │   ├── Header.astro   # Navigation and logo
│   │   ├── Hero.astro     # Homepage hero section
│   │   ├── Services.astro # Services overview
│   │   ├── Contact.astro  # Contact form and info
│   │   └── Footer.astro   # Footer with business info
│   ├── data/             # Business configuration
│   │   ├── company.ts     # Core business information
│   │   ├── services.ts    # Service details and FAQs
│   │   └── locations.ts   # Service areas and local info
│   ├── layouts/
│   │   └── Layout.astro   # Base page template with SEO
│   ├── pages/            # Website pages
│   │   ├── index.astro    # Homepage
│   │   ├── services/      # Individual service pages
│   │   └── [location pages] # Location-specific pages
│   └── styles/
│       └── global.css     # Global styles and utilities
├── astro.config.mjs      # Astro configuration
├── tailwind.config.mjs   # Tailwind CSS configuration
└── package.json          # Dependencies and scripts
```

---

## 🎨 Customization Guide

### **Colors & Branding**
1. **Primary Brand Color**: Update `primary.600` in `tailwind.config.mjs`
2. **Secondary Color**: Update `secondary.600` in `tailwind.config.mjs`
3. **CSS Variables**: Update in `src/styles/global.css`

### **Typography**
- Default font: Inter (loaded from Google Fonts)
- To change: Update font imports in `src/layouts/Layout.astro`
- Update font family in `tailwind.config.mjs`

### **Components**
All components are in `src/components/` and can be customized:
- **Header**: Navigation and branding
- **Hero**: Homepage main section
- **Services**: Services overview
- **Contact**: Contact forms and business info
- **Footer**: Business details and links

---

## 📈 SEO Features

### **Built-in SEO Optimization**
- ✅ **Structured Data**: Local business schema markup
- ✅ **Meta Tags**: Optimized titles, descriptions, keywords
- ✅ **Open Graph**: Social media sharing optimization
- ✅ **Local SEO**: Location-specific pages and content
- ✅ **Performance**: Fast loading, optimized images
- ✅ **Mobile First**: Responsive design for all devices

### **SEO Best Practices Included**
- Semantic HTML structure
- Image alt tags and optimization
- Internal linking strategy
- Clean URL structure
- XML sitemap generation
- Robots.txt configuration

---

## 🛠️ Development Commands

| Command | Action |
|---------|--------|
| `npm install` | Install dependencies |
| `npm run dev` | Start development server at `localhost:4321` |
| `npm run build` | Build production site to `./dist/` |
| `npm run preview` | Preview built site locally |

---

## 📋 Business Requirements Checklist

### **What You Need to Provide**

#### **Business Information**
- [ ] Legal business name and DBA (if different)
- [ ] Business address (for local SEO)
- [ ] Phone number and email address
- [ ] Business license number (if applicable)
- [ ] Insurance information
- [ ] Years in business / experience

#### **Services & Pricing**
- [ ] List of all services offered
- [ ] Service descriptions and benefits
- [ ] Process/methodology for each service
- [ ] Pricing structure or price ranges
- [ ] Service area coverage
- [ ] Frequently asked questions

#### **Marketing Content**
- [ ] Business tagline/slogan
- [ ] Unique value propositions
- [ ] Customer testimonials (3-5 genuine reviews)
- [ ] Before/after photos (if applicable)
- [ ] Professional business photos
- [ ] Logo files (vector format preferred)

#### **Technical Requirements**
- [ ] Domain name registration
- [ ] Web hosting account
- [ ] Google Analytics account
- [ ] Google My Business listing
- [ ] Professional email address
- [ ] Social media profiles (if desired)

---

## 💡 Tips for Success

### **Content Writing**
- **Focus on benefits**, not just features
- **Use local keywords** naturally in content
- **Include specific city/county names**
- **Write for your customers**, not search engines
- **Keep sentences clear and concise**

### **Photos & Images**
- **Use high-quality**, professional photos
- **Show your team** and equipment
- **Include before/after** examples
- **Optimize image sizes** for web
- **Add descriptive alt text**

### **Local SEO**
- **Claim Google My Business** listing
- **Encourage customer reviews**
- **Use consistent NAP** (Name, Address, Phone) everywhere
- **Create location-specific content**
- **Build local citations** and backlinks

### **Conversion Optimization**
- **Make phone number prominent** on every page
- **Use clear, action-oriented** call-to-action buttons
- **Display trust signals** (licensed, insured, years of experience)
- **Keep contact forms simple** (3-5 fields max)
- **Offer multiple contact methods**

---

## 🚀 Going Live

### **Pre-Launch Checklist**
- [ ] Test all forms and contact methods
- [ ] Verify phone and email links work
- [ ] Check all images display correctly
- [ ] Review content for typos and accuracy
- [ ] Test on mobile devices
- [ ] Verify Google Analytics is tracking
- [ ] Submit sitemap to Google Search Console
- [ ] Set up 301 redirects if replacing existing site

### **Post-Launch Tasks**
- [ ] Monitor Google Analytics for traffic
- [ ] Track form submissions and phone calls
- [ ] Request customer reviews
- [ ] Share on social media
- [ ] Update Google My Business with website
- [ ] Monitor search rankings
- [ ] Plan content updates and blog posts

---

## 📞 Support

This template provides a solid foundation for your local service business website. Focus on providing excellent service to your customers, and your website will help grow your business!

Remember: **Great service + Professional website = Business growth** 🚀
