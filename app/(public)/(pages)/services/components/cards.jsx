import React from 'react'
import Link from 'next/link';
import styles from '../../../../../styles/services/cards.module.css'
import { FaHeartbeat, FaStethoscope, FaUserMd, FaHospital, FaArrowRight } from "react-icons/fa";
import { MdMonitorHeart } from "react-icons/md";
import { GiMedicines } from "react-icons/gi";
import { TbTestPipe } from "react-icons/tb";
import { RiMentalHealthLine } from "react-icons/ri";

const Services = () => {

    const services = [
        {
          title: "Cardiology Services",
          icon: FaHeartbeat,
          description: "Our cardiology department provides comprehensive care for patients with heart-related conditions..."
        },
        {
          title: "ECG & Cardiac Echo",
          icon: MdMonitorHeart,
          description: "We offer advanced ECG and cardiac echo services to monitor heart activity..."
        },
        {
          title: "24-Hour Monitoring",
          icon: FaStethoscope,
          description: "Our 24-hour monitoring services allow continuous tracking of heart activity..."
        },
        {
          title: "Laboratory Services",
          icon: TbTestPipe,
          description: "Our fully equipped laboratory provides a wide range of diagnostic tests..."
        },
        {
          title: "Pharmacy Services",
          icon: GiMedicines,
          description: "Our in-house pharmacy ensures quick and convenient access to medications..."
        },
        {
          title: "Hospital Admission",
          icon: FaHospital,
          description: "We provide comfortable and well-organized hospital admission services..."
        },
        {
          title: "Rehabilitation Programs",
          icon: RiMentalHealthLine,
          description: "Our rehabilitation programs support recovery after illness or surgery..."
        },
        {
          title: "General Medical Care",
          icon: FaUserMd,
          description: "We offer a wide range of general medical services for individuals and families..."
        }
      ];


  return (
    <div className={styles.container}>
        <div className={styles.title}>
        Our Medical Services
        </div>

        <div className={styles.heading}>
        We offer a wide range of medical services designed to provide quality care, accurate diagnosis, and effective treatment for every patient.
        </div>

        <div className={styles.cards}>
            {services.map((service, index) => (
                <div key={index} className={styles.card}>
                    <div className={styles.title}>
                       <div className={styles.icon}>
                         {<service.icon size={24} />}
                        </div> 
                        {service.title}
                    </div>

                    <div className={styles.description}>
                        {service.description}
                    </div>

                    <div className={styles.more}>
                        <Link href='#'>Learn More 
                        <FaArrowRight size={14}/>
                        </Link>
                    </div>
                </div>
            ))}
        </div>

    </div>
  )
}

export default Services