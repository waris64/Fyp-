import React from 'react';
import { Link } from 'react-router-dom';

const Nav = () => {
  return (
    <div className='flex justify-around'>
        <img src='../logo' alt="picture of a logo" />
      <ul className='flex justify-around items-center  w-2/4'>
        <li>
          <Link to="/">Home</Link>
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
  );
};

export default Nav;
