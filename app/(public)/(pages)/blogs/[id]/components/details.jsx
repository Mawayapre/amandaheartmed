import React from 'react'
import styles from '../../../../../../styles/blogs/details.module.css'
import Image from 'next/image'
import { FaArrowRight,FaCalendarDays,FaPencilAlt } from "react-icons/fa6";
import { RiVerifiedBadgeFill } from "react-icons/ri";
import { FaUserNurse } from "react-icons/fa";

const Details = () => {

const blogs = [
{
image: "/nurse.png",
title: "Understanding Modern Eye Care and Vision Health",
date: "March 5, 2026",
specialty: "Ophthalmology",
author: "Dr. Precious Mawaya",
paragraph1: `Vision plays a critical role in everyday life, yet many people overlook the importance of proper eye care until they begin experiencing noticeable vision problems. Modern eye care has evolved significantly over the years, allowing doctors to detect, treat, and even prevent many vision-related conditions before they become serious. Today, ophthalmologists use advanced diagnostic tools and treatment methods to help patients maintain healthy eyesight and protect their vision for the future.`,
paragraph2: `One of the most important aspects of modern eye care is regular eye examinations. These checkups allow doctors to evaluate overall eye health and detect conditions such as glaucoma, cataracts, macular degeneration, and diabetic eye disease in their early stages. Early detection is essential because many eye conditions develop slowly and may not present obvious symptoms until significant damage has already occurred. Lifestyle habits also have a major influence on eye health. Spending long hours looking at digital screens can cause eye strain, dryness, and blurred vision. Eye care specialists often recommend simple practices such as taking regular breaks from screens, adjusting lighting conditions, and ensuring proper screen distance. Nutrition also plays a vital role, with vitamins such as A, C, and E supporting long-term eye health.`,
paragraph3: `Another important component of modern ophthalmology is patient education. Doctors work closely with patients to help them understand how their daily routines affect their vision. By learning how to recognize early warning signs and adopting healthy habits, individuals can significantly reduce their risk of developing serious eye problems. Ultimately, maintaining good vision requires a combination of professional care, healthy lifestyle choices, and regular medical checkups. With continued advancements in medical technology and increased awareness of preventive care, modern eye care continues to improve the quality of life for millions of people around the world.`
}
]

  return (
    <div className={styles.container}>
      {blogs.map((blog, index) => (
        <div key={index} className={styles.wrapper}>

            <div className={styles.image}>
                <Image
                src={blog.image}
                alt={blog.title}
                width={400}
                height={300}
                />
            </div>

            <div className={styles.details}>

                <div className={styles.date}>
                    <div className={styles.icon}>
                        <FaCalendarDays />
                    </div>
                    {blog.date}
                </div>

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
                    {blog.author}
                </div>

            </div>

            <div className={styles.blog}>
                <div className={styles.title}>
                    {blog.title}
                </div>
                <div className={styles.paragraph}>
                    <p>{blog.paragraph1}</p>
                    <p>{blog.paragraph2}</p>
                    <p>{blog.paragraph3}</p>
                </div>
            </div>

        </div>
      ))}
    </div>
  )
}

export default Details