"use client"

import * as React from "react"
import { Moon, Sun } from "lucide-react"
import { useTheme } from "next-themes"
import { Button } from "@/components/ui/button"

export function ModeToggle() {
  const { theme, setTheme } = useTheme()
  const [mounted, setMounted] = React.useState(false)

  React.useEffect(() => {
    setMounted(true) // Ensures theme is loaded on client
  }, [])

  if (!mounted) {
    return <Button variant="outline" size="default" aria-label="Loading theme..." />
  }

  return (
    <Button  className="w-full bg-yellow-100 rounded-none hover:bg-yellow-600"  onClick={() => setTheme(theme === "light" ? "dark" : "light")}>
      {theme === "light" ? (
        <Moon className=" transition-all"/>
      ) : (
        <Sun className=" transition-all"/>
      )}
      {theme === 'dark' ? 'Light Mode' : 'Dark Mode'}
    </Button>
  )
}
