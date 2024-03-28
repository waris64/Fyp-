import React, { useState } from "react";
import { Link } from "react-router-dom";
import logo from "../assets/Rectangle 10.png";
import { RxHamburgerMenu } from "react-icons/rx";
import { IoClose } from "react-icons/io5";
import { motion } from "framer-motion";
import "../App.css";

const Nav = ({ logoSrc }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="md:flex md:flex-row  md:justify-start md:items-center  md:text-white    bg-green-950 md:py-5  relative">
      <motion.img
        animate={{ rotate: 360 }}
        transition={{ repeat: 2, duration: 2, repeatDelay: 1 }}
        src={logoSrc}
        className="w-12 h-12 absolute top-2 left-2 hidden md:inline"
        alt=""
      />
      <div
        className={`${
          isOpen ? "block" : "hidden"
        } md:flex md:mx-[60%] md:items-center  right-[3vw] bg-green-950 w-full`}
      >
        <motion.ul
          initial={{ opacity: 0, x: 10 }}
          whileInView={{ opacity: 1, x: 0 }}
          className="flex flex-col  md:flex-row md:flex justify-around md:gap-x-8 items-center"
        >
          <motion.li
            whileHover={{ scale: 1.2 }}
            whileTap={{ scale: 0.8 }}
            style={{ x: 1 }}
            className="mb-2 md:mb-0"
          >
            <Link to="/" onClick={toggleMenu} >
              <label  >Home</label>
              
            </Link>
          </motion.li>
          <motion.li
            whileHover={{ scale: 1.2 }}
            whileTap={{ scale: 0.8 }}
            style={{ x: 1 }}
            className="mb-2 md:mb-0"
          >
            <Link to="/diseases" onClick={toggleMenu}>
              Diseases
            </Link>
          </motion.li>
          <motion.li
            whileHover={{ scale: 1.2 }}
            whileTap={{ scale: 0.8 }}
            style={{ x: 1 }}
            className="mb-2 md:mb-0"
          >
            <Link to="/contact" onClick={toggleMenu}>
              Contact
            </Link>
          </motion.li>
          <motion.li
            whileHover={{ scale: 1.2 }}
            whileTap={{ scale: 0.8 }}
            style={{ y: 1 }}
            className="mb-2 md:mb-0"
          >
            <Link to="/about" onClick={toggleMenu}>
              About
            </Link>
          </motion.li>
          <motion.li
            whileHover={{ scale: 1.2 }}
            whileTap={{ scale: 0.8 }}
            style={{ y: 1 }}
            className="mb-2 md:mb-0"
          >
            <Link to="/login" onClick={toggleMenu}>
              LogIn
            </Link>
          </motion.li>
        </motion.ul>
      </div>
    </div>
  );
};

export default Nav;
