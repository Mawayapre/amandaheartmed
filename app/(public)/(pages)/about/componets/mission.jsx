import React from 'react'
import { FaCheck } from "react-icons/fa6";
import styles from '../../../../../styles/about/mission.module.css'
import Image from 'next/image';


const Mission = () => {

    const missions = [
        { mission: "Provide expert cardiology and general medical care" },
        { mission: "Offer diagnosis using ECG and Cardiac Echo" },
        { mission: "Provide 24-hour ECG and blood pressure monitoring" },
        { mission: "Deliver advanced cardiac care and treatment" },
        { mission: "Support recovery through cardiac rehabilitation programs" },
        { mission: "Provide compassionate hospital admissions" },
        { mission: "Maintain a fully equipped laboratory" },
        { mission: "Provide medicines through our in-house pharmacy" }
      ];
  return (
    <div className={styles.container}>
        <div className={styles.wrapper}>
            <div className={styles.cards}>
                <div className={styles.left}>
                    <div className={styles.title}>
                        Our Mission
                    </div>

                    <div className={styles.heading}>
                    Our mission at Amanda HeartMed Hospital is to deliver exceptional healthcare services with compassion, integrity, and professionalism. We are dedicated to improving the health and well-being of our community by providing safe, effective, and patient-centered medical care.
                    </div>

                    <div className={styles.list}>
                        <ul>
                        {missions.map((mission, index) => (
                            <li key={index}>
                            <div className={styles.icon}>
                            <FaCheck size={15} />
                            </div>
                            {mission.mission}
                        
                        </li>
                          ))} 
                          </ul> 
                    </div>
                </div>

                <div className={styles.right}>
                    <div className={styles.image}>
                        <Image 
                        src='/mission.png'
                        alt='doctor treating kid'
                        width={400}
                        height={300}
                        />
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Mission