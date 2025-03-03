import React from "react";
import Contact from "./Contact";
import Home from "./Home";
import Project from "./Project";
import Skills from "./Skills";

function All() {
  return (
    <div className=" scroll-pt-28 select-auto static bg-white px-[5%] tablet:px-[15%] scroll-smooth focus:scroll-auto leading-relaxed">
      <Home />
      <Skills />
      <Project />
      <Contact />
    </div>
  );
}

export default All;
