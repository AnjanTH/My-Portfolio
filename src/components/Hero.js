'use client'

import { motion } from 'framer-motion'
import { useState, useEffect } from 'react'
import Image from 'next/image'
import styles from '../styles/Hero.module.css'

export default function Hero() {
  const [text, setText] = useState('')
  const [isTypingComplete, setIsTypingComplete] = useState(false)
  const fullText = "Full Stack Developer"

  useEffect(() => {
    let currentIndex = 0
    const typingInterval = setInterval(() => {
      if (currentIndex <= fullText.length) {
        setText(fullText.slice(0, currentIndex))
        currentIndex++
      } else {
        setIsTypingComplete(true)
        clearInterval(typingInterval)
      }
    }, 100)

    return () => clearInterval(typingInterval)
  }, [])

  return (
    <section className={styles.hero}>
      <div className={styles.content}>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className={styles.textContent}
        >
          <h1 className={styles.title}>Anjan T H</h1>
          <h2 className={styles.subtitle}>{text}</h2>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: isTypingComplete ? 1 : 0 }}
            transition={{ duration: 0.5 }}
            className={styles.description}
          >
            Passionate about creating beautiful and functional web applications
            with modern technologies.
          </motion.p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
          className={styles.imageContainer}
        >
          <div className={styles.imageWrapper}>
            <Image
              src="/profile.jpg"
              alt="Anjan T H"
              width={300}
              height={300}
              className={styles.profileImage}
              priority
            />
          </div>
        </motion.div>
      </div>
    </section>
  )
}
