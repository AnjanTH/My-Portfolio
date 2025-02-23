'use client'

import styles from '../styles/Resume.module.css'

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
    // You can add analytics tracking here if needed
    console.log('Resume downloaded')
  }

  return (
    <section className={styles.resume}>
      <div className={styles.container}>
        <h2 className={styles.title}>Resume</h2>
        <p className={styles.description}>
          Download my resume to learn more about my experience, skills, and professional journey.
          I specialize in building scalable web applications using modern technologies.
        </p>
        
        <a
          href="/Anjan's resume1.pdf"
          download="Anjan_TH_Resume.pdf"
          className={styles.downloadButton}
          onClick={handleDownload}
        >
          <span className={styles.icon}>📄</span>
          Download Resume
        </a>

        <div className={styles.previewContainer}>
          <h3 className={styles.previewTitle}>Resume Highlights</h3>
          <ul className={styles.previewList}>
            {resumeHighlights.map((highlight, index) => (
              <li key={index} className={styles.previewItem}>
                {highlight}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  )
}
