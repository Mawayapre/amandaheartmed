'use client'
import { useRef, useState, useEffect } from 'react'
import styles from '../../../styles/testmonial.module.css'
import { FaAngleLeft, FaAngleRight } from "react-icons/fa6";
import { RiDoubleQuotesL, RiDoubleQuotesR } from "react-icons/ri";
import Image from 'next/image';


const ITEM_WIDTH = 600; 

const Testimonials = () => {
    const containerRef = useRef(null)
    const [currentPosition, setCurrentPosition] = useState(0)

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

    const handleScroll = (scrollAmount) => {
        if (!containerRef.current) return

        const container = containerRef.current
        let newPosition = currentPosition + scrollAmount

        if (newPosition >= container.scrollWidth - container.clientWidth) {
            newPosition = 0
        }

        setCurrentPosition(newPosition)

        container.scrollTo({
            left: newPosition,
            behavior: 'smooth',
        })
    }

    useEffect(() => {
        const interval = setInterval(() => {
            handleScroll(ITEM_WIDTH)
        }, 4000)

        return () => clearInterval(interval)
    }, [currentPosition])

    return (
        <div className={styles.container}>
            <div className={styles.wrapper}>
                <div className={styles.title}>Testimonials</div>

                <div className={styles.heading}>
                    What Our Patients Say About Us
                </div>

                <div ref={containerRef} className={styles.cards}>
                    {items.map((item, index) => (
                        <div key={index} className={styles.card}>

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
                    ))}
                </div>

                <div className={styles.buttons}>
                <button onClick={() => handleScroll(-ITEM_WIDTH)}><FaAngleLeft size={24} /></button>
                <button onClick={() => handleScroll(ITEM_WIDTH)}><FaAngleRight size={24} /></button>
                </div>
            </div>
        </div>
    )
}

export default Testimonials