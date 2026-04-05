import React from 'react'
import styles from '../../../../../../styles/about/topsection.module.css'
import Link from 'next/link'
import { MdHome } from "react-icons/md";


const TopSection = ({ id }) => {

const blogTitles = [
  "Understanding Modern Eye Care and Vision Health",
  "Advances in Brain and Nervous System Care",
  "Caring for Children's Health at Every Stage",
  "Supporting Women's Health Through Expert Care"
];

const title = blogTitles[id] || blogTitles[0];

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
                    <span className={styles.aboutus}> {title} </span>
                </div>
            </div>
        </div>
    </div>
  )
}

export default TopSection