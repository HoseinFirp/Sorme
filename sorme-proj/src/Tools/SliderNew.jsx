import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation } from "swiper/modules";
import "swiper/css";
import "./swiper1.css";
import "swiper/css/navigation";
import slider1 from "../images/slider1.png";
import slider2 from "../images/slider2.png";
import slider3 from "../images/slider3.png";

const SliderOne = () => {
  return (
    <div className="mt-44">
      <Swiper
        modules={[Navigation, Autoplay]}
        navigation
        slidesPerView={1}
        loop
        // 800
        speed={2000}
        // className="h-full w-[100%]"
        autoplay={{
          // 2500
          delay: 4000,
          disableOnInteraction: false,
        }}
        breakpoints={{
          320: {
            navigation: {
              enabled: false,
            },
            speed: 1000,
          },
          1024: {
            navigation: {
              enabled: true,
            },
          },
        }}
      >
        <SwiperSlide>
          <img src={slider1} alt="slider1" className="h-40 mx-auto" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={slider2} alt="slider1" className="h-40 mx-auto" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={slider3} alt="slider1" className="h-40 mx-auto" />
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default SliderOne;
