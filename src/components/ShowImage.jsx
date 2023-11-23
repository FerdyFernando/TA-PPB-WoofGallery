import React, {useState} from 'react'
import Image from './Image'
import Button from './Button'

const ShowImage = ({url, event}) => {
  return (
    <div className='bg-[#111517] fixed bottom-0 rounded-md right-1/2 z-10 p-3 lg:p-6'>
        <div className='relative'>
          <Image url={url} />
          <Button className={`hover:bg-[#ae1313] bg-[#ff1414] p-2 absolute left-0 top-0`} event={(e) => event('')}>
            Close
          </Button>
        </div>
    </div>
  )
}

export default ShowImage