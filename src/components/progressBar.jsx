import { useInView } from "framer-motion";
import React, { useRef } from "react";

function ProgressBar({ skill, value }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  return (
    <div>
      <span
        className="font-bold"
        ref={ref}
        style={{
          transform: isInView ? "none" : "translateX(-200px)",
          opacity: isInView ? 1 : 0,
          transition: "all 0.9s cubic-bezier(0.17, 0.55, 0.55, 1) 0.5s",
        }}
      >
        {skill}
      </span>
      <div
        ref={ref}
        style={{
          transform: isInView ? "none" : "translateX(-200px)",
          opacity: isInView ? 1 : 0,
          transition: "all 0.9s cubic-bezier(0.17, 0.55, 0.55, 1) 0.5s",
        }}
        className="h-[10px] my-6 flex rounded bg-slate-300 overflow-hidden"
      >
        <div
          style={{ width: `${value}%` }}
          className={` bg-secondary transition-all duration-500`}
        ></div>
      </div>
    </div>
  );
}

export default ProgressBar;
