
import React from 'react'
import styles from '../../../../../../styles/about/topsection.module.css'
import Link from 'next/link'
import { MdHome } from "react-icons/md";


const TopSection = ({ params }) => {

  const serviceNames = {
    'cardiology': 'Cardiology Services',
    'pediatrician': 'Pediatrician & Child Health',
    'ecg-cardiac': 'ECG & Cardiac Echo',
    '24-hour-monitoring': '24-Hour Monitoring',
    'laboratory': 'Laboratory Services',
    'pharmacy': 'Pharmacy Services',
    'women-health': "Women's Health Services",
    'mental-health': 'Mental Health & Rehabilitation'
  };

  const serviceId = params?.id || 'cardiology';
  const serviceName = serviceNames[serviceId] || 'Services';

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
                    <span className={styles.slash}> /</span><span className={styles.aboutus}> {serviceName}</span>
                </div>
            </div>
        </div>
    </div>
  )
}

export default TopSection