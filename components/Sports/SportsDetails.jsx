import React from 'react'
import { TiTick } from 'react-icons/ti'
import TransparentBtn from '../Cards/TransparentBtn'
import Accordion from '@mui/material/Accordion'
import AccordionSummary from '@mui/material/AccordionSummary'
import AccordionDetails from '@mui/material/AccordionDetails'
import Typography from '@mui/material/Typography'
import ExpandMoreIcon from '@mui/icons-material/ExpandMore'
import MainBtn from '../Cards/MainBtn'

const requires = [
  {
    title: 'Age greater than 16',
  },
  {
    title: 'X level greater than 50',
  },
  {
    title: 'Y level greater than 50',
  },
  {
    title: 'Weight greater than 50',
  },
]

const SportsDetails = () => {
  return (
    <div className="flex flex-col lg:flex-row items-center  shadow-lg space-x-3 mx-auto gap-5 px-6">
      <img
        src="/images/football.jpg"
        alt=""
        className=" rounded-md max-h-[800px] max-w-[900px] mx-auto"
      />

      <div className="flex flex-col gap-3">
        <div className="flex flex-col gap-3">
          <h1 className="font-bold text-3xl font-poppins">Under 20 Cricket </h1>
          <div className="bg-black h-[1px] w-full" />
        </div>
        <p className="text-gray-800 text-lg">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Error optio
          itaque, vel soluta et sint magnam expedita natus quasi facilis!
        </p>
        <div className="px-5 py-3 border-2 border-gray-500 flex flex-col gap-3">
          <div className="flex flex-col gap-3">
            <h2 className="font-bold text-xl font-poppins text-gray-800 text-center">
              Requirements
            </h2>
            <div className="bg-black h-[1px] w-full" />
          </div>

          <div className="flex flex-col gap-2">
            {requires.map((item, i) => (
              <div className="flex items-center gap-3">
                <TiTick className="text-green-600" />
                <h3 className="font-semibold text-gray-700">{item.title}</h3>
              </div>
            ))}
          </div>
        </div>

        <div className="flex flex-col gap-3">
          <h2 className="font-semibold text-xl text-gray-900 font-poppins">
            Selection Venue
          </h2>
          <div>
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m16!1m12!1m3!1d2965.0824050173574!2d-93.63905729999999!3d41.998507000000004!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!2m1!1sWebFilings%2C+University+Boulevard%2C+Ames%2C+IA!5e0!3m2!1sen!2sus!4v1390839289319"
              width="100%"
              height="200"
              frameborder="0"
              // style="border:0"
            ></iframe>
          </div>
        </div>

        <a href="https://docs.google.com/forms/d/e/1FAIpQLSc1jOQREfDC0jjuVeSxrhdh795yobfoT85QtK5zvhyAcN9AOw/viewform">

        <MainBtn text={'Enroll Now'} classes={'mt-6'} />
        </a>
      </div>
    </div>
  )
}

export default SportsDetails
