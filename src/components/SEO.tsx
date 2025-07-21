import { Helmet } from 'react-helmet-async';

interface SEOProps {
  title?: string;
  description?: string;
  keywords?: string;
  canonical?: string;
  ogImage?: string;
  ogType?: string;
}

const SEO: React.FC<SEOProps> = ({
  title = "Formonex | Top IT Company in Pune and Bengaluru",
  description = "Formonex is a leading IT company in Pune (Kharadi) and Bengaluru (JP Nagar), specializing in software development, AI/ML, cloud, and digital transformation services.",
  keywords = "Top IT Company in Pune, Top IT Company in Bengaluru, Software Development in Kharadi Pune, AI/ML Services in JP Nagar Bengaluru, Cloud Integration, Digital Marketing, ERP CRM Solutions, Data Analytics, Custom Software",
  canonical = "https://www.formonex.com",
  ogImage = "https://www.formonex.com/images/logos/logo.png",
  ogType = "website"
}) => {
  return (
    <Helmet>
      <title>{title}</title>
      <meta name="description" content={description} />
      <meta name="keywords" content={keywords} />
      <meta name="robots" content="index, follow" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <link rel="canonical" href={canonical} />
      
      {/* Open Graph Tags */}
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:type" content={ogType} />
      <meta property="og:url" content={canonical} />
      <meta property="og:image" content={ogImage} />
      <meta property="og:site_name" content="Formonex" />
      
      {/* Twitter Tags */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={ogImage} />
    </Helmet>
  );
};

export default SEO;
