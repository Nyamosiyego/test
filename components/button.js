import React from 'react'

const Button = ({children}) => {
  return (
    <button className='text-white bg-blue-500 w-16 h-8 rounded-xl mt-2'>{children}</button>
  )
}

export default Button