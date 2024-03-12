import React from 'react';
import Nav from '../Components/Nav';
import Footer from '../Components/Footer';
import Slick_Slider from '../Components/Slick_Slider'
import Rectangle from '../assets/Rectangle 10.png';
import DiseaseImg from '../assets/Rectangle 12.png';
import Rec14 from '../assets/Rectangle 14.png';
import Rec19 from '../assets/Rectangle 19.png';
import Rec20 from '../assets/Rectangle 20.png';
import Rec21 from '../assets/Rectangle 21.png';
import Sidebar from '../Components/Sidebar';

const Diseases = () => {
  return (
    <div>
      <Nav logoSrc={Rectangle} />
      <Sidebar/>
      <Slick_Slider className="h-[9rem]"/>
      {/* <div className=' md:flex md:text-center md:bg-cover md:bg-no-repeat md:text-3xl md:text-white h-[9rem] md:h-[15rem]' style={{ backgroundImage: `url('${DiseaseImg}')` }}>
        <h1 className='md:mt-20 md:text-[8vh] text-3xl pt-10 text-center text-white md:m-auto m-auto md:leading-10'>Citrus Diseases </h1>
      </div> */}

      <section className='flex flex-col md:flex-row md:justify-around md:items-center md:py-8 p-4'>

        <div className='w-full md:w-1/2 md:pl-8'>
          <h1 className='font-bold text-xl md:text-4xl mb-4'>Citrus Canker</h1>
          <p className='md:text-base md:leading-loose'>
            Citrus greening, scientifically known as Huanglongbing (HLB), is a devastating citrus disease that has posed a significant threat to citrus crops worldwide. The disease is caused by the bacterium Candidatus Liberibacter asiaticus and is primarily transmitted by the Asian citrus psyllid, a tiny insect that feeds on citrus trees. Citrus greening has emerged as a major challenge for the citrus industry, affecting the production of oranges, grapefruits, lemons, and other citrus fruits.
          </p>
        </div>
        <div>
          <img src={Rec14} className='w-80 sm:p-4 p-4' alt="" />
        </div>
      </section>

      <section className='flex flex-col md:flex-row md:justify-around md:items-center  md:py-8 md:px-9 p-4'>

        <div>
          <h1 className='font-bold text-xl md:text-4xl mb-4 '>Citrus Greening</h1>
          <img src={Rec19} className='h-72 sm:p-4 p-4' alt="" />
        </div>
        <div className='w-full md:w-1/2 md:pl-8'>
          <p className='md:text-base md:leading-loose pt-6'>
            Citrus greening, scientifically known as Huanglongbing (HLB), is a devastating citrus disease that has posed a significant threat to citrus crops worldwide. The disease is caused by the bacterium Candidatus Liberibacter asiaticus and is primarily transmitted by the Asian citrus psyllid, a tiny insect that feeds on citrus trees. Citrus greening has emerged as a major challenge for the citrus industry, affecting the production of oranges, grapefruits, lemons, and other citrus fruits.
          </p>
        </div>
      </section>

      <section className='flex flex-col md:flex-row md:justify-around md:items-center md:py-8 p-4'>

        <div className='w-full md:w-1/2 md:pl-8'>
          <h1 className='font-bold text-xl md:text-4xl mb-4'>Citrus Scab</h1>
          <p className='md:text-base md:leading-loose'>
            Citrus Scab, caused by the fungus Elsinoë fawcettii, is a prevalent and destructive disease affecting citrus crops worldwide. This pathogen primarily targets various citrus species, including oranges, lemons, and grapefruits, posing a significant threat to citrus production. Characterized by raised, scaly lesions on fruit surfaces, leaves, and stems, Citrus Scab not only diminishes the aesthetic appeal of the fruits but also hampers their market value.
          </p>
        </div>
        <div>
          <img src={Rec20} className='w-80 sm:p-4 p-4' alt="" />
        </div>
      </section>

      <section className='flex flex-col md:flex-row md:justify-around md:items-center md:py-8 md:px-9 p-4'>

        <div>
          <h1 className='font-bold text-xl md:text-4xl mb-4'>Citrus Tristeza Virus</h1>
          <img src={Rec21} className='h-64 sm:p-4 p-4' alt="" />
        </div>
        <div className='w-full md:w-1/2 md:pl-8'>
          <p className='md:text-base md:leading-loose md:pt-8'>
            Citrus greening, scientifically known as Huanglongbing (HLB), is a devastating citrus disease that has posed a significant threat to citrus crops worldwide. The disease is caused by the bacterium Candidatus Liberibacter asiaticus and is primarily transmitted by the Asian citrus psyllid, a tiny insect that feeds on citrus trees. Citrus greening has emerged as a major challenge for the citrus industry, affecting the production of oranges, grapefruits, lemons, and other citrus fruits.
          </p>
        </div>
      </section>

      <Footer />
    </div>
  );
}

export default Diseases;
