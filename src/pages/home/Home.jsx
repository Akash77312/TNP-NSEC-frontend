import React from 'react'
import Course from '../course/Course'
import Features from '../../components/hero/Feature'
import Hero from '../../components/homePage/Hero'
import Registration from '../../components/homePage/RegistrationForInterview'
import NewsEvents from '../../components/homePage/NewsEvents'
import CompanySlider from '../../components/homePage/CompanySlider'
import AboutInfo from '../../components/homePage/AboutInfo'
import Director from '../../components/homePage/Director'
import Tpo from '../../components/homePage/Tpo'


const Home = () => {
  return (
    <div>
        <Hero/>
        <Registration/>
        <NewsEvents/>
        <CompanySlider/>
        <AboutInfo/>
        <Director/>
        <Tpo/>

        {/* <Features/>
        <Course/> */}
        

    </div>
  )
}

export default Home;