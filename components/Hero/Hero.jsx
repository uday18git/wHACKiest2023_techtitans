import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
import { motion } from 'framer-motion'
// Import Swiper styles
import 'swiper/css'
import 'swiper/css/navigation'

// import required modules
import { Navigation } from 'swiper'
import Image from 'next/image'
import MainBtn from '../Cards/MainBtn'
import TransparentBtn from '../Cards/TransparentBtn'

const Hero = () => {
  return (
    <Swiper navigation={true} modules={[Navigation]} className="mySwiper">
      <SwiperSlide>
       
        <div className="relative h-full w-full">
          <img
            src="/pics/bannerr1.jpg"
            className="w-full h-full object-cover brightness-50 contrast-125"
            alt=""
          />
          <motion.div 
          // inital={{opacity:0}}
          // animate={{opacity:1,duration:0.5}}
          whileInView={{opacity:1}}
          transition={{delay:0.2,duration:0.5}}
          className="!absolute z-[999] space-y-4 top-[20%] left-[8%] md:left-[20%] max-w-[550px] text-left">
            <h1 className="!text-white  leading-[60px] text-5xl  font-bold ">
            Dream big, train hard, achieve greatness with us! 
            </h1>
            <p className="font-semibold text-white text-md">
            Elevate your game with our expert sports, nutrition, and fitness guidance.
            </p>
            <TransparentBtn text={'Discover More'} />
          </motion.div>
        </div>
      </SwiperSlide>
      <SwiperSlide>
       
        <div className="relative h-full w-full">
          <img
            src="/pics/banner2.jpg"
            className="w-full h-full object-cover brightness-50 contrast-125"
            alt=""
          />
          <div className="!absolute z-[999] space-y-4 top-[20%] left-[8%] md:left-[20%] max-w-[550px] text-left">
            <h1 className="!text-white leading-[60px] text-5xl  font-bold ">
            Fuel your body, fire up your metabolism with our diet planner.
            </h1>
            <p className="font-semibold text-white text-md">
            We provide a comprehensive and user-friendly platform for individuals looking to improve their health and reach their dietary goals. 
            </p>
            <TransparentBtn text={'Discover More'} />
          </div>
        </div>
      </SwiperSlide>
      <SwiperSlide>
       
        <div className="relative h-full w-full">
          <img
            src="/pics/banner3.jpg"
            className="w-full h-full object-cover brightness-50 contrast-125"
            alt=""
          />
          <div className="!absolute z-[999] space-y-4 top-[20%] left-[8%] md:left-[20%] max-w-[550px] text-left">
            <h1 className="!text-white leading-[60px] text-5xl  font-bold ">
            This New Year Elevate your game with our expert sports, nutrition, and fitness guidance.
            </h1>
            <p className="font-semibold text-white text-md">
            New year, new you. Make this year the best one yet.
            </p>
            <TransparentBtn text={'Discover More'} />
          </div>
        </div>
      </SwiperSlide>
    </Swiper>
  )
}

export default Hero
