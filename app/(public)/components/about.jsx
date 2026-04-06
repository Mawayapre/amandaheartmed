import React from 'react'
import styles from '../../../styles/about.module.css'
import Image from 'next/image'
import Link from 'next/link'
import { FaArrowRight } from "react-icons/fa6";

const About = () => {
  return (
    <div className={styles.container}>
      <div className={styles.wrapper}>
        <div className={styles.texts}>
          <div className={styles.heading}>
            Amanda HeartMed Hospital <br /> Dedicated to Providing the Best Care.
          </div>

          <div className={styles.paragraph}>
            At Amanda HeartMed Hospital, we are committed to delivering high-quality, compassionate healthcare using modern medical technology and experienced professionals. Our goal is to ensure every patient receives safe, effective, and personalized treatment in a caring environment.
          </div>
        </div>

        <div className={styles.cards}>
          <div className={styles.card}>
            <div className={styles.image}>
              <Image
                src='/Gemini_Generated_Image_oodmlnoodmlnoodm.png'
                alt='general healthcare service'
                width={400}
                height={300}
              />
            </div>
            <div className={styles.details}>
              <div className={styles.heading}>
                Comprehensive Patient Care
              </div>
              <div className={styles.profe}>
                General Medicine
              </div>

              <div className={styles.link}>
                <Link href='/about'>
                  Discover More
                  <FaArrowRight size={20} />
                </Link>
              </div>
            </div>
          </div>

          <div className={styles.card}>
            <div className={styles.image}>
              <Image
                src='/AdvancedHeartCareServices.png'
                alt='cardiology healthcare service'
                width={400}
                height={300}
              />
            </div>
            <div className={styles.details}>
              <div className={styles.heading}>
                Advanced Heart Care Services
              </div>
              <div className={styles.profe}>
                Cardiology
              </div>

              <div className={styles.link}>
                <Link href='/about'>
                  Discover More
                  <FaArrowRight size={20} />
                </Link>
              </div>
            </div>
          </div>

          <div className={styles.card}>
            <div className={styles.image}>
              <Image
                src='/nurse.png'
                alt='medical monitoring service'
                width={400}
                height={300}
              />
            </div>
            <div className={styles.details}>
              <div className={styles.heading}>
                24-Hour Health Monitoring
              </div>
              <div className={styles.profe}>
                Diagnostics & Observation
              </div>

              <div className={styles.link}>
                <Link href='/about'>
                  Discover More
                  <FaArrowRight size={20} />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default About