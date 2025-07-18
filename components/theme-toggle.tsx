"use client"
import { Moon, Sun } from "lucide-react"
import { useTheme } from "next-themes"
import { Button } from "@/components/ui/button"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"

export function ThemeToggle() {
  const { theme, setTheme } = useTheme()

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="ghost" size="icon" className="relative">
          <Sun className="h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all duration-300 dark:-rotate-90 dark:scale-0" />
          <Moon className="absolute h-[1.2rem] w-[1.2rem] rotate-90 scale-0 transition-all duration-300 dark:rotate-0 dark:scale-100" />
          <span className="sr-only">Toggle theme</span>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end" className="bg-background text-foreground">
        <DropdownMenuItem onClick={() => setTheme("light")}> <Sun className="h-[1.2rem] w-[1.2rem] mr-2" /> Light</DropdownMenuItem>
        <DropdownMenuItem onClick={() => setTheme("dark")}> <Moon className="h-[1.2rem] w-[1.2rem] mr-2" /> Dark</DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  )
}
