import { Button, Card } from 'antd'
import React from 'react'

import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend,
  } from 'chart.js';
  import { Bar } from 'react-chartjs-2';
import { Link } from 'react-router-dom';
  
  ChartJS.register(
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend
  );

  const options = {
    responsive: true,
    plugins: {
      legend: {
        // position: 'top' as const,
      },
      title: {
        display: true,
        text: 'Performance in individua Fields',
      },
    },
  };
  
  const labels = ['C++','JavaScript','Python','Next JS','Php',"HTML"];
  
  const data = {
    labels,
    datasets: [
      {
        label: 'Fields',
        data: [12,23,34,12,84,40],
        backgroundColor: 'rgba(255, 99, 132, 0.5)',
      },
    //   {
    //     label: 'Dataset 2',
    //     data: [37,49,13,50,628,25],
    //     backgroundColor: 'rgba(53, 162, 235, 0.5)',
    //   },
    ],
  };

function Profile() {

    const profileCompleted = false;
    return (
        <div className='p-4 flex flex-col gap-2'>
            <div className='flex gap-2'>
                <Card className='w-[38rem] text-center'>
                    <div class="relative block">
                        <img alt="profil" src="https://randomuser.me/api/portraits/men/75.jpg" class="mx-auto object-cover rounded-full h-20 w-20 " />
                    </div>
                    <h3 className='mt-3 font-semibold text-lg text-gray-800/90'>Aashutosh Nishad</h3>
                </Card>
                <Card className='w-full'>
                    <div className='mb-6  flex justify-between'>
                        <h3 className='font-bold text-xl text-gray-800/90'>Profile Details</h3>
                        <button className='px-5 font-semibold py-1.5 rounded-lg bg-gray-600/70 border-gray-800 hover:bg-gray-600/60 text-white hover:text-white'>
                            {profileCompleted ? 'Edit': 'Update'}
                        </button>
                    </div>
                    <p className='mt-3 text-base font-medium'>Organization Name : <span className='mt-3 text-base font-medium text-gray-600'>Government Engineering College Raipur</span></p>
                    <p className='mt-3 text-base font-medium'>Field of Study : <span className='mt-3 text-base font-medium text-gray-600'>Computer Science Engineering</span></p>
                    <p className='mt-3 text-base font-medium'>Level : <span className='mt-3 text-base font-medium text-gray-600'>Intermediate</span></p>
                    <p className='mt-3 text-base font-medium'>Points : <span className='mt-3 text-base font-medium text-gray-600'>69</span></p>
                </Card>
            </div>

            <Card>
            <Bar options={options} data={data} />
            </Card>
        </div>
    )
}

export default Profile