'use client'
import { useState, useEffect } from 'react'
import styles from '../../../styles/testmonial.module.css'
import { FaAngleLeft, FaAngleRight } from "react-icons/fa6";
import { RiDoubleQuotesL, RiDoubleQuotesR } from "react-icons/ri";
import Image from 'next/image';

const Testimonials = () => {
    const [currentIndex, setCurrentIndex] = useState(0)

    const items = [
        {
            image: '/nurse.png',
            name: 'Lewis Nkhambule',
            comment: 'Excellent service and very friendly staff.'
        },
        {
            image: '/nurse.png',
            name: 'Precious Mawaya',
            comment: 'The doctors explained everything clearly.'
        },
        {
            image: '/nurse.png',
            name: 'Stuart Sindani',
            comment: 'Fast service and professional care.'
        },
        {
            image: '/nurse.png',
            name: 'Harry Kazembe',
            comment: 'Very clean environment and kind nurses.'
        },
        {
            image: '/nurse.png',
            name: 'Patrick Viella',
            comment: 'I felt safe and well treated throughout.'
        },
        {
            image: '/nurse.png',
            name: 'Thokozani Banda',
            comment: 'Highly recommend this hospital.'
        },
    ]

    const nextSlide = () => {
        setCurrentIndex((prev) => (prev === items.length - 1 ? 0 : prev + 1))
    }

    const prevSlide = () => {
        setCurrentIndex((prev) => (prev === 0 ? items.length - 1 : prev - 1))
    }

    useEffect(() => {
        const interval = setInterval(() => {
            nextSlide()
        }, 4000)

        return () => clearInterval(interval)
    }, [])

    return (
        <div className={styles.container}>
            <div className={styles.wrapper}>
                <div className={styles.title}>Testimonials</div>

                <div className={styles.heading}>
                    What Our Patients Say About Us
                </div>

                <div className={styles.slider}>
                    <div
                        className={styles.track}
                        style={{ transform: `translateX(-${currentIndex * 100}%)` }}
                    >
                        {items.map((item, index) => (
                            <div key={index} className={styles.slide}>
                                <div className={styles.card}>
                                    <div className={styles.image}>
                                        <Image
                                            src={item.image}
                                            alt={item.name}
                                            width={400}
                                            height={300}
                                        />
                                    </div>

                                    <div className={styles.name}>
                                        {item.name}
                                    </div>

                                    <div className={styles.comment}>
                                        <div className={styles.icon}>
                                            <RiDoubleQuotesL />
                                        </div>
                                        {item.comment}
                                        <div className={styles.icon}>
                                            <RiDoubleQuotesR />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>

                    <button className={`${styles.arrow} ${styles.left}`} onClick={prevSlide}>
                        <FaAngleLeft size={24} />
                    </button>

                    <button className={`${styles.arrow} ${styles.right}`} onClick={nextSlide}>
                        <FaAngleRight size={24} />
                    </button>
                </div>

                <div className={styles.dots}>
                    {items.map((_, index) => (
                        <button
                            key={index}
                            onClick={() => setCurrentIndex(index)}
                            className={currentIndex === index ? styles.activeDot : styles.dot}
                        />
                    ))}
                </div>
            </div>
        </div>
    )
}

export default Testimonials