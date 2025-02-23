'use client'

import { motion } from 'framer-motion'
import { FaGithub, FaLinkedin } from 'react-icons/fa'
import { SiLeetcode } from 'react-icons/si'
import styles from './page.module.css'

export default function LinksPage() {
  const links = [
    {
      name: 'GitHub',
      url: 'https://github.com/AnjanTH',
      icon: <FaGithub size={24} />,
      description: 'Check out my open-source projects and contributions'
    },
    {
      name: 'LinkedIn',
      url: 'https://www.linkedin.com/in/anjan-t-h-326210269/',
      icon: <FaLinkedin size={24} />,
      description: 'Connect with me professionally'
    },
    {
      name: 'LeetCode',
      url: 'https://leetcode.com/u/Anjan_th_7064/',
      icon: <SiLeetcode size={24} />,
      description: 'View my problem-solving skills'
    }
  ]

  return (
    <div className={styles.container}>
      <motion.h1 
        className={styles.title}
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        Connect With Me
      </motion.h1>
      <motion.p 
        className={styles.description}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.2 }}
      >
        Find me on various platforms and let's collaborate!
      </motion.p>
      <div className={styles.linksGrid}>
        {links.map((link, index) => (
          <motion.a
            key={link.name}
            href={link.url}
            target="_blank"
            rel="noopener noreferrer"
            className={styles.linkCard}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
          >
            <div className={styles.iconWrapper}>
              {link.icon}
            </div>
            <h2 className={styles.linkTitle}>{link.name}</h2>
            <p className={styles.linkDescription}>{link.description}</p>
          </motion.a>
        ))}
      </div>
    </div>
  )
}
