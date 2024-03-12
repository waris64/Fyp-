import React from "react";
import Nav from "./Nav";
import Sidebar from "./Sidebar";
import Rectangle from "../assets/Rectangle 10.png";
import Footer from "./Footer";

const ContactUs = () => {
  return (
    <div className="md:flex md:flex-col md:items-center">
      <Nav logoSrc={Rectangle} />
      <Sidebar className="md:hidden" />
      <h1 className="font-bold text-3xl py-10 text-center">Get in touch</h1>
      <form
        action="#"
        className="md:w-80 border-2 rounded-md bg-zinc-400 p-9 m-auto leading-8"
      >
        <div className="flex flex-col">
          <label htmlFor="firstName">First Name</label>
          <input
            type="text"
            id="firstName"
            name="firstName"
            className="border-2 py-1 rounded"
          />
        </div>
        <div className="flex flex-col">
          <label htmlFor="lastName">Last Name</label>
          <input
            type="text"
            id="lastName"
            name="lastName"
            className="border-2 rounded py-1"
          />
        </div>
        <div className="flex flex-col">
          <label htmlFor="message">Message</label>
          <textarea
            type="text"
            id="message"
            name="message"
            className="border-2 rounded py-4"
          />
        </div>
        <div className="m-auto text-center">
          <button type="submit" className="bg-orange-400 px-6 rounded mt-6">
            Submit
          </button>
        </div>
      </form>

      <Footer />
    </div>
  );
};

export default ContactUs;
 