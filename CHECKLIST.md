# Vantara Website - Pre-Deployment Checklist

## ✅ Content & Placeholders

- [ ] Replace `FORM_ID` in `/app/components/ContactForm.tsx` with actual Formspree form ID
- [ ] Replace `+91-XXXXXXXXXX` with actual phone number (multiple files)
- [ ] Replace `info@vantaranetwork.com` with actual email address
- [ ] Replace `Your Address Here` with actual business address
- [ ] Replace `https://vantaranetwork.com` with your actual domain (multiple files)
- [ ] Update company details in `/app/layout.tsx` organization schema
- [ ] Update working hours in footer and contact page if needed

## 🖼️ Images & Assets

- [ ] Add `hero-1.jpg` to `/public/images/` (1920x1080)
- [ ] Add `hero-2.jpg` to `/public/images/` (1920x1080)
- [ ] Add `hero-3.jpg` to `/public/images/` (1920x1080)
- [ ] Add `og-image.jpg` to `/public/images/` (1200x630 for social sharing)
- [ ] Add `favicon.ico` to `/public/images/`
- [ ] Add brand logos to `/public/images/brands/` (dell.png, hp.png, cisco.png, etc.)
- [ ] Optimize all images (compress, convert to WebP if possible)

## 🔧 Configuration

- [ ] Update `metadataBase` URL in `/app/layout.tsx`
- [ ] Update domain in `/scripts/generate-sitemap.js`
- [ ] Update domain in `/public/robots.txt`
- [ ] Add Google Analytics ID (if needed)
- [ ] Add Google Search Console verification (if needed)
- [ ] Configure Google Maps API key for contact page map (optional)

## 🧪 Testing

- [ ] Test all navigation links work correctly
- [ ] Test services dropdown menu (desktop & mobile)
- [ ] Test mobile hamburger menu
- [ ] Test contact form submission to Formspree
- [ ] Test form validation (required fields)
- [ ] Test all CTA buttons link to correct pages
- [ ] Verify hero slider works with all 3 slides
- [ ] Test particle animations load correctly
- [ ] Check all service pages load without errors

## 📱 Responsive Design

- [ ] Test on mobile devices (320px, 375px, 414px widths)
- [ ] Test on tablets (768px, 1024px)
- [ ] Test on desktop (1280px, 1920px)
- [ ] Verify images scale properly
- [ ] Check navigation works on all screen sizes
- [ ] Test touch interactions on mobile

## ♿ Accessibility

- [ ] All images have descriptive `alt` attributes
- [ ] Color contrast ratios meet WCAG AA standards (4.5:1 minimum)
- [ ] Keyboard navigation works (Tab, Enter, Escape keys)
- [ ] Focus indicators are visible
- [ ] Headings follow proper hierarchy (H1 → H2 → H3)
- [ ] Form labels are properly associated with inputs
- [ ] Links have descriptive text (avoid "click here")

## 🔍 SEO

- [ ] Every page has unique `<title>` tag
- [ ] Every page has unique `<meta description>`
- [ ] Open Graph tags present on all pages
- [ ] Twitter Card tags present
- [ ] JSON-LD Organization schema included
- [ ] JSON-LD ContactPage schema on contact page
- [ ] `robots.txt` file exists and allows crawling
- [ ] `sitemap.xml` generated and accessible
- [ ] Canonical URLs set correctly
- [ ] All internal links use proper paths

## ⚡ Performance

- [ ] Run `npm run build` successfully
- [ ] Test Lighthouse score (aim for 90+ on all metrics)
- [ ] Check for console errors in browser
- [ ] Verify all images load correctly
- [ ] Test page load times (<3 seconds)
- [ ] Check bundle size is reasonable
- [ ] Ensure no unused dependencies

## 🌐 Deployment

- [ ] Choose hosting platform (Vercel/Netlify/S3/Other)
- [ ] Connect custom domain
- [ ] Configure DNS records
- [ ] Enable HTTPS/SSL certificate
- [ ] Set up redirects (if needed)
- [ ] Configure caching headers
- [ ] Test live site after deployment
- [ ] Verify sitemap is accessible at `/sitemap.xml`
- [ ] Verify robots.txt is accessible at `/robots.txt`

## 📧 Post-Deployment

- [ ] Submit sitemap to Google Search Console
- [ ] Submit site to Bing Webmaster Tools
- [ ] Test contact form on live site
- [ ] Verify analytics tracking (if enabled)
- [ ] Check all external links work
- [ ] Monitor error logs
- [ ] Set up uptime monitoring (optional)
- [ ] Share site URL with stakeholders

## 🔒 Security

- [ ] Ensure no API keys or secrets are committed
- [ ] Verify Formspree form has spam protection
- [ ] Enable rate limiting on hosting platform (if available)
- [ ] Review content security policy headers
- [ ] Test for common vulnerabilities

## 📊 Analytics & Monitoring (Optional)

- [ ] Set up Google Analytics
- [ ] Set up Google Tag Manager
- [ ] Configure conversion tracking
- [ ] Set up error tracking (Sentry, etc.)
- [ ] Monitor Core Web Vitals

---

## 🎯 Priority Items (Must Complete)

1. **Replace all placeholder content** (phone, email, address, domain)
2. **Add hero images** (site won't look good without them)
3. **Configure Formspree** (contact form won't work otherwise)
4. **Test on mobile & desktop** (ensure responsive design works)
5. **Run Lighthouse audit** (aim for 90+ scores)
6. **Deploy to production** (make it live!)

---

**Last Updated:** 2024
**Status:** Pre-deployment

**Notes:**
- Print this checklist and check off items as you complete them
- If working with a team, assign tasks to specific team members
- Revisit this checklist before each major deployment
