import React from 'react'

const TransparentBtn = ({ text, classes }) => {
  return (
    <button
      className={`px-4 hover:scale-110 transition-all ease-in-out duration-200 py-2 text-lg tracking-wider font-semibold border-2 border-solid bg-transparent ${
        classes
          ? classes
          : 'border-white  text-white hover:border-gray-900 hover:text-gray-900'
      }  `}
    >
      {text}
    </button>
  )
}

export default TransparentBtn
