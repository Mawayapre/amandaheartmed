import React from 'react'
import TopSection from './componets/topsection'
import Hero from './componets/hero'
import Mission from './componets/mission'
import SetUsApart from './componets/setusapart'
import Doctors from './componets/doctors'
import Map from '../../components/map'
const Page = () => {
  return (
    <div>
        <TopSection />
        <Hero />
        <Mission />
        <SetUsApart />
        <Doctors />
        <Map />
    </div>
  )
}

export default Page