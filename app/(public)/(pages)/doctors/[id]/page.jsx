import React from 'react'
import Doctor from './components/doctor'
import TopSection from './components/topsection'
import Doctors from '../../about/componets/doctors'
import { doctors, getDoctorById } from '../../../data/doctors'

const Page = async ({ params }) => {
  const { id } = await params
  const doctor = getDoctorById(id)

  return (
    <div>
        <TopSection doctor={doctor} />
        <Doctor doctor={doctor} />
        <Doctors />

    </div>
  )
}

export function generateStaticParams() {
  return doctors.map((doctor) => ({ id: doctor.id }))
}

export default Page