import { useEffect } from 'react';

/**
 * SEOHead Component - Manages dynamic metadata, title tags, open graph, canonical links,
 * and Schema.org JSON-LD structured data for enhanced SEO indexing.
 */
export default function SEOHead({
  title = 'Case Studies & Portfolio | FROPX GlobalTech',
  description = 'Explore FROPX GlobalTech case studies. Discover how we build AI-first platforms, real-time data lakehouses, enterprise automation, and cloud solutions.',
  keywords = 'Case Studies, AI Engineering, Data Engineering, Cloud Migration, Enterprise Automation, Software Portfolio, FROPX GlobalTech',
  canonicalUrl = window.location.href,
  ogType = 'website',
  schemaData = null,
}) {
  useEffect(() => {
    // 1. Update Document Title
    document.title = title;

    // Helper function to update or create meta tags
    const updateMetaTag = (selector, nameAttr, nameVal, content) => {
      let element = document.querySelector(`meta[${nameAttr}="${nameVal}"]`);
      if (!element) {
        element = document.createElement('meta');
        element.setAttribute(nameAttr, nameVal);
        document.head.appendChild(element);
      }
      element.setAttribute('content', content);
    };

    // 2. Standard Meta Tags
    updateMetaTag('meta', 'name', 'description', description);
    updateMetaTag('meta', 'name', 'keywords', keywords);

    // 3. Open Graph (Facebook / LinkedIn)
    updateMetaTag('meta', 'property', 'og:title', title);
    updateMetaTag('meta', 'property', 'og:description', description);
    updateMetaTag('meta', 'property', 'og:type', ogType);
    updateMetaTag('meta', 'property', 'og:url', canonicalUrl);
    updateMetaTag('meta', 'property', 'og:site_name', 'FROPX GlobalTech');

    // 4. Twitter Card Tags
    updateMetaTag('meta', 'property', 'twitter:card', 'summary_large_image');
    updateMetaTag('meta', 'property', 'twitter:title', title);
    updateMetaTag('meta', 'property', 'twitter:description', description);

    // 5. Canonical Link
    let canonicalLink = document.querySelector('link[rel="canonical"]');
    if (!canonicalLink) {
      canonicalLink = document.createElement('link');
      canonicalLink.setAttribute('rel', 'canonical');
      document.head.appendChild(canonicalLink);
    }
    canonicalLink.setAttribute('href', canonicalUrl);

    // 6. Schema.org JSON-LD Structured Data
    const schemaScriptId = 'fropx-schema-jsonld';
    let existingScript = document.getElementById(schemaScriptId);
    if (existingScript) {
      existingScript.remove();
    }

    if (schemaData) {
      const script = document.createElement('script');
      script.id = schemaScriptId;
      script.type = 'application/ld+json';
      script.text = JSON.stringify(schemaData);
      document.head.appendChild(script);
    }

    return () => {
      // Optional cleanup on unmount if needed
    };
  }, [title, description, keywords, canonicalUrl, ogType, schemaData]);

  return null; // Side-effect component
}
