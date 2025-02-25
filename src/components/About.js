'use client'

import ScrollReveal from './ScrollReveal'
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
    <section className={styles.about} id="about">
      <ScrollReveal>
        <h2 className={styles.title}>About Me</h2>
      </ScrollReveal>

      <div className={styles.content}>
        <ScrollReveal delay={0.2}>
          <div className={styles.text}>
            <p>
              I am currently pursuing a Bachelor of Engineering in Computer Science and Engineering at Siddaganga Institute of Technology, Tumakuru. Previously, I completed my pre-university education in Science (PCMB) at Mahesh PU College, Maraluru, and my schooling at Geetha English High School, Dobbespete.
            </p>
          </div>
        </ScrollReveal>

        <ScrollReveal delay={0.4}>
          <div className={styles.skills}>
            <h3>Skills & Technologies</h3>
            <div className={styles.skillsGrid}>
              {skills.map((skill, index) => (
                <div key={skill.name} className={styles.skillItem}>
                  <div className={styles.skillName}>{skill.name}</div>
                </div>
              ))}
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  )
}
