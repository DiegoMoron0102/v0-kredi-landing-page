"use client"

import React from "react"
import { motion } from "framer-motion"

interface AnimatedTextProps {
  children: React.ReactNode
  className?: string
  delay?: number
  duration?: number
  direction?: "up" | "down" | "left" | "right" | "fade"
}

export function AnimatedText({ 
  children, 
  className = "", 
  delay = 0, 
  duration = 0.8,
  direction = "up"
}: AnimatedTextProps) {
  const getVariants = () => {
    const variants = {
      up: {
        hidden: { opacity: 0, y: 50 },
        visible: { opacity: 1, y: 0 }
      },
      down: {
        hidden: { opacity: 0, y: -50 },
        visible: { opacity: 1, y: 0 }
      },
      left: {
        hidden: { opacity: 0, x: -50 },
        visible: { opacity: 1, x: 0 }
      },
      right: {
        hidden: { opacity: 0, x: 50 },
        visible: { opacity: 1, x: 0 }
      },
      fade: {
        hidden: { opacity: 0 },
        visible: { opacity: 1 }
      }
    }
    
    return variants[direction]
  }

  return (
    <motion.div
      className={className}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.3 }}
      transition={{ 
        duration,
        delay,
        ease: [0.25, 0.25, 0.25, 0.75]
      }}
      variants={getVariants()}
    >
      {children}
    </motion.div>
  )
}

interface TypewriterTextProps {
  text: string
  className?: string
  delay?: number
  speed?: number
}

export function TypewriterText({ text, className = "", delay = 0, speed = 0.1 }: TypewriterTextProps) {
  return (
    <motion.div
      className={className}
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ delay }}
    >
      {text.split("").map((char, index) => (
        <motion.span
          key={index}
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{
            delay: delay + index * speed,
            duration: 0.1
          }}
        >
          {char === " " ? "\u00A0" : char}
        </motion.span>
      ))}
    </motion.div>
  )
}

interface FadeInSectionProps {
  children: React.ReactNode
  className?: string
  delay?: number
}

export function FadeInSection({ children, className = "", delay = 0 }: FadeInSectionProps) {
  return (
    <motion.div
      className={className}
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.1 }}
      transition={{
        duration: 0.8,
        delay,
        ease: "easeOut"
      }}
    >
      {children}
    </motion.div>
  )
}
