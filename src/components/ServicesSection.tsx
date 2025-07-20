import { motion } from 'framer-motion';
import { ArrowRightIcon } from '@heroicons/react/24/outline';
import { services } from '../data/services';
import { fadeInUp, staggerContainer, hoverGlow } from '../utils/animations';

const ServicesSection = () => {
  const serviceIcons = {
    "digital-marketing": (
      <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
      </svg>
    ),
    "data-analytics": (
      <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
      </svg>
    ),
    "web-development": (
      <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
      </svg>
    ),
    "app-development": (
      <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z" />
      </svg>
    ),
    "seo-optimization": (
      <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
      </svg>
    )
  };

  return (
    <section className="py-20 bg-gradient-to-b from-gray-50 to-white dark:from-gray-900 dark:to-gray-800">
      <div className="container mx-auto px-6">
        <motion.div
          variants={staggerContainer}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
          className="max-w-7xl mx-auto"
        >
          {/* Section Header */}
          <div className="text-center mb-16">
            <motion.div
              variants={fadeInUp}
              className="inline-flex items-center px-4 py-2 rounded-full bg-blue-500/10 border border-blue-500/20 backdrop-blur-sm mb-6"
            >
              <span className="text-blue-600 text-sm font-medium">Our Services</span>
            </motion.div>
            
            <motion.h2
              variants={fadeInUp}
              className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 dark:text-white mb-6"
            >
              <span className="bg-gradient-to-r from-blue-600 via-purple-600 to-cyan-600 bg-clip-text text-transparent">
                Complete Digital
              </span>
              <br />
              Solutions Suite
            </motion.h2>
            
            <motion.p
              variants={fadeInUp}
              className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto"
            >
              From cutting-edge web development to data-driven marketing strategies, 
              we provide comprehensive solutions that drive growth and innovation.
            </motion.p>
          </div>

          {/* Services Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <motion.div
                key={service.id}
                variants={fadeInUp}
                custom={index}
                whileHover="hover"
                initial="rest"
                className="group relative"
              >
                <motion.div
                  whileHover={{
                    scale: 1.02,
                    y: -5,
                    transition: { duration: 0.3 }
                  }}
                  className="relative p-8 h-full bg-white dark:bg-gray-800 rounded-2xl shadow-lg border border-gray-200 dark:border-gray-700 overflow-hidden"
                >
                  {/* Background Gradient */}
                  <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 via-purple-500/5 to-cyan-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  
                  {/* Animated Border */}
                  <motion.div
                    className="absolute inset-0 rounded-2xl"
                    variants={hoverGlow}
                  />

                  {/* Icon */}
                  <div className="relative mb-6">
                    <motion.div
                      whileHover={{ scale: 1.1, rotate: 5 }}
                      className="w-16 h-16 bg-gradient-to-br from-blue-500 to-purple-600 rounded-xl flex items-center justify-center text-white group-hover:shadow-lg transition-shadow duration-300"
                    >
                      {serviceIcons[service.id as keyof typeof serviceIcons]}
                    </motion.div>
                  </div>

                  {/* Content */}
                  <div className="relative">
                    <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4 group-hover:text-blue-600 transition-colors duration-300">
                      {service.title}
                    </h3>
                    
                    <p className="text-gray-600 dark:text-gray-300 mb-6 line-clamp-3">
                      {service.fullDescription}
                    </p>

                    {/* Features List */}
                    <ul className="space-y-2 mb-6">
                      {service.features.slice(0, 3).map((feature, featureIndex) => (
                        <li key={featureIndex} className="flex items-center text-sm text-gray-600 dark:text-gray-300">
                          <div className="w-1.5 h-1.5 bg-blue-500 rounded-full mr-3 flex-shrink-0" />
                          {feature}
                        </li>
                      ))}
                    </ul>

                    {/* CTA */}
                    <motion.button
                      whileHover={{ x: 5 }}
                      className="group/btn flex items-center text-blue-600 font-semibold hover:text-purple-600 transition-colors duration-300"
                    >
                      Learn More
                      <ArrowRightIcon className="w-5 h-5 ml-2 group-hover/btn:translate-x-1 transition-transform duration-300" />
                    </motion.button>
                  </div>

                  {/* Decorative Elements */}
                  <div className="absolute -top-4 -right-4 w-20 h-20 bg-gradient-to-br from-blue-500/10 to-purple-500/10 rounded-full blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  <div className="absolute -bottom-4 -left-4 w-16 h-16 bg-gradient-to-br from-cyan-500/10 to-blue-500/10 rounded-full blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                </motion.div>
              </motion.div>
            ))}
          </div>

          {/* Bottom CTA */}
          <motion.div
            variants={fadeInUp}
            className="text-center mt-16"
          >
            <motion.button
              whileHover={{ 
                scale: 1.05,
                boxShadow: "0 20px 40px rgba(59, 130, 246, 0.3)"
              }}
              whileTap={{ scale: 0.98 }}
              className="px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold rounded-full hover:from-purple-600 hover:to-blue-600 transition-all duration-300 shadow-lg"
            >
              View All Services
            </motion.button>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default ServicesSection;
