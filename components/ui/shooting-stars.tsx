'use client'

import { useEffect, useRef } from 'react'

interface Star {
  x: number
  y: number
  length: number
  speed: number
  opacity: number
  trail: number[][]
}

export function ShootingStars() {
  const canvasRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext('2d')
    if (!ctx) return

    // Set canvas size
    const resizeCanvas = () => {
      if (!canvas) return
      canvas.width = window.innerWidth
      canvas.height = window.innerHeight
    }
    resizeCanvas()
    window.addEventListener('resize', resizeCanvas)

    const stars: Star[] = []
    const maxStars = 3

    function createStar(): Star {
      if (!canvas) return {
        x: 0,
        y: 0,
        length: 0,
        speed: 0,
        opacity: 0,
        trail: []
      }
      
      return {
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        length: Math.random() * 80 + 20,
        speed: Math.random() * 10 + 5,
        opacity: 1,
        trail: []
      }
    }

    function moveStar(star: Star) {
      if (!canvas) return
      
      star.x += star.speed
      star.y += star.speed

      // Add current position to trail
      star.trail.push([star.x, star.y])

      // Keep trail length limited
      if (star.trail.length > 5) {
        star.trail.shift()
      }

      // Reset star if it goes off screen
      if (star.x > canvas.width && star.y > canvas.height) {
        Object.assign(star, createStar())
        star.trail = []
      }
    }

    function drawStar(star: Star) {
      if (!ctx || !canvas) return

      ctx.beginPath()
      ctx.moveTo(star.x, star.y)

      // Draw trail
      if (star.trail.length > 1) {
        ctx.lineWidth = 2
        ctx.strokeStyle = `rgba(255, 255, 255, ${star.opacity})`
        
        ctx.beginPath()
        ctx.moveTo(star.trail[0][0], star.trail[0][1])
        
        for (let i = 1; i < star.trail.length; i++) {
          ctx.lineTo(star.trail[i][0], star.trail[i][1])
        }
        
        ctx.stroke()
      }
    }

    // Initialize stars
    for (let i = 0; i < maxStars; i++) {
      stars.push(createStar())
    }

    function animate() {
      if (!ctx || !canvas) return

      ctx.fillStyle = 'rgba(0, 0, 0, 0.1)'
      ctx.fillRect(0, 0, canvas.width, canvas.height)

      stars.forEach(star => {
        moveStar(star)
        drawStar(star)
      })

      requestAnimationFrame(animate)
    }

    animate()

    return () => {
      window.removeEventListener('resize', resizeCanvas)
    }
  }, [])

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 w-full h-full pointer-events-none"
      style={{ zIndex: -5 }}
    />
  )
}
