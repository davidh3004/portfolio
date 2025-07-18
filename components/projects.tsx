import { AnimatedSection } from "./animated-section";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import Image from "next/image";
import { Github, ExternalLink } from "lucide-react";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function projects() {
  const projects = [
    // {
    //   title: "Netflix Clone",
    //   description:
    //     "A full-stack Netflix clone built with Next.js, featuring user authentication, video streaming, and responsive design.",
    //   image: "/placeholder.svg?height=200&width=400",
    //   technologies: ["Next.js", "Prisma", "Tailwind CSS", "Authentication"],
    //   github: "https://github.com/davidh3004/Netflix-Clone",
    //   demo: "https://your-netflix-clone.vercel.app",
    // },
    {
      title: "ACME Dashboard",
      description:
        "Dashboard moderno para gestionar productos, pedidos y análisis con visualización de datos en tiempo real.",
      image: "/hero-desktop.png",
      technologies: ["Next.js", "TypeScript", "Vercel", "PostgreSQL"],
      github: "https://github.com/davidh3004/NextJS-Tutorial",
      demo: "https://next-js-tutorial-six-sandy-20.vercel.app/",
    },
    {
      title: "TV Show Finder",
      description:
        "Aplicación de búsqueda de series de televisión con funcionalidades de filtrado y búsqueda.",
      image: "/tv-show.png?height=200&width=400",
      technologies: ["React", "Node.js", "MongoDB", "Socket.io"],
      github: "https://github.com/davidh3004/TV-Show-Finder",
      demo: "https://tv-show-finder-seven.vercel.app/",
    },
  ];

  return (
    <AnimatedSection
      id="Proyectos"
      className="px-4 py-12 md:py-24 bg-muted/50 w-full"
    >
      <div className="mx-auto max-w-6xl space-y-12">
        <div className="text-center space-y-4">
          <h2 className="text-3xl font-bold tracking-tighter md:text-4xl">
            Proyectos destacados
          </h2>
          <p className="text-lg text-muted-foreground">
            Algunos de los proyectos que he construido mientras aprendía Next.js y React.
          </p>
        </div>
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3 w-full">
          {projects.map((project, index) => (
            <AnimatedSection
              key={project.title}
              animation="fade-up"
              delay={index * 200}
              className="h-full w-full"
            >
              <Card className="overflow-hidden hover:shadow-lg transition-all duration-300 hover:-translate-y-1 h-full flex flex-col">
                <div className="aspect-video relative overflow-hidden w-full">
                  <Image
                    src={project.image || "/placeholder.svg"}
                    alt={project.title}
                    fill
                    className="object-cover"
                  />
                </div>
                <CardHeader className="flex-grow">
                  <CardTitle>{project.title}</CardTitle>
                  <CardDescription>{project.description}</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4 mt-auto">
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech) => (
                      <Badge key={tech} variant="secondary">
                        {tech}
                      </Badge>
                    ))}
                  </div>
                  <div className="flex gap-2">
                    <Button variant="outline" size="sm" asChild>
                      <Link href={project.github} target="_blank">
                        <Github className="h-4 w-4 mr-2" />
                        Code
                      </Link>
                    </Button>
                    <Button size="sm" asChild>
                      <Link href={project.demo} target="_blank">
                        <ExternalLink className="h-4 w-4 mr-2" />
                        Demo
                      </Link>
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </AnimatedSection>
  );
}
