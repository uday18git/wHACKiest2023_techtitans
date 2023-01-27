import React from 'react'
import TransparentBtn from './TransparentBtn'

const WhatYouGetCard = ({index}) => {
  return (
    <div className="w-full max-w-[900px] mx-auto px-4 py-3">
      {index % 2 == 0 ? (
        <div className="flex items-center gap-4 ">
          <img
            src="/images/happygroup.jpg"
            alt=""
            className="max-w-[400px] rounded-lg"
          />
          <div className="flex flex-col gap-3 flex-1">
            <h2 className="font-semibold text-2xl text-gray-400">
              Get Suggestions on whats best for you
            </h2>
            <p className="text-white text-md">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. At
              veritatis obcaecati beatae corrupti voluptates quis nobis alias.
              Beatae, ut distinctio!
            </p>
            <TransparentBtn
              text={'Try Now'}
              classes={'text-blue-700 max-w-[200px] mr-auto'}
            />
          </div>
        </div>
      ) : (
        <div className="flex items-center gap-3">
          <div className="flex flex-col gap-3 ">
            <h2 className="font-semibold text-2xl text-gray-400">
              Get Suggestions on whats best for you
            </h2>
            <p className="text-white text-md">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. At
              veritatis obcaecati beatae corrupti voluptates quis nobis alias.
              Beatae, ut distinctio!
            </p>
            <TransparentBtn
              text={'Try Now'}
              classes={'text-blue-700 max-w-[200px] mr-auto'}
            />
          </div>
          <img
            src="/images/happygroup.jpg"
            alt=""
            className="max-w-[400px] rounded-lg"
          />
        </div>
      )}
    </div>
  )
}

export default WhatYouGetCard