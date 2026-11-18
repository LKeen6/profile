// links
import Link from 'next/link';

//icons
import {
  RiInstagramLine,
  RiFacebookLine,
} from 'react-icons/ri';
import {
  SiGithub,
  SiLinkedin
} from 'react-icons/si';

const Socials = () => {
  return (
    <div className='flex items-center gap-x-5 text-lg'>

      <a
        href="https://www.linkedin.com/in/landon-keen/"
        onClick={(e) => {
          e.preventDefault();
          window.open("https://www.linkedin.com/in/landon-keen/", "LinkedIn", "width=600,height=700");
        }}
        className="hover:text-[#46dbd4] transition-all duration-300"
      >
        <SiLinkedin />
      </a>

      <a
        href="https://www.facebook.com/landon.keen.9/"
        onClick={(e) => {
          e.preventDefault();
          window.open("https://www.facebook.com/landon.keen.9/", "Facebook", "width=600,height=700");
        }}
        className="hover:text-[#46dbd4] transition-all duration-300"
      >
        <RiFacebookLine />
      </a>

      <a
        href="https://github.com/LKeen6"
        onClick={(e) => {
          e.preventDefault();
          window.open("https://github.com/LKeen6", "GitHub", "width=600,height=700");
        }}
        className="hover:text-[#46dbd4] transition-all duration-300"
      >
        <SiGithub />
      </a>

    </div>
  );
};

export default Socials;
