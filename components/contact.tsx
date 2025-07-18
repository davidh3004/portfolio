import React from "react";
import { AnimatedSection } from "./animated-section";
import { Button } from "./ui/button";
import Link from "next/link";
import { Mail, Linkedin } from "lucide-react";

export default function contact() {
  return (
    <AnimatedSection
      id="Contacto"
      className="px-4 py-12 md:py-24 w-full"
    >
      <div className="mx-auto max-w-2xl text-center space-y-8">
        <h2 className="text-3xl font-bold tracking-tighter md:text-4xl">
          Trabajemos juntos
        </h2>
        <p className="text-lg text-muted-foreground">
          Estoy siempre interesado en nuevas oportunidades y colaboraciones. Si
          quieres trabajar juntos, no dudes en contactarme.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center w-full">
          <Button size="lg" asChild>
            <Link href="mailto:henriquezdavid3004@gmail.com">
              <Mail className="h-5 w-5 mr-2" />
              Enviar correo electrónico
            </Link>
          </Button>
          <Button variant="outline" size="lg" asChild>
            <Link
              href="https://www.linkedin.com/in/david-henriquez-96a59823b/"
              target="_blank"
            >
              <Linkedin className="h-5 w-5 mr-2" />
              Conectarse en LinkedIn
            </Link>
          </Button>
        </div>
      </div>
    </AnimatedSection>
  );
}
