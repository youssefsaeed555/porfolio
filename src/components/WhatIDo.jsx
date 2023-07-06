import React, { useRef } from "react";
import Card from "./Card";
import { motion, useScroll, useInView } from "framer-motion";

function WhatIDo() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  return (
    <motion.div id="features" className="max-[500px]:text-center " ref={ref}>
      <span className="text-secondary-100 text-sm mb-2">FEATURES</span>
      <h1
        className="text-4xl font-bold"
        style={{
          transform: isInView ? "none" : "translateX(-200px)",
          opacity: isInView ? 1 : 0,
          transition: "all 0.9s cubic-bezier(0.17, 0.55, 0.55, 1) 0.5s",
        }}
      >
        <span className="border-b-[3px] border-secondary-100"> What</span>{" "}
        <span>I do?</span>
      </h1>
      <div className=" relative z-10 grid grid-cols-1 md:grid-cols-3 text-xl md:text-2xl p-0 md:p-10 text-primary w-full">
        <Card
          head={"Web Developing"}
          paragraph={
            "Specializing in high-quality website development, I create responsive and intuitive websites tailored to each client's unique needs.            "
          }
          icon={"fa-solid fa-code"}
          w="64"
        ></Card>
        <Card
          head={"UI/UX Design"}
          paragraph={
            "Crafting exceptional UI/UX designs, I specialize in creating visually stunning and user-friendly interfaces that enhance the user experience."
          }
          icon={"fa-solid fa-bars "}
          w="64"
        ></Card>
        <Card
          head={"SEO Optimisation"}
          paragraph={
            "Your website ranking matters. Our SEO services will help you get to the top of the ranks and stay there!"
          }
          icon={"fa-solid fa-database"}
          w="64"
        ></Card>
        {/* <Card
          head={"Creative Work"}
          paragraph={
            "I throw myself down among the tall grass by the stream as Ilie close to the earth."
          }
          icon={"fa-solid fa-gears"}
          w="64"
        ></Card>
        <Card
          head={"Deeper Skillset"}
          paragraph={
            "I throw myself down among the tall grass by the stream as Ilie close to the earth."
          }
          icon={"fa-solid fa-gem"}
          w="64"
        ></Card>
        <Card
          head={"Strong Dedication"}
          paragraph={
            "I throw myself down among the tall grass by the stream as Ilie close to the earth."
          }
          icon={"fa-solid fa-person-chalkboard"}
          w="64"
        ></Card> */}
      </div>
      <hr className="m-10"></hr>
    </motion.div>
  );
}

export default WhatIDo;
