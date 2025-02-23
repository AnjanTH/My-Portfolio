import styles from '../styles/Footer.module.css'
import Link from 'next/link'

export default function Footer() {
  const currentYear = new Date().getFullYear()

  const socialLinks = [
    { name: 'GitHub', url: 'https://github.com/AnjanTH' },
    { name: 'LinkedIn', url: 'https://www.linkedin.com/in/anjan-t-h-326210269/' },
    { name: 'Twitter', url: 'https://twitter.com/yourusername' }
  ]

  const quickLinks = [
    { name: 'Home', path: '/' },
    { name: 'Projects', path: '/projects' },
    { name: 'Links', path: '/links' },
    { name: 'Contact', path: '/#contact' }
  ]

  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        <div className={styles.content}>
          <div className={styles.section}>
            <h3 className={styles.sectionTitle}>About Me</h3>
            <p className={styles.description}>
              Passionate developer creating innovative solutions with modern technologies.
              Let's build something amazing together!
            </p>
          </div>

          <div className={styles.section}>
            <h3 className={styles.sectionTitle}>Quick Links</h3>
            <ul className={styles.linkList}>
              {quickLinks.map((link) => (
                <li key={link.path}>
                  <Link href={link.path} className={styles.link}>
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className={styles.section}>
            <h3 className={styles.sectionTitle}>Connect</h3>
            <ul className={styles.socialLinks}>
              {socialLinks.map((link) => (
                <li key={link.url}>
                  <a
                    href={link.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={styles.socialLink}
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className={styles.bottom}>
          <p className={styles.copyright}>
            © {currentYear} Anjan T H. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}
