export interface CareerPosition {
  id: string;
  title: string;
  department: string;
  location: string;
  type: 'Full-time' | 'Part-time' | 'Contract' | 'Internship';
  experience: string;
  description: string;
  requirements: string[];
  responsibilities: string[];
  benefits: string[];
  posted: string;
}

export const careerPositions: CareerPosition[] = [
  {
    id: "frontend-developer",
    title: "Frontend Developer",
    department: "Engineering",
    location: "Bengaluru, India",
    type: "Full-time",
    experience: "2-4 years",
    description: "We are looking for a skilled Frontend Developer to join our dynamic team. You will be responsible for creating amazing user experiences using modern web technologies.",
    requirements: [
      "Bachelor's degree in Computer Science or related field",
      "2+ years experience with React.js, TypeScript",
      "Strong knowledge of HTML5, CSS3, JavaScript",
      "Experience with modern CSS frameworks (Tailwind CSS)",
      "Understanding of responsive design principles",
      "Knowledge of version control systems (Git)",
      "Experience with build tools and bundlers"
    ],
    responsibilities: [
      "Develop and maintain user-facing web applications",
      "Collaborate with UI/UX designers to implement designs",
      "Write clean, maintainable, and efficient code",
      "Optimize applications for maximum speed and scalability",
      "Participate in code reviews and team meetings",
      "Stay up-to-date with emerging technologies"
    ],
    benefits: [
      "Competitive salary",
      "Health insurance",
      "Professional development opportunities",
      "Flexible working hours",
      "Remote work options",
      "Annual bonus"
    ],
    posted: "2024-01-15"
  },
  {
    id: "data-analyst",
    title: "Data Analyst",
    department: "Analytics",
    location: "Bengaluru, India",
    type: "Full-time",
    experience: "1-3 years",
    description: "Join our data team to help businesses make data-driven decisions. You'll work with large datasets and create insights that drive business growth.",
    requirements: [
      "Bachelor's degree in Statistics, Mathematics, or related field",
      "Experience with SQL and data visualization tools",
      "Knowledge of Python or R for data analysis",
      "Understanding of statistical concepts",
      "Experience with Tableau or Power BI",
      "Strong analytical and problem-solving skills"
    ],
    responsibilities: [
      "Analyze large datasets to identify trends and patterns",
      "Create data visualizations and dashboards",
      "Prepare reports and presentations for stakeholders",
      "Collaborate with cross-functional teams",
      "Maintain data quality and integrity",
      "Support business decision-making with data insights"
    ],
    benefits: [
      "Competitive salary",
      "Health insurance",
      "Learning and development budget",
      "Flexible working arrangements",
      "Performance bonuses",
      "Career growth opportunities"
    ],
    posted: "2024-01-10"
  },
  {
    id: "digital-marketing-specialist",
    title: "Digital Marketing Specialist",
    department: "Marketing",
    location: "Bengaluru, India",
    type: "Full-time",
    experience: "2-5 years",
    description: "We're seeking a creative Digital Marketing Specialist to drive our clients' online presence and develop innovative marketing strategies.",
    requirements: [
      "Bachelor's degree in Marketing, Communications, or related field",
      "2+ years experience in digital marketing",
      "Experience with Google Ads, Facebook Ads, LinkedIn Ads",
      "Knowledge of SEO and content marketing",
      "Experience with marketing analytics tools",
      "Strong communication and creative skills"
    ],
    responsibilities: [
      "Develop and execute digital marketing campaigns",
      "Manage social media accounts and content",
      "Optimize campaigns for better performance",
      "Analyze marketing metrics and ROI",
      "Create engaging content for various platforms",
      "Stay updated with digital marketing trends"
    ],
    benefits: [
      "Competitive salary",
      "Health and dental insurance",
      "Professional certifications support",
      "Creative freedom",
      "Team outings and events",
      "Performance incentives"
    ],
    posted: "2024-01-12"
  }
];

export const careerBenefits = [
  {
    title: "Competitive Compensation",
    description: "We offer competitive salaries and performance-based bonuses",
    icon: "💰"
  },
  {
    title: "Health & Wellness",
    description: "Comprehensive health insurance and wellness programs",
    icon: "🏥"
  },
  {
    title: "Professional Growth",
    description: "Continuous learning opportunities and career development",
    icon: "📈"
  },
  {
    title: "Work-Life Balance",
    description: "Flexible working hours and remote work options",
    icon: "⚖️"
  },
  {
    title: "Modern Workspace",
    description: "State-of-the-art office with latest technology and amenities",
    icon: "🏢"
  },
  {
    title: "Team Culture",
    description: "Collaborative environment with regular team activities",
    icon: "👥"
  }
];

export const whyJoinUs = {
  title: "Why Join Formonex?",
  subtitle: "Build Your Future With Us - Work with purpose. Grow with impact.",
  description: "At Formonex, we believe in empowering our team members to reach their full potential. We provide an environment where innovation thrives, creativity is celebrated, and every voice matters.",
  values: [
    {
      title: "Innovation First",
      description: "We embrace cutting-edge technologies and creative solutions"
    },
    {
      title: "Growth Mindset", 
      description: "Continuous learning and development opportunities for everyone"
    },
    {
      title: "Collaborative Spirit",
      description: "We work together to achieve extraordinary results"
    },
    {
      title: "Work-Life Balance",
      description: "We believe in maintaining a healthy balance between work and life"
    }
  ]
};
