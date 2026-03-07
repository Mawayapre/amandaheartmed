import React from 'react'
import styles from '../../../../../styles/contact/hero.module.css'
import Link from 'next/link'
import { FaPhone,FaLocationDot } from "react-icons/fa6";
import { MdEmail } from "react-icons/md";



const Hero = () => {
  return (
    <div className={styles.container}>
        <div className={styles.wrapper}>
            <div className={styles.title}>
            Connect with Amanda HeartMed for Your Health and Wellness Needs
            </div>

            <div className={styles.cards}>
                <div className={styles.card}>
                    <div className={styles.icon1}>
                    <FaLocationDot />
                    </div>

                    <div className={styles.title}>
                    Where to Find Us
                    </div>
                    <p>
                    Area 12 <br /> 
                    plot 105 <br />
                    Lilongwe 
                    </p>
                </div>
                <div className={styles.card}>
                    <div className={styles.icon2}>
                    <FaPhone />
                    </div>

                    <div className={styles.title}>
                    Phone Number
                    </div>
                    <p>
                    <Link
                    href='tel:+265885583063'
                    >+265885583063
                    </Link>
                    <br />
                    <Link
                    href='tel:+265988363203'
                    >+265988363203
                    </Link>
                    </p>
                </div>
                <div className={styles.card}>
                    <div className={styles.icon3}>
                    <MdEmail />
                    </div>

                    <div className={styles.title}>
                    Email
                    </div>
                    <p>
                    <Link
                    href='mailto:amandaheartmed@gmail.com'
                    >amandaheartmed@gmail.com
                    </Link>
                    </p>
                </div>
                
            </div>
        </div>
    </div>
  )
}

export default Hero