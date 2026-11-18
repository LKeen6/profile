// work slider data
export const workSlider = {
  slides: [
    {
      images: [
        {
          title: 'Card Layout',
          path: '/thumb1.jpg',
          link: 'https://film-search-udim.onrender.com/'
        }, {
          title: 'Animated Cards',
          path: '/thumb2.jpg',
          link: 'https://card-layout.onrender.com'
        }, {
          title: 'Your Future',
          path: '/thumb3.jpg',
          link: 'https://css-cards.onrender.com'
        }, {
          title: 'Streamlit User Management',
          path: '/StreamlitCrud.jpg',
          link: 'https://streamlit-crud-1ctn.onrender.com'
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

const WorkSlider = () => {
  const openDemo = (event, url) => {
    event.preventDefault();

    const width = 900;
    const height = 700;
    const left = Math.max(0, (window.screen.width - width) / 2);
    const top = Math.max(0, (window.screen.height - height) / 2);

    window.open(
      url,
      '_blank',
      `width=${width},height=${height},left=${left},top=${top},resizable=yes,scrollbars=yes`
    );
  };

  return (
    <div>
      <Swiper
        spaceBetween={10}
        pagination={{
          clickable: true,
        }}
        modules={[Pagination]}
        className="h-[280px] sm:h-[480px]"
      >
        {workSlider.slides.map((slide, index) => (
          <SwiperSlide key={index}>
            <div className="grid grid-cols-2 grid-rows-2 gap-4 cursor-pointer">
              {slide.images.map((image, index) => (
                <button
                  type="button"
                  key={index}
                  onClick={(event) => openDemo(event, image.link)}
                  className="text-left"
                  aria-label={`Open ${image.title} demo`}
                >
                  <div className="relative rounded-lg overflow-hidden flex items-center justify-center group">
                    <div className="flex items-center justify-center relative overflow-hidden group">
                      <div className="relative w-[500px] h-[250px]">
                      {/* image */}
                      <Image src={image.path} alt={image.title} fill unoptimized  />
                      </div>
                      {/* overlay gradient */}
                      <div className="absolute inset-0 bg-gradient-to-l from-transparent via-[#46dbd4] to-[#a39968] opacity-0 group-hover:opacity-80 transition-all duration-700"></div>
                      {/* title */}
                      <div className="absolute bottom-0 translate-y-full group-hover:-translate-y-10 group-hover:xl:-translate-y-20 transition-all duration-300">
                        <div className="flex items-center gap-x-2 text-[13px] tracking-[0.2em]">
                          {/* title part 1 */}
                          <div className="sm:text-sm delay-100">{image.title}</div>
                          {/* title part 2 */}
                          <div className="sm:text-sm translate-y-[500%] group-hover:translate-y-0 transition-all duration-300 delay-150">
                            demo
                          </div>
                          {/* icon */}
                          <div className="sm:text-sm text-xl translate-y-[500%] group-hover:translate-y-0 transition-all duration-300 delay-200">
                            <BsArrowRight />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </button>
              ))}
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default WorkSlider;
