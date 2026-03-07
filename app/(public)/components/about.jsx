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
                    src='/nurse.png'
                    alt='doctor treating kid'
                    width={400}
                    height={300}
                    />
                </div>
                <div className={styles.details}>
                    <div className={styles.heading}>
                        For your child health
                    </div>
                    <div className={styles.profe}>
                        Pediatrician
                    </div>

                    <div className={styles.link}>
                    <Link href='#'>Discover More
                    <FaArrowRight size={20}/>
                    </Link>
                    </div>
                    </div>
                </div> 
                <div className={styles.card}>
                <div className={styles.image}>
                    <Image
                    src='/nurse.png'
                    alt='doctor treating kid'
                    width={400}
                    height={300}
                    />
                </div>
                <div className={styles.details}>
                    <div className={styles.heading}>
                        For your child health
                    </div>
                    <div className={styles.profe}>
                        Pediatrician
                    </div>

                    <div className={styles.link}>
                    <Link href='#'>Discover More
                    <FaArrowRight size={20}/>
                    </Link>
                    </div>
                    </div>
                </div> 
                <div className={styles.card}>
                <div className={styles.image}>
                    <Image
                    src='/nurse.png'
                    alt='doctor treating kid'
                    width={400}
                    height={300}
                    />
                </div>
                <div className={styles.details}>
                    <div className={styles.heading}>
                        For your child health
                    </div>
                    <div className={styles.profe}>
                        Pediatrician
                    </div>

                    <div className={styles.link}>
                    <Link href='#'>Discover More
                    <FaArrowRight size={20}/>
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