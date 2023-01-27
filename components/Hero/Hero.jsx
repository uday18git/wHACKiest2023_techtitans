import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'

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
            src="/images/happygroup.jpg"
            className="w-full h-full object-cover brightness-50 contrast-125"
            alt=""
          />
          <div className="!absolute z-[999] space-y-4 top-[20%] left-[8%] md:left-[20%] max-w-[550px] text-left">
            <h1 className="!text-white leading-[60px] text-5xl  font-bold ">
              Its not about the destination. It's About the Journey
            </h1>
            <p className="font-semibold text-white text-md">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit.
              Laboriosam, voluptatum?
            </p>
            <TransparentBtn text={'Discover More'} />
          </div>
        </div>
      </SwiperSlide>
      <SwiperSlide>
       
        <div className="relative h-full w-full">
          <img
            src="/images/happygroup.jpg"
            className="w-full h-full object-cover brightness-50 contrast-125"
            alt=""
          />
          <div className="!absolute z-[999] space-y-4 top-[20%] left-[8%] md:left-[20%] max-w-[550px] text-left">
            <h1 className="!text-white leading-[60px] text-5xl  font-bold ">
              Its not about the destination. It's About the Journey
            </h1>
            <p className="font-semibold text-white text-md">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit.
              Laboriosam, voluptatum?
            </p>
            <TransparentBtn text={'Discover More'} />
          </div>
        </div>
      </SwiperSlide>
      <SwiperSlide>
       
        <div className="relative h-full w-full">
          <img
            src="/images/happygroup.jpg"
            className="w-full h-full object-cover brightness-50 contrast-125"
            alt=""
          />
          <div className="!absolute z-[999] space-y-4 top-[20%] left-[8%] md:left-[20%] max-w-[550px] text-left">
            <h1 className="!text-white leading-[60px] text-5xl  font-bold ">
              Its not about the destination. It's About the Journey
            </h1>
            <p className="font-semibold text-white text-md">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit.
              Laboriosam, voluptatum?
            </p>
            <TransparentBtn text={'Discover More'} />
          </div>
        </div>
      </SwiperSlide>
    </Swiper>
  )
}

export default Hero
