import { motion } from 'framer-motion';
import { 
  PhoneIcon, 
  EnvelopeIcon, 
  MapPinIcon,
  ClockIcon,
  ChatBubbleLeftRightIcon,
  PaperAirplaneIcon,
  CheckCircleIcon
} from '@heroicons/react/24/outline';
import { companyInfo } from '../data/company';
import { fadeInUp, staggerContainer } from '../utils/animations';
import { useState } from 'react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    service: '',
    timeline: '',
    message: '',
    preferredContact: 'email'
  });

  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission here
    console.log('Form submitted:', formData);
    setIsSubmitted(true);
    
    // Reset form after 3 seconds
    setTimeout(() => {
      setIsSubmitted(false);
      setFormData({
        name: '',
        email: '',
        phone: '',
        company: '',
        service: '',
        timeline: '',
        message: '',
        preferredContact: 'email'
      });
    }, 3000);
  };

  const contactMethods = [
    {
      icon: <PhoneIcon className="w-8 h-8" />,
      title: "Phone",
      description: "Speak directly with our team",
      value: companyInfo.phone,
      action: `tel:${companyInfo.phone}`,
      available: "Mon-Fri 9AM-6PM IST"
    },
    {
      icon: <EnvelopeIcon className="w-8 h-8" />,
      title: "Email",
      description: "Send us a detailed message",
      value: companyInfo.email,
      action: `mailto:${companyInfo.email}`,
      available: "24/7 Response"
    },
    {
      icon: <ChatBubbleLeftRightIcon className="w-8 h-8" />,
      title: "Live Chat",
      description: "Get instant support",
      value: "Start Chat",
      action: "#",
      available: "Mon-Fri 9AM-6PM IST"
    },
    {
      icon: <MapPinIcon className="w-8 h-8" />,
      title: "Office",
      description: "Visit our headquarters",
      value: typeof companyInfo.address === 'string' ? companyInfo.address : companyInfo.address.full,
      action: "#",
      available: "By Appointment"
    }
  ];

  const offices = [
    {
      city: "Bengaluru",
      address: "Clayworks Create Campus, 11KM, Arakere Bannerghatta Rd, Omkar Nagar, Arekere, Bengaluru, Karnataka 560076",
      phone: "+91 95355 08952",
      email: "contact@formonex.com",
      image: "/images/office-bangalore.jpg"
    },
    {
      city: "Pune",
      address: "Office No 812, Global Business Hub, EON Free Zone, Kharadi, Pune, Maharashtra 411014",
      phone: "+91 95355 08952",
      email: "contact@formonex.com",
      image: "/images/office-pune.jpg"
    }
  ];

  const faqs = [
    {
      question: "How quickly can you start my project?",
      answer: "We typically begin new projects within 1-2 weeks of contract signing, depending on project complexity and our current workload."
    },
    {
      question: "Do you provide ongoing support and maintenance?",
      answer: "Yes, we offer comprehensive support and maintenance packages to ensure your digital solutions continue to perform optimally."
    },
    {
      question: "What is your payment structure?",
      answer: "We typically work with a 50% upfront payment and 50% upon project completion. For larger projects, we can arrange milestone-based payments."
    },
    {
      question: "Can you work with our existing team?",
      answer: "Absolutely! We excel at collaborating with in-house teams and can integrate seamlessly with your existing workflows and processes."
    }
  ];

  if (isSubmitted) {
    return (
      <div className="pt-16">
        <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-green-50 to-blue-50 dark:from-green-900/20 dark:to-blue-900/20">
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            className="text-center p-8"
          >
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ delay: 0.2, type: "spring", stiffness: 200 }}
              className="w-24 h-24 bg-green-500 rounded-full flex items-center justify-center mx-auto mb-6"
            >
              <CheckCircleIcon className="w-12 h-12 text-white" />
            </motion.div>
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">
              Thank You!
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-300 mb-8">
              We've received your message and will get back to you within 24 hours.
            </p>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5 }}
              className="text-sm text-gray-500 dark:text-gray-400"
            >
              Redirecting you back to the form...
            </motion.div>
          </motion.div>
        </div>
      </div>
    );
  }

  return (
    <div className="pt-16">
      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-br from-blue-900 via-purple-900 to-indigo-900 text-white overflow-hidden">
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
              <span className="text-white text-sm font-medium">Get In Touch</span>
            </motion.div>
            
            <motion.h1
              variants={fadeInUp}
              className="text-5xl md:text-6xl lg:text-7xl font-bold mb-8"
            >
              <span className="bg-gradient-to-r from-blue-400 via-purple-400 to-cyan-400 bg-clip-text text-transparent">
                Let's Build
              </span>
              <br />
              Something Amazing
            </motion.h1>
            
            <motion.p
              variants={fadeInUp}
              className="text-xl md:text-2xl text-gray-300 mb-12 max-w-3xl mx-auto leading-relaxed"
            >
              Ready to transform your digital presence? We're here to help you 
              achieve your goals with innovative solutions and expert guidance.
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* Contact Methods */}
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
              Multiple Ways to <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">Connect</span>
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
              Choose the communication method that works best for you
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {contactMethods.map((method, index) => (
              <motion.a
                key={index}
                href={method.action}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ y: -10, boxShadow: "0 20px 40px rgba(0,0,0,0.1)" }}
                className="bg-gray-50 dark:bg-gray-800 p-8 rounded-2xl border border-gray-200 dark:border-gray-700 text-center hover:border-blue-500 transition-all duration-300 group cursor-pointer"
              >
                <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-purple-600 rounded-xl flex items-center justify-center text-white mx-auto mb-6 group-hover:scale-110 transition-transform">
                  {method.icon}
                </div>
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2 group-hover:text-blue-600 transition-colors">
                  {method.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-300 mb-4">
                  {method.description}
                </p>
                <div className="text-blue-600 font-semibold mb-2">
                  {method.value}
                </div>
                <div className="text-sm text-gray-500 dark:text-gray-400">
                  {method.available}
                </div>
              </motion.a>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Form */}
      <section className="py-20 bg-gray-50 dark:bg-gray-800">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6">
                Ready to Start Your <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">Project?</span>
              </h2>
              <p className="text-xl text-gray-600 dark:text-gray-300 mb-8 leading-relaxed">
                Fill out the form and we'll get back to you within 24 hours with a 
                detailed proposal tailored to your specific needs.
              </p>

              <div className="space-y-6">
                <div className="flex items-center">
                  <div className="w-2 h-2 bg-blue-500 rounded-full mr-4"></div>
                  <span className="text-gray-600 dark:text-gray-300">Free consultation and project assessment</span>
                </div>
                <div className="flex items-center">
                  <div className="w-2 h-2 bg-purple-500 rounded-full mr-4"></div>
                  <span className="text-gray-600 dark:text-gray-300">Detailed timeline and cost breakdown</span>
                </div>
                <div className="flex items-center">
                  <div className="w-2 h-2 bg-cyan-500 rounded-full mr-4"></div>
                  <span className="text-gray-600 dark:text-gray-300">No obligation, pressure-free discussion</span>
                </div>
              </div>

              <div className="mt-12 p-6 bg-gradient-to-r from-blue-50 to-purple-50 dark:from-blue-900/20 dark:to-purple-900/20 rounded-2xl border border-blue-200 dark:border-blue-800">
                <div className="flex items-center mb-4">
                  <ClockIcon className="w-6 h-6 text-blue-600 mr-3" />
                  <span className="font-semibold text-gray-900 dark:text-white">Response Time</span>
                </div>
                <p className="text-gray-600 dark:text-gray-300">
                  We typically respond to all inquiries within <strong>4-6 hours during business hours</strong> 
                  and within <strong>24 hours on weekends</strong>.
                </p>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="bg-white dark:bg-gray-900 p-8 rounded-2xl border border-gray-200 dark:border-gray-700 shadow-lg"
            >
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-800 text-gray-900 dark:text-white focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                      placeholder="Enter your full name"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-800 text-gray-900 dark:text-white focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                      placeholder="Enter your email"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                      Phone Number
                    </label>
                    <input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-800 text-gray-900 dark:text-white focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                      placeholder="Enter your phone"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                      Company
                    </label>
                    <input
                      type="text"
                      name="company"
                      value={formData.company}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-800 text-gray-900 dark:text-white focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                      placeholder="Your company name"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                      Service Interested In
                    </label>
                    <select
                      name="service"
                      value={formData.service}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-800 text-gray-900 dark:text-white focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                    >
                      <option value="">Select a service</option>
                      <option value="web-development">Web Development</option>
                      <option value="app-development">App Development</option>
                      <option value="digital-marketing">Digital Marketing</option>
                      <option value="data-analytics">Data Analytics</option>
                      <option value="seo-optimization">SEO Optimization</option>
                      <option value="consulting">Consulting</option>
                    </select>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                      Project Timeline
                    </label>
                    <select
                      name="timeline"
                      value={formData.timeline}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-800 text-gray-900 dark:text-white focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                    >
                      <option value="">Select timeline</option>
                      <option value="asap">As soon as possible</option>
                      <option value="1-3months">1-3 months</option>
                      <option value="3-6months">3-6 months</option>
                      <option value="6months+">6+ months</option>
                      <option value="exploring">Just exploring options</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                    Project Details *
                  </label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    required
                    rows={6}
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-800 text-gray-900 dark:text-white focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all resize-none"
                    placeholder="Tell us about your project, goals, timeline, and any specific requirements..."
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                    Preferred Contact Method
                  </label>
                  <div className="flex gap-4">
                    <label className="flex items-center">
                      <input
                        type="radio"
                        name="preferredContact"
                        value="email"
                        checked={formData.preferredContact === 'email'}
                        onChange={handleInputChange}
                        className="mr-2 text-blue-500"
                      />
                      <span className="text-gray-700 dark:text-gray-300">Email</span>
                    </label>
                    <label className="flex items-center">
                      <input
                        type="radio"
                        name="preferredContact"
                        value="phone"
                        checked={formData.preferredContact === 'phone'}
                        onChange={handleInputChange}
                        className="mr-2 text-blue-500"
                      />
                      <span className="text-gray-700 dark:text-gray-300">Phone</span>
                    </label>
                  </div>
                </div>

                <motion.button
                  type="submit"
                  whileHover={{ 
                    scale: 1.02,
                    boxShadow: "0 20px 40px rgba(59, 130, 246, 0.3)"
                  }}
                  whileTap={{ scale: 0.98 }}
                  className="w-full px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold rounded-full hover:from-purple-600 hover:to-blue-600 transition-all duration-300 shadow-lg flex items-center justify-center"
                >
                  Send Message
                  <PaperAirplaneIcon className="w-5 h-5 ml-2" />
                </motion.button>
              </form>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Office Locations */}
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
              Our <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">Locations</span>
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
              We have offices across India to serve you better
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {offices.map((office, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.2 }}
                whileHover={{ y: -10, scale: 1.02 }}
                className="bg-white dark:bg-gray-800 rounded-2xl overflow-hidden border border-gray-200 dark:border-gray-700 hover:shadow-2xl transition-all duration-300 group"
              >
                <div className="h-48 bg-gradient-to-br from-blue-500 via-purple-600 to-indigo-600 flex items-center justify-center relative overflow-hidden">
                  <div className="absolute inset-0 bg-black/20"></div>
                  <div className="relative z-10 text-center">
                    <MapPinIcon className="w-12 h-12 text-white/80 mx-auto mb-2" />
                    <h3 className="text-2xl font-bold text-white">{office.city} Office</h3>
                  </div>
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent transform -translate-x-full group-hover:translate-x-full transition-transform duration-1000"></div>
                </div>
                <div className="p-8">
                  <div className="space-y-6">
                    <div className="flex items-start">
                      <div className="w-10 h-10 bg-blue-100 dark:bg-blue-900/30 rounded-lg flex items-center justify-center mr-4 flex-shrink-0">
                        <MapPinIcon className="w-5 h-5 text-blue-600 dark:text-blue-400" />
                      </div>
                      <div>
                        <h4 className="font-semibold text-gray-900 dark:text-white mb-1">Address</h4>
                        <span className="text-gray-600 dark:text-gray-300 leading-relaxed">{office.address}</span>
                      </div>
                    </div>
                    <div className="flex items-center">
                      <div className="w-10 h-10 bg-green-100 dark:bg-green-900/30 rounded-lg flex items-center justify-center mr-4 flex-shrink-0">
                        <PhoneIcon className="w-5 h-5 text-green-600 dark:text-green-400" />
                      </div>
                      <div>
                        <h4 className="font-semibold text-gray-900 dark:text-white mb-1">Phone</h4>
                        <a href={`tel:${office.phone}`} className="text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors">
                          {office.phone}
                        </a>
                      </div>
                    </div>
                    <div className="flex items-center">
                      <div className="w-10 h-10 bg-purple-100 dark:bg-purple-900/30 rounded-lg flex items-center justify-center mr-4 flex-shrink-0">
                        <EnvelopeIcon className="w-5 h-5 text-purple-600 dark:text-purple-400" />
                      </div>
                      <div>
                        <h4 className="font-semibold text-gray-900 dark:text-white mb-1">Email</h4>
                        <a href={`mailto:${office.email}`} className="text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors">
                          {office.email}
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
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
              Frequently Asked <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">Questions</span>
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
              Got questions? We've got answers to help you get started
            </p>
          </motion.div>

          <div className="max-w-4xl mx-auto space-y-6">
            {faqs.map((faq, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className="bg-white dark:bg-gray-900 p-6 rounded-xl border border-gray-200 dark:border-gray-700 hover:shadow-md transition-shadow"
              >
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-3">
                  {faq.question}
                </h3>
                <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                  {faq.answer}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
