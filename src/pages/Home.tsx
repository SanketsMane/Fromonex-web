import React, { useState, useEffect, useRef } from 'react';
import { motion, useScroll, useTransform, AnimatePresence } from 'framer-motion';
import { 
  ArrowRight, 
  Users, 
  TrendingUp, 
  Shield, 
  Zap,
  Star,
  Award,
  Globe,
  Play,
  Code,
  Brain,
  Rocket,
  Target,
  Lightbulb,
  ChevronDown,
  Sparkles,
  Database,
  Cloud,
  Cpu,
  BarChart3,
  Bot,
  Settings,
  Briefcase,
  CheckCircle,
  Quote,
  Phone,
  Mail
} from 'lucide-react';
import { Link } from 'react-router-dom';
import { services, companyInfo } from '../data/company';
import { testimonials } from '../data/testimonials';
import SEO from '../components/SEO';
import { generateOrganizationSchema, generateWebsiteSchema, generateLocalBusinessSchema } from '../utils/structuredData';

const Home: React.FC = () => {
  const [currentTestimonial, setCurrentTestimonial] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  const heroRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll();
  const yTransform = useTransform(scrollYProgress, [0, 1], [0, -50]);
  const opacityTransform = useTransform(scrollYProgress, [0, 0.3], [1, 0]);

  const featuredServices = services.slice(0, 8);
  const featuredTestimonials = testimonials && testimonials.length > 0 
    ? testimonials.slice(0, 3) 
    : [
        {
          id: 1,
          name: "Sample Client",
          position: "CEO",
          company: "Tech Company",
          text: "Excellent service and professional team. Highly recommended for all IT solutions.",
          rating: 5
        }
      ];

  useEffect(() => {
    setIsVisible(true);
    if (featuredTestimonials.length > 1) {
      const interval = setInterval(() => {
        setCurrentTestimonial((prev) => (prev + 1) % featuredTestimonials.length);
      }, 5000);
      return () => clearInterval(interval);
    }
  }, [featuredTestimonials.length]);

  const achievements = [
    { icon: <Award className="w-8 h-8" />, number: "150+", label: "Projects Delivered", color: "from-blue-500 to-cyan-500", bgColor: "bg-blue-500/10" },
    { icon: <Users className="w-8 h-8" />, number: "50+", label: "Happy Clients", color: "from-green-500 to-emerald-500", bgColor: "bg-green-500/10" },
    { icon: <Globe className="w-8 h-8" />, number: "15+", label: "Countries Served", color: "from-purple-500 to-pink-500", bgColor: "bg-purple-500/10" },
    { icon: <Star className="w-8 h-8" />, number: "4.9", label: "Client Rating", color: "from-yellow-500 to-orange-500", bgColor: "bg-yellow-500/10" }
  ];

  const whyChooseUs = [
    {
      icon: <Zap className="w-12 h-12" />,
      title: "Lightning Fast Delivery",
      description: "Rapid development cycles with cutting-edge methodologies",
      gradient: "from-blue-500 to-cyan-500",
      delay: 0
    },
    {
      icon: <Shield className="w-12 h-12" />,
      title: "Enterprise Security",
      description: "Bank-level security protocols and compliance standards",
      gradient: "from-green-500 to-emerald-500",
      delay: 0.1
    },
    {
      icon: <TrendingUp className="w-12 h-12" />,
      title: "Scalable Architecture",
      description: "Future-proof solutions that grow with your business",
      gradient: "from-purple-500 to-pink-500",
      delay: 0.2
    },
    {
      icon: <Brain className="w-12 h-12" />,
      title: "AI-Powered Innovation",
      description: "Next-generation AI and machine learning integration",
      gradient: "from-orange-500 to-red-500",
      delay: 0.3
    }
  ];

  const techStack = [
    { icon: <Code className="w-6 h-6" />, name: "Development", color: "text-blue-500", bgColor: "bg-blue-500/10" },
    { icon: <Database className="w-6 h-6" />, name: "Database", color: "text-green-500", bgColor: "bg-green-500/10" },
    { icon: <Cloud className="w-6 h-6" />, name: "Cloud", color: "text-purple-500", bgColor: "bg-purple-500/10" },
    { icon: <Bot className="w-6 h-6" />, name: "AI/ML", color: "text-orange-500", bgColor: "bg-orange-500/10" },
    { icon: <BarChart3 className="w-6 h-6" />, name: "Analytics", color: "text-pink-500", bgColor: "bg-pink-500/10" },
    { icon: <Settings className="w-6 h-6" />, name: "DevOps", color: "text-cyan-500", bgColor: "bg-cyan-500/10" }
  ];

  const processSteps = [
    {
      icon: <Lightbulb className="w-8 h-8" />,
      title: "Discovery & Analysis",
      description: "Deep dive into your business requirements and objectives",
      color: "blue"
    },
    {
      icon: <Target className="w-8 h-8" />,
      title: "Strategic Planning",
      description: "Create comprehensive roadmap and technical architecture",
      color: "green"
    },
    {
      icon: <Code className="w-8 h-8" />,
      title: "Development & Testing",
      description: "Agile development with continuous integration and testing",
      color: "purple"
    },
    {
      icon: <Rocket className="w-8 h-8" />,
      title: "Deployment & Support",
      description: "Seamless launch with ongoing monitoring and optimization",
      color: "orange"
    }
  ];

  const organizationSchema = generateOrganizationSchema();
  const websiteSchema = generateWebsiteSchema();
  const puneBusinessSchema = generateLocalBusinessSchema('pune');
  const bengaluruBusinessSchema = generateLocalBusinessSchema('bengaluru');

  const combinedSchema = [organizationSchema, websiteSchema, puneBusinessSchema, bengaluruBusinessSchema];

  return (
    <div className="min-h-screen bg-white dark:bg-gray-900 overflow-hidden">
      <SEO 
        title="Formonex | Leading IT Solutions & Software Development Company in Pune & Bengaluru"
        description="Premier IT company in Pune (Kharadi) and Bengaluru (JP Nagar) delivering cutting-edge software development, AI/ML solutions, cloud integration & digital transformation. 150+ satisfied clients, 200+ projects completed."
        keywords="IT Company Pune, IT Company Bengaluru, Software Development Kharadi, AI ML Services JP Nagar, Custom Software Development, Cloud Integration Services, Digital Transformation, ERP CRM Solutions, Mobile App Development, Web Development, Data Analytics, Automation Solutions"
        canonical="https://www.formonex.com"
        structured={combinedSchema}
      />
      {/* Animated Background Elements */}
      <div className="fixed inset-0 pointer-events-none">
        <div className="absolute top-1/4 left-10 w-72 h-72 bg-gradient-to-r from-blue-400/20 to-cyan-400/20 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/4 right-10 w-96 h-96 bg-gradient-to-r from-purple-400/20 to-pink-400/20 rounded-full blur-3xl animate-pulse" style={{animationDelay: '2s'}}></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gradient-to-r from-green-400/10 to-blue-400/10 rounded-full blur-3xl animate-pulse" style={{animationDelay: '4s'}}></div>
      </div>

      {/* Hero Section */}
      <section ref={heroRef} className="relative min-h-screen flex items-center justify-center overflow-hidden">
        <motion.div 
          style={{ y: yTransform, opacity: opacityTransform }}
          className="absolute inset-0 bg-gradient-to-br from-blue-50 via-white to-purple-50 dark:from-gray-900 dark:via-gray-800 dark:to-blue-900"
        />
        
        <div className="container-custom relative z-10 pt-20">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -100 }}
              animate={{ opacity: isVisible ? 1 : 0, x: isVisible ? 0 : -100 }}
              transition={{ duration: 1, ease: "easeOut" }}
              className="text-center lg:text-left"
            >
              {/* Company Badge */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.3 }}
                className="inline-flex items-center px-6 py-3 rounded-full bg-gradient-to-r from-blue-500/10 to-purple-500/10 border border-blue-500/20 backdrop-blur-xl mb-8 group hover:scale-105 transition-transform duration-300"
              >
                <Sparkles className="w-5 h-5 text-blue-500 mr-2 animate-pulse" />
                <span className="text-blue-600 dark:text-blue-400 text-sm font-semibold tracking-wide">{companyInfo.tagline}</span>
                <div className="absolute inset-0 rounded-full bg-gradient-to-r from-blue-500/5 to-purple-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </motion.div>

              {/* Main Heading */}
              <motion.h1
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1, delay: 0.5 }}
                className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold mb-8 leading-tight"
              >
                <motion.span
                  className="block bg-gradient-to-r from-gray-900 via-blue-800 to-purple-800 dark:from-white dark:via-blue-200 dark:to-purple-200 bg-clip-text text-transparent"
                  animate={{
                    backgroundPosition: ['0% 50%', '100% 50%', '0% 50%'],
                  }}
                  transition={{ duration: 5, repeat: Infinity, ease: "linear" }}
                >
                  Transform
                </motion.span>
                <span className="block text-gray-900 dark:text-white">Your Business</span>
                <motion.span
                  className="block bg-gradient-to-r from-blue-600 via-purple-600 to-cyan-600 bg-clip-text text-transparent"
                  animate={{
                    backgroundPosition: ['0% 50%', '100% 50%', '0% 50%'],
                  }}
                  transition={{ duration: 7, repeat: Infinity, ease: "linear" }}
                >
                  Digitally
                </motion.span>
              </motion.h1>

              {/* Subtitle */}
              <motion.p
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1, delay: 0.7 }}
                className="text-xl md:text-2xl text-gray-600 dark:text-gray-300 mb-12 leading-relaxed max-w-2xl"
              >
                Leading IT company delivering{' '}
                <motion.span 
                  className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600 font-semibold"
                  animate={{ scale: [1, 1.05, 1] }}
                  transition={{ duration: 2, repeat: Infinity }}
                >
                  innovative solutions
                </motion.span>
                {' '}in AI, cloud computing, and digital transformation
              </motion.p>

              {/* CTA Buttons */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1, delay: 0.9 }}
                className="flex flex-col sm:flex-row gap-6 justify-center lg:justify-start mb-12"
              >
                <Link 
                  to="/contact" 
                  className="group relative px-10 py-5 bg-gradient-to-r from-blue-600 via-purple-600 to-cyan-600 text-white font-bold rounded-2xl shadow-2xl hover:shadow-3xl transform hover:scale-105 transition-all duration-300 inline-flex items-center overflow-hidden"
                >
                  <div className="absolute inset-0 bg-gradient-to-r from-cyan-600 via-blue-600 to-purple-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  <span className="relative z-10 text-lg">Start Your Project</span>
                  <Rocket className="ml-3 h-6 w-6 relative z-10 transition-transform group-hover:translate-x-1" />
                </Link>
                
                <button className="group relative px-10 py-5 border-2 border-gray-300 dark:border-gray-600 text-gray-900 dark:text-white font-bold rounded-2xl backdrop-blur-xl hover:bg-gray-50 dark:hover:bg-gray-800 transition-all duration-300 inline-flex items-center">
                  <Play className="mr-3 h-6 w-6 transition-transform group-hover:scale-110" />
                  <span className="text-lg">Watch Demo</span>
                  <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-transparent via-gray-100/50 dark:via-gray-700/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                </button>
              </motion.div>

              {/* Quick Stats */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1, delay: 1.1 }}
                className="grid grid-cols-2 md:grid-cols-4 gap-6"
              >
                {achievements.map((achievement, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.6, delay: 1.3 + index * 0.1 }}
                    whileHover={{ scale: 1.05 }}
                    className="text-center group cursor-pointer"
                  >
                    <div className={`inline-flex items-center justify-center w-14 h-14 rounded-2xl ${achievement.bgColor} mb-3 group-hover:scale-110 transition-transform duration-300`}>
                      <div className={`bg-gradient-to-r ${achievement.color} bg-clip-text text-transparent`}>
                        {achievement.icon}
                      </div>
                    </div>
                    <div className={`text-3xl font-bold mb-1 bg-gradient-to-r ${achievement.color} bg-clip-text text-transparent`}>
                      {achievement.number}
                    </div>
                    <div className="text-sm text-gray-600 dark:text-gray-400 font-medium">
                      {achievement.label}
                    </div>
                  </motion.div>
                ))}
              </motion.div>
            </motion.div>

            {/* Right Side - Interactive Tech Stack */}
            <motion.div
              initial={{ opacity: 0, x: 100 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 1, delay: 0.6 }}
              className="relative"
            >
              <div className="relative">
                {/* Main Tech Circle */}
                <motion.div
                  animate={{ rotate: 360 }}
                  transition={{ duration: 50, repeat: Infinity, ease: "linear" }}
                  className="relative w-96 h-96 mx-auto"
                >
                  <div className="absolute inset-0 rounded-full bg-gradient-to-r from-blue-500/20 to-purple-500/20 backdrop-blur-xl border border-white/20"></div>
                  
                  {/* Tech Stack Icons */}
                  {techStack.map((tech, index) => {
                    const angle = (index * 360) / techStack.length;
                    const radius = 140;
                    const x = Math.cos((angle * Math.PI) / 180) * radius;
                    const y = Math.sin((angle * Math.PI) / 180) * radius;
                    
                    return (
                      <motion.div
                        key={index}
                        className="absolute"
                        style={{
                          left: `calc(50% + ${x}px)`,
                          top: `calc(50% + ${y}px)`,
                          transform: 'translate(-50%, -50%)'
                        }}
                        animate={{ rotate: -360 }}
                        transition={{ duration: 50, repeat: Infinity, ease: "linear" }}
                        whileHover={{ scale: 1.2 }}
                      >
                        <div className={`w-16 h-16 rounded-2xl ${tech.bgColor} backdrop-blur-xl border border-white/20 flex items-center justify-center group cursor-pointer hover:shadow-lg transition-all duration-300`}>
                          <div className={tech.color}>
                            {tech.icon}
                          </div>
                        </div>
                      </motion.div>
                    );
                  })}
                  
                  {/* Center Logo/Icon */}
                  <motion.div
                    animate={{ scale: [1, 1.1, 1] }}
                    transition={{ duration: 3, repeat: Infinity }}
                    className="absolute inset-0 flex items-center justify-center"
                  >
                    <div className="w-20 h-20 rounded-full bg-gradient-to-r from-blue-600 to-purple-600 flex items-center justify-center shadow-2xl">
                      <Cpu className="w-10 h-10 text-white" />
                    </div>
                  </motion.div>
                </motion.div>

                {/* Floating Elements */}
                <motion.div
                  animate={{ y: [0, -20, 0] }}
                  transition={{ duration: 4, repeat: Infinity }}
                  className="absolute -top-8 -right-8 w-24 h-24 bg-gradient-to-r from-cyan-400/30 to-blue-400/30 rounded-full blur-xl"
                />
                <motion.div
                  animate={{ y: [0, 20, 0] }}
                  transition={{ duration: 5, repeat: Infinity }}
                  className="absolute -bottom-8 -left-8 w-32 h-32 bg-gradient-to-r from-purple-400/30 to-pink-400/30 rounded-full blur-xl"
                />
              </div>
            </motion.div>
          </div>

          {/* Scroll Indicator */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 2 }}
            className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
          >
            <motion.div
              animate={{ y: [0, 10, 0] }}
              transition={{ duration: 2, repeat: Infinity }}
              className="flex flex-col items-center text-gray-600 dark:text-gray-400 cursor-pointer"
              onClick={() => window.scrollTo({ top: window.innerHeight, behavior: 'smooth' })}
            >
              <span className="text-sm font-medium mb-2">Scroll to explore</span>
              <ChevronDown className="w-6 h-6" />
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Services Showcase */}
      <section className="py-32 bg-gradient-to-br from-gray-50 to-blue-50 dark:from-gray-900 dark:to-gray-800 relative">
        <div className="container-custom relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            viewport={{ once: true }}
            className="text-center mb-20"
          >
            <motion.span
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="inline-flex items-center px-6 py-3 rounded-full bg-gradient-to-r from-blue-500/10 to-purple-500/10 border border-blue-500/20 text-blue-600 dark:text-blue-400 text-sm font-semibold mb-6"
            >
              <Briefcase className="w-4 h-4 mr-2" />
              Our Expertise
            </motion.span>
            <h2 className="text-5xl lg:text-7xl font-bold text-gray-900 dark:text-white mb-8">
              Comprehensive
              <span className="block bg-gradient-to-r from-blue-600 via-purple-600 to-cyan-600 bg-clip-text text-transparent">
                IT Solutions
              </span>
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-4xl mx-auto leading-relaxed">
              From AI-powered automation to cloud infrastructure, we deliver cutting-edge solutions that transform businesses and drive unprecedented growth.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {featuredServices.map((service, index) => {
              const gradients = [
                'from-blue-500 to-cyan-500',
                'from-green-500 to-emerald-500',
                'from-purple-500 to-pink-500',
                'from-orange-500 to-red-500',
                'from-cyan-500 to-blue-500',
                'from-pink-500 to-purple-500',
                'from-yellow-500 to-orange-500',
                'from-indigo-500 to-purple-500'
              ];
              
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  whileHover={{ y: -15, scale: 1.03 }}
                  className="group relative bg-white/70 dark:bg-gray-800/70 backdrop-blur-xl border border-white/20 dark:border-gray-700/50 rounded-3xl p-8 shadow-xl hover:shadow-2xl transition-all duration-500 overflow-hidden cursor-pointer"
                >
                  {/* Gradient Overlay */}
                  <div className={`absolute inset-0 bg-gradient-to-br ${gradients[index % gradients.length]} opacity-0 group-hover:opacity-10 transition-opacity duration-500 rounded-3xl`}></div>
                  
                  {/* Icon */}
                  <motion.div
                    whileHover={{ scale: 1.2, rotate: 5 }}
                    className={`inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-gradient-to-r ${gradients[index % gradients.length]} text-white mb-6 shadow-lg group-hover:shadow-xl transition-all duration-300`}
                  >
                    <span className="text-2xl">{service.icon}</span>
                  </motion.div>
                  
                  <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                    {service.title}
                  </h3>
                  
                  <p className="text-gray-600 dark:text-gray-300 mb-6 leading-relaxed">
                    {service.description}
                  </p>
                  
                  <div className="space-y-2 mb-6">
                    {service.features.slice(0, 3).map((feature, featureIndex) => (
                      <motion.div
                        key={featureIndex}
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.2 + featureIndex * 0.1 }}
                        className="flex items-center text-sm text-gray-600 dark:text-gray-300"
                      >
                        <CheckCircle className="w-4 h-4 text-green-500 mr-3 flex-shrink-0" />
                        {feature}
                      </motion.div>
                    ))}
                  </div>
                  
                  <motion.button 
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="w-full py-3 bg-gray-100 dark:bg-gray-700 hover:bg-gray-200 dark:hover:bg-gray-600 rounded-xl text-gray-900 dark:text-white font-semibold transition-all duration-300 group-hover:bg-blue-500 group-hover:text-white"
                  >
                    Learn More
                  </motion.button>

                  {/* Floating Elements */}
                  <div className="absolute top-4 right-4 w-2 h-2 bg-blue-400 rounded-full opacity-60 animate-pulse"></div>
                  <div className="absolute bottom-4 left-4 w-1.5 h-1.5 bg-purple-400 rounded-full opacity-40 animate-pulse" style={{animationDelay: '1s'}}></div>
                </motion.div>
              );
            })}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            viewport={{ once: true }}
            className="text-center mt-16"
          >
            <Link 
              to="/services" 
              className="group inline-flex items-center px-10 py-5 bg-gradient-to-r from-blue-600 via-purple-600 to-cyan-600 text-white font-bold text-lg rounded-2xl shadow-2xl hover:shadow-3xl transform hover:scale-105 transition-all duration-300 relative overflow-hidden"
            >
              <span className="relative z-10">Explore All Services</span>
              <ArrowRight className="ml-3 h-6 w-6 relative z-10 transition-transform group-hover:translate-x-1" />
              <div className="absolute inset-0 bg-gradient-to-r from-cyan-600 via-blue-600 to-purple-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-32 bg-white dark:bg-gray-900 relative overflow-hidden">
        <div className="container-custom relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            viewport={{ once: true }}
            className="text-center mb-20"
          >
            <motion.span
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="inline-flex items-center px-6 py-3 rounded-full bg-gradient-to-r from-green-500/10 to-blue-500/10 border border-green-500/20 text-green-600 dark:text-green-400 text-sm font-semibold mb-6"
            >
              <Shield className="w-4 h-4 mr-2" />
              Why Choose Formonex
            </motion.span>
            <h2 className="text-5xl lg:text-7xl font-bold text-gray-900 dark:text-white mb-8">
              Excellence in
              <span className="block bg-gradient-to-r from-green-600 via-blue-600 to-purple-600 bg-clip-text text-transparent">
                Every Detail
              </span>
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-4xl mx-auto leading-relaxed">
              We combine cutting-edge technology with deep industry expertise to deliver solutions that not only meet your current needs but anticipate future challenges and opportunities.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {whyChooseUs.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: item.delay }}
                viewport={{ once: true }}
                whileHover={{ y: -10, scale: 1.02 }}
                className="text-center group relative"
              >
                <motion.div
                  whileHover={{ 
                    scale: 1.15, 
                    rotate: 10,
                    transition: { duration: 0.3 }
                  }}
                  className={`inline-flex items-center justify-center w-24 h-24 rounded-3xl bg-gradient-to-r ${item.gradient} text-white mb-8 shadow-2xl group-hover:shadow-3xl transition-all duration-300`}
                >
                  {item.icon}
                </motion.div>
                
                <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                  {item.title}
                </h3>
                
                <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                  {item.description}
                </p>
                
                {/* Decorative line */}
                <motion.div 
                  initial={{ width: 0 }}
                  whileInView={{ width: "60%" }}
                  transition={{ duration: 0.8, delay: 0.5 + index * 0.1 }}
                  className={`h-1 bg-gradient-to-r ${item.gradient} mx-auto mt-6 rounded-full opacity-60`}
                ></motion.div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-32 bg-gradient-to-br from-blue-50 to-purple-50 dark:from-gray-800 dark:to-gray-900 relative">
        <div className="container-custom relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            viewport={{ once: true }}
            className="text-center mb-20"
          >
            <motion.span
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="inline-flex items-center px-6 py-3 rounded-full bg-gradient-to-r from-purple-500/10 to-pink-500/10 border border-purple-500/20 text-purple-600 dark:text-purple-400 text-sm font-semibold mb-6"
            >
              <Settings className="w-4 h-4 mr-2" />
              Our Process
            </motion.span>
            <h2 className="text-5xl lg:text-7xl font-bold text-gray-900 dark:text-white mb-8">
              Proven
              <span className="block bg-gradient-to-r from-purple-600 via-pink-600 to-blue-600 bg-clip-text text-transparent">
                Methodology
              </span>
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-4xl mx-auto leading-relaxed">
              Our structured approach ensures project success from concept to deployment, with continuous collaboration and iterative improvements.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {processSteps.map((step, index) => {
              const colors: { [key: string]: string } = {
                blue: 'from-blue-500 to-cyan-500',
                green: 'from-green-500 to-emerald-500',
                purple: 'from-purple-500 to-pink-500',
                orange: 'from-orange-500 to-red-500'
              };
              
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 50, scale: 0.9 }}
                  whileInView={{ opacity: 1, y: 0, scale: 1 }}
                  transition={{ duration: 0.8, delay: index * 0.2 }}
                  viewport={{ once: true }}
                  whileHover={{ y: -10 }}
                  className="relative group"
                >
                  <div className="relative bg-white dark:bg-gray-800 rounded-3xl p-8 shadow-xl hover:shadow-2xl transition-all duration-300 border border-gray-200 dark:border-gray-700">
                    {/* Step Number */}
                    <div className={`absolute -top-4 -left-4 w-12 h-12 rounded-2xl bg-gradient-to-r ${colors[step.color]} text-white font-bold text-xl flex items-center justify-center shadow-lg`}>
                      {index + 1}
                    </div>
                    
                    {/* Icon */}
                    <div className={`inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-gradient-to-r ${colors[step.color]}/10 mb-6 group-hover:scale-110 transition-transform duration-300`}>
                      <div className={`bg-gradient-to-r ${colors[step.color]} bg-clip-text text-transparent`}>
                        {step.icon}
                      </div>
                    </div>
                    
                    <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                      {step.title}
                    </h3>
                    
                    <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                      {step.description}
                    </p>
                  </div>
                  
                  {/* Connection Line */}
                  {index < processSteps.length - 1 && (
                    <div className="hidden lg:block absolute top-1/2 -right-4 w-8 h-0.5 bg-gradient-to-r from-gray-300 to-gray-400 dark:from-gray-600 dark:to-gray-500"></div>
                  )}
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Featured Testimonial */}
      <section className="py-32 bg-white dark:bg-gray-900 relative">
        <div className="container-custom relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            viewport={{ once: true }}
            className="text-center mb-20"
          >
            <motion.span
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="inline-flex items-center px-6 py-3 rounded-full bg-gradient-to-r from-yellow-500/10 to-orange-500/10 border border-yellow-500/20 text-yellow-600 dark:text-yellow-400 text-sm font-sans font-semibold mb-6"
            >
              <Star className="w-4 h-4 mr-2" />
              Client Success Stories
            </motion.span>
            <h2 className="text-5xl lg:text-7xl font-heading font-bold text-gray-900 dark:text-white mb-8">
              Trusted by
              <span className="block bg-gradient-to-r from-yellow-600 via-orange-600 to-red-600 bg-clip-text text-transparent">
                Industry Leaders
              </span>
            </h2>
          </motion.div>

          <AnimatePresence mode="wait">
            <motion.div
              key={currentTestimonial}
              initial={{ opacity: 0, x: 100 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -100 }}
              transition={{ duration: 0.5 }}
              className="max-w-6xl mx-auto"
            >
              <div className="bg-gradient-to-br from-blue-50 to-purple-50 dark:from-gray-800 dark:to-gray-900 rounded-3xl p-12 shadow-2xl relative overflow-hidden">
                {/* Quote Icon */}
                <div className="absolute top-8 left-8 w-16 h-16 bg-gradient-to-r from-blue-500/20 to-purple-500/20 rounded-full flex items-center justify-center">
                  <Quote className="w-8 h-8 text-blue-600 dark:text-blue-400" />
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                  <div>
                    {/* Stars */}
                    <div className="flex items-center mb-6">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} className="w-6 h-6 text-yellow-400 fill-current" />
                      ))}
                    </div>
                    
                    {/* Testimonial Text */}
                    <blockquote className="text-2xl md:text-3xl text-gray-800 dark:text-gray-200 leading-relaxed mb-8 font-sans font-medium italic">
                      "{featuredTestimonials[currentTestimonial]?.text || 'Excellent service and professional team.'}"
                    </blockquote>
                    
                    {/* Author */}
                    <div className="flex items-center">
                      <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full flex items-center justify-center text-white font-bold text-lg mr-4">
                        {(featuredTestimonials[currentTestimonial]?.name || 'Client').split(' ').map(n => n[0]).join('')}
                      </div>
                      <div>
                        <h4 className="text-xl font-heading font-bold text-gray-900 dark:text-white">
                          {featuredTestimonials[currentTestimonial]?.name || 'Valued Client'}
                        </h4>
                        <p className="text-gray-600 dark:text-gray-300 font-sans">
                          {featuredTestimonials[currentTestimonial]?.position || 'Business Leader'}
                        </p>
                        <p className="text-sm text-blue-600 dark:text-blue-400 font-sans font-medium">
                          {featuredTestimonials[currentTestimonial]?.company || 'Technology Company'}
                        </p>
                      </div>
                    </div>
                  </div>

                  {/* Success Visual */}
                  <div className="relative">
                    <div className="w-full h-80 bg-gradient-to-br from-blue-500 via-purple-600 to-indigo-600 rounded-2xl flex items-center justify-center relative overflow-hidden">
                      <div className="absolute inset-0 bg-black/20"></div>
                      <motion.div 
                        animate={{ scale: [1, 1.1, 1] }}
                        transition={{ duration: 3, repeat: Infinity }}
                        className="relative z-10 text-center"
                      >
                        <div className="w-24 h-24 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4">
                          <Award className="w-12 h-12 text-white" />
                        </div>
                        <h3 className="text-2xl font-bold text-white mb-2">Success Story</h3>
                        <p className="text-white/80">Project Excellence Delivered</p>
                      </motion.div>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            viewport={{ once: true }}
            className="text-center mt-16"
          >
            <Link 
              to="/testimonials" 
              className="group inline-flex items-center px-10 py-5 bg-gradient-to-r from-yellow-500 via-orange-500 to-red-500 text-white font-bold text-lg rounded-2xl shadow-2xl hover:shadow-3xl transform hover:scale-105 transition-all duration-300 relative overflow-hidden"
            >
              <span className="relative z-10">View All Success Stories</span>
              <ArrowRight className="ml-3 h-6 w-6 relative z-10 transition-transform group-hover:translate-x-1" />
              <div className="absolute inset-0 bg-gradient-to-r from-red-500 via-orange-500 to-yellow-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </Link>
          </motion.div>

          {/* Partner Logos Section */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.7 }}
            viewport={{ once: true }}
            className="mt-24"
          >
            <div className="text-center mb-12">
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
                className="text-gray-500 dark:text-gray-400 text-lg font-medium"
              >
                Trusted Partner Ecosystem
              </motion.p>
            </div>
            
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8 items-center justify-items-center">
              {[1, 2, 3, 4, 5].map((logo, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="group relative"
                >
                  <div className="bg-white dark:bg-gray-800 rounded-2xl p-6 shadow-lg hover:shadow-2xl transition-all duration-500 border border-gray-200 dark:border-gray-700 group-hover:border-transparent group-hover:-translate-y-2">
                    <div className="absolute inset-0 bg-gradient-to-r from-blue-500/10 to-purple-500/10 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                    <img
                      src={`/images/partners/${logo}.jpeg`}
                      alt={`Partner ${logo}`}
                      className="w-full h-16 object-contain filter grayscale group-hover:grayscale-0 transition-all duration-500 group-hover:scale-110"
                      onError={(e) => {
                        const target = e.target as HTMLImageElement;
                        target.style.display = 'none';
                        target.parentElement!.innerHTML = `
                          <div class="w-full h-16 bg-gradient-to-r from-gray-200 to-gray-300 dark:from-gray-600 dark:to-gray-700 rounded-lg flex items-center justify-center">
                            <span class="text-gray-500 dark:text-gray-400 font-medium">Partner ${logo}</span>
                          </div>
                        `;
                      }}
                    />
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-32 bg-gradient-to-br from-blue-600 via-purple-600 to-cyan-600 relative overflow-hidden">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="container-custom relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            viewport={{ once: true }}
            className="text-center"
          >
            <motion.span
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="inline-flex items-center px-6 py-3 rounded-full bg-white/10 border border-white/20 backdrop-blur-xl text-white text-sm font-semibold mb-8"
            >
              <Rocket className="w-4 h-4 mr-2" />
              Ready to Get Started?
            </motion.span>
            
            <motion.h2
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
              className="text-5xl lg:text-7xl font-bold text-white mb-8"
            >
              Let's Build Your
              <span className="block bg-gradient-to-r from-yellow-400 via-orange-400 to-red-400 bg-clip-text text-transparent">
                Digital Future
              </span>
            </motion.h2>
            
            <motion.p
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              viewport={{ once: true }}
              className="text-xl text-white/90 mb-12 max-w-4xl mx-auto leading-relaxed"
            >
              Partner with us to transform your business with innovative technology solutions. From concept to deployment, we're with you every step of the way.
            </motion.p>
            
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              viewport={{ once: true }}
              className="flex flex-col sm:flex-row gap-6 justify-center"
            >
              <Link 
                to="/contact" 
                className="group inline-flex items-center px-10 py-5 bg-white text-blue-600 font-bold text-lg rounded-2xl shadow-2xl hover:shadow-3xl transform hover:scale-105 transition-all duration-300"
              >
                <span>Start Your Project Today</span>
                <Rocket className="ml-3 h-6 w-6 transition-transform group-hover:translate-x-1" />
              </Link>
              
              <div className="flex items-center space-x-4">
                <a href={`tel:${companyInfo.phone}`} className="inline-flex items-center px-8 py-5 border-2 border-white text-white font-bold rounded-2xl hover:bg-white hover:text-blue-600 transition-all duration-300">
                  <Phone className="mr-3 h-5 w-5" />
                  Call Now
                </a>
                <a href={`mailto:${companyInfo.email}`} className="inline-flex items-center px-8 py-5 border-2 border-white text-white font-bold rounded-2xl hover:bg-white hover:text-blue-600 transition-all duration-300">
                  <Mail className="mr-3 h-5 w-5" />
                  Email Us
                </a>
              </div>
            </motion.div>
          </motion.div>
        </div>
        
        {/* Floating Elements */}
        <motion.div
          animate={{ y: [0, -20, 0], rotate: [0, 5, 0] }}
          transition={{ duration: 6, repeat: Infinity }}
          className="absolute top-20 left-20 w-20 h-20 bg-white/10 rounded-full backdrop-blur-xl"
        />
        <motion.div
          animate={{ y: [0, 20, 0], rotate: [0, -5, 0] }}
          transition={{ duration: 8, repeat: Infinity }}
          className="absolute bottom-20 right-20 w-32 h-32 bg-white/10 rounded-full backdrop-blur-xl"
        />
      </section>
    </div>
  );
};

export default Home;
