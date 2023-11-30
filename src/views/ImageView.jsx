// ImageView.jsx
import React from 'react';
import { useParams, useLocation } from 'react-router-dom';
import Image from '../components/Image';

const ImageView = () => {
  const { index } = useParams();
  const location = useLocation();
  const { image, breed } = location.state;
  const imageUrl = image.replace(' ', '%20');

  return (
    <div className="flex justify-center items-center h-screen">
      <h1 className="text-2xl">{breed}</h1>
      <Image url={imageUrl} className="max-w-full max-h-full" />
    </div>
  );
};

export default ImageView;
