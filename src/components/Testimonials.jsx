import { motion } from 'framer-motion';

const Testimonials = () => {
  const testimonials = [
    {
      quote: "They delivered our website in record time — clean, fast, and perfectly aligned with our brand.",
      author: "Client Name",
      role: "CEO, Tech Startup"
    },
    {
      quote: "The app they built transformed our operations. Extremely professional team.",
      author: "Client Name",
      role: "Founder, E-Commerce"
    },
    {
      quote: "Outstanding quality and communication throughout the project. Highly recommended!",
      author: "Client Name",
      role: "Product Manager, SaaS"
    }
  ];

  return (
    <section className="py-20 bg-zinc-950 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-blue-600/10 rounded-full blur-3xl"></div>

      <motion.div 
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.6 }}
        className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8"
      >
        {/* Section Header */}
        <div className="text-center mb-12">
          <div className="inline-block mb-4">
            <span className="text-xs text-gray-400 font-semibold uppercase tracking-[0.2em]">CLIENT REVIEWS</span>
          </div>
          
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-[1.1] text-white">
            What <span className="text-gradient">Clients Say</span>
          </h2>
          
          <p className="text-lg text-gray-400 max-w-3xl mx-auto leading-relaxed">
            Don't just take our word for it — hear from businesses we've helped grow
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="bg-black/20 backdrop-blur-sm border border-white/5 rounded-3xl p-6 hover:border-white/10 hover:bg-black/30 transition-all duration-300 hover:-translate-y-2"
            >
              {/* Stars */}
              <div className="flex gap-1 mb-5">
                {[...Array(5)].map((_, i) => (
                  <svg key={i} className="w-5 h-5 text-blue-400" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>

              {/* Quote */}
              <p className="text-base text-gray-300 mb-5 leading-relaxed">
                "{testimonial.quote}"
              </p>

              {/* Author */}
              <div className="border-t border-white/5 pt-4">
                <div className="font-semibold text-white text-lg mb-1">{testimonial.author}</div>
                <div className="text-sm text-gray-400">{testimonial.role}</div>
              </div>
            </div>
          ))}
        </div>

        {/* Note for adding more testimonials */}
        <div className="text-center mt-12 text-gray-500 italic">
          Add more testimonials as you get real clients
        </div>
      </motion.div>
    </section>
  );
};

export default Testimonials;
