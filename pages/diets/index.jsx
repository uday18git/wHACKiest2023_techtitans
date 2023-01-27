import DietListCard from '@/components/Cards/DietListCard'
import Layout from '@/components/Layouts/Layout'
import React from 'react'

const DietsPage = () => {
  return (
    <Layout>
      <div className='bg-gray-100'>

      <div className="container min-h-screen ">
        <div className='flex items-center flex-col gap-2 mt-4 mb-5'>
        <h1 className='font-bold text-4xl text-gray-900 text-center'>Top Diet Picks for you</h1>
{/* <div className='bg-gray-900 h-[1.5px] w-[300px] ' /> */}
        </div>

<div className='flex flex-col gap-4'> 
    {[1,2,3,4,5].map((item,i)=>(
      <div key={i} className='max-w-[1000px] mx-auto '>
<DietListCard/>
        </div>
    ))}
</div>

<div className='flex items-center gap-3 justify-center mt-5'>
  {[1,2,3,4,5].map((item,i)=>(
    <div className='text-black hover:bg-black hover:text-white p-2 px-4 border-black border-2 rounded-full'>
      {item}
    </div>
  ))}
</div>

      </div>
    </div>
    </Layout>
  )
}

export default DietsPage