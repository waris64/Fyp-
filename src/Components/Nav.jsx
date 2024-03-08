import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../assets/Rectangle 10.png';

const Nav = ({ logoSrc }) => {
  return (
    <div className="flex flex-col md:flex-row justify-between  items-center bg-no-repeat text-xl text-white md:h-[4rem] w-screen bg-green-950 p-4 overflow-x-hidden">
      <div className="flex items-center">
        <img src={logoSrc} className='w-12 h-12 md:w-auto md:h-auto' alt="" />
      </div>
      <div className='md:ml-4 mt-4 md:mt-0'>
        <ul className='flex flex-col md:flex-row justify-around md:gap-x-8 items-center'>
          <li className="mb-2 md:mb-0">
            <Link to="/">Home</Link>
          </li>
          <li className="mb-2 md:mb-0">
            <Link to="/diseases">Diseases</Link>
          </li>
          <li className="mb-2 md:mb-0">
            <Link to="/contact">Contact</Link>
          </li>
          <li className="mb-2 md:mb-0">
            <Link to="/about">About</Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Nav;
