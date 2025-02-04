// components
import WorkSlider from '../../components/WorkSlider';
import Circles from '../../components/Circles';
import ParticlesContainer from '../../components/ParticlesContainer';

// framer motion
import { motion } from 'framer-motion';
import { fadeIn } from '../../variants';

const Work = () => {
  return (
    <div className="relative h-screen bg-[#19471f]">
      {/* Particles */}
      <ParticlesContainer />

      {/* Content */}
      <div className="h-full flex items-center justify-center relative z-10">
        <Circles />
        <div className="container mx-auto">
          <div className="flex flex-col xl:flex-row gap-x-8 items-center">
            {/* Text */}
            <div className="text-center flex xl:w-[30vw] flex-col lg:text-left mb-4 xl:mb-0">
              <motion.h2
                variants={fadeIn('up', 0.2)}
                initial="hidden"
                animate="show"
                exit="hidden"
                className="h2 xl:mt-12 mt-28"
              >
                My work <span className="text-[#a39968]">.</span>
              </motion.h2>
              <motion.p
                variants={fadeIn('up', 0.4)}
                initial="hidden"
                animate="show"
                exit="hidden"
                className="mb-4 max-w-[400px] mx-auto lg:mx-0"
              >
               Checkout my latest projects 
              </motion.p>
            </div>

            {/* Slider */}
            <motion.div
              variants={fadeIn('down', 0.6)}
              initial="hidden"
              animate="show"
              exit="hidden"
              className="w-full xl:max-w-[65%]"
            >
              <WorkSlider />
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Work;
