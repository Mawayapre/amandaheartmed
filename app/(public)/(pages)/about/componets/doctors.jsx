'use client'
import React from 'react'
import styles from '../../../../../styles/about/doctors.module.css'
import Image from 'next/image'
import Link from 'next/link'
import { FaArrowRight } from "react-icons/fa6";
import { IoMdStar } from "react-icons/io";
import { RiVerifiedBadgeFill } from "react-icons/ri";
import { doctors } from '../../../data/doctors'

const Doctors = () => {


  return (
    <div className={styles.container}>
        <div className={styles.title}>
            Our Doctors
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
                            <Link href={`/doctors/${doc.id}`}>Learn More
                            <FaArrowRight size={16}/>
                            </Link>
                        </div>

                        </div>
                    ))
                }
            </div>
        </div>
        
    </div>
  )
}

export default Doctors