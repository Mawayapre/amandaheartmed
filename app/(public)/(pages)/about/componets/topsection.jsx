import React from 'react'
import styles from '../../../../../styles/about/topsection.module.css'
import Link from 'next/link'

const TopSection = () => {
  return (
    <div className={styles.container}>
        <div className={styles.wrapper}>
            <div className={styles.topsection}>
                <div className={styles.title}>
                    About Us
                </div>

                <div className={styles.main}>
                    <Link href='/'> Home </Link>
                   <span className={styles.slash}> /</span> <span className={styles.aboutus}> About Us</span>
                </div>
            </div>
        </div>
    </div>
  )
}

export default TopSection