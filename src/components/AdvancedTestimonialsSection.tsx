import React, { useRef, useState } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { 
  StarIcon,
  SparklesIcon,
  HeartIcon
} from '@heroicons/react/24/solid';
import { 
  ChevronLeftIcon,
  ChevronRightIcon,
  ChatBubbleLeftEllipsisIcon 
} from '@heroicons/react/24/outline';

const AdvancedTestimonialsSection: React.FC = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"]
  });

  const y = useTransform(scrollYProgress, [0, 1], [100, -100]);
  const [currentTestimonial, setCurrentTestimonial] = useState(0);

  const testimonials = [
    {
      name: 'Sarah Johnson',
      position: 'CEO, TechStart Inc.',
      company: 'TechStart',
      avatar: '👩‍💼',
      rating: 5,
      text: 'Formonex transformed our digital presence completely. Their modern approach and 3D elements made our website stand out in the competitive market.',
      gradient: 'from-blue-400 to-purple-400',
      bgGradient: 'from-blue-400/20 to-purple-400/20'
    },
    {
      name: 'Michael Chen',
      position: 'CTO, InnovateLab',
      company: 'InnovateLab',
      avatar: '👨‍💻',
      rating: 5,
      text: 'The team delivered an exceptional mobile app with cutting-edge features. Their attention to detail and technical expertise is unmatched.',
      gradient: 'from-green-400 to-teal-400',
      bgGradient: 'from-green-400/20 to-teal-400/20'
    },
    {
      name: 'Emily Rodriguez',
      position: 'Marketing Director, GrowthCo',
      company: 'GrowthCo',
      avatar: '👩‍🎨',
      rating: 5,
      text: 'Our SEO rankings improved dramatically after working with Formonex. Their data-driven approach and modern techniques are incredible.',
      gradient: 'from-pink-400 to-orange-400',
      bgGradient: 'from-pink-400/20 to-orange-400/20'
    },
    {
      name: 'David Park',
      position: 'Founder, StartupHub',
      company: 'StartupHub',
      avatar: '👨‍🚀',
      rating: 5,
      text: 'The analytics dashboard they built helps us make better business decisions. Real-time insights and beautiful visualizations.',
      gradient: 'from-purple-400 to-pink-400',
      bgGradient: 'from-purple-400/20 to-pink-400/20'
    }
  ];

  const nextTestimonial = () => {
    setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentTestimonial((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  return (
    <section ref={sectionRef} className="relative py-32 overflow-hidden bg-gradient-to-br from-slate-900 via-indigo-900 to-slate-900">
      {/* Animated Background */}
      <div className="absolute inset-0">
        <motion.div
          style={{ y }}
          className="absolute top-20 left-1/4 w-96 h-96 bg-gradient-to-r from-purple-400/10 to-pink-400/10 rounded-full blur-3xl"
        />
        <motion.div
          style={{ y: useTransform(scrollYProgress, [0, 1], [-50, 150]) }}
          className="absolute bottom-20 right-1/4 w-80 h-80 bg-gradient-to-r from-blue-400/10 to-teal-400/10 rounded-full blur-3xl"
        />
      </div>

      {/* Floating Hearts */}
      <motion.div
        animate={{ 
          y: [0, -20, 0],
          rotate: [0, 10, -10, 0],
          scale: [1, 1.1, 1]
        }}
        transition={{ 
          duration: 6,
          repeat: Infinity,
          ease: "easeInOut"
        }}
        className="absolute top-1/4 right-1/4 text-pink-400/30 text-4xl"
      >
        <HeartIcon className="w-8 h-8" />
      </motion.div>
      <motion.div
        animate={{ 
          y: [0, 15, 0],
          rotate: [0, -15, 15, 0],
          scale: [1, 0.9, 1]
        }}
        transition={{ 
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut"
        }}
        className="absolute bottom-1/3 left-1/4 text-blue-400/30 text-3xl"
      >
        <SparklesIcon className="w-6 h-6" />
      </motion.div>

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
            <HeartIcon className="w-5 h-5 mr-2 text-pink-400" />
            Client Testimonials
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-5xl md:text-7xl font-bold mb-8"
          >
            <span className="bg-gradient-to-r from-white via-blue-100 to-purple-100 bg-clip-text text-transparent">
              What Our Clients
            </span>
            <br />
            <span className="bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
              Say About Us
            </span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed"
          >
            Don't just take our word for it. Hear from the businesses we've helped transform 
            through innovative digital solutions.
          </motion.p>
        </motion.div>

        {/* Main Testimonial */}
        <motion.div
          key={currentTestimonial}
          initial={{ opacity: 0, scale: 0.9, y: 50 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="relative max-w-4xl mx-auto mb-16"
        >
          <div className={`absolute inset-0 bg-gradient-to-r ${testimonials[currentTestimonial].bgGradient} rounded-3xl blur-2xl`} />
          <div className="relative p-12 rounded-3xl bg-white/10 backdrop-blur-lg border border-white/20">
            <div className="text-center">
              {/* Quote Icon */}
              <motion.div
                animate={{ rotate: [0, 5, -5, 0] }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                className={`inline-flex items-center justify-center w-20 h-20 rounded-full bg-gradient-to-r ${testimonials[currentTestimonial].gradient} mb-8`}
              >
                <ChatBubbleLeftEllipsisIcon className="w-10 h-10 text-white" />
              </motion.div>

              {/* Stars */}
              <div className="flex justify-center mb-6">
                {[...Array(testimonials[currentTestimonial].rating)].map((_, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, scale: 0 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.3, delay: i * 0.1 }}
                  >
                    <StarIcon className="w-6 h-6 text-yellow-400 mx-1" />
                  </motion.div>
                ))}
              </div>

              {/* Testimonial Text */}
              <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.8, delay: 0.3 }}
                className="text-2xl text-white mb-8 leading-relaxed italic"
              >
                "{testimonials[currentTestimonial].text}"
              </motion.p>

              {/* Author */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.5 }}
                className="flex items-center justify-center"
              >
                <div className="text-4xl mr-4">
                  {testimonials[currentTestimonial].avatar}
                </div>
                <div className="text-left">
                  <h4 className="text-xl font-bold text-white">
                    {testimonials[currentTestimonial].name}
                  </h4>
                  <p className="text-gray-300">
                    {testimonials[currentTestimonial].position}
                  </p>
                  <p className="text-sm text-gray-400">
                    {testimonials[currentTestimonial].company}
                  </p>
                </div>
              </motion.div>
            </div>
          </div>
        </motion.div>

        {/* Navigation */}
        <div className="flex items-center justify-center space-x-8">
          <motion.button
            onClick={prevTestimonial}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            className="p-4 rounded-full bg-white/10 backdrop-blur-lg border border-white/20 text-white hover:border-white/40 transition-all duration-300"
          >
            <ChevronLeftIcon className="w-6 h-6" />
          </motion.button>

          {/* Dots Indicator */}
          <div className="flex space-x-3">
            {testimonials.map((_, index) => (
              <motion.button
                key={index}
                onClick={() => setCurrentTestimonial(index)}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  index === currentTestimonial 
                    ? 'bg-gradient-to-r from-blue-400 to-purple-400' 
                    : 'bg-white/20'
                }`}
                whileHover={{ scale: 1.2 }}
                whileTap={{ scale: 0.8 }}
              />
            ))}
          </div>

          <motion.button
            onClick={nextTestimonial}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            className="p-4 rounded-full bg-white/10 backdrop-blur-lg border border-white/20 text-white hover:border-white/40 transition-all duration-300"
          >
            <ChevronRightIcon className="w-6 h-6" />
          </motion.button>
        </div>

        {/* Bottom Stats */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="grid grid-cols-3 gap-8 mt-20 max-w-2xl mx-auto"
        >
          {[
            { number: '500+', label: 'Happy Clients' },
            { number: '99%', label: 'Satisfaction Rate' },
            { number: '5-Star', label: 'Average Rating' }
          ].map((stat, index) => (
            <div key={index} className="text-center">
              <div className="text-3xl font-bold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent mb-2">
                {stat.number}
              </div>
              <div className="text-gray-300 text-sm">{stat.label}</div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default AdvancedTestimonialsSection;
