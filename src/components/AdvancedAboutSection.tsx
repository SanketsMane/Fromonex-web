import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { 
  SparklesIcon, 
  BoltIcon, 
  CubeIcon,
  UserGroupIcon,
  TrophyIcon,
  RocketLaunchIcon,
  StarIcon
} from '@heroicons/react/24/outline';

const AdvancedAboutSection: React.FC = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"]
  });

  const y = useTransform(scrollYProgress, [0, 1], [100, -100]);
  const opacity = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0, 1, 1, 0]);

  const stats = [
    { icon: UserGroupIcon, value: '500+', label: 'Happy Clients', color: 'from-blue-400 to-purple-400' },
    { icon: TrophyIcon, value: '1000+', label: 'Projects Delivered', color: 'from-green-400 to-blue-400' },
    { icon: StarIcon, value: '99%', label: 'Client Satisfaction', color: 'from-yellow-400 to-orange-400' },
    { icon: RocketLaunchIcon, value: '5+', label: 'Years Experience', color: 'from-pink-400 to-red-400' }
  ];

  const features = [
    {
      icon: BoltIcon,
      title: 'Lightning Fast',
      description: 'Optimized performance with cutting-edge technologies',
      gradient: 'from-yellow-400 via-orange-400 to-red-400'
    },
    {
      icon: CubeIcon,
      title: '3D Innovation',
      description: 'Immersive 3D experiences that captivate users',
      gradient: 'from-purple-400 via-pink-400 to-blue-400'
    },
    {
      icon: SparklesIcon,
      title: 'Modern Design',
      description: 'Enterprise-grade UI with glassmorphism effects',
      gradient: 'from-green-400 via-teal-400 to-blue-400'
    }
  ];

  return (
    <section ref={sectionRef} className="relative py-32 overflow-hidden bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      {/* Animated Background Elements */}
      <div className="absolute inset-0">
        <motion.div
          style={{ y }}
          className="absolute top-20 left-10 w-72 h-72 bg-gradient-to-r from-blue-400/20 to-purple-400/20 rounded-full blur-3xl"
        />
        <motion.div
          style={{ y: useTransform(scrollYProgress, [0, 1], [-50, 150]) }}
          className="absolute bottom-20 right-10 w-96 h-96 bg-gradient-to-r from-pink-400/20 to-orange-400/20 rounded-full blur-3xl"
        />
        <motion.div
          style={{ y: useTransform(scrollYProgress, [0, 1], [50, -50]) }}
          className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-gradient-to-r from-green-400/20 to-teal-400/20 rounded-full blur-3xl"
        />
      </div>

      {/* Floating Geometric Shapes */}
      <motion.div
        animate={{ 
          rotate: 360,
          scale: [1, 1.1, 1]
        }}
        transition={{ 
          rotate: { duration: 20, repeat: Infinity, ease: "linear" },
          scale: { duration: 4, repeat: Infinity, ease: "easeInOut" }
        }}
        className="absolute top-1/4 right-1/4 w-16 h-16 border-2 border-blue-400/30 rounded-lg"
      />
      <motion.div
        animate={{ 
          rotate: -360,
          y: [0, -20, 0]
        }}
        transition={{ 
          rotate: { duration: 15, repeat: Infinity, ease: "linear" },
          y: { duration: 3, repeat: Infinity, ease: "easeInOut" }
        }}
        className="absolute bottom-1/4 left-1/4 w-12 h-12 bg-gradient-to-r from-purple-400/20 to-pink-400/20 rounded-full"
      />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          style={{ opacity }}
          className="text-center mb-20"
        >
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="inline-flex items-center px-6 py-3 rounded-full bg-white/10 backdrop-blur-lg border border-white/20 text-white mb-8"
          >
            <SparklesIcon className="w-5 h-5 mr-2 text-blue-400" />
            About Formonex
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-6xl md:text-8xl font-bold mb-8"
          >
            <span className="bg-gradient-to-r from-white via-blue-100 to-purple-100 bg-clip-text text-transparent">
              Crafting Digital
            </span>
            <br />
            <span className="bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
              Excellence
            </span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed"
          >
            We are a team of passionate developers and designers who create cutting-edge digital solutions 
            that transform businesses and deliver exceptional user experiences.
          </motion.p>
        </motion.div>

        {/* Stats Section */}
        <motion.div
          initial={{ opacity: 0, y: 100 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.6 }}
          className="grid grid-cols-2 lg:grid-cols-4 gap-8 mb-20"
        >
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              whileHover={{ scale: 1.05, y: -10 }}
              className="relative group"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-white/5 to-white/10 rounded-2xl blur-xl group-hover:blur-2xl transition-all duration-300" />
              <div className="relative p-8 rounded-2xl bg-white/10 backdrop-blur-lg border border-white/20 text-center group-hover:border-white/40 transition-all duration-300">
                <div className={`inline-flex items-center justify-center w-16 h-16 rounded-full bg-gradient-to-r ${stat.color} mb-4`}>
                  <stat.icon className="w-8 h-8 text-white" />
                </div>
                <div className="text-4xl font-bold text-white mb-2">{stat.value}</div>
                <div className="text-gray-300">{stat.label}</div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Features Grid */}
        <div className="grid md:grid-cols-3 gap-8 mb-20">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 100 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 * index }}
              whileHover={{ scale: 1.05, y: -10 }}
              className="relative group"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-white/5 to-white/10 rounded-3xl blur-xl group-hover:blur-2xl transition-all duration-500" />
              <div className="relative p-8 rounded-3xl bg-white/10 backdrop-blur-lg border border-white/20 group-hover:border-white/40 transition-all duration-300">
                <div className={`inline-flex items-center justify-center w-16 h-16 rounded-full bg-gradient-to-r ${feature.gradient} mb-6`}>
                  <feature.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-white mb-4">{feature.title}</h3>
                <p className="text-gray-300 leading-relaxed">{feature.description}</p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Mission Statement */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1 }}
          className="relative max-w-4xl mx-auto"
        >
          <div className="absolute inset-0 bg-gradient-to-r from-blue-500/20 via-purple-500/20 to-pink-500/20 rounded-3xl blur-2xl" />
          <div className="relative p-12 rounded-3xl bg-white/10 backdrop-blur-lg border border-white/20">
            <div className="text-center">
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-gradient-to-r from-blue-400 to-purple-400 mb-8"
              >
                <RocketLaunchIcon className="w-10 h-10 text-white" />
              </motion.div>
              <h3 className="text-3xl font-bold text-white mb-6">Our Mission</h3>
              <p className="text-xl text-gray-300 leading-relaxed">
                To empower businesses with innovative digital solutions that drive growth, 
                enhance user experiences, and create lasting impact in the digital landscape.
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default AdvancedAboutSection;
