import React from 'react';
import { NavLink } from './NavLink';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome, faRandom, faInfoCircle } from '@fortawesome/free-solid-svg-icons';

const BottomBar = ({ isOpen }) => {
  return (
    <header className='w-full h-16 bg-[#111517] border-t border-[#46f8bf] fixed bottom-0 z-20 flex items-center justify-center px-4'>

      <div className="flex w-full justify-evenly">
        <NavLink to='/breeds-list/' className='text-white hover:text-[#34ba90] transition ease-in duration-200 flex-1 text-center'>
          <div>
            <FontAwesomeIcon icon={faHome} />
            <p className="text-xs">Home</p>
          </div>
        </NavLink>
        <NavLink to='/breeds-list/random' className='text-white hover:text-[#34ba90] transition ease-in duration-200 flex-1 text-center'>
          <div>
            <FontAwesomeIcon icon={faRandom} />
            <p className="text-xs">Random</p>
          </div>
        </NavLink>
        <NavLink to='/breeds-list/about' className='text-white hover:text-[#34ba90] transition ease-in duration-200 flex-1 text-center'>
          <div>
            <FontAwesomeIcon icon={faInfoCircle} />
            <p className="text-xs">About</p>
          </div>
        </NavLink>
      </div>

    </header>
  );
};

export default BottomBar;
