'use client'

import { motion } from 'framer-motion'
import ScrollReveal from './ScrollReveal'
import styles from '../styles/Projects.module.css'
import Image from 'next/image'
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
      image: '/Eco-connect.webp',
      tech: ['React', 'Node.js', 'MongoDB', 'Express', 'Tailwind CSS', 'JavaScript', 'Flask', 'Python'],
      link: 'https://ecoconnect-demo.vercel.app',
      github: 'https://github.com/AnjanTH/Eco-Connect'
    },
    {
      title: 'ZapChat',
      description: `
        <p>A modern real-time chat application that enables seamless communication through text and image sharing. 
        Built with the MERN stack and WebSocket integration for real-time features.</p>

        <h4>Key Features:</h4>
        <ul>
          <li><b>Real-Time Messaging:</b> Instant message delivery using Socket.io</li>
          <li><b>Media Sharing:</b> Support for sending images and text messages</li>
          <li><b>Online Status:</b> Real-time user presence detection</li>
          <li><b>User Authentication:</b> Secure login and registration system</li>
          <li><b>Responsive Design:</b> Modern UI built with Tailwind CSS and DaisyUI</li>
          <li><b>Data Persistence:</b> Messages stored securely in MongoDB</li>
        </ul>

        <p>ZapChat provides a seamless and engaging chat experience with modern features and real-time capabilities.</p>
      `,
      image: '/Zapchat.webp',
      tech: ['React.js', 'Node.js', 'Express.js', 'MongoDB', 'Socket.io', 'Tailwind CSS', 'DaisyUI'],
      link: 'https://zapchat-demo.vercel.app',
      github: 'https://github.com/AnjanTH/ZapChat'
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
      image: '/supplychain.webp',
      tech: ['Next.js', 'TailwindCSS', 'MongoDB', 'Solidity', 'TypeScript', 'Hardhat'],
      link: 'https://supplychain-demo.vercel.app',
      github: 'https://github.com/AnjanTH/supply_chain-codered25'
    }
  ];

  return (
    <section className={styles.projects}>
      <ScrollReveal>
        <h2 className={styles.sectionTitle}>Featured Projects</h2>
      </ScrollReveal>
      
      <div className={styles.grid}>
        {projects.map((project, index) => (
          <ScrollReveal key={index} delay={index * 0.2}>
            <motion.div 
              className={styles.card}
              whileHover={{ y: -5 }}
              transition={{ duration: 0.3 }}
            >
              <div className={styles.imageWrapper}>
                <Image
                  src={project.image}
                  alt={project.title}
                  width={600}
                  height={300}
                  className={styles.projectImage}
                />
              </div>
              
              <div className={styles.content}>
                <h3 className={styles.title}>{project.title}</h3>

                <div
                  className={styles.description}
                  dangerouslySetInnerHTML={{ __html: project.description }}
                />

                <div className={styles.tech}>
                  {project.tech.map((tech, i) => (
                    <motion.span 
                      key={i} 
                      className={styles.techItem}
                      whileHover={{ scale: 1.05 }}
                    >
                      {tech}
                    </motion.span>
                  ))}
                </div>

                <div className={styles.links}>
                  <motion.a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={styles.link}
                    whileHover={{ scale: 1.05, backgroundColor: '#2563eb' }}
                    whileTap={{ scale: 0.95 }}
                  >
                    Live Demo
                  </motion.a>
                  <motion.a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={styles.githubLink}
                    whileHover={{ scale: 1.05, backgroundColor: '#1f2937' }}
                    whileTap={{ scale: 0.95 }}
                  >
                    View Code
                  </motion.a>
                </div>
              </div>
            </motion.div>
          </ScrollReveal>
        ))}
      </div>
    </section>
  );
}