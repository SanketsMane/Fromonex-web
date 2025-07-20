export interface Testimonial {
  id: number;
  name: string;
  position: string;
  company: string;
  image: string;
  rating: number;
  text: string;
}

export const testimonials: Testimonial[] = [
  {
    id: 1,
    name: "Sarah Johnson",
    position: "CEO",
    company: "TechStart Inc.",
    image: "/images/testimonials/sarah.png",
    rating: 5,
    text: "Formonex transformed our digital presence completely. Their team's expertise in web development and digital marketing helped us increase our online sales by 300% within 6 months."
  },
  {
    id: 2,
    name: "Michael Chen",
    position: "CTO",
    company: "DataFlow Solutions",
    image: "/images/testimonials/michael.png",
    rating: 5,
    text: "The data analytics solutions provided by Formonex gave us insights we never knew existed. Their custom dashboard helps us make data-driven decisions every day."
  },
  {
    id: 3,
    name: "Linda Rodriguez",
    position: "Marketing Director",
    company: "GrowthCorp",
    image: "/images/testimonials/linda.png",
    rating: 5,
    text: "Working with Formonex on our digital marketing strategy was a game-changer. Their SEO optimization increased our organic traffic by 250% in just 4 months."
  },
  {
    id: 4,
    name: "David Thompson",
    position: "Founder",
    company: "InnovateLab",
    image: "/images/testimonials/testi-author-2.jpg",
    rating: 5,
    text: "The mobile app developed by Formonex exceeded our expectations. The user experience is fantastic, and the app has been downloaded over 50,000 times in the first month."
  },
  {
    id: 5,
    name: "Priya Sharma",
    position: "Marketing Director",
    company: "InnovateCorp",
    image: "/images/testimonials/priya.png",
    rating: 5,
    text: "Working with Formonex on our digital marketing campaign was a game-changer. They developed a comprehensive strategy that increased our online visibility and customer engagement significantly."
  },
  {
    id: 6,
    name: "Rajesh Kumar",
    position: "Business Owner",
    company: "GrowthHub",
    image: "/images/testimonials/rajesh.png",
    rating: 5,
    text: "The SEO optimization services from Formonex helped us rank on the first page of Google for our target keywords. Our organic traffic has increased by 200% in just 6 months."
  }
];

export const clients = [
  {
    name: "Bosch",
    logo: "/images/client-logo/boch_logo.png"
  },
  {
    name: "CMTI",
    logo: "/images/client-logo/cmti.png"
  },
  {
    name: "Faively",
    logo: "/images/client-logo/faively.png"
  },
  {
    name: "SS Scissors",
    logo: "/images/client-logo/ss-scisors.png"
  },
  {
    name: "Spa Rivera",
    logo: "/images/client-logo/spa-rivera.png"
  },
  {
    name: "MMP",
    logo: "/images/client-logo/mmp.png"
  },
  {
    name: "Indus",
    logo: "/images/client-logo/indus.png"
  }
];

export const stats = [
  {
    number: "150+",
    label: "Projects Completed",
    icon: "✅"
  },
  {
    number: "50+",
    label: "Happy Clients",
    icon: "😊"
  },
  {
    number: "5+",
    label: "Years Experience",
    icon: "📅"
  },
  {
    number: "24/7",
    label: "Support Available",
    icon: "🛠️"
  }
];
