import { motion } from 'framer-motion';

const WhyChooseUs = () => {
  const benefits = [
    'Custom-built solutions',
    'Modern tech stack',
    'Pixel-perfect design',
    'Fast delivery',
    'Clear communication',
    'Scalable architecture'
  ];

  return (
    <section className="py-20 bg-black relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-blue-600/10 rounded-full blur-3xl"></div>

      <motion.div 
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.6 }}
        className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8"
      >
        <div className="text-center mb-12">
          <div className="inline-block mb-4">
            <span className="text-xs text-gray-400 font-semibold uppercase tracking-[0.2em]">WHY US</span>
          </div>
          
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-8 leading-[1.1] text-white">
            Built for <span className="text-gradient">Quality</span>.<br />
            Designed for <span className="text-gradient">Speed</span>.<br />
            Delivered with <span className="text-gradient">Honesty</span>.
          </h2>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
          {benefits.map((benefit, index) => (
            <div key={index} className="bg-black/20 backdrop-blur-sm border border-white/5 rounded-2xl p-6 hover:bg-black/30 hover:border-white/10 transition-all group flex">
              <div className="flex items-center gap-4 w-full">
                <div className="flex-shrink-0 w-8 h-8 rounded-full bg-blue-500/10 flex items-center justify-center group-hover:bg-blue-500/20 transition-all">
                  <svg className="w-5 h-5 text-blue-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <span className="text-base text-gray-300 group-hover:text-white transition-colors">{benefit}</span>
              </div>
            </div>
          ))}
        </div>

        <div className="max-w-3xl mx-auto bg-black/20 backdrop-blur-sm border border-white/5 rounded-3xl p-8 text-center">
          <p className="text-xl font-semibold mb-2 text-white">We're not a big agency.</p>
          <p className="text-lg text-gray-400">
            We're a partner who actually cares about your product.
          </p>
        </div>
      </motion.div>
    </section>
  );
};

export default WhyChooseUs;
