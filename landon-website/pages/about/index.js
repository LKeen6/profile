import React, {useState} from 'react';

// icons
import {
  FaHtml5,
  FaCss3,
  FaJs,
  FaReact,
  FaWordpress,
  FaFigma,
  FaPhp,
  FaPython
} from "react-icons/fa";

import {
  SiNextdotjs,
  SiAdobexd,
  SiAdobephotoshop,
  SiStreamlit,
  SiMysql
} from "react-icons/si";


//  about data
const aboutData = [
  {
    title: 'skills',
    info: [
      {
        title: 'Web Development',
        icons: [
          {
            icon: <FaPython />,
            name: 'Python'
          }, {
            icon: <SiStreamlit />,
            name: 'Streamlit'
          }, {
            icon: <FaReact />,
            name: 'React'
          }, {
            icon: <SiNextdotjs />,
            name: 'Next.js'
          }, {
            icon: <FaPhp />,
            name: 'PHP'
          }, {
            icon: <FaHtml5 />,
            name: 'HTML5'
          }, {
            icon: <FaCss3 />,
            name: 'CSS3'
          }, {
            icon: <FaJs />,
            name: 'JavaScript'
          }, {
            icon: <BsBootstrap />,
            name: 'Bootstrap'
          }, {
            icon: <SiMysql />,
            name: 'MySQL'
          },
        ],
      },
      {
        title: 'UI/UX Design',
        icons: [
          { icon: <FaFigma />, name: 'Figma' },
          { icon: <SiAdobexd />, name: 'Adobe XD' },
          { icon: <SiAdobephotoshop />, name: 'Adobe Photoshop' }
        ],
      },
    ],
  },
  {
    title: 'experience',
    info: [
      {
        title: 'Wordpress Developer Intern - Josh Kirk Inc',
        stage: '2024',
      },
      {
        title: 'Software Developer - iWorQ Systems',
        stage: 'March 2025 - Current',
      },
    ],
  },
  {
    title: 'credentials',
    info: [
      {
        title: 'Web & Mobile Development - Btech College, UT',
        stage: '2024',
        link: '',
      }, {
        title: 'Master Streamlit: Build Interactive Data Apps with Python Udemy',
        stage: '2026',
        link: 'https://www.udemy.com/certificate/UC-e0d0d481-e8e2-49ff-91ad-a51f65bb4f3d/',
      }
    ],
  },
];

//components
import Avatar from '../../components/Avatar';

// framer motion
import {motion} from 'framer-motion';
import {fadeIn} from '../../variants';

// counter
import CountUp from 'react-countup';
import ParticlesContainer from '../../components/ParticlesContainer';
import { BsBootstrap } from 'react-icons/bs';

