// links
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
    <div className='flex items-center gap-x-5 text-lg'>

      <Link href={''} className='hover:text-[#46dbd4] transition-all duration-300'>
        <RiInstagramLine/>
      </Link>

      <Link href={''} className='hover:text-[#46dbd4] transition-all duration-300'>
        <RiFacebookLine/>
      </Link>

      <Link href={''} className='hover:text-[#46dbd4] transition-all duration-300'>
       <RiDribbbleLine/>
      </Link>

      <Link href={''} className='hover:text-[#46dbd4] transition-all duration-300'>
        <RiBehanceLine/>
      </Link>

      <Link href={''} className='hover:text-[#46dbd4] transition-all duration-300'>
        <RiPinterestLine/>
      </Link>

    </div>
  );
};

export default Socials;
