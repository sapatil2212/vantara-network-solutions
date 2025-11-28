# Vantara Network Solutions - Static Next.js Website

**Production-ready static website for Vantara Network Solutions** - Enterprise IT & Network Infrastructure Services

Built with Next.js 14 (App Router), TypeScript, Tailwind CSS, and modern web technologies.

---

## 🔔 IMPORTANT: Required Replacements

Before deploying, **replace these placeholders** throughout the codebase:

### Contact Information
- `FORM_ID` - Get free form ID from [Formspree.io](https://formspree.io)
- `+91-XXXXXXXXXX` - Replace with actual phone number
- `info@vantaranetwork.com` - Replace with actual email
- `Your Address Here` - Replace with actual business address
- `https://vantaranetwork.com` - Replace with your actual domain

### Images & Assets
Add these images to `/public/images/`:
- `hero-1.jpg`, `hero-2.jpg`, `hero-3.jpg` (1920x1080)
- `og-image.jpg` (1200x630 for social media)
- `favicon.ico`
- Brand logos in `/public/images/brands/` (256x160 PNG)

### API Keys (if needed)
- Google Maps API key (for contact page map)
- Analytics IDs (Google Analytics, etc.)

---

## 🚀 Quick Start

### Prerequisites
- Node.js >= 18.0.0
- npm >= 9.0.0

### Installation

```bash
# Clone or navigate to project directory
cd Vantara

# Install dependencies
npm install
```

### Development

```bash
# Run development server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

### Build for Production

```bash
# Build and export static site
npm run build

# Output will be in /out folder
```

### Generate Sitemap

```bash
npm run generate-sitemap
```

---

## 📁 Project Structure

```
/Vantara
├── app/
│   ├── layout.tsx              # Root layout with SEO
│   ├── page.tsx                # Homepage
│   ├── globals.css             # Global styles + Tailwind
│   ├── about/page.tsx          # About page
│   ├── contact/page.tsx        # Contact page with form
│   ├── services/
│   │   ├── page.tsx            # Services listing
│   │   ├── network/page.tsx    # Network solutions
│   │   ├── hardware/page.tsx   # Hardware & IT infrastructure
│   │   ├── datacenter/page.tsx # Data center solutions
│   │   ├── cloud/page.tsx      # Cloud services
│   │   ├── security/page.tsx   # Information security
│   │   ├── cyber/page.tsx      # Cybersecurity
│   │   ├── telecom/page.tsx    # Telecom solutions
│   │   ├── software/page.tsx   # Software solutions
│   │   ├── hms/page.tsx        # Hotel management systems
│   │   └── repair/page.tsx     # Repair & support
│   └── components/
│       ├── Header.tsx          # Navigation with dropdown
│       ├── Footer.tsx          # Footer with contact info
│       ├── HeroSlider.tsx      # Animated hero with particles
│       ├── ServiceCard.tsx     # Service card component
│       ├── TrustedBrands.tsx   # Brand logos section
│       ├── CTASection.tsx      # Call-to-action section
│       ├── ContactForm.tsx     # Formspree contact form
│       └── SharedSEO.tsx       # SEO utility component
├── public/
│   ├── images/                 # Image assets
│   ├── robots.txt              # SEO robots file
│   └── sitemap.xml             # Generated sitemap
├── scripts/
│   └── generate-sitemap.js     # Sitemap generator
├── package.json
├── next.config.js              # Next.js config (static export)
├── tailwind.config.js          # Tailwind theme config
├── tsconfig.json               # TypeScript config
└── README.md
```

---

## 🎨 Design System

### Colors
- **Primary (Vantara Blue)**: `#001895`
- **Secondary (Black)**: `#000000`
- **Background**: `#FFFFFF`
- **Gradient**: `linear-gradient(135deg, #001895 0%, #3b6bff 100%)`

### Tailwind Classes
- `.btn-primary` - Primary button style
- `.btn-secondary` - Secondary button (transparent with border)
- `.btn-outline` - Outline button
- `.section-padding` - Standard section padding
- `.container-custom` - Max-width container
- `.heading-primary` - H1 styling
- `.heading-secondary` - H2 styling
- `.heading-tertiary` - H3 styling

---

## 🌐 Deployment

### Vercel (Recommended)

1. **Via GitHub:**
   - Push code to GitHub
   - Import repository in [Vercel](https://vercel.com)
   - Vercel auto-detects Next.js and builds

2. **Manual Deploy:**
   ```bash
   npm install -g vercel
   vercel
   ```

### Netlify

1. **Via Git:**
   - Connect repository in [Netlify](https://netlify.com)
   - Set build command: `npm run build`
   - Set publish directory: `out`

2. **Manual Deploy:**
   ```bash
   npm run build
   # Then drag /out folder to Netlify drop zone
   ```

### AWS S3 + CloudFront

```bash
# Build static site
npm run build

# Sync to S3 bucket
aws s3 sync out/ s3://your-bucket-name --delete

# Set index.html as default document
# Configure CloudFront distribution
```

### Other Static Hosts
The `/out` folder can be deployed to:
- GitHub Pages
- Firebase Hosting
- Cloudflare Pages
- Any static file hosting service

---

## 📧 Contact Form Setup (Formspree)

1. Go to [https://formspree.io](https://formspree.io)
2. Sign up for free account
3. Create a new form
4. Copy your Form ID
5. Replace `FORM_ID` in `/app/components/ContactForm.tsx`:
   ```typescript
   const response = await fetch('https://formspree.io/f/YOUR_FORM_ID', {
   ```

**Alternative:** Use `mailto:` link or integrate with your own backend.

---

## 🔍 SEO Checklist

- [ ] Unique `<title>` and `<meta description>` for each page ✅
- [ ] Open Graph tags present ✅
- [ ] JSON-LD Organization schema ✅
- [ ] `robots.txt` file ✅
- [ ] `sitemap.xml` generated ✅
- [ ] Images have descriptive `alt` attributes ✅
- [ ] Semantic HTML structure ✅
- [ ] Mobile responsive design ✅
- [ ] Fast page load times ✅
- [ ] Accessible navigation (keyboard support) ✅

---

## ⚡ Performance Optimization

### Recommended Lighthouse Targets
- **Performance**: >= 90
- **Accessibility**: >= 90
- **Best Practices**: >= 90
- **SEO**: >= 90

### Tips to Improve
1. Compress images (use WebP format)
2. Add actual brand logos (currently placeholders)
3. Enable compression on server/CDN
4. Use lazy loading for below-fold images
5. Minimize unused CSS/JS

---

## 🛠️ Troubleshooting

### Build Errors

**Issue:** TypeScript errors during build
```bash
# Clear Next.js cache
rm -rf .next
npm run build
```

**Issue:** Module not found
```bash
# Reinstall dependencies
rm -rf node_modules package-lock.json
npm install
```

### Development Issues

**Issue:** Port 3000 already in use
```bash
# Use different port
PORT=3001 npm run dev
```

**Issue:** Swiper styles not loading
```bash
# Ensure these imports are in HeroSlider.tsx:
import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'
```

---

## 📦 Tech Stack

- **Framework**: Next.js 14 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Animations**: Framer Motion, react-tsparticles
- **Slider**: Swiper
- **Icons**: React Icons, Lucide React
- **Forms**: Formspree (static form handling)

---

## 🔐 Security Notes

- No sensitive data is hardcoded
- All API keys must be added by user
- Form submissions handled by Formspree (secure)
- Static export = no server vulnerabilities
- HTTPS recommended for production

---

## 📄 License

© 2024 Vantara Network Solutions. All rights reserved.

---

## 💬 Support

For technical support or questions about this website:
- Email: info@vantaranetwork.com (REPLACE)
- Phone: +91-XXXXXXXXXX (REPLACE)

---

## 🚀 Next Steps

1. ✅ Install dependencies: `npm install`
2. ✅ Replace all placeholders (see top of README)
3. ✅ Add your images to `/public/images/`
4. ✅ Test locally: `npm run dev`
5. ✅ Build static site: `npm run build`
6. ✅ Deploy to your preferred hosting
7. ✅ Set up custom domain
8. ✅ Configure analytics (optional)
9. ✅ Test all forms and links
10. ✅ Run Lighthouse audit

---

**Built with ❤️ for Vantara Network Solutions**
