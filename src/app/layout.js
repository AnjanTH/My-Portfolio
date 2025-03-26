import { Inter } from 'next/font/google'
import './globals.css'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import MouseColor from '../components/MouseColor'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Anjan T H | Portfolio',
  description: 'Full Stack Developer and AI/ML Enthusiast',
  icons: {
    icon: [
      {
        url: '/favicon.webp',
        sizes: '32x32',
        type: 'image/x-icon',
      }]
    
  },
  manifest: '/manifest.json',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Navbar />
        <MouseColor />
        <main className="main-content">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  )
}
