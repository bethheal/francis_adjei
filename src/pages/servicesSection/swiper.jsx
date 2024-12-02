import React from 'react';
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
          delay: 3000,
          disableOnInteraction: false,
        }}
        loop={true}
        modules={[Pagination, Autoplay]}
        className="mySwiper"
      >
        <SwiperSlide className="py-10">
          <h5 className="text-[14px] font-roboto text-slate-700">TESTIMONIALS</h5>
          <h2 className="text-[25px] font-oswald text-black">Green Synergy Transforms the Beauty Industry</h2>
          <p className="text-[15px] font-roboto text-slate-700">
            "Green Synergy Limited's innovative use of surplus vegetables in their cosmetics has transformed the industry. Their products are not only effective but also eco-friendly, making beauty more sustainable."
          </p>
          <h3 className="text-[24px] font-roboto text-black">
            Sarah Green, <span className="text-slate-700 text-[16px]">Beauty Expert</span>
          </h3>
        </SwiperSlide>
        <SwiperSlide>
          <h5 className="text-[14px] font-roboto text-slate-700">TESTIMONIALS</h5>
          <h2 className="text-[25px] font-oswald text-black">Sustainable Farming Practices Revolutionized</h2>
          <p className="text-[15px] font-roboto text-slate-700">
            "Green Synergy's eco-friendly fertilizers have greatly enhanced our soil health. We've seen noticeable improvements in crop yield and sustainability, and I highly recommend their products."
          </p>
          <h3 className="text-[24px] font-roboto text-black">
            Michael Johnson, <span className="text-slate-700 text-[16px]">Agronomist</span>
          </h3>
        </SwiperSlide>
        <SwiperSlide>
          <h5 className="text-[14px] font-roboto text-slate-700">TESTIMONIALS</h5>
          <h2 className="text-[25px] font-oswald text-black">Community Engagement for a Better Future</h2>
          <p className="text-[15px] font-roboto text-slate-700">
            "The workshops provided by Green Synergy Limited have had a profound impact on our community. We've learned invaluable sustainable farming practices that are making a real difference."
          </p>
          <h3 className="text-[24px] font-roboto text-black">
            Emily Rodriguez, <span className="text-slate-700 text-[16px]">Community Leader</span>
          </h3>
        </SwiperSlide>
        <SwiperSlide>
          <h5 className="text-[14px] font-roboto text-slate-700">TESTIMONIALS</h5>
          <h2 className="text-[25px] font-oswald text-black">Improved Agricultural Productivity with Eco-Friendly Solutions</h2>
          <p className="text-[15px] font-roboto text-slate-700">
            "The eco-friendly fertilizers from Green Synergy have greatly improved the productivity of our farms. Their commitment to sustainability is something we truly appreciate."
          </p>
          <h3 className="text-[24px] font-roboto text-black">
            James Thomas, <span className="text-slate-700 text-[16px]">Farm Owner</span>
          </h3>
        </SwiperSlide>
        <SwiperSlide>
          <h5 className="text-[14px] font-roboto text-slate-700">TESTIMONIALS</h5>
          <h2 className="text-[25px] font-oswald text-black">Sustainability That Makes a Difference</h2>
          <p className="text-[15px] font-roboto text-slate-700">
            "Working with Green Synergy has been a game-changer. Their focus on sustainability in both farming and beauty industries has opened new doors for businesses like ours."
          </p>
          <h3 className="text-[24px] font-roboto text-black">
            Olivia Martin, <span className="text-slate-700 text-[16px]">Sustainability Advocate</span>
          </h3>
        </SwiperSlide>
      </Swiper>
    </>
  );
}
