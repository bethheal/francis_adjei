import React from "react";

const About = () => {
  return (
    <section id="about">
      <div className="font-oswald flex flex-col justify-center items-center m-20 px-4">
      <div className="text-center max-w-2xl">
        <h5 className="text-slate-700 text-sm my-4">ABOUT OUR PRODUCT</h5>
        <h2 className="text-2xl my-5">
          Lorem ipsum dolor sit amet consectetur
        </h2>
        <p className="text-slate-700 text-lg font-roboto">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt,
          accusamus. Cum obcaecati unde modi recusandae saepe, assumenda dolore,
          atque sapiente officia consequuntur quos. Dignissimos voluptate
          suscipit beatae est accusantium aspernatur!
        </p>
        <button className="m-20">
        <a
          href="#"
          class="font-oswald bg-black hover:bg-orange-500 text-slate-700 text-[16px] font-lato font-semibold tracking-wider py-4 px-6 border-[5px] border-white hover:border-white rounded-full transition duration-150"
        >
          READ MORE
        </a>
      </button>
      </div>
     
    </div>

    </section>
  );
};

export default About;
