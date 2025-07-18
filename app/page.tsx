"use client";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  Github,
  Linkedin,
  Mail,
  ExternalLink,
  Code,
  Palette,
  Database,
  Globe,
  Users,
  MessageCircle,
  Lightbulb,
  Target,
  Clock,
  Puzzle,
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { SmoothScrollNav } from "@/components/smooth-scroll-nav";
import { AnimatedSection } from "@/components/animated-section";
import { ThemeTest } from "@/components/theme-test";
import Soft from "@/components/Skills/soft";
import Technical from "@/components/Skills/technical";
import About from "@/components/about";
import ButtonsContact from "@/components/buttons-contact";
import Projects from "@/components/projects";
import Contact from "@/components/contact";
import { SkillsCarousel } from "@/components/Skills/carousel";

export default function Portfolio() {
  return (
    <div className="min-h-screen bg-background">
      <SmoothScrollNav />

      {/* Hero Section */}
      <section className="px-4 sm:px-6 lg:px-8 py-12 sm:py-16 md:py-20 lg:py-24">
        <AnimatedSection className="flex flex-col items-center text-center space-y-8">
          <div className="space-y-4">
            <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl">
              Hi, I'm{" "}
              <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                David Henríquez
              </span>
            </h1>
            <p className="mx-auto max-w-[600px] lg:max-w-[700px] text-base sm:text-lg md:text-xl">
              Front-End Developer apasionado por crear experiencias web
              increíbles con Next.js y React. Actualmente aprendiendo y
              construyendo proyectos para dominar el desarrollo web moderno.
              Me gusta aprender nuevas tecnologías y aplicar mis conocimientos
              en proyectos reales.
            </p>
          </div>
          <div className="flex flex-col gap-3 sm:flex-row sm:gap-4">
            <Button
              size="lg"
              onClick={() =>
                document
                  .getElementById("Proyectos")
                  ?.scrollIntoView({ behavior: "smooth" })
              }
            >
              Ver mis trabajos
            </Button>
            <Button
              variant="outline"
              size="lg"
              onClick={() =>
                document
                  .getElementById("Contacto")
                  ?.scrollIntoView({ behavior: "smooth" })
              }
            >
              Contactar
            </Button>
          </div>
          <div className="flex items-center justify-center space-x-3 sm:space-x-4">
            <Button variant="ghost" size="icon" asChild>
              <Link href="https://github.com/davidh3004" target="_blank">
                <Github className="h-5 w-5" />
                <span className="sr-only">GitHub</span>
              </Link>
            </Button>
            <Button variant="ghost" size="icon" asChild>
              <Link
                href="https://linkedin.com/in/david-henriquez-96a59823b/"
                target="_blank"
              >
                <Linkedin className="h-5 w-5" />
                <span className="sr-only">LinkedIn</span>
              </Link>
            </Button>
            <Button variant="ghost" size="icon" asChild>
              <Link href="mailto:henriquezdavid3004@gmail.com">
                <Mail className="h-5 w-5" />
                <span className="sr-only">Email</span>
              </Link>
            </Button>
          </div>
        </AnimatedSection>
      </section>
      <About />
      <Technical />
      <Soft />
      <Projects />
      <Contact />

      {/* Footer */}
      <footer className="border-t py-6 sm:py-10 md:py-8">
        <div className="px-4 text-center text-muted-foreground">
          <p>
            &copy; 2025 David Henríquez
          </p>
        </div>
      </footer>
    </div>
  );
}
