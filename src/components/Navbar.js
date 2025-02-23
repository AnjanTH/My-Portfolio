'use client'

import { useState } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import styles from '../styles/Navbar.module.css'

export default function Navbar() {
  const pathname = usePathname()
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const isActive = (path) => {
    return pathname === path ? styles.active : ''
  }

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
  }

  return (
    <nav className={styles.navbar}>
      <div className={styles.content}>
        <Link href="/" className={styles.logo}>
          Anjan T H
        </Link>
        <button className={styles.menuButton} onClick={toggleMenu}>
          {isMenuOpen ? (
            <svg className={styles.menuIcon} viewBox="0 0 24 24">
              <path d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z"/>
            </svg>
          ) : (
            <svg className={styles.menuIcon} viewBox="0 0 24 24">
              <path d="M3 18h18v-2H3v2zm0-5h18v-2H3v2zm0-7v2h18V6H3z"/>
            </svg>
          )}
        </button>
        <div className={`${styles.links} ${isMenuOpen ? styles.showMenu : ''}`}>
          <Link href="/" className={`${styles.link} ${isActive('/')}`} onClick={toggleMenu}>
            Home
          </Link>
          <Link href="/about" className={`${styles.link} ${isActive('/about')}`} onClick={toggleMenu}>
            About
          </Link>
          <Link href="/projects" className={`${styles.link} ${isActive('/projects')}`} onClick={toggleMenu}>
            Projects
          </Link>
          <Link href="/resume" className={`${styles.link} ${isActive('/resume')}`} onClick={toggleMenu}>
            Resume
          </Link>
          <Link href="/links" className={`${styles.link} ${isActive('/links')}`} onClick={toggleMenu}>
            Links
          </Link>
          <Link href="/contact" className={`${styles.link} ${isActive('/contact')}`} onClick={toggleMenu}>
            Contact
          </Link>
        </div>
      </div>
    </nav>
  )
}
