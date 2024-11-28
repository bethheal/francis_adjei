import React from "react";

const Home = () => {
  return (
    <div className="bgImg w-full h-screen bg-black bg-opacity-80 flex items-center justify-center">
      <div className="text-white flex flex-col items-center py-5 px-5 space-y-4 md:space-y-2 mr-5 md:mr-10 lg:mr-20 font-oswald m-10 md:m-20 lg:m-40">
        <span className="text-[30px] md:text-[20px] text-center">Lorem ipsum</span>
        <span className="text-[40px] md:text-[32px] lg:text-[80px] text-center">
          dolorum <span className="text-orange-500">voluptatibus</span>
        </span>
        <p className="font-roboto text-[24px] md:text-[16px] text-center">
          necessitatibus eligendi et animi.
        </p>
        <p className="text-[24px] md:text-[14px] text-center">
          <a
            href="#projects"
            className="hover:text-orange-500 transition-colors duration-300"
          >
            _______PROJECTS_______
          </a>
        </p>
      </div>
    </div>
  );
};

export default Home;
