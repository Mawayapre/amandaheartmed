import React from 'react'
import styles from '../../../styles/home.module.css'
import Hero from '../components/hero'
import About from '../components/about'
import Services from '../components/services'
import WhyChooseUs from '../components/whychoose'
import Doctors from '../components/doctors'
import Blogs from '../components/blogs'
import Testimonials from '../components/testimonials'
import Map from '../components/map'

const Page = () => {
  return (
    <div className={styles.container}>
      <Hero />
      <About />
      <Services />
      <WhyChooseUs />
      <Doctors />
      <Testimonials />  
      <Blogs />
      <Map />
    </div>
  )
}

export default Page