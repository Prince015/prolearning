import React from 'react'
import Footer from '../Footer/Footer'
import AboutUs from './AboutUs'
import HeroSection from './HeroSection'
import LearningMaterials from './LearningMaterials'
import Notice from './Notice'
import RegisterUsers from './RegisterUsers'

function Home() {
  return (
    <div>
        <section style={{height:'calc(100vh - 4rem)'}} className=' bg-gray-400'>
            <HeroSection/>
        </section>
        <section className=''>
            <AboutUs/>
        </section>
        <section className='bg-gray-400'>
            <LearningMaterials/>
        </section>
        <section className=''>
            <RegisterUsers/>
        </section>
        <section className='bg-gray-400'>
            <Notice/>
        </section>
        <section className='bg-gray-800'>
            <Footer/>
        </section>
    </div>
  )
}

export default Home