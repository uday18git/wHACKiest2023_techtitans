import React from 'react'

const MainBtn = ({ text }) => {
  return (
    <button className="px-5 py-2 bg-gray-900 transition-all ease-in-out duration-100 hover:scale-110 hover:bg-transparent hover:border-gray-900 hover:border-2 hover:text-gray-900 text-white font-semibold">
      {text}
    </button>
  )
}

export default MainBtn
