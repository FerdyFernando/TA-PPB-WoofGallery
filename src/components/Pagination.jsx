import React from 'react'
import Button from './Button'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faArrowRight} from '@fortawesome/free-solid-svg-icons'
import {faArrowLeft} from '@fortawesome/free-solid-svg-icons'

const Pagination = ({page, max, next, previous}) => {
  return (
    <div className='flex flex-row w-full justify-center gap-6 mb-20 items-center'>
        <Button className={`hover:bg-[#34ba90] bg-[#44f2bb] p-3 w-20 lg:w-20`} event={previous}>
            <FontAwesomeIcon icon={faArrowLeft} className='text-white text-3xl' />
        </Button>

        <p className='uppercase tracking-wider font-DynaPuff text-md lg:text-2xl font-extrabold text-white'>Page {page} of {max}</p>

        <Button className={`hover:bg-[#34ba90] bg-[#44f2bb] p-3 w-20 lg:w-20`} event={next}>
            <FontAwesomeIcon icon={faArrowRight} className='text-white text-3xl' />
        </Button>
    </div>
  )
}

export default Pagination