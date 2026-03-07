import React from 'react'
import styles from '../../../styles/map.module.css'

const Map = () => {
  return (
    <div className={styles.container}>
        <div className={styles.title}>
        Get Directions to Our Hospital
        </div>
    
    <div className={styles.mapWrapper}>
    <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3872.123296398641!2d33.81137227418413!3d-13.951263480277424!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x19202d0037b6667d%3A0x25a4a4181021dfdc!2sAmanda%20HeartMed%20Hospital!5e0!3m2!1sen!2smw!4v1772812550898!5m2!1sen!2smw"
        allowFullScreen
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
    ></iframe>
    </div>
    </div>
  )
}

export default Map