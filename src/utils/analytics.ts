// Google Analytics and Search Console integration

// Add to your environment variables
export const analytics = {
  // Google Analytics 4
  GA_MEASUREMENT_ID: import.meta.env.VITE_GA_MEASUREMENT_ID || 'G-XXXXXXXXXX',
  
  // Google Search Console verification
  SEARCH_CONSOLE_VERIFICATION: import.meta.env.VITE_SEARCH_CONSOLE_VERIFICATION || '',
  
  // Microsoft Clarity (optional)
  CLARITY_PROJECT_ID: import.meta.env.VITE_CLARITY_PROJECT_ID || '',
  
  // Facebook Pixel (optional)
  FACEBOOK_PIXEL_ID: import.meta.env.VITE_FACEBOOK_PIXEL_ID || '',
};

// Google Analytics 4 Script
export const getGA4Script = () => {
  if (!analytics.GA_MEASUREMENT_ID || analytics.GA_MEASUREMENT_ID === 'G-XXXXXXXXXX') {
    return null;
  }

  return `
    <!-- Google tag (gtag.js) -->
    <script async src="https://www.googletagmanager.com/gtag/js?id=${analytics.GA_MEASUREMENT_ID}"></script>
    <script>
      window.dataLayer = window.dataLayer || [];
      function gtag(){dataLayer.push(arguments);}
      gtag('js', new Date());
      gtag('config', '${analytics.GA_MEASUREMENT_ID}', {
        page_title: document.title,
        page_location: window.location.href,
        send_page_view: true
      });
    </script>
  `;
};

// Microsoft Clarity Script
export const getClarityScript = () => {
  if (!analytics.CLARITY_PROJECT_ID) {
    return null;
  }

  return `
    <script type="text/javascript">
      (function(c,l,a,r,i,t,y){
        c[a]=c[a]||function(){(c[a].q=c[a].q||[]).push(arguments)};
        t=l.createElement(r);t.async=1;t.src="https://www.clarity.ms/tag/"+i;
        y=l.getElementsByTagName(r)[0];y.parentNode.insertBefore(t,y);
      })(window, document, "clarity", "script", "${analytics.CLARITY_PROJECT_ID}");
    </script>
  `;
};

// Facebook Pixel Script
export const getFacebookPixelScript = () => {
  if (!analytics.FACEBOOK_PIXEL_ID) {
    return null;
  }

  return `
    <!-- Facebook Pixel Code -->
    <script>
      !function(f,b,e,v,n,t,s)
      {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
      n.callMethod.apply(n,arguments):n.queue.push(arguments)};
      if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
      n.queue=[];t=b.createElement(e);t.async=!0;
      t.src=v;s=b.getElementsByTagName(e)[0];
      s.parentNode.insertBefore(t,s)}(window, document,'script',
      'https://connect.facebook.net/en_US/fbevents.js');
      fbq('init', '${analytics.FACEBOOK_PIXEL_ID}');
      fbq('track', 'PageView');
    </script>
    <noscript>
      <img height="1" width="1" style="display:none"
           src="https://www.facebook.com/tr?id=${analytics.FACEBOOK_PIXEL_ID}&ev=PageView&noscript=1"/>
    </noscript>
  `;
};

// Event tracking functions
export const trackEvent = (eventName: string, parameters?: any) => {
  if (typeof window !== 'undefined' && (window as any).gtag) {
    (window as any).gtag('event', eventName, parameters);
  }
};

export const trackPageView = (pageTitle: string, pagePath: string) => {
  if (typeof window !== 'undefined' && (window as any).gtag) {
    (window as any).gtag('config', analytics.GA_MEASUREMENT_ID, {
      page_title: pageTitle,
      page_location: `${window.location.origin}${pagePath}`,
    });
  }
};

// Custom events for business tracking
export const trackBusinessEvents = {
  contactFormSubmission: (formType: string) => {
    trackEvent('contact_form_submit', {
      form_type: formType,
      event_category: 'engagement',
      event_label: 'Contact Form'
    });
  },

  serviceInquiry: (serviceName: string) => {
    trackEvent('service_inquiry', {
      service_name: serviceName,
      event_category: 'business',
      event_label: 'Service Interest'
    });
  },

  downloadPortfolio: () => {
    trackEvent('download_portfolio', {
      event_category: 'engagement',
      event_label: 'Portfolio Download'
    });
  },

  careerApplication: (position: string) => {
    trackEvent('career_application', {
      position: position,
      event_category: 'hr',
      event_label: 'Job Application'
    });
  },

  testimonialView: (clientName: string) => {
    trackEvent('testimonial_view', {
      client_name: clientName,
      event_category: 'social_proof',
      event_label: 'Testimonial Interaction'
    });
  }
};

export default analytics;
