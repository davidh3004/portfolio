import React from 'react'
import { AnimatedSection } from './animated-section'
import { Card } from './ui/card'
import Image from 'next/image'

export default function certificates() {
    const certificates = [
        {
            title: "Gestión de proyectos",
            description: "Certificado de Gestión de proyectos",
            image: "/certs/Gestion-agile.png",
        },
        {
            title: "Fundamentos de Gestión de proyectos",
            description: "Certificado de Fundamentos de Gestion de proyectos",
            image: "/certs/Fundamentos-gestion.png",
        },
        {
            title: "Simulacion, Analisis de algoritmos y Punteros",
            description: "Certificado de Simulacion, Analisis de algoritmos y Punteros",
            image: "/certs/Analisis-algoritmos.png",
        },
        {
            title: "Next.js App Router Fundamentals",
            description: "Certificado de Next.js App Router Fundamentals",
            image: "/certs/Nextjs.png",
        },
        {
            title: "CS50x Harvard",
            description: "Certificado de CS50x Harvard",
            image: "/certs/cs50.png",
        },
        {
            title: "The Complete Full-Stack Web Development Bootcamp, Udemy",
            description: "Certificado de The Complete Full-Stack Web Development Bootcamp, Udemy",
            image: "/certs/web-dev.png",
        },
        
                
        
    ]
return (
    <AnimatedSection
    id="Certificados"
    className="px-4 py-12 md:py-24 w-full"
    >
      <div className="mx-auto max-w-6xl space-y-12">
        <div className="text-center space-y-4">
            <h2 className="text-3xl font-bold tracking-tighter md:text-4xl">
                Certificados
            </h2>
            <p className="text-lg text-muted-foreground">
                Algunos de mis certificados.
            </p>
        </div>
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3 w-full">
            {certificates.map((certificate, index) => (
            <AnimatedSection
                key={certificate.title}
                animation="fade-up"
                delay={index * 200}
                className="h-full w-full"
            >
                <Card className="overflow-hidden hover:shadow-lg transition-all duration-300 hover:-translate-y-1 h-full flex flex-col">
                    <div className="aspect-video relative overflow-hidden w-full">
                        <Image src={certificate.image} alt={certificate.title} fill className="object-cover" />
                        <div className="absolute inset-0 text-gray-200 hover:text-white hover:bg-black/50 flex items-end justify-start">
                            <h3 className="text-xl font-bold pb-4 px-4 cursor-default">{certificate.title}</h3>
                        </div>
                    </div>
                </Card>
            </AnimatedSection>
            ))}
        </div>
      </div>
    </AnimatedSection>
  )
}
