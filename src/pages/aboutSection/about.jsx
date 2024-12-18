import React from "react";

const About = () => {
  return (
    <section id="about">
      <div className="font-oswald flex flex-col justify-center items-center m-5 md:m-20 px-10">
        <div className="text-center max-w-2xl">
          {/* Section Title */}
          <h5 className="text-slate-700 text-sm my-4">ABOUT OUR PRODUCT</h5>
          
          {/* Heading */}
          <h2 className="text-2xl my-5">Who We Are</h2>
          
          {/* Description about the company */}
          <p className="text-slate-700 text-lg font-roboto">
            Green Synergy Limited is an SME dedicated to revolutionizing agriculture by tackling post-harvest losses in vegetable farming. Our innovative approach transforms surplus vegetables into organic cosmetics and by-products into eco-friendly fertilizers, promoting sustainability, reducing waste, and enhancing productivity.
          </p>
          
          {/* Mission */}
          <h3 className="text-xl my-5 text-orange-500">Our Mission:</h3>
          <p className="text-slate-700 text-lg font-roboto">
            To reduce post-harvest losses, promote sustainable agriculture, and contribute to environmental stewardship through innovative agro-processing solutions.
          </p>
          
          {/* Vision */}
          <h3 className="text-xl my-5 text-orange-500">Our Vision:</h3>
          <p className="text-slate-700 text-lg font-roboto">
            To create a future where farmers, consumers, and the environment thrive through sustainable practices.
          </p>
          
          {/* Button to read more */}
          <div className="mt-10 flex justify-center">
            <a
              href="#team" // Link to a detailed About Us page
              className="font-oswald bg-black hover:bg-orange-500 text-white text-base font-lato font-semibold tracking-wider py-3 px-8 border-[3px] border-white hover:border-white rounded-full transition duration-150 whitespace-nowrap"
            >
              READ MORE
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
