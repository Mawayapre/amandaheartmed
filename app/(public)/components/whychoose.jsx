'use client'
import React from 'react'
import styles from '../../../styles/whychoose.module.css'
import { FaCheck } from "react-icons/fa6";
import { FaArrowRight } from "react-icons/fa6";
import Link from 'next/link'

const WhyChooseUs = () => {

  const list = [
    {
      item : 'Safety First  Quality Medical Care'
    },
    {
      item : 'We Accept MASM (Medical Aid Society of Malawi)'
    },
    {
      item : 'Patient-Centric Approach'
    },
    {
      item : 'Experienced and Focused Medical Leadership'
    },
    {
      item : 'Modern Diagnostic Technology'
    },
    {
      item : 'Transparent and Affordable Pricing'
    },
    {
      item : 'Coordinated and Comprehensive Care'
    }
  ]
  
  return (
    <div className={styles.container}>
        <div className={styles.wrapper}>
          <div className={styles.left}>
            <div className={styles.title}>
              Why Choose Us?
            </div>

            <div className={styles.list}>
              <ul>
                {list.map((item, index) => (
                  <li key={index}>
                  <div className={styles.icon}>
                  <FaCheck size={15} />
                  </div>
                  {item.item}
                </li>
                ))} 
              </ul>
            </div>
          </div>

          <div className={styles.right}>
            <div className={styles.heading}>
              Amanda HeartMed Hospital is dedicated to delivering the highest quality treatment and patient care.
            </div>

            <div className={styles.para}>
              At Amanda HeartMed Hospital, we focus on providing professional, compassionate, and reliable healthcare services. 
              Our experienced medical team uses modern diagnostic tools and a patient-centered approach to ensure every 
              patient receives the best possible treatment and medical support.
            </div>

            <div className={styles.link}>
            <Link href='#'>
              Book Appointment <FaArrowRight size={16}/>
            </Link>
            </div>

          </div>
        </div>
    </div>
  )
}

export default WhyChooseUs