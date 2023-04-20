import { useInView } from "framer-motion";
import React, { useRef } from "react";

function Projects() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  return (
    <div id="projects" className="max-[500px]:text-center">
      <hr className="m-10"></hr>
      <span className="text-secondary-100 text-sm mb-2">PROJECTS</span>
      <h1
        className="text-4xl font-bold "
        ref={ref}
        style={{
          transform: isInView ? "none" : "translateX(-200px)",
          opacity: isInView ? 1 : 0,
          transition: "all 0.9s cubic-bezier(0.17, 0.55, 0.55, 1) 0.5s",
        }}
      >
        <span className="border-b-[3px]  border-secondary-100"> My</span>{" "}
        <span>projects</span>
      </h1>
      <div
        className=" flex flex-col justify-center items-center m-10 font-bold uppercase max-[500px]:text-2xl"
        ref={ref}
        style={{
          transform: isInView ? "none" : "translateX(-200px)",
          opacity: isInView ? 1 : 0,
          transition: "all 0.9s cubic-bezier(0.17, 0.55, 0.55, 1) 0.5s",
        }}
      >
        <p className="m-1 md:m-5">you can view my all projects in my github</p>
        <a
          className="btn px-14 py-3 text-center bg-secondary mx-3"
          href="https://github.com/youssefsaeed555/"
        >
          Github
        </a>
      </div>
      <div
        className="relative md:left-16"
        ref={ref}
        style={{
          transform: isInView ? "none" : "translateY(-200px)",
          opacity: isInView ? 1 : 0,
          transition: "all 2s cubic-bezier(0.17, 0.55, 0.55, 1) 1s",
        }}
      >
        <img src="/images/project.png"></img>
        <div className="absolute w-[76%] max-[500px]:text-lg max-[500px]:h-[18%] top-[58%] left-[3rem] md:w-[67.4%] md:top-[68%] md:left-[9.2rem] bg-primary bg-opacity-80 ">
          <div className=" flex justify-between max-[500px]:flex-col p-2 font-bold">
            <p className="pt-2 max-[500px]:hidden">Blog website</p>
            <div>
              <a
                className="btn bg-secondary max-[500px]:btn-sm mx-3"
                href="https://github.com/youssefsaeed555/plog-ITI"
              >
                Github
              </a>
              <a
                className="btn bg-secondary max-[500px]:btn-sm"
                href="https://plog-iti.vercel.app/"
              >
                Live demo
              </a>
            </div>
          </div>
        </div>
      </div>
      <hr className="m-10"></hr>
    </div>
  );
}
/*
          className="absolute top-9 left-[9.4rem] w-[53.8rem] h-[34rem] bg-cover"

*/
export default Projects;
