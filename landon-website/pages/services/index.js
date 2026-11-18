import Link from 'next/link';
import React from 'react';
import ParticlesContainer from '../../components/ParticlesContainer';

const Services = () => {
  const services = [
    {
      title: 'Full-Stack Development',
      description: 'Building dynamic, scalable web applications using JavaScript, Node.js, React, and Next.js. I create seamless user experiences with both front-end and back-end integration.',
    },
    {
      title: 'Custom WordPress Development',
      description: 'Creating custom WordPress themes and plugins, as well as optimizing WordPress sites for performance, security, and SEO.',
    },
    {
      title: 'API Integration & Development',
      description: 'Designing and implementing RESTful APIs and third-party API integrations to enhance functionality and improve user experience.',
    },
    {
      title: 'Database Management',
      description: 'Managing and optimizing MySQL databases to ensure data integrity, scalability, and performance for web applications.',
    },
    {
      title: 'Responsive Web Design',
      description: 'Crafting responsive, mobile-first websites using modern HTML, CSS, and frameworks like Bootstrap 5 to ensure consistent performance across devices.',
    },
    {
      title: 'E-Commerce Solutions',
      description: 'Developing e-commerce websites and integrating payment gateways, including custom solutions and WooCommerce development for WordPress.',
    },
    {
      title: 'Performance Optimization',
      description: 'Optimizing websites for speed and performance through code minification, image optimization, lazy loading, and caching strategies.',
    },
    {
      title: 'SEO & Web Analytics',
      description: 'Improving search engine rankings and providing web analytics insights to track and enhance website performance.',
    },
  ];

  return (
    <div className=' h-full bg-[#a39968] bg-gradient-to-r from-primary/5 via-black/5 to-black/40'>
      <ParticlesContainer/>
      

      <div className="container mx-auto p-10 pt-28"> 
        <h2 className="text-3xl font-bold text-center mb-8 mt-4 text-white">Services</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 overflow-y-auto max-h-[60vh] overflow-x-hidden"> {/* Made the grid scrollable with max height */}
          {services.map((service, index) => (
            <div
              key={index}
              className="bg-gradient-to-r from-[#242713] via-[#6b7032] to-[#4e5d2d] p-6 rounded-lg shadow-md transition transform duration-300 ease-in-out hover:bg-gradient-to-r hover:from-[#4e5d2d] hover:to-[#242713] hover:text-white hover:scale-105 hover:shadow-xl opacity-80"
            >
              <h3 className="text-xl font-semibold text-white group-hover:text-white">{service.title}</h3>
              <p className="text-white mt-4 group-hover:text-gray-200">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
      <div className="flex justify-center">
        <Link
          href="/contact" 
          className=' relative btn rounded-full border border-white/50 max-w-[170px] px-8 transition-all duration-300 flex items-center justify-center overflow-hidden hover:border-[#a39968] hover:bg-[#a39968] hover:text-white'
        >
          Contact Me
        </Link>
      </div>

    </div>
  );
};

export default Services;