const About = () => {
  
  const [index, setIndex] = useState(0);
  const openCredential = (event, url) => {
    event.preventDefault();

    const width = 900;
    const height = 700;
    const left = Math.max(0, (window.screen.width - width) / 2);
    const top = Math.max(0, (window.screen.height - height) / 2);

    const popup = window.open(
      url,
      '_blank',
      `width=${width},height=${height},left=${left},top=${top},resizable=yes,scrollbars=yes`
    );

    if (!popup) {
      window.open(url, '_blank', 'noopener,noreferrer');
    }
  };

  return (
    
    <div className='w-screen h-screen bg-[#a39968] bg-gradient-to-r from-primary/5 via-black/5 to-black/40 py-32 text-center xl:text-left'>
       {/* Particles */}
       <ParticlesContainer/>
      {/* avatar img */}
      <motion.div 
        variants={fadeIn('right', 0.2)}
        initial='hidden'
        animate='show'
        exit='hidden' 
        className='hidden xl:flex absolute bottom-0 -left-[370px]'
      >
        <Avatar/>
      </motion.div>
      <div className='container mx-auto h-full flex flex-col items-center xl:flex-row gap-x-6'>
        {/* text */}
        <div className='flex-1 flex flex-col justify-center'>
          <motion.h2 
            variants={fadeIn('right', 0.2)}
            initial='hidden'
            animate='show'
            exit='hidden'
            className='h2'
          >
            Turning <span className='text-[#19471f]'>complex problems</span> into elegant solutions.
          </motion.h2>

          <motion.p 
            variants={fadeIn('right', 0.4)}
            initial='hidden'
            animate='show'
            exit='hidden'
            className='max-w-[500px] mx-auto xl:mx-0 mb-6 xl:mb-12 px-2 xl:px-0'
          >
            I am a junior full-stack developer with experience in front-end and back-end development using JavaScript, React, Next.js, PHP, Python, and Streamlit. I have worked with complex legacy codebases, overseen code conversion and modernization projects, and performed unit and integration testing to ensure code quality, reliability, and functionality. <br/><br/>I am always looking to expand my knowledge, explore new programming languages, and grow my experience with modern frameworks and technologies while continuing to develop as a software engineer.
          </motion.p>

          {/* counters */}
          <motion.div 
            variants={fadeIn('right', 0.6)}
            initial='hidden'
            animate='show'
            exit='hidden'
            className='hidden md:flex md:max-w-xl xl:max-w-none mx-auto xl:mx-0 mb-8'
          >
            <div className='flex flex-1 xl: gap-x-6'>
            {/* experience
              <div className='relative flex-1 after:w-[1px] after:h-full after:bg-white/10 after:absolute after:top-0 after:right-0'>
                <div className='text-2xl xl:text-4xl front-extrabold text-[#19471f] mb-2'>
                  <CountUp start={0} end={3} duration={10} /> +
                </div>
                <div className='text-xs uppercase tracking-[1px] leading-[1.4] max-w-[100]'>Years of experience</div>
              </div> */}
              {/* finished projects
              <div className='relative flex-1 after:w-[1px] after:h-full after:bg-white/10 after:absolute after:top-0 after:right-0'>
                <div className='text-2xl xl:text-4xl front-extrabold text-[#19471f] mb-2'>
                  <CountUp start={0} end={10} duration={10} /> +
                </div>
                <div className='text-xs uppercase tracking-[1px] leading-[1.4] max-w-[100]'>finished projects</div>
              </div> */}
            </div>
          </motion.div>
        </div>
        {/* info */}
        <motion.div 
          variants={fadeIn('left', 0.4)}
          initial='hidden'
          animate='show'
          exit='hidden'
          className='relative z-20 flex flex-col w-full xl:max-w-[48%] h-[480px]'
        >
          <div className='flex gap-x-4 xl:gap-x-8 mx-auto xl:mx-0 mb-4'>
            {aboutData.map((item, itemIndex) => {
              return (
                <div 
                  key={itemIndex} 
                  className={`${
                    index === itemIndex && 
                    'text-[#19471f] after:w-[100%] after:bg-accent after:transition-all after:duration-300'
                    } 
                    cursor-pointer capitalize xl:text-lg relative after:w-8 after:h-[2px] after:bg-white after:absolute after:-bottom-1 after:left-0`}
                    onClick={() => setIndex(itemIndex)}
                  >
                  {item.title}
                </div>
              )
            })}
          </div>
            <div className='py-2 xl:py-6 flex flex-col gap-y-2 xl:gap-y-4 items-center xl:items-start'>
              {aboutData[index].info.map((item, itemIndex) => {
                return (
                  <div key={itemIndex} className='w-full flex flex-col md:flex-row md:justify-start md:items-center md:gap-x-3 py-2 text-white/60'>
                    {/* title */}
                    {item.link ? (
                      <a
                        href={item.link}
                        target='_blank'
                        rel='noopener noreferrer'
                        onClick={(event) => openCredential(event, item.link)}
                        className='font-light leading-relaxed text-center md:text-left max-w-[290px] md:max-w-[420px] xl:max-w-[390px] mb-2 md:mb-0 underline decoration-white/30 underline-offset-4 hover:text-[#46dbd4] hover:decoration-[#46dbd4] transition-colors'
                      >
                        {item.title}
                      </a>
                    ) : (
                      <div className='font-light leading-relaxed text-center md:text-left max-w-[290px] md:max-w-[420px] xl:max-w-[390px] mb-2 md:mb-0'>
                        {item.title}
                      </div>
                    )}
                      <div className='shrink-0 px-2 py-1 rounded-md border border-white/20 text-xs text-white/80 whitespace-nowrap'>{item.stage}</div>
                      <div className='flex gap-x-4'>
                        {/* icons */}
                        {item.icons?.map((icon, itemIndex) => {
                          return (
                            <div className='relative group text-2xl text-white' key={itemIndex}>
                                {icon.icon}
                                <span className='absolute bottom-full left-1/2 -translate-x-1/2 mb-2
                                  px-2 py-1 text-xs text-gray-900 bg-gray-300/50 rounded whitespace-nowrap
                                  opacity-0 group-hover:opacity-100 transition-opacity duration-200
                                  pointer-events-none z-50'>
                                  {icon.name}
                                </span>
                            </div>
                          )
                        })}
                      </div>
                      
                  </div>
                )
              })}
            </div>
        </motion.div>
      </div>
    </div>
  );
};

export default About;
