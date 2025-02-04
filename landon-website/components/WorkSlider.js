// work slider data
export const workSlider = {
  slides: [
    {
      images: [
        {
          title: 'Card Layout',
          path: '/thumb1.jpg',
          link: 'https://film-search-udim.onrender.com/'
        },
        {
          title: 'Animated Cards',
          path: '/thumb2.jpg',
          link: 'https://card-layout.onrender.com'
        },
        {
          title: 'Your Future',
          path: '/thumb3.jpg',
          link: 'https://css-cards.onrender.com'
        },
        {
          title: 'Mapty',
          path: '/thumb4.jpg',
          link: 'https://mapty-nl5z.onrender.com/'
        },
      ],
    }
  ],
};

// import swiper react components
import { Swiper, SwiperSlide } from 'swiper/react';

// import swiper styles
import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/pagination';

// import required modules
import { Pagination } from 'swiper';

// icons
import { BsArrowRight } from 'react-icons/bs';
// next image
import Image from 'next/image';
import Link from 'next/link';

const WorkSlider = () => {
  return (
    <div className="h-[500px] p-4 overflow-y-auto scrollbar-thin scrollbar-thumb-gray-400 scrollbar-track-gray-100 rounded-lg">
      <Swiper
        spaceBetween={20}
        pagination={{
          clickable: true,
        }}
        modules={[Pagination]}
        className="h-full"
      >
        {workSlider.slides.map((slide, index) => (
          <SwiperSlide key={index}>
            <div className="overflow-y-auto max-h-[420px] grid grid-cols-1 sm:grid-cols-2 gap-6">
              {slide.images.map((image, index) => (
                <Link href={image.link} key={index}>
                  <div className="relative rounded-xl overflow-hidden flex items-center justify-center group shadow-lg border border-gray-200 p-2 w-full h-auto aspect-w-16 aspect-h-9 min-h-[200px] min-w-[300px]">
                    <div className="">
                      {/* Image */}
                      <Image
                        src={image.path}
                        alt={image.title}
                        fill
                        unoptimized
                        className="object-cover"
                      />
                    </div>
                    {/* Overlay Gradient */}
                    <div className="absolute inset-0 bg-gradient-to-l from-transparent via-[#46dbd4] to-[#a39968] opacity-0 group-hover:opacity-80 transition-all duration-700"></div>
                    {/* Title */}
                    <div className="absolute bottom-0 translate-y-full group-hover:-translate-y-10 group-hover:xl:-translate-y-20 transition-all duration-300">
                      <div className="flex items-center gap-x-3 text-[14px] tracking-[0.2em] text-white font-semibold">
                        {/* Title */}
                        <div className="sm:text-sm delay-100">{image.title}</div>
                        {/* Demo Label */}
                        <div className="sm:text-sm translate-y-[500%] group-hover:translate-y-0 transition-all duration-300 delay-150">
                          demo
                        </div>
                        {/* Icon */}
                        <div className="text-lg translate-y-[500%] group-hover:translate-y-0 transition-all duration-300 delay-200">
                          <BsArrowRight />
                        </div>
                      </div>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default WorkSlider;
