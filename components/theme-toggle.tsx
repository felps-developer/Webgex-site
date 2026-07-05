"use client"

import { useTheme } from "next-themes"
import { Button } from "@/components/ui/button"
import { Sun, Moon, Monitor } from "lucide-react"
import { cn } from "@/lib/utils"
import { useEffect, useState } from "react"

const themes = [
  { key: "light", label: "Modo claro", icon: Sun },
  { key: "dark", label: "Modo escuro", icon: Moon },
  { key: "system", label: "Sistema", icon: Monitor },
] as const

export function ThemeToggle() {
  const { theme, setTheme } = useTheme()
  const [mounted, setMounted] = useState(false)

  useEffect(() => setMounted(true), [])

  if (!mounted) {
    return (
      <Button variant="ghost" size="icon" disabled aria-label="Carregando tema">
        <Sun className="h-5 w-5" />
      </Button>
    )
  }

  const currentIndex = themes.findIndex((t) => t.key === theme)
  const nextTheme = themes[(currentIndex + 1) % themes.length]

  return (
    <Button
      variant="ghost"
      size="icon"
      onClick={() => setTheme(nextTheme.key)}
      aria-label={`Tema atual: ${themes[currentIndex]?.label}. Alterar para: ${nextTheme.label}`}
      className="text-muted-foreground hover:text-foreground"
    >
      {themes.map((t) => {
        const Icon = t.icon
        return (
          <Icon
            key={t.key}
            className={cn(
              "h-5 w-5",
              t.key === theme ? "block" : "hidden",
            )}
          />
        )
      })}
    </Button>
  )
}
