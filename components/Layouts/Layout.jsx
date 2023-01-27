import React, { useState } from 'react'
import { BsSearch } from 'react-icons/bs'
import Footer from '../Footer/Footer'
import Navbar from '../Navbar/Navbar'

const Layout = ({children}) => {

const [openSearch, setOpenSearch] = useState(false)


  return (
    <div className="w-full relative font-giras flex flex-col justify-between">
      <Navbar setOpenSearch={setOpenSearch} openSearch={openSearch} />
      {children}
      <Footer />
      {openSearch && (
        <div className="z-[99] right-20 absolute top-20 rounded-md min-w-[500px] px-4 border-[1px] bg-gray-100  flex md:hidden border-gray-800 items-center">
          <input
            type="text"
            className="w-full  py-3 px-3  outline-none bg-gray-100"
            placeholder="search for events , diets and more"
          />

          <BsSearch className="text-xl cursor-pointer" />
        </div>
      )}
    </div>
  )
}

export default Layout