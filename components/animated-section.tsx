"use client";

import type React from "react";

import { useEffect, useRef, useState } from "react";

interface AnimatedSectionProps {
  children: React.ReactNode;
  className?: string;
  id?: string;
  animation?: "fade-up" | "fade-in" | "slide-left" | "slide-right";
  delay?: number;
}

export function AnimatedSection({
  children,
  className = "",
  id,
  animation = "fade-up",
  delay = 0,
}: AnimatedSectionProps) {
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          // Section is visible - start animation after delay
          setTimeout(() => {
            setIsVisible(true);
          }, delay);
        } else {
          // Section is not visible - reset animation state
          setIsVisible(false);
        }
      },
      {
        threshold: 0.1,
        rootMargin: "0px 0px -50px 0px",
      }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => {
      if (ref.current) {
        observer.unobserve(ref.current);
      }
    };
  }, [delay]);

  const getAnimationClass = () => {
    const baseClass = "transition-all duration-700 ease-out";

    if (!isVisible) {
      switch (animation) {
        case "fade-up":
          return `${baseClass} opacity-0 translate-y-8`;
        case "fade-in":
          return `${baseClass} opacity-0`;
        case "slide-left":
          return `${baseClass} opacity-0 -translate-x-8`;
        case "slide-right":
          return `${baseClass} opacity-0 translate-x-8`;
        default:
          return `${baseClass} opacity-0 translate-y-8`;
      }
    }

    return `${baseClass} opacity-100 translate-y-0 translate-x-0`;
  };

  return (
    <div ref={ref} id={id} className={`${getAnimationClass()} ${className}`}>
      {children}
    </div>
  );
}
