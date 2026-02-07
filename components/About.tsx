"use client";

import { Badge } from "@/components/ui/badge";
import { FadeIn } from "@/components/motion";
import { MapPin, Users, Layers } from "lucide-react";

const skills = [
  "Техническое лидерство",
  "UI/UX",
  "React",
  "TypeScript",
  "Product Management",
  "Playwright",
  "WebSocket",
  "CI/CD",
  "Low-code",
  "Agile",
];

export function About() {
  return (
    <section id="about" className="py-24 sm:py-32 px-6">
      <div className="max-w-5xl mx-auto">
        <FadeIn>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight mb-12">
            Обо мне
          </h2>
        </FadeIn>

        <div className="grid md:grid-cols-2 gap-12">
          <FadeIn delay={0.1}>
            <div className="space-y-6">
              <p className="text-muted-foreground leading-relaxed">
                Мне 26 лет, я живу в Москве и работаю Team Lead
                в технологической компании, которая создаёт low-code платформу.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                Руковожу командой из 3 frontend-разработчиков. Мы отвечаем за
                платформу &laquo;Элемент&raquo;, которая используется в десятках тысяч
                приложений. Фокусируюсь на технической разработке и
                продуктовом менеджменте.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                Стремлюсь создавать продукты, которые решают реальные проблемы
                пользователей, и строить процессы, которые помогают команде
                работать эффективнее.
              </p>
            </div>
          </FadeIn>

          <FadeIn delay={0.2}>
            <div className="space-y-8">
              <div className="space-y-4">
                <div className="flex items-center gap-3 text-foreground">
                  <MapPin className="size-4 text-primary shrink-0" />
                  <span>Москва, Россия</span>
                </div>
                <div className="flex items-center gap-3 text-foreground">
                  <Users className="size-4 text-primary shrink-0" />
                  <span>Team Lead, команда из 3 разработчиков</span>
                </div>
                <div className="flex items-center gap-3 text-foreground">
                  <Layers className="size-4 text-primary shrink-0" />
                  <span>Low-code технология &laquo;Элемент&raquo;</span>
                </div>
              </div>

              <div>
                <p className="text-sm text-muted-foreground mb-3">Навыки</p>
                <div className="flex flex-wrap gap-2">
                  {skills.map((skill) => (
                    <Badge key={skill} variant="secondary">
                      {skill}
                    </Badge>
                  ))}
                </div>
              </div>
            </div>
          </FadeIn>
        </div>
      </div>
    </section>
  );
}
