import React from 'react'
import styles from '../../../../../styles/about/hero.module.css'
import Link from 'next/link'
import Image from 'next/image'

const Hero = () => {
  return (
    <div className={styles.container}>
        <div className={styles.wrapper}>
            <div className={styles.text}>
            <div className={styles.title}>
             Stay Healthy With 100% Treatment
            </div>

            <div className={styles.paragraph}>
            At Amanda HeartMed Hospital, we are committed to delivering high-quality and compassionate healthcare through modern medical technology and a team of experienced professionals. Our mission is to ensure that every patient receives safe, effective, and personalized treatment in a supportive and caring environment.
            </div>
            </div>

            <div className={styles.image}>
                <Image
                src='/aboutTopSection.png'
                alt='Amanda HeartMed Hospital'
                width={400}
                height={300}
                />
            </div>

            <div className={styles.stats}>
                <div className={styles.left}>
                    <div className={styles.top}>
                        05 <span className={styles.plus}>+</span>
                    </div>
                    <div className={styles.bottom}>
                        Years of Experience
                    </div>
                </div>
                <div className={styles.middle}>
                    <div className={styles.top}>
                        5k <span className={styles.plus}>+</span>
                    </div>
                    <div className={styles.bottom}>
                        Patients Served
                    </div>
                </div>
                <div className={styles.right}>
                    <div className={styles.top}>
                        24 <span className={styles.slash}>/</span>
                        7
                    </div>
                    <div className={styles.bottom}>
                        Working Hours
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Hero