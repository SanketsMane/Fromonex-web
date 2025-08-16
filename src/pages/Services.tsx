import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  CheckCircle, 
  ArrowRight, 
  Code, 
  Smartphone, 
  BarChart3, 
  Brain, 
  Cloud, 
  TrendingUp, 
  Globe, 
  Shield,
  Zap,
  Star,
  Users,
  Award,
  Sparkles
} from 'lucide-react';
import { Link } from 'react-router-dom';
import { services } from '../data/company';
import SEO from '../components/SEO';
import { generateServiceSchema, generateBreadcrumbSchema } from '../utils/structuredData';

const Services = () => {
  const [selectedService, setSelectedService] = useState(services[0]);

  // Enhanced service icons with Lucide React
  const serviceIcons: { [key: string]: React.ReactElement } = {
    'web-development': <Code className="w-8 h-8" />,
    'mobile-development': <Smartphone className="w-8 h-8" />,
    'data-analytics': <BarChart3 className="w-8 h-8" />,
    'ai-ml': <Brain className="w-8 h-8" />,
    'cloud-services': <Cloud className="w-8 h-8" />,
    'digital-marketing': <TrendingUp className="w-8 h-8" />,
    'custom-software': <Code className="w-8 h-8" />,
    'erp-crm': <Globe className="w-8 h-8" />
  };

  const processSteps = [
    {
      step: "01",
      title: "Discovery & Planning",
      description: "We analyze your business needs and create a comprehensive strategy",
      icon: Users,
      gradient: "from-blue-500 to-cyan-500"
    },
    {
      step: "02",
      title: "Design & Development",
      description: "Our experts build scalable solutions using cutting-edge technologies",
      icon: Code,
      gradient: "from-purple-500 to-pink-500"
    },
    {
      step: "03",
      title: "Testing & Quality Assurance",
      description: "Rigorous testing ensures reliability and optimal performance",
      icon: Shield,
      gradient: "from-green-500 to-emerald-500"
    },
    {
      step: "04",
      title: "Deployment & Support",
      description: "Seamless launch with ongoing maintenance and 24/7 support",
      icon: Zap,
      gradient: "from-orange-500 to-red-500"
    }
  ];

  const achievements = [
    { number: "500+", label: "Projects Delivered", icon: Award },
    { number: "98%", label: "Client Satisfaction", icon: Star },
    { number: "24/7", label: "Support Available", icon: Shield },
    { number: "50+", label: "Expert Team", icon: Users }
  ];

  const breadcrumbSchema = generateBreadcrumbSchema([
    { name: 'Home', url: 'https://www.formonex.com' },
    { name: 'Services', url: 'https://www.formonex.com/services' }
  ]);

  const servicesSchema = services.map(service => generateServiceSchema(service));
  const combinedSchema = [breadcrumbSchema, ...servicesSchema];

  return (
    <div className="pt-16 overflow-hidden">
      <SEO 
        title="IT Services & Solutions | Software Development, AI/ML, Cloud Integration - Formonex"
        description="Comprehensive IT services including custom software development, AI/ML solutions, cloud integration, mobile app development, web development, and digital transformation. Expert team serving Pune and Bengaluru."
        keywords="IT Services, Software Development Services, AI ML Solutions, Cloud Integration, Mobile App Development, Web Development, Digital Transformation, Custom Software, Enterprise Solutions"
        canonical="https://www.formonex.com/services"
        structured={combinedSchema}
      />
      {/* Hero Section with Advanced Design */}
      <section className="relative min-h-screen flex items-center bg-gradient-to-br from-slate-900 via-blue-900 to-purple-900 text-white overflow-hidden">
        {/* Animated Background */}
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_30%,rgba(59,130,246,0.3),transparent_50%)]"></div>
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_20%,rgba(168,85,247,0.3),transparent_50%)]"></div>
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_40%_80%,rgba(6,182,212,0.2),transparent_50%)]"></div>
          
          {/* Floating Tech Icons */}
          <motion.div
            animate={{
              y: [0, -20, 0],
              rotate: [0, 10, 0],
            }}
            transition={{
              duration: 6,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            className="absolute top-20 left-20 text-blue-400/30"
          >
            <Code className="w-16 h-16" />
          </motion.div>
          <motion.div
            animate={{
              y: [0, 15, 0],
              rotate: [0, -8, 0],
            }}
            transition={{
              duration: 5,
              repeat: Infinity,
              ease: "easeInOut",
              delay: 1,
            }}
            className="absolute top-40 right-32 text-purple-400/30"
          >
            <Brain className="w-12 h-12" />
          </motion.div>
          <motion.div
            animate={{
              y: [0, -25, 0],
              rotate: [0, 12, 0],
            }}
            transition={{
              duration: 7,
              repeat: Infinity,
              ease: "easeInOut",
              delay: 2,
            }}
            className="absolute bottom-32 left-32 text-cyan-400/30"
          >
            <Cloud className="w-14 h-14" />
          </motion.div>
        </div>

        <div className="container-custom relative z-10">
          <div className="max-w-5xl mx-auto text-center">
            {/* Badge */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="inline-flex items-center px-6 py-3 rounded-full bg-white/10 border border-white/20 backdrop-blur-sm mb-8"
            >
              <Sparkles className="w-4 h-4 text-blue-400 mr-2" />
              <span className="text-white text-sm font-medium">Our Services</span>
            </motion.div>

            {/* Main Heading */}
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="text-5xl md:text-6xl lg:text-7xl font-heading font-bold mb-8 leading-tight"
            >
              <span className="bg-gradient-to-r from-blue-400 via-purple-400 to-cyan-400 bg-clip-text text-transparent">
                Comprehensive
              </span>
              <br />
              <span className="text-white">IT Solutions</span>
            </motion.h1>

            {/* Subtitle */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="text-xl md:text-2xl text-gray-300 mb-12 max-w-4xl mx-auto leading-relaxed"
            >
              From software development to AI solutions, we deliver cutting-edge technology services 
              that transform businesses and drive digital innovation.
            </motion.p>

            {/* Achievement Stats */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.5 }}
              className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-12"
            >
              {achievements.map((achievement, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.6, delay: 0.6 + index * 0.1, type: "spring" }}
                  className="text-center group"
                >
                  <div className="text-blue-400 mb-3 flex justify-center group-hover:scale-110 transition-transform duration-300">
                    <achievement.icon className="w-8 h-8" />
                  </div>
                  <div className="text-3xl md:text-4xl font-bold mb-2">{achievement.number}</div>
                  <div className="text-sm text-gray-300 font-medium">{achievement.label}</div>
                </motion.div>
              ))}
            </motion.div>

            {/* CTA Button */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.9 }}
            >
              <button className="btn-primary inline-flex items-center group text-lg px-8 py-4">
                Explore Our Services
                <ArrowRight className="ml-2 w-6 h-6 group-hover:translate-x-1 transition-transform" />
              </button>
            </motion.div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2 }}
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        >
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center"
          >
            <div className="w-1 h-3 bg-white/60 rounded-full mt-2"></div>
          </motion.div>
        </motion.div>
      </section>

      {/* Services Grid Section */}
      <section className="py-24 bg-gray-50 dark:bg-gray-900">
        <div className="container-custom">
          <div className="text-center mb-16">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="inline-flex items-center px-4 py-2 bg-blue-50 dark:bg-blue-900/20 rounded-full mb-6"
            >
              <Globe className="w-4 h-4 text-blue-600 mr-2" />
              <span className="text-blue-600 dark:text-blue-400 text-sm font-medium">Our Expertise</span>
            </motion.div>

            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              viewport={{ once: true }}
              className="text-4xl md:text-5xl font-heading font-bold text-gray-900 dark:text-white mb-6"
            >
              Choose Your <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">Perfect Service</span>
            </motion.h2>
            
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
              className="text-lg text-gray-600 dark:text-gray-300 max-w-3xl mx-auto"
            >
              Discover our comprehensive range of technology services designed to accelerate your business growth
            </motion.p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8 mb-16">
            {services.map((service, index) => (
              <motion.div
                key={service.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                onClick={() => setSelectedService(service)}
                className={`group cursor-pointer relative overflow-hidden rounded-2xl transition-all duration-500 ${
                  selectedService.id === service.id 
                    ? 'ring-4 ring-blue-500/50 shadow-2xl scale-105' 
                    : 'hover:shadow-xl hover:-translate-y-2'
                }`}
              >
                <div className={`p-8 h-full bg-white dark:bg-gray-800 ${
                  selectedService.id === service.id 
                    ? 'bg-gradient-to-br from-blue-50 to-purple-50 dark:from-blue-900/20 dark:to-purple-900/20' 
                    : ''
                }`}>
                  {/* Service Icon */}
                  <div className={`w-16 h-16 rounded-xl mb-6 flex items-center justify-center transition-all duration-300 ${
                    selectedService.id === service.id 
                      ? 'bg-gradient-to-r from-blue-500 to-purple-500 text-white scale-110' 
                      : 'bg-gray-100 dark:bg-gray-700 text-gray-600 dark:text-gray-300 group-hover:bg-gradient-to-r group-hover:from-blue-500 group-hover:to-purple-500 group-hover:text-white'
                  }`}>
                    {serviceIcons[service.id] || <Code className="w-8 h-8" />}
                  </div>
                  
                  <h3 className={`text-xl font-heading font-bold mb-3 transition-colors duration-300 ${
                    selectedService.id === service.id 
                      ? 'bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent' 
                      : 'text-gray-900 dark:text-white group-hover:text-blue-600'
                  }`}>
                    {service.title}
                  </h3>
                  
                  <p className="text-gray-600 dark:text-gray-300 text-sm leading-relaxed mb-6">
                    {service.description}
                  </p>
                  
                  <div className={`flex items-center font-medium text-sm transition-colors duration-300 ${
                    selectedService.id === service.id 
                      ? 'text-blue-600' 
                      : 'text-gray-500 group-hover:text-blue-600'
                  }`}>
                    Learn More
                    <ArrowRight className="ml-1 w-4 h-4 transition-transform group-hover:translate-x-1" />
                  </div>
                </div>

                {/* Selected Service Indicator */}
                <AnimatePresence>
                  {selectedService.id === service.id && (
                    <motion.div
                      initial={{ scale: 0 }}
                      animate={{ scale: 1 }}
                      exit={{ scale: 0 }}
                      className="absolute top-4 right-4 w-6 h-6 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full flex items-center justify-center"
                    >
                      <CheckCircle className="w-4 h-4 text-white" />
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Selected Service Details */}
      <section className="py-24 bg-white dark:bg-gray-900">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <motion.div
              key={selectedService.id}
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <div className="flex items-center mb-6">
                <div className="p-4 rounded-xl bg-gradient-to-r from-blue-500 to-purple-500 text-white mr-4">
                  {serviceIcons[selectedService.id] || <Code className="w-8 h-8" />}
                </div>
                <h2 className="text-4xl md:text-5xl font-heading font-bold text-gray-900 dark:text-white">
                  {selectedService.title}
                </h2>
              </div>
              
              <p className="text-lg text-gray-600 dark:text-gray-300 leading-relaxed mb-8">
                {selectedService.description}
              </p>

              <div className="space-y-4 mb-8">
                <h3 className="text-xl font-heading font-semibold text-gray-900 dark:text-white mb-4">
                  Key Features & Benefits:
                </h3>
                {selectedService.features.map((feature, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    className="flex items-center space-x-3"
                  >
                    <div className="w-6 h-6 bg-gradient-to-r from-green-500 to-emerald-500 rounded-full flex items-center justify-center flex-shrink-0">
                      <CheckCircle className="w-4 h-4 text-white" />
                    </div>
                    <span className="text-gray-700 dark:text-gray-300">{feature}</span>
                  </motion.div>
                ))}
              </div>

              <div className="flex flex-col sm:flex-row gap-4">
                <Link to="/contact" className="btn-primary inline-flex items-center group">
                  Get Started with {selectedService.title}
                  <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </Link>
                <button className="btn-secondary">
                  View Case Studies
                </button>
              </div>
            </motion.div>
            
            {/* Visual Element instead of problematic image */}
            <motion.div
              key={selectedService.id}
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="relative"
            >
              <div className="relative">
                {/* Main Visual Card */}
                <div className="bg-gradient-to-br from-gray-50 to-blue-50 dark:from-gray-800 dark:to-gray-700 rounded-3xl p-8 shadow-2xl">
                  {/* Tech Stack Visualization */}
                  <div className="grid grid-cols-3 gap-4 mb-8">
                    {[Code, Brain, Cloud, Shield, Zap, Globe].map((Icon, index) => (
                      <motion.div
                        key={index}
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.5, delay: index * 0.1 }}
                        className="bg-white dark:bg-gray-800 p-4 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300"
                      >
                        <Icon className="w-8 h-8 text-blue-600 mx-auto" />
                      </motion.div>
                    ))}
                  </div>
                  
                  {/* Central Achievement */}
                  <motion.div
                    initial={{ opacity: 0, scale: 0 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.6, delay: 0.5, type: "spring" }}
                    className="bg-white dark:bg-gray-800 p-6 rounded-2xl shadow-xl text-center"
                  >
                    <div className="bg-gradient-to-r from-blue-500 to-purple-500 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                      <CheckCircle className="w-8 h-8 text-white" />
                    </div>
                    <p className="text-3xl font-bold text-gray-900 dark:text-white">24/7</p>
                    <p className="text-gray-600 dark:text-gray-300 font-medium">Support Available</p>
                  </motion.div>
                </div>

                {/* Floating Elements */}
                <motion.div
                  animate={{
                    y: [0, -12, 0],
                    rotate: [0, 5, 0],
                  }}
                  transition={{
                    duration: 4,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                  className="absolute -top-4 -right-4 bg-gradient-to-r from-green-500 to-emerald-500 w-20 h-20 rounded-full flex items-center justify-center shadow-lg"
                >
                  <Star className="w-8 h-8 text-white" />
                </motion.div>

                <motion.div
                  animate={{
                    y: [0, 10, 0],
                    rotate: [0, -3, 0],
                  }}
                  transition={{
                    duration: 3,
                    repeat: Infinity,
                    ease: "easeInOut",
                    delay: 1,
                  }}
                  className="absolute -bottom-4 -left-4 bg-gradient-to-r from-purple-500 to-pink-500 w-16 h-16 rounded-full flex items-center justify-center shadow-lg"
                >
                  <Award className="w-6 h-6 text-white" />
                </motion.div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-24 bg-gradient-to-br from-slate-50 to-blue-50 dark:from-gray-800 dark:to-gray-900">
        <div className="container-custom">
          <div className="text-center mb-16">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="inline-flex items-center px-4 py-2 bg-purple-50 dark:bg-purple-900/20 rounded-full mb-6"
            >
              <Zap className="w-4 h-4 text-purple-600 mr-2" />
              <span className="text-purple-600 dark:text-purple-400 text-sm font-medium">Our Process</span>
            </motion.div>

            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              viewport={{ once: true }}
              className="text-4xl md:text-5xl font-heading font-bold text-gray-900 dark:text-white mb-6"
            >
              How We <span className="bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">Deliver Excellence</span>
            </motion.h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {processSteps.map((step, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="relative group"
              >
                <div className="bg-white dark:bg-gray-800 rounded-2xl p-6 shadow-lg hover:shadow-2xl transition-all duration-500 border border-gray-200 dark:border-gray-700 group-hover:-translate-y-2">
                  {/* Step Number */}
                  <div className={`text-6xl font-bold bg-gradient-to-r ${step.gradient} bg-clip-text text-transparent mb-4 opacity-20 group-hover:opacity-100 transition-opacity duration-300`}>
                    {step.step}
                  </div>
                  
                  <div className={`w-12 h-12 bg-gradient-to-r ${step.gradient} rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}>
                    <step.icon className="w-6 h-6 text-white" />
                  </div>
                  
                  <h3 className="text-lg font-heading font-bold text-gray-900 dark:text-white mb-3">
                    {step.title}
                  </h3>
                  
                  <p className="text-gray-600 dark:text-gray-300 text-sm leading-relaxed">
                    {step.description}
                  </p>
                </div>

                {/* Connection Line */}
                {index < processSteps.length - 1 && (
                  <div className="hidden lg:block absolute top-1/2 -right-4 w-8 h-0.5 bg-gradient-to-r from-gray-300 to-transparent dark:from-gray-600"></div>
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-blue-600 via-purple-600 to-blue-600">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center text-white"
          >
            <h2 className="text-4xl md:text-5xl font-heading font-bold mb-6">
              Ready to Transform Your Business?
            </h2>
            <p className="text-xl text-blue-100 mb-8 max-w-3xl mx-auto">
              Let's discuss how our services can help you achieve your business goals and drive digital innovation.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/contact" className="bg-white text-blue-600 hover:bg-gray-50 px-8 py-4 rounded-lg font-semibold transition-colors duration-300 inline-flex items-center group">
                Start Your Project
                <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link to="/testimonials" className="border-2 border-white text-white hover:bg-white hover:text-blue-600 px-8 py-4 rounded-lg font-semibold transition-colors duration-300">
                View Success Stories
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Services;
