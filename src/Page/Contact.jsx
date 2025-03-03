import React, { useState } from "react";
import { IoSend } from "react-icons/io5";

function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);
  const handlechange = (e) => {
    const { name, value } = e.target;
    setFormData((preData) => ({
      ...preData,
      [name]: value,
    }));
  };
  const hanldleSubmit = (e) => {
    e.preventDefault();
    console.log("from Submitted:", formData);
    setSubmitted(true);
    setFormData({ name: "", email: "", message: "" });
  };
  return (
    <div className=" pt-20 px-6  mb-10 " id="contact">
      <div className="flex flex-col items-center  ">
        <div className="mb-5  ">
          <h1 className="text-lg font-semibold mb-2 text-center">
            Contact Me?
          </h1>
          <p className="text-sm leading-relaxed text-center">
            Feel free to reach out to me for any questions or opportunities or
            mail me directly on yougesh@gmail.com
          </p>
        </div>
        <div className="w-full flex justify-center ">
          <form
            className="flex flex-col w-[100%] tablet:w-[60%] "
            onSubmit={hanldleSubmit}
          >
            <label className="text-base  font-semibold mb-2" htmlFor="name">
              Name:{" "}
            </label>
            <input
              className="shadow-md text-sm p-2  border-2 border-violet-600 rounded-md mb-4"
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handlechange}
              placeholder="Enter Your Name"
              required
            />
            <label className="text-base font-semibold mb-2" htmlFor="email">
              {" "}
              Email:
            </label>
            <input
              className="shadow-md text-sm p-2  border-2 border-violet-600 rounded-md mb-4"
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handlechange}
              placeholder="Enter Your Email"
              required
            />
            <label className="text-base font-semibold mb-2" htmlFor="message">
              Message:
            </label>
            <textarea
              className="shadow-md text-sm   h-36 resize-none   p-2 border-2 border-violet-600 rounded-md mb-4 "
              name="message"
              id="message"
              value={formData.message}
              onChange={handlechange}
              required
              wrap="off"
              placeholder="Enter Your Message"
            ></textarea>
            <div className=" shadow-md shadow-violet-500/50 text-base font-semibold text-center   hover:bg-violet-500 bg-violet-600 rounded-md  flex items-center justify-center gap-2 relative  text-white ">
              <button type="submit" className="px-3.5 py-1.5">
                Submit
              </button>{" "}
              <IoSend />
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Contact;
