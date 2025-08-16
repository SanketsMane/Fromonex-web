export const generateOrganizationSchema = () => {
  return {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "Formonex Solutions Pvt Ltd",
    "alternateName": "Formonex",
    "url": "https://www.formonex.com",
    "logo": "https://www.formonex.com/images/logos/logo.png",
    "contactPoint": [
      {
        "@type": "ContactPoint",
        "telephone": "+91-95355-08952",
        "contactType": "customer service",
        "areaServed": ["IN", "US", "GB"],
        "availableLanguage": ["English", "Hindi"]
      }
    ],
    "address": [
      {
        "@type": "PostalAddress",
        "streetAddress": "Office no 812, Global Business Hub, EON Free Zone, Kharadi",
        "addressLocality": "Pune",
        "addressRegion": "Maharashtra",
        "postalCode": "411014",
        "addressCountry": "IN"
      },
      {
        "@type": "PostalAddress",
        "streetAddress": "ClayWorks Mini Forest, 3rd Floor, Site No. 74, 15th Cross Road, JP Nagar 3rd Phase, Sarakki Industrial Area",
        "addressLocality": "Bengaluru",
        "addressRegion": "Karnataka",
        "postalCode": "560078",
        "addressCountry": "IN"
      }
    ],
    "geo": [
      {
        "@type": "GeoCoordinates",
        "latitude": 18.5516,
        "longitude": 73.9352
      },
      {
        "@type": "GeoCoordinates",
        "latitude": 12.9187,
        "longitude": 77.5856
      }
    ],
    "sameAs": [
      "https://www.linkedin.com/company/formonex",
      "https://twitter.com/formonex",
      "https://www.facebook.com/formonex"
    ],
    "foundingDate": "2020",
    "founders": [
      {
        "@type": "Person",
        "name": "Nitin"
      }
    ],
    "numberOfEmployees": {
      "@type": "QuantitativeValue",
      "value": "50+"
    },
    "description": "Formonex is a leading IT solutions company specializing in custom software development, AI/ML solutions, cloud integration, and digital transformation services.",
    "industry": "Information Technology",
    "keywords": "Software Development, AI/ML, Cloud Integration, Digital Transformation, Custom Software, Web Development, Mobile App Development",
    "serviceArea": {
      "@type": "GeoCircle",
      "geoMidpoint": {
        "@type": "GeoCoordinates",
        "latitude": 15.7,
        "longitude": 75.8
      },
      "geoRadius": "global"
    }
  };
};

export const generateLocalBusinessSchema = (location: 'pune' | 'bengaluru') => {
  const locationData = {
    pune: {
      name: "Formonex Solutions Pvt Ltd - Pune Office",
      address: {
        streetAddress: "Office no 812, Global Business Hub, EON Free Zone, Kharadi",
        addressLocality: "Pune",
        addressRegion: "Maharashtra",
        postalCode: "411014"
      },
      geo: {
        latitude: 18.5516,
        longitude: 73.9352
      }
    },
    bengaluru: {
      name: "Formonex Solutions Pvt Ltd - Bengaluru Office",
      address: {
        streetAddress: "ClayWorks Mini Forest, 3rd Floor, Site No. 74, 15th Cross Road, JP Nagar 3rd Phase, Sarakki Industrial Area",
        addressLocality: "Bengaluru",
        addressRegion: "Karnataka",
        postalCode: "560078"
      },
      geo: {
        latitude: 12.9187,
        longitude: 77.5856
      }
    }
  };

  const data = locationData[location];

  return {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "name": data.name,
    "image": "https://www.formonex.com/images/logos/logo.png",
    "telephone": "+91-95355-08952",
    "email": "contact@formonex.com",
    "address": {
      "@type": "PostalAddress",
      ...data.address,
      "addressCountry": "IN"
    },
    "geo": {
      "@type": "GeoCoordinates",
      ...data.geo
    },
    "url": "https://www.formonex.com",
    "priceRange": "$$",
    "openingHours": "Mo-Fr 09:00-18:00",
    "paymentAccepted": "Cash, Credit Card, Bank Transfer",
    "currenciesAccepted": "INR, USD",
    "description": "Leading IT solutions company providing custom software development, AI/ML services, and digital transformation solutions.",
    "aggregateRating": {
      "@type": "AggregateRating",
      "ratingValue": "4.8",
      "reviewCount": "150"
    },
    "review": [
      {
        "@type": "Review",
        "reviewRating": {
          "@type": "Rating",
          "ratingValue": "5",
          "bestRating": "5"
        },
        "author": {
          "@type": "Person",
          "name": "Sarah Johnson"
        },
        "reviewBody": "Exceptional service and innovative solutions. Formonex delivered our project on time and exceeded expectations."
      }
    ]
  };
};

export const generateServiceSchema = (service: any) => {
  return {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": service.title,
    "description": service.description,
    "provider": {
      "@type": "Organization",
      "name": "Formonex Solutions Pvt Ltd",
      "url": "https://www.formonex.com"
    },
    "areaServed": {
      "@type": "Country",
      "name": "India"
    },
    "hasOfferCatalog": {
      "@type": "OfferCatalog",
      "name": "IT Services",
      "itemListElement": [
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": service.title,
            "description": service.description
          }
        }
      ]
    },
    "category": "Information Technology Services",
    "serviceType": service.category || "Software Development"
  };
};

export const generateBreadcrumbSchema = (breadcrumbs: Array<{name: string, url: string}>) => {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": breadcrumbs.map((item, index) => ({
      "@type": "ListItem",
      "position": index + 1,
      "name": item.name,
      "item": item.url
    }))
  };
};

export const generateWebsiteSchema = () => {
  return {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "name": "Formonex",
    "alternateName": "Formonex Solutions",
    "url": "https://www.formonex.com",
    "description": "Leading IT solutions company providing custom software development, AI/ML solutions, cloud integration, and digital transformation services.",
    "publisher": {
      "@type": "Organization",
      "name": "Formonex Solutions Pvt Ltd",
      "logo": {
        "@type": "ImageObject",
        "url": "https://www.formonex.com/images/logos/logo.png"
      }
    },
    "potentialAction": {
      "@type": "SearchAction",
      "target": {
        "@type": "EntryPoint",
        "urlTemplate": "https://www.formonex.com/search?q={search_term_string}"
      },
      "query-input": "required name=search_term_string"
    },
    "mainEntity": {
      "@type": "Organization",
      "name": "Formonex Solutions Pvt Ltd"
    }
  };
};

export const generateFAQSchema = (faqs: Array<{question: string, answer: string}>) => {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": faqs.map(faq => ({
      "@type": "Question",
      "name": faq.question,
      "acceptedAnswer": {
        "@type": "Answer",
        "text": faq.answer
      }
    }))
  };
};
