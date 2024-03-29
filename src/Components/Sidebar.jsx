import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { IoMenu, IoClose } from 'react-icons/io5';

const Sidebar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className='fixed  top-5  left-5 text-white md:hidden '>
      <motion.button
        whileTap={{ scale: 0.8 }}
        onClick={toggleSidebar}
        transition={{ duration: 0.5 }}
      >
        {isOpen ? <IoClose className="size-7 -mt-9 rounded bg-orange-500 -ml-4" /> : <IoMenu className="size-7 -mt-9 rounded bg-orange-500 -ml-4" />}
      </motion.button>

      <motion.div
        initial={isOpen ? { opacity: 1, y: '-7%' } : { opacity: 0, y: '-10%' }}
        animate={isOpen ? { opacity: 1, y: '-7%' } : { opacity: 0, y: '-10%' }}
        transition={{duration:.5}}
        className="sidebar w-40 rounded bg-orange-500 mt-1 pt-4 pb-4 -ml-4"
      >
        {isOpen && (
          <ul className="flex flex-col  items-center ">
            <motion.li
              whileHover={{ scale: 1.2 }}
              whileTap={{ scale: 0.9 }}
              style={{ x: 1 }}
              transition={{}}
              className="mb-2 md:mb-0"
            >
              <Link to="/" onClick={toggleSidebar}>
                Home
              </Link>
            </motion.li>
            <motion.li
              whileHover={{ scale: 1.2 }}
              whileTap={{ scale: 0.8 }}
              style={{ y: 1 }}
              className="mb-2 md:mb-0"
            >
              <Link to="/diseases" onClick={toggleSidebar}>
                Diseases
              </Link>
            </motion.li>
            <motion.li
              whileHover={{ scale: 1.2 }}
              whileTap={{ scale: 0.8 }}
              style={{ x: 1 }}
              className="mb-2 md:mb-0"
            >
              <Link to="/contact" onClick={toggleSidebar}>
                Contact
              </Link>
            </motion.li>
            <motion.li
              whileHover={{ scale: 1.2 }}
              whileTap={{ scale: 0.8 }}
              style={{ y: 1 }}
              className="mb-2 md:mb-0"
            >
              <Link to="/about" onClick={toggleSidebar}>
                About
              </Link>
            </motion.li>
          </ul>
        )}
      </motion.div>
    </div>
  );
};

export default Sidebar;
