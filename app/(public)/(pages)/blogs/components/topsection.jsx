import React from 'react'
import styles from '../../../../../styles/about/topsection.module.css'
import Link from 'next/link'
import Doctors from './../../about/componets/doctors';
import { MdHome } from "react-icons/md";


const TopSection = () => {
  return (
    <div className={styles.container}>
        <div className={styles.wrapper}>
            <div className={styles.topsection}>
                <div className={styles.title}>
                    Our Blogs
                </div>

                <div className={styles.main}>
                    <Link href='/'> 
                    <Link href='/'> 
                    <MdHome size={30}/>
                     </Link>
                     </Link>
                    <span className={styles.slash}> /</span><span className={styles.aboutus}> Blogs </span>
                </div>
            </div>
        </div>
    </div>
  )
}

export default TopSection