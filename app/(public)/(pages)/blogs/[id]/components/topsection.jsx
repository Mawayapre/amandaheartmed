import React from 'react'
import styles from '../../../../../../styles/about/topsection.module.css'
import Link from 'next/link'
import { MdHome } from "react-icons/md";


const TopSection = () => {
  return (
    <div className={styles.container}>
        <div className={styles.wrapper}>
            <div className={styles.topsection}>
                <div className={styles.title}>
                    Blog Details
                </div>

                <div className={styles.main}>
                    <Link href='/'> <MdHome /> </Link>
                    <span className={styles.slash}> /</span>
                    <Link href='/blogs'> Blogs </Link>
                    <span className={styles.slash}> /</span>
                    <span className={styles.aboutus}> Understanding Modern Eye Care and Vision Health </span>
                </div>
            </div>
        </div>
    </div>
  )
}

export default TopSection