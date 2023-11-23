import React from 'react';
import { NavLink } from './NavLink';

const BottomBar = ({isOpen}) => {
  return (
    <header className='w-full h-16 bg-[#111517] border-t border-[#46f8bf] fixed bottom-0 z-20 flex items-center justify-center px-4'>

      <div className="flex w-full justify-evenly">
        <NavLink to='/breeds-list/' className='text-white hover:text-[#34ba90] transition ease-in duration-200 flex-1 text-center'>
          H
        </NavLink>
        <NavLink to='/breeds-list/random' className='text-white hover:text-[#34ba90] transition ease-in duration-200 flex-1 text-center'>
          R
        </NavLink>
        <NavLink to='/breeds-list/about' className='text-white hover:text-[#34ba90] transition ease-in duration-200 flex-1 text-center'>
          A
        </NavLink>
      </div>

    </header>
  );
};

export default BottomBar;
