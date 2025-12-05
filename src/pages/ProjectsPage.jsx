import { motion } from 'framer-motion';

const ProjectsPage = () => {
  const projects = [
    {
      title: 'E-Commerce Platform',
      category: 'Web Application',
      description: 'Full-stack e-commerce solution with payment integration, inventory management, and real-time analytics.',
      tags: ['React', 'Node.js', 'MongoDB', 'Stripe'],
      year: '2024'
    },
    {
      title: 'Healthcare App',
      category: 'Mobile App',
      description: 'Patient management system for healthcare providers with appointment scheduling and telemedicine features.',
      tags: ['React Native', 'Firebase', 'WebRTC'],
      year: '2024'
    },
    {
      title: 'SaaS Dashboard',
      category: 'Web Application',
      description: 'Analytics dashboard with real-time data visualization, custom reports, and team collaboration tools.',
      tags: ['React', 'D3.js', 'PostgreSQL', 'WebSocket'],
      year: '2024'
    },
    {
      title: 'Fitness Tracking App',
      category: 'Mobile App',
      description: 'Comprehensive fitness tracker with workout plans, nutrition tracking, and progress analytics.',
      tags: ['React Native', 'Redux', 'Node.js'],
      year: '2023'
    },
    {
      title: 'Real Estate Platform',
      category: 'Web Application',
      description: 'Property listing and management platform with virtual tours and advanced search filters.',
      tags: ['Next.js', 'MongoDB', 'Mapbox'],
      year: '2023'
    },
    {
      title: 'Educational Platform',
      category: 'Web Application',
      description: 'Online learning platform with video courses, quizzes, and student progress tracking.',
      tags: ['React', 'Express', 'MySQL', 'AWS'],
      year: '2023'
    }
  ];

  return (
    <div className="min-h-screen bg-black pt-24 pb-20">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Page Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <div className="inline-block mb-4">
            <span className="text-xs text-gray-400 font-semibold uppercase tracking-[0.2em]">OUR WORK</span>
          </div>
          
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-[1.1] text-white">
            All <span className="text-gradient">Projects</span>
          </h1>
          
          <p className="text-lg text-gray-400 max-w-3xl mx-auto leading-relaxed">
            A complete showcase of our work across web, mobile, and custom software development.
          </p>
        </motion.div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group relative bg-black/20 backdrop-blur-sm border border-white/5 rounded-3xl overflow-hidden hover:border-white/10 hover:bg-black/30 transition-all duration-300"
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
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProjectsPage;
