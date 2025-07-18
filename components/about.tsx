import React from "react";
import { AnimatedSection } from "./animated-section";

export default function about() {
  return (
    <AnimatedSection
      id="Sobre mi"
      className="px-4 sm:px-6 lg:px-8 py-12 sm:py-16 md:py-20 lg:py-24"
    >
      <div className="mx-auto max-w-2xl lg:max-w-3xl text-center space-y-6 sm:space-y-8">
        <h2 className="text-3xl font-bold tracking-tighter md:text-4xl">
          Sobre mi
        </h2>
        <div className="space-y-4 sm:space-y-6 text-base sm:text-lg text-muted-foreground">
          <p>
            Soy un desarrollador apasionado que recientemente descubrió
            Next.js y React. Comencé al seguir cursos completos y construir
            proyectos reales como un dashboard interactivo para entender las prácticas
            de desarrollo web moderno. 
          </p>
          <p>
            Me encanta crear aplicaciones que sean fáciles de usar y que resuelvan
            problemas reales. Cuando no estoy programando, puedes encontrarme
            explorando nuevas tecnologías, contribuyendo a proyectos de código
            abierto, o compartiendo mi viaje de aprendizaje con la comunidad de
            desarrolladores.
          </p>
        </div>
      </div>
    </AnimatedSection>
  );
}
