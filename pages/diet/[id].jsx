import DietPlanDetails from '@/components/Diets/DietPlanDetails'
import Layout from '@/components/Layouts/Layout'
import React from 'react'
import Chat from '../../components/Chat'


const DietDetails = () => {
  return (
    <Layout>
      <div className="bg-gray-900">
        <div className="w-full h-[2px] bg-gray-900" />
        <div className="container mx-auto">
          <h1 className="font-bold text-white py-3 mt-5 mb-5 text-center text-6xl font-poppins">
            Diet Plan title
          </h1>
          <DietPlanDetails />
        </div>
      </div>
      <div className="fixed z-50 right-6 md:right-12 bottom-4 md:bottom-8">
        <Chat />
      </div>
    </Layout>
  )
}

export default DietDetails
