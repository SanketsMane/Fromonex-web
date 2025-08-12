import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { ThemeProvider } from './context/ThemeContext';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import About from './pages/About';
import Services from './pages/Services';
import Testimonials from './pages/Testimonials';
import Contact from './pages/Contact';
import Careers from './pages/Careers';
import PrivacyPolicy from './pages/PrivacyPolicy';
import TermsOfService from './pages/TermsOfService';
import { HelmetProvider, Helmet } from 'react-helmet-async';

function App() {
  return (
    <HelmetProvider>
      <ThemeProvider>
        <Router>
          <Helmet>
            <title>Formonex | Top IT Company in Pune and Bengaluru</title>
            <meta name="description" content="Formonex is a leading IT company in Pune (Kharadi) and Bengaluru (JP Nagar), specializing in software development, AI/ML, cloud, and digital transformation services." />
            <meta name="keywords" content="Top IT Company in Pune, Top IT Company in Bengaluru, Software Development in Kharadi Pune, AI/ML Services in JP Nagar Bengaluru, Cloud Integration, Digital Marketing, ERP CRM Solutions, Data Analytics, Custom Software" />
            <meta name="robots" content="index, follow" />
            <meta name="viewport" content="width=device-width, initial-scale=1.0" />
            <link rel="canonical" href="https://www.formonex.com" />
            {/* Open Graph Tags */}
            <meta property="og:title" content="Formonex | Top IT Company in Pune and Bengaluru" />
            <meta property="og:description" content="Software Development in Kharadi, Pune. AI/ML Services in JP Nagar, Bengaluru. Digital transformation, cloud, and more." />
            <meta property="og:type" content="website" />
            <meta property="og:url" content="https://www.formonex.com" />
            <meta property="og:image" content="https://www.formonex.com/images/logos/logo.png" />
            {/* Twitter Tags */}
            <meta name="twitter:card" content="summary_large_image" />
            <meta name="twitter:title" content="Formonex | Top IT Company in Pune and Bengaluru" />
            <meta name="twitter:description" content="Software Development in Kharadi, Pune. AI/ML Services in JP Nagar, Bengaluru. Digital transformation, cloud, and more." />
            <meta name="twitter:image" content="https://www.formonex.com/images/logos/logo.png" />
            {/* LocalBusiness Structured Data for Pune and Bengaluru */}
            <script type="application/ld+json">{`
              [
                {
                  "@context": "https://schema.org",
                  "@type": "LocalBusiness",
                  "name": "Formonex Pune Office",
                  "image": "https://www.formonex.com/images/logos/logo.png",
                  "telephone": "+91 95355 08952",
                  "address": {
                    "@type": "PostalAddress",
                    "streetAddress": "Office no 812, Global Business Hub, EON Free Zone, Kharadi",
                    "addressLocality": "Pune",
                    "addressRegion": "Maharashtra",
                    "postalCode": "411014",
                    "addressCountry": "IN"
                  },
                  "geo": {
                    "@type": "GeoCoordinates",
                    "latitude": 18.5516,
                    "longitude": 73.9352
                  },
                  "url": "https://www.formonex.com"
                },
                {
                  "@context": "https://schema.org",
                  "@type": "LocalBusiness",
                  "name": "Formonex Bengaluru Office",
                  "image": "https://www.formonex.com/images/logos/logo.png",
                  "telephone": "+91 95355 08952",
                  "address": {
                    "@type": "PostalAddress",
                    "streetAddress": "ClayWorks Mini Forest, 3rd Floor, Site No. 74, 15th Cross Road, JP Nagar 3rd Phase, Sarakki Industrial Area",
                    "addressLocality": "Bengaluru",
                    "addressRegion": "Karnataka",
                    "postalCode": "560078",
                    "addressCountry": "IN"
                  },
                  "geo": {
                    "@type": "GeoCoordinates",
                    "latitude": 12.9187,
                    "longitude": 77.5856
                  },
                  "url": "https://www.formonex.com"
                }
              ]
            `}</script>
          </Helmet>
          <div className="min-h-screen bg-white dark:bg-gray-900 transition-colors duration-300">
            <Navbar />
            <main>
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/about" element={<About />} />
                <Route path="/services" element={<Services />} />
                <Route path="/testimonials" element={<Testimonials />} />
                <Route path="/careers" element={<Careers />} />
                <Route path="/contact" element={<Contact />} />
                <Route path="/privacy-policy" element={<PrivacyPolicy />} />
                <Route path="/terms" element={<TermsOfService />} />
              </Routes>
            </main>
            <Footer />
          </div>
        </Router>
      </ThemeProvider>
    </HelmetProvider>
  );
}

export default App;
