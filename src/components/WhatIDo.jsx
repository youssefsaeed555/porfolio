import React from "react";
import Card from "./Card";

function WhatIDo() {
  return (
    <div id="features" className="max-[500px]:text-center">
      <span className="text-secondary-100 text-sm mb-2">FEATURES</span>
      <h1
        className="text-4xl font-bold"
        data-aos="fade-right"
        data-aos-easing="ease-in-sine"
        data-aos-duration="700"
      >
        <span className="border-b-[3px] border-secondary-100"> What</span>{" "}
        <span>I do?</span>
      </h1>
      <div className=" relative z-10 grid grid-cols-1 md:grid-cols-3 text-xl md:text-2xl p-0 md:p-10 text-primary w-full">
        <Card
          head={"FrontEnd Development"}
          paragraph={
            "I am proficient in utilizing core web technologies such as HTML, CSS, and JavaScript to craft engaging and dynamic user interfaces. Additionally, I have experience with modern frontend libraries and frameworks like React and Angular, which allows me to build interactive and efficient UI components."
          }
          icon={"fa-solid fa-code"}
          w="64"
          time={400}
        ></Card>
        <Card
          head={"BackEnd Development"}
          paragraph={
            "I possess a strong command of Node.js and have successfully leveraged the Express.js framework to develop robust backend APIs. My experience includes creating RESTful endpoints, handling HTTP requests, and building efficient routing systems that allow for seamless communication between the frontend and backend layers."
          }
          icon={"fa-solid fa-database"}
          w="64"
          time={600}
        ></Card>
        <Card
          head={"UI/UX Design"}
          paragraph={
            "Crafting exceptional UI/UX designs, I specialize in creating visually stunning and user-friendly interfaces that enhance the user experience,It involves designing layouts, color schemes, icons, typography, buttons, and other visual elements to create the look and feel of the product."
          }
          icon={"fa-solid fa-bars "}
          w="64"
          time={800}
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
    </div>
  );
}

export default WhatIDo;
