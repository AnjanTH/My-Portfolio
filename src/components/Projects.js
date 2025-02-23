'use client'

import { motion } from 'framer-motion'
import styles from '../styles/Projects.module.css'

export default function Projects() {
  const projects = [
    {
      title: 'Eco Connect',
      description: `
        <p>EcoConnect is a platform designed to promote active collaboration in environmental sustainability. 
        It enables users to participate in community-based initiatives like tree planting, plastic cleanup drives, and renewable energy projects.</p>

        <h4>Key Features:</h4>
        <ul>
          <li><b>User Authentication:</b> Secure sign-up and login using JWT authentication</li>
          <li><b>Community Engagement:</b> Encourages local participation in environmental events</li>
          <li><b>AI Chatbot:</b> Provides real-time assistance for project-related queries</li>
          <li><b>Fundraising for Natural Disasters:</b> Supports relief efforts through crowdfunding</li>
          <li><b>Real-Time Communication:</b> Integrated video calls and messaging for seamless collaboration</li>
          <li><b>Event Management:</b> Users can create, join, and manage climate action events</li>
          <li><b>CO₂ Emission Prediction:</b> Uses ML to analyze and suggest ways to reduce carbon footprints</li>
          <li><b>OpenStreetMap Integration:</b> Helps users find and track environmental activities</li>
        </ul>

        <p>EcoConnect empowers communities by connecting individuals, activists, and organizations to drive real-world environmental change.</p>
      `,
      image: '/ecoconnect.jpg',
      tech: ['React', 'Node.js', 'MongoDB', 'Express', 'Tailwind CSS', 'JavaScript', 'Flask', 'Python'],
      link: 'https://ecoconnect-demo.vercel.app',
      github: 'https://github.com/AnjanTH/Eco-Connect'
    },
    {
      title: 'Supply Chain',
      description: `
        <p>A decentralized supply chain management platform built with Next.js, TypeScript, and Hardhat.
        It enhances inventory tracking, order management, and supplier coordination for greater efficiency.</p>

        <h4>Key Features:</h4>
        <ul>
          <li><b>Optimized Workflows:</b> Advanced tracking systems reduce process inefficiencies</li>
          <li><b>Blockchain Integration:</b> Ensures transparency, security, and traceability in transactions</li>
          <li><b>End-to-End Management:</b> Covers the entire supply chain from suppliers to delivery</li>
        </ul>

        <p>Empowering businesses with a smarter, more secure supply chain.</p>
      `,
      image: '/supplychain.jpg',
      tech: ['Next.js', 'TailwindCSS', 'MongoDB', 'Solidity', 'TypeScript', 'Hardhat'],
      link: 'https://supplychain-demo.vercel.app',
      github: 'https://github.com/AnjanTH/supply_chain-codered25'
    }
  ];

  return (
    <section className={styles.projects}>
      <div className={styles.grid}>
        {projects.map((project, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            className={styles.card}
          >
            <div className={styles.content}>
              <h3 className={styles.title}>{project.title}</h3>

              {/* Render HTML content correctly */}
              <div
                className={styles.description}
                dangerouslySetInnerHTML={{ __html: project.description }}
              ></div>

              <div className={styles.tech}>
                {project.tech.map((tech, i) => (
                  <span key={i} className={styles.techItem}>
                    {tech}
                  </span>
                ))}
              </div>
              <div className={styles.links}>
                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={styles.link}
                >
                  View Project
                </a>
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={styles.githubLink}
                >
                  GitHub
                </a>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  )
}
