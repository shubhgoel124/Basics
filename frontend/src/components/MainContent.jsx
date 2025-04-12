import { useState, lazy, Suspense, useEffect } from 'react'
import '../../src/App.css'
import f1HotWheels from '../assets/f1-hotwheels.png'
import monsterTrucks from '../assets/monster-trucks.png'
import f1Logo from '../assets/f1-logo.svg'
import hotWheelsLogo from '../assets/hot-wheels-logo.svg'
import monsterTrucksLogo from '../assets/monster-trucks-logo.svg'

const Card = lazy(() => import('../components/Card'))
const Features = lazy(() => import('../components/Features'))
const Footer = lazy(() => import('../components/Footer'))
const Collection = lazy(() => import('../components/Collection'))

const cardData = [
  {
    id: 1,
    image: f1HotWheels,
    // logo: f1Logo,
    // hotWheelsLogo: hotWheelsLogo,
    title: 'Hot Wheels & Formula 1®',
    description: 'Bring home all the thrills of professional racing with toys that celebrate the world\'s fastest cars.',
    subtitle: 'Official Licensee of Formula 1®',
    alt: 'Hot Wheels & Formula 1',
    categories: [
      { name: 'F1®', className: 'f1-tag' },
      { name: 'HOT WHEELS', className: 'hot-wheels-tag' }
    ]
  },
  {
    id: 2,
    image: monsterTrucks,
    // logo: monsterTrucksLogo,
    title: 'Outrageous Event',
    description: 'See tour dates and cities for Hot Wheels Monster Trucks Live Glow-N-Fire!',
    alt: 'Monster Trucks Event',
    categories: [
      { name: 'MONSTER TRUCK', className: 'monster-truck-tag' }
    ]
  }
]

const featuresData = [
  {
    id: 'secure',
    title: '100% SECURE CHECKOUT',
    icon: 'secure'
  },
  {
    id: 'shipping',
    title: 'SHIPPING ACROSS INDIA',
    icon: 'shipping'
  },
  {
    id: 'support',
    title: 'OUTSTANDING SUPPORT',
    icon: 'support'
  }
]

export function MainContent() {
  const [showScrollButton, setShowScrollButton] = useState(false)
  const [theme, setTheme] = useState(() => {
    const savedTheme = localStorage.getItem('theme')
    return savedTheme || 'light'
  })

  useEffect(() => {
    const handleScroll = () => {
      const scrolled = window.scrollY > 300
      if (showScrollButton !== scrolled) {
        setShowScrollButton(scrolled)
      }
    }

    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [showScrollButton])

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme)
    localStorage.setItem('theme', theme)
  }, [theme])

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    })
  }

  const toggleTheme = () => {
    setTheme(prevTheme => prevTheme === 'light' ? 'dark' : 'light')
  }

  return (
    <div className="app">
      <Suspense fallback={
        <div className="loading">
          <div className="loading-spinner"></div>
        </div>
      }>
        <Collection />
        <div className="cards-container" role="main">
          {cardData.map(card => (
            <Card key={card.id} {...card} />
          ))}
        </div>
        <Features features={featuresData} />
        <Footer />
        <button 
          className={`scroll-to-top ${showScrollButton ? 'visible' : ''}`}
          onClick={scrollToTop}
          aria-label="Scroll to top"
          title="Scroll to top"
        >
          <svg 
            className="scroll-to-top-icon" 
            width="24" 
            height="24" 
            viewBox="0 0 24 24" 
            fill="none" 
            xmlns="http://www.w3.org/2000/svg"
          >
            <path 
              d="M12 4l-1.41 1.41L16.17 11H4v2h12.17l-5.58 5.59L12 20l8-8-8-8z" 
              fill="currentColor" 
              transform="rotate(-90 12 12)"
            />
            <path
              d="M12 4L7 9H17L12 4Z"
              fill="currentColor"
              stroke="white"
              strokeWidth="1"
            />
            <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="1.5" fill="none" />
          </svg>
        </button>
        <button 
          className="theme-toggle-button"
          onClick={toggleTheme}
          aria-label={`Switch to ${theme === 'light' ? 'dark' : 'light'} theme`}
          title={`Switch to ${theme === 'light' ? 'dark' : 'light'} theme`}
        >
          {theme === 'light' ? (
            <svg 
              className="theme-toggle-icon" 
              width="24" 
              height="24" 
              viewBox="0 0 24 24" 
              fill="none" 
              xmlns="http://www.w3.org/2000/svg"
            >
              <path 
                d="M12 3c-4.97 0-9 4.03-9 9s4.03 9 9 9 9-4.03 9-9c0-.46-.04-.92-.1-1.36-.98 1.37-2.58 2.26-4.4 2.26-3.03 0-5.5-2.47-5.5-5.5 0-1.82.89-3.42 2.26-4.4-.44-.06-.9-.1-1.36-.1z"
                fill="currentColor"
              />
              <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="1.5" fill="none" />
            </svg>
          ) : (
            <svg 
              className="theme-toggle-icon" 
              width="24" 
              height="24" 
              viewBox="0 0 24 24" 
              fill="none" 
              xmlns="http://www.w3.org/2000/svg"
            >
              <path 
                d="M12 7c-2.76 0-5 2.24-5 5s2.24 5 5 5 5-2.24 5-5-2.24-5-5-5zM2 13h2c.55 0 1-.45 1-1s-.45-1-1-1H2c-.55 0-1 .45-1 1s.45 1 1 1zm18 0h2c.55 0 1-.45 1-1s-.45-1-1-1h-2c-.55 0-1 .45-1 1s.45 1 1 1zM11 2v2c0 .55.45 1 1 1s1-.45 1-1V2c0-.55-.45-1-1-1s-1 .45-1 1zm0 18v2c0 .55.45 1 1 1s1-.45 1-1v-2c0-.55-.45-1-1-1s-1 .45-1 1zM5.99 4.58c-.39-.39-1.03-.39-1.41 0-.39.39-.39 1.03 0 1.41l1.06 1.06c.39.39 1.03.39 1.41 0s.39-1.03 0-1.41L5.99 4.58zm12.37 12.37c-.39-.39-1.03-.39-1.41 0-.39.39-.39 1.03 0 1.41l1.06 1.06c.39.39 1.03.39 1.41 0 .39-.39.39-1.03 0-1.41l-1.06-1.06zm1.06-10.96c.39-.39.39-1.03 0-1.41-.39-.39-1.03-.39-1.41 0l-1.06 1.06c-.39.39-.39 1.03 0 1.41s1.03.39 1.41 0l1.06-1.06zM7.05 18.36c.39-.39.39-1.03 0-1.41-.39-.39-1.03-.39-1.41 0l-1.06 1.06c-.39.39-.39 1.03 0 1.41s1.03.39 1.41 0l1.06-1.06z"
                fill="currentColor"
              />
              <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="1.5" fill="none" />
            </svg>
          )}
        </button>
      </Suspense>
    </div>
  )
}


