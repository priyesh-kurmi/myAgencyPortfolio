import { motion } from 'framer-motion';

const ProjectsPage = () => {
  const projects = [
    {
      title: 'Noas Café',
      category: 'Corporate Website',
      description: 'Multi-location specialty coffee and corporate catering platform. Features online ordering, menu management, catering services booking, and location finder. Roasted in-house, served across 9+ London locations.',
      tags: ['React', 'Next.js', 'E-commerce', 'CMS'],
      year: '2024',
      url: 'https://www.noas.uk/'
    },
    {
      title: 'Eversham Chauffeurs',
      category: 'Luxury Service Website',
      description: 'Elite chauffeur booking platform featuring premium fleet management, vehicle selection (Bentley, Rolls-Royce, Range Rover), 24/7 booking system, and customer testimonial management.',
      tags: ['React', 'Booking System', 'CMS', 'Payment Integration'],
      year: '2024',
      url: 'https://www.evershamchauffeurs.co.uk/'
    },
    {
      title: 'Noas Catering',
      category: 'Catering Platform',
      description: 'London\'s trusted office and event catering service with custom menu ordering, dietary requirements management, quote requests, business accounts, and allergen tracking system.',
      tags: ['React', 'Order System', 'CMS', 'User Accounts'],
      year: '2024',
      url: 'https://www.noascatering.co.uk/'
    },
    {
      title: 'OfficeHour',
      category: 'Business Management SaaS',
      description: 'All-in-one business management platform with role-based access control, task management, client management, group chat, and smart dashboard with real-time insights for modern teams.',
      tags: ['React', 'Node.js', 'Real-time Chat', 'Dashboard'],
      year: '2024',
      url: 'https://officehour.vercel.app/'
    }
  ];

  return (
    <div className="min-h-screen bg-black pt-24 pb-20">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Page Header */}
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: false, amount: 0.3 }}
            transition={{ duration: 0.5 }}
            className="inline-block mb-4"
          >
            <span className="text-xs text-gray-400 font-semibold uppercase tracking-[0.2em]">OUR WORK</span>
          </motion.div>
          
          <motion.h1 
            initial={{ opacity: 0, y: -40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false, amount: 0.3 }}
            transition={{ duration: 0.7 }}
            className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-[1.1] text-white"
          >
            All <span className="text-gradient">Projects</span>
          </motion.h1>
          
          <motion.p 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false, amount: 0.3 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-lg text-gray-400 max-w-3xl mx-auto leading-relaxed"
          >
            A complete showcase of our work across web, mobile, and custom software development.
          </motion.p>
        </div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <a
              key={index}
              href={project.url}
              target="_blank"
              rel="noopener noreferrer"
              className="block"
            >
              <motion.div
                initial={{ opacity: 0, y: 70, scale: 0.85 }}
                whileInView={{ opacity: 1, y: 0, scale: 1 }}
                viewport={{ once: false, amount: 0.2 }}
                transition={{ duration: 0.7, delay: index * 0.12, ease: "easeOut" }}
                className="group relative bg-black/20 backdrop-blur-sm border border-white/5 rounded-3xl overflow-hidden hover:border-white/10 hover:bg-black/30 transition-all duration-300 cursor-pointer"
              >
              {/* Project Image Placeholder */}
              <div className="relative h-56 bg-white/5 overflow-hidden">
                <div className="absolute inset-0 flex items-center justify-center">
                  <svg className="w-20 h-20 text-blue-400/30" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                  </svg>
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent opacity-60"></div>
                <div className="absolute top-4 right-4 px-3 py-1 bg-blue-500/20 backdrop-blur-sm border border-blue-500/30 rounded-full text-xs text-blue-300 font-semibold">
                  {project.year}
                </div>
              </div>

              {/* Project Info */}
              <div className="p-6">
                <div className="text-sm text-blue-400 font-semibold mb-3 uppercase tracking-wider">
                  {project.category}
                </div>
                <h3 className="text-xl font-bold mb-3 text-white transition-all">
                  {project.title}
                </h3>
                <p className="text-gray-400 mb-6 leading-relaxed text-sm">
                  {project.description}
                </p>
                
                {/* Tags */}
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag, tagIndex) => (
                    <span
                      key={tagIndex}
                      className="px-3 py-1.5 bg-black/30 backdrop-blur-sm border border-white/10 rounded-full text-xs text-blue-300"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
              </motion.div>
            </a>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProjectsPage;
