import React from 'react';
import ferdyImage from "../profileImage/ferdyImage.jpg";

const About = () => {
  return (
    <section className='pt-10 px-3'>
      <div className='w-full flex flex-col items-center gap-4'>

        <h1 className='text-white font-DynaPuff uppercase font-bold text-4xl lg:text-5xl'> About Me </h1>

        <div className='flex flex-col items-center text-white'>
          <div
            className='rounded-full overflow-hidden h-72 w-72 md:h-90 md:w-90 lg:h-108 lg:w-108 mb-10'
          >
            <img
              src={ferdyImage}
              alt='Ferdy Fernando'
              className='object-cover h-full w-full'
            />
          </div>

         
          <h2 className='text-[#46f8bf] font-DynaPuff text-3xl lg:text-4xl'>Ferdy Fernando</h2>
          <p className='text-white font-DynaPuff text-2xl lg:text-3xl mb-10'>21120121130062</p>

        
          <p className='text-justify ml-6 mr-6'>
            Seorang manusia dari Kelompok 12 Praktikum PPB 2023, Jurusan Teknik Komputer, Universitas Diponegoro.
            Saya Suka sekali dengan kata kata "AC" maupun "ACC", kalau mendengarnya pasti saya akan langsung bahagia.
          </p>
        </div>

      </div>
    </section>
  );
};

export default About;
