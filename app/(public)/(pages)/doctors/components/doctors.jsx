'use client'
import React from 'react'
import styles from '../../../../../styles/doctor/doctors.module.css'
import Image from 'next/image'
import Link from 'next/link'
import { FaArrowRight } from "react-icons/fa6";
import { IoMdStar } from "react-icons/io";
import { RiVerifiedBadgeFill } from "react-icons/ri";

const Doctors = () => {

   const doctors = [
    {
        name: 'Dr. Precious Mawaya',
        specialty: 'Opthalmologist',
        icon: 'IoIosStarOutline  size={16}',
        image: '/nurse.png',
        reviews: '156 reviews'
    },
    {
        name: 'Dr. Patrick Viella',
        specialty: 'Neuro Surgeon',
        image: '/nurse.png',
        reviews: '156 reviews'
    }
    ,
    {
        name: 'Dr. Harry Kazembe',
        specialty: 'Pediatrician',
        image: '/nurse.png',
        reviews: '129 reviews'
    }
    ,
    {
        name: 'Dr. Stuart Sindani',
        specialty: 'Gynecologist',
        image: '/nurse.png',
        reviews: '140 reviews'
    }
   ] 


  return (
    <div className={styles.container}>
        <div className={styles.title}>
            Doctors
        </div>
        <div className={styles.wrapper}>
            <div className={styles.cards}>
                {
                    doctors.map((doc, index) => (
                        <div key={index} className={styles.card}>
                        <div className={styles.image}>
                            <Image
                            src={doc.image}
                            alt='doctor treating kid'
                            width={400}
                            height={300}
                            />
                        </div>
                        <div className={styles.specialty}>
                            <div className={styles.icon}>
                                < RiVerifiedBadgeFill size={20}/>
                            </div>
                            {doc.specialty}
                        </div>

                        <div className={styles.name}>
                            {doc.name}
                        </div>

                        <div className={styles.rating}>
                            <div className={styles.icon}>
                                < IoMdStar size={20} />
                            </div>
                            4.8 ({doc.reviews})
                        </div>

                        <div className={styles.link}>
                            <Link href='/doctors/1'>Learn More
                            <FaArrowRight size={16}/>
                            </Link>
                        </div>

                        </div>
                    ))
                }
            </div>
        </div>


        <div className={styles.availability}>
        <div className={styles.title}>
            Doctor Availability
        </div>

        <Link href='/#'>
            View Doctors' Schedule
        </Link>
        </div>
        
    </div>
  )
}

export default Doctors