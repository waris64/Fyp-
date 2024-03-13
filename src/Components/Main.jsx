import React from "react";
import { useRef } from "react";
import banner from "../assets/home-banner.png";
import rectangle from "../assets/Rectangle 11.png";
import { FaCloudUploadAlt } from "react-icons/fa";
import { useInView } from "react-intersection-observer"; // Import useInView hook
import { motion } from "framer-motion";

const Main = () => {
  return (
    <div>
      <motion.div
        className="md:flex md:text-center md:bg-cover md:bg-no-repeat md:text-3xl md:text-white h-[9rem] md:h-[15rem] bg-cover bg-no-repeat text-2xl text-white py-8"
        style={{ backgroundImage: `url('${banner}')` }}
      >
        <motion.h1
          initial={{ opacity: 0, scale: 0 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1 }}
          className=" md:text-[10vh] md:m-auto md:leading-[4rem] xl:leading-[rem]"
        >
          Citrus Disease Detection <br />
          Services
        </motion.h1>
      </motion.div>

      <section className="flex flex-col md:flex-row md:justify-around md:items-center md:py-8">
        <motion.div
          initial={{ opacity: 0, x: -100 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
        >
          <img src={rectangle} className="w-96 p-6 size-96 bg-cover" alt="" />
        </motion.div>
        <motion.div
          initial={{ opacity: 0, x: 100 }}
          whileInView={{ opacity: 1, x: 1 }}
          transition={{ duration: 1 }}
          className="w-full md:w-1/2 md:pl-8 flex-wrap"
        >
          <h1 className="font-bold text-2xl md:text-4xl text-center pb-5 md:pb-10">
            Citrus Diseases
          </h1>
          <p className="text-lg md:text-lg md:text-left leading-loose text-left">
            Leaves from healthy plants and plants infected with prevalent
            diseases (citrus greening, citrus canker, scab, greasy spot). Citrus
            greening is the most serious citrus disease caused by a bacteria
            which is spread by the Asian citrus psyllid (ACP). ACP is a tiny
            insect that transmits the bacteria to the tree when feeding.
          </p>
        </motion.div>
      </section>

      <motion.div
        initial={{ opacity: 0, scale: 0 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1 }}
        className="md:mb-5 shadow-2xl  shadow--200 h-96 pt-8 m-auto flex flex-col items-center justify-center md:w-[87vw]"
      >
        <div className="border-2  border-slate-300  rounded-lg md:w-60 w-56 h-60 shadow-2xl flex flex-col items-center justify-center bg-gray-200">
          <label htmlFor="imageUpload" className="pb-7">
            Drop your picture here
          </                                                                                                                              label>
          <label htmlFor="fileInput">
            <button className="border-2   border-black rounded p-3 bg-transparent hover:bg-orange-400 transition-all duration-7000 px-7 ">
              Choose File
            </button>
          </label>
          <input
            type="file"
            id="fileInput"
            name="input"
            className="hidden"
            accept="image/*"
          />
        </div>
        <button className="m-auto flex">
          <h1 className="md:w-32 md:p-2 p-1 gap-y-4 rounded-xl bg-orange-500 md:text-xl  text-white text-xl cursor-pointer">
            Analyze
          </h1>
        </button>
      </motion.div>
    </div>
  );
};

export default Main;
