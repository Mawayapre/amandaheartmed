import React from 'react'
import styles from '../../../../../styles/blogs/blogs.module.css'
import Link from 'next/link'
import { FaArrowRight,FaCalendarDays,FaPencilAlt } from "react-icons/fa6";
import { RiVerifiedBadgeFill } from "react-icons/ri";
import { FaUserNurse } from "react-icons/fa";
import Image from 'next/image';

const Blogs = () => {

    
    const blogs = [
        {
          title: "Understanding Modern Eye Care and Vision Health",
          doctor: "Dr. Precious Mawaya",
          specialty: "Ophthalmologist",
          date: "12 March 2026",
          content:
            "This article explores current approaches to eye care, common vision challenges, and the importance of early diagnosis in preserving long-term sight health.",
          image: "ophthalmology-eye-care.jpg"
        },
        {
          title: "Advances in Brain and Nervous System Care",
          doctor: "Dr. Stuart Sindani",
          specialty: "Neuro Surgeon",
          date: "18 March 2026",
          content:
            "An in-depth look at neurological conditions, surgical solutions, and how specialized care improves patient outcomes in brain and spinal treatments.",
          image: "neurosurgery-brain-care.jpg"
        },
        {
          title: "Caring for Children’s Health at Every Stage",
          doctor: "Dr. Harry Kazembe",
          specialty: "Pediatrician",
          date: "25 March 2026",
          content:
            "This blog focuses on child healthcare, growth milestones, disease prevention, and the role of regular checkups in a child’s development.",
          image: "pediatric-child-health.jpg"
        },
        {
          title: "Supporting Women’s Health Through Expert Care",
          doctor: "Dr. Patrick Viella",
          specialty: "Gynecologist",
          date: "30 March 2026",
          content:
            "An informative discussion on women’s reproductive health, preventive care, and the importance of professional medical guidance throughout life stages.",
          image: "gynecology-women-health.jpg"
        }
      ];



  return (
    <div className={styles.container}>
        <div className={styles.wrapper}>
            <div className={styles.title}>
                Blogs
            </div>

            <div className={styles.heading}>
                Insights into Advanced Healthcare Services
            </div>

            <div className={styles.cards}>
            {
                blogs.map((blog, index) => (
                    <div key={index} className={styles.card}>
                        <div className={styles.date}>
                            <div className={styles.icon}>
                            <FaCalendarDays />
                            </div>
                            {blog.date}
                        </div>

                        <div className={styles.image}>
                            <Image
                            src='/nurse.png'
                            alt='nurse'
                            width={400}
                            height={300}
                            />
                        </div>

                        <div className={styles.details}>
                            <div className={styles.specialty}>
                                <div className={styles.icon}>
                                < RiVerifiedBadgeFill size={18}/>
                                </div>
                                {blog.specialty}
                            </div>
                            <div className={styles.name}>
                                <div className={styles.icon}>
                                <FaUserNurse size={16}/>
                                </div>
                                {blog.doctor}
                            </div>
                        </div>

                        <div className={styles.title}>
                            {blog.title}
                        </div>

                        <div className={styles.link}>
                            <Link href='blogs/1'>Read more 
                            <FaArrowRight size={16}/>
                            </Link>
                        </div>
                    </div>
                ))
            }
            </div>
        </div>

        {/* <div className={styles.more}>
            <Link href='#'>
            View All
            <div className={styles.icon}>
            <FaArrowRight size={20} />
            </div>
            </Link>
        </div> */}
    </div>
  )
}

export default Blogs