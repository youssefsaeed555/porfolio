import React, { useRef } from "react";

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

import { Pagination, Scrollbar, A11y, Controller } from "swiper";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import Card from "./Card";
import Avatar from "./Avatar";
import { useInView } from "framer-motion";

function Swipper() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  return (
    <div id="reviews" className="max-[500px]:text-center">
      <span className="text-secondary-100 text-sm mb-5">REVIEWS</span>
      <h1
        className="text-4xl font-bold mb-7"
        ref={ref}
        style={{
          transform: isInView ? "none" : "translateX(-200px)",
          opacity: isInView ? 1 : 0,
          transition: "all 0.9s cubic-bezier(0.17, 0.55, 0.55, 1) 0.5s",
        }}
      >
        <span className="border-b-[3px]  border-secondary-100"> Review</span>{" "}
        <span> From Clients</span>
      </h1>
      <Swiper
        modules={[Pagination]}
        spaceBetween={5}
        slidesPerView={1}
        pagination={{ clickable: true }}
        className="mr-10"
      >
        <SwiperSlide className=" text-center flex justify-center">
          <div className="p-10">
            <Card
              src="/images/avater.jpg"
              head={"youssef saeed"}
              w={"full"}
              paragraph={
                "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Tenetur quos aliquam nisi quo assumenda provident, quaerat temporibus eius labore eligendi omnis impedit dolorum rerum cupiditate facilis quibusdam porro id nulla."
              }
            ></Card>
          </div>
        </SwiperSlide>
        <SwiperSlide className=" text-center flex justify-center">
          <div className="p-10">
            <Card
              src="/images/avater.jpg"
              head={"virgil vandik"}
              w={"full"}
              paragraph={
                "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Tenetur quos aliquam nisi quo assumenda provident, quaerat temporibus eius labore eligendi omnis impedit dolorum rerum cupiditate facilis quibusdam porro id nulla."
              }
            ></Card>
          </div>
        </SwiperSlide>
        <SwiperSlide className=" text-center flex justify-center">
          <div className="p-10">
            <Card
              src="/images/avater.jpg"
              head={"henderson"}
              w={"full"}
              paragraph={
                "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Tenetur quos aliquam nisi quo assumenda provident, quaerat temporibus eius labore eligendi omnis impedit dolorum rerum cupiditate facilis quibusdam porro id nulla."
              }
            ></Card>
          </div>
        </SwiperSlide>
        <SwiperSlide className=" text-center flex justify-center">
          <div className="p-10">
            <Card
              src="/images/avater.jpg"
              head={"kevin de bruyne"}
              w={"full"}
              paragraph={
                "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Tenetur quos aliquam nisi quo assumenda provident, quaerat temporibus eius labore eligendi omnis impedit dolorum rerum cupiditate facilis quibusdam porro id nulla."
              }
            ></Card>
          </div>
        </SwiperSlide>
      </Swiper>
      <hr className="m-10"></hr>
    </div>
  );
}

export default Swipper;
