'use client'
import React, { useState } from 'react'
import styles from '../../../../styles/faq/faq.module.css'
import { FaAngleDown, FaAngleUp } from "react-icons/fa";
import Link from 'next/link';
import TopSection from './components/topsection';

const Page = () => {
  const [openIndexes, setOpenIndexes] = useState([])

  const faqsData = [
    {
      question: "What services does Amanda HeartMed Hospital provide?",
      answer:
        "Amanda HeartMed Hospital offers comprehensive healthcare services, including cardiology, general medical care, diagnostic tests such as ECG and Cardiac Echo, 24-hour monitoring, rehabilitation programs, hospital admissions, a fully equipped laboratory, and an in-house pharmacy."
    },
    {
        question: "Does Amanda HeartMed Hospital accept MASM?",
        answer:
          "Yes, Amanda HeartMed Hospital accepts MASM (Medical Aid Society of Malawi). Coverage may vary depending on your MASM plan, so we recommend confirming details with our reception or billing office before your appointment."
    },
    {
      question: "How can I book an appointment?",
      answer:
        "You can book an appointment by calling our hospital reception, sending an email, or using our online booking system available on the Amanda HeartMed website."
    },
    {
      question: "Do you provide emergency care?",
      answer:
        "Yes, Amanda HeartMed Hospital provides emergency care for urgent medical conditions 24/7. Our dedicated team of doctors and nurses is always ready to handle medical emergencies promptly."
    },
    {
      question: "Are the hospital services covered by insurance?",
      answer:
        "Many of our services are covered by major health insurance providers. Please contact our billing department or your insurance company for specific coverage information."
    },
    {
      question: "How can I contact Amanda HeartMed Hospital for inquiries?",
      answer:
        "For any inquiries or assistance, you can reach us via email at amandaheartmed@gmail.com or call our hospital reception during working hours."
    }
  ]

  const toggleFAQ = (index) => {
    setOpenIndexes((prev) =>
      prev.includes(index)
        ? prev.filter((i) => i !== index)
        : [...prev, index]
    )
  }

  return (
    <>
    <TopSection />

    <div className={styles.heading}>
        Frequently Asked Questions
    </div>
    <div className={styles.container}>
        
      <div className={styles.faqs}>
        {faqsData.map((faq, index) => {
          const isOpen = openIndexes.includes(index)

          return (
            <div key={index} className={styles.wrapper}>
              
              <div
                className={styles.title}
                onClick={() => toggleFAQ(index)}
              >
                {faq.question}
                {isOpen ? <div className={styles.icon}> 
                <FaAngleUp size={20} />
                </div>
                : <div className={styles.icon}>
                    <FaAngleDown size={20} />
                </div>
              }
              </div>
             
              <div
                className={`${styles.answer} ${isOpen ? styles.open : styles.closed}`}
              >
                {faq.answer}
              </div>

            </div>
          )
        })}
      </div>
    </div>

    <div className={styles.emailcontainer}>
        <div className={styles.wrapper}>
            <div className={styles.text}>
            Couldn’t find what you were looking for? Write to us at
            </div>
            <div>
            <Link href='mailto:amandaheartmed@gmail.com'>amandaheartmed@gmail.com</Link>
            </div>
        </div>
    </div>
    </>
  )
}

export default Page