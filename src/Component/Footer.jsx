import React from "react";
import { FaLinkedin } from "react-icons/fa6";
import { FaXTwitter } from "react-icons/fa6";
import { FaGithub } from "react-icons/fa";
import { Link } from "react-router-dom";

function Footer() {
  return (
    <div className="pt-16 pb-4 gap-2 text-base flex flex-col items-center px-[5%]">
      {" "}
      <div className="bg-black  w-[90%] h-[1px] "></div>{" "}
      <div className="w-[90%] flex flex-row justify-between px-2">
        <div className="icon text-lg flex flex-row gap-2 tablet:gap-4 laptop:gap-6 ">
          <FaGithub
            size={30}
            className="hover:text-gray-500 hover:cursor-pointer"
          />
          <FaXTwitter
            size={30}
            className="hover:text-gray-500 hover:cursor-pointer"
          />
          <FaLinkedin
            size={30}
            className="hover:text-gray-500 hover:cursor-pointer"
          />
        </div>{" "}
        <div className="nav">
          <ul className="flex flex-row gap-6 font-normal text-sm">
            <a className="hover:text-gray-400 hover:cursor-pointer" href="/">
              Home
            </a>
            <a
              className="hover:text-gray-400 hover:cursor-pointer"
              href="/skills"
            >
              Skill
            </a>
            <a
              className="hover:text-gray-400 hover:cursor-pointer"
              href="/project"
            >
              Project
            </a>{" "}
            <a
              className="hover:text-gray-400 hover:cursor-pointer"
              href="/contact"
            >
              Contact
            </a>
          </ul>
        </div>
      </div>{" "}
      <div className="bg-black w-[90%] h-[1px] "></div>
      <div className="right text-sm leading-relaxed">
        Copyright &copy; {new Date().getFullYear()} Yoygeshkhadka. All right
        reveersed
      </div>
    </div>
  );
}

export default Footer;
