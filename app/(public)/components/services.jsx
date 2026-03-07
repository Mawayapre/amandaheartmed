import React from 'react'
import styles from '../../../styles/services.module.css'
import MovingCards from './movingcards'

const Services = () => {
  return (
    <div className={styles.container}>
        <div className={styles.wrapper}>
            <div className={styles.title}>
            Services & Treatments
            </div>
            <div className={styles.paragraph}>
            Diverse specialty and healthcare services under one roof
            </div>
        </div>

        <MovingCards />
    </div>
  )
}

export default Services