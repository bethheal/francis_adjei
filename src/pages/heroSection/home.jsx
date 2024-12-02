import React from "react";

const Hero = () => {
  return (
    <section id="hero">
      <div className="bgImg w-full h-screen flex items-center justify-center px-4 relative">
        {/* Dark overlay for better text visibility */}
        <div className="bg-overlay absolute top-0 left-0 w-full h-full bg-black opacity-60"></div>
        
        {/* Content section */}
        <div className="text-ivory flex flex-col items-center sm:items-center text-center w-[90%] md:w-[50rem] font-oswald relative z-10">
          {/* Tagline */}
          <span className="text-2xl text-[#FFFFF0] md:text-xl uppercase pt-10 lg:text-3xl">
            Sustainable Agro-Processing
          </span>
          {/* Main Heading */}
          <h1 className="text-xl md:text-2xl lg:text-6xl py-5 uppercase font-bold">
            <span className="text-orange-500">
              A Remedy for Post-Harvest Losses in Vegetable Farming
            </span>
          </h1>
          {/* Supporting Text */}
          <p className="font-roboto text-[#FFFFF0] text-lg md:text-base lg:text-xl py-5 w-full sm:w-[30rem]">
            Transforming surplus vegetables into high-quality cosmetics and
            eco-friendly fertilizers to promote sustainability and enhance farm
            productivity.
          </p>
          {/* Call-to-Action */}
          <p className="text-lg md:text-sm py-10">
            <a
              href="#about"
              className=" text-[#FFFFF0] hover:text-orange-500 transition duration-300 underline decoration-2 underline-offset-8"
            >
              LEARN MORE
            </a>
          </p>
        </div>
      </div>
    </section>
  );
};

export default Hero;
