"use client";

import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { useState } from "react";
import Image from "next/image";

interface Skill {
  name: string;
  icon: string;
  category: string;
}

interface SkillsCarouselProps {
  skills: Skill[];
}

export function SkillsCarousel({ skills }: SkillsCarouselProps) {
  const [isPaused, setIsPaused] = useState(false);

  // Duplicate skills array to create seamless loop
  const duplicatedSkills = [...skills, ...skills, ...skills];

  return (
    <div className="relative overflow-hidden">
      {/* Gradient overlays for smooth edges */}
      <div className="absolute left-0 top-0 z-10 h-full w-20 bg-gradient-to-r from-muted/50 to-transparent pointer-events-none" />
      <div className="absolute right-0 top-0 z-10 h-full w-20 bg-gradient-to-l from-muted/50 to-transparent pointer-events-none" />

      <div
        className={`flex gap-6 ${isPaused ? "animate-none" : "animate-scroll"}`}
        onMouseEnter={() => setIsPaused(true)}
        onMouseLeave={() => setIsPaused(false)}
        style={{
          width: `${duplicatedSkills.length * 100}px`,
        }}
      >
        {duplicatedSkills.map((skill, index) => {
          const Icon = skill.icon;
          return (
            <Card
              key={`${skill.name}-${index}`}
              className="flex-shrink-0 w-44 hover:shadow-lg transition-all duration-300 hover:-translate-y-1 hover:scale-105"
            >
              <CardContent className="p-6 text-center">
                <Image
                  src={skill.icon}
                  alt={skill.name}
                  width={48}
                  height={48}
                  className="mx-auto mb-4"
                />
                <h3 className="font-semibold mb-2 text-sm">{skill.name}</h3>
                <Badge variant="secondary" className="text-xs">
                  {skill.category}
                </Badge>
              </CardContent>
            </Card>
          );
        })}
      </div>

      {/* Pause indicator */}
      {isPaused && (
        <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 z-20">
          <div className="bg-background/80 backdrop-blur-sm px-3 py-1 rounded-full text-xs text-muted-foreground">
            Hover to pause
          </div>
        </div>
      )}
    </div>
  );
}
