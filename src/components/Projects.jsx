import { useInView } from "framer-motion";
import React, { useRef } from "react";

function Projects() {
  return (
    <div id="projects" className="max-[500px]:text-center">
      <hr className="m-10"></hr>
      <span className="text-secondary-100 text-sm mb-2">PROJECTS</span>
      <h1
        className="text-4xl font-bold "
        data-aos="fade-right"
        data-aos-easing="ease-in-sine"
        data-aos-duration="700"
      >
        <span className="border-b-[3px]  border-secondary-100"> My</span>{" "}
        <span>projects</span>
      </h1>
      <div
        className=" flex flex-col justify-center items-center m-5 font-bold uppercase max-[500px]:text-2xl"
        data-aos="fade-up"
        data-aos-easing="ease-in-sine"
        data-aos-duration="800"
      >
        <p className="m-1 md:m-5">My Recent Projects</p>
      </div>
      <div className="max-[500px]:flex-col flex flex-wrap justify-center gap-10">
        <div
          className="card card-compact max-[500px]:w-[85%] max-[500px]:mx-auto w-[45%] bg-[#033F47] shadow-xl "
          data-aos="fade-up"
          data-aos-easing="ease-in-sine"
          data-aos-duration="800"
        >
          <figure>
            <img
              src="/images/natiq.png"
              alt="project"
              className="hover:scale-110 ease-out duration-150"
            />
          </figure>
          <div className="card-body">
            <h2 className="card-title">Natiq</h2>
            <p>
              This is a simple React web application that enables users to enter
              Arabic text, which is then converted to audio using an electronic
              voice. The last word of the text is repeated three times for
              emphasis.
            </p>
            <h3>
              <span className="font-extrabold">Technologies used:</span>{" "}
              React.js, Tailwind, Daisyui.
            </h3>
            <div className="card-actions justify-start">
              <a
                href="https://natiq-ten.vercel.app/"
                className="link-custom text-2xl pt-3"
              >
                Live Dimo
              </a>
            </div>
          </div>
        </div>
        <div
          className="card card-compact max-[500px]:w-[85%] max-[500px]:mx-auto w-[45%] bg-[#033F47] shadow-xl "
          data-aos="fade-up"
          data-aos-easing="ease-in-sine"
          data-aos-duration="800"
        >
          <figure>
            <img
              src="/images/bosta.PNG"
              alt="project"
              className="hover:scale-110 ease-out duration-150"
            />
          </figure>
          <div className="card-body">
            <h2 className="card-title">Tracking system</h2>
            <p>
              This project is a React web application that mimics shipment
              tracking service. It allows users to track shipments and provides
              a responsive user interface in addition to support both arabic and
              english langueges.
            </p>
            <h3>
              <span className="font-extrabold">Technologies used:</span>{" "}
              React.js, MUI, Moment.js.
            </h3>
            <div className="card-actions justify-start">
              <a
                href="https://bosta-henna.vercel.app/"
                className="link-custom text-2xl pt-3"
              >
                Live Dimo
              </a>
            </div>
          </div>
        </div>

        <div
          className="card card-compact max-[500px]:w-[85%] max-[500px]:mx-auto w-[45%] bg-[#033F47] shadow-xl "
          data-aos="fade-up"
          data-aos-easing="ease-in-sine"
          data-aos-duration="800"
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
          className="card card-compact max-[500px]:w-[85%] max-[500px]:mx-auto w-[45%] bg-[#033F47] shadow-xl "
          data-aos="fade-up"
          data-aos-easing="ease-in-sine"
          data-aos-duration="1000"
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
        <div
          className="card card-compact max-[500px]:w-[85%] max-[500px]:mx-auto w-[45%] bg-[#033F47] shadow-xl "
          data-aos="fade-up"
          data-aos-easing="ease-in-sine"
          data-aos-duration="1100"
        >
          <figure>
            <img
              src="/images/dashboard.PNG"
              alt="project"
              className="hover:scale-110 ease-out duration-150"
            />
          </figure>
          <div className="card-body">
            <h2 className="card-title">Admin dashboard</h2>
            <p>
              Welcome to the Dashboard Admin Panel project! It serves as an
              admin dashboard with various pages to manage courses, files,
              friends, profiles, projects, settings, and subscriptions.
            </p>
            <h3 className="mt-0">
              <span className="font-extrabold">Technologies used:</span>{" "}
              React.js, HTML, and CSS
            </h3>
            <div className="card-actions justify-start">
              <a
                href="https://admin-panel-wvxg.vercel.app/"
                className="link-custom text-2xl pt-3"
              >
                Live Demo
              </a>
            </div>
          </div>
        </div>
        <div
          className="card card-compact max-[500px]:w-[85%] max-[500px]:mx-auto w-[45%] bg-[#033F47] shadow-xl "
          data-aos="fade-up"
          data-aos-easing="ease-in-sine"
          data-aos-duration="1200"
        >
          <figure>
            <img
              src="/images/temp.png"
              alt="project"
              className="hover:scale-110 ease-out duration-150 max-h-64 w-full"
            />
          </figure>
          <div className="card-body">
            <h2 className="card-title">Gallery template</h2>
            <p>
              Creating an HTML and CSS template to showcase my skills,
              demonstrate my expertise and passion for web design.
            </p>
            <h3>
              <span className="font-extrabold">Technologies used:</span> HTML
              and CSS
            </h3>
            <div className="card-actions justify-start">
              <a
                href="https://youssefsaeed555.github.io/gallary/"
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

export default Projects;
