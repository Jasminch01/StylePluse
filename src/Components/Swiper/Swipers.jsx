import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
// import { useEffect, useState } from "react";
import "swiper/css/autoplay";
import "swiper/swiper-bundle.css";

import { Navigation, Pagination, Autoplay } from "swiper/modules";

const Swipers = () => {
  const imgs = [
    "https://i.ibb.co/R2h0mwZ/6224346715-6-1-1.jpg",
    "https://i.ibb.co/yn34fsd/img-1.jpg",
    "https://i.ibb.co/W2YW305/img-2.jpg",
    "https://i.ibb.co/Sv5PhxY/6514690800-6-1-1.jpg"
  ];

  return (
    <Swiper
      modules={[Navigation, Pagination, Autoplay]}
      navigation
      pagination={{ clickable: true }}
      spaceBetween={10}
      autoplay={{ delay: 5000 }}
      slidesPerView={1}
    >
      {imgs.map((img, idx) => (
        <SwiperSlide key={idx} className="bg-slate-100 p-5">
          <div className=" w-[80%] mx-auto">
            <div className="md:flex items-center justify-center">
              <div className="">
                <img src={img} alt="" className="w-[300px] h-[500px]" />
              </div>
              <div className="space-y-4">
                <h1 className="md:text-5xl text-center md:text-start font-black">
                  Vibrent Clothing For <br /> modern People
                </h1>
                <p className="text-center md:text-start">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Earum,
                  <br />
                  velit molestiae. Mollitia aspernatur modi, suscipit nam
                  deseruntbr consequatur <br /> eaque commodi soluta illum sunt
                  blanditiis magnam esse pariatur magni quam perferendis!
                </p>
                <div className="md:text-start text-center">
                  <button className="p-3 bg-teal-500 text-white">
                    Buy Now
                  </button>
                </div>
              </div>
            </div>
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default Swipers;
