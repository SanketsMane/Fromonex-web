import React, { useRef, useState } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { Link } from 'react-router-dom';
import { 
  ArrowRightIcon, 
  CodeBracketIcon,
  DevicePhoneMobileIcon,
  ChartBarIcon,
  MagnifyingGlassIcon,
  CubeIcon,
  BoltIcon
} from '@heroicons/react/24/outline';

const AdvancedServicesSection: React.FC = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"]
  });

  const y = useTransform(scrollYProgress, [0, 1], [100, -100]);
  const [hoveredCard, setHoveredCard] = useState<number | null>(null);

  const services = [
    {
      icon: CodeBracketIcon,
      title: 'Web Development',
      description: 'Modern, responsive websites with cutting-edge technologies',
      features: ['React/Next.js', 'TypeScript', '3D Elements', 'Performance Optimized'],
      gradient: 'from-blue-500 via-purple-500 to-pink-500',
      bgGradient: 'from-blue-400/20 to-purple-400/20'
    },
    {
      icon: DevicePhoneMobileIcon,
      title: 'Mobile Apps',
      description: 'Native and cross-platform mobile applications',
      features: ['React Native', 'Flutter', 'iOS/Android', 'Progressive Web Apps'],
      gradient: 'from-green-500 via-teal-500 to-cyan-500',
      bgGradient: 'from-green-400/20 to-teal-400/20'
    },
    {
      icon: ChartBarIcon,
      title: 'Data Analytics',
      description: 'Business intelligence and data-driven insights',
      features: ['Data Visualization', 'Predictive Analytics', 'Real-time Dashboards', 'AI/ML Integration'],
      gradient: 'from-orange-500 via-red-500 to-pink-500',
      bgGradient: 'from-orange-400/20 to-red-400/20'
    },
    {
      icon: MagnifyingGlassIcon,
      title: 'SEO Optimization',
      description: 'Search engine optimization for maximum visibility',
      features: ['Technical SEO', 'Content Strategy', 'Performance Optimization', 'Analytics Setup'],
      gradient: 'from-purple-500 via-indigo-500 to-blue-500',
      bgGradient: 'from-purple-400/20 to-indigo-400/20'
    }
  ];

  return (
    <section ref={sectionRef} className="relative py-32 overflow-hidden bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900">
      {/* Animated Background */}
      <div className="absolute inset-0">
        <motion.div
          style={{ y }}
          className="absolute top-10 right-10 w-96 h-96 bg-gradient-to-r from-blue-400/10 to-purple-400/10 rounded-full blur-3xl"
        />
        <motion.div
          style={{ y: useTransform(scrollYProgress, [0, 1], [-100, 200]) }}
          className="absolute bottom-10 left-10 w-80 h-80 bg-gradient-to-r from-pink-400/10 to-orange-400/10 rounded-full blur-3xl"
        />
      </div>

      {/* Floating Elements */}
      <motion.div
        animate={{ 
          rotate: 360,
          scale: [1, 1.2, 1]
        }}
        transition={{ 
          rotate: { duration: 25, repeat: Infinity, ease: "linear" },
          scale: { duration: 6, repeat: Infinity, ease: "easeInOut" }
        }}
        className="absolute top-1/3 left-1/4 w-20 h-20 border-2 border-blue-400/20 rounded-full"
      />
      <motion.div
        animate={{ 
          y: [0, -30, 0],
          rotate: [0, 180, 360]
        }}
        transition={{ 
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut"
        }}
        className="absolute bottom-1/3 right-1/4 w-16 h-16 bg-gradient-to-r from-purple-400/20 to-pink-400/20 rounded-lg"
      />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center px-6 py-3 rounded-full bg-white/10 backdrop-blur-lg border border-white/20 text-white mb-8"
          >
            <CubeIcon className="w-5 h-5 mr-2 text-blue-400" />
            Our Services
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-5xl md:text-7xl font-bold mb-8"
          >
            <span className="bg-gradient-to-r from-white via-blue-100 to-purple-100 bg-clip-text text-transparent">
              Digital Solutions
            </span>
            <br />
            <span className="bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
              That Transform
            </span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed"
          >
            We specialize in creating innovative digital experiences that drive business growth 
            and deliver exceptional results through cutting-edge technology.
          </motion.p>
        </motion.div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 gap-8 mb-16">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 100 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 * index }}
              onHoverStart={() => setHoveredCard(index)}
              onHoverEnd={() => setHoveredCard(null)}
              className="relative group cursor-pointer"
            >
              {/* Background Glow */}
              <motion.div
                animate={{
                  scale: hoveredCard === index ? 1.05 : 1,
                  opacity: hoveredCard === index ? 0.3 : 0.1
                }}
                transition={{ duration: 0.3 }}
                className={`absolute inset-0 bg-gradient-to-r ${service.bgGradient} rounded-3xl blur-xl`}
              />

              {/* Card Content */}
              <motion.div
                whileHover={{ y: -10 }}
                transition={{ duration: 0.3 }}
                className="relative p-8 rounded-3xl bg-white/10 backdrop-blur-lg border border-white/20 group-hover:border-white/40 transition-all duration-300"
              >
                <div className="flex items-start justify-between mb-6">
                  <div className={`inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-gradient-to-r ${service.gradient}`}>
                    <service.icon className="w-8 h-8 text-white" />
                  </div>
                  <motion.div
                    animate={{ rotate: hoveredCard === index ? 45 : 0 }}
                    transition={{ duration: 0.3 }}
                    className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center group-hover:bg-white/20 transition-all duration-300"
                  >
                    <ArrowRightIcon className="w-4 h-4 text-white" />
                  </motion.div>
                </div>

                <h3 className="text-2xl font-bold text-white mb-4">{service.title}</h3>
                <p className="text-gray-300 mb-6 leading-relaxed">{service.description}</p>

                <div className="space-y-2">
                  {service.features.map((feature, featureIndex) => (
                    <motion.div
                      key={featureIndex}
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.5, delay: 0.1 * featureIndex }}
                      className="flex items-center text-sm text-gray-400"
                    >
                      <div className="w-1.5 h-1.5 bg-gradient-to-r from-blue-400 to-purple-400 rounded-full mr-3" />
                      {feature}
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            </motion.div>
          ))}
        </div>

        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
          className="text-center"
        >
          <div className="relative inline-block">
            <div className="absolute inset-0 bg-gradient-to-r from-blue-500/20 via-purple-500/20 to-pink-500/20 rounded-2xl blur-xl" />
            <Link
              to="/services"
              className="relative inline-flex items-center px-8 py-4 rounded-2xl bg-gradient-to-r from-blue-500 to-purple-500 text-white font-semibold group overflow-hidden"
            >
              <span className="relative z-10 flex items-center">
                <BoltIcon className="w-5 h-5 mr-2" />
                Explore All Services
                <motion.div
                  whileHover={{ x: 5 }}
                  transition={{ duration: 0.2 }}
                >
                  <ArrowRightIcon className="w-5 h-5 ml-2" />
                </motion.div>
              </span>
              <motion.div
                whileHover={{ scale: 1.5 }}
                transition={{ duration: 0.3 }}
                className="absolute inset-0 bg-gradient-to-r from-purple-500 to-pink-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
              />
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default AdvancedServicesSection;
