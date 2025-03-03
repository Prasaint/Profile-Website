import React from "react";
import html from "../assets/html.png";
import css from "../assets/css.png";
import js from "../assets/js.png";
import react from "../assets/react.png";
import tailwind from "../assets/tailwind.png";
import mysql from "../assets/mysql.png";
import sql from "../assets/sql.png";
import php from "../assets/php.png";
import wordpress from "../assets/wordpress.png";
import mongodb from "../assets/mongodb.png";
import c from "../assets/c.png";
import cp from "../assets/c++.png";
import java from "../assets/java.png";
import python from "../assets/python.png";
import vscode from "../assets/vscode.png";
import github from "../assets/github.png";

function Skills() {
  const skills = [
    {
      skillType: "Frontend",
      skillName: ["HTML", "CSS", "JavaScript", "React Js", "Tailwindcss"],
      imgs: [html, css, js, react, tailwind],
    },
    {
      skillType: "Backend",
      skillName: ["MySql", "SQL", "Php", "Wordpress", "Mongodb"],
      imgs: [mysql, sql, php, wordpress, mongodb],
    },
    {
      skillType: "Language",
      skillName: ["C", "C++", "Java", "JavaScript", "Php", "Python"],
      imgs: [c, cp, java, js, php, python],
    },
    {
      skillType: "Others",
      skillName: ["VsCode", "Github"],
      imgs: [vscode, github],
    },
  ];

  return (
    <div className="snap-start px-6   pt-20 mb-10" id="skills">
      <div className="flex flex-col items-center mb-5">
        <h1 className=" text-lg font-semibold mb-2">Skills</h1>
        <p className="text-sm leading-relaxed">
          Here are some of my skills on which I have been working for the past 2
          years.
        </p>
      </div>
      <div className="con mb-5">
        {skills.map((skill, index) => (
          <div
            key={index}
            className="p-6 bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100  mb-5  py-3 flex flex-col gap-3 "
          >
            <h1 className="text-lg font-semibold">{skill.skillType}</h1>
            <ul className="flex flex-row flex-wrap gap-4">
              {skill.skillName.map((name, i) => (
                <li
                  className=" px-3.5 py-1.5 flex text-white items-center gap-2 text-sm shadow-sm shadow-violet-500/50 hover:bg-violet-500 bg-violet-600 rounded-lg  hover:cursor-pointer"
                  key={i}
                >
                  <img
                    src={skill.imgs[i]}
                    alt={name}
                    className="w-6 h-6 object-contain"
                  />
                  {name}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Skills;
