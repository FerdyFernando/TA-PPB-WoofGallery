import React from 'react'
import { useParams, useLocation } from 'react-router-dom'

const Picture = ({images}) => {
  const {picture} = useParams()
  const {state} = useLocation()

  console.log(images)

  return (
    <>
      <img src={state.image} className='fixed z-30' />
    </>
  )
}

export default Picture