import React from "react";
import { AnimatedSection } from "../animated-section";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import Image from "next/image";
import { SkillsCarousel } from "./carousel";

export default function technical() {
  const skills = [
    {
      name: "Next.js",
      icon: "/nextjs-icon-svgrepo-com.svg",
      category: "Frontend",
    },
    { name: "React", icon: "/icons8-react.svg", category: "Frontend" },
    {
      name: "TypeScript",
      icon: "/icons8-typescript.svg",
      category: "Frontend",
    },
    {
      name: "Tailwind CSS",
      icon: "/icons8-tailwind-css.svg",
      category: "Frontend",
    },
    { name: "Node.js", icon: "/icons8-node-js.svg", category: "Backend" },
    { name: "PostgreSQL", icon: "/icons8-postgresql.svg", category: "Backend" },
    { name: "Vercel", icon: "/vercel.svg", category: "Deployment" },
    { name: "Git", icon: "/icons8-git.svg", category: "Tools" },
  ];

  return (
    <AnimatedSection
      id="Habilidades"
      className="px-4 sm:px-6 lg:px-8 py-12 sm:py-16 md:py-20 lg:py-24 bg-muted/50"
    >
      <div className="mx-auto max-w-6xl space-y-12">
        <div className="text-center space-y-4">
          <h2 className="text-3xl font-bold tracking-tighter md:text-4xl">
            Habilidades Técnicas
          </h2>
          <p className="text-lg text-muted-foreground">
            Tecnologías que he estado aprendiendo y trabajando
          </p>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 w-full">
          {skills.map((skill, index) => (
            <AnimatedSection
              key={skill.name}
              animation="fade-up"
              delay={index * 50}
              className="text-center w-full"
            >
              <Card className="p-6 hover:shadow-lg transition-shadow h-full w-full">
                <CardContent className="pt-6">
                  <Image
                    src={skill.icon}
                    alt={skill.name}
                    width={48}
                    height={48}
                    className="mx-auto mb-4"
                  />
                  <h3 className="font-semibold mb-2">{skill.name}</h3>
                  <Badge variant="secondary">{skill.category}</Badge>
                </CardContent>
              </Card>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </AnimatedSection>
  );
}
