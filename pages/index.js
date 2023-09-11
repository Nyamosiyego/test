import React from 'react'
import Navbar from '../components/Navbar'

const index = () => {
  return (
      <div className='px-8'> 
        <Navbar />
        <div className='flex flex-col items-center justify-center mt-20'>
          <h1 className='text-4xl'>Looking for remote jobs don't look far</h1>
          <h2 className='text-2xl mt-2'>We have the best remote jobs for you</h2>
        </div>
      </div>
  )
}

export default index