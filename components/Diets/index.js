import React from 'react'
import Diet from '../Cards/Diet'

const DietSection = () => {
  return (
    <div className="container flex flex-col space-y-6 mt-5">
      <h2 className='text-4xl font-poppins font-semibold text-gray-800'>Explore our Diet Plans</h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {[1,2,3,4,5].map(()=>(
            <div>
                <Diet/>
            </div>
        ))}
      </div>
    </div>
  )
}

export default DietSection