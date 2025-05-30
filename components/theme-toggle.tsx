"use client"

import * as React from "react"
import { Moon, Sun } from "lucide-react"
import { useTheme } from "next-themes"

export function ThemeToggle() {
  const { theme, setTheme } = useTheme()

  return (
    <button
      onClick={() => setTheme(theme === "light" ? "dark" : "light")}
      className="relative flex items-center justify-center rounded-lg p-2 hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
      style={{ width: 36, height: 36 }}
    >
      <Sun className="h-5 w-5 transition-all dark:-rotate-90 dark:scale-0" />
      <Moon className="absolute h-5 w-5 transition-all rotate-90 scale-0 dark:rotate-0 dark:scale-100" style={{ top: '50%', left: '50%', transform: 'translate(-50%, -50%)' }} />
      <span className="sr-only">Toggle theme</span>
    </button>
  )
} 