import React, { useState } from 'react';
import RandomCard from '../components/RandomCard';
import Button from '../components/Button';

const Random = () => {
  const [key, setKey] = useState(0);

  const handleGenerateRandomDog = async () => {
    setKey((prevKey) => prevKey + 1);
  };

  return (
    <section className='pt-10 px-3'>
      <div className='w-full flex flex-col items-center gap-4'>
        <h1 className='text-white font-DynaPuff uppercase font-bold text-4xl lg:text-5xl text-center'>
          Random Dog Generator
        </h1>

        <div className='flex flex-col items-center gap-4'>
          <RandomCard key={key} />
        </div>

        <div className='flex justify-center items-center fixed bottom-20'>
          <Button
            event={handleGenerateRandomDog}
            className='hover:bg-[#34ba90] bg-[#44f2bb] w-48 h-16 lg:w-64 lg:h-20 text-[1.5rem] lg:text-[2rem]'
          >
            Generate
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Random;
