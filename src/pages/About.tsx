import { motion } from 'framer-motion';
import { CheckCircleIcon, UsersIcon, TrophyIcon, RocketLaunchIcon, HeartIcon } from '@heroicons/react/24/outline';
import { companyInfo } from '../data/company';
import { fadeInUp, staggerContainer } from '../utils/animations';

const About = () => {
  const stats = [
    { 
      icon: <TrophyIcon className="w-8 h-8" />, 
      number: "200+", 
      label: "Projects Completed",
      description: "Successfully delivered projects across various industries"
    },
    { 
      icon: <UsersIcon className="w-8 h-8" />, 
      number: "150+", 
      label: "Happy Clients",
      description: "Satisfied clients who continue to work with us"
    },
    { 
      icon: <RocketLaunchIcon className="w-8 h-8" />, 
      number: "50+", 
      label: "Team Members",
      description: "Talented professionals dedicated to excellence"
    },
    { 
      icon: <HeartIcon className="w-8 h-8" />, 
      number: "4+", 
      label: "Years Experience",
      description: "Years of expertise in digital transformation"
    }
  ];

  const values = [
    {
      title: "Innovation First",
      description: "We embrace cutting-edge technologies and creative solutions to deliver exceptional results that set new industry standards.",
      icon: "🚀",
      color: "from-blue-500 to-cyan-500"
    },
    {
      title: "Client Success",
      description: "Your success is our priority. We work closely with you to understand your goals and exceed your expectations.",
      icon: "🎯",
      color: "from-purple-500 to-pink-500"
    },
    {
      title: "Quality Excellence",
      description: "We maintain the highest standards of quality in every project, ensuring reliable and scalable solutions.",
      icon: "⭐",
      color: "from-green-500 to-teal-500"
    },
    {
      title: "Continuous Learning",
      description: "We stay updated with the latest trends and technologies to provide innovative solutions for our clients.",
      icon: "📚",
      color: "from-orange-500 to-red-500"
    }
  ];

  const team = [
    {
      name: "Rajesh Kumar",
      position: "Founder & CEO",
      image: "/team/rajesh-kumar.jpg",
      bio: "Visionary leader with 10+ years experience in digital transformation and business strategy.",
      linkedin: "#"
    },
    {
      name: "Priya Sharma",
      position: "CTO",
      image: "/team/priya-sharma.jpg", 
      bio: "Technology expert specializing in scalable architecture and innovative software solutions.",
      linkedin: "#"
    },
    {
      name: "Amit Patel",
      position: "Head of Marketing",
      image: "/team/amit-patel.jpg",
      bio: "Digital marketing strategist with expertise in data-driven growth and brand development.",
      linkedin: "#"
    },
    {
      name: "Sarah Williams",
      position: "Lead Designer",
      image: "/team/sarah-williams.jpg",
      bio: "Creative designer passionate about user experience and visual storytelling.",
      linkedin: "#"
    }
  ];

  return (
    <div className="pt-16">
      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-br from-blue-900 via-indigo-900 to-purple-900 text-white overflow-hidden">
        <div className="absolute inset-0 bg-[url('/images/grid.svg')] bg-center [mask-image:linear-gradient(180deg,white,rgba(255,255,255,0))]" />
        
        <div className="container mx-auto px-6 relative z-10">
          <motion.div
            variants={staggerContainer}
            initial="initial"
            animate="animate"
            className="max-w-4xl mx-auto text-center"
          >
            <motion.div
              variants={fadeInUp}
              className="inline-flex items-center px-4 py-2 rounded-full bg-white/10 border border-white/20 backdrop-blur-sm mb-8"
            >
              <span className="text-white text-sm font-medium">About Formonex</span>
            </motion.div>
            
            <motion.h1
              variants={fadeInUp}
              className="text-5xl md:text-6xl lg:text-7xl font-bold mb-8"
            >
              <span className="bg-gradient-to-r from-blue-400 via-purple-400 to-cyan-400 bg-clip-text text-transparent">
                Empowering Your
              </span>
              <br />
              Digital Success
            </motion.h1>
            
            <motion.p
              variants={fadeInUp}
              className="text-xl md:text-2xl text-gray-300 mb-12 max-w-3xl mx-auto leading-relaxed"
            >
              {companyInfo.description}
            </motion.p>

            <motion.div
              variants={fadeInUp}
              className="flex flex-col sm:flex-row gap-6 justify-center items-center"
            >
              <motion.button
                whileHover={{ 
                  scale: 1.05,
                  boxShadow: "0 20px 40px rgba(59, 130, 246, 0.3)"
                }}
                whileTap={{ scale: 0.98 }}
                className="px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full text-white font-semibold text-lg hover:from-purple-600 hover:to-blue-600 transition-all duration-300 shadow-lg"
              >
                Get to Know Us
              </motion.button>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-20 bg-white dark:bg-gray-900">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-8">
                Our <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">Mission</span>
              </h2>
              <p className="text-lg text-gray-600 dark:text-gray-300 leading-relaxed mb-8">
                {companyInfo.mission} - We believe in creating technology solutions that not only meet today's challenges but also prepare businesses for tomorrow's opportunities.
              </p>
              <div className="space-y-4">
                {[
                  "Deliver innovative solutions that drive real business value",
                  "Foster long-term partnerships built on trust and excellence",
                  "Continuously evolve with emerging technologies and trends",
                  "Empower businesses to achieve their digital transformation goals"
                ].map((item, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.1 }}
                    className="flex items-center"
                  >
                    <CheckCircleIcon className="w-6 h-6 text-green-500 mr-3 flex-shrink-0" />
                    <span className="text-gray-600 dark:text-gray-300">{item}</span>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="relative"
            >
              <div className="grid grid-cols-2 gap-6">
                {stats.map((stat, index) => (
                  <motion.div
                    key={index}
                    initial={{ scale: 0, opacity: 0 }}
                    whileInView={{ scale: 1, opacity: 1 }}
                    transition={{ delay: index * 0.1, type: "spring" }}
                    whileHover={{ scale: 1.05 }}
                    className="bg-gradient-to-br from-blue-500/10 to-purple-500/10 p-6 rounded-2xl border border-blue-500/20 text-center group hover:shadow-lg transition-all duration-300"
                  >
                    <div className="w-16 h-16 bg-gradient-to-r from-blue-600 to-purple-600 rounded-xl flex items-center justify-center text-white mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                      {stat.icon}
                    </div>
                    <div className="text-3xl font-bold text-gray-900 dark:text-white mb-2">
                      {stat.number}
                    </div>
                    <div className="text-sm font-semibold text-gray-900 dark:text-white mb-2">
                      {stat.label}
                    </div>
                    <div className="text-xs text-gray-600 dark:text-gray-300">
                      {stat.description}
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Our Values */}
      <section className="py-20 bg-gray-50 dark:bg-gray-800">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6">
              Our <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">Values</span>
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
              The principles that guide everything we do and shape our company culture
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ y: -10 }}
                className="text-center p-8 bg-white dark:bg-gray-900 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-200 dark:border-gray-700"
              >
                <div className={`w-20 h-20 bg-gradient-to-r ${value.color} rounded-2xl flex items-center justify-center text-3xl mx-auto mb-6 group-hover:scale-110 transition-transform duration-300`}>
                  {value.icon}
                </div>
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4">
                  {value.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                  {value.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20 bg-white dark:bg-gray-900">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6">
              Meet Our <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">Team</span>
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
              The talented individuals behind our success, dedicated to delivering exceptional results
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {team.map((member, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ y: -10 }}
                className="bg-gray-50 dark:bg-gray-800 rounded-2xl p-6 text-center hover:shadow-lg transition-all duration-300 group"
              >
                <div className="relative mb-6">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-24 h-24 rounded-full mx-auto object-cover border-4 border-white dark:border-gray-700 shadow-lg group-hover:scale-110 transition-transform duration-300"
                    onError={(e) => {
                      const target = e.target as HTMLImageElement;
                      target.src = `https://ui-avatars.com/api/?name=${member.name}&background=3b82f6&color=fff&size=96`;
                    }}
                  />
                </div>
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">
                  {member.name}
                </h3>
                <p className="text-blue-600 font-semibold mb-4">
                  {member.position}
                </p>
                <p className="text-gray-600 dark:text-gray-300 text-sm leading-relaxed">
                  {member.bio}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Company Timeline */}
      <section className="py-20 bg-gradient-to-br from-blue-500/10 via-purple-500/10 to-cyan-500/10">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6">
              Our <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">Journey</span>
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
              From a small startup to a leading digital solutions provider
            </p>
          </motion.div>

          <div className="max-w-4xl mx-auto">
            <div className="space-y-8">
              {[
                {
                  year: "2020",
                  title: "Company Founded",
                  description: "Started with a vision to empower businesses through innovative digital solutions"
                },
                {
                  year: "2021",
                  title: "First Major Milestone",
                  description: "Completed 50+ projects and established partnerships with leading technology providers"
                },
                {
                  year: "2022",
                  title: "Team Expansion",
                  description: "Grew our team to 30+ professionals and expanded our service offerings"
                },
                {
                  year: "2023",
                  title: "Industry Recognition",
                  description: "Received multiple awards for excellence in digital transformation services"
                },
                {
                  year: "2024",
                  title: "Continued Growth",
                  description: "Serving 150+ clients globally with 50+ team members and expanding into new markets"
                }
              ].map((milestone, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.1 }}
                  className={`flex items-center ${index % 2 === 0 ? 'flex-row' : 'flex-row-reverse'}`}
                >
                  <div className="flex-1 text-center">
                    <div className={`bg-white dark:bg-gray-800 p-6 rounded-2xl shadow-lg border border-gray-200 dark:border-gray-700 ${index % 2 === 0 ? 'mr-8' : 'ml-8'}`}>
                      <div className="text-3xl font-bold text-blue-600 mb-2">{milestone.year}</div>
                      <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3">{milestone.title}</h3>
                      <p className="text-gray-600 dark:text-gray-300">{milestone.description}</p>
                    </div>
                  </div>
                  <div className="w-4 h-4 bg-blue-600 rounded-full border-4 border-white dark:border-gray-900 shadow-lg flex-shrink-0"></div>
                  <div className="flex-1"></div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
