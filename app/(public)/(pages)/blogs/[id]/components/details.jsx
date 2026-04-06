import React from 'react'
import styles from '../../../../../../styles/blogs/details.module.css'
import Image from 'next/image'
import { FaArrowRight,FaCalendarDays,FaPencilAlt } from "react-icons/fa6";
import { RiVerifiedBadgeFill } from "react-icons/ri";
import { FaUserNurse } from "react-icons/fa";

const Details = ({ id }) => {

const blogsData = [
{
image: "https://images.unsplash.com/photo-1582750433449-648ed127bb54?w=500&h=300&fit=crop&auto=format&q=80",
title: "Understanding Modern Eye Care and Vision Health",
date: "12 March 2026",
specialty: "Ophthalmology",
author: "Dr. Precious Mawaya",
paragraph1: `Vision plays a critical role in everyday life, yet many people overlook the importance of proper eye care until they begin experiencing noticeable vision problems. Modern eye care has evolved significantly over the years, allowing doctors to detect, treat, and even prevent many vision-related conditions before they become serious. Today, ophthalmologists use advanced diagnostic tools and treatment methods to help patients maintain healthy eyesight and protect their vision for the future.`,
paragraph2: `One of the most important aspects of modern eye care is regular eye examinations. These checkups allow doctors to evaluate overall eye health and detect conditions such as glaucoma, cataracts, macular degeneration, and diabetic eye disease in their early stages. Early detection is essential because many eye conditions develop slowly and may not present obvious symptoms until significant damage has already occurred. Lifestyle habits also have a major influence on eye health. Spending long hours looking at digital screens can cause eye strain, dryness, and blurred vision. Eye care specialists often recommend simple practices such as taking regular breaks from screens, adjusting lighting conditions, and ensuring proper screen distance. Nutrition also plays a vital role, with vitamins such as A, C, and E supporting long-term eye health.`,
paragraph3: `Another important component of modern ophthalmology is patient education. Doctors work closely with patients to help them understand how their daily routines affect their vision. By learning how to recognize early warning signs and adopting healthy habits, individuals can significantly reduce their risk of developing serious eye problems. Ultimately, maintaining good vision requires a combination of professional care, healthy lifestyle choices, and regular medical checkups. With continued advancements in medical technology and increased awareness of preventive care, modern eye care continues to improve the quality of life for millions of people around the world.`
},
{
image: "https://images.unsplash.com/photo-1582750433449-648ed127bb54?w=500&h=300&fit=crop&auto=format&q=80",
title: "Advances in Brain and Nervous System Care",
date: "18 March 2026",
specialty: "Neurosurgery",
author: "Dr. Stuart Sindani",
paragraph1: `The nervous system is one of the most complex and vital systems in the human body, controlling everything from basic functions like breathing and heartbeat to complex cognitive processes. Advances in neurosurgery and neurocare have revolutionized the treatment of brain and spinal conditions that were once considered inoperable. Modern surgical techniques, imaging technologies, and diagnostic tools have dramatically improved patient outcomes and quality of life.`,
paragraph2: `Neurological conditions can range from chronic pain and movement disorders to tumors and traumatic injuries. Neurosurgeons use state-of-the-art techniques including minimally invasive procedures, image-guided surgery, and intraoperative monitoring to address these conditions with precision and safety. The development of new medications, rehabilitation therapies, and neuromodulation devices has expanded treatment options beyond traditional surgery, offering patients more hope and recovery potential.`,
paragraph3: `The future of neurosurgery looks promising with ongoing research into regenerative medicine, neural implants, and personalized treatment approaches. As technology continues to advance, neurosurgeons are better equipped to tackle conditions that previously had limited treatment options. Patient education and early intervention remain crucial in achieving the best possible outcomes for individuals with neurological conditions.`
},
{
image: "https://images.unsplash.com/photo-1582750433449-648ed127bb54?w=500&h=300&fit=crop&auto=format&q=80",
title: "Caring for Children's Health at Every Stage",
date: "25 March 2026",
specialty: "Pediatrics",
author: "Dr. Harry Kazembe",
paragraph1: `Pediatric care is unique in that it addresses the health needs of individuals at different stages of growth and development. From newborns through adolescents, children require specialized attention and care tailored to their specific developmental stage. Pediatricians play a vital role in monitoring growth, development, vaccinations, and early detection of health conditions that could impact a child's future wellbeing.`,
paragraph2: `Prevention is a cornerstone of pediatric medicine. Regular checkups, age-appropriate vaccines, and health screenings help identify and prevent many common childhood illnesses and conditions. Nutrition, physical activity, mental health, and emotional development are all critical components of comprehensive pediatric care. Building healthy habits early in life sets the foundation for lifelong wellness and disease prevention.`,
paragraph3: `Parents and caregivers play an essential role in supporting their child's health and development. Pediatricians work collaboratively with families to provide education, guidance, and support throughout childhood. As children grow and transition into adulthood, pediatricians help prepare them for independence while addressing any lingering health concerns. The goal is to ensure every child reaches their full potential with optimal health and wellbeing.`
},
{
image: "https://images.unsplash.com/photo-1582750433449-648ed127bb54?w=500&h=300&fit=crop&auto=format&q=80",
title: "Supporting Women's Health Through Expert Care",
date: "30 March 2026",
specialty: "Gynecology",
author: "Dr. Patrick Viella",
paragraph1: `Women's health encompasses a wide range of medical specialties and concerns unique to women at different life stages. From adolescence through menopause and beyond, women face specific health challenges that require expert, compassionate care. Gynecologists and women's health specialists are trained to address reproductive health, hormonal balance, preventive care, and screening for conditions that primarily affect women.`,
paragraph2: `Preventive care is essential for women's long-term health and wellbeing. Regular screening for breast cancer, cervical cancer, and other conditions can detect problems early when treatment is most effective. Hormonal health management, fertility support, and pregnancy care are critical services that help women achieve their health goals. Open communication between patients and healthcare providers ensures that treatment plans are personalized and address individual concerns.`,
paragraph3: `Women's health extends beyond physical medicine to include mental health, sexual health, and overall wellness. Healthcare providers today recognize the importance of treating the whole person and supporting women through life transitions. A comprehensive approach to women's health that includes regular checkups, education, and preventive measures ensures optimal health outcomes and improved quality of life.`
}
]

const blogs = blogsData[id] ? [blogsData[id]] : [blogsData[0]]

  return (
    <div className={styles.container}>
      {blogs.map((blog, index) => (
        <div key={index} className={styles.wrapper}>

            <div className={styles.image}>
                <Image
                src={blog.image}
                alt={blog.title}
                fill
                style={{ objectFit: 'cover' }}
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