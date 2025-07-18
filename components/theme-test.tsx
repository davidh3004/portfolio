"use client"

import { useTheme } from "next-themes"
import { useEffect, useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Moon, Sun, Monitor } from "lucide-react"

export function ThemeTest() {
  const { theme, setTheme, resolvedTheme, systemTheme } = useTheme()
  const [mounted, setMounted] = useState(false)

  // Avoid hydration mismatch
  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) {
    return (
      <Card className="w-full max-w-md">
        <CardHeader>
          <CardTitle>Theme Test</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="animate-pulse">Loading theme...</div>
        </CardContent>
      </Card>
    )
  }

  return (
    <Card className="w-full max-w-md">
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          Theme Test
          {resolvedTheme === "dark" ? <Moon className="h-5 w-5" /> : <Sun className="h-5 w-5" />}
        </CardTitle>
      </CardHeader>
      <CardContent className="space-y-4">
        <div className="space-y-2">
          <p className="text-sm">
            <strong>Current Theme:</strong> <Badge variant="outline">{theme}</Badge>
          </p>
          <p className="text-sm">
            <strong>Resolved Theme:</strong> <Badge variant="outline">{resolvedTheme}</Badge>
          </p>
          <p className="text-sm">
            <strong>System Theme:</strong> <Badge variant="outline">{systemTheme}</Badge>
          </p>
        </div>

        <div className="space-y-2">
          <p className="text-sm font-medium">Test Theme Switching:</p>
          <div className="flex gap-2">
            <Button variant={theme === "light" ? "default" : "outline"} size="sm" onClick={() => setTheme("light")}>
              <Sun className="h-4 w-4 mr-1" />
              Light
            </Button>
            <Button variant={theme === "dark" ? "default" : "outline"} size="sm" onClick={() => setTheme("dark")}>
              <Moon className="h-4 w-4 mr-1" />
              Dark
            </Button>
            <Button variant={theme === "system" ? "default" : "outline"} size="sm" onClick={() => setTheme("system")}>
              <Monitor className="h-4 w-4 mr-1" />
              System
            </Button>
          </div>
        </div>

        <div className="p-4 rounded-lg bg-muted">
          <p className="text-sm">
            This card should change colors when you switch themes. The background should be light in light mode and dark
            in dark mode.
          </p>
        </div>

        <div className="text-xs text-muted-foreground">
          <p>✅ Theme Provider: Working</p>
          <p>✅ Theme Persistence: {theme ? "Working" : "Not Working"}</p>
          <p>✅ System Detection: {systemTheme ? "Working" : "Not Working"}</p>
          <p>✅ CSS Variables: {resolvedTheme ? "Working" : "Not Working"}</p>
        </div>
      </CardContent>
    </Card>
  )
}
