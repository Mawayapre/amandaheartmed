'use client'

import React, { useState, useEffect, useCallback } from 'react'
import styles from '../../../styles/backToTop.module.css'
import { FaAngleUp } from 'react-icons/fa6'

const BackToTop = () => {
  const [show, setShow] = useState(false)

  // Throttled scroll handler
  const handleScroll = useCallback(() => {
    setShow(window.scrollY > 300)
  }, [])

  useEffect(() => {
    let ticking = false
    const throttledScroll = () => {
      if (!ticking) {
        requestAnimationFrame(() => {
          handleScroll()
          ticking = false
        })
        ticking = true
      }
    }

    window.addEventListener('scroll', throttledScroll, { passive: true })
    throttledScroll() // Initial check

    return () => window.removeEventListener('scroll', throttledScroll)
  }, [handleScroll])

  const scrollToTop = () => {
    document.documentElement.scrollIntoView({ 
      behavior: 'smooth', 
      block: 'start' 
    })
    console.log('Smooth scroll triggered') // Debug - remove after test
  }

  return (
    <button
      onClick={scrollToTop}
      className={show ? styles.top : styles.hidden}
      aria-label="Back to top"
    >
      <FaAngleUp size={24} />
    </button>
  )
}

export default BackToTop
