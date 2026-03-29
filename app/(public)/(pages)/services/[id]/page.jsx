import React from 'react'
import styles from '../../../../../styles/services/servicedetails.module.css'
import TopSection from './components/topsection';
import Service from './components/service';

const Page = () => {
  return (
    <div className={styles.container}>
        <TopSection />
        <Service />
    </div>
  )
}

export default Page