import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';


// import required modules
import { Pagination, Autoplay } from 'swiper/modules';

export default function SwiperComponent() {
  return (
    <>
      <Swiper
        spaceBetween={30}
        pagination={{
          clickable: true,
        }}
        autoplay={{
          delay:3000,
          disableOnInteraction: false, 
        }}
        loop={true}
        modules={[Pagination,Autoplay]}
        className="mySwiper "
      >
        <SwiperSlide className='py-10'>
          <h5 className='text-[14px] font-roboto text-slate-700'>TESTIMONIALS</h5>
          <h2 className='text-[25px] font-oswald text-black'>Lorem ipsum dolor sit LOREM</h2>
          <p className='text-[15px] font-roboto text-slate-700'>Lorem ipsum dolor sit amet consectetur adipisicing elit. <br />Error tempore, sunt consequatur quo perspiciatis,<br /> repellat earum dolor itaque unde quia assumenda beatae temporibus nam <br /> eveniet laborum corporis ipsum vero nemo?</p>
          <h3 className='text-[24px] font-roboto text-black '>John Doe, <span className='text-slate-700 text-[16px]'>Position</span></h3>
        </SwiperSlide>
        <SwiperSlide>
          <h5 className='text-[14px] font-roboto text-slate-700'>TESTIMONIALS</h5>
          <h2 className='text-[25px] font-oswald text-black'>Lorem ipsum dolor sit LOREM</h2>
          <p className='text-[15px] font-roboto text-slate-700'>Lorem ipsum dolor sit amet consectetur adipisicing elit. <br />Error tempore, sunt consequatur quo perspiciatis,<br /> repellat earum dolor itaque unde quia assumenda beatae temporibus nam <br /> eveniet laborum corporis ipsum vero nemo?</p>
          <h3 className='text-[24px] font-roboto text-black '>John Doe, <span className='text-slate-700 text-[16px]'>Position</span></h3>
        </SwiperSlide>
        <SwiperSlide>
          <h5 className='text-[14px] font-roboto text-slate-700'>TESTIMONIALS</h5>
          <h2 className='text-[25px] font-oswald text-black'>Lorem ipsum dolor sit LOREM</h2>
          <p className='text-[15px] font-roboto text-slate-700'>Lorem ipsum dolor sit amet consectetur adipisicing elit. <br />Error tempore, sunt consequatur quo perspiciatis,<br /> repellat earum dolor itaque unde quia assumenda beatae temporibus nam <br /> eveniet laborum corporis ipsum vero nemo?</p>
          <h3 className='text-[24px] font-roboto text-black '>John Doe, <span className='text-slate-700 text-[16px]'>Position</span></h3>
        </SwiperSlide>
        <SwiperSlide>
          <h5 className='text-[14px] font-roboto text-slate-700'>TESTIMONIALS</h5>
          <h2 className='text-[25px] font-oswald text-black'>Lorem ipsum dolor sit LOREM</h2>
          <p className='text-[15px] font-roboto text-slate-700'>Lorem ipsum dolor sit amet consectetur adipisicing elit. <br />Error tempore, sunt consequatur quo perspiciatis,<br /> repellat earum dolor itaque unde quia assumenda beatae temporibus nam <br /> eveniet laborum corporis ipsum vero nemo?</p>
          <h3 className='text-[24px] font-roboto text-black '>John Doe, <span className='text-slate-700 text-[16px]'>Position</span></h3>
        </SwiperSlide>
        <SwiperSlide>
          <h5 className='text-[14px] font-roboto text-slate-700'>TESTIMONIALS</h5>
          <h2 className='text-[25px] font-oswald text-black'>Lorem ipsum dolor sit LOREM</h2>
          <p className='text-[15px] font-roboto text-slate-700'>Lorem ipsum dolor sit amet consectetur adipisicing elit. <br />Error tempore, sunt consequatur quo perspiciatis,<br /> repellat earum dolor itaque unde quia assumenda beatae temporibus nam <br /> eveniet laborum corporis ipsum vero nemo?</p>
          <h3 className='text-[24px] font-roboto text-black '>John Doe, <span className='text-slate-700 text-[16px]'>Position</span></h3>
        </SwiperSlide>
        
       
      </Swiper>
    </>
  );
}
