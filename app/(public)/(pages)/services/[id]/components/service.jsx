import React from 'react'
import Image from 'next/image'
import styles from '../../../../../../styles/services/servicedetails.module.css'
import Link from 'next/link'
import { FaArrowRight } from "react-icons/fa";
import { FaCheck } from "react-icons/fa6";

const Service = ({ params }) => {

  const serviceData = {
    cardiology: {
      id: 'cardiology',
      title: "Cardiology Services",
      image: "/nurse.png",
      description: [
        "At Amanda Hospital, our cardiology department is committed to delivering exceptional care in the prevention, diagnosis, and treatment of heart-related conditions. We combine advanced medical technology with a patient-centered approach to ensure that every individual receives personalized attention and the highest standard of care. Our goal is not only to treat heart diseases but also to improve overall cardiovascular health and quality of life for our patients.",

        "Our team of experienced cardiologists and healthcare professionals is highly trained in managing a wide range of cardiovascular conditions. These include hypertension (high blood pressure), coronary artery disease, heart failure, arrhythmias, and other complex heart disorders. By using accurate diagnostic methods and evidence-based treatment plans, we are able to detect problems early and provide effective solutions tailored to each patient's unique medical needs.",

        "We utilize modern diagnostic equipment to perform detailed assessments of heart function and structure. These include electrocardiograms (ECG), echocardiography, and continuous monitoring techniques that allow us to track heart activity over time. This ensures timely intervention and helps prevent serious complications. Our approach focuses on both immediate treatment and long-term management of heart conditions.",

        "In addition to clinical treatment, we place strong emphasis on preventive cardiology. We educate our patients on the importance of healthy lifestyle choices, including proper nutrition, regular physical activity, and stress management. Through routine check-ups and screenings, we aim to identify risk factors early and guide patients toward maintaining a healthy heart for the future.",

        "At Amanda Hospital, we understand that heart conditions can be life-changing. That is why we provide compassionate care, continuous support, and close monitoring throughout each patient's journey. From initial diagnosis to recovery and long-term follow-up, our cardiology services are designed to ensure comfort, safety, and confidence in every step of the treatment process."
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
    },
    'pediatrician': {
      id: 'pediatrician',
      title: "Pediatrician & Child Health Care",
      image: "/nurse.png",
      description: [
        "At Amanda Hospital, our pediatric department is dedicated to providing comprehensive healthcare services for infants, children, and adolescents. We understand that children have unique medical needs and require specialized care from healthcare professionals trained in pediatric medicine. Our team of experienced pediatricians and child health specialists is committed to ensuring the healthy growth and development of every child in our community.",

        "Our pediatric services cover a wide range of health concerns from routine check-ups and vaccinations to the diagnosis and treatment of acute and chronic illnesses. We provide preventive care that focuses on maintaining good health, early detection of developmental issues, and guidance for parents on nutrition, safety, and child development. Every visit is designed to be reassuring and comfortable for both the child and their parents.",

        "We offer specialized care for common childhood conditions including respiratory infections, ear infections, gastrointestinal disorders, allergies, asthma, and skin conditions. Our pediatricians are trained to communicate with children effectively and provide treatments that are suitable for their age and developmental stage. We work closely with parents to develop treatment plans that minimize discomfort and promote quick recovery.",

        "Beyond treating illness, we emphasize preventive healthcare and health education. We conduct regular growth and developmental assessments, administer recommended vaccinations, and provide counseling on nutrition, physical activity, and mental health. We also screen for developmental delays and behavioral concerns to ensure early intervention when needed.",

        "At Amanda Hospital, we believe in creating a child-friendly environment where children feel safe and supported during their medical care. Our staff is trained to work with children of all ages, from newborns to teenagers, and we offer compassionate care that addresses both the medical and emotional needs of our young patients and their families."
      ],
      features: [
        "Routine check-ups and vaccinations",
        "Newborn and infant care",
        "Developmental screening and assessments",
        "Acute illness treatment and management",
        "Chronic disease management",
        "Allergy and asthma care",
        "Nutritional counseling and guidance",
        "Behavioral and mental health support",
        "Emergency pediatric care available 24/7"
      ],
    },
    'women-health': {
      id: 'women-health',
      title: "Women's Health Services",
      image: "/nurse.png",
      description: [
        "At Amanda Hospital, our women's health department provides comprehensive healthcare services designed specifically to address the unique medical needs of women at every stage of life. From adolescence through menopause and beyond, our experienced team of healthcare professionals is dedicated to promoting women's wellness, preventing disease, and treating conditions that affect women's health.",

        "We provide comprehensive gynecological care including annual health assessments, contraceptive counseling, and treatment of gynecological conditions. Our team specializes in managing menstrual disorders, endometriosis, and other reproductive health issues. We also offer preventive screenings such as cervical cancer screening and breast health evaluations to ensure early detection of any concerns.",

        "Maternity care is one of our core services, offering prenatal, delivery, and postpartum care in a supportive and nurturing environment. Our experienced obstetricians and nursing staff provide personalized care throughout pregnancy and childbirth. We offer childbirth education classes, pain management options, and support for new mothers during the postpartum period.",

        "We also address health concerns related to menopause and aging, including hormone therapy counseling, bone health assessment, and management of menopausal symptoms. Our team understands the physical and emotional challenges women face during this transition and provides compassionate, evidence-based care.",

        "At Amanda Hospital, we are committed to empowering women with knowledge and support to make informed decisions about their health. We provide a safe, respectful environment where women can discuss their health concerns openly and receive compassionate, high-quality care from healthcare professionals who understand their unique needs."
      ],
      features: [
        "Annual health assessments and screenings",
        "Gynecological examinations and care",
        "Contraception counseling and services",
        "Menstrual disorder management",
        "Prenatal and pregnancy care",
        "Delivery and postpartum services",
        "Breast health evaluations",
        "Cervical and cancer screenings",
        "Menopause and hormone therapy management"
      ],
    },
    'mental-health': {
      id: 'mental-health',
      title: "Mental Health & Rehabilitation Programs",
      image: "/nurse.png",
      description: [
        "At Amanda Hospital, our mental health department is dedicated to providing compassionate, evidence-based care for individuals struggling with mental health conditions and those in need of rehabilitation services. We understand that mental health is integral to overall wellness, and our team of psychiatrists, psychologists, and counselors are committed to helping patients achieve recovery and improve their quality of life.",

        "We offer comprehensive mental health services for a wide range of conditions including depression, anxiety disorders, bipolar disorder, schizophrenia, and substance use disorders. Our clinical team uses the latest therapeutic approaches including cognitive-behavioral therapy (CBT), individual counseling, group therapy, and medication management to provide personalized treatment plans tailored to each patient's unique needs.",

        "Our rehabilitation programs are designed to support patients recovering from serious illness, surgery, or traumatic events. These structured programs combine physical therapy, occupational therapy, and psychological support to help patients regain independence and confidence. We also offer specialized rehabilitation services for patients recovering from stroke, cardiac events, orthopedic surgery, and other medical conditions.",

        "We recognize that mental health treatment is often more effective when family members are involved. Therefore, we offer family counseling and psychoeducation to help families understand mental health conditions and support their loved ones through the recovery process. We also provide crisis intervention and emergency mental health services available 24/7.",

        "At Amanda Hospital, we are committed to breaking the stigma surrounding mental health and creating a supportive environment where individuals feel safe seeking help. Our treatment approach is holistic, evidence-based, and focused on empowering patients to take control of their mental health and achieve lasting recovery."
      ],
      features: [
        "Psychiatric evaluation and diagnosis",
        "Individual psychotherapy and counseling",
        "Group therapy and support programs",
        "Medication management and psychiatric care",
        "Cognitive-behavioral therapy (CBT)",
        "Substance abuse and addiction treatment",
        "Crisis intervention services",
        "Physical and occupational rehabilitation",
        "Family counseling and psychoeducation"
      ],
    },
    'ecg-cardiac': {
      id: 'ecg-cardiac',
      title: "ECG & Cardiac Echo Services",
      image: "/nurse.png",
      description: [
        "At Amanda Hospital, our ECG and cardiac echo services provide advanced diagnostic capabilities for assessing heart function and identifying cardiac abnormalities. These non-invasive tests are essential tools in modern cardiology, allowing our cardiologists to diagnose heart conditions accurately and monitor patient progress effectively.",

        "Electrocardiography (ECG) is a simple, painless test that records the electrical activity of the heart, providing valuable information about heart rhythm, the presence of previous heart attacks, and other cardiac conditions. Our state-of-the-art ECG equipment allows for accurate recordings that help our physicians detect arrhythmias, ischemia, and structural abnormalities of the heart.",

        "Echocardiography (cardiac ultrasound) uses sound waves to create real-time images of the heart's structure and function. This non-invasive test allows cardiologists to assess how well the heart chambers are contracting, check the function of heart valves, and detect any structural abnormalities. Echocardiography is particularly valuable for diagnosing heart failure, valve disease, and congenital heart conditions.",

        "Both ECG and echocardiography services are performed by highly trained technicians and interpreted by experienced cardiologists. These tests are quick, safe, and provide critical information that guides treatment decisions and helps prevent serious cardiac complications.",

        "At Amanda Hospital, we use these diagnostic tools as part of a comprehensive cardiac evaluation to ensure accurate diagnosis and effective treatment. Whether for screening purposes or to evaluate existing symptoms, our ECG and cardiac echo services play an important role in maintaining and improving cardiovascular health for our patients."
      ],
      features: [
        "12-lead electrocardiogram (ECG) recording",
        "Rhythm strip analysis",
        "Holter monitor recording and analysis",
        "Transthoracic echocardiography",
        "Doppler studies",
        "Stress echocardiography",
        "Real-time cardiac imaging",
        "Valve assessment and function",
        "Rapid results and professional interpretation"
      ],
    },
    '24-hour-monitoring': {
      id: '24-hour-monitoring',
      title: "24-Hour Cardiac Monitoring",
      image: "/nurse.png",
      description: [
        "At Amanda Hospital, our 24-hour cardiac monitoring services provide continuous surveillance of heart activity, allowing our cardiologists to detect irregular heartbeats, monitor medication effectiveness, and assess overall cardiac health in patients' daily lives. This extended monitoring provides valuable information that a single ECG cannot capture.",

        "Our Holter monitors and event recorders allow patients to wear portable devices that continuously record their heart's electrical activity during their normal daily activities. This extended monitoring period increases the likelihood of capturing arrhythmias and other cardiac events that may be intermittent or occur during specific activities or times of day.",

        "The data collected during 24-hour monitoring is carefully analyzed by our experienced cardiologists to identify any abnormal rhythms or concerning patterns. This information helps guide treatment decisions, assess the effectiveness of medications, and determine if patients require additional interventions such as pacemakers or other devices.",

        "We also offer event monitors for patients who require longer monitoring periods, allowing them to record their heart rhythm when they experience symptoms. This targeted approach captures symptom-specific cardiac events and provides crucial diagnostic information.",

        "At Amanda Hospital, our 24-hour monitoring services are an important part of our comprehensive cardiac care program. By continuously monitoring heart activity, we can detect problems early, prevent serious complications, and ensure that our patients receive timely and appropriate treatment to maintain optimal cardiovascular health."
      ],
      features: [
        "Continuous 24-hour Holter monitoring",
        "Event monitor recording",
        "Extended monitoring periods available",
        "Real-time symptom correlation",
        "Arrhythmia detection and documentation",
        "Medication effectiveness assessment",
        "Activity-related heart rate monitoring",
        "Professional analysis and interpretation",
        "Detailed monitoring reports"
      ],
    },
    'laboratory': {
      id: 'laboratory',
      title: "Laboratory Services",
      image: "/nurse.png",
      description: [
        "At Amanda Hospital, our state-of-the-art clinical laboratory provides comprehensive diagnostic testing services essential for accurate diagnosis and effective patient care. Our fully equipped facility utilizes the latest technology and follows strict quality standards to ensure reliable and timely test results.",

        "We offer a complete range of laboratory tests including hematology, chemistry, immunology, microbiology, and pathology services. Our experienced laboratory technicians and pathologists work together to ensure that samples are processed accurately and results are interpreted correctly by qualified physicians.",

        "Our laboratory services support both inpatient and outpatient care, providing rapid turnaround times for urgent tests and comprehensive testing panels for routine assessments. We perform routine tests such as complete blood counts, metabolic panels, and lipid profiles, as well as specialized tests for specific diagnoses.",

        "We maintain the highest standards of patient safety and data accuracy through rigorous quality control procedures, regular equipment maintenance, and professional staff development. Our laboratory is equipped to handle high-volume testing with accuracy and efficiency.",

        "At Amanda Hospital, our laboratory services are an integral part of our commitment to providing comprehensive healthcare. We work closely with our clinical colleagues to ensure that test results are promptly available and properly communicated to healthcare providers, supporting timely diagnosis and treatment decisions for our patients."
      ],
      features: [
        "Complete blood count (CBC)",
        "Chemistry and metabolic panels",
        "Lipid and glucose testing",
        "Liver and kidney function tests",
        "Immunology and serology testing",
        "Microbiology and culture testing",
        "Pathology services",
        "Rapid turnaround for urgent tests",
        "Quality assured testing procedures"
      ],
    },
    'pharmacy': {
      id: 'pharmacy',
      title: "Pharmacy Services",
      image: "/nurse.png",
      description: [
        "At Amanda Hospital, our in-house pharmacy provides convenient access to prescribed medications while ensuring the highest standards of pharmaceutical care. Our experienced team of pharmacists and pharmacy technicians is dedicated to supporting patient health by providing quality medications and professional pharmaceutical services.",

        "Our pharmacy stocks a comprehensive range of medications, from common over-the-counter drugs to specialized prescription medications. We maintain adequate supply of essential medications and ensure rapid dispensing of prescriptions to outpatient and inpatient clients.",

        "Our pharmacists provide professional consultation on medication use, potential interactions, side effects, and proper administration techniques. We work closely with physicians and patients to optimize therapy and resolve medication-related problems. Patient counseling is an important part of our services to ensure safe and effective medication use.",

        "We also offer specialized pharmaceutical services including medication therapy management, compounding of custom medications, and management of complex medication regimens. Our pharmacy team is knowledgeable about the latest medications and treatment guidelines, ensuring that patients receive current and evidence-based pharmaceutical care.",

        "At Amanda Hospital, we are committed to ensuring that medications are accessible, affordable, and used safely and effectively. Our pharmacy services contribute significantly to improving patient outcomes and promoting overall health and wellness in our community."
      ],
      features: [
        "Full-service prescription dispensing",
        "Over-the-counter medications",
        "Medication counseling and education",
        "Drug interaction checking",
        "Medication therapy management",
        "Custom medication compounding",
        "Affordable medication pricing",
        "Convenient pharmacy location",
        "Rapid prescription fulfillment"
      ],
    }
  };

  const serviceId = params?.id || 'cardiology';
  const service = serviceData[serviceId] || serviceData.cardiology;

  const allServiceIds = Object.keys(serviceData);

  return (
    <div className={styles.container}>
      <div className={styles.wrapper}>

        <div className={styles.services}>
          <div className={styles.cont}>
            <div className={styles.title}>
              OUR SERVICES
            </div>

            <ul>
              {allServiceIds.map((id) => (
                <li key={id}>
                  <Link href={`/services/${id}`} className={serviceId === id ? styles.active : ''}>
                    {serviceData[id].title}
                    <div className={styles.icon}><FaArrowRight /></div>
                  </Link>
                </li>
              ))}
            </ul>
          </div>


          <div className={styles.features}>
            <div className={styles.card}>
              <div className={styles.title}>
                FEATURES
              </div>
              <div className={styles.list}>
                <ul>
                  {service.features.map((feat, idx) => (
                    <li key={idx}>
                      <div className={styles.icon}>
                        <FaCheck />
                      </div>
                      {feat}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>

        <div className={styles.info}>
          <div className={styles.image}>
            <Image
              src={service.image}
              alt={service.title}
              width={400}
              height={300}
            />
          </div>

          <div className={styles.details}>
            <div className={styles.title}>
              {service.title}
            </div>
            <div className={styles.description}>
              {service.description.map((desc, idx) => (
                <p key={idx}>{desc}</p>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Service
