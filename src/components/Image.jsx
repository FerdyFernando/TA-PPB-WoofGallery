import React from 'react'


const Image = ({url, className}) => {
  return (
    <div className={`overflow-hidden rounded ${className}`}>
        <div className='w-full h-full bg-cover bg-center bg-no-repeat' style={{ backgroundImage: `url(${url.replace(' ', '%20')})` }}></div>
    </div>
  )
}

export default Image