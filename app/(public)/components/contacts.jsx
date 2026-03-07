import React from 'react'
import styles from '../../../styles/contacts.module.css'
import { MdOutlineMail } from "react-icons/md";
import { FaWhatsapp } from "react-icons/fa6";
import { GrLocation } from "react-icons/gr";


const Contacts = () => {
  return (
    <div className={styles.contacts}>
        <div className={styles.left}>
            <div className={styles.address}>
            <div className={styles.icon}>
            <GrLocation size={20}/>
            </div>
            Area 12, plot 105, Lilongwe
            </div>
            <div className={styles.email}>
            <div className={styles.icon}>
            <MdOutlineMail size={20}/>
            </div>
            <a href="mailto:amandaheartmed@gmail.com"
            target='_blank'
            rel='noreferrer'
            >amandaheartmed@gmail.com</a>
            </div>
        </div>
        <div className={styles.right}>
            <div className={styles.icon}>
            <FaWhatsapp size={20} />
            </div>
            <a href="https://wa.me/265885583063">Connect on WhatsApp</a>
        </div>
    </div>
  )
}

export default Contacts