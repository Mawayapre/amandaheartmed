import React from 'react'
import styles from '../../../styles/footer.module.css'
import Link from 'next/link'
import { MdOutlineMail } from "react-icons/md";
import { FaWhatsapp } from "react-icons/fa6";
import { GrLocation } from "react-icons/gr";import { FaXTwitter } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa";
import { FiFacebook } from "react-icons/fi";
import { FiPhone } from "react-icons/fi";


const Footer = () => {
  return (
    <div className={styles.container}>

        <div className={styles.appointment}>
        <p> Get Appointment For Your <br /> Medical Services </p>
        <Link href='/#'>Book Appointment</Link>
        </div>
        <div className={styles.wrapper}>
          <div className={styles.section1}>
            <div className={styles.title}>
              Amanda HeartMed Hospital
            </div>

            <div className={styles.heading}>
            The hospital that cares for your life and health
            </div>

            <div className={styles.socialLinks}>
              <div className={styles.facebook}>
                <Link href='/#'>
                <FiFacebook />
                </Link>
              </div>

              <div className={styles.twitter}>
                <Link href='/#'>
                <FaXTwitter />
                </Link>
              </div>

              <div className={styles.instagram}>
                <Link href='/#'>
                <FaInstagram />
                </Link>
              </div>
            </div>
          </div>

          <div className={styles.section2}>
            <div className={styles.title}>
              MENU
            </div>

            <div className={styles.links}>
              <ul>
                <li>
                  <Link href='/'>Home</Link>
                </li>
                <li>
                  <Link href='/about'>About</Link>
                </li>
                <li>
                  <Link href='/contact'>Contact</Link>
                </li>
                <li>
                  <Link href='/doctors'>Doctors</Link>
                </li>
                <li>
                  <Link href='/services'>Services</Link>
                </li>                
                <li>
                  <Link href='/blogs'>Blogs</Link>
                </li>
                <li>
                  <Link href='/faqs'>FAQs</Link>
                </li>
              </ul>
            </div>
          </div>
          <div className={styles.section3}>
            <div className={styles.title}>
              VISITING HOURS
            </div>

            <p>Morning: 6:30 AM - 7:30 AM</p>
            <p>Afternoon: 12:00 PM - 1:00 PM</p>
            <p>Evening: 5:30 PM - 7:30 PM</p>
          </div>
          <div className={styles.section4}>
            <div className={styles.title}>
              CONTACT US
            </div>
            <div className={styles.links}>
            <div className={styles.email}>
            <div className={styles.icon}>
            <MdOutlineMail size={20}/>
            </div>
            <a href="mailto:amandaheartmed@gmail.com">amandaheartmed@gmail.com</a>
            </div>
            <div className={styles.whatsapp}>
            <div className={styles.icon}>
            <FaWhatsapp size={20} />
            </div>
            <a href="https://wa.me/265885583063"
            target='_blank'
            rel='noreferrer'
            >Connect on WhatsApp</a>
            </div>

            <div className={styles.phonenumber}>
            <div className={styles.icon}>
            <FiPhone size={20} />
            </div>
            <Link href='tel:+265885583063'>265885583063</Link>
            </div>
            <div className={styles.address}>
            <div className={styles.icon}>
            <GrLocation size={20}/>
            </div>
            Area 12, plot 105, Lilongwe
            </div>
            </div>
          </div>
        </div>
        <div className={styles.signature}>
          &copy; { new Date().getFullYear() } Amanda Hospital | Designed and Powered By Mawaya 
        </div>
    </div>
  )
}

export default Footer