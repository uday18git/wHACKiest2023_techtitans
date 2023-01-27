import React from 'react'

const MainBtn = ({ text }) => {
  return (
    <button className="px-5 py-2 bg-orange-800 transition-all ease-in-out duration-100 hover:scale-110 hover:bg-transparent hover:border-orange-800 hover:border-2 hover:text-orange-800 text-white font-semibold">
      {text}
    </button>
  )
}

export default MainBtn
