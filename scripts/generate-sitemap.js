const fs = require('fs');
const path = require('path');

// REPLACE 'https://vantaranetwork.com' with your actual domain
const DOMAIN = 'https://vantaranetwork.com';

// Define all routes
const routes = [
  '/',
  '/about',
  '/services',
  '/services/network',
  '/services/hardware',
  '/services/datacenter',
  '/services/cloud',
  '/services/security',
  '/services/cyber',
  '/services/telecom',
  '/services/software',
  '/services/hms',
  '/services/repair',
  '/contact',
];

// Generate sitemap XML
function generateSitemap() {
  const today = new Date().toISOString().split('T')[0];
  
  const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${routes.map(route => `  <url>
    <loc>${DOMAIN}${route}</loc>
    <lastmod>${today}</lastmod>
    <changefreq>${route === '/' ? 'daily' : 'weekly'}</changefreq>
    <priority>${route === '/' ? '1.0' : '0.8'}</priority>
  </url>`).join('\n')}
</urlset>`;

  return sitemap;
}

// Write sitemap to public folder
function writeSitemap() {
  const sitemap = generateSitemap();
  const publicPath = path.join(__dirname, '..', 'public', 'sitemap.xml');
  
  try {
    fs.writeFileSync(publicPath, sitemap, 'utf8');
    console.log('✅ Sitemap generated successfully at /public/sitemap.xml');
    console.log(`📝 Total URLs: ${routes.length}`);
    console.log('⚠️  Remember to replace ${DOMAIN} with your actual domain!');
  } catch (error) {
    console.error('❌ Error generating sitemap:', error.message);
    process.exit(1);
  }
}

// Run
writeSitemap();
