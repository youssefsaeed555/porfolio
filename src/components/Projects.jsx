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
      <div className=" flex flex-col justify-center items-center m-5 font-bold uppercase max-[500px]:text-2xl">
        <p className="m-1 md:m-5">My Recent Projects</p>
        {/* <a
          className="btn px-14 py-3 text-center bg-secondary mx-3"
          href="https://github.com/youssefsaeed555/"
        >
          Github
        </a> */}
      </div>

      {/* <div
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
      </div> */}
      <div className="max-[500px]:flex-col flex justify-center gap-10">
        <div
          className="card card-compact max-[500px]:w-[85%] max-[500px]:mx-auto w-[35%] bg-[#033F47] shadow-xl "
          ref={ref}
          style={{
            transform: isInView ? "none" : "translateX(-200px)",
            opacity: isInView ? 1 : 0,
            transition: "all .5s cubic-bezier(0.17, 0.55, 0.55, 1) 0.5s",
          }}
        >
          <figure>
            <img
              src="/images/proj1.PNG"
              alt="project"
              className="hover:scale-110 ease-out duration-150"
            />
          </figure>
          <div className="card-body">
            <h2 className="card-title">MYReFurB</h2>
            <p>
              I worked with my team on MYReFurB, a comprehensive full-stack
              e-commerce website. It aims to empower users to buy and sell used
              items with ease such manage their addresses, create Wishlist, and
              make online payments using Stripe.
            </p>
            <h3>
              {" "}
              <span className="font-extrabold">Technologies used:</span> Figma,
              React.js, Tailwind, Node.js, Mongoose, Express.js
            </h3>
            <div className="card-actions justify-start">
              <a
                href="https://user-roan-beta.vercel.app/"
                className="link-custom text-2xl pt-3"
              >
                Live Dimo
              </a>
            </div>
          </div>
        </div>
        <div
          className="card card-compact max-[500px]:w-[85%] max-[500px]:mx-auto w-[35%] bg-[#033F47] shadow-xl "
          ref={ref}
          style={{
            transform: isInView ? "none" : "translateX(-400px)",
            opacity: isInView ? 1 : 0,
            transition: "all .8s cubic-bezier(0.17, 0.55, 0.55, 1) 0.9s",
          }}
        >
          <figure>
            <img
              src="/images/Capture.PNG"
              alt="project"
              className="hover:scale-110 ease-out duration-150"
            />
          </figure>
          <div className="card-body">
            <h2 className="card-title">Movies blog</h2>
            <p>
              A movie blog is a full-stack application where users can share
              their opinions about movies. Users should be able to create, edit
              and delete their own posts, as well as edit their profile
              information.
            </p>
            <h3>
              {" "}
              <span className="font-extrabold">Technologies used:</span>{" "}
              React.js, Tailwind, Node.js, Mongoose, Express.js
            </h3>
            <div className="card-actions justify-start">
              <a
                href="https://plog-iti.vercel.app/"
                className="link-custom text-2xl pt-3"
              >
                Live Demo
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
