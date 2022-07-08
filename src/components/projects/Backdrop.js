import React from 'react'

const Backdrop = (props) => {
  return (
    <div
    className=' opacity-50 h-screen w-screen fixed bg-red-300 right-0 top-0'
    >{props.children}</div>
  )
}

export default Backdrop