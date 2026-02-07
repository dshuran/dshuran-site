"use client";

import { FadeIn, StaggerContainer, StaggerItem } from "@/components/motion";
import { Github, Send, Linkedin } from "lucide-react";

const contacts = [
  {
    icon: Github,
    label: "GitHub",
    href: "https://github.com/dshuran",
    username: "@dshuran",
  },
  {
    icon: Send,
    label: "Telegram",
    href: "https://t.me/dshuran",
    username: "@dshuran",
  },
  {
    icon: Linkedin,
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/swe-dshuran/",
    username: "swe-dshuran",
  },
];

export function Contact() {
  return (
    <section id="contact" className="py-24 sm:py-32 px-6">
      <div className="max-w-5xl mx-auto">
        <FadeIn>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight mb-4">
            Контакты
          </h2>
          <p className="text-muted-foreground text-lg mb-12 max-w-2xl">
            Открыт к интересным предложениям и коллаборациям.
          </p>
        </FadeIn>

        <StaggerContainer className="grid sm:grid-cols-3 gap-4 max-w-2xl">
          {contacts.map((contact) => (
            <StaggerItem key={contact.label}>
              <a
                href={contact.href}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-4 p-5 rounded-xl border border-border bg-card hover:border-primary/30 hover:bg-secondary/50 transition-all group"
              >
                <contact.icon className="size-5 text-muted-foreground group-hover:text-primary transition-colors" />
                <div>
                  <p className="font-medium text-sm">{contact.label}</p>
                  <p className="text-xs text-muted-foreground">
                    {contact.username}
                  </p>
                </div>
              </a>
            </StaggerItem>
          ))}
        </StaggerContainer>
      </div>
    </section>
  );
}
