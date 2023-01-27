import { Button } from '@mui/material'
import React from 'react'
import Diet from '../Cards/Diet'
import Sport from '../Cards/Sport'
import TransparentBtn from '../Cards/TransparentBtn'

const SportSection = () => {
  return (
    <div className="container flex flex-col space-y-6 mt-5">
      <h2 className="text-4xl font-poppins font-semibold text-gray-800">
        Explore our Diet Plans
      </h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {[1, 2, 3].map((item,k) => (
          <div key={i}>
            <Sport/>
          </div>
        ))}
      </div>

      <TransparentBtn
        text={'View More'}
        classes={'text-blue-500 border-blue-500 max-w-[200px] mx-auto'}
      />
    </div>
  )
}

export default SportSection
