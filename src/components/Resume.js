'use client'

import { motion } from 'framer-motion'
import styles from '../styles/Resume.module.css'
import ScrollReveal from './ScrollReveal'

export default function Resume() {
  const resumeHighlights = [
    'Full Stack Development',
    'Frontend Development (React, Next.js)',
    'Backend Development (Node.js, Express, Flask)',
    'Blockchain Integration',
    'Database Management (MongoDB, SQL)',
    'AI/ML Integration (YOLO, TensorFlow, Hugging Face)',
    'API Development & Optimization',
    'Hackathon Participation & Competitive Coding'
  ];

  const handleDownload = () => {
    console.log('Resume downloaded')
  }

  return (
    <section className={styles.resume}>
      <ScrollReveal>
        <div className={styles.container}>
          <h2 className={styles.title}>Resume</h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className={styles.description}
          >
            Download my resume to learn more about my experience, skills, and professional journey.
            I specialize in building scalable web applications using modern technologies.
          </motion.p>
          
          <motion.a
            initial={{ scale: 0.9 }}
            animate={{ scale: 1 }}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            href="/Anjan's resume1.pdf"
            download="Anjan_TH_Resume.pdf"
            className={styles.downloadButton}
            onClick={handleDownload}
          >
            <span className={styles.icon}>📄</span>
            Download Resume
          </motion.a>

          <ScrollReveal delay={0.2}>
            <div className={styles.previewContainer}>
              <h3 className={styles.previewTitle}>Resume Highlights</h3>
              <ul className={styles.previewList}>
                {resumeHighlights.map((highlight, index) => (
                  <motion.li
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    className={styles.previewItem}
                  >
                    {highlight}
                  </motion.li>
                ))}
              </ul>
            </div>
          </ScrollReveal>
        </div>
      </ScrollReveal>
    </section>
  )
}
