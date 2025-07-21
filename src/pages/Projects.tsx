import { motion } from 'framer-motion';
import { ArrowRightIcon, EyeIcon, CodeBracketIcon } from '@heroicons/react/24/outline';
import { useState } from 'react';
import { Link } from 'react-router-dom';

const Projects = () => {
  const [activeFilter, setActiveFilter] = useState('all');

  const categories = [
    { id: 'all', name: 'All Projects' },
    { id: 'web-development', name: 'Web Development' },
    { id: 'mobile-apps', name: 'Mobile Apps' },
    { id: 'data-science', name: 'Data Science' },
    { id: 'ai-ml', name: 'AI/ML' },
    { id: 'erp-crm', name: 'ERP/CRM' },
    { id: 'digital-marketing', name: 'Digital Marketing' }
  ];

  const projects = [
    {
      id: 1,
      title: "E-Commerce Platform",
      category: "web-development",
      description: "Modern e-commerce solution with advanced features and seamless user experience",
      image: "/images/projects/ecommerce-platform.jpg",
      technologies: ["React", "Node.js", "MongoDB", "Stripe"],
      features: ["Payment Integration", "Inventory Management", "Analytics Dashboard"],
      status: "Completed",
      client: "RetailTech Solutions"
    },
    {
      id: 2,
      title: "Healthcare Management System",
      category: "erp-crm",
      description: "Comprehensive healthcare management solution for hospitals and clinics",
      image: "/images/projects/healthcare-system.jpg",
      technologies: ["Angular", "Java", "PostgreSQL", "Docker"],
      features: ["Patient Management", "Appointment Scheduling", "Medical Records"],
      status: "Completed",
      client: "MediCare Group"
    },
    {
      id: 3,
      title: "Predictive Analytics Dashboard",
      category: "data-science",
      description: "AI-powered analytics platform for business intelligence and forecasting",
      image: "/images/projects/analytics-dashboard.jpg",
      technologies: ["Python", "TensorFlow", "D3.js", "PostgreSQL"],
      features: ["Real-time Analytics", "Predictive Modeling", "Interactive Visualizations"],
      status: "Completed",
      client: "DataDriven Inc."
    },
    {
      id: 4,
      title: "Mobile Banking App",
      category: "mobile-apps",
      description: "Secure and user-friendly mobile banking application",
      image: "/images/projects/mobile-banking.jpg",
      technologies: ["React Native", "Node.js", "MongoDB", "Biometric Auth"],
      features: ["Secure Transactions", "Biometric Login", "Real-time Notifications"],
      status: "Completed",
      client: "SecureBank Ltd."
    },
    {
      id: 5,
      title: "AI Chatbot Solution",
      category: "ai-ml",
      description: "Intelligent chatbot with natural language processing capabilities",
      image: "/images/projects/ai-chatbot.jpg",
      technologies: ["Python", "NLP", "Machine Learning", "Flask"],
      features: ["Natural Language Processing", "Multi-language Support", "Learning Capabilities"],
      status: "In Progress",
      client: "CustomerFirst Corp"
    },
    {
      id: 6,
      title: "Digital Marketing Campaign",
      category: "digital-marketing",
      description: "Comprehensive digital marketing strategy and execution",
      image: "/images/projects/digital-marketing.jpg",
      technologies: ["Google Ads", "Facebook Ads", "Analytics", "SEO"],
      features: ["Multi-channel Campaign", "ROI Tracking", "A/B Testing"],
      status: "Completed",
      client: "GrowthMax Agency"
    },
    {
      id: 7,
      title: "Supply Chain Management",
      category: "erp-crm",
      description: "End-to-end supply chain management system with real-time tracking",
      image: "/images/projects/supply-chain.jpg",
      technologies: ["Vue.js", "Laravel", "MySQL", "API Integration"],
      features: ["Inventory Tracking", "Supplier Management", "Order Processing"],
      status: "Completed",
      client: "LogisticsPro Solutions"
    },
    {
      id: 8,
      title: "Computer Vision System",
      category: "ai-ml",
      description: "Advanced computer vision system for quality control and automation",
      image: "/images/projects/computer-vision.jpg",
      technologies: ["Python", "OpenCV", "Deep Learning", "TensorFlow"],
      features: ["Object Detection", "Quality Analysis", "Automated Reporting"],
      status: "In Progress",
      client: "ManufactureTech Industries"
    }
  ];

  const filteredProjects = activeFilter === 'all' 
    ? projects 
    : projects.filter(project => project.category === activeFilter);

  return (
    <div className="pt-16">
      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-br from-primary-900 via-blue-900 to-purple-900 text-white overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-gradient-to-r from-primary-600/20 to-blue-600/20"></div>
          <div className="absolute top-10 left-10 w-32 h-32 bg-white/5 rounded-full blur-xl"></div>
          <div className="absolute bottom-10 right-10 w-40 h-40 bg-purple-500/10 rounded-full blur-2xl"></div>
        </div>
        
        <div className="container-custom relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-4xl mx-auto text-center"
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="inline-flex items-center px-6 py-3 rounded-full bg-white/10 border border-white/20 backdrop-blur-sm mb-8"
            >
              <span className="text-white text-sm font-medium">Our Portfolio</span>
            </motion.div>
            
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="text-4xl md:text-5xl lg:text-6xl font-heading font-bold mb-8"
            >
              <span className="bg-gradient-to-r from-blue-400 via-purple-400 to-cyan-400 bg-clip-text text-transparent">
                Our Work &
              </span>
              <br />
              Success Stories
            </motion.h1>
            
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="text-xl md:text-2xl text-gray-300 mb-12 max-w-3xl mx-auto leading-relaxed"
            >
              Explore our portfolio of successful projects across various industries and technologies. Each project represents our commitment to excellence and innovation.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.5 }}
              className="flex flex-col sm:flex-row gap-4 justify-center"
            >
              <Link to="/contact" className="btn-primary inline-flex items-center">
                Start Your Project
                <ArrowRightIcon className="ml-2 h-5 w-5" />
              </Link>
              <Link to="/services" className="btn-secondary">
                View Our Services
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Filter Section */}
      <section className="py-12 bg-white dark:bg-gray-900 border-b border-gray-200 dark:border-gray-700">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="flex flex-wrap justify-center gap-4"
          >
            {categories.map((category) => (
              <button
                key={category.id}
                onClick={() => setActiveFilter(category.id)}
                className={`px-6 py-3 rounded-full text-sm font-medium transition-all duration-300 ${
                  activeFilter === category.id
                    ? 'bg-primary-600 text-white shadow-lg'
                    : 'bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-300 hover:bg-primary-100 dark:hover:bg-primary-900 hover:text-primary-600'
                }`}
              >
                {category.name}
              </button>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Projects Grid */}
      <section className="py-20 bg-gray-50 dark:bg-gray-800">
        <div className="container-custom">
          <motion.div
            layout
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {filteredProjects.map((project, index) => (
              <motion.div
                key={project.id}
                layout
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 30 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="group bg-white dark:bg-gray-900 rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300"
              >
                <div className="relative overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-300"
                    onError={(e) => {
                      (e.target as HTMLImageElement).src = "/images/projects/default.jpg";
                    }}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <div className="absolute bottom-4 left-4 right-4 flex space-x-2">
                      <button className="flex-1 bg-white/20 backdrop-blur-sm text-white px-4 py-2 rounded-lg text-sm font-medium hover:bg-white/30 transition-colors duration-300 flex items-center justify-center">
                        <EyeIcon className="h-4 w-4 mr-2" />
                        View
                      </button>
                      <button className="flex-1 bg-white/20 backdrop-blur-sm text-white px-4 py-2 rounded-lg text-sm font-medium hover:bg-white/30 transition-colors duration-300 flex items-center justify-center">
                        <CodeBracketIcon className="h-4 w-4 mr-2" />
                        Code
                      </button>
                    </div>
                  </div>
                  <div className="absolute top-4 right-4">
                    <span className={`px-3 py-1 rounded-full text-xs font-medium ${
                      project.status === 'Completed' 
                        ? 'bg-green-100 text-green-800' 
                        : 'bg-yellow-100 text-yellow-800'
                    }`}>
                      {project.status}
                    </span>
                  </div>
                </div>
                
                <div className="p-6">
                  <h3 className="text-xl font-heading font-bold text-gray-900 dark:text-white mb-2 group-hover:text-primary-600 dark:group-hover:text-primary-400 transition-colors">
                    {project.title}
                  </h3>
                  
                  <p className="text-gray-600 dark:text-gray-300 text-sm mb-4 line-clamp-2">
                    {project.description}
                  </p>
                  
                  <div className="mb-4">
                    <p className="text-xs text-gray-500 dark:text-gray-400 mb-2">Client:</p>
                    <p className="text-sm font-medium text-gray-900 dark:text-white">{project.client}</p>
                  </div>
                  
                  <div className="mb-4">
                    <p className="text-xs text-gray-500 dark:text-gray-400 mb-2">Technologies:</p>
                    <div className="flex flex-wrap gap-1">
                      {project.technologies.slice(0, 3).map((tech, techIndex) => (
                        <span
                          key={techIndex}
                          className="px-2 py-1 bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-300 text-xs rounded-md"
                        >
                          {tech}
                        </span>
                      ))}
                      {project.technologies.length > 3 && (
                        <span className="px-2 py-1 bg-primary-100 dark:bg-primary-900 text-primary-600 text-xs rounded-md">
                          +{project.technologies.length - 3} more
                        </span>
                      )}
                    </div>
                  </div>
                  
                  <div className="mb-6">
                    <p className="text-xs text-gray-500 dark:text-gray-400 mb-2">Key Features:</p>
                    <ul className="space-y-1">
                      {project.features.slice(0, 2).map((feature, featureIndex) => (
                        <li key={featureIndex} className="text-sm text-gray-600 dark:text-gray-300 flex items-center">
                          <div className="w-1.5 h-1.5 bg-primary-600 rounded-full mr-2"></div>
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>
                  
                  <button className="w-full bg-primary-600 hover:bg-primary-700 text-white py-2 px-4 rounded-lg text-sm font-medium transition-colors duration-300 flex items-center justify-center">
                    View Details
                    <ArrowRightIcon className="ml-2 h-4 w-4" />
                  </button>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-primary-600 to-blue-600">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center"
          >
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-white mb-6">
              Ready to Start Your Next Project?
            </h2>
            <p className="text-xl text-blue-100 mb-8 max-w-3xl mx-auto">
              Let's bring your ideas to life with our expertise and innovative solutions. Contact us today to discuss your project requirements.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/contact" className="bg-white text-primary-600 hover:bg-gray-50 px-8 py-4 rounded-lg font-semibold transition-colors duration-300 inline-flex items-center">
                Start a Project
                <ArrowRightIcon className="ml-2 h-5 w-5" />
              </Link>
              <Link to="/services" className="border-2 border-white text-white hover:bg-white hover:text-primary-600 px-8 py-4 rounded-lg font-semibold transition-colors duration-300">
                Learn About Our Services
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Projects;
