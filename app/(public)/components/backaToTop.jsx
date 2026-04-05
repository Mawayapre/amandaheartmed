'use client'

import React, { useState, useEffect } from 'react'
import styles from '@/styles/backToTop.module.css'
import { FaAngleUp } from 'react-icons/fa6'

const BackToTop = () => {
  const [show, setShow] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setShow(window.scrollY > 300)
    }

    window.addEventListener('scroll', handleScroll)

    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    })
  }

  return (
    <button
      onClick={scrollToTop}
      className={show ? styles.top : styles.hidden}
    >
    <FaAngleUp size={24}/>
    </button>
  )
}

export default BackToTop