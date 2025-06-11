"use client"

import { useEffect, useState, useRef } from "react"
import { cn } from "@/lib/utils"

interface StatCounterProps {
  end: number
  duration?: number
  suffix?: string
  className?: string
}

export default function StatCounter({ end, duration = 2000, suffix = "", className }: StatCounterProps) {
  const [count, setCount] = useState(0)
  const countRef = useRef<number>(0)
  const timerRef = useRef<number | null>(null)

  useEffect(() => {
    const startTime = Date.now()
    const endTime = startTime + duration

    const updateCount = () => {
      const now = Date.now()
      const progress = Math.min(1, (now - startTime) / duration)

      // Use easeOutQuad for smoother animation
      const easeOutQuad = (t: number) => t * (2 - t)
      const easedProgress = easeOutQuad(progress)

      const currentCount = Math.floor(easedProgress * end)

      if (currentCount !== countRef.current) {
        countRef.current = currentCount
        setCount(currentCount)
      }

      if (now < endTime) {
        timerRef.current = window.requestAnimationFrame(updateCount)
      } else {
        setCount(end)
      }
    }

    timerRef.current = window.requestAnimationFrame(updateCount)

    return () => {
      if (timerRef.current) {
        window.cancelAnimationFrame(timerRef.current)
      }
    }
  }, [end, duration])

  // Format the number with commas for thousands
  const formattedCount = count.toLocaleString()

  return (
    <span className={cn(className)}>
      {formattedCount}
      {suffix}
    </span>
  )
}
