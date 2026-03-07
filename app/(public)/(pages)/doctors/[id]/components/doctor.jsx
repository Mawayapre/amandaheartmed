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

const Doctor = () => {

const doctors = [
    {
    name: "Dr. Precious Mawaya",
    specialty: "Ophthalmologist",
    image: "/nurse.png",
    experienceYears: 5,
    reviews: 156,
    phone: "+265991904128",
    email: "amandaheartmed@gmail.com",
    availability: [
    "Monday - Friday : 8:00am - 5:00pm",
    "Saturday - Sunday : 8:00am - 2:00pm"
    ],
    paragraphs: [
    "Dr. Precious Mawaya is a highly respected and compassionate medical professional at Amanda HeartMed Hospital, recognized for providing exceptional patient care and demonstrating outstanding expertise in cardiovascular and general medical treatment. With a strong educational background and extensive clinical experience, Dr. Mawaya has earned the trust of many patients through his dedication to accurate diagnosis, effective treatment, and patient-centered care.",

    "Driven by a passion for improving heart health and overall well-being, Dr. Precious Mawaya combines modern medical technology with a personalized approach to ensure every patient receives the highest standard of care. His commitment to excellence, professionalism, and compassionate service makes him a vital part of the medical team at Amanda HeartMed Hospital, where patients can rely on his expertise for quality healthcare and trusted medical guidance."
    ],
    experience:
    "Throughout his career, Dr. Precious Mawaya has dedicated significant time and expertise to cardiovascular and general medical care. He has served in important medical roles within respected healthcare institutions, where he worked closely with multidisciplinary teams to provide high-quality cardiac diagnosis, treatment, and patient care. Through his experience in clinical practice, Dr. Mawaya has contributed to improving patient outcomes and advancing compassionate healthcare services.",
    highlights: [
    "Extensive experience in cardiovascular diagnosis and treatment.",
    "Skilled in interpreting ECG, Cardiac Echo, and advanced heart monitoring systems.",
    "Dedicated to delivering patient-centered and compassionate medical care.",
    "Collaborates with multidisciplinary medical teams to improve patient outcomes."
    ]
    }
    ]

  return (
    <div className={styles.container}>
    {doctors.map((doctor,index)=>(
        <div key={index} className={styles.wrapper}>

            <div className={styles.left}>

                <div className={styles.image}>
                    <Image
                    src={doctor.image}
                    alt={doctor.name}
                    width={400}
                    height={300}
                    />
                </div>

                <div className={styles.details}>
                    <div className={styles.name}>
                        {doctor.name}
                    </div>

                    <div className={styles.links}>
                        <Link href='/#' target='_blank' rel='noreferrer'>
                        <div className={styles.icon}>
                        <FaFacebookF />
                        </div>
                        </Link>

                        <Link href='/#' target='_blank' rel='noreferrer'>
                        <div className={styles.icon}>
                        <FaWhatsapp />
                        </div>
                        </Link>
                    </div>
                </div>

                <div className={styles.specialty}>
                    <div className={styles.icon}>
                       < RiVerifiedBadgeFill size={20}/> 
                    </div>
                    {doctor.specialty}
                </div>

                <div className={styles.stats}>
                    <div className={styles.leftitem}>
                        <div className={styles.top}>
                            {doctor.experienceYears}
                            <span className={styles.plus}>+</span>
                        </div>

                        <div className={styles.bottom}>
                            Years of Experience
                        </div>
                    </div>

                    <div className={styles.right}>
                        <div className={styles.top}>
                            {doctor.reviews}
                            <span className={styles.plus}>+</span>
                        </div>

                        <div className={styles.bottom}>
                            Reviews
                        </div>
                    </div>

                </div>

                <div className={styles.available}>
                    <div className={styles.heading}>
                        Available time
                    </div>

                    {doctor.availability.map((time,i)=>(
                        <p key={i}>{time}</p>
                    ))}
                </div>

                <div className={styles.contact}>

                    <div className={styles.heading}>
                        Contact info
                    </div>

                    <div className={styles.phonenumber}>
                        <div className={styles.icon}>
                        <FaPhone />
                        </div>

                        <Link href={`tel:${doctor.phone}`}>
                        {doctor.phone}
                        </Link>
                    </div>

                    <div className={styles.email}>
                        <div className={styles.icon}>
                        <MdEmail />
                        </div>

                        <Link href={`mailto:${doctor.email}`}>
                        {doctor.email}
                        </Link>
                    </div>

                </div>

                <div className={styles.button}>
                    <button>
                        Book Appointment
                    </button>
                </div>

            </div>

            <div className={styles.right}>

                <div className={styles.title}>
                    About {doctor.name}
                </div>

                <div className={styles.paragraphs}>
                    {doctor.paragraphs.map((p,i)=>(
                        <p key={i}>{p}</p>
                    ))}
                </div>

                <div className={styles.exprience}>

                    <div className={styles.title}>
                        Work Experience
                    </div>

                    <p>
                        {doctor.experience}
                    </p>

                </div>

                <div className={styles.list}>
                    <ul>
                        {doctor.highlights.map((item,i)=>(
                            <li  key={i}> 
                            <div className={styles.icon}>
                            <FaCheck />
                            </div>
                            {item}</li>
                        ))}
                    </ul>
                </div>

            </div>

        </div>
    ))}
    </div>
  )
}

export default Doctor