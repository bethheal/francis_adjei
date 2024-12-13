import React from "react";
import teamData from "./teamConstant";

const Team = () => {
  return (

    <section id="team">
    

      {/* Page Container */}
      <div className="flex items-center justify-center min-h-screen bg-white py-10">
        <div className="flex flex-col">

          <div className="flex flex-col mt-8">
            {/* Meet the Team */}
            <div className="container max-w-7xl px-4">
              {/* Section Header */}
              <div className="flex flex-wrap justify-center text-center mb-24">
                <div className="w-full lg:w-6/12 px-4">
                  <h1 className="text-gray-900 text-4xl font-bold mb-8">
                    Meet the Team
                  </h1>
                  <p className="text-gray-700 text-lg font-light">
                    At Green Synergy Limited, we are committed to
                    revolutionizing the agricultural sector by tackling
                    post-harvest losses in vegetable farming. With our
                    innovative agro-processing methods, we transform surplus
                    vegetables into valuable cosmetic products and organic
                    fertilizers, promoting sustainability and improving farm
                    productivity. Meet the team driving this mission forward.
                  </p>
                </div>
              </div>

              {/* Team Members */}
              <div className="flex flex-wrap">
                {teamData.map((member, index) => (
                  <div
                    key={index}
                    className="w-full md:w-6/12 lg:w-3/12 mb-6 px-6 sm:px-6 lg:px-4"
                  >
                    <div className="flex flex-col">
                      <a href="#" className="mx-auto">
                        <img
                          className="rounded-2xl drop-shadow-md hover:drop-shadow-xl transition-all duration-200 delay-100"
                          src={member.imgSrc}
                          alt={member.name}
                        />
                      </a>
                      <div className="text-center mt-6">
                        <h1 className="text-gray-900 text-xl font-bold mb-1">
                          {member.name}
                        </h1>
                        <div className="text-gray-700 font-light mb-2">
                          {member.title}
                        </div>
                        <div className="flex items-center justify-center opacity-50 hover:opacity-100 transition-opacity duration-300">
                          {member.description}
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Team;
