import { useEffect, useRef } from 'react'

export default function FallingStars() {
  const containerRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const container = containerRef.current
    if (!container) return

    const createStar = () => {
      const star = document.createElement('div')
      star.className = 'star'
      star.style.left = Math.random() * 100 + '%'
      star.style.animationDelay = Math.random() * 3 + 's'
      star.style.animationDuration = (Math.random() * 2 + 2) + 's'
      container.appendChild(star)

      // Remove star after animation
      setTimeout(() => {
        if (star.parentNode) {
          star.parentNode.removeChild(star)
        }
      }, 5000)
    }

    // Create initial stars
    for (let i = 0; i < 20; i++) {
      setTimeout(createStar, Math.random() * 3000)
    }

    // Create new stars periodically
    const interval = setInterval(createStar, 300)

    return () => {
      clearInterval(interval)
    }
  }, [])

  return <div ref={containerRef} className="stars" />
}