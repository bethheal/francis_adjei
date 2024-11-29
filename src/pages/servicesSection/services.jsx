import React from "react";
import SwiperComponent from "./swiper";
import { testimonalsImg } from "../../assets";

const Services = () => {
  return (
    <section id="services">
      <div className="m-5 md:m-20 text-slate-700 my-10 md:my-20">
      <div className="my-5 md:my-10 text-center">
        <p className="font-roboto text-base md:text-lg">OUR SERVICES</p>
        <h2 className="font-oswald text-3xl md:text-6xl">WHAT WE OFFER</h2>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 grid-rows-auto gap-4 md:gap-y-4 p-5 md:p-20">
        <div className="bg-[#f7f7f7] flex items-center justify-center w-full h-48 md:h-96">
          Text 1
        </div>
        <div className="bg-orange-500 text-white flex items-center justify-center h-48 md:h-96">
          Image 1
        </div>
        <div className="bg-orange-500 flex items-center justify-center w-full h-48 md:h-96">
          Image
        </div>
        <div className="bg-[#f7f7f7] text-white flex items-center justify-center h-48 md:h-96">
          Text 2
        </div>
      </div>
      <div className="flex flex-col md:flex-row justify-between items-center mx-5 md:mx-20 w-full">
        {/* Left side */}
        <span className="w-full md:w-1/2 flex items-center justify-center mb-5 md:mb-0">
          <img
            src={testimonalsImg}
            alt="Testimonials"
            className="w-full max-w-sm md:max-w-full"
          />
        </span>

        {/* Right side */}
        <div className="w-full md:w-1/2 flex items-center p-5 md:p-10 justify-center">
          <SwiperComponent />
        </div>
      </div>
    </div>

    </section>
  );
};

export default Services;
