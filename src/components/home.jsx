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
        {/* <div className="max-[500px]:m-5 mb-16">
          <ProgressBar skill={"Back-End"} value={85}></ProgressBar>
          <ProgressBar skill={"Front-End"} value={60}></ProgressBar>
          <ProgressBar skill={"UI / UX "} value={40}></ProgressBar>
        </div> */}
        <TagCloud
          options={(w) => ({
            radius: Math.min(500, w.innerWidth, w.innerHeight) / 2,
            maxSpeed: "normal",
          })}
          onClickOptions={{ passive: true }}
          className="mt-[-2rem] ml-[-1rem] max-[500px]:overflow-x-hidden min-[762px]:ml-96"
          style={{
            transform: isInView ? "none" : "translateY(-200px)",
            opacity: isInView ? 1 : 0,
            transition: "all 0.9s cubic-bezier(0.17, 0.55, 0.55, 1) 0.5s",
          }}
        >
          {skills}
        </TagCloud>
      </div>
      <div
        style={{
          transform: isInView ? "none" : "translateY(-200px)",
          opacity: isInView ? 1 : 0,
          transition: "all 3.5s cubic-bezier(0.17, 0.55, 0.55, 1) 1s",
        }}
        className="mt-3 flex justify-content-center gap-24 flex-wrap max-[500px]:flex-col"
      >
        <div className="tech mb-5 mb-md-0">
          <div className="icon-container m-auto">
            <img
              src="https://raw.githubusercontent.com/devicons/devicon/master/icons/react/react-original-wordmark.svg"
              alt="React Logo"
              className="img-ico"
            />
          </div>
          <p className="fs-2 text-center">React</p>
        </div>
        <div className="tech mb-5 mb-md-0">
          <div className="icon-container m-auto">
            <img
              src="https://raw.githubusercontent.com/devicons/devicon/master/icons/typescript/typescript-original.svg"
              alt="Typescript"
              className="img-ico"
            />
          </div>
          <p className="fs-2 text-center">Typescript</p>
        </div>
        <div className="tech mb-5 mb-md-0">
          <div className="icon-container m-auto">
            <img
              src="https://files.raycast.com/4dnlt8m2mcb98bzc4zb8pggc4csi"
              alt="Nextjs Logo"
              className="img-ico"
            />
          </div>
          <p className="fs-2 text-center">Nextjs</p>
        </div>
        <div className="tech mb-5 mb-md-0">
          <div className="icon-container m-auto">
            <img
              src="https://camo.githubusercontent.com/9eecc42439347332f256a326363924551042f5b96235f972982512199476611a/68747470733a2f2f616e67756c61722e696f2f6173736574732f696d616765732f6c6f676f732f616e67756c61722f616e67756c61722e737667"
              alt="Angular Logo"
              className="img-ico"
            />
          </div>
          <p className="fs-2 text-center">Angular</p>
        </div>
        <div className="tech mb-5 mb-md-0">
          <div className="icon-container m-auto">
            <img
              src="https://raw.githubusercontent.com/devicons/devicon/master/icons/javascript/javascript-original.svg"
              alt="Javascript"
              className="img-ico"
            />
          </div>
          <p className="fs-2 text-center">JS</p>
        </div>
        <div className="tech mb-5 mb-md-0 transition-all">
          <div className="icon-container m-auto">
            <img
              src="https://cdn-icons-png.flaticon.com/512/5968/5968322.png"
              alt="Nodejs Logo"
              className="img-ico"
            />
          </div>
          <p className="fs-2 text-center">Nodejs</p>
        </div>
        <div className="tech mb-5 mb-md-0">
          <div className="icon-container m-auto">
            <img
              src="https://raw.githubusercontent.com/devicons/devicon/master/icons/nestjs/nestjs-plain.svg"
              alt="Nestjs Logo"
              className="img-ico"
            />
          </div>
          <p className="fs-2 text-center">Nestjs</p>
        </div>
        <div className="tech mb-5 mb-md-0">
          <div className="icon-container m-auto">
            <img
              src="https://raw.githubusercontent.com/devicons/devicon/master/icons/mongodb/mongodb-original-wordmark.svg"
              alt="MongoDB Logo"
              className="img-ico"
            />
          </div>
          <p className="fs-2 text-center">MongoDB</p>
        </div>
        <div className="tech mb-5 mb-md-0">
          <div className="icon-container m-auto">
            <img
              src="https://raw.githubusercontent.com/devicons/devicon/master/icons/sass/sass-original.svg"
              alt="SASS Logo"
              className="img-ico"
            />
          </div>
          <p className="fs-2 text-center">SASS</p>
        </div>
        <div className="tech mb-5 mb-md-0">
          <div className="icon-container m-auto">
            <img
              src="https://camo.githubusercontent.com/5734d0669fe22ce04a1cb989a156cd32c379875f6bca56d5210c9432824856d9/68747470733a2f2f7777772e766563746f726c6f676f2e7a6f6e652f6c6f676f732f7461696c77696e646373732f7461696c77696e646373732d69636f6e2e737667"
              alt="Tailwind Logo"
              className="img-ico"
            />
          </div>
          <p className="fs-2 text-center">Tailwind</p>
        </div>
        <div className="tech mb-5 mb-md-0">
          <div className="icon-container m-auto">
            <img
              src="https://raw.githubusercontent.com/devicons/devicon/master/icons/express/express-original-wordmark.svg"
              alt="Express"
              className="img-ico"
            />
          </div>
          <p className="fs-2 text-center">Express</p>
        </div>
        <div className="tech mb-5 mb-md-0">
          <div className="icon-container m-auto">
            <img
              src="https://www.vectorlogo.zone/logos/graphql/graphql-icon.svg"
              alt="Graphql"
              className="img-ico"
            />
          </div>
          <p className="fs-2 text-center">Graphql</p>
        </div>
        <div className="tech mb-5 mb-md-0">
          <div className="icon-container m-auto">
            <img
              src="https://camo.githubusercontent.com/ed93c2b000a76ceaad1503e7eb9356591b885227e82a36a005b9d3498b303ba5/68747470733a2f2f7777772e766563746f726c6f676f2e7a6f6e652f6c6f676f732f6669676d612f6669676d612d69636f6e2e737667"
              alt="Figma Logo"
              className="img-ico"
            />
          </div>
          <p className="fs-2 text-center">Figma</p>
        </div>
      </div>
      <hr classNameName="m-10"></hr>
    </div>
  );
}

export default Home;
