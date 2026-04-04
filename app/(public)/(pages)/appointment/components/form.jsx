'use client';
import React, { useState } from 'react';
import { FaRegDotCircle, FaHeartbeat, FaUserMd, FaHospital } from 'react-icons/fa';
import { MdMonitorHeart } from 'react-icons/md';
import { GiMedicines } from 'react-icons/gi';
import { TbTestPipe } from 'react-icons/tb';
import { RiMentalHealthLine } from 'react-icons/ri';
import { FaStethoscope } from 'react-icons/fa';
import { DayPicker } from 'react-day-picker';
import 'react-day-picker/dist/style.css';
import styles from '@/styles/appointment/calendar.module.css';

const SERVICES = [
  {
    id: 'cardiology',
    icon: FaHeartbeat,
    title: 'Cardiology Services',
    description: 'Comprehensive care for patients with heart-related conditions, including diagnosis and treatment.',
  },
  {
    id: 'ecg',
    icon: MdMonitorHeart,
    title: 'ECG & Cardiac Echo',
    description: 'Advanced ECG and cardiac echo services to monitor heart activity and detect abnormalities.',
  },
  {
    id: 'monitoring',
    icon: FaStethoscope,
    title: '24-Hour Monitoring',
    description: 'Continuous tracking of heart activity and vital signs for patients requiring close observation.',
  },
  {
    id: 'laboratory',
    icon: TbTestPipe,
    title: 'Laboratory Services',
    description: 'Fully equipped laboratory providing a wide range of diagnostic tests and screenings.',
  },
  {
    id: 'pharmacy',
    icon: GiMedicines,
    title: 'Pharmacy Services',
    description: 'In-house pharmacy ensuring quick and convenient access to prescribed medications.',
  },
  {
    id: 'admission',
    icon: FaHospital,
    title: 'Hospital Admission',
    description: 'Comfortable and well-organized admission services for patients requiring inpatient care.',
  },
  {
    id: 'rehabilitation',
    icon: RiMentalHealthLine,
    title: 'Rehabilitation Programs',
    description: 'Structured programs to support recovery after illness, surgery, or injury.',
  },
  {
    id: 'general',
    icon: FaUserMd,
    title: 'General Medical Care',
    description: 'Wide range of general medical services for individuals and families of all ages.',
  },
];

const MORNING_SLOTS   = ['08:00','08:30','09:00','09:30','10:00','10:30','11:00','11:30'];
const AFTERNOON_SLOTS = ['12:00','12:30','13:00','13:30','14:00','14:30','15:00','15:30'];
const EVENING_SLOTS   = ['16:00','16:30','17:00','17:30','18:00','18:30','19:00','19:30'];
const UNAVAILABLE     = new Set(['09:00','12:30','16:30','18:00']);

const STEPS = ['Service', 'Date & Time', 'Your Details', 'Confirm'];

const MONTHS = [
  'January','February','March','April','May','June',
  'July','August','September','October','November','December',
];

