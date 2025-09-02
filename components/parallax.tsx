"use client"

import type React from "react"

import { motion, useScroll, useTransform } from "framer-motion"
import { useEffect, useRef, useState } from "react"
import { cn } from "@/lib/utils"

type Props = {
  className?: string
  speed?: number // px delta over scroll progress [0..1], negative = opposite direction
  axis?: "y" | "x"
  children: React.ReactNode
}

export default function Parallax({ className, speed = -30, axis = "y", children }: Props) {
  const ref = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"], // animate while element passes through viewport
  })

  const [reduce, setReduce] = useState(false)
  useEffect(() => {
    if (typeof window === "undefined") return
    const mq = window.matchMedia("(prefers-reduced-motion: reduce)")
    const apply = () => setReduce(mq.matches)
    apply()
    // Safari/old Chrome support
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const add = (mq as any).addEventListener ? "addEventListener" : "addListener"
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const remove = (mq as any).removeEventListener ? "removeEventListener" : "removeListener"
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    ;(mq as any)[add]("change", apply)
    return () => {
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      ;(mq as any)[remove]("change", apply)
    }
  }, [])

  const t = useTransform(scrollYProgress, [0, 1], [0, speed])
  const style = reduce ? undefined : axis === "y" ? { y: t } : { x: t }

  return (
    <motion.div ref={ref} style={style} className={cn("will-change-transform", className)}>
      {children}
    </motion.div>
  )
}
