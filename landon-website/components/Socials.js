import Link from 'next/link';

//icons
import {
  RiLinkedinBoxFill,
  RiGithubFill,
  RiFacebookBoxFill,
  RiInstagramFill,
} from 'react-icons/ri';

const Socials = () => {
  return (
    <div className='flex items-center gap-x-5 text-xl'> {/* You can adjust text-xl to any fixed size */}
      <Link href='https://www.instagram.com/foxylandobae/#' className='hover:text-[#46dbd4] transition-all duration-300'>
        <RiInstagramFill className="text-3xl" /> {/* Fixed icon size */}
      </Link>

      <Link href='https://www.facebook.com/landon.keen.9' className='hover:text-[#46dbd4] transition-all duration-300'>
        <RiFacebookBoxFill className="text-3xl" />
      </Link>

      <Link href='https://github.com/LKeen6' className='hover:text-[#46dbd4] transition-all duration-300'>
        <RiGithubFill className="text-3xl" />
      </Link>

      <Link href='https://www.linkedin.com/in/landon-keen' className='hover:text-[#46dbd4] transition-all duration-300'>
        <RiLinkedinBoxFill className="text-3xl" />
      </Link>

    </div>
  );
};

export default Socials;
