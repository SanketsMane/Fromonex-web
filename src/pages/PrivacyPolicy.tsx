import { motion } from 'framer-motion';
import { Shield, Lock, Eye, Users, Database, FileText, Phone, Mail, MapPin } from 'lucide-react';
import { Helmet } from 'react-helmet-async';

const PrivacyPolicy = () => {
  const sections = [
    {
      title: "Information We Collect",
      icon: Database,
      content: [
        {
          subtitle: "Personal Information:",
          details: "Name, email address, phone number, company name, job title, billing details."
        },
        {
          subtitle: "Technical Information:",
          details: "IP address, browser type, operating system, device identifiers, usage data."
        },
        {
          subtitle: "Business Information:",
          details: "Project details, communication records, requirements shared with us."
        },
        {
          subtitle: "Cookies & Tracking Data:",
          details: "Data collected via cookies, analytics tools, and similar technologies."
        }
      ]
    },
    {
      title: "How We Use Your Information",
      icon: Eye,
      content: [
        "Delivering and improving our software development services",
        "Providing technical support and responding to inquiries",
        "Processing transactions and billing",
        "Sending updates, promotional content, and service notifications (with your consent)",
        "Enhancing security, detecting fraud, and complying with legal obligations"
      ]
    },
    {
      title: "Sharing and Disclosure",
      icon: Users,
      content: [
        {
          subtitle: "Service Providers:",
          details: "Hosting, analytics, payment processors, and customer support tools"
        },
        {
          subtitle: "Business Partners:",
          details: "When collaborating on a project with your consent"
        },
        {
          subtitle: "Legal Authorities:",
          details: "If required by law or to protect our rights"
        },
        {
          subtitle: "Corporate Transactions:",
          details: "In case of a merger, acquisition, or asset sale"
        }
      ]
    },
    {
      title: "Your Rights",
      icon: Shield,
      content: [
        "Access, update, or delete your personal data",
        "Withdraw consent to processing",
        "Request data portability",
        "Restrict or object to processing under certain circumstances"
      ]
    }
  ];

  const contactInfo = {
    grievanceOfficer: "Nitin",
    email: "contact@formonex.com",
    phone: "+91 95355 08952",
    addresses: [
      {
        title: "Bengaluru Office",
        address: "ClayWorks Mini Forest, 3rd Floor, Site No. 74, 15th Cross Road, JP Nagar 3rd Phase, Sarakki Industrial Area, Bengaluru, Karnataka – 560078"
      },
      {
        title: "Pune Office",
        address: "Office No. 812, Global Business Hub, EON Free Zone, Kharadi, Pune, Maharashtra – 411014"
      }
    ]
  };

  return (
    <div className="pt-16 overflow-hidden">
      <Helmet>
        <title>Privacy Policy - Formonex Solutions Pvt Ltd</title>
        <meta name="description" content="Privacy Policy for Formonex Solutions Pvt Ltd. Learn how we collect, use, and protect your personal data." />
        <meta name="keywords" content="Privacy Policy, Data Protection, Formonex, Personal Data, GDPR" />
        <meta name="robots" content="index, follow" />
      </Helmet>

      {/* Hero Section */}
      <section className="relative min-h-[60vh] flex items-center bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900 text-white overflow-hidden">
        {/* Animated Background Elements */}
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(59,130,246,0.3),transparent_50%)]"></div>
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_80%,rgba(16,185,129,0.3),transparent_50%)]"></div>
        </div>

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
          className="absolute top-20 left-20 w-32 h-32 bg-green-500/10 rounded-full blur-xl"
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
          className="absolute bottom-20 right-20 w-48 h-48 bg-blue-500/10 rounded-full blur-2xl"
        />

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="text-center max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="mb-8"
            >
              <div className="inline-flex items-center justify-center w-20 h-20 bg-green-500/20 rounded-full mb-6">
                <Lock className="w-10 h-10 text-green-400" />
              </div>
              <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-white via-blue-200 to-green-200 bg-clip-text text-transparent">
                Privacy Policy
              </h1>
              <p className="text-xl md:text-2xl text-gray-300 leading-relaxed">
                Your privacy is important to us. Learn how we protect and use your data.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Introduction */}
      <section className="section-padding bg-white dark:bg-gray-900">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="card p-8 md:p-12"
          >
            <p className="text-lg text-gray-700 dark:text-gray-300 mb-6 leading-relaxed">
              Formonex Solutions Pvt Ltd respects your privacy and is committed to protecting the personal data you share with us. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you use our websites, applications, products, and services.
            </p>
            <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed">
              By using our services, you agree to the practices described in this Privacy Policy. If you do not agree, please discontinue use of our services.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Main Content Sections */}
      <section className="section-padding bg-gray-50 dark:bg-gray-800">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-12">
            {sections.map((section, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="card p-8 md:p-12"
              >
                <div className="flex items-center mb-8">
                  <div className="inline-flex items-center justify-center w-12 h-12 bg-primary-100 dark:bg-primary-900/30 rounded-lg mr-4">
                    <section.icon className="w-6 h-6 text-primary-600 dark:text-primary-400" />
                  </div>
                  <h2 className="text-2xl md:text-3xl font-bold text-gray-900 dark:text-white">
                    {index + 1}. {section.title}
                  </h2>
                </div>
                
                <div className="space-y-4">
                  {section.content.map((item, itemIndex) => (
                    <div key={itemIndex} className="flex items-start">
                      <div className="w-2 h-2 bg-primary-500 rounded-full mt-3 mr-4 flex-shrink-0"></div>
                      <div className="text-gray-700 dark:text-gray-300">
                        {typeof item === 'string' ? (
                          <p className="text-lg leading-relaxed">{item}</p>
                        ) : (
                          <div>
                            <span className="font-semibold text-gray-900 dark:text-white">
                              {item.subtitle}
                            </span>
                            <span className="ml-2 text-lg leading-relaxed">
                              {item.details}
                            </span>
                          </div>
                        )}
                      </div>
                    </div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Additional Sections */}
      <section className="section-padding bg-white dark:bg-gray-900">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-8">
            {/* Data Retention */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="card p-8"
            >
              <div className="flex items-center mb-6">
                <FileText className="w-8 h-8 text-primary-600 dark:text-primary-400 mr-3" />
                <h3 className="text-xl font-bold text-gray-900 dark:text-white">
                  4. Data Retention
                </h3>
              </div>
              <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                We retain personal data only for as long as necessary to fulfill the purposes outlined in this policy or as required by applicable law.
              </p>
            </motion.div>

            {/* Security Measures */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="card p-8"
            >
              <div className="flex items-center mb-6">
                <Shield className="w-8 h-8 text-primary-600 dark:text-primary-400 mr-3" />
                <h3 className="text-xl font-bold text-gray-900 dark:text-white">
                  5. Security Measures
                </h3>
              </div>
              <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                We use industry-standard measures like encryption, firewalls, and access controls to protect your data. While we strive to safeguard your information, no method of transmission over the Internet is 100% secure.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Contact Rights */}
      <section className="section-padding bg-gray-50 dark:bg-gray-800">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="card p-8 md:p-12"
          >
            <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
              Exercise Your Rights
            </h3>
            <p className="text-lg text-gray-700 dark:text-gray-300 mb-6 leading-relaxed">
              To exercise your data protection rights, email us at{' '}
              <a 
                href="mailto:contact@formonex.com" 
                className="text-primary-600 dark:text-primary-400 hover:underline font-semibold"
              >
                contact@formonex.com
              </a>
            </p>
          </motion.div>
        </div>
      </section>

      {/* Grievance Officer & Contact */}
      <section className="section-padding bg-white dark:bg-gray-900">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
              Contact Information
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-400">
              Reach out to us for any privacy-related concerns
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {/* Grievance Officer */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="card p-8 text-center"
            >
              <div className="inline-flex items-center justify-center w-16 h-16 bg-primary-100 dark:bg-primary-900/30 rounded-full mb-6">
                <Users className="w-8 h-8 text-primary-600 dark:text-primary-400" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4">
                Grievance Officer
              </h3>
              <p className="text-lg font-semibold text-gray-700 dark:text-gray-300 mb-2">
                {contactInfo.grievanceOfficer}
              </p>
              <div className="space-y-2">
                <div className="flex items-center justify-center text-gray-600 dark:text-gray-400">
                  <Mail className="w-4 h-4 mr-2" />
                  <a href={`mailto:${contactInfo.email}`} className="hover:text-primary-600 dark:hover:text-primary-400">
                    {contactInfo.email}
                  </a>
                </div>
                <div className="flex items-center justify-center text-gray-600 dark:text-gray-400">
                  <Phone className="w-4 h-4 mr-2" />
                  <a href={`tel:${contactInfo.phone}`} className="hover:text-primary-600 dark:hover:text-primary-400">
                    {contactInfo.phone}
                  </a>
                </div>
              </div>
            </motion.div>

            {/* Office Addresses */}
            {contactInfo.addresses.map((office, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: (index + 1) * 0.1 }}
                viewport={{ once: true }}
                className="card p-8"
              >
                <div className="inline-flex items-center justify-center w-16 h-16 bg-primary-100 dark:bg-primary-900/30 rounded-full mb-6">
                  <MapPin className="w-8 h-8 text-primary-600 dark:text-primary-400" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4">
                  {office.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
                  {office.address}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Additional Policies */}
      <section className="section-padding bg-gray-50 dark:bg-gray-800">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-8">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="card p-8"
            >
              <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4">
                7. Cookies and Tracking
              </h3>
              <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                We use cookies and tracking technologies to improve user experience and analyze site performance. You may disable cookies in your browser settings, but some features may not function properly.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="card p-8"
            >
              <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4">
                9. Third-Party Links
              </h3>
              <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                Our websites and applications may contain links to third-party websites. We are not responsible for their privacy practices and encourage you to read their privacy policies.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.1 }}
              viewport={{ once: true }}
              className="card p-8"
            >
              <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4">
                10. Policy Updates
              </h3>
              <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                We may update this Privacy Policy periodically. Changes will be posted here with an updated "Last Updated" date.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.1 }}
              viewport={{ once: true }}
              className="card p-8"
            >
              <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4">
                Last Updated
              </h3>
              <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                This Privacy Policy was last updated on <strong>August 2025</strong>. We encourage you to review this page periodically for any changes.
              </p>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default PrivacyPolicy;
