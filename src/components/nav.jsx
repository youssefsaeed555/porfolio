import React, { useEffect, useState } from "react";
import { delay, motion } from "framer-motion";

function Nav() {
  const [activeLink, setActiveLink] = useState("Home");
  const [scroll, setScroll] = useState(false);
  const socialStyle =
    "fa-brands border-[1px] border-white p-2 rounded-full hover:bg-secondary hover:text-white hover:scale-125 hover:transition-all hover:duration-500 mr-3";

  useEffect(() => {
    const scrolled = () => {
      if (window.scrollY > 20) {
        setScroll(true);
      } else {
        setScroll(false);
      }
    };
    window.addEventListener("scroll", scrolled);

    return () => {
      window.removeEventListener("scroll", scrolled);
    };
  }, []);

  const handleActiveLink = (value) => {
    setActiveLink(value);
  };
  return (
    <div
      className={`navbar bg-primary text-primary ${
        scroll ? "bg-zinc-950 bg-opacity-90 transition-all duration-500" : ""
      } sticky top-0 z-50 `}
    >
      <div className="navbar-start ">
        <div className="dropdown flex align-middle">
          <label tabIndex={0} className="btn mt-2 btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </label>
          <ul
            tabIndex={0}
            className="menu menu-compact dropdown-content mt-16 p-2 shadow-2xl bg-primary rounded-box w-32"
          >
            <li className="hover:text-secondary-100">
              <a
                href="/#"
                className={`${
                  activeLink === "Home" ? "text-primary bg-secondary" : ""
                }`}
                onClick={() => handleActiveLink("Home")}
              >
                Home
              </a>
            </li>
            <li className="hover:text-secondary-100">
              <a
                href="/#features"
                className={`${
                  activeLink === "Features" ? "text-primary bg-secondary" : ""
                }`}
                onClick={() => handleActiveLink("Features")}
              >
                Features
              </a>
            </li>
            <li className="hover:text-secondary-100">
              <a
                href="/#skills"
                className={`${
                  activeLink === "Skills" ? "text-primary bg-secondary" : ""
                }`}
                onClick={() => handleActiveLink("Skills")}
              >
                Skills
              </a>
            </li>
            <li className="hover:text-secondary-100">
              <a
                href="/#education"
                className={`${
                  activeLink === "Education" ? "text-primary bg-secondary" : ""
                }`}
                onClick={() => handleActiveLink("Education")}
              >
                Education
              </a>
            </li>
            <li className="hover:text-secondary-100">
              <a
                href="/#projects"
                className={`${
                  activeLink === "Projects" ? "text-primary bg-secondary" : ""
                }`}
                onClick={() => handleActiveLink("Projects")}
              >
                Projects
              </a>
            </li>
            <li className="hover:text-secondary-100">
              <a
                href="/#reviews"
                className={`${
                  activeLink === "Reviews" ? "text-primary bg-secondary" : ""
                }`}
                onClick={() => handleActiveLink("Reviews")}
              >
                Reviews
              </a>
            </li>
          </ul>
          <label className="btn btn-ghost btn-circle avatar pt-2">
            <div className="w-9 md:w-10 rounded-full ring-1 ring-offset-2 ring-primary hover:ring-secondary-100 ">
              <img src="/images/avater.jpg" />
            </div>
          </label>
        </div>
        <p className="normal-case text-xl font-bold md:ml-3 md:mt-2 max-[500px]:hidden">
          Yousssef Saeed
        </p>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">
          <li className="hover:text-secondary-100">
            <a
              href="/#"
              className={`${
                activeLink === "Home" ? "text-primary bg-secondary" : ""
              }`}
              onClick={() => handleActiveLink("Home")}
            >
              Home
            </a>
          </li>
          <li className="hover:text-secondary-100">
            <a
              href="/#features"
              className={`${
                activeLink === "Features" ? "text-primary bg-secondary" : ""
              }`}
              onClick={() => handleActiveLink("Features")}
            >
              Features
            </a>
          </li>
          <li className="hover:text-secondary-100">
            <a
              href="/#skills"
              className={`${
                activeLink === "Skills" ? "text-primary bg-secondary" : ""
              }`}
              onClick={() => handleActiveLink("Skills")}
            >
              Skills
            </a>
          </li>
          <li className="hover:text-secondary-100">
            <a
              href="/#education"
              className={`${
                activeLink === "Education" ? "text-primary bg-secondary" : ""
              }`}
              onClick={() => handleActiveLink("Education")}
            >
              Education
            </a>
          </li>
          <li className="hover:text-secondary-100">
            <a
              href="/#projects"
              className={`${
                activeLink === "Projects" ? "text-primary bg-secondary" : ""
              }`}
              onClick={() => handleActiveLink("Projects")}
            >
              Projects
            </a>
          </li>
          {/* <li className="hover:text-secondary-100">
            <a
              href="/#reviews"
              className={`${
                activeLink === "Reviews" ? "text-primary bg-secondary" : ""
              }`}
              onClick={() => handleActiveLink("Reviews")}
            >
              Reviews
            </a>
          </li> */}
        </ul>
      </div>
      <div className="navbar-end ">
        {/* <div className="flex max-[550px]:mr-6">
          <a href="https://www.facebook.com/yossef.said.5/">
            <i className={`${socialStyle} fa-facebook`}></i>
          </a>
          <a href="https://github.com/youssefsaeed555">
            <i className={`${socialStyle} fa-github`}></i>
          </a>
          <a href="https://www.linkedin.com/in/youssef-saeed-60aa931a6/">
            <i className={`${socialStyle} fa-linkedin`}></i>
          </a>
        </div> */}
        <a
          className="border-[1px] text-sm md:text-md border-white border-solid py-1 md:py-2 px-4 text-center hover:transition-all hover:duration-500 hover:bg-secondary hover:text-white font-bold cursor-pointer"
          href="/#contact"
        >
          Let's Connect
        </a>
      </div>
    </div>
  );
}

export default Nav;
