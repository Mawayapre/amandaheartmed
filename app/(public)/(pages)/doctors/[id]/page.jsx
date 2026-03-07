import React from 'react'
import Doctor from './components/doctor'
import TopSection from './components/topsection'
import Doctors from '../../about/componets/doctors'

const Page = () => {
  return (
    <div>
        <TopSection />
        <Doctor />
        <Doctors />

    </div>
  )
}

export default Page