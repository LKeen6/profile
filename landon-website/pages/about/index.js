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
} from "react-icons/fa";

import {
  SiNextdotjs,
  SiAdobexd,
  SiAdobephotoshop
} from "react-icons/si";


//  about data
const aboutData = [
  {
    title: 'skills',
    info: [
      {
        title: 'Web Development',
        icons: [
          <FaHtml5 />,
          <FaCss3 />,
          <FaJs />,
          <FaReact />,
          <BsBootstrap/>,
          <FaPhp/>,
          <SiNextdotjs />,
          <FaWordpress />,
        ],
      },
      {
        title: 'UI/UX Design',
        icons: [<FaFigma />, <SiAdobexd />, <SiAdobephotoshop />],
      },
    ],
  },
  // {
  //   title: 'awards',
  //   info: [
  //     {
  //       title: 'Webby Awards - Honoree',
  //       stage: '2011 - 2012',
  //     },
  //     {
  //       title: 'Adobe Design Achievement Awards - Finalist',
  //       stage: '2009 - 2010',
  //     },
  //   ],
  // },
  {
    title: 'experience',
    info: [
      {
        title: 'Freelance Developer',
        stage: 'September 2024 - Current',
      },
      {
        title: 'Wordpress Developer Intern - Josh Kirk Inc',
        stage: '2024',
      },
    ],
  },
  {
    title: 'credentials',
    info: [
      {
        title: 'Web & Mobile Development - Btech College, UT',
        stage: '2024',
      },
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
  console.log(index);
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
            Captivating <span className='text-[#19471f]'>stories</span> birth magnificent designs.
          </motion.h2>

          <motion.p 
            variants={fadeIn('right', 0.4)}
            initial='hidden'
            animate='show'
            exit='hidden'
            className='max-w-[500px] mx-auto xl:mx-0 mb-6 xl:mb-12 px-2 xl:px-0'
          >
With a strong foundation in both front-end and back-end development, I bring a diverse skill set to the table. I’m proficient in modern frameworks and libraries like React (with TypeScript), Next.js, and Bootstrap 5, crafting responsive and interactive user interfaces. On the back-end, I have solid experience with Node.js, PHP, and MySQL, ensuring efficient and scalable server-side solutions.
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
          className='flex flex-col w-full xl:max-w-[48%] h-[480px]'
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
                  <div key={itemIndex} className='flex-1 flex flex-col md:flex-row max-w-max gap-x-2 items-center text-white/60'>
                    {/* title */}
                    <div className='font-light mb-2 md:mb-0'>{item.title}</div>
                      <div className='hidden md:flex'></div>
                      <div>{item.stage}</div>
                      <div className='flex gap-x-4'>
                        {/* icons */}
                        {item.icons?.map((icon, itemIndex) => {
                          return (
                            <div className='text-2xl text-white' key={itemIndex}>{icon}</div>
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
