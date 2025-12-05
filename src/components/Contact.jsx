import { useState } from 'react';
import { motion } from 'framer-motion';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    project: ''
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission - you can integrate with your backend or email service
    console.log('Form submitted:', formData);
    alert('Thank you! We will get back to you soon.');
    setFormData({ name: '', email: '', project: '' });
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <section id="contact" className="py-20 bg-black relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-blue-600/5 rounded-full blur-3xl"></div>
      
      <motion.div 
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.6 }}
        className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10"
      >
        <div className="max-w-4xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-10">
            <div className="inline-block mb-4">
              <span className="text-xs text-gray-400 font-semibold uppercase tracking-[0.2em]">GET IN TOUCH</span>
            </div>
            
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-[1.1] text-white">
              Let's Build Something <span className="text-gradient">Great</span>
            </h2>
            
            <p className="text-lg text-gray-400">
              Tell us what you want to create — a website, app, or a fully custom system — and we'll help you bring it to life.
            </p>
          </div>

          {/* Contact Form */}
          <form onSubmit={handleSubmit} className="bg-black/20 backdrop-blur-sm border border-white/5 rounded-3xl p-8">
            <div className="space-y-6">
              {/* Name Input */}
              <div>
                <label htmlFor="name" className="block text-sm font-semibold mb-2">
                  Your Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-5 py-3 bg-black/40 border border-white/10 rounded-xl focus:outline-none focus:border-blue-500/50 transition-all text-white placeholder-gray-500"
                  placeholder="John Doe"
                />
              </div>

              {/* Email Input */}
              <div>
                <label htmlFor="email" className="block text-sm font-semibold mb-2">
                  Email Address
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-5 py-3 bg-black/40 border border-white/10 rounded-xl focus:outline-none focus:border-blue-500/50 transition-all text-white placeholder-gray-500"
                  placeholder="john@example.com"
                />
              </div>

              {/* Project Description */}
              <div>
                <label htmlFor="project" className="block text-sm font-semibold mb-2">
                  Tell Us About Your Project
                </label>
                <textarea
                  id="project"
                  name="project"
                  value={formData.project}
                  onChange={handleChange}
                  required
                  rows={5}
                  className="w-full px-5 py-3 bg-black/40 border border-white/10 rounded-xl focus:outline-none focus:border-blue-500/50 transition-all text-white resize-none placeholder-gray-500"
                  placeholder="Describe your project, goals, and timeline..."
                />
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                className="w-full px-8 py-3.5 bg-blue-600 text-white hover:bg-blue-700 rounded-xl text-base font-semibold transition-all hover:scale-[1.02] glow-blue-strong"
              >
                Get a Free Quote
              </button>
            </div>
          </form>

          {/* Contact Info */}
          <div className="grid md:grid-cols-3 gap-4 mt-10">
            <div className="text-center p-6 bg-black/20 backdrop-blur-sm border border-white/5 rounded-2xl hover:bg-black/30 hover:border-white/10 transition-all">
              <svg className="w-10 h-10 mx-auto mb-3 text-blue-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
              <div className="text-sm text-gray-400 mb-2 uppercase tracking-wider">Email</div>
              <div className="font-semibold text-white">hello@agency.com</div>
            </div>
            <div className="text-center p-6 bg-blue-500/5 border border-blue-500/20 rounded-2xl hover:bg-blue-500/10 hover:border-blue-500/40 transition-all">
              <svg className="w-10 h-10 mx-auto mb-3 text-blue-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
              </svg>
              <div className="text-sm text-gray-400 mb-2 uppercase tracking-wider">Phone</div>
              <div className="font-semibold text-white">+1 (555) 123-4567</div>
            </div>
            <div className="text-center p-6 bg-blue-500/5 border border-blue-500/20 rounded-2xl hover:bg-blue-500/10 hover:border-blue-500/40 transition-all">
              <svg className="w-10 h-10 mx-auto mb-3 text-blue-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              <div className="text-sm text-gray-400 mb-2 uppercase tracking-wider">Response Time</div>
              <div className="font-semibold text-white">Within 24 hours</div>
            </div>
          </div>
        </div>
      </motion.div>
    </section>
  );
};

export default Contact;
