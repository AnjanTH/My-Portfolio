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
            <p>
              As a Full Stack Developer, I am passionate about creating end-to-end web applications and solutions. I have experience working with various technologies across both frontend and backend development. My expertise includes building responsive user interfaces, RESTful APIs, and managing databases.
            </p>
            <p>
              I am also an AI/ML enthusiast, constantly exploring the fascinating world of artificial intelligence and machine learning. I enjoy working on projects that incorporate data analysis, predictive modeling, and implementing machine learning algorithms to solve real-world problems.
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
