import Layout from '@/components/Layouts/Layout'
import React from 'react'
import { Pie } from 'react-chartjs-2'
import { Progress } from '@chakra-ui/react'
import dynamic from 'next/dynamic'
import { styled } from '@mui/material/styles'

import { TiTick } from 'react-icons/ti'
import VerifiedIcon from '@mui/icons-material/Verified'
import { GiStrongMan } from 'react-icons/gi'
// import PieChart from '@/components/Charts/PieChart'
import CircularProgress, {
  circularProgressClasses,
} from '@mui/material/CircularProgress'
import LinearProgress, {
  linearProgressClasses,
} from '@mui/material/LinearProgress'

const BorderLinearProgress = styled(LinearProgress)(({ theme }) => ({
  height: 10,
  borderRadius: 5,
  [`&.${linearProgressClasses.colorPrimary}`]: {
    backgroundColor:
      theme.palette.grey[theme.palette.mode === 'light' ? 200 : 800],
  },
  [`& .${linearProgressClasses.bar}`]: {
    borderRadius: 5,
    backgroundColor: theme.palette.mode === 'light' ? '#1a90ff' : '#308fe8',
  },
}))

const badgeData = [
  {
    Icon: GiStrongMan,
    title: 'Experience',
    short: '5+ years',
  },
  {
    Icon: GiStrongMan,
    title: 'Experience',
    short: '5+ years',
  },
  {
    Icon: GiStrongMan,
    title: 'Experience',
    short: '5+ years',
  },
  {
    Icon: GiStrongMan,
    title: 'Experience',
    short: '5+ years',
  },
]

export const data = {
  labels: ['Red', 'Blue', 'Yellow', 'Green', 'Purple', 'Orange'],
  datasets: [
    {
      label: '# of Votes',
      data: [12, 19, 3, 5, 2, 3],
      backgroundColor: [
        'rgba(255, 99, 132, 0.2)',
        'rgba(54, 162, 235, 0.2)',
        'rgba(255, 206, 86, 0.2)',
        'rgba(75, 192, 192, 0.2)',
        'rgba(153, 102, 255, 0.2)',
        'rgba(255, 159, 64, 0.2)',
      ],
      borderColor: [
        'rgba(255, 99, 132, 1)',
        'rgba(54, 162, 235, 1)',
        'rgba(255, 206, 86, 1)',
        'rgba(75, 192, 192, 1)',
        'rgba(153, 102, 255, 1)',
        'rgba(255, 159, 64, 1)',
      ],
      borderWidth: 1,
    },
  ],
};

const options = {
  responsive: true,
  maintainAspectRatio: false,
}

const Profile = () => {
  return (
    <Layout>
      <div className="bg-gray-50">
        <div className="min-h-screen  container">
          <div className="bg-white shadow-md px-5 py-3 flex flex-col">
            <div className="flex gap-3 items-center ">
              <img
                src="https://cdn.siasat.com/wp-content/uploads/2021/03/srk.jpg"
                className="w-[200px] h-[150px] rounded-md"
                alt=""
              />

              <div className="flex flex-col gap-3">
                <div className="flex items-center gap-2">
                  <h3 className="font-semibold text-gray-900 text-xl">
                    Shahrukh Khan
                  </h3>
                  <VerifiedIcon
                    className="bg-gren-700 text-green-600"
                    color="green"
                  />
                </div>

                <p className="text-md text-gray-800">
                  Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quam
                  doloribus deserunt consequuntur facere unde, eum, eius impedit
                  ea accusamus sunt voluptas assumenda minima reprehenderit
                  officia inventore iure error accusantium ratione.
                </p>
              </div>
            </div>

            <div className="bg-black h-[2px] w-full mt-4" />
            <div className="w-full bg-gray-50 flex justify-between">
              {badgeData.map((item, i) => (
                <div className="flex gap-3 py-2 px-3">
                  <div className="flex gap-3  items-center mx-auto">
                    <item.Icon className="text-2xl" />
                    <div>
                      <h4 className="text-red-600 font-semibold text-lg">
                        {item.title}
                      </h4>
                      <p className="text-gray-800 text-md">{item.short}</p>
                    </div>
                  </div>
                  {i < 3 && <div className="h-full w-[2px] bg-gray-900" />}
                </div>
              ))}
            </div>

            <div>
              <div className="flex flex-col mt-10 gap-3">
                <h2 className="font-bold text-4xl mt-3 mb-3 text-gray-900">
                  Progress
                </h2>
                <div className="flex flex-col gap-1 ">
                  <h4>progress 1</h4>
                  <BorderLinearProgress
                    variant="determinate"
                    value={50}
                    color="primary"
                  />
                </div>
                <div className="flex flex-col gap-1">
                  <h4>progress 2</h4>
                  <BorderLinearProgress
                    variant="determinate"
                    value={90}
                    color="secondary"
                  />
                </div>
                <div className="flex flex-col gap-1">
                  <h4>progress 3</h4>
                  <BorderLinearProgress
                    variant="determinate"
                    value={40}
                    color="success"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  )
}

export default dynamic(() => Promise.resolve(Profile), {
  ssr: false,
})