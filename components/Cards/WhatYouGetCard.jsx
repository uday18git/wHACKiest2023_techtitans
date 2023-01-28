import React from 'react'
import TransparentBtn from './TransparentBtn'
import { motion } from 'framer-motion'


const WhatYouGetCard = ({index}) => {
  return (
    <div className=" w-full container  mx-auto px-4 py-3">
      {index % 2 == 0 ? (
        <div className="flex flex-col lg:flex-row items-center gap-4 ">
          <motion.img
            initial={{ x: -100, opacity: 0 }}
            whileInView={{ x: 0, opacity: 100 }}
            transition={{ delay: index * 0.2, duration: 0.9 }}
            src="/images/event3.webp"
            alt=""
            className="max-w-[400px] rounded-lg"
          />
          <motion.div
            initial={{ x: 100, opacity: 0 }}
            whileInView={{ x: 0, opacity: 100 }}
            transition={{ delay: index * 0.2, duration: 0.9 }}
            className="flex flex-col gap-3 flex-1"
          >
            <h2 className="font-semibold text-2xl text-gray-400">
            Bring your A-game to the field with our local sports events.
            </h2>
            <p className="text-white text-md">
            We'll connect you to the sports organizers near you, 
            you can join the games and level up with others.
            Improve your metrics to bring your sporting career into limelight. 
            </p>
            <a href="#diet">
              <TransparentBtn
                text={'Try Now'}
                classes={'text-blue-700 max-w-[200px] mr-auto'}
              />
            </a>
          </motion.div>
        </div>
      ) : (
        <div className="flex flex-col lg:flex-row  items-center gap-3">
          <motion.div
            initial={{ x: -100, opacity: 0 }}
            whileInView={{ x: 0, opacity: 100 }}
            transition={{ delay: index * 0.2, duration: 0.9 }}
            className="flex flex-col gap-3 "
          >
            <h2 className="font-semibold text-2xl text-gray-400">
            Your body deserves the best, our diet planner will help you to achieve it.
            </h2>
            <p className="text-white text-md">
            We provide personalized diets with our diet experts , 
            no need to worry about your diet , we've got it!
            we'll deliver it to you on door! 
            </p>
            <a href="#diet">
              <TransparentBtn
                text={'Try Now'}
                classes={'text-blue-700 max-w-[200px] mr-auto'}
              />
            </a>
          </motion.div>
          <motion.img
            initial={{ x: 100, opacity: 0 }}
            whileInView={{ x: 0, opacity: 100 }}
            transition={{ delay: index * 0.2, duration: 0.9 }}
            src="/images/dietbg.jpg"
            alt=""
            className="max-w-[400px] rounded-lg"
          />
        </div>
      )}
    </div>
  )
}

export default WhatYouGetCard