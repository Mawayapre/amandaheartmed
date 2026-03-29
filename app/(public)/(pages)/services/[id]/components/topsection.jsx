
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
                    Services
                </div>

                <div className={styles.main}>
                    <Link href='/'> 
                    <MdHome size={30}/>
                     </Link>
                    <span className={styles.slash}> /</span>
                    <Link href='/services'> Services </Link>
                    <span className={styles.slash}> /</span><span className={styles.aboutus}> Cardiologgy</span>
                </div>
            </div>
        </div>
    </div>
  )
}

export default TopSection