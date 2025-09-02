"use client"

import * as React from "react"
import { cn } from "@/lib/utils"

type Props = React.HTMLAttributes<HTMLDivElement>

export default function Reveal({ className, children, ...rest }: Props) {
  const ref = React.useRef<HTMLDivElement | null>(null)
  const [inView, setInView] = React.useState(false)

  React.useEffect(() => {
    if (!ref.current) return

    const el = ref.current
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setInView(true)
            observer.unobserve(entry.target)
          }
        })
      },
      { rootMargin: "0px 0px -10% 0px", threshold: 0.15 },
    )

    observer.observe(el)
    return () => observer.disconnect()
  }, [])

  return (
    <div ref={ref} className={cn("reveal", inView && "in", className)} {...rest}>
      {children}
    </div>
  )
}
