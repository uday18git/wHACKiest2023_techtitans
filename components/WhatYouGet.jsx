import React from 'react'
import WhatYouGetCard from './Cards/WhatYouGetCard'
import { motion } from 'framer-motion'

const WhatYouGet = () => {
  return (
    <div className="w-full bg-gray-900 py-5">
      <div className="container mt-8  text-white">
        <div className='mx-auto items-center justify-center'>
        <motion.h2  
        initial={{opacity:0}}
        whileInView={{opacity:1}}
        transition={{duration:0.8}}
        className="text-4xl font-poppins font-bold  text-gray-100">
          What you get
        </motion.h2>
        <div className='w-[100px] h-[2px] bg-white' />

        </div>

        <div className="mt-14 flex flex-col gap-5  ">
          {[0, 1, 2, 3].map((item, i) => (
            <WhatYouGetCard key={i} index={i} />
          ))}
        </div>
      </div>
    </div>
  )
}

export default WhatYouGet
