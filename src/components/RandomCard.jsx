import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Image from './Image';
import { Link } from 'react-router-dom'; 

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPaw } from '@fortawesome/free-solid-svg-icons';

const RandomCard = () => {
  const [randomDog, setRandomDog] = useState({});

  const getRandomDog = async () => {
    try {
      const response = await axios.get('https://dog.ceo/api/breeds/image/random');
      const { message: imageUrl, status } = response.data;

      if (status === 'success') {
        const breed = imageUrl.split('/')[4].replace('-', ' ');

        setRandomDog({ imageUrl, breed });
      } else {
        console.error('Failed to fetch a random dog image.');
      }
    } catch (error) {
      console.error('Error fetching random dog image:', error.message);
    }
  };

  useEffect(() => {
    getRandomDog();
  }, []);

  return (
    <Link to={`/breeds-list/${randomDog.breed}`} className='text-[#46f8bf] hover:text-[#2b9876] transition ease-in duration-200'>
      <div className={`${randomDog.breed} bg-[#111517] my-6 p-4 md:p-5 flex flex-col gap-2 md:gap-5 rounded-xl w-full sm:max-w-[540px] md:max-w-[600px] lg:max-w-[1050px]`}>
        {randomDog.imageUrl && (
          <>
            <div style={{ color: '#46f8bf' }} className='flex flex-row items-center'>
              <FontAwesomeIcon icon={faPaw} className='mr-2 h-6' />
              <h3 className='tracking-wider capitalize font-DynaPuff font-bold text-lg md:text-2xl'>{randomDog.breed}</h3>
            </div>

            <div className='flex justify-center items-center'>
              <Image url={randomDog.imageUrl} className='h-[20rem] w-[20rem] md:h-[15rem] md:w-[15rem] lg:h-[25rem] lg:w-[25rem]' />
            </div>
          </>
        )}
      </div>
    </Link>
  );
};

export default RandomCard;
