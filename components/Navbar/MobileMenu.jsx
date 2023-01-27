import Link from 'next/link'
import React, { useState } from 'react'
import { IoMdArrowDropdown } from 'react-icons/io'
import { motion } from 'framer-motion'

const MobileMenu = ({ data }) => {
  const [showSub, setSub] = useState(false)

  return (
    <motion.div
      initial={{ x: 0, y: -20, opacity: 0 }}
      animate={{ x: 0, y: 0, opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="bg-orange-800 w-full text-left space-y-1 flex flex-col z-[9999] items-start"
    >
      {data.map(({ title, link, submenu }, i) => (
        <div
          key={i}
          className=" hover:bg-white hover:text-orange-800 text-white w-full px-4 py-2 "
        >
          {link ? (
            <Link href={link || '/'} className="flex  items-center space-x-1">
              <h2 className="font-medium    text-lg ">{title}</h2>
              {submenu && <IoMdArrowDropdown />}
            </Link>
          ) : (
            <div
              onClick={() => setSub(true)}
              className="flex w-full items-center space-x-1"
            >
              <h2 className="font-medium    text-lg ">{title}</h2>
              {submenu && <IoMdArrowDropdown />}
            </div>
          )}
          {true && (
            <div className="bg-white flex absolute w-full max-w-[100px] justify-center text-center items-center left-2 z-[9999] shadow-md flex-col space-y-1 text-black font-semibold text-lg ">
              {submenu?.map((item) => (
                <div
                  key={i}
                  className=" w-full z-[99999]  px-4 py-2 cursor-pointer hover:bg-orange-800 hover:text-white transition-all ease-in-out"
                >
                  <Link href={item.link}>
                    <h3>{item.title}</h3>
                  </Link>
                </div>
              ))}
            </div>
          )}
        </div>
      ))}
    </motion.div>
  )
}

export default MobileMenu