const Form = () => {
  const [step, setStep]                 = useState(0);
  const [service, setService]           = useState(null);
  const [selectedDay, setSelectedDay]   = useState(null);
  const [selectedSlot, setSelectedSlot] = useState(null);
  const [patient, setPatient]           = useState({
    firstName: '', lastName: '', email: '',
    phone: '', dob: '', gender: '', notes: '',
  });
  const [submitted, setSubmitted] = useState(false);

  const today = new Date();
  today.setHours(0, 0, 0, 0);

  const selectedService = SERVICES.find(s => s.id === service);

  const formattedDate = selectedDay
    ? `${MONTHS[selectedDay.getMonth()]} ${selectedDay.getDate()}, ${selectedDay.getFullYear()}`
    : '';

  const formattedTime = selectedSlot
    ? selectedSlot
    : 'Not selected';

  const canNext = () => {
    if (step === 0) return !!service;
    if (step === 1) return !!selectedDay && !!selectedSlot;
    if (step === 2) return patient.firstName && patient.lastName && patient.email && patient.phone;
    return true;
  };

  const handleDaySelect = (day) => {
    setSelectedDay(day);
    setSelectedSlot(null);
  };

  const updatePatient = (field) => (e) =>
    setPatient(prev => ({ ...prev, [field]: e.target.value }));

  const resetForm = () => {
    setStep(0); setService(null);
    setSelectedDay(null); setSelectedSlot(null);
    setSubmitted(false);
    setPatient({ firstName:'', lastName:'', email:'', phone:'', dob:'', gender:'', notes:'' });
  };

  /* ── Success screen ── */
  if (submitted) {
    return (
      <div className={styles.wrapper}>
        <div className={styles.successCard}>
          <div className={styles.successIcon}>🎉</div>
          <div className={styles.successTitle}>Appointment Booked!</div>
          <p className={styles.successSub}>
            A confirmation will be sent to <strong>{patient.email}</strong>.
            Our team will follow up shortly.
          </p>
          <div className={styles.summaryGrid}>
            <div className={styles.summaryRow}><span>Service</span><span>{selectedService?.title || 'Not selected'}</span></div>
            <div className={styles.summaryRow}><span>Date</span><span>{formattedDate || 'Not selected'}</span></div>
            <div className={styles.summaryRow}><span>Time</span><span>{formattedTime}</span></div>
            <div className={styles.summaryRow}><span>Patient</span><span>{patient.firstName} {patient.lastName}</span></div>
          </div>
          <button className={styles.btnNext} onClick={resetForm}>Book Another</button>
        </div>
      </div>
    );
  }

  return (
    <div className={styles.wrapper}>

      {/* ── Header ── */}
      <div className={styles.header}>
        <div className={styles.title}>24-Hour Availability</div>
        <div className={styles.heading}>Schedule an Appointment with Our Medical Team</div>
        <p className={styles.paragraph}>
          Our hospital is available 24 hours a day to provide you with quality healthcare services.
          Please complete the form below, and a member of our team will contact you promptly to confirm your appointment.
        </p>
      </div>

      {/* ── Progress ── */}
      <div className={styles.progress}>
        {STEPS.map((label, i) => (
          <React.Fragment key={i}>
            <div
              className={[
                styles.checkpoint,
                i === step ? styles.active : '',
                i < step  ? styles.done   : '',
              ].join(' ')}
            >
              <div className={styles.icon}>
                {i < step ? <span>✓</span> : <FaRegDotCircle size={18} />}
              </div>
              <div className={styles.stepLabel}>{label}</div>
            </div>
            {i < STEPS.length - 1 && (
              <div className={`${styles.connector} ${i < step ? styles.connectorDone : ''}`} />
            )}
          </React.Fragment>
        ))}
      </div>

      {/* ── Main card ── */}
      <div className={styles.cont}>

        {/* ── Step 0: Select Service ── */}
        {step === 0 && (
          <div className={styles.stepContent}>
            <div className={styles.cardTitle}>Select a Service</div>
            <p className={styles.cardSub}>Choose the medical specialty you need</p>

            {/* mirrors your styles.cards grid */}
            <div className={styles.cards}>
              {SERVICES.map((s) => (
                <div
                  key={s.id}
                  className={`${styles.card} ${service === s.id ? styles.cardSelected : ''}`}
                  onClick={() => setService(s.id)}
                >
                  {/* mirrors your styles.title row with icon + text */}
                  <div className={styles.cardHeader}>
                    <div className={styles.cardIcon}>
                      <s.icon size={24} />
                    </div>
                    {s.title}
                  </div>

                  <div className={styles.description}>
                    {s.description}
                  </div>
                </div>
              ))}
            </div>

            <div className={styles.btnRow}>
              <button className={styles.btnNext} disabled={!canNext()} onClick={() => setStep(1)}>
                Choose Date →
              </button>
            </div>
          </div>
        )}

        {/* ── Step 1: Date & Time ── */}
        {step === 1 && (
          <div className={styles.stepContent}>
            <div className={styles.cardTitle}>Pick a Date & Time</div>
            <p className={styles.cardSub}>
              {selectedService && <selectedService.icon size={14} />} {selectedService?.title} · select an available slot
            </p>

            <DayPicker
              mode="single"
              selected={selectedDay}
              onSelect={handleDaySelect}
              disabled={{ before: today }}
              classNames={{
                root:          styles.rdpRoot,
                months:        styles.rdpMonths,
                month:         styles.rdpMonth,
                caption:       styles.rdpCaption,
                caption_label: styles.rdpCaptionLabel,
                nav:           styles.rdpNav,
                nav_button:    styles.rdpNavButton,
                table:         styles.rdpTable,
                head_row:      styles.rdpHeadRow,
                head_cell:     styles.rdpHeadCell,
                row:           styles.rdpRow,
                cell:          styles.rdpCell,
                day:           styles.rdpDay,
                day_selected:  styles.rdpDaySelected,
                day_today:     styles.rdpDayToday,
                day_disabled:  styles.rdpDayDisabled,
                day_outside:   styles.rdpDayOutside,
              }}
            />

            {selectedDay && (
              <div className={styles.slotsSection}>
                {[
                  { label: '☀️ Morning',   slots: MORNING_SLOTS },
                  { label: '🌤 Afternoon', slots: AFTERNOON_SLOTS },
                  { label: '🌆 Evening',   slots: EVENING_SLOTS },
                ].map(({ label, slots }) => (
                  <div key={label} className={styles.slotGroup}>
                    <div className={styles.slotGroupLabel}>{label}</div>
                    <div className={styles.slotGrid}>
                      {slots.map(t => (
                        <button
                          key={t}
                          disabled={UNAVAILABLE.has(t)}
                          className={[
                            styles.slotBtn,
                            UNAVAILABLE.has(t) ? styles.slotUnavailable : '',
                            selectedSlot === t  ? styles.slotSelected   : '',
                          ].join(' ')}
                          onClick={() => setSelectedSlot(t)}
                        >
                          {t}
                        </button>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            )}

            <div className={styles.btnRow}>
              <button className={styles.btnBack} onClick={() => setStep(0)}>← Back</button>
              <button className={styles.btnNext} disabled={!canNext()} onClick={() => setStep(2)}>
                Patient Details →
              </button>
            </div>
          </div>
        )}

        {/* ── Step 2: Patient Details ── */}
        {step === 2 && (
          <div className={styles.stepContent}>
            <div className={styles.cardTitle}>Your Details</div>
            <p className={styles.cardSub}>Fill in your information so we can prepare for your visit</p>

            <div className={styles.formGrid}>
              <div className={styles.formField}>
                <label className={styles.formLabel}>First Name *</label>
                <input className={styles.formInput} placeholder="John" value={patient.firstName} onChange={updatePatient('firstName')} />
              </div>
              <div className={styles.formField}>
                <label className={styles.formLabel}>Last Name *</label>
                <input className={styles.formInput} placeholder="Doe" value={patient.lastName} onChange={updatePatient('lastName')} />
              </div>
              <div className={styles.formField}>
                <label className={styles.formLabel}>Email Address *</label>
                <input className={styles.formInput} type="email" placeholder="john@email.com" value={patient.email} onChange={updatePatient('email')} />
              </div>
              <div className={styles.formField}>
                <label className={styles.formLabel}>Phone Number *</label>
                <input className={styles.formInput} type="tel" placeholder="+265 999 000 000" value={patient.phone} onChange={updatePatient('phone')} />
              </div>
              <div className={styles.formField}>
                <label className={styles.formLabel}>Date of Birth</label>
                <input className={styles.formInput} type="date" value={patient.dob} onChange={updatePatient('dob')} />
              </div>
              <div className={styles.formField}>
                <label className={styles.formLabel}>Gender</label>
                <select className={styles.formSelect} value={patient.gender} onChange={updatePatient('gender')}>
                  <option value="">Select…</option>
                  <option>Male</option>
                  <option>Female</option>
                  <option>Non-binary</option>
                  <option>Prefer not to say</option>
                </select>
              </div>
              <div className={`${styles.formField} ${styles.formFieldFull}`}>
                <label className={styles.formLabel}>Additional Notes</label>
                <textarea
                  className={styles.formTextarea}
                  placeholder="Describe your symptoms or any special requirements…"
                  value={patient.notes}
                  onChange={updatePatient('notes')}
                />
              </div>
            </div>

            <div className={styles.btnRow}>
              <button className={styles.btnBack} onClick={() => setStep(1)}>← Back</button>
              <button className={styles.btnNext} disabled={!canNext()} onClick={() => setStep(3)}>
                Review →
              </button>
            </div>
          </div>
        )}

        {/* ── Step 3: Confirm ── */}
        {step === 3 && (
          <div className={styles.stepContent}>
            <div className={styles.cardTitle}>Confirm Appointment</div>
            <p className={styles.cardSub}>Review your details before submitting</p>

            <div className={styles.summaryGrid}>
              <div className={styles.summaryRow}><span>Service</span><span>{selectedService?.title || 'Not selected'}</span></div>
              <div className={styles.summaryRow}><span>Date</span><span>{formattedDate || 'Not selected'}</span></div>
              <div className={styles.summaryRow}><span>Time</span><span>{formattedTime}</span></div>
              <div className={styles.summaryRow}><span>Patient</span><span>{patient.firstName} {patient.lastName}</span></div>
              <div className={styles.summaryRow}><span>Email</span><span>{patient.email}</span></div>
              <div className={styles.summaryRow}><span>Phone</span><span>{patient.phone}</span></div>
              {patient.gender && <div className={styles.summaryRow}><span>Gender</span><span>{patient.gender}</span></div>}
              {patient.dob    && <div className={styles.summaryRow}><span>Date of Birth</span><span>{patient.dob}</span></div>}
              {patient.notes  && <div className={styles.summaryRow}><span>Notes</span><span>{patient.notes}</span></div>}
            </div>

            <div className={styles.btnRow}>
              <button className={styles.btnBack} onClick={() => setStep(2)}>← Back</button>
              <button
                className={`${styles.btnNext} ${styles.btnSubmit}`}
                onClick={() => setSubmitted(true)}
              >
                Confirm Booking ✓
              </button>
            </div>
          </div>
        )}

      </div>
    </div>
  );
};

export default Form;
