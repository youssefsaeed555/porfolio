import React, { useRef } from "react";
import Avatar from "./Avatar";
import { useInView } from "framer-motion";

function Card({ icon, head, paragraph, src, w }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  const cardStyle = `card w-${
    w ? w : "96"
  } bg-primary-100 m-6 shadow-2xl hover:bg-zinc-950 hover:scale-105 cursor-pointer  duration-500`;
  return (
    <div
      className={cardStyle}
      ref={ref}
      style={{
        transform: isInView ? "none" : "translateX(-200px)",
        opacity: isInView ? 1 : 0,
        transition: "all 1s cubic-bezier(0.17, 0.55, 0.55, 1) 0.9s",
      }}
    >
      <div className="card-body">
        {src ? <Avatar src={src}></Avatar> : ""}
        <i className={`${icon} fa-fade text-4xl text-secondary-100 `}></i>{" "}
        <h2 className="font-bold text-xl">{head}</h2>
        <p className="text-lg">{paragraph}</p>
      </div>
    </div>
  );
}

export default Card;
