"use client"

import Link from "next/link"
import Image from "next/image"
import { cn } from "@/lib/utils"
import { useTheme } from "next-themes"
import { useEffect, useState } from "react"

export function SiteLogo({
  className,
  variant = "default",
}: {
  className?: string
  variant?: "default" | "light"
}) {
  const { resolvedTheme } = useTheme()
  const [mounted, setMounted] = useState(false)

  useEffect(() => setMounted(true), [])

  const isDark = mounted && resolvedTheme === "dark"
  const needsLightLogo = isDark || variant === "light"

  return (
    <Link href="/" className={cn("flex items-center gap-2.5", className)} aria-label="Webgex — página inicial">
      <Image
        src={needsLightLogo ? "/logo-webgex-branca.png" : "/logo-webgex.png"}
        alt="Webgex"
        width={130}
        height={42}
        className="h-9 w-auto"
        priority
      />
    </Link>
  )
}
