import React, { useState, useEffect } from 'react';
import { useParams, Outlet, Link } from 'react-router-dom';
import Image from '../components/Image';
import axios from 'axios';

const Show = () => {
  const [images, setImages] = useState([]);
  const { breed } = useParams();

  const getAllImages = async () => {
    try {
      const response = await axios.get(`https://dog.ceo/api/breed/${breed.replace(' ', '/')}/images`);
      setImages(response.data.message);
    } catch (err) {
      console.log(err.message);
    }
  };

  useEffect(() => {
    getAllImages();
  }, []);

  return (
    <section className="py-10 px-3">
      <div className="flex flex-col items-center w-full">
        <Outlet />
        <div className="sm:max-w-[540px] md:max-w-[600px] lg:max-w-[1050px] flex flex-col gap-10">
          <h1 className="font-DynaPuff uppercase font-bold text-4xl lg:text-5xl text-center text-[#46f8bf]">{breed}</h1>

          <div className="flex flex-row flex-wrap bg-[#111517] p-4 md:p-5 rounded-xl gap-2 md:gap-5 justify-between">
  {images &&
    images.map((image, index) => (
      <Link key={index} to={`${index}`} state={{ image, breed }}>
        <Image url={image} className="image h-[6.31rem] w-[6.31rem] md:h-[10rem] md:w-[10rem] lg:h-[20rem] lg:w-[20rem]" />
      </Link>
    ))}
</div>
        </div>
      </div>
    </section>
  );
};

export default Show;
