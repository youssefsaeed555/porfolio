import { useInView, motion } from "framer-motion";
import React, { useRef } from "react";

function Contact() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  return (
    <div id="contact" className="max-[500px]:text-center">
      <span className="text-secondary-100 text-sm mb-5">CONTACT</span>
      <h1
        className="text-4xl font-bold mb-4"
        data-aos="fade-right"
        data-aos-easing="ease-in-sine"
        data-aos-duration="700"
      >
        <span className="border-b-[3px]  border-secondary-100"> Contact</span>{" "}
        <span> with Me</span>
      </h1>
      {/* <div className="grid grid-cols-1 md:grid-cols-2 ">
        <div
          className="ml-[5.5rem] md:ml-0"
          ref={ref}
          style={{
            transform: isInView ? "none" : "translateX(-200px)",
            opacity: isInView ? 1 : 0,
            transition: "all 0.9s cubic-bezier(0.17, 0.55, 0.55, 1) 0.5s",
          }}
        >
          <form className="flex flex-col my-10 md:border-r-4 border-gray-400 border-solid">
            <input
              type="text"
              name="name"
              placeholder="Your Full Name"
              className="input my-5 w-3/4 bg-slate-800"
              required
            />
            <input
              type="text"
              name="Email"
              placeholder="Your Email"
              className="input my-5 w-3/4 bg-slate-800"
              required
            />
            <textarea
              name="message"
              rows="7"
              placeholder="Yor Message"
              required
              className="input my-5 w-3/4 bg-slate-800"
            ></textarea>
            <button type="submit" className="btn w-3/4 bg-secondary">
              Send Message
            </button>
          </form>
        </div>
        <div className="md:m-[3rem] md:ml-[6rem]">
          <div className="mb-8">
            <h2 className="flex align-middle max-[500px]:justify-center text-secondary-100 font-bold m-1">
              <svg
                stroke="currentColor"
                fill="currentColor"
                strokeWidth="0"
                viewBox="0 0 16 16"
                className="icon mt-1 mr-3"
                height="1em"
                width="1em"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M.05 3.555A2 2 0 0 1 2 2h12a2 2 0 0 1 1.95 1.555L8 8.414.05 3.555zM0 4.697v7.104l5.803-3.558L0 4.697zM6.761 8.83l-6.57 4.027A2 2 0 0 0 2 14h12a2 2 0 0 0 1.808-1.144l-6.57-4.027L8 9.586l-1.239-.757zm3.436-.586L16 8.801V4.697l-5.803 3.546z"></path>
              </svg>
              <p>Email</p>
            </h2>
            <p>yossefsaid555@gmail.com</p>
          </div>
          <div className="mb-8">
            <h2 className="flex align-middle max-[500px]:justify-center text-secondary-100 font-bold m-1">
              <svg
                stroke="currentColor"
                fill="currentColor"
                strokeWidth="0"
                viewBox="0 0 16 16"
                className="icon mt-1 mr-3"
                height="1em"
                width="1em"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M3 2a2 2 0 0 1 2-2h6a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V2zm6 8a1 1 0 1 0-2 0 1 1 0 0 0 2 0z"></path>{" "}
              </svg>
              <p>phone</p>
            </h2>
            <p>+201286880684</p>
          </div>
          <div className="mb-8">
            <h2 className="flex align-middle max-[500px]:justify-center text-secondary-100 font-bold m-1">
              <svg
                stroke="currentColor"
                fill="currentColor"
                strokeWidth="0"
                viewBox="0 0 16 16"
                className="icon mt-1 mr-3"
                height="1em"
                width="1em"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M8 16s6-5.686 6-10A6 6 0 0 0 2 6c0 4.314 6 10 6 10zm0-7a3 3 0 1 1 0-6 3 3 0 0 1 0 6z"></path>{" "}
              </svg>
              <p>address</p>
            </h2>
            <p>Egypt</p>
          </div>
        </div>
      </div> */}

      <div>
        <div
          className="col-lg-8 pb-4 text-center text-md-start"
          data-aos="fade-up"
          data-aos-easing="ease-in-sine"
          data-aos-duration="800"
        >
          <h6 className="h1 fw-bold">Let's talk</h6>
        </div>
        <div
          className="flex justify-center py-8 gap-8 "
          data-aos="fade-down"
          data-aos-easing="ease-in-sine"
          data-aos-duration="1000"
        >
          <a href="mailto:yossefsaid555@gmail.com" className="hover:scale-150">
            <img
              className="w-16"
              src="https://img.icons8.com/plasticine/100/null/gmail-new.png"
            />
          </a>
          <a
            href="https://www.linkedin.com/in/youssef-saeed-60aa931a6/"
            target="_blank"
            className="hover:scale-150"
          >
            <img
              className="w-16"
              src="https://img.icons8.com/pulsar-color/48/null/linkedin.png"
            />
          </a>
          <a
            href="https://github.com/youssefsaeed555/"
            target="_blank"
            className="hover:scale-150"
          >
            <img
              className="w-16"
              src="https://img.icons8.com/pulsar-color/48/null/github.png"
            />
          </a>
        </div>
      </div>
    </div>
  );
}

export default Contact;
