import React from 'react'

const Footer = () => {
  return (
    <div className='bg-green-950 text-white flex justify-around'>
        <div>
            <h1>Quick Links</h1>
            <ul>
                <li>Home</li>
                <li>Diseses</li>
                <li>About Us</li>
            </ul>
        </div>
        <div>
            <h1>Contact Us</h1>
            <label htmlFor="contact">
            Phone no : +923479565089
                </label>
                <label htmlFor="">
                Email: Citrus@gmail.com
                </label>
                
        </div>
        <div className=''>
        <label htmlFor="
                copyright">
                        copyright@ 2024 reserved
                </label>
        </div>
    </div>
  )
}

export default Footer