import React from 'react';

const Footer = () => {
  return (
    <div className='mt-4 w-screen bg-green-950 text-white flex flex-col md:flex-row justify-around p-5 leading-10'>
      <div className='mb-4 md:mb-0'>
        <h1 className='md:text-4xl text-2xl'>Quick Links</h1>
        <ul>
          <li>Home</li>
          <li>Diseases</li>
          <li>About Us</li>
        </ul>
      </div>
      <div className='flex items-end mb-4 md:mb-0 md:ml-8'>
        <label>
          copyright@ 2024 reserved
        </label>
      </div>
      <div className='flex flex-col'>
        <h1 className='md:text-4xl text-2xl'>Contact Us</h1>
        <label htmlFor="contact">
          Phone no : +923479565089
        </label>
        <label htmlFor="Email">
          Email: Citrus@gmail.com
        </label>
      </div>
    </div>
  );
}

export default Footer;
