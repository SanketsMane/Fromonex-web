export interface Service {
  id: string;
  title: string;
  shortDescription: string;
  fullDescription: string;
  icon: string;
  features: string[];
  benefits: string[];
  technologies?: string[];
}

export const services: Service[] = [
  {
    id: "digital-marketing",
    title: "Digital Marketing",
    shortDescription: "Boost your online presence with strategic digital marketing campaigns",
    fullDescription: "Our comprehensive digital marketing services help businesses establish a strong online presence and reach their target audience effectively. We create data-driven strategies that deliver measurable results.",
    icon: "📈",
    features: [
      "Social Media Marketing",
      "Content Marketing",
      "Email Marketing",
      "PPC Advertising",
      "Brand Strategy",
      "Campaign Analytics"
    ],
    benefits: [
      "Increased brand visibility",
      "Higher conversion rates",
      "Better customer engagement",
      "Measurable ROI",
      "Targeted audience reach"
    ],
    technologies: ["Google Ads", "Facebook Ads", "Instagram", "LinkedIn", "HubSpot", "Mailchimp"]
  },
  {
    id: "data-analytics",
    title: "Data Analytics",
    shortDescription: "Transform raw data into actionable business insights",
    fullDescription: "Our data analytics services help businesses make informed decisions by extracting valuable insights from their data. We use advanced analytics tools and techniques to identify trends, patterns, and opportunities.",
    icon: "📊",
    features: [
      "Business Intelligence",
      "Predictive Analytics",
      "Data Visualization",
      "Performance Dashboards",
      "Real-time Reporting",
      "Data Mining"
    ],
    benefits: [
      "Data-driven decision making",
      "Improved operational efficiency",
      "Risk mitigation",
      "Competitive advantage",
      "Cost optimization"
    ],
    technologies: ["Python", "R", "Tableau", "Power BI", "SQL", "Machine Learning"]
  },
  {
    id: "web-development",
    title: "Web Development",
    shortDescription: "Build fast, scalable, and user-friendly websites",
    fullDescription: "Our web development team creates modern, responsive websites that deliver exceptional user experiences. We use cutting-edge technologies to build fast, secure, and scalable web solutions.",
    icon: "💻",
    features: [
      "Responsive Design",
      "Custom Development",
      "E-commerce Solutions",
      "Content Management Systems",
      "API Integration",
      "Performance Optimization"
    ],
    benefits: [
      "Enhanced user experience",
      "Mobile-first approach",
      "SEO optimization",
      "Fast loading speeds",
      "Secure and scalable"
    ],
    technologies: ["React", "Next.js", "Node.js", "TypeScript", "Tailwind CSS", "MongoDB"]
  },
  {
    id: "app-development",
    title: "App Development",
    shortDescription: "Create innovative mobile apps that drive real-world impact",
    fullDescription: "We develop native and cross-platform mobile applications that provide seamless user experiences across all devices. Our apps are designed for performance, scalability, and user engagement.",
    icon: "📱",
    features: [
      "Native iOS & Android",
      "Cross-platform Development",
      "UI/UX Design",
      "Backend Integration",
      "App Store Optimization",
      "Maintenance & Support"
    ],
    benefits: [
      "Reach mobile audience",
      "Improved customer engagement",
      "Offline functionality",
      "Push notifications",
      "Revenue generation"
    ],
    technologies: ["React Native", "Flutter", "Swift", "Kotlin", "Firebase", "AWS"]
  },
  {
    id: "seo-optimization",
    title: "SEO Optimization",
    shortDescription: "Rank higher on search engines and increase organic traffic",
    fullDescription: "Our SEO optimization services help businesses improve their search engine rankings and increase organic traffic. We use proven techniques and strategies to enhance your online visibility.",
    icon: "🔍",
    features: [
      "Keyword Research",
      "On-page Optimization",
      "Technical SEO",
      "Link Building",
      "Content Optimization",
      "Local SEO"
    ],
    benefits: [
      "Higher search rankings",
      "Increased organic traffic",
      "Better user experience",
      "Long-term results",
      "Cost-effective marketing"
    ],
    technologies: ["Google Analytics", "Search Console", "SEMrush", "Ahrefs", "Screaming Frog"]
  }
];
