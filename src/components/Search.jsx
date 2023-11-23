import React, {useState} from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faMagnifyingGlass} from '@fortawesome/free-solid-svg-icons'
import { useNavigate } from 'react-router-dom'



const Search = ({event}) => {
  const [searchBreed, setSearchBreed] = useState('')
  const navigate = useNavigate()

  const Event = (breed) => {
    event(breed.toLowerCase())
    navigate('/breeds-list/')
  }

  return (
    <div className='relative w-36 md:w-52 lg:w-72 flex items-center justify-end'>
        <button onClick={(e) => Event(searchBreed)} className='cursor-pointer absolute h-full flex items-center p-2 lg:p-5 text-[#46f8bf] hover:text-[#34ba90] transition ease-in duration-200'>
          <FontAwesomeIcon icon={faMagnifyingGlass} className='lg:h-6 ' />
        </button>
        <input className="w-full tracking-wider rounded-full font-DynaPuff pl-[15px] pr-[34px] lg:pr-[46px] py-[10px] text-[10px] lg:text-lg font-bold text-[#2d9f7b] text-colorWhite bg-colorTourq focus:outline-0" 
            value={searchBreed}
            placeholder='search dog breed'
            type='text'
            onChange={(e) => setSearchBreed(e.target.value)}
            onKeyPress={(e) => e.key === 'Enter' && Event(searchBreed)}
        />
    </div>
  )
}

export default Search