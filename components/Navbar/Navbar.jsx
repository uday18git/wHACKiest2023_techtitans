import { navData } from '@/utils/dummyData'
import Link from 'next/link'
import React, { useState } from 'react'
import { IoMdArrowDropdown } from 'react-icons/io'
import MainBtn from '../Cards/MainBtn'
import { FiMenu } from 'react-icons/fi'
import MobileMenu from './MobileMenu'
import {BsSearch} from 'react-icons/bs'

const Navbar = () => {
  const [mobileMenu, setMobileMenu] = useState(false)
  const [open, setOpen] = useState(false)

  return (
    <div className="w-full min-w-[100%] bg-white shadow-md">
      {/* {open && <Booking open={open} setOpen={setOpen} />} */}
      {/* links  */}
      <div className="flex items-center justify-between  container w-full">
        {/* <div
          onClick={() => {
            setMobileMenu(!mobileMenu)
          }}
          className="!max-w-screen   md:hidden border-2  border-gray-300 hover:text-white hover:bg-orange-800 px-2 py-1 cursor-pointer"
        >
          <FiMenu className="text-2xl" />
          {mobileMenu && (
            <div className="flex absolute w-full top-[3.3rem] left-0">
              <MobileMenu data={navData} />
            </div>
          )}
        </div> */}

        {/* lgoo  */}
        <div>
          <h1 className="font-extrabold text-4xl">Logo</h1>
          {/* <img
            src="/images/logo_dark_background.png"
            className="w-[300px] h-[60px] object-contain"
            alt=""
          /> */}
        </div>

        {/* <div className="hidden md:flex items-center space-x-6 relative">
          {navData.map(({ title, link, submenu }, i) => (
            <div key={i} className="group">
              <Link href={link || '/'} className="flex  items-center space-x-1">
                <h2 className="font-medium hover:text-orange-800  text-lg text-gray-800">
                  {title}
                </h2>
                {submenu && <IoMdArrowDropdown />}
              </Link>
              {submenu && (
                <div className="bg-white group-hover:flex absolute w-full max-w-[100px] justify-center text-center items-center top-8 z-[9999] shadow-md hidden flex-col space-y-1 text-black font-semibold text-lg ">
                  {submenu.map((item) => (
                    <div
                      key={i}
                      className=" w-full  px-4 py-2 cursor-pointer hover:bg-orange-800 hover:text-white transition-all ease-in-out"
                    >
                      <h3>{item.title}</h3>
                    </div>
                  ))}
                </div>
              )}
            </div>
          ))}
        </div> */}

        <div className="  rounded-md min-w-[500px] px-4 border-[1px] bg-gray-100 hidden md:flex border-gray-800 items-center">
          <input
            type="text"
            className="w-full  py-3 px-3  outline-none bg-gray-100"
            placeholder="search for events , diets and more"
          />

          <BsSearch className="text-xl cursor-pointer" />
        </div>

        <BsSearch className="text-xl cursor-pointer md:hidden" />

        {/* buttons  */}
        {/* <div onClick={() => setOpen(!open)}> */}
        <MainBtn text={'Help & Support'} />
        {/* </div> */}
      </div>
    </div>
  )
}

export default Navbar
