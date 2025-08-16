import { Helmet } from 'react-helmet-async';

interface SEOProps {
  title?: string;
  description?: string;
  keywords?: string;
  canonical?: string;
  ogImage?: string;
  ogType?: string;
  article?: {
    publishedTime?: string;
    modifiedTime?: string;
    author?: string;
    section?: string;
    tags?: string[];
  };
  noIndex?: boolean;
  noFollow?: boolean;
  structured?: object;
}

const SEO: React.FC<SEOProps> = ({
  title = "Formonex | Leading IT Solutions & Software Development Company in Pune & Bengaluru",
  description = "Formonex is a premier IT company in Pune (Kharadi) and Bengaluru (JP Nagar), specializing in custom software development, AI/ML solutions, cloud integration, digital transformation, and enterprise solutions. Trusted by 150+ clients.",
  keywords = "IT Company Pune, IT Company Bengaluru, Software Development Kharadi, AI ML Services JP Nagar, Custom Software Development, Cloud Integration Services, Digital Transformation, ERP CRM Solutions, Mobile App Development, Web Development, Data Analytics, Automation Solutions",
  canonical = "https://www.formonex.com",
  ogImage = "https://www.formonex.com/images/logos/logo.png",
  ogType = "website",
  article,
  noIndex = false,
  noFollow = false,
  structured
}) => {
  const robotsContent = `${noIndex ? 'noindex' : 'index'}, ${noFollow ? 'nofollow' : 'follow'}`;
  
  return (
    <Helmet>
      {/* Basic Meta Tags */}
      <title>{title}</title>
      <meta name="description" content={description} />
      <meta name="keywords" content={keywords} />
      <meta name="robots" content={robotsContent} />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <meta name="author" content="Formonex Solutions Pvt Ltd" />
      <meta name="language" content="English" />
      <meta name="geo.region" content="IN-MH, IN-KA" />
      <meta name="geo.placename" content="Pune, Bengaluru" />
      <meta name="geo.position" content="18.5516;73.9352, 12.9187;77.5856" />
      <meta name="ICBM" content="18.5516, 73.9352" />
      
      {/* Canonical URL */}
      <link rel="canonical" href={canonical} />
      
      {/* Open Graph Tags */}
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:type" content={ogType} />
      <meta property="og:url" content={canonical} />
      <meta property="og:image" content={ogImage} />
      <meta property="og:image:width" content="1200" />
      <meta property="og:image:height" content="630" />
      <meta property="og:image:alt" content="Formonex - Leading IT Solutions Company" />
      <meta property="og:site_name" content="Formonex" />
      <meta property="og:locale" content="en_US" />
      
      {/* Article specific Open Graph tags */}
      {article && (
        <>
          {article.publishedTime && <meta property="article:published_time" content={article.publishedTime} />}
          {article.modifiedTime && <meta property="article:modified_time" content={article.modifiedTime} />}
          {article.author && <meta property="article:author" content={article.author} />}
          {article.section && <meta property="article:section" content={article.section} />}
          {article.tags && article.tags.map(tag => (
            <meta key={tag} property="article:tag" content={tag} />
          ))}
        </>
      )}
      
      {/* Twitter Card Tags */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={ogImage} />
      <meta name="twitter:image:alt" content="Formonex - Leading IT Solutions Company" />
      <meta name="twitter:site" content="@formonex" />
      <meta name="twitter:creator" content="@formonex" />
      
      {/* Additional SEO Meta Tags */}
      <meta name="theme-color" content="#3B82F6" />
      <meta name="apple-mobile-web-app-capable" content="yes" />
      <meta name="apple-mobile-web-app-status-bar-style" content="default" />
      <meta name="apple-mobile-web-app-title" content="Formonex" />
      <meta name="application-name" content="Formonex" />
      <meta name="msapplication-TileColor" content="#3B82F6" />
      <meta name="msapplication-config" content="/browserconfig.xml" />
      
      {/* Business Information */}
      <meta name="contact" content="contact@formonex.com" />
      <meta name="distribution" content="global" />
      <meta name="rating" content="general" />
      <meta name="revisit-after" content="7 days" />
      
      {/* Structured Data */}
      {structured && (
        <script type="application/ld+json">
          {JSON.stringify(structured)}
        </script>
      )}
    </Helmet>
  );
};

export default SEO;
