import { useEffect } from 'react';
import { useLocation, useParams } from 'react-router-dom';
import { products } from '../data/products';
import { categories } from '../data/categories';

const SITE_NAME = "A.V.G. Arunagiri Nadar Sons";
const BASE_URL = "https://avg-arunagiri-nadar-and-sons.vercel.app";

const ROUTE_SEO = {
  '/': {
    title: 'A.V.G. Arunagiri Nadar Sons | Quality Roofing Sheets & Building Materials in Tamil Nadu',
    description: 'Authorized stockist of Tata Durashine, JSW, Geo Roof roofing sheets, Lotus polycarbonate, PUF panels, MS/GP/GI steel pipes & Aquastar uPVC rainwater gutters across Tamil Nadu. Direct site lorry delivery since 1970.',
  },
  '/products': {
    title: 'Roofing Materials & Steel Products Catalog | A.V.G. Arunagiri Nadar Sons',
    description: 'Explore our complete catalog: Galvalume roofing sheets, colour coated profiles, polycarbonate sheets, PUF panels, structural steel pipes (MS, GP, GI), and rainwater gutter systems.',
  },
  '/calculator': {
    title: 'Roofing Material & Sheet Estimator Calculator | A.V.G. Arunagiri Nadar Sons',
    description: 'Accurately calculate roofing sheet area, number of sheets, screws, and accessories needed for your residential, commercial, or industrial roofing project.',
  },
  '/quote': {
    title: 'Request a Roofing & Steel Quote | A.V.G. Arunagiri Nadar Sons',
    description: 'Get an instant competitive price quotation for roofing sheets, steel pipes, polycarbonate panels, and gutters. Dedicated lorry transport delivery directly to your construction site.',
  },
  '/gallery': {
    title: 'Project Gallery & Site Installations | A.V.G. Arunagiri Nadar Sons',
    description: 'View real-world site photos of completed residential, commercial, industrial warehouse, and agricultural shed installations supplied by A.V.G. Arunagiri Nadar Sons across Tamil Nadu.',
  },
  '/about': {
    title: 'About Us | 54+ Years of Roofing & Steel Heritage Since 1970 | A.V.G.',
    description: 'Founded in 1970 in Madurai, A.V.G. Arunagiri Nadar Sons is Tamil Nadu’s trusted premier stockist of certified roofing sheets, structural steel, and building materials.',
  },
  '/contact': {
    title: 'Contact Us & Store Location | A.V.G. Arunagiri Nadar Sons Madurai',
    description: 'Contact our roofing experts for pricing, material consultations, and site lorry transportation. Call +91 98421 74256 or chat directly on WhatsApp +91 84894 21954.',
  },
};

export function SEO() {
  const location = useLocation();
  const pathname = location.pathname;

  useEffect(() => {
    let title = ROUTE_SEO[pathname]?.title;
    let description = ROUTE_SEO[pathname]?.description;

    // Handle dynamic /products/:category
    if (pathname.startsWith('/products/')) {
      const catSlug = pathname.replace('/products/', '');
      const cat = categories.find(c => c.id === catSlug);
      if (cat) {
        title = `${cat.name} Supplier & Stockist in Tamil Nadu | ${SITE_NAME}`;
        description = `${cat.description || `Browse high quality ${cat.name} available at competitive wholesale prices from A.V.G. Arunagiri Nadar Sons with direct site delivery across Tamil Nadu.`}`;
      }
    }

    // Handle dynamic /product/:productId
    if (pathname.startsWith('/product/')) {
      const prodId = pathname.replace('/product/', '');
      const prod = products.find(p => p.id === prodId);
      if (prod) {
        title = `${prod.name} | ${prod.brand ? `${prod.brand} • ` : ''}${SITE_NAME}`;
        description = `${prod.description ? prod.description.slice(0, 155) + '...' : `Genuine ${prod.name} available in standard specifications with wholesale pricing and delivery across Tamil Nadu.`}`;
      }
    }

    // Fallback default
    if (!title) {
      title = `${SITE_NAME} | Quality Roofing & Building Solutions`;
    }
    if (!description) {
      description = 'Premier distributor of roofing sheets, steel pipes, polycarbonate panels, and gutter systems in Tamil Nadu since 1970.';
    }

    // Update document title
    document.title = title;

    // Update meta description
    let metaDesc = document.querySelector('meta[name="description"]');
    if (!metaDesc) {
      metaDesc = document.createElement('meta');
      metaDesc.setAttribute('name', 'description');
      document.head.appendChild(metaDesc);
    }
    metaDesc.setAttribute('content', description);

    // Update Open Graph tags
    let ogTitle = document.querySelector('meta[property="og:title"]');
    if (ogTitle) ogTitle.setAttribute('content', title);

    let ogDesc = document.querySelector('meta[property="og:description"]');
    if (ogDesc) ogDesc.setAttribute('content', description);

    let ogUrl = document.querySelector('meta[property="og:url"]');
    if (ogUrl) ogUrl.setAttribute('content', `${BASE_URL}${pathname}`);

    // Update canonical link
    let canonical = document.querySelector('link[rel="canonical"]');
    if (canonical) {
      canonical.setAttribute('href', `${BASE_URL}${pathname}`);
    }
  }, [pathname]);

  return null;
}
