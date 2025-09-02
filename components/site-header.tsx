"use client"

import Link from "next/link"
import { useEffect, useRef, useState } from "react"
import { cn } from "@/lib/utils"

export default function SiteHeader() {
  const lastY = useRef(0)
  const ticking = useRef(false)
  const [hidden, setHidden] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    lastY.current = window.scrollY

    const onScroll = () => {
      if (ticking.current) return
      ticking.current = true
      requestAnimationFrame(() => {
        const y = window.scrollY
        const delta = y - lastY.current

        // toggle shadow when not at top
        setScrolled(y > 4)

        // hide when scrolling down past 80px, show when scrolling up or near top
        const shouldHide = y > 80 && delta > 2
        const shouldShow = delta < -2 || y < 80
        setHidden((prev) => (shouldShow ? false : shouldHide ? true : prev))

        lastY.current = y
        ticking.current = false
      })
    }

    window.addEventListener("scroll", onScroll, { passive: true })
    return () => window.removeEventListener("scroll", onScroll)
  }, [])

  return (
    <header
      className={cn(
        "fixed top-0 z-30 w-full transition-transform duration-300 will-change-transform",
        hidden ? "-translate-y-full" : "translate-y-0",
      )}
      aria-label="Site header"
    >
      <div
        className={cn(
          "mx-auto max-w-5xl px-3 sm:px-6",
          // spacing box to hold the frosted header
          "h-16 flex items-center",
        )}
      >
        <div
          className={cn(
            "flex h-12 w-full items-center justify-between rounded-xl border px-3 sm:px-4",
            "bg-background/60 backdrop-blur supports-[backdrop-filter]:backdrop-blur",
            "transition-colors",
            scrolled ? "shadow-sm" : "",
          )}
        >
          <Link href="/" className="font-semibold">
            AthenaAgent
          </Link>
          <nav className="flex items-center gap-2 sm:gap-4 text-sm">
            <Link href="#proof" className="text-muted-foreground hover:text-foreground link-underline">
              Proof
            </Link>
            <Link href="#use-cases" className="text-muted-foreground hover:text-foreground link-underline">
              Use Cases
            </Link>
            <Link href="#enterprise" className="text-muted-foreground hover:text-foreground link-underline">
              Enterprise
            </Link>
            <Link href="#founder" className="text-muted-foreground hover:text-foreground link-underline">
              Founder
            </Link>
            <Link href="/blog" className="text-muted-foreground hover:text-foreground link-underline">
              Blog
            </Link>
          </nav>
        </div>
      </div>
    </header>
  )
}
