'use client'

import { motion } from 'framer-motion'
import Projects from '../../components/Projects'
import styles from './page.module.css'

export default function ProjectsPage() {
  return (
    <div className={styles.container}>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className={styles.content}
      >
        <div className={styles.header}>
          <h1 className={styles.title}>My Projects</h1>
          <p className={styles.description}>
            Explore my latest work and side projects. Each project demonstrates my skills
            and passion for creating innovative solutions.
          </p>
        </div>
        <Projects />
      </motion.div>
    </div>
  )
}
