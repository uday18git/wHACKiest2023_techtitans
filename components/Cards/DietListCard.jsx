import { Avatar } from '@mui/material'
import { Box } from '@mui/system'
import Link from 'next/link'
import React from 'react'
import MainBtn from './MainBtn'

const DietListCard = () => {
  return (
    <div className="bg-white shadow-md flex flex-col md:flex-row items-center gap-2 space-x-4 justify-center w-full px-5 rounded-lg py-2">
      <img
        src="/images/diet1.jpg"
        alt=""
        className="max-w-[300px] max-h-[200px]"
      />
      <div className="flex flex-col gap-3">
        <h2 className="font-semibold text-2xl text-gray-900">
          Zero to Hero Men Special
        </h2>
        <Box className="flex mt-3 items-center space-x-3">
          <Avatar
            alt="Gordon Ramsay"
            src="https://www.google.com/search?q=gordon+ramsay&sxsrf=AJOqlzWiF8_Hyl8T5_ORxjA-tlbSqAXU3w:1674882338035&source=lnms&tbm=isch&sa=X&ved=2ahUKEwiF_LH2vun8AhUXyaACHdkiD2QQ_AUoAXoECAIQAw&biw=1536&bih=732&dpr=1.25#imgrc=Ud4Vi9ecnWAPqM"
          />
          <Box>
            <h4 className="text-sm">Chef Gordon</h4>
          </Box>
        </Box>
        <h3 className="text-lg text-gray-800">Duration : 3months</h3>
        <h4 className="text-lg text-gray-800">price : $9</h4>
        <Link href={'/diet/123'}>
          <MainBtn text={'Explore'} classes={'w-full'} />
        </Link>
      </div>
    </div>
  )
}

export default DietListCard