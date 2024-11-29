import React from "react";

const Hero = () => {
  return (
   <section id="hero">
     <div className="bgImg w-full h-screen bg-black bg-opacity-15 flex items-center justify-center px-4">
      <div className="text-white flex flex-col  items-center sm:items-end sm:mr-5 text-center sm:text-right font-oswald ">
        <span className="text-2xl md:text-xl lg:text-3xl">Lorem ipsum</span>
        <h1 className="text-3xl md:text-2xl lg:text-6xl font-bold">
          dolorum <span className="text-orange-500">voluptatibus</span>
        </h1>
        <p className="font-roboto text-lg md:text-base lg:text-xl">
          necessitatibus eligendi et animi.
        </p>
        <p className="text-lg md:text-sm">
          <a
            href="#projects"
            className="hover:text-orange-500 transition-colors duration-300 underline-offset-8"
          >
            ------------ VIEW PROJECTS --------------
          </a>
        </p>
      </div>
    </div>
   </section>
  );
};

export default Hero;
