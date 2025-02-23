'use client'

import { motion } from 'framer-motion'
import styles from '../styles/About.module.css'

export default function About() {
  const skills = [
    {name:'C++'},
    { name: 'JavaScript' },
    { name: 'React' },
    { name: 'Node.js' },
    { name: 'Python' },
    { name: 'Flask' },
    { name: 'MongoDB' },
    { name: 'SQL' },
    { name: 'Express.js' },
  
    { name: 'Tailwind CSS' },
    { name: 'Material-UI' },
    { name: 'Git' },
   
    { name: 'WebSockets' },
   
    
    { name: 'Blockchain' },
   
 

    { name: 'Machine Learning' }
];


  return (
    <section className={styles.about}>
      <div className={styles.container}>
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className={styles.title}
        >
          About Me
        </motion.h2>

        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className={styles.section}
        >
          <h3 className={styles.sectionTitle}>Background</h3>
          <p className={styles.text}>
            I am currently pursuing a Bachelor of Engineering in Computer Science and Engineering at Siddaganga Institute of Technology, Tumakuru. Previously, I completed my pre-university education in Science (PCMB) at Mahesh PU College, Maraluru, and my schooling at Geetha English High School, Dobbespete.
          </p>
        </motion.div>

        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className={styles.section}
        >
          <h3 className={styles.sectionTitle}>Skills</h3>
          <div className={styles.skillsGrid}>
            {skills.map((skill, index) => (
              <motion.div
                key={skill.name}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className={styles.skillItem}
              >
                <div className={styles.skillName}>{skill.name}</div>
             
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}
