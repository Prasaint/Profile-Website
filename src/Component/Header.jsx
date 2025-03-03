import React, { useState } from "react";
import { FaBars } from "react-icons/fa6";
import { FaBarsStaggered } from "react-icons/fa6";

function Header() {
  const [isOpen, SetIsOpen] = useState(true);
  function toogle() {
    SetIsOpen(!isOpen);
  }
  return (
    <nav className=" gap-10 px-10 shadow-md items-center bg-gray-50 shadow-white-500/50   sticky top-0 flex flex-row justify-between ">
      <h1 className=" text-lg text-center font-semibold text-violet-700 ml-5 ">
        Prashant Khadka
      </h1>
      <div className="">
        <button onClick={toogle} className=" tablet:hidden">
          {isOpen ? (
            <FaBars color="#6d28d9" />
          ) : (
            <FaBarsStaggered color="#6d28d9" />
          )}
        </button>

        <ul
          className={`mr-5 bg-gray-50 shadow-md tablet:shadow-none rounded-md absolute tablet:bg-none  tablet:flex  items-center  top-20  right-5 tablet:static 
             flex flex-col text-base tablet:flex-row laptop:flex-row ${
               isOpen ? "hidden" : "block"
             } tablet:block text-center`}
        >
          <a
            className=" hover:bg-gray-300  flex justify-center laptop:px-16 tablet:px-12 rounded-t-md tablet:rounded-none w-full tablet:w-16 text-sm   "
            href="#"
          >
            Home
          </a>
          <a
            className=" hover:bg-gray-300 flex justify-center laptop:px-16 tablet:px-12  w-full tablet:w-16 text-sm "
            href="#skills"
          >
            Skills
          </a>
          <a
            className="hover:bg-gray-300 flex justify-center laptop:px-16 tablet:px-12 w-full tablet:w-16 text-sm "
            href="#project"
          >
            Project
          </a>
          <a
            className="hover:bg-gray-300 flex justify-center laptop:px-16 tablet:px-12 tablet:rounded-none w-full tablet:w-16 text-sm "
            href="#contact"
          >
            Contact
          </a>{" "}
          <a
            className="tablet:ml-5 shadow-md font-semibold shadow-violet-500/50  flex justify-center px-3.5 py-1.5 rounded-lg border-2 border-violet-600 hover:bg-violet-500 text-white bg-violet-600 m-2  w-18 text-sm "
            href="#contact"
          >
            <button> Hire me!</button>
          </a>
        </ul>
      </div>
    </nav>
  );
}

export default Header;
