'use client'
import React, { useState } from 'react'
import styles from '../../../../../styles/contact/form.module.css'

const Form = () => {
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [phonenumber, setPhonenumber] = useState('')
    const [subject, setSubject] = useState('')
    const [message, setMessage] = useState('')

  return (
    <div className={styles.container}>
        <div className={styles.wrapper}>
            <div className={styles.title}>
                Get in Touch
            </div>

            <div className={styles.heading}>
            Contact Us for Personalized Assistance and Quick Resolutions
            </div>

            

            <form className={styles.form}>
            <input
            onChange={(e) => setName(e.target.value)}
            type="text" placeholder='Your Name' required />
            <input
            onChange={(e) => setEmail(e.target.value)}
            type="email" placeholder='Your Email' required />
            <input
            onChange={(e) => setPhonenumber(e.target.value)}
            type="tel" placeholder='Your Phone' required />
            <input
            onChange={(e) => setSubject(e.target.value)}
            type="text" placeholder='Subject' required />
            
            <textarea
            onChange={(e) => setMessage(e.target.value)}
            name="message" placeholder='Message'></textarea>

            <input className={styles.submit} type="submit" value="Submit" />
            </form>
        </div>
    </div>
  )
}

export default Form