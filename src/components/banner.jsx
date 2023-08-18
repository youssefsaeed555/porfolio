import React, { useEffect, useRef } from "react";
import Typed from "typed.js";
import resume from "/youssef saeed bikheet resume.pdf";

function Banner() {
  const ref = useRef(null);
  // Create reference to store the DOM element containing the animation
  const el = useRef(null);
  useEffect(() => {
    const typed = new Typed(el.current, {
      strings: ["MERN developer", "Frontend developer", "Nodejs developer"],
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
        <div className="max-[500px]:w-full max-[500px]: font-bold flex justify-center scroll-animation  text-primary p-5 md:p-8 uppercase">
          <h2
            className="my-6 text-lg md:text-xl "
            data-aos="fade-up"
            data-aos-delay="500"
          >
            Hello I'm youssef saeed, <br />
            <span
              ref={el}
              className="text-secondary transition-all duration-500 font-bold "
            />{" "}
          </h2>
        </div>
        <div className="grid grid-col  md:grid-cols-2 gap-4 text-primary ">
          <div className="max-[500px]:order-2">
            <h1
              data-aos="fade-right"
              data-aos-easing="ease-in-sine"
              data-aos-duration="600"
              className="text-4xl font-bold my-7 md:my-7 "
            >
              <span className="border-b-[3px] border-secondary-100">
                {" "}
                About
              </span>{" "}
              <span>Me</span>
            </h1>
            <p
              className="text-md text-lg max-[500px]:p-3 pb-3 leading-relaxed w-full"
              data-aos="fade-up"
              data-aos-easing="ease-in-sine"
              data-aos-duration="600"
            >
              A Software Developer graduated from Web & User Interface
              Development track (ITI) with experience in building dynamic and
              interactive web applications, specializing in developing web apps
              using the MEARN stack, I am passionate about creating high-quality
              and scalable software solutions that meet business objectives and
              exceed user expectations. I am also constantly learning and
              staying up-to-date with the latest technologies to ensure that my
              skills remain relevant and in-demand in the ever-changing world of
              software development.
            </p>
            <div
              className="flex justify-around mr-0 md:mr-16 max-[500px]:flex-col max-[500px]:items-center"
              data-aos="fade-up"
              data-aos-easing="ease-in-sine"
              data-aos-duration="800"
            >
              <a
                href="tel:+201286880684"
                className="link-custom text-2xl py-2 "
              >
                Call: (+20) 1286880684
              </a>
              <a
                className="btn max-[500px]:mt-4 bg-[#033F47] text-primary font-extrabold w-40 rounded-[10px] shadow-inner"
                href={resume}
                download
              >
                Download cv
              </a>
            </div>
          </div>
          <div
            className="max-[500px]:order-1"
            data-aos="fade-up"
            data-aos-duration="700"
            data-aos-delay="500"
          >
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
