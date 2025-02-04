import Link from 'next/link';

//icons
import {
  RiInstagramLine,
  RiFacebookLine,
  RiDribbbleLine,
  RiBehanceLine,
  RiPinterestLine,
} from 'react-icons/ri';

const Socials = () => {
  return (
    <div className='flex items-center gap-x-5 text-xl'> {/* You can adjust text-xl to any fixed size */}
      <Link href={''} className='hover:text-[#46dbd4] transition-all duration-300'>
        <RiInstagramLine className="text-3xl" /> {/* Fixed icon size */}
      </Link>

      <Link href={''} className='hover:text-[#46dbd4] transition-all duration-300'>
        <RiFacebookLine className="text-3xl" />
      </Link>

      <Link href={''} className='hover:text-[#46dbd4] transition-all duration-300'>
        <RiDribbbleLine className="text-3xl" />
      </Link>

      <Link href={''} className='hover:text-[#46dbd4] transition-all duration-300'>
        <RiBehanceLine className="text-3xl" />
      </Link>

      <Link href={''} className='hover:text-[#46dbd4] transition-all duration-300'>
        <RiPinterestLine className="text-3xl" />
      </Link>
    </div>
  );
};

export default Socials;
