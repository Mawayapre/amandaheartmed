import React from 'react'
import styles from '../../../styles/movingdivs.module.css'
import { FaCapsules } from "react-icons/fa6";
import { FaStethoscope } from "react-icons/fa";
import { GiHeartOrgan } from "react-icons/gi";
import { GiMicroscope } from "react-icons/gi";
import { FaArrowRight } from "react-icons/fa6";
import Link from 'next/link';



const MovingCards = () => {
  return (
    <>
    <div className={styles.container}>
      <div className={styles.cards}>
            <div className={styles.card}>
            <div className={styles.icon}>
            <GiHeartOrgan size={30}/>
            </div>
            <div className={styles.text}>
            ECG & Cardiac ECHO  
            </div>
            <div className={styles.link}>
            <Link href='/services/service'>Learn More 
            <FaArrowRight size={14}/>
            </Link>
            </div>
            </div>
            <div className={styles.card}>
            <div className={styles.icon}>
            <FaStethoscope size={24}/>
            </div>
            <div className={styles.text}>
            Advanced Cardiac Care  
            </div>
            <div className={styles.link}>
            <Link href='/services/service'>Learn More 
            <FaArrowRight size={14}/>
            </Link>
            </div>
            </div>
            <div className={styles.card}>
            <div className={styles.icon}>
            <GiMicroscope size={30}/>
            </div>
            <div className={styles.text}>
            Fully Equipped Laboratory  
            </div>
            <div className={styles.link}>
            <Link href='/services/service'>Learn More 
            <FaArrowRight size={14}/>
            </Link>
            </div>
            </div>
            <div className={styles.card}>
            <div className={styles.icon}>
            <FaCapsules size={30}/>
            </div>
            <div className={styles.text}>
            In-house Pharmacy  
            </div>
            <div className={styles.link}>
            <Link href='/services/service'>Learn More 
            <FaArrowRight size={14}/>
            </Link>
            </div>
            </div>
         
            
            <div className={styles.card}>
            <div className={styles.icon}>
            <GiHeartOrgan size={30}/>
            </div>
            <div className={styles.text}>
            ECG & Cardiac ECHO  
            </div>
            <div className={styles.link}>
            <Link href='/services/service'>Learn More 
            <FaArrowRight size={14}/>
            </Link>
            </div>
            </div>
            <div className={styles.card}>
            <div className={styles.icon}>
            <FaStethoscope size={24}/>
            </div>
            <div className={styles.text}>
            Advanced Cardiac Care  
            </div>
            <div className={styles.link}>
            <Link href='/services/service'>Learn More 
            <FaArrowRight size={14}/>
            </Link>
            </div>
            </div>
            <div className={styles.card}>
            <div className={styles.icon}>
            <GiMicroscope size={30}/>
            </div>
            <div className={styles.text}>
            Fully Equipped Laboratory  
            </div>
            <div className={styles.link}>
            <Link href='/services/service'>Learn More 
            <FaArrowRight size={14}/>
            </Link>
            </div>
            </div>
            <div className={styles.card}>
            <div className={styles.icon}>
            <FaCapsules size={30}/>
            </div>
            <div className={styles.text}>
            In-house Pharmacy  
            </div>
            <div className={styles.link}>
            <Link href='/services/service'>Learn More 
            <FaArrowRight size={14}/>
            </Link>
            </div>
            </div>
      </div>

      
    </div>
    <div className={styles.button}>
    <button className={styles.btn}>See All Services 
    <FaArrowRight size={16}/>
    </button>
  </div>
  </>
  )
}

export default MovingCards