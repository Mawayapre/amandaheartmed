import React from 'react'
import TopSection from './components/topsection'
import Form from './components/form';
import styles from '@/styles/appointment/calendar.module.css'

const Page = () => {
  return (
    <div className={styles.container}>
      <TopSection />
      <Form />
    </div>
  )
}

export default Page