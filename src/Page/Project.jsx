import React, { useState } from "react";
import img1 from "../assets/img2.jpg";
import { FaRegEye } from "react-icons/fa";

function Project() {
  const Projects = [
    {
      projectName: "XYZ",
      img: img1,
      des: "I started my journey in 2022 and have worked on a wide range of projects. Here are some of the projects I've completed.I started my journey in 2022 and have worked on a wide range of projects. Here are some of the projects I've completed.I started my journey in 2022 and have worked on a wide range of projects. Here are some of the projects I've completed.",
      link: "https://xyz.com",
    },
    {
      projectName: "XYZ",
      img: img1,
      des: "I started my journey in 2022 and have worked on a wide range of projects. Here are some of the projects I've completed.I started my journey in 2022 and have worked on a wide range of projects. Here are some of the projects I've completed.I started my journey in 2022 and have worked on a wide range of projects. Here are some of the projects I've completed.",
      link: "https://xyz.com",
    },
    {
      projectName: "XYZ",
      img: img1,
      des: "I started my journey in 2022 and have worked on a wide range of projects. Here are some of the projects I've completed.I started my journey in 2022 and have worked on a wide range of projects. Here are some of the projects I've completed.I started my journey in 2022 and have worked on a wide range of projects. Here are some of the projects I've completed.",
      link: "https://xyz.com",
    },
    {
      projectName: "XYZ",
      img: img1,
      des: "I started my journey in 2022 and have worked on a wide range of projects. Here are some of the projects I've completed.I started my journey in 2022 and have worked on a wide range of projects. Here are some of the projects I've completed.I started my journey in 2022 and have worked on a wide range of projects. Here are some of the projects I've completed.",
      link: "https://xyz.com",
    },
  ];

  return (
    <div className="pt-20 px-6  mb-10" id="project">
      <div className="flex flex-col items-center mb-5">
        <h1 className="text-lg font-semibold mb-2">Project</h1>
        <div className="overflow-auto">
          <p className="text-sm leading-relaxed">
            I started my journey in 2022 and have worked on a wide range of
            projects. Here are some of the projects I've completed.
          </p>
        </div>
      </div>
      <div className="flex flex-col items-center tablet:justify-center tablet:flex-wrap tablet:flex-row ">
        {" "}
        {Projects.map((project, index) => (
          <div
            key={index}
            className=" bg-white border border-gray-200 rounded-lg shadow h-96 w-72 flex flex-col mx-5 my-8"
          >
            <div
              className="shadow-sm  bg-gray-50 h-[100%] w-full bg-contain bg-center bg-no-repeat mb-1  "
              style={{ backgroundImage: `url(${project.img})` }}
            ></div>
            <h1 className="mb-1 text-sm font-medium tracking-tight text-gray-900 pl-3">
              {project.projectName}
            </h1>
            <p className="focus:scroll-auto scroll-smooth px-3 mb-1 font-normal text-gray-700 h-full overflow-x-auto scrollbar-hidden leading-relaxed">
              {project.des}
            </p>
            <div className="flex items-center flex-col m-4 ">
              <a
                className="shadow-md shadow-violet-500/50 text-sm font-semibold text-center w-28 h-8 bg-violet-600 hover:bg-violet-500 rounded-md  flex items-center justify-center  py-5 px-1 text-white "
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
              >
                View Live
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Project;
