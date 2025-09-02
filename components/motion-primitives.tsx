"use client"

import type { PropsWithChildren } from "react"
import { motion, useReducedMotion } from "framer-motion"

type Classed = { className?: string }
type Indexed = { index?: number }

export function MotionContainer({ children, className }: PropsWithChildren<Classed>) {
  const prefersReduced = useReducedMotion()
  if (prefersReduced) {
    return <div className={className}>{children}</div>
  }
  return (
    <motion.div
      className={className}
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.35, ease: "easeOut" }}
    >
      {children}
    </motion.div>
  )
}

export function MotionCard({ children, className, index = 0 }: PropsWithChildren<Classed & Indexed>) {
  const prefersReduced = useReducedMotion()
  if (prefersReduced) {
    return <div className={className}>{children}</div>
  }
  return (
    <motion.div
      className={className}
      initial={{ opacity: 0, y: 18 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.4, ease: "easeOut", delay: index * 0.04 }}
      whileHover={{ y: -2, scale: 1.01 }}
    >
      {children}
    </motion.div>
  )
}

export function MotionLi({ children, className, index = 0 }: PropsWithChildren<Classed & Indexed>) {
  const prefersReduced = useReducedMotion()
  if (prefersReduced) {
    return <li className={className}>{children}</li>
  }
  return (
    <motion.li
      className={className}
      initial={{ opacity: 0, y: 12 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.3, ease: "easeOut", delay: index * 0.03 }}
      whileHover={{ x: 2 }}
    >
      {children}
    </motion.li>
  )
}
