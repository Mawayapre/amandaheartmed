import React from 'react'
import styles from '../../../../../styles/services/servicedetails.module.css'
import TopSection from './components/topsection';
import Service from './components/service';

const Page = ({ params }) => {
  return (
    <div className={styles.container}>
        <TopSection params={params} />
        <Service params={params} />
    </div>
  )
}

export default Page