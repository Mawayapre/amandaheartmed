import React from 'react'
import styles from '../../../../../../styles/doctor/doctor.module.css'
import { FaFacebookF } from "react-icons/fa";
import { FaWhatsapp } from "react-icons/fa6";
import { FaPhone } from "react-icons/fa6";
import { MdEmail } from "react-icons/md";
import { FaCheck } from "react-icons/fa";
import { RiVerifiedBadgeFill } from "react-icons/ri";
import Image from 'next/image'
import Link from 'next/link';

const Doctor = ({ doctor }) => {
  if (!doctor) {
    return <div>Doctor not found</div>
  }

  const doc = doctor

  return (
    <div className={styles.container}>
      <div className={styles.wrapper}>
        <div className={styles.left}>
          <div className={styles.image}>
            <Image src={doc.image} alt={doc.name} width={400} height={300} />
          </div>

          <div className={styles.details}>
            <div className={styles.name}>{doc.name}</div>

            <div className={styles.links}>
              <a href='https://facebook.com/AmandaHeartMed' target='_blank' rel='noreferrer'>
                <div className={styles.icon}>
                  <FaFacebookF />
                </div>
              </a>

              <a href={`https://wa.me/${doc.phone.replace(/\D/g, '')}`} target='_blank' rel='noreferrer'>
                <div className={styles.icon}>
                  <FaWhatsapp />
                </div>
              </a>
            </div>
          </div>

          <div className={styles.specialty}>
            <div className={styles.icon}>
              <RiVerifiedBadgeFill size={20} />
            </div>
            {doc.specialty}
          </div>

          <div className={styles.stats}>
            <div className={styles.leftitem}>
              <div className={styles.top}>
                {doc.experienceYears}
                <span className={styles.plus}>+</span>
              </div>

              <div className={styles.bottom}>Years of Experience</div>
            </div>

            <div className={styles.right}>
              <div className={styles.top}>
                {doc.reviews}
                <span className={styles.plus}>+</span>
              </div>

              <div className={styles.bottom}>Reviews</div>
            </div>
          </div>

          <div className={styles.available}>
            <div className={styles.heading}>Available time</div>
            {doc.availability.map((time, i) => (
              <p key={i}>{time}</p>
            ))}
          </div>

          <div className={styles.contact}>
            <div className={styles.heading}>Contact info</div>

            <div className={styles.phonenumber}>
              <div className={styles.icon}>
                <FaPhone />
              </div>
              <Link href={`tel:${doc.phone}`}>{doc.phone}</Link>
            </div>

            <div className={styles.email}>
              <div className={styles.icon}>
                <MdEmail />
              </div>
              <Link href={`mailto:${doc.email}`}>{doc.email}</Link>
            </div>
          </div>

          <div className={styles.button}>
            <button>Book Appointment</button>
          </div>
        </div>

        <div className={styles.right}>
          <div className={styles.title}>About {doc.name}</div>

          <div className={styles.paragraphs}>
            {doc.paragraphs.map((p, i) => (
              <p key={i}>{p}</p>
            ))}
          </div>

          <div className={styles.exprience}>
            <div className={styles.title}>Work Experience</div>
            <p>{doc.experience}</p>
          </div>

          <div className={styles.list}>
            <ul>
              {doc.highlights.map((item, i) => (
                <li key={i}>
                  <div className={styles.icon}>
                    <FaCheck />
                  </div>
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Doctor