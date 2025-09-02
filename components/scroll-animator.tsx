"use client"

import { useEffect } from "react"

type Props = {
  ids?: string[]
  threshold?: number
  rootMargin?: string
  stagger?: number
  hoverLift?: boolean
}

export default function ScrollAnimator({
  ids = ["problem", "solution", "process", "use-cases", "resources", "technical", "cta"],
  threshold = 0.15,
  rootMargin = "0px 0px -10% 0px",
  stagger = 70,
  hoverLift = true,
}: Props) {
  useEffect(() => {
    if (typeof window === "undefined") return

    const reduce = window.matchMedia?.("(prefers-reduced-motion: reduce)")?.matches
    if (reduce) return

    const sections = ids.map((id) => document.getElementById(id)).filter((el): el is HTMLElement => Boolean(el))

    const targets: HTMLElement[] = []
    sections.forEach((section) => {
      section.classList.add("sa-scope")
      const directChildren = Array.from(section.querySelectorAll(":scope > *")) as HTMLElement[]
      directChildren.forEach((child, idx) => {
        child.classList.add("sa-reveal")
        if (hoverLift) child.classList.add("sa-hover")
        child.style.setProperty("--sa-delay", `${idx * stagger}ms`)
        targets.push(child)
      })
    })

    if (!targets.length) return

    const io = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          const el = entry.target as HTMLElement
          if (entry.isIntersecting) {
            const delay = Number.parseInt(el.style.getPropertyValue("--sa-delay") || "0", 10)
            const t = window.setTimeout(() => {
              el.classList.add("sa-show")
            }, delay)
            ;(el as any).__sa_t__ = t
            io.unobserve(el)
          }
        }
      },
      { threshold, rootMargin },
    )

    targets.forEach((t) => io.observe(t))

    return () => {
      io.disconnect()
      targets.forEach((el) => {
        const t = (el as any).__sa_t__
        if (t) window.clearTimeout(t)
      })
    }
  }, [ids, threshold, rootMargin, stagger, hoverLift])

  return null
}
