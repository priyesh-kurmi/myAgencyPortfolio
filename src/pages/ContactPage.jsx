import { useState } from 'react';
import { motion } from 'framer-motion';

const ContactPage = () => {
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
    <div className="min-h-screen bg-black pt-24 pb-20">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Page Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16 max-w-4xl mx-auto"
        >
          <div className="inline-block mb-4">
            <span className="text-xs text-gray-400 font-semibold uppercase tracking-[0.2em]">GET IN TOUCH</span>
          </div>
          
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-[1.1] text-white">
            Let's Build Something <span className="text-gradient">Great</span>
          </h1>
          
          <p className="text-lg text-gray-400">
            Tell us what you want to create — a website, app, or a fully custom system — and we'll help you bring it to life.
          </p>
        </motion.div>

        {/* Contact Info and Form Layout */}
        <div className="grid lg:grid-cols-5 gap-12 items-start">
          {/* Contact Info - Left Side */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="lg:col-span-2 space-y-8"
          >
            <div>
              <div className="text-sm text-gray-500 mb-2 uppercase tracking-wider">Email</div>
              <div className="text-lg font-semibold text-white">hello@agencydp.com</div>
            </div>
            <div>
              <div className="text-sm text-gray-500 mb-2 uppercase tracking-wider">Phone</div>
              <div className="text-lg font-semibold text-white">+1 (555) 123-4567</div>
            </div>
            <div>
              <div className="text-sm text-gray-500 mb-2 uppercase tracking-wider">Response Time</div>
              <div className="text-lg font-semibold text-white">Within 24 hours</div>
            </div>
          </motion.div>

          {/* Contact Form - Right Side */}
          <motion.form
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            onSubmit={handleSubmit}
            className="lg:col-span-3 bg-black/20 backdrop-blur-sm border border-white/5 rounded-3xl p-8"
          >
            <div className="space-y-6">
              {/* Name Input */}
              <div>
                <label htmlFor="name" className="block text-sm font-semibold mb-2 text-white">
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
                <label htmlFor="email" className="block text-sm font-semibold mb-2 text-white">
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
                <label htmlFor="project" className="block text-sm font-semibold mb-2 text-white">
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
          </motion.form>
        </div>
      </div>
    </div>
  );
};

export default ContactPage;
