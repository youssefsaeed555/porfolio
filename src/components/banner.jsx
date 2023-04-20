import React, { useEffect, useRef } from "react";
import Typed from "typed.js";
import resume from "../../public/resume.pdf";
import { useInView, motion } from "framer-motion";

function Banner() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  // Create reference to store the DOM element containing the animation
  const el = useRef(null);
  useEffect(() => {
    const typed = new Typed(el.current, {
      strings: ["MERN developer", "front_end developer", "node_js developer"],
      typeSpeed: 60,
      backSpeed: 10,
      backDelay: 700,
      smartBackspace: true,
      loop: true,
    });

    return () => {
      // Destroy Typed instance during cleanup to stop animation
      typed.destroy();
    };
  }, []);

  return (
    <section>
      <div className="container mx-auto max-w-7xl text-lg md:text-3xl max-[500px]:text-center">
        <span className="font-bold flex justify-center scroll-animation  text-primary p-6 md:p-12 uppercase">
          Welcome to my portfolio
        </span>
        <div className="grid grid-col  md:grid-cols-2 gap-4 text-primary ">
          <div>
            <motion.h1 className="text-4xl font-bold my-7 md:my-14 ">
              <span className="border-b-[3px] border-secondary-100">
                {" "}
                About
              </span>{" "}
              <span>Me</span>
            </motion.h1>
            <motion.h2
              className="my-6 text-xl md:text-2xl "
              transition={{ duration: 0.5, delay: 0.7 }}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
            >
              Hi I'm youssef saeed,{" "}
              <span
                ref={el}
                className="text-secondary transition-all duration-500 font-bold "
              />{" "}
            </motion.h2>
            <p
              ref={ref}
              className="text-md md:text-2xl leading-10"
              style={{
                transform: isInView ? "none" : "translateX(-200px)",
                opacity: isInView ? 1 : 0,
                transition: "all 0.9s cubic-bezier(0.17, 0.55, 0.55, 1) 0.5s",
              }}
            >
              I'm a software engineer with bcs degree in computer science from
              FCI-SCU. I create websites and share ideas through web pages. My
              passion to learning new things pushes up my limits towards
              achieving bigger goals.
            </p>
            <div
              className="flex justify-around mr-0 md:mr-16"
              style={{
                transform: isInView ? "none" : "translateY(-200px)",
                opacity: isInView ? 1 : 0,
                transition: "all 0.9s cubic-bezier(0.17, 0.55, 0.55, 1) 0.5s",
              }}
            >
              <a
                className="btn bg-secondary w-40 rounded-[10px] my-14"
                href={resume}
                download
              >
                Download cv
              </a>
              <a
                href="/#contact"
                className="btn bg-secondary w-40 rounded-[10px] my-14"
              >
                Hire Me
              </a>
            </div>
          </div>
          <div>
            <img
              src="images/youssef.jpg"
              className="banner mask mask-squircle w-full h-[400px] my-8 object-contain"
            ></img>
          </div>
        </div>
      </div>
      <hr className="m-10"></hr>
    </section>
  );
}

export default Banner;
