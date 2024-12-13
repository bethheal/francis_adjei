import React from "react";
import SwiperComponent from "./swiper";
import { testimonalsImg } from "../../assets";
import services from "./constant"; // Import services from the constant file
import Team from "./team";

const Services = () => {
  return (
    <section id="services">

      <div className="m-5 md:m-20 text-slate-700 my-10 md:my-20">
        {/* Header Section */}
        <div className="my-5 md:my-10 text-center">
          <p className="font-roboto text-sm md:text-lg">OUR SERVICES & PRODUCTS</p>
          <h2 className="font-oswald text-2xl md:text-4xl">WHAT WE OFFER</h2>
        </div>

        {/* Services Mapping */}
        {services.map((service, index) => (
          <div
            key={index}
            className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6 p-5 md:p-10"
          >
            {/* Service Content */}
            <div className="bg-[#f7f7f7] flex items-center justify-center w-full h-auto p-4">
              <div className="text-left max-w-lg">
                <h4 className="text-md md:text-lg font-oswald my-3">{service.title}</h4>
                <p className="text-slate-700 text-sm md:text-base">{service.description}</p>
                <ul className="list-disc text-sm md:text-base text-orange-500 ml-5 text-left">
                  {service.products.map((product, idx) => (
                    <li key={idx}>{product}</li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Service Image */}
            <div className="bg-orange-500 text-white items-center justify-center h-48 md:h-96">
              <img
                src={service.image}
                alt={service.alt}
                className="object-cover h-full w-full"
              />
            </div>
          </div>
        ))}

        {/* Testimonials Section */}
        <div className="flex flex-col md:flex-row justify-between items-center mx-5 md:mx-20 w-full">
          <div className="w-full md:w-1/2 flex items-center justify-center mb-5 md:mb-0">
            <img
              src={testimonalsImg}
              alt="Testimonials"
              className="w-full max-w-xs md:max-w-sm"
            />
          </div>

          <div className="w-full md:w-1/2 flex items-center p-5 md:p-10 justify-center">
            <SwiperComponent />
          </div>
        </div>
      </div>

      <Team/>
    </section>
  );
};

export default Services;
