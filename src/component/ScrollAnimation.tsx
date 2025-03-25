"use client"

import type { ReactNode } from "react"
import { motion, useInView } from "framer-motion"
import { useRef } from "react"

type ScrollAnimationProps = {
  children: ReactNode
  className?: string
  delay?: number
  direction?: "up" | "down" | "left" | "right"
  duration?: number
  once?: boolean
}

export default function ScrollAnimation({
  children,
  className = "",
  delay = 0,
  direction = "up",
  duration = 0.5,
  once = true,
}: ScrollAnimationProps) {
  const ref = useRef(null)
  const isInView = useInView(ref, { once, amount: 0.3 })

  const directionOffset = {
    up: { y: 50 },
    down: { y: -50 },
    left: { x: 50 },
    right: { x: -50 },
  }

  const initialAnimation = {
    opacity: 0,
    ...directionOffset[direction],
  }

  return (
    <motion.div
      ref={ref}
      initial={initialAnimation}
      animate={isInView ? { opacity: 1, x: 0, y: 0 } : initialAnimation}
      transition={{ duration, delay }}
      className={className}
    >
      {children}
    </motion.div>
  )
}

