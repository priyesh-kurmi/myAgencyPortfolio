import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

const Pricing = () => {
  const pricingPlans = [
    {
      name: 'Project-Based',
      tagline: 'One-time project delivery',
      description: 'We build your project and hand it over to you',
      features: [
        'Custom Website/App Development',
        'Complete Source Code Handover',
        'Mobile Responsive Design',
        'Database Setup & Integration',
        'Performance Optimization',
        'Testing & Quality Assurance',
        '2 Weeks Post-Launch Support',
        'Documentation & Training',
        'Full Deployment by Our Team',
        'One-time Payment',
        '& Many More Based on Your Needs'
      ],
      popular: false
    },
    {
      name: 'Managed Service',
      tagline: 'Ongoing support & management',
      description: 'We build, manage, and maintain everything for you',
      features: [
        'Everything in Build & Done',
        'Continuous Maintenance',
        'Regular Updates & Improvements',
        'Monthly Performance Reports',
        'Priority Support 24/7',
        'Content Updates',
        'Security Monitoring',
        'Hosting & Domain Management',
        'Monthly Backups',
        'Flexible Monthly Subscription',
        '& Much More Custom to Your Business'
      ],
      popular: true
    }
  ];

  return (
    <section id="pricing" className="py-10 bg-black relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-blue-600/5 rounded-full blur-3xl"></div>
      
      <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16">
          <motion.div 
            initial={{ opacity: 0, y: -30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false, amount: 0.3 }}
            transition={{ duration: 0.5 }}
            className="inline-block mb-4"
          >
            <span className="text-xs text-gray-400 font-semibold uppercase tracking-[0.2em]">PRICING</span>
          </motion.div>
          
          <motion.h2 
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: false, amount: 0.3 }}
            transition={{ duration: 0.7 }}
            className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-[1.1] text-white"
          >
            Choose Your <span className="text-gradient">Plan</span>
          </motion.h2>
          
          <motion.p 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false, amount: 0.3 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-lg text-gray-400 max-w-3xl mx-auto leading-relaxed"
          >
            Select the package that best fits your business needs. Get in touch for custom quotes.
          </motion.p>
        </div>

        {/* Pricing Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {pricingPlans.map((plan, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: false, amount: 0.2 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="relative rounded-2xl overflow-hidden border-2 border-blue-500/30"
            >
              {/* Popular Badge */}
              {plan.popular && (
                <div className="absolute top-0 right-0 bg-blue-600 text-white text-xs font-bold px-4 py-1.5 rounded-bl-2xl">
                  MOST POPULAR
                </div>
              )}

              {/* Card content */}
              <div className="relative bg-gray-900 p-8 h-full">
                {/* Plan Header */}
                <div className="mb-8">
                  <h3 className="text-2xl font-bold text-white mb-2">{plan.name}</h3>
                  <p className="text-sm text-blue-400 font-medium mb-3">{plan.tagline}</p>
                  <p className="text-sm text-gray-400 leading-relaxed">{plan.description}</p>
                </div>

                {/* Features List */}
                <ul className="space-y-4 mb-8">
                  {plan.features.map((feature, idx) => (
                    <li key={idx} className="flex items-start gap-3">
                      <svg className="w-5 h-5 text-blue-500 flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      <span className="text-sm text-gray-300">{feature}</span>
                    </li>
                  ))}
                </ul>

                {/* CTA Button */}
                <Link to="/schedule" className="block">
                  <button className={`w-full py-3 rounded-lg font-semibold transition-colors ${
                    plan.popular
                      ? 'bg-blue-600 text-white hover:bg-blue-700'
                      : 'bg-white/10 text-white border border-white/20 hover:bg-white/20'
                  }`}>
                    Get Started
                  </button>
                </Link>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Bottom CTA */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, amount: 0.3 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="text-center mt-16"
        >
          <p className="text-gray-400 mb-4">Need a custom solution?</p>
          <Link to="/schedule">
            <button className="px-8 py-3 bg-transparent border-2 border-blue-500 text-blue-500 hover:bg-blue-500 hover:text-white rounded-lg transition-all font-semibold">
              Contact Us for Custom Quote
            </button>
          </Link>
        </motion.div>
      </div>
    </section>
  );
};

export default Pricing;
