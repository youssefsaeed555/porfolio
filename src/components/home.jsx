import React, { useRef } from "react";
import { TagCloud } from "@frank-mayer/react-tag-cloud";
import ProgressBar from "./progressBar";
import { useInView } from "framer-motion";

function Home() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  const skills = [
    "Nodejs",
    "Javascript",
    "Reactjs",
    "Express",
    "MongoDB",
    "Tailwind",
    "Next",
    "Nest",
    "PostgreSQL",
    "C++",
    "OOP",
    "HTML",
    "CSS",
    "TypeScript",
    "Docker",
  ];
  return (
    <div className="App max-[500px]:text-center" id="skills">
      <span className="text-secondary-100 text-sm mb-2">SKILLS</span>
      <h1
        className="text-4xl font-bold animate-fade-in-up "
        ref={ref}
        style={{
          transform: isInView ? "none" : "translateX(-200px)",
          opacity: isInView ? 1 : 0,
          transition: "all 0.9s cubic-bezier(0.17, 0.55, 0.55, 1) 0.5s",
        }}
      >
        <span className="border-b-[3px]  border-secondary-100">
          {" "}
          Full-stack
        </span>{" "}
        <span>skills</span>
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-10 ">
        <div className="max-[500px]:m-5 mb-16">
          <ProgressBar skill={"Back-End"} value={85}></ProgressBar>
          <ProgressBar skill={"Front-End"} value={60}></ProgressBar>
          <ProgressBar skill={"UI / UX "} value={40}></ProgressBar>
        </div>
        <TagCloud
          options={(w) => ({
            radius: Math.min(550, w.innerWidth, w.innerHeight) / 2,
            maxSpeed: "normal",
          })}
          onClickOptions={{ passive: true }}
          className="mt-[-8rem] ml-16 max-[500px]:hidden"
          style={{
            transform: isInView ? "none" : "translateY(-200px)",
            opacity: isInView ? 1 : 0,
            transition: "all 0.9s cubic-bezier(0.17, 0.55, 0.55, 1) 0.5s",
          }}
        >
          {skills}
        </TagCloud>
      </div>
      <hr className="m-10"></hr>
    </div>
  );
}

export default Home;
