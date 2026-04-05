import React from 'react'
import styles from '../../../styles/hero.module.css'
import Image from 'next/image'
import Link from 'next/link'
import { FiPhone } from "react-icons/fi";
import { MdOutlineMonitorHeart } from "react-icons/md";
import { FaArrowRight } from "react-icons/fa6";


const Hero = () => {
  return (
    <div className={styles.wrapper}>
        <div className={styles.container}>
            <div className={styles.left}>
                <div className={styles.title}>
                    Welcome to Amanda HeartMed Hospital
                </div>

                <div className={styles.description}>
                    The hospital that cares for your life and health
                </div>


                <div className={styles.more}>
                    <div className={styles.link}>
                        <Link href='/about'>Discover More
                        <FaArrowRight size={20}/>
                        </Link>
                    </div>

                <div className={styles.call}>
                    <div className={styles.heading}>
                        FOR APPOINTMENT
                    </div>
                    <div className={styles.phonenumber}>
                        <div className={styles.icon}>
                        <FiPhone size={20} />
                        </div>
                        <Link href='tel:+265885583063'>265885583063</Link>
                    </div>

                    <div className={styles.modal}>
                        <div className={styles.icon}>
                        <MdOutlineMonitorHeart size={30} />
                        </div>
                        <div className={styles.text}>
                        More than 5K <br />
                        Patients treated!
                        </div>
                    </div>
                 </div>
                </div>
            </div>

            <div className={styles.right}>
                <div className={styles.image}>
                <Image
                src='/amandaa.png'
                alt='Amanda'
                width={400}
                height={400}
                />
                </div>
            </div>
        </div>
    </div>
  )
}

export default Hero