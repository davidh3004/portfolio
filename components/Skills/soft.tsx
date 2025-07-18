import React from "react";
import { AnimatedSection } from "../animated-section";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  Users,
  MessageCircle,
  Lightbulb,
  Target,
  Clock,
  Puzzle,
} from "lucide-react";

export default function soft() {
  const softSkills = [
    {
      name: "Colaboración",
      icon: Users,
      description:
        "Trabajar efectivamente con equipos multifuncionales y contribuir al éxito del grupo",
      color: "bg-blue-500/10 text-blue-600 dark:text-blue-400",
    },
    {
      name: "Comunicación",
      icon: MessageCircle,
      description:
        "Comunicación técnica clara y capacidad para explicar conceptos complejos de manera sencilla",
      color: "bg-green-500/10 text-green-600 dark:text-green-400",
    },
    {
      name: "Resolución de problemas",
      icon: Puzzle,
      description:
        "Pensamiento analítico y enfoques creativos para depuración y optimización",
      color: "bg-purple-500/10 text-purple-600 dark:text-purple-400",
    },
    {
      name: "Adaptabilidad",
      icon: Lightbulb,
      description:
        "Aprendizaje rápido de nuevas tecnologías y adaptación a cambios en los requisitos",
      color: "bg-orange-500/10 text-orange-600 dark:text-orange-400",
    },
    {
      name: "Orientado a objetivos",
      icon: Target,
      description:
        "Establecer objetivos claros y entregar resultados a tiempo",
      color: "bg-red-500/10 text-red-600 dark:text-red-400",
    },
    {
      name: "Gestión del tiempo",
      icon: Clock,
      description:
        "Priorización eficiente de tareas y gestión de múltiples proyectos simultáneamente",
      color: "bg-indigo-500/10 text-indigo-600 dark:text-indigo-400",
    },
  ];
  return (
    <AnimatedSection
      id="Habilidades Blandas"
      className="px-4 py-12 md:py-24 w-full"
    >
      <div className="mx-auto max-w-6xl space-y-12">
        <div className="text-center space-y-4">
          <h2 className="text-3xl font-bold tracking-tighter md:text-4xl">
            Habilidades Blandas
          </h2>
          <p className="text-lg text-muted-foreground">
            Personalidades que me impulsan a ser un profesional exitoso
          </p>
        </div>
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3 w-full">
          {softSkills.map((skill, index) => {
            const Icon = skill.icon;
            return (
              <AnimatedSection
                key={skill.name}
                animation="fade-up"
                delay={index * 50}
                className="h-full w-full"
              >
                <Card className="hover:shadow-lg transition-all duration-300 hover:-translate-y-1 h-full w-full">
                  <CardHeader className="pb-4">
                    <div
                      className={`w-12 h-12 rounded-lg ${skill.color} flex items-center justify-center mb-4`}
                    >
                      <Icon className="h-6 w-6" />
                    </div>
                    <CardTitle className="text-xl">{skill.name}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <CardDescription className="text-base leading-relaxed">
                      {skill.description}
                    </CardDescription>
                  </CardContent>
                </Card>
              </AnimatedSection>
            );
          })}
        </div>
      </div>
    </AnimatedSection>
  );
}
