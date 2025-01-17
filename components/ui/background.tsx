'use client'

import { useEffect, useRef } from 'react'

class Particle {
  x: number
  y: number
  size: number
  speedX: number
  speedY: number
  opacity: number
  glowSize: number

  constructor(canvas: HTMLCanvasElement) {
    this.x = Math.random() * canvas.width
    this.y = Math.random() * canvas.height
    this.size = Math.random() * 3 + 1
    this.speedX = Math.random() * 0.3 - 0.15
    this.speedY = Math.random() * 0.3 - 0.15
    this.opacity = Math.random() * 0.5 + 0.2
    this.glowSize = this.size * 2
  }

  update(canvas: HTMLCanvasElement) {
    this.x += this.speedX
    this.y += this.speedY

    if (this.x > canvas.width) this.x = 0
    if (this.x < 0) this.x = canvas.width
    if (this.y > canvas.height) this.y = 0
    if (this.y < 0) this.y = canvas.height
  }

  draw(ctx: CanvasRenderingContext2D) {
    ctx.beginPath()
    const gradient = ctx.createRadialGradient(
      this.x, this.y, 0,
      this.x, this.y, this.glowSize
    )
    gradient.addColorStop(0, `rgba(147, 197, 153, ${this.opacity})`)
    gradient.addColorStop(1, 'rgba(147, 197, 153, 0)')
    
    ctx.fillStyle = gradient
    ctx.arc(this.x, this.y, this.glowSize, 0, Math.PI * 2)
    ctx.fill()

    ctx.beginPath()
    ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2)
    ctx.fillStyle = `rgba(147, 197, 153, ${this.opacity + 0.2})`
    ctx.fill()
  }
}

export function Background() {
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

    // Particle system
    const particles: Particle[] = []
    const particleCount = 100
    const connectionDistance = 150

    // Initialize particles
    for (let i = 0; i < particleCount; i++) {
      particles.push(new Particle(canvas))
    }

    // Draw connections between particles
    function drawConnections() {
      if (!ctx || !canvas) return
      particles.forEach((p1, i) => {
        particles.slice(i + 1).forEach(p2 => {
          const dx = p1.x - p2.x
          const dy = p1.y - p2.y
          const distance = Math.sqrt(dx * dx + dy * dy)

          if (distance < connectionDistance) {
            const opacity = (1 - distance / connectionDistance) * 0.15
            ctx.beginPath()
            ctx.moveTo(p1.x, p1.y)
            ctx.lineTo(p2.x, p2.y)
            ctx.strokeStyle = `rgba(147, 197, 153, ${opacity})`
            ctx.lineWidth = 1
            ctx.stroke()
          }
        })
      })
    }

    // Animation loop
    const animate = () => {
      if (!ctx || !canvas) return
      
      ctx.fillStyle = 'rgba(10, 21, 10, 0.1)'
      ctx.fillRect(0, 0, canvas.width, canvas.height)
      
      // Create dark gradient background
      const gradient = ctx.createRadialGradient(
        canvas.width / 2,
        canvas.height / 2,
        0,
        canvas.width / 2,
        canvas.height / 2,
        canvas.width
      )
      gradient.addColorStop(0, 'rgba(19, 42, 19, 0.95)')
      gradient.addColorStop(0.5, 'rgba(10, 21, 10, 0.98)')
      gradient.addColorStop(1, 'rgba(8, 16, 8, 1)')
      ctx.fillStyle = gradient
      ctx.fillRect(0, 0, canvas.width, canvas.height)

      // Draw subtle grid
      ctx.strokeStyle = 'rgba(147, 197, 153, 0.05)'
      ctx.lineWidth = 0.5
      const gridSize = 100
      for (let x = 0; x < canvas.width; x += gridSize) {
        ctx.beginPath()
        ctx.moveTo(x, 0)
        ctx.lineTo(x, canvas.height)
        ctx.stroke()
      }
      for (let y = 0; y < canvas.height; y += gridSize) {
        ctx.beginPath()
        ctx.moveTo(0, y)
        ctx.lineTo(canvas.width, y)
        ctx.stroke()
      }

      // Update and draw particles
      particles.forEach(particle => {
        particle.update(canvas)
        particle.draw(ctx)
      })

      // Draw connections
      drawConnections()

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
      className="fixed inset-0 w-full h-full -z-10"
    />
  )
}
