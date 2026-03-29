import React from 'react'
import Image from 'next/image'
import styles from '../../../../../../styles/services/servicedetails.module.css'
import Link from 'next/link'
import { FaArrowRight } from "react-icons/fa";
import { FaCheck } from "react-icons/fa6";

const Service = () => {

  const serviceData = [
    {
      id: 1,
      title: "Cardiology Services",
      image: "/mri.png",
  
      description: [
        "At Amanda HeartMed Hospital, our cardiology department is committed to delivering exceptional care in the prevention, diagnosis, and treatment of heart-related conditions. We combine advanced medical technology with a patient-centered approach to ensure that every individual receives personalized attention and the highest standard of care. Our goal is not only to treat heart diseases but also to improve overall cardiovascular health and quality of life for our patients.",
      
        "Our team of experienced cardiologists and healthcare professionals is highly trained in managing a wide range of cardiovascular conditions. These include hypertension (high blood pressure), coronary artery disease, heart failure, arrhythmias, and other complex heart disorders. By using accurate diagnostic methods and evidence-based treatment plans, we are able to detect problems early and provide effective solutions tailored to each patient’s unique medical needs.",
      
        "We utilize modern diagnostic equipment to perform detailed assessments of heart function and structure. These include electrocardiograms (ECG), echocardiography, and continuous monitoring techniques that allow us to track heart activity over time. This ensures timely intervention and helps prevent serious complications. Our approach focuses on both immediate treatment and long-term management of heart conditions.",
      
        "In addition to clinical treatment, we place strong emphasis on preventive cardiology. We educate our patients on the importance of healthy lifestyle choices, including proper nutrition, regular physical activity, and stress management. Through routine check-ups and screenings, we aim to identify risk factors early and guide patients toward maintaining a healthy heart for the future.",
      
        "At Amanda HeartMed Hospital, we understand that heart conditions can be life-changing. That is why we provide compassionate care, continuous support, and close monitoring throughout each patient’s journey. From initial diagnosis to recovery and long-term follow-up, our cardiology services are designed to ensure comfort, safety, and confidence in every step of the treatment process."
      ],
  
      features: [
        "Diagnosis and treatment of heart diseases",
        "Management of high blood pressure (hypertension)",
        "Heart failure care and monitoring",
        "Electrocardiogram (ECG) testing",
        "Cardiac ultrasound (Echocardiography)",
        "24-hour heart and blood pressure monitoring",
        "Chest pain evaluation and risk assessment",
        "Preventive heart health screenings",
        "Lifestyle and nutrition guidance"
      ],
    }
  ];
  return (
    <div className={styles.container}>
      <div className={styles.wrapper}>

        <div className={styles.services}>
          <div className={styles.cont}>
            <div className={styles.title}>
              OUR SERVICES
            </div>

            <ul>
              <li><Link href='#'>Cardiology Services <div className={styles.icon}><FaArrowRight /></div></Link></li>
              <li><Link href='#'>ECG & Cardiac Echo
              <div className={styles.icon}><FaArrowRight /></div>
              </Link></li>
              <li><Link href='#'>24-Hour Monitoring
              <div className={styles.icon}><FaArrowRight /></div>
              </Link></li>
              <li><Link href='#'>Laboratory Services
              <div className={styles.icon}><FaArrowRight /></div>
              </Link></li>
              <li><Link href='#'>Pharmacy Services
              <div className={styles.icon}><FaArrowRight /></div>
              </Link></li>
              <li><Link href='#'>Hospital Admission
              <div className={styles.icon}><FaArrowRight /></div>
              </Link></li>
            </ul>
          </div>


          <div className={styles.features}>

            {serviceData.map((feature, index) => (
              <div className={styles.card} key={index}>
                  <div className={styles.title}>
                    FEATURES
                  </div>
                <div className={styles.list}>
                  <ul>
                    {feature.features.map((feat, idx) => (
                      <li key={idx}>
                        <div className={styles.icon}>
                          <FaCheck  />
                        </div>
                        {feat}</li>
                    ))}
                    </ul>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className={styles.info}>
        <div className={styles.image}>
          <Image
          src='/mri.png'
          alt='mri'
          width={400}
          height={300}
          />
        </div>


        {serviceData.map((service,index) => (
          <div key={index} className={styles.details}>
            <div className={styles.title}>
              {service.title}
            </div>  
            <div className={styles.description}>
              {service.description.map((desc, idx) => (
                <p  key={idx}>{desc}</p>
              ))}
             </div>
          </div>
        ))}
        </div>
      </div>
    </div>
  )
}

export default Service