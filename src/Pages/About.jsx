import React from "react";
import Nav from "../Components/Nav";
import Footer from "../Components/Footer";
import Rectangle from "../assets/Rectangle 10.png";
import Profile from "../assets/profile.jpeg";
import Sidebar from "../Components/Sidebar";

const About = () => {
  return (
    <div className="">
      <Nav logoSrc={Rectangle} />
      <div className="flex flex-col text-center items-center justify-center m-auto md:w-[50vw] pt-8">
        <h1 className="md:text-3xl text-3xl font-bold">About Us</h1>
        <p className="text-justify md:pt-8 pt-6">
        We are passionate about empowering citrus growers with the power of
          artificial intelligence. Our team of agricultural experts and AI
          enthusiasts have come together to develop a user-friendly web
          application that aids in the early detection of citrus diseases. We
          believe early intervention is key to minimizing crop loss and ensuring
          the health of your citrus groves. Our mission is to provide accessible
          and reliable AI technology to support sustainable citrus farming
          practices, fostering a future of bountiful harvests and a thriving
          citrus industry
        </p>
      </div>
      <div className="md:mb-5 mb-5 mt-5 bg-gray-300 md:h-44 h-36 pb-2 m-auto flex flex-col justify-center md:w-[50vw] md:mt-16 md:pb-4">
        <h1 className="md:m-auto m-auto md:text-4xl text-2xl">Team Members</h1>
        <div className="flex gap-9 justify-center">
          <img src={Profile} alt="Profile 1" className="size-14 rounded-full" />
          <img src={Profile} alt="Profile 2" className="size-14 rounded-full" />
          <img src={Profile} alt="Profile 3" className="size-14 rounded-full" />
        </div>
      </div>
      <Footer />
      <Sidebar className="pt-7" />
    </div>
  );
};

export default About;
