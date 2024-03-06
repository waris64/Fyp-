import React from 'react';
import banner from '../assets/home-banner.png';
import rectangle from '../assets/Rectangle 11.png';
import { FaCloudUploadAlt } from 'react-icons/fa';

const Main = () => {
  return (
    <div>
      <div className='md:flex md:text-center md:bg-cover md:bg-no-repeat md:text-3xl md:text-white h-[9rem] md:h-[15rem]' style={{ backgroundImage: `url('${banner}')` }}>
        <h1 className='md:mt-20 md:text-[8vh] md:m-auto md:leading-10 '>Citrus Disease Detection <br />Services</h1>
      </div>
      <section className='flex flex-col md:flex-row md:justify-around md:items-center md:py-8'>
        <div>
          <img src={rectangle} className='w-96 md:w-auto md:h-96 -mr-7' alt="" />
        </div>
        <div className='w-full md:w-1/2 md:pl-8'>
          <h1 className='font-bold text-3xl pb-5 md:text-4xl'>Citrus Diseases</h1>
          <p className='md:text-lg md:leading-loose'>
            Leaves from healthy plants and plants infected with prevalent diseases (citrus greening, citrus canker, scab, greasy spot).
            Citrus greening is the most serious citrus disease caused by a bacteria which is spread by the Asian citrus psyllid (ACP). ACP is a tiny insect that transmits the bacteria to the tree when feeding.
          </p>
        </div>
      </section>
      <div className='mb-8 bg-green-950 h-44 m-auto flex flex-col items-center justify-center'>

        <div className="border-2 border-slate-300 rounded-lg md:size-60 shadow-2xl flex flex-col items-center justify-center   bg-neutral-400">
          <label htmlFor="imageUpload" className='pb-7'>Drop your picture here</label>
          <label htmlFor="fileInput" className="cursor-pointer">
            <FaCloudUploadAlt className="md:size-12 transition-all cursor-pointer duration-500 ease mb-1 hover:translate-y-[-0.5rem]" />
          </label>
          <input
            type="file"
            id="fileInput"
            name="input"
            className="hidden"
            accept="image/*"
            onChange={handleFileChange}
          />
        </div>
    <button className='m-auto flex'>
          <h1 className='  w-40 p-3 gap-y-4  rounded bg-orange-400  text-2xl cursor-pointer'>Analyze</h1>
    </button>
      </div>
    </div>
  );
};

export default Main;
