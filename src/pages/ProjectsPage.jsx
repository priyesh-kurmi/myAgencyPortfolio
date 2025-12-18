import { motion } from 'framer-motion';
import { useState, useRef } from 'react';
import { CardBody, CardContainer, CardItem } from '../components/ui/3d-card';

const ProjectsPage = () => {
  const [viewMode, setViewMode] = useState('list');
  const [hoveredListIndex, setHoveredListIndex] = useState(null);
  const [tooltipPosition, setTooltipPosition] = useState({ x: 0, y: 0 });
  const projects = [
    {
      title: 'Noas Café',
      category: 'Cafe Website',
      description: 'Multi-location specialty coffee and corporate catering platform. Features online ordering, menu management, catering services booking, and location finder. Roasted in-house, served across 9+ London locations.',
      tags: ['React', 'Next.js', 'E-commerce', 'CMS'],
      year: '2024',
      url: 'https://www.noas.uk/',
      image: '/images/noas.png'
    },
    {
      title: 'Eversham Chauffeurs',
      category: 'Luxury Service Website',
      description: 'Elite chauffeur booking platform featuring premium fleet management, vehicle selection (Bentley, Rolls-Royce, Range Rover), 24/7 booking system, and customer testimonial management.',
      tags: ['React', 'Booking System', 'CMS', 'Payment Integration'],
      year: '2024',
      url: 'https://www.evershamchauffeurs.co.uk/',
      image: '/images/eversham.png'
    },
    {
      title: 'Noas Catering',
      category: 'Catering Platform',
      description: 'London\'s trusted office and event catering service with custom menu ordering, dietary requirements management, quote requests, business accounts, and allergen tracking system.',
      tags: ['React', 'Order System', 'CMS', 'User Accounts'],
      year: '2024',
      url: 'https://www.noascatering.co.uk/',
      image: '/images/noascatering.png'
    },
    {
      title: 'OfficeHour',
      category: 'Business Management SaaS',
      description: 'All-in-one business management platform with role-based access control, task management, client management, group chat, and smart dashboard with real-time insights for modern teams.',
      tags: ['React', 'Node.js', 'Real-time Chat', 'Dashboard'],
      year: '2024',
      url: 'https://officehour.vercel.app/',
      image: '/images/officehour.png'
    }
  ];

  const handleListHover = (e, index) => {
    setHoveredListIndex(index);
    setTooltipPosition({ x: e.clientX, y: e.clientY });
  };

  const handleListMouseMove = (e) => {
    setTooltipPosition({ x: e.clientX, y: e.clientY });
  };

  const handleListLeave = () => {
    setHoveredListIndex(null);
  };

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

        {/* View Toggle (Desktop Only) */}
        <div className="hidden lg:flex justify-end mb-8">
          <div className="inline-flex rounded-lg border border-white/10 bg-black/30 p-1">
            <button
              onClick={() => setViewMode('grid')}
              className={`px-4 py-2 rounded-md text-sm font-medium transition-all ${
                viewMode === 'grid'
                  ? 'bg-blue-600 text-white'
                  : 'text-gray-400 hover:text-white'
              }`}
            >
              Grid View
            </button>
            <button
              onClick={() => setViewMode('list')}
              className={`px-4 py-2 rounded-md text-sm font-medium transition-all ${
                viewMode === 'list'
                  ? 'bg-blue-600 text-white'
                  : 'text-gray-400 hover:text-white'
              }`}
            >
              List View
            </button>
          </div>
        </div>

        {/* Desktop List/Grid View */}
        <div className="hidden lg:block">
          {viewMode === 'list' ? (
            <div className="flex flex-col gap-4">
              {projects.map((project, index) => (
                <motion.div
                  key={`list-${index}`}
                  initial={{ opacity: 0, x: -40 }}
                  animate={{ opacity: 1, x: 0 }}
                  viewport={{ once: false, amount: 0.2 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  onMouseEnter={(e) => handleListHover(e, index)}
                  onMouseMove={handleListMouseMove}
                  onMouseLeave={handleListLeave}
                  className="bg-gray-900/30 backdrop-blur-sm border border-white/10 rounded-xl p-4 hover:border-white/20 hover:bg-gray-900/50 transition-all cursor-pointer"
                >
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-4 flex-1">
                      <h3 className="text-xl font-bold text-white">{project.title}</h3>
                      <p className="text-blue-400 text-xs font-semibold uppercase tracking-wider">{project.category}</p>
                    </div>
                    <a
                      href={project.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="px-5 py-2 rounded-xl bg-blue-600 hover:bg-blue-700 text-white text-sm font-semibold transition-colors"
                    >
                      View Project →
                    </a>
                  </div>
                </motion.div>
              ))}
            </div>
          ) : (
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
              {projects.map((project, index) => (
                <motion.div
                  key={`grid-${index}`}
                  initial={{ opacity: 0, y: 60, scale: 0.9 }}
                  animate={{ opacity: 1, y: 0, scale: 1 }}
                  viewport={{ once: false, amount: 0.2 }}
                  transition={{ duration: 0.6, delay: index * 0.15 }}
                >
                  <CardContainer className="inter-var">
                    <CardBody className="bg-gray-900/50 relative group/card hover:shadow-2xl hover:shadow-blue-500/[0.1] border-white/[0.1] w-auto h-auto rounded-xl p-6 border">
                      <CardItem
                        translateZ="50"
                        className="text-xl font-bold text-white mb-2"
                      >
                        {project.title}
                      </CardItem>
                      <CardItem
                        translateZ="60"
                        className="text-sm text-blue-400 font-semibold mb-3 uppercase tracking-wider"
                      >
                        {project.category}
                      </CardItem>
                      <CardItem translateZ="100" className="w-full mt-4">
                        <div className="h-48 overflow-hidden rounded-xl bg-white/5">
                          <img
                            src={project.image}
                            alt={project.title}
                            className="w-full h-full object-cover"
                          />
                        </div>
                      </CardItem>
                      <CardItem
                        as="p"
                        translateZ="60"
                        className="text-gray-400 text-sm mt-4 leading-relaxed"
                      >
                        {project.description}
                      </CardItem>
                      <div className="flex justify-end items-center mt-6">
                        <CardItem
                          translateZ={20}
                          as="a"
                          href={project.url}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="px-4 py-2 rounded-xl bg-blue-600 hover:bg-blue-700 text-white text-sm font-semibold transition-colors"
                        >
                          View Project →
                        </CardItem>
                      </div>
                    </CardBody>
                  </CardContainer>
                </motion.div>
              ))}
            </div>
          )}
        </div>

        {/* Tooltip for List View */}
        {hoveredListIndex !== null && (
          <div
            className="fixed pointer-events-none z-50 hidden lg:block"
            style={{
              left: `${tooltipPosition.x + 20}px`,
              top: `${tooltipPosition.y + 20}px`,
            }}
          >
            <div className="bg-gray-900 border border-white/20 rounded-xl p-3 shadow-2xl">
              <img
                src={projects[hoveredListIndex].image}
                alt={projects[hoveredListIndex].title}
                className="w-96 h-64 object-cover rounded-lg"
              />
            </div>
          </div>
        )}
        
        {/* Mobile View (Always Grid) */}
        <div className="grid md:grid-cols-2 gap-4 lg:hidden">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 60, scale: 0.9 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              viewport={{ once: false, amount: 0.2 }}
              transition={{ duration: 0.6, delay: index * 0.15 }}
            >
              <CardContainer className="inter-var">
                <CardBody className="bg-gray-900/50 relative group/card hover:shadow-2xl hover:shadow-blue-500/[0.1] border-white/[0.1] w-auto h-auto rounded-xl p-6 border">
                  <CardItem
                    translateZ="50"
                    className="text-xl font-bold text-white mb-2"
                  >
                    {project.title}
                  </CardItem>
                  <CardItem
                    translateZ="60"
                    className="text-sm text-blue-400 font-semibold mb-3 uppercase tracking-wider"
                  >
                    {project.category}
                  </CardItem>
                  <CardItem translateZ="100" className="w-full mt-4">
                    <div className="h-48 overflow-hidden rounded-xl bg-white/5">
                      <img
                        src={project.image}
                        alt={project.title}
                        className="w-full h-full object-cover"
                      />
                    </div>
                  </CardItem>
                  <CardItem
                    as="p"
                    translateZ="60"
                    className="text-gray-400 text-sm mt-4 leading-relaxed"
                  >
                    {project.description}
                  </CardItem>
                  <div className="flex justify-end items-center mt-6">
                    <CardItem
                      translateZ={20}
                      as="a"
                      href={project.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="px-4 py-2 rounded-xl bg-blue-600 hover:bg-blue-700 text-white text-sm font-semibold transition-colors"
                    >
                      View Project →
                    </CardItem>
                  </div>
                </CardBody>
              </CardContainer>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProjectsPage;
