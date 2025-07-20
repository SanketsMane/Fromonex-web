import React, { useRef, useState } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { 
  EnvelopeIcon,
  PhoneIcon,
  MapPinIcon,
  PaperAirplaneIcon,
  RocketLaunchIcon,
  BoltIcon
} from '@heroicons/react/24/outline';

const AdvancedContactSection: React.FC = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"]
  });

  const y = useTransform(scrollYProgress, [0, 1], [100, -100]);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    timeline: '',
    message: ''
  });

  const [focusedField, setFocusedField] = useState<string | null>(null);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    // Handle form submission here
  };

  const contactInfo = [
    {
      icon: EnvelopeIcon,
      title: 'Email Us',
      value: 'hello@formonex.com',
      subtitle: 'Drop us a line anytime',
      gradient: 'from-blue-400 to-purple-400',
      href: 'mailto:hello@formonex.com'
    },
    {
      icon: PhoneIcon,
      title: 'Call Us',
      value: '+1 (555) 123-4567',
      subtitle: 'Mon-Fri from 8am to 5pm',
      gradient: 'from-green-400 to-teal-400',
      href: 'tel:+15551234567'
    },
    {
      icon: MapPinIcon,
      title: 'Visit Us',
      value: 'San Francisco, CA',
      subtitle: 'Come say hello at our office',
      gradient: 'from-pink-400 to-orange-400',
      href: '#'
    }
  ];

  return (
    <section ref={sectionRef} className="relative py-32 overflow-hidden bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
      {/* Animated Background */}
      <div className="absolute inset-0">
        <motion.div
          style={{ y }}
          className="absolute top-10 left-10 w-96 h-96 bg-gradient-to-r from-blue-400/10 to-purple-400/10 rounded-full blur-3xl"
        />
        <motion.div
          style={{ y: useTransform(scrollYProgress, [0, 1], [-50, 150]) }}
          className="absolute bottom-10 right-10 w-80 h-80 bg-gradient-to-r from-pink-400/10 to-orange-400/10 rounded-full blur-3xl"
        />
        <motion.div
          style={{ y: useTransform(scrollYProgress, [0, 1], [50, -50]) }}
          className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-gradient-to-r from-green-400/10 to-teal-400/10 rounded-full blur-3xl"
        />
      </div>

      {/* Floating Elements */}
      <motion.div
        animate={{ 
          rotate: 360,
          scale: [1, 1.2, 1]
        }}
        transition={{ 
          rotate: { duration: 30, repeat: Infinity, ease: "linear" },
          scale: { duration: 5, repeat: Infinity, ease: "easeInOut" }
        }}
        className="absolute top-1/4 right-1/4 w-16 h-16 border-2 border-blue-400/20 rounded-full"
      />
      <motion.div
        animate={{ 
          y: [0, -25, 0],
          rotate: [0, 15, -15, 0]
        }}
        transition={{ 
          duration: 7,
          repeat: Infinity,
          ease: "easeInOut"
        }}
        className="absolute bottom-1/4 left-1/4 w-12 h-12 bg-gradient-to-r from-purple-400/20 to-pink-400/20 rounded-lg"
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
            <RocketLaunchIcon className="w-5 h-5 mr-2 text-blue-400" />
            Get In Touch
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-5xl md:text-7xl font-bold mb-8"
          >
            <span className="bg-gradient-to-r from-white via-blue-100 to-purple-100 bg-clip-text text-transparent">
              Ready to Start
            </span>
            <br />
            <span className="bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
              Your Project?
            </span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed"
          >
            Let's discuss your vision and create something extraordinary together. 
            We're here to transform your ideas into reality.
          </motion.p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-16">
          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -100 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-8"
          >
            <div className="mb-12">
              <h3 className="text-3xl font-bold text-white mb-6">
                Let's Talk
              </h3>
              <p className="text-gray-300 text-lg leading-relaxed">
                Whether you have a question about our services, pricing, or anything else, 
                our team is ready to answer all your questions.
              </p>
            </div>

            <div className="space-y-6">
              {contactInfo.map((info, index) => (
                <motion.a
                  key={index}
                  href={info.href}
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.2 * index }}
                  whileHover={{ scale: 1.02, x: 10 }}
                  className="group block"
                >
                  <div className="relative">
                    <div className="absolute inset-0 bg-gradient-to-r from-white/5 to-white/10 rounded-2xl blur-xl group-hover:blur-2xl transition-all duration-300" />
                    <div className="relative p-6 rounded-2xl bg-white/10 backdrop-blur-lg border border-white/20 group-hover:border-white/40 transition-all duration-300">
                      <div className="flex items-start space-x-4">
                        <div className={`flex-shrink-0 w-12 h-12 rounded-xl bg-gradient-to-r ${info.gradient} flex items-center justify-center`}>
                          <info.icon className="w-6 h-6 text-white" />
                        </div>
                        <div>
                          <h4 className="text-lg font-semibold text-white mb-1">
                            {info.title}
                          </h4>
                          <p className="text-gray-300 font-medium">
                            {info.value}
                          </p>
                          <p className="text-gray-400 text-sm">
                            {info.subtitle}
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </motion.a>
              ))}
            </div>

            {/* Social Proof */}
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="relative mt-12"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-blue-500/10 via-purple-500/10 to-pink-500/10 rounded-2xl blur-xl" />
              <div className="relative p-6 rounded-2xl bg-white/10 backdrop-blur-lg border border-white/20">
                <div className="flex items-center justify-between">
                  <div className="text-center">
                    <div className="text-2xl font-bold text-white">24/7</div>
                    <div className="text-gray-300 text-sm">Support</div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl font-bold text-white">1-2 Days</div>
                    <div className="text-gray-300 text-sm">Response Time</div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl font-bold text-white">100%</div>
                    <div className="text-gray-300 text-sm">Satisfaction</div>
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 100 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <div className="absolute inset-0 bg-gradient-to-r from-white/5 to-white/10 rounded-3xl blur-xl" />
            <div className="relative p-8 rounded-3xl bg-white/10 backdrop-blur-lg border border-white/20">
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="relative">
                    <motion.input
                      type="text"
                      name="name"
                      placeholder="Your Name"
                      value={formData.name}
                      onChange={handleInputChange}
                      onFocus={() => setFocusedField('name')}
                      onBlur={() => setFocusedField(null)}
                      className="w-full px-4 py-4 rounded-xl bg-white/5 border border-white/20 text-white placeholder-gray-400 focus:border-blue-400 focus:outline-none transition-all duration-300"
                      whileFocus={{ scale: 1.02 }}
                      required
                    />
                    <motion.div
                      animate={{
                        scale: focusedField === 'name' ? 1 : 0,
                        opacity: focusedField === 'name' ? 1 : 0
                      }}
                      className="absolute -top-2 -right-2 w-4 h-4 bg-blue-400 rounded-full"
                    />
                  </div>

                  <div className="relative">
                    <motion.input
                      type="email"
                      name="email"
                      placeholder="Your Email"
                      value={formData.email}
                      onChange={handleInputChange}
                      onFocus={() => setFocusedField('email')}
                      onBlur={() => setFocusedField(null)}
                      className="w-full px-4 py-4 rounded-xl bg-white/5 border border-white/20 text-white placeholder-gray-400 focus:border-blue-400 focus:outline-none transition-all duration-300"
                      whileFocus={{ scale: 1.02 }}
                      required
                    />
                    <motion.div
                      animate={{
                        scale: focusedField === 'email' ? 1 : 0,
                        opacity: focusedField === 'email' ? 1 : 0
                      }}
                      className="absolute -top-2 -right-2 w-4 h-4 bg-purple-400 rounded-full"
                    />
                  </div>
                </div>

                <div className="relative">
                  <motion.input
                    type="text"
                    name="company"
                    placeholder="Company Name (Optional)"
                    value={formData.company}
                    onChange={handleInputChange}
                    onFocus={() => setFocusedField('company')}
                    onBlur={() => setFocusedField(null)}
                    className="w-full px-4 py-4 rounded-xl bg-white/5 border border-white/20 text-white placeholder-gray-400 focus:border-blue-400 focus:outline-none transition-all duration-300"
                    whileFocus={{ scale: 1.02 }}
                  />
                  <motion.div
                    animate={{
                      scale: focusedField === 'company' ? 1 : 0,
                      opacity: focusedField === 'company' ? 1 : 0
                    }}
                    className="absolute -top-2 -right-2 w-4 h-4 bg-green-400 rounded-full"
                  />
                </div>

                <div className="relative">
                  <motion.select
                    name="timeline"
                    value={formData.timeline}
                    onChange={handleInputChange}
                    onFocus={() => setFocusedField('timeline')}
                    onBlur={() => setFocusedField(null)}
                    className="w-full px-4 py-4 rounded-xl bg-white/5 border border-white/20 text-white focus:border-blue-400 focus:outline-none transition-all duration-300"
                    whileFocus={{ scale: 1.02 }}
                    required
                  >
                    <option value="" className="bg-gray-800">Project Timeline</option>
                    <option value="asap" className="bg-gray-800">ASAP</option>
                    <option value="1-3months" className="bg-gray-800">1-3 months</option>
                    <option value="3-6months" className="bg-gray-800">3-6 months</option>
                    <option value="6months+" className="bg-gray-800">6+ months</option>
                    <option value="exploring" className="bg-gray-800">Just exploring</option>
                  </motion.select>
                  <motion.div
                    animate={{
                      scale: focusedField === 'timeline' ? 1 : 0,
                      opacity: focusedField === 'timeline' ? 1 : 0
                    }}
                    className="absolute -top-2 -right-2 w-4 h-4 bg-yellow-400 rounded-full"
                  />
                </div>

                <div className="relative">
                  <motion.textarea
                    name="message"
                    placeholder="Tell us about your project..."
                    value={formData.message}
                    onChange={handleInputChange}
                    onFocus={() => setFocusedField('message')}
                    onBlur={() => setFocusedField(null)}
                    rows={6}
                    className="w-full px-4 py-4 rounded-xl bg-white/5 border border-white/20 text-white placeholder-gray-400 focus:border-blue-400 focus:outline-none transition-all duration-300 resize-none"
                    whileFocus={{ scale: 1.02 }}
                    required
                  />
                  <motion.div
                    animate={{
                      scale: focusedField === 'message' ? 1 : 0,
                      opacity: focusedField === 'message' ? 1 : 0
                    }}
                    className="absolute -top-2 -right-2 w-4 h-4 bg-pink-400 rounded-full"
                  />
                </div>

                <motion.button
                  type="submit"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="w-full relative group overflow-hidden"
                >
                  <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-purple-500 rounded-xl" />
                  <div className="absolute inset-0 bg-gradient-to-r from-purple-500 to-pink-500 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  <div className="relative px-8 py-4 flex items-center justify-center text-white font-semibold">
                    <BoltIcon className="w-5 h-5 mr-2" />
                    Send Message
                    <motion.div
                      whileHover={{ x: 5 }}
                      transition={{ duration: 0.2 }}
                    >
                      <PaperAirplaneIcon className="w-5 h-5 ml-2" />
                    </motion.div>
                  </div>
                </motion.button>
              </form>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AdvancedContactSection;
