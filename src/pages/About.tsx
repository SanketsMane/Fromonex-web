import { motion } from 'framer-motion';
import { CheckCircle, Trophy, Users, Rocket, Star, Target, BookOpen, Lightbulb, Zap, Globe, Shield, Award, ArrowRight, Sparkles } from 'lucide-react';
import SEO from '../components/SEO';
import { generateOrganizationSchema, generateBreadcrumbSchema } from '../utils/structuredData';

const About = () => {
  const stats = [
    {
      icon: <Trophy className="w-8 h-8" />,
      number: "200+",
      label: "Projects Completed",
      description: "Successfully delivered across various industries"
    },
    {
      icon: <Users className="w-8 h-8" />,
      number: "150+",
      label: "Happy Clients",
      description: "Satisfied clients who trust our expertise"
    },
    {
      icon: <Rocket className="w-8 h-8" />,
      number: "50+",
      label: "Team Members",
      description: "Skilled professionals driving innovation"
    },
    {
      icon: <Star className="w-8 h-8" />,
      number: "4+",
      label: "Years Experience",
      description: "Years of digital transformation expertise"
    }
  ];

  const values = [
    {
      title: "Innovation Excellence",
      description: "We leverage cutting-edge technologies and creative solutions to deliver exceptional results that drive business growth and digital transformation.",
      icon: Lightbulb,
      gradient: "from-blue-500 to-cyan-500"
    },
    {
      title: "Client-Centric Approach",
      description: "Your success is our priority. We work collaboratively to understand your unique challenges and deliver solutions that exceed expectations.",
      icon: Target,
      gradient: "from-purple-500 to-pink-500"
    },
    {
      title: "Quality & Reliability",
      description: "We maintain the highest standards of quality in every project, ensuring scalable, secure, and reliable solutions for long-term success.",
      icon: Shield,
      gradient: "from-green-500 to-emerald-500"
    },
    {
      title: "Continuous Learning",
      description: "We stay ahead of technology trends and continuously upgrade our skills to provide innovative solutions that keep our clients competitive.",
      icon: BookOpen,
      gradient: "from-orange-500 to-red-500"
    }
  ];

  const capabilities = [
    { icon: Globe, label: "Global Reach", desc: "Serving clients worldwide" },
    { icon: Zap, label: "Fast Delivery", desc: "Rapid project execution" },
    { icon: Award, label: "Quality Assured", desc: "Industry-leading standards" },
    { icon: Sparkles, label: "Innovation First", desc: "Cutting-edge solutions" }
  ];

  const breadcrumbSchema = generateBreadcrumbSchema([
    { name: 'Home', url: 'https://www.formonex.com' },
    { name: 'About Us', url: 'https://www.formonex.com/about' }
  ]);

  const organizationSchema = generateOrganizationSchema();
  const combinedSchema = [breadcrumbSchema, organizationSchema];

  return (
    <div className="pt-16 overflow-hidden">
      <SEO 
        title="About Formonex | Leading IT Company in Pune & Bengaluru - Our Story & Mission"
        description="Learn about Formonex's journey as a premier IT solutions company. Founded with a vision to transform businesses through technology. 4+ years of experience, 200+ projects, 150+ clients across Pune and Bengaluru."
        keywords="About Formonex, IT Company History, Software Development Team, Company Mission Vision, Technology Experts Pune Bengaluru, Digital Transformation Leaders"
        canonical="https://www.formonex.com/about"
        structured={combinedSchema}
      />
      {/* Hero Section with Advanced Design */}
      <section className="relative min-h-screen flex items-center bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 text-white overflow-hidden">
        {/* Animated Background Elements */}
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(59,130,246,0.3),transparent_50%)]"></div>
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_80%,rgba(168,85,247,0.3),transparent_50%)]"></div>
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_40%_70%,rgba(6,182,212,0.2),transparent_50%)]"></div>
          
          {/* Floating Elements */}
          <motion.div
            animate={{
              y: [0, -20, 0],
              opacity: [0.3, 0.6, 0.3],
            }}
            transition={{
              duration: 4,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            className="absolute top-20 left-20 w-32 h-32 bg-blue-500/10 rounded-full blur-xl"
          />
          <motion.div
            animate={{
              y: [0, 15, 0],
              opacity: [0.2, 0.5, 0.2],
            }}
            transition={{
              duration: 6,
              repeat: Infinity,
              ease: "easeInOut",
              delay: 2,
            }}
            className="absolute bottom-20 right-20 w-48 h-48 bg-purple-500/10 rounded-full blur-2xl"
          />
          <motion.div
            animate={{
              y: [0, -25, 0],
              opacity: [0.4, 0.7, 0.4],
            }}
            transition={{
              duration: 5,
              repeat: Infinity,
              ease: "easeInOut",
              delay: 1,
            }}
            className="absolute top-1/2 left-1/3 w-24 h-24 bg-cyan-500/10 rounded-full blur-lg"
          />
        </div>

        <div className="container-custom relative z-10">
          <div className="max-w-5xl mx-auto">
            {/* Badge */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="inline-flex items-center px-6 py-3 rounded-full bg-white/10 border border-white/20 backdrop-blur-sm mb-8"
            >
              <Sparkles className="w-4 h-4 text-blue-400 mr-2" />
              <span className="text-white text-sm font-medium">About Formonex</span>
            </motion.div>

            {/* Main Heading */}
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="text-5xl md:text-6xl lg:text-7xl font-heading font-bold mb-8 leading-tight"
            >
              <span className="bg-gradient-to-r from-blue-400 via-purple-400 to-cyan-400 bg-clip-text text-transparent">
                Empowering Digital
              </span>
              <br />
              <span className="text-white">Innovation & Growth</span>
            </motion.h1>

            {/* Subtitle */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="text-xl md:text-2xl text-gray-300 mb-12 max-w-4xl leading-relaxed"
            >
              Leading IT solutions provider specializing in software development, data science, AI/ML, 
              and digital transformation services that drive unprecedented business growth.
            </motion.p>

            {/* Stats Grid */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.5 }}
              className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-12"
            >
              {stats.map((stat, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.6 + index * 0.1 }}
                  className="text-center group"
                >
                  <div className="text-blue-400 mb-3 flex justify-center group-hover:scale-110 transition-transform duration-300">
                    {stat.icon}
                  </div>
                  <motion.div 
                    className="text-3xl md:text-4xl font-bold mb-2"
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ duration: 0.5, delay: 0.8 + index * 0.1, type: "spring" }}
                  >
                    {stat.number}
                  </motion.div>
                  <div className="text-sm text-gray-300 mb-1 font-medium">{stat.label}</div>
                  <div className="text-xs text-gray-400">{stat.description}</div>
                </motion.div>
              ))}
            </motion.div>

            {/* Capabilities */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.9 }}
              className="flex flex-wrap gap-6 justify-center"
            >
              {capabilities.map((capability, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5, delay: 1 + index * 0.1 }}
                  className="flex items-center px-4 py-2 bg-white/10 rounded-full backdrop-blur-sm border border-white/20 hover:bg-white/20 transition-colors duration-300"
                >
                  <capability.icon className="w-4 h-4 text-blue-400 mr-2" />
                  <span className="text-white text-sm font-medium">{capability.label}</span>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5 }}
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

      {/* About Company Section with Enhanced Design */}
      <section className="py-24 bg-white dark:bg-gray-900">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
                className="inline-flex items-center px-4 py-2 bg-blue-50 dark:bg-blue-900/20 rounded-full mb-6"
              >
                <Globe className="w-4 h-4 text-blue-600 mr-2" />
                <span className="text-blue-600 dark:text-blue-400 text-sm font-medium">Our Story</span>
              </motion.div>

              <h2 className="text-4xl md:text-5xl font-heading font-bold text-gray-900 dark:text-white mb-8">
                About <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">Formonex</span>
              </h2>
              
              <div className="space-y-6 text-gray-600 dark:text-gray-300">
                <p className="text-lg leading-relaxed">
                  Formonex is a dynamic IT solutions company dedicated to empowering businesses through innovative technology. 
                  We specialize in delivering comprehensive digital transformation services that drive growth, efficiency, and competitive advantage.
                </p>
                <p className="text-lg leading-relaxed">
                  Our expertise spans across software development, web applications, data science, artificial intelligence, 
                  machine learning, and digital marketing. We combine technical excellence with strategic thinking to create 
                  solutions that not only meet today's challenges but also prepare businesses for tomorrow's opportunities.
                </p>
                <p className="text-lg leading-relaxed">
                  With a client-centric approach and commitment to quality, we have successfully delivered 200+ projects 
                  across various industries, helping businesses transform their operations and achieve sustainable growth 
                  through technology innovation.
                </p>
              </div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.3 }}
                viewport={{ once: true }}
                className="mt-8"
              >
                <button className="btn-primary inline-flex items-center group">
                  Learn More About Us
                  <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </button>
              </motion.div>
            </motion.div>

            {/* Visual Element instead of problematic image */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="relative"
            >
              <div className="relative">
                {/* Main Visual Card */}
                <div className="bg-gradient-to-br from-blue-50 to-purple-50 dark:from-gray-800 dark:to-gray-700 rounded-3xl p-8 shadow-2xl">
                  <div className="grid grid-cols-2 gap-6 mb-8">
                    {values.slice(0, 4).map((value, index) => (
                      <motion.div
                        key={index}
                        initial={{ opacity: 0, scale: 0.8 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.5, delay: index * 0.1 }}
                        viewport={{ once: true }}
                        className="bg-white dark:bg-gray-800 p-4 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300"
                      >
                        <div className={`w-12 h-12 bg-gradient-to-r ${value.gradient} rounded-lg flex items-center justify-center mb-3`}>
                          <value.icon className="w-6 h-6 text-white" />
                        </div>
                        <h4 className="font-semibold text-gray-900 dark:text-white text-sm mb-1">{value.title}</h4>
                        <p className="text-xs text-gray-600 dark:text-gray-400">{value.description.substring(0, 50)}...</p>
                      </motion.div>
                    ))}
                  </div>
                  
                  {/* Central Achievement Badge */}
                  <motion.div
                    initial={{ opacity: 0, scale: 0 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.6, delay: 0.5, type: "spring" }}
                    viewport={{ once: true }}
                    className="bg-white dark:bg-gray-800 p-6 rounded-2xl shadow-xl text-center"
                  >
                    <div className="bg-gradient-to-r from-green-500 to-emerald-500 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                      <CheckCircle className="w-8 h-8 text-white" />
                    </div>
                    <p className="text-3xl font-bold text-gray-900 dark:text-white">100%</p>
                    <p className="text-gray-600 dark:text-gray-300 font-medium">Client Satisfaction</p>
                  </motion.div>
                </div>

                {/* Floating Elements */}
                <motion.div
                  animate={{
                    y: [0, -10, 0],
                    rotate: [0, 5, 0],
                  }}
                  transition={{
                    duration: 4,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                  className="absolute -top-4 -right-4 bg-gradient-to-r from-blue-500 to-purple-500 w-20 h-20 rounded-full flex items-center justify-center shadow-lg"
                >
                  <Rocket className="w-8 h-8 text-white" />
                </motion.div>

                <motion.div
                  animate={{
                    y: [0, 8, 0],
                    rotate: [0, -3, 0],
                  }}
                  transition={{
                    duration: 3,
                    repeat: Infinity,
                    ease: "easeInOut",
                    delay: 1,
                  }}
                  className="absolute -bottom-4 -left-4 bg-gradient-to-r from-orange-500 to-red-500 w-16 h-16 rounded-full flex items-center justify-center shadow-lg"
                >
                  <Star className="w-6 h-6 text-white" />
                </motion.div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Core Values Section with Advanced Design */}
      <section className="py-24 bg-gray-50 dark:bg-gray-800">
        <div className="container-custom">
          <div className="text-center mb-16">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="inline-flex items-center px-4 py-2 bg-purple-50 dark:bg-purple-900/20 rounded-full mb-6"
            >
              <Lightbulb className="w-4 h-4 text-purple-600 mr-2" />
              <span className="text-purple-600 dark:text-purple-400 text-sm font-medium">Our Values</span>
            </motion.div>

            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              viewport={{ once: true }}
              className="text-4xl md:text-5xl font-heading font-bold text-gray-900 dark:text-white mb-6"
            >
              What Drives Us Forward
            </motion.h2>
            
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
              className="text-lg text-gray-600 dark:text-gray-300 max-w-3xl mx-auto"
            >
              Our core values shape every decision we make and every solution we deliver
            </motion.p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="group relative"
              >
                <div className="bg-white dark:bg-gray-900 rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-500 border border-gray-200 dark:border-gray-700 hover:border-transparent group-hover:-translate-y-2">
                  {/* Gradient Border Effect */}
                  <div className={`absolute inset-0 bg-gradient-to-r ${value.gradient} rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 -z-10 blur-sm`}></div>
                  
                  <div className={`w-16 h-16 bg-gradient-to-r ${value.gradient} rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                    <value.icon className="w-8 h-8 text-white" />
                  </div>
                  
                  <h3 className="text-xl font-heading font-bold text-gray-900 dark:text-white mb-4 group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:bg-clip-text group-hover:from-blue-600 group-hover:to-purple-600 transition-all duration-300">
                    {value.title}
                  </h3>
                  
                  <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                    {value.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Mission & Vision Section with Enhanced Design */}
      <section className="py-24 bg-gradient-to-br from-slate-900 via-blue-900 to-purple-900 text-white">
        <div className="container-custom">
          <div className="text-center mb-16">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="inline-flex items-center px-4 py-2 bg-white/10 border border-white/20 rounded-full mb-6"
            >
              <Target className="w-4 h-4 text-blue-400 mr-2" />
              <span className="text-white text-sm font-medium">Mission & Vision</span>
            </motion.div>

            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              viewport={{ once: true }}
              className="text-4xl md:text-5xl font-heading font-bold mb-6"
            >
              <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                Our Purpose
              </span>{' '}
              & Direction
            </motion.h2>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Mission */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="relative group"
            >
              <div className="bg-white/10 backdrop-blur-lg rounded-3xl p-8 border border-white/20 hover:bg-white/15 transition-all duration-500">
                <div className="bg-gradient-to-r from-blue-500 to-cyan-500 w-20 h-20 rounded-2xl flex items-center justify-center mb-8 group-hover:scale-110 transition-transform duration-300">
                  <Rocket className="w-10 h-10 text-white" />
                </div>
                
                <h3 className="text-3xl font-heading font-bold mb-6">Our Mission</h3>
                
                <p className="text-lg text-gray-200 leading-relaxed mb-8">
                  To empower businesses with innovative IT solutions that drive digital transformation, enhance operational 
                  efficiency, and create sustainable competitive advantages. We are committed to delivering excellence through 
                  cutting-edge technology, strategic insights, and exceptional service.
                </p>
                
                <div className="space-y-4">
                  {[
                    "Deliver innovative technology solutions",
                    "Drive digital transformation",
                    "Create sustainable business value"
                  ].map((item, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.5, delay: index * 0.1 }}
                      viewport={{ once: true }}
                      className="flex items-center space-x-3"
                    >
                      <CheckCircle className="w-5 h-5 text-green-400 flex-shrink-0" />
                      <span className="text-gray-200">{item}</span>
                    </motion.div>
                  ))}
                </div>
              </div>
            </motion.div>

            {/* Vision */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
              className="relative group"
            >
              <div className="bg-white/10 backdrop-blur-lg rounded-3xl p-8 border border-white/20 hover:bg-white/15 transition-all duration-500">
                <div className="bg-gradient-to-r from-purple-500 to-pink-500 w-20 h-20 rounded-2xl flex items-center justify-center mb-8 group-hover:scale-110 transition-transform duration-300">
                  <Star className="w-10 h-10 text-white" />
                </div>
                
                <h3 className="text-3xl font-heading font-bold mb-6">Our Vision</h3>
                
                <p className="text-lg text-gray-200 leading-relaxed mb-8">
                  To be the leading technology partner for businesses seeking digital excellence. We envision a future where 
                  every organization can harness the power of advanced technologies like AI, data science, and cloud computing 
                  to achieve unprecedented growth and innovation.
                </p>
                
                <div className="space-y-4">
                  {[
                    "Lead digital innovation",
                    "Enable business transformation",
                    "Shape the future of technology"
                  ].map((item, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.5, delay: index * 0.1 }}
                      viewport={{ once: true }}
                      className="flex items-center space-x-3"
                    >
                      <CheckCircle className="w-5 h-5 text-blue-400 flex-shrink-0" />
                      <span className="text-gray-200">{item}</span>
                    </motion.div>
                  ))}
                </div>
              </div>
            </motion.div>
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
              Let's discuss how our expertise can help you achieve your business goals and drive digital innovation.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-white text-blue-600 hover:bg-gray-50 px-8 py-4 rounded-lg font-semibold transition-colors duration-300 inline-flex items-center group">
                Start Your Journey
                <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </button>
              <button className="border-2 border-white text-white hover:bg-white hover:text-blue-600 px-8 py-4 rounded-lg font-semibold transition-colors duration-300">
                View Our Services
              </button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default About;
