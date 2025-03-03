import React from "react";
import img1 from "../assets/img1.jpg";
import img2 from "../assets/img2.jpg";
import img3 from "../assets/img3.jpg";

import { FaGithub } from "react-icons/fa6";

function Home() {
  return (
    <div className="snap-start  px-6  mt-10 " id="home">
      <div className="bg-gradient-to-r  flex flex-col mb-20 tablet:gap-10  tablet:justify-evenly tablet:flex-row  items-center">
        <div className="flex flex-col items-center text-justify gap-4 tablet:gap-8 laptop:10 tablet:w-3/5">
          <p>
            <span className="text-lg  text-violet-600 font-semibold leading-relaxed">
              {" "}
              Hi, I'm Prashant Khadka
            </span>
            <span className="text-base  text-justify leading-relaxed">
              , a web developer passionate about crafting responsive,
              interactive, and functional websites. I specialize in front-end
              design, back-end logic, and full-stack development for complete
              solutions.
            </span>
          </p>

          <div className="text-base flex flex-row justify-center gap-10 tablet:gap-5">
            <button className="px-3.5 py-1.5 shadow-md shadow-violet-500/50 border-violet-600 hover:bg-violet-500 bg-violet-600 text-white    rounded-xl ">
              Hire Me
            </button>
            <button className="shadow-md shadow-violet-200/50 bg-violet-300 hover:bg-violet-200  flex flex-row items-center rounded-xl px-3.5 py-1.5">
              <FaGithub className="mx-1" />
              Profile
            </button>
          </div>
        </div>
        <div className=" tablet:block hidden tablet:w-2/5">
          <img
            src={img2}
            alt="Photo 2"
            className="w-full h-auto  rounded-lg shadow-md"
          />
        </div>
      </div>

      <div className=" my-5 tablet:my-8 laptop:my-12 ">
        <div className="flex flex-col items-center mb-5">
          <h1 className="text-lg font-semibold">Education</h1>
          <p className="text-sm leading-relaxed">
            My educational details are as follows.
          </p>
        </div>
        <h1 className="text-base leading-relaxed">
          Nepalgunj Campus Of Management and Technology- Nepalgunj (Nepal)
        </h1>
        <p className="text-gray-500 text-sm mb-3 leading-relaxed">
          Bachelor of Science in Computer Science and Information Technology
        </p>
        <p className="text-sm text-justify leading-relaxed">
          I am currently pursuing a B.Sc. in Computer Science and Information
          Technology (B.Sc. CSIT) degree, which I am on track to complete in
          2027 from Nepalgunj Campus of Management and Technology located in
          Nepalgunj,Nepall. I have taken courses in Data Structures
          Algorithms(DSA), Object-Oriented Programming(C++, Java), Database
          Management Systems(DBMS), Operating Systems, Artificial
          Intelligence(AI), Computer Networks, Digital Logic, Microprocessor,
          Computer Graphic and Statistics, among others.
        </p>
      </div>
    </div>
  );
}

export default Home;
