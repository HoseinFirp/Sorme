import slider1 from "../images/slider1.png";
import slider2 from "../images/slider2.png";
import slider3 from "../images/slider3.png";

// import Image from 'next/image'

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";

// import { images } from '@/lib/images'

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

export default function Carousel() {
  return (
    <section className="py-12">
      <div className="container">
        <Swiper
          navigation
          pagination={{ type: "fraction" }}
          modules={[Navigation, Pagination]}
          onSwiper={(swiper) => console.log(swiper)}
          className="h-96 w-full rounded-lg"
        >
          <SwiperSlide>
            <div className="flex h-full w-full items-center justify-center">
              <img
                src={slider1}
                className="w-full mt-5 h-fit ml-auto mr-auto"
              />
              <img
                src={slider2}
                className="w-full mt-5 h-fit ml-auto mr-auto"
              />
              <img
                src={slider3}
                className="w-full mt-5 h-fit ml-auto mr-auto"
              />
            </div>
          </SwiperSlide>
        </Swiper>
      </div>
    </section>
  );
}
