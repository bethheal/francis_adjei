import React from "react";
import teamData from "./teamConstant";

const Team = () => {
  return (
    <section id="team">
      {/* Page Container */}
      <div className="flex items-center justify-center min-h-screen bg-white py-10 px-4">
        <div className="flex flex-col w-full max-w-7xl">
          {/* Meet the Team Header */}
          <div className="text-center mb-16">
            <h1 className="text-gray-900 text-4xl md:text-5xl font-bold mb-6">
              Meet the Team
            </h1>
            <p className="text-gray-700 text-lg md:text-xl font-light leading-relaxed">
              At Green Synergy Limited, we are committed to revolutionizing the
              agricultural sector by tackling post-harvest losses in vegetable
              farming. With our innovative agro-processing methods, we transform
              surplus vegetables into valuable cosmetic products and organic
              fertilizers, promoting sustainability and improving farm
              productivity. Meet the team driving this mission forward.
            </p>
          </div>

          {/* Team Members */}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {teamData.map((member, index) => (
              <div
                key={index}
                className="flex flex-col items-center bg-white p-4 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300"
              >
                <a href="#" className="block">
                  <img
                    className="w-full h-auto rounded-xl drop-shadow-md hover:drop-shadow-xl transition-transform duration-300 transform hover:scale-105"
                    src={member.imgSrc}
                    alt={member.name}
                  />
                </a>
                <div className="text-center mt-4">
                  <h1 className="text-gray-900 text-lg md:text-xl font-bold mb-1">
                    {member.name}
                  </h1>
                  <div className="text-gray-700 font-light mb-2">
                    {member.title}
                  </div>
                  <p className="text-gray-600 text-sm md:text-base font-light">
                    {member.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Team;
