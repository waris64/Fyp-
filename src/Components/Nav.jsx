import React from 'react';
import { Link } from 'react-router-dom';
import banner from '../assets/home-banner.png';
import logo from '../assets/Rectangle 10.png'
const Nav = () => {
  return (

    <div className="flex pt-3 justify-around  relative bg-no-repeat text-xl text-white md:h-[4rem] items-center">
      <div>
        <img src={logo} className='size-12 ' alt="" />
      </div>
      <div>
        <ul className='flex justify-between gap-x-12 items-center text-orange-400 w-2/4'>
          <li>
            <Link to="/home">Home</Link>
          </li>
          <li>
            <Link to="/diseases">Diseases</Link>
          </li>
          <li>
            <Link to="/contact">Contact</Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Nav;
