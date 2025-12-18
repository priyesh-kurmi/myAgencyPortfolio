import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { CardBody, CardContainer, CardItem } from './ui/3d-card';

const Portfolio = () => {
  const projects = [
    {
      title: 'Noas Café',
      category: 'Cafe Website',
      description: 'Premium specialty coffee and corporate catering platform across 9+ London locations',
      tags: ['React', 'Next.js', 'E-commerce'],
      url: 'https://www.noas.uk/',
      image: '/images/noas.png'
    },
    {
      title: 'Eversham Chauffeurs',
      category: 'Luxury Service Website',
      description: 'Elite chauffeur booking platform featuring premium fleet management and 24/7 service',
      tags: ['React', 'Booking System', 'CMS'],
      url: 'https://www.evershamchauffeurs.co.uk/',
      image: '/images/eversham.png'
    },
    {
      title: 'Noas Catering',
      category: 'Catering Platform',
      description: 'London\'s trusted office and event catering service with custom menu ordering',
      tags: ['React', 'Order System', 'CMS'],
      url: 'https://www.noascatering.co.uk/',
      image: '/images/noascatering.png'
    }
  ];

  return (
    <section id="portfolio" className="py-10 bg-black relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-blue-600/5 rounded-full blur-3xl"></div>
      
      <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-12">
          <motion.div 
            initial={{ opacity: 0, y: -30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false, amount: 0.3 }}
            transition={{ duration: 0.5 }}
            className="inline-block mb-4"
          >
            <span className="text-xs text-gray-400 font-semibold uppercase tracking-[0.2em]">OUR WORK</span>
          </motion.div>
          
          <motion.h2 
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: false, amount: 0.3 }}
            transition={{ duration: 0.7 }}
            className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-[1.1] text-white"
          >
            Our Work <span className="text-gradient">Speaks</span> For Itself
          </motion.h2>
          
          <motion.p 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false, amount: 0.3 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-lg text-gray-400 max-w-3xl mx-auto leading-relaxed"
          >
            A showcase of selected projects demonstrating our design quality, engineering depth, and attention to detail.
          </motion.p>
        </div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
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
                    <img
                      src={project.image}
                      alt={project.title}
                      className="h-48 w-full object-cover rounded-xl group-hover/card:shadow-xl"
                    />
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
        {/* View All Projects Button */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, amount: 0.3 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="text-center"
        >
          <Link to="/projects">
            <button className="px-8 py-3.5 bg-blue-600 text-white hover:bg-blue-700 rounded-xl text-base font-semibold transition-all hover:scale-[1.02] glow-blue-strong">
              View All Projects
            </button>
          </Link>
        </motion.div>
      </div>
    </section>
  );
};

export default Portfolio;
