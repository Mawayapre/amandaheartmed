import React from 'react';
import styles from '../../../../../styles/about/setusapart.module.css';
import Image from 'next/image';

const WhatSetsUsApart = () => {

    const features = [
        { 
            title: "Trusted Medical Care", 
            description: "Amanda HeartMed Hospital is committed to providing reliable, compassionate, and professional healthcare services that patients and families can trust." 
        },
        { 
            title: "Experienced Specialists", 
            description: "Our team of cardiologists, doctors, and healthcare professionals bring extensive experience and expertise in heart health and general medical care." 
        },
        { 
            title: "Advanced Diagnostic Technology", 
            description: "We use modern diagnostic equipment including ECG and Cardiac Echo to provide accurate diagnosis and effective treatment plans." 
        },
        { 
            title: "24/7 Heart Monitoring", 
            description: "Our continuous ECG and blood pressure monitoring services help ensure patients receive immediate attention when heart-related issues arise." 
        },
        { 
            title: "MASM Accepted", 
            description: "Amanda HeartMed Hospital accepts MASM (Medical Aid Society of Malawi), making quality healthcare more accessible to insured patients." 
        },
        { 
            title: "Comprehensive Patient Services", 
            description: "From consultations and laboratory testing to pharmacy services and hospital admissions, we provide complete healthcare support under one roof." 
        }
    ];

    return (
        <div className={styles.container}>
            <div className={styles.wrapper}>
                <div className={styles.title}>
                    What Sets Us Apart
                </div>

                <div className={styles.cards}>

                    <div className={styles.left}>
                        <div className={styles.image}>
                            <Image 
                                src='/mri.png'
                                alt='Amanda HeartMed medical staff'
                                width={400}
                                height={300}
                                className={styles.img}
                            />
                        </div>
                    </div>

                    <div className={styles.right}>
                        {features.map((item, index) => (
                            <div key={index} className={styles.feature}>
                                <h3 className={styles.title}>{item.title}</h3>
                                <p className={styles.description}>{item.description}</p>
                            </div>
                        ))}
                    </div>

                </div>
            </div>
        </div>
    );
}

export default WhatSetsUsApart;