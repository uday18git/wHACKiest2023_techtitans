import Layout from '@/components/Layouts/Layout'
import SportsDetails from '@/components/Sports/SportsDetails'
import React from 'react'
import Chat from '../../components/Chat'

const SportDetailsPage = () => {
  return (
    <Layout>
      <div className="container">
        <SportsDetails />
      </div>

      <div className="fixed z-50 right-6 md:right-12 bottom-4 md:bottom-8">
        <Chat />
      </div>
    </Layout>
  )
}

export default SportDetailsPage
