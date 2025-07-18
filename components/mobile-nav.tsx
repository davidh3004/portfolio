"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import { Menu } from "lucide-react"
import { ThemeToggle } from "@/components/theme-toggle"

export function MobileNav() {
  const [open, setOpen] = useState(false)

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId)
    if (element) {
      const offsetTop = element.offsetTop - 80
      window.scrollTo({
        top: offsetTop,
        behavior: "smooth",
      })
      setOpen(false) // Close mobile menu after navigation
    }
  }

  return (
    <Sheet open={open} onOpenChange={setOpen}>
      <SheetTrigger asChild>
        <Button variant="ghost" size="icon" className="md:hidden">
          <Menu className="h-5 w-5" />
          <span className="sr-only">Toggle menu</span>
        </Button>
      </SheetTrigger>
      <SheetContent side="right" className="w-[300px] sm:w-[400px]">
        <div className="flex flex-col space-y-4 mt-8">
          <button
            onClick={() => scrollToSection("about")}
            className="text-left text-lg font-medium hover:text-primary transition-colors py-2"
          >
            About
          </button>
          <button
            onClick={() => scrollToSection("skills")}
            className="text-left text-lg font-medium hover:text-primary transition-colors py-2"
          >
            Skills
          </button>
          <button
            onClick={() => scrollToSection("soft-skills")}
            className="text-left text-lg font-medium hover:text-primary transition-colors py-2"
          >
            Soft Skills
          </button>
          <button
            onClick={() => scrollToSection("projects")}
            className="text-left text-lg font-medium hover:text-primary transition-colors py-2"
          >
            Projects
          </button>
          <button
            onClick={() => scrollToSection("contact")}
            className="text-left text-lg font-medium hover:text-primary transition-colors py-2"
          >
            Contact
          </button>
          <div className="pt-4 border-t">
            <div className="flex items-center justify-between">
              <span className="text-sm font-medium">Theme</span>
              <ThemeToggle />
            </div>
          </div>
        </div>
      </SheetContent>
    </Sheet>
  )
}
