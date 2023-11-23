import React from 'react'

const Button = ({className, event, ...otherProps}) => {
  return (
    <>
        <button onClick={event} 
            className={`${className} transition ease-in duration-200 leading-3 text-white font-DynaPuff capitalize font-bold tracking-wider text-[10px] lg:text-lg rounded-[10px]`}
            {...otherProps}
        />
    </>
  )
}

export default Button