import { motion } from 'framer-motion';
import { CheckCircleIcon, UsersIcon, TrophyIcon, RocketLaunchIcon } from '@heroicons/react/24/outline';
import { companyInfo } from '../data/company';
import { fadeInUp, fadeInLeft, fadeInRight, staggerContainer } from '../utils/animations';

const AboutSection = () => {
  const stats = [
    { 
      icon: <TrophyIcon className="w-8 h-8" />, 
      number: companyInfo.projects || "200+", 
      label: "Projects Completed",
      color: "from-yellow-400 to-orange-500"
    },
    { 
      icon: <UsersIcon className="w-8 h-8" />, 
      number: companyInfo.clients || "150+", 
      label: "Happy Clients",
      color: "from-green-400 to-cyan-500"
    },
    { 
      icon: <RocketLaunchIcon className="w-8 h-8" />, 
      number: companyInfo.employees || "50+", 
      label: "Team Members",
      color: "from-purple-400 to-pink-500"
    },
    { 
      icon: <CheckCircleIcon className="w-8 h-8" />, 
      number: "4+", 
      label: "Years Experience",
      color: "from-blue-400 to-indigo-500"
    }
  ];

  const features = [
    {
      title: "Innovation First",
      description: "We embrace cutting-edge technologies and creative solutions to deliver exceptional results.",
      icon: "🚀"
    },
    {
      title: "Data-Driven Approach",
      description: "Every decision is backed by comprehensive analytics and market research.",
      icon: "📊"
    },
    {
      title: "Client-Centric Focus",
      description: "Your success is our priority. We work closely with you to achieve your goals.",
      icon: "🎯"
    },
    {
      title: "Scalable Solutions",
      description: "Our solutions grow with your business, ensuring long-term success and adaptability.",
      icon: "📈"
    }
  ];

  return (
    <section className="py-20 bg-white dark:bg-gray-900 overflow-hidden">
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
              <span className="text-blue-600 text-sm font-medium">About Formonex</span>
            </motion.div>
            
            <motion.h2
              variants={fadeInUp}
              className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 dark:text-white mb-6"
            >
              <span className="bg-gradient-to-r from-blue-600 via-purple-600 to-cyan-600 bg-clip-text text-transparent">
                Empowering Your
              </span>
              <br />
              Digital Success
            </motion.h2>
          </div>

          {/* Main Content */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-20">
            {/* Left Content */}
            <motion.div variants={fadeInLeft} className="space-y-6">
              <div className="prose prose-lg dark:prose-invert max-w-none">
                <p className="text-lg text-gray-600 dark:text-gray-300 leading-relaxed">
                  {companyInfo.description}
                </p>
                <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                  Since our establishment in 2020, we've been at the forefront of digital innovation, 
                  helping businesses transform their operations and achieve unprecedented growth through 
                  technology-driven solutions.
                </p>
              </div>

              {/* Key Points */}
              <div className="space-y-4">
                {[
                  "Custom software development tailored to your needs",
                  "Strategic digital marketing for maximum ROI",
                  "Advanced data analytics for informed decision-making",
                  "Comprehensive support from concept to launch"
                ].map((point, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.1 }}
                    className="flex items-center space-x-3"
                  >
                    <div className="w-2 h-2 bg-blue-500 rounded-full flex-shrink-0" />
                    <span className="text-gray-600 dark:text-gray-300">{point}</span>
                  </motion.div>
                ))}
              </div>

              {/* CTA Button */}
              <motion.button
                whileHover={{ 
                  scale: 1.05,
                  boxShadow: "0 20px 40px rgba(59, 130, 246, 0.3)"
                }}
                whileTap={{ scale: 0.98 }}
                className="mt-8 px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold rounded-full hover:from-purple-600 hover:to-blue-600 transition-all duration-300 shadow-lg"
              >
                Learn More About Us
              </motion.button>
            </motion.div>

            {/* Right Content - Stats & Visual */}
            <motion.div variants={fadeInRight} className="relative">
              {/* Background Decorative Elements */}
              <div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 via-purple-500/10 to-cyan-500/10 rounded-3xl transform rotate-3" />
              <div className="absolute inset-0 bg-gradient-to-br from-purple-500/10 via-pink-500/10 to-blue-500/10 rounded-3xl transform -rotate-3" />
              
              {/* Stats Grid */}
              <div className="relative grid grid-cols-2 gap-6 p-8">
                {stats.map((stat, index) => (
                  <motion.div
                    key={index}
                    initial={{ scale: 0, opacity: 0 }}
                    whileInView={{ scale: 1, opacity: 1 }}
                    transition={{ delay: index * 0.1, type: "spring" }}
                    whileHover={{ scale: 1.05 }}
                    className="bg-white dark:bg-gray-800 p-6 rounded-2xl shadow-lg border border-gray-200 dark:border-gray-700 text-center group hover:shadow-2xl transition-all duration-300"
                  >
                    <div className={`w-16 h-16 bg-gradient-to-r ${stat.color} rounded-xl flex items-center justify-center text-white mx-auto mb-4 group-hover:scale-110 transition-transform duration-300`}>
                      {stat.icon}
                    </div>
                    <div className="text-3xl font-bold text-gray-900 dark:text-white mb-2">
                      {stat.number}
                    </div>
                    <div className="text-sm text-gray-600 dark:text-gray-300">
                      {stat.label}
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>

          {/* Features Grid */}
          <motion.div
            variants={fadeInUp}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
          >
            {features.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ y: -10 }}
                className="text-center p-6 rounded-2xl bg-gray-50 dark:bg-gray-800 hover:bg-white dark:hover:bg-gray-700 transition-all duration-300 border border-gray-200 dark:border-gray-700 hover:shadow-lg group"
              >
                <div className="text-4xl mb-4 group-hover:scale-110 transition-transform duration-300">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">
                  {feature.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-300 text-sm leading-relaxed">
                  {feature.description}
                </p>
              </motion.div>
            ))}
          </motion.div>

          {/* Mission Statement */}
          <motion.div
            variants={fadeInUp}
            className="text-center mt-20 p-12 bg-gradient-to-r from-blue-500/10 via-purple-500/10 to-cyan-500/10 rounded-3xl border border-blue-500/20"
          >
            <div className="max-w-4xl mx-auto">
              <h3 className="text-2xl md:text-3xl font-bold text-gray-900 dark:text-white mb-6">
                Our Mission
              </h3>
              <p className="text-xl text-gray-600 dark:text-gray-300 leading-relaxed">
                {companyInfo.mission} - We believe in creating technology solutions that not only meet today's challenges but also prepare businesses for tomorrow's opportunities.
              </p>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default AboutSection;
