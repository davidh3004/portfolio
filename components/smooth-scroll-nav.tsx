"use client"

import { useState, useEffect } from "react"
import { ThemeToggle } from "@/components/theme-toggle"
import { MobileNav } from "@/components/mobile-nav"

export function SmoothScrollNav() {
  const [activeSection, setActiveSection] = useState("")

  useEffect(() => {
    const handleScroll = () => {
      const sections = ["Sobre mi", "Habilidades", "Habilidades Blandas", "Proyectos", "Contacto"]
      const scrollPosition = window.scrollY + 100

      for (const section of sections) {
        const element = document.getElementById(section)
        if (element) {
          const offsetTop = element.offsetTop
          const offsetHeight = element.offsetHeight

          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(section)
            break
          }
        }
      }
    }

    window.addEventListener("scroll", handleScroll)
    handleScroll() // Call once to set initial state

    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId)
    if (element) {
      const offsetTop = sectionId == "Sobre mi" ? element.offsetTop - 120 : element.offsetTop + 12 // Account for fixed navbar
      window.scrollTo({
        top: offsetTop,
        behavior: "smooth",
      })
    }
  }

  return (
    <nav className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="flex h-14 sm:h-16 items-center justify-between px-4 sm:px-6 lg:px-8">
        <div className="mr-4 flex items-center">
          <button
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            className="mr-6 sm:mr-6 flex items-center space-x-2 hover:text-primary transition-colors"
          >
            <span className="font-bold text-sm sm:text-base">David Henríquez</span>
          </button>
        </div>
        
        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center space-x-4 lg:space-x-6">
          <button
            onClick={() => scrollToSection("Sobre mi")}
            className={`text-sm font-medium hover:text-primary transition-colors ${
              activeSection === "Sobre mi" ? "text-primary" : ""
            }`}
          >
            Sobre mi
          </button>
          <button
            onClick={() => scrollToSection("Habilidades")}
            className={`text-sm font-medium hover:text-primary transition-colors ${
              activeSection === "Habilidades" ? "text-primary" : ""
            }`}
          >
            Habilidades
          </button>
          <button
            onClick={() => scrollToSection("Habilidades Blandas")}
            className={`text-sm font-medium hover:text-primary transition-colors ${
              activeSection === "Habilidades Blandas" ? "text-primary" : ""
            }`}
          >
            Habilidades Blandas
          </button>
          <button
            onClick={() => scrollToSection("Proyectos")}
            className={`text-sm font-medium hover:text-primary transition-colors ${
              activeSection === "Proyectos" ? "text-primary" : ""
            }`}
          >
            Proyectos
          </button>
          <button
              onClick={() => scrollToSection("Contacto")}
            className={`text-sm font-medium hover:text-primary transition-colors ${
              activeSection === "Contacto" ? "text-primary" : ""
            }`}
          >
            Contacto
          </button>
          <ThemeToggle />
        </div>

        {/* Mobile Navigation */}
        <div className="flex md:hidden items-center space-x-2">
          <ThemeToggle />
          <MobileNav />
        </div>
      </div>
    </nav>
  )
}
