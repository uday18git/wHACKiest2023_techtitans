import Link from 'next/link'
import React from 'react'
import TransparentBtn from './TransparentBtn'

const Sport = () => {
  return (
    <div className="flex flex-col bg-white shadow-md transition-all ease-in-out hover:scale-105 rounded-lg relative">
      <img
        src="/images/football.jpg"
        className="max-h-[200px]  object-cover brightness-50 contrast-125 rounded-lg"
        alt=""
      />
      <div>
        <h3 className="font-semibold text-gray-700 px-4 py-2">live in 3hrs</h3>
      </div>
      <div className='absolute bottom-14 right-4'>
        <Link href={'/sports/1234'}>
<TransparentBtn text={'Join'} classes={'hover:text-white text-white border-white'} />
        </Link>
      </div>
    </div>
  )
}

export default Sport