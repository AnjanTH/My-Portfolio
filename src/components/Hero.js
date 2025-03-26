'use client'

import { motion } from 'framer-motion'
import { useState, useEffect } from 'react'
import Image from 'next/image'
import styles from '../styles/Hero.module.css'
import ScrollReveal from './ScrollReveal'

export default function Hero() {
  const [text, setText] = useState('')
  const [isTypingComplete, setIsTypingComplete] = useState(false)
  const [textIndex, setTextIndex] = useState(0)
  const titles = ["Full Stack Developer", "AI/ML Enthusiast"]

  useEffect(() => {
    let currentIndex = 0
    let currentTextIndex = textIndex

    const typingInterval = setInterval(() => {
      if (currentIndex <= titles[currentTextIndex].length) {
        setText(titles[currentTextIndex].slice(0, currentIndex))
        currentIndex++
      } else {
        setIsTypingComplete(true)
        clearInterval(typingInterval)
        
        // Wait and start deleting
        setTimeout(() => {
          const deletingInterval = setInterval(() => {
            if (currentIndex > 0) {
              setText(titles[currentTextIndex].slice(0, currentIndex - 1))
              currentIndex--
            } else {
              clearInterval(deletingInterval)
              setTextIndex((prev) => (prev + 1) % titles.length)
            }
          }, 50)
        }, 2000)
      }
    }, 100)

    return () => clearInterval(typingInterval)
  }, [textIndex])

  return (
    <section className={styles.hero}>
      <div className={styles.content}>
        <ScrollReveal>
          <div className={styles.textContent}>
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
          </div>
        </ScrollReveal>

        <ScrollReveal delay={0.3}>
          <div className={styles.imageContainer}>
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
          </div>
        </ScrollReveal>
      </div>
    </section>
  )
}
