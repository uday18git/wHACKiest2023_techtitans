import { Button } from '@mui/material'
import React from 'react'
import Diet from '../Cards/Diet'
import Sport from '../Cards/Sport'
import TransparentBtn from '../Cards/TransparentBtn'
import SportGallery from './SportGallery'

const SportSection = () => {
  return (
    <div className="container flex flex-col space-y-6 mt-5">
      <h2 className="text-4xl font-poppins font-semibold text-gray-800">
        Upcoming Sports Events
      </h2>
      <div className="w-[100px] h-[2px] bg-gray-900" />

      {/* <SportGallery /> */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 lg:grid-cols-3 ">
        {[0, 1, 2, 3, 4].map((item, i) => (
          <div>
            <Sport />
          </div>
        ))}
      </div>
    </div>
  )
}

export default SportSection
