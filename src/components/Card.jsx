import React, { useRef } from "react";
import Avatar from "./Avatar";

function Card({ icon, head, paragraph, src, w, time }) {
  const cardStyle = `card w-${
    w ? w : "96"
  } bg-[#033F47] m-6 shadow-2xl hover:bg-zinc-950 hover:scale-105 cursor-pointer  duration-500`;
  return (
    <div
      className={cardStyle}
      data-aos="fade-up"
      data-aos-easing="ease-in-sine"
      data-aos-duration={time}
    >
      <div className="card-body">
        {src ? <Avatar src={src}></Avatar> : ""}
        <i className={`${icon} fa-fade text-4xl text-secondary-100 `}></i>{" "}
        <h2 className="font-bold text-xl">{head}</h2>
        <p className="text-base text-gray-300">{paragraph}</p>
      </div>
    </div>
  );
}

export default Card;
