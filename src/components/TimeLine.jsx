import React from "react";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";

function TimeLine() {
  return (
    <div
      id="education"
      className="max-[500px]:text-center overflow-x-hidden pt-10"
    >
      <span className="text-secondary-100 text-sm mb-2">EDUCATION</span>
      <h1
        className="text-4xl font-bold"
        data-aos="fade-right"
        data-aos-easing="ease-in-sine"
        data-aos-duration="700"
      >
        <span className="border-b-[3px]  border-secondary-100"> My</span>{" "}
        <span>education</span>
      </h1>
      <VerticalTimeline
        data-aos="fade-up"
        data-aos-easing="ease-in-sine"
        data-aos-duration="700"
      >
        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          contentStyle={{ background: "#033F47", color: "#C4CFDE" }}
          contentArrowStyle={{ borderRight: "7px solid " }}
          date="2018"
          iconStyle={{ background: "#C4CFDE", color: "#fff" }}
        >
          <h4 className="vertical-timeline-element-title font-bold uppercase">
            joined FCI-SCU
          </h4>
          <p>Faculty of Computers and Informatics, Suez canal university</p>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          date="2021"
          contentStyle={{ background: "#033F47", color: "#C4CFDE" }}
          iconStyle={{ background: "rgb(33, 150, 243)", color: "#fff" }}
        >
          <h4 className="vertical-timeline-element-subtitle font-bold">
            MERN Developer
          </h4>
          <p>start learn MERN development</p>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          date="2021"
          iconStyle={{ background: "rgb(33, 150, 243)", color: "#fff" }}
          contentStyle={{ background: "#033F47", color: "#C4CFDE" }}
        >
          <h4 className="vertical-timeline-element-subtitle font-bold">
            Graduation Project
          </h4>
          <p>My first large project that i worked on with team</p>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          date="2022"
          iconStyle={{ background: "rgb(33, 150, 243)", color: "#fff" }}
          contentStyle={{ background: "#033F47", color: "#C4CFDE" }}
        >
          <h4 className="vertical-timeline-element-subtitle font-bold">
            CS Degree
          </h4>
          <p>
            Bachelor in Computer Science with GPA Very Good for my overall grade
            and excellent for my graduation project
          </p>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element--education"
          date="2022"
          iconStyle={{ background: "rgb(33, 150, 243)", color: "#fff" }}
          contentStyle={{ background: "#033F47", color: "#C4CFDE" }}
        >
          <h4 className="vertical-timeline-element-subtitle font-bold">
            Joined ITI
          </h4>
          <p>9 months scholarship trainee track web & user interface</p>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          iconStyle={{ background: "rgb(16, 204, 82)", color: "#fff" }}
        />
      </VerticalTimeline>
    </div>
  );
}

export default TimeLine;
