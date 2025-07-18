import { Link } from "lucide-react";
import React from "react";
import { Button } from "./ui/button";
import { Linkedin, Mail } from "lucide-react";
import { DynamicIcon } from "lucide-react/dynamic";

export default function buttonsContact() {
  const buttonsContact = [
    {
      id: 1,
      name: "GitHub",
      icon: "github",
      link: "https://github.com/davidh3004",
    },
    {
      id: 2,
      name: "LinkedIn",
      icon: "linkedin",
      link: "https://linkedin.com/in/david-henriquez-96a59823b/",
    },
    {
      id: 3,
      name: "Email",
      icon: "email",
      link: "mailto:henriquezdavid3004@gmail.com",
    },
  ];
  return (
    <div className="flex items-center space-x-4">
      {buttonsContact.map((button) => (
        <Button key={button.id} variant="ghost" size="icon" asChild>
          <Link href={button.link} target="_blank">
            {button.icon === "github" ? (
              <DynamicIcon name="github" className="h-5 w-5" />
            ) : button.icon === "linkedin" ? (
              <Linkedin className="h-5 w-5" />
            ) : (
              <Mail className="h-5 w-5" />
            )}
          </Link>
        </Button>
      ))}
    </div>
  );
}
