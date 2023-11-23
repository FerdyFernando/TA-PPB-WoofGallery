import React from 'react'
import '../css/Load.css'

const Load = () => {
  return (
    <>
      <h1 className='text-white font-DynaPuff uppercase font-bold text-2xl text-center mt-20'>Without result</h1>
      <h1 className='text-[#46f8bf] font-DynaPuff uppercase font-bold text-2xl'>this breed of dog is not on the list</h1>
      <div className='w-full h-96 flex justify-center items-center'>
        <div className='relative'>
          <div className='loader'>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
          </div>
        </div>
      </div>

    </>
  )
}

export default Load