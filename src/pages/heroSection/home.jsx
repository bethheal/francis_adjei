import { heroImg1, heroImg2, Img1 } from "../../assets";

import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "../../App.css";

const Hero = () => {
  return (
    <div className="w-full h-screen relative">
      <Swiper
        modules={[Navigation, Autoplay]}
        navigation={{
          nextEl: ".custom-next-button",
          prevEl: ".custom-prev-button",
        }}
        slidesPerView={1}
        loop={true}
        autoplay={{
          delay: 3000, // Adjust the delay time (in milliseconds)
          disableOnInteraction: false, // Allows autoplay to continue even after user interaction
        }}
        className="h-full w-full"
      >
        {/* Slide 1 */}
        <SwiperSlide>
          <div className="relative h-full">
            <img
              src={heroImg1}
              alt="Slide 1"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-black bg-opacity-50"></div>
            <div className="absolute inset-0 flex flex-col items-center justify-center text-center text-white px-5">
              <span className="text-3xl md:text-xl uppercase pt-10 lg:text-4xl">
                Sustainable Agro-Processing
              </span>
              <h1 className="text-2xl md:text-3xl lg:text-7xl py-5 uppercase font-bold">
                <span className="text-orange-500">
                  A Remedy for Post-Harvest Losses in Vegetable Farming
                </span>
              </h1>
              <p className="text-lg md:text-lg py-10">
                <a
                  href="#about"
                  className="text-[#FFFFF0] hover:text-orange-500 transition duration-300 underline decoration-2 underline-offset-8"
                >
                  LEARN MORE
                </a>
              </p>
            </div>
          </div>
        </SwiperSlide>

        {/* Slide 2 */}
        <SwiperSlide>
          <div className="relative h-full">
            <img
              src={heroImg2}
              alt="Slide 2"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-black bg-opacity-50"></div>
          </div>
        </SwiperSlide>

        {/* Slide 3 */}
        <SwiperSlide>
  <div className="relative h-full">
    <img
      src={Img1}
      alt="Slide 3"
      className="w-full h-full object-cover"
    />
    <div className="absolute inset-0 bg-black bg-opacity-50"></div>
    <div className="absolute inset-0 flex flex-col items-center justify-center text-center text-white px-5 backdrop-blur-sm">
      <p className="font-roboto text-[#FFFFF0] text-3xl md:text-2xl lg:text-3xl py-5 w-full sm:w-[40rem]">
        Transforming surplus vegetables into high-quality cosmetics and
        eco-friendly fertilizers to promote sustainability and enhance farm
        productivity.
      </p>
      <p className="text-lg md:text-lg py-10">
        <a
          href="#about"
          className="text-[#FFFFF0] hover:text-orange-500 transition duration-300 underline decoration-2 underline-offset-8"
        >
          LEARN MORE
        </a>
      </p>
    </div>
  </div>
</SwiperSlide>

      </Swiper>

      {/* Custom Navigation Buttons */}
      <div className="nav-btn custom-prev-button absolute left-5 top-1/2 transform -translate-y-1/2 z-10">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          width="24"
          height="24"
          fill="none"
          stroke="#fff"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
        >
          <line x1="19" x2="5" y1="12" y2="12" />
          <polyline points="12 19 5 12 12 5" />
        </svg>
      </div>

      <div className="nav-btn custom-next-button absolute right-5 top-1/2 transform -translate-y-1/2 z-10">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          width="24"
          height="24"
          fill="none"
          stroke="#fff"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
        >
          <line x1="5" x2="19" y1="12" y2="12" />
          <polyline points="12 5 19 12 12 19" />
        </svg>
      </div>
    </div>
  );
};

export default Hero;