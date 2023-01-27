import { Button } from '@mui/material'
import React from 'react'
import Diet from '../Cards/Diet'
import TransparentBtn from '../Cards/TransparentBtn'

const DietSection = () => {
  return (
    <div className="container flex flex-col space-y-6 mt-5">
      <h2 className='text-4xl font-poppins font-semibold text-gray-800'>Explore our Diet Plans For you</h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {[1,2,3].map((item,i)=>(
            <div key={i}>
                <Diet/>
            </div>
        ))}
      </div>

<TransparentBtn text={'View More'}  classes={'text-gray-900 border-gray-900 max-w-[200px] mx-auto'}/>

    </div>
  )
}

export default DietSection