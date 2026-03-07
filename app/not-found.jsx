import React from 'react'
import Link from 'next/link'
import styles from '../styles/notfound.module.css'
import Image from 'next/image'

const NotFound = () => {
  return (
    <div className={styles.container}>
      <div className={styles.wrapper}>
        <div className={styles.left}>
          <div className={styles.title}>
          Oops... Page Not Found!
          </div>

          <div className={styles.heading}>
          Please return to the site's homepage, It looks like nothing was found at this location
          </div>

          <div className={styles.link}>
            <Link href='/'>
            Back To Home
            </Link>
          </div>
        </div>

        <div className={styles.right}>
        <div className={styles.image}>
          <Image
          src='/404 error with person looking for-rafiki.svg'
          alt='404'
          width={400}
          height={300}
          />
        </div>
      </div>
      </div>
    </div>
  )
}

export default NotFound