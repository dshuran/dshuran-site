"use client";

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { FadeIn, StaggerContainer, StaggerItem } from "@/components/motion";
import {
  TestTubeDiagonal,
  MessageCircle,
  FileText,
  Server,
  Users,
  BarChart3,
  GitBranch,
} from "lucide-react";

const achievements = [
  {
    icon: TestTubeDiagonal,
    title: "E2E тестирование с нуля",
    description:
      "Предложил и разработал систему E2E тестов на базе Playwright. Придумал объектную модель для тестов, настроил CI для автоматического запуска.",
    metric: "2000+ тестов",
    tags: ["Playwright", "CI/CD", "Jenkins", "GitLab"],
  },
  {
    icon: MessageCircle,
    title: "Интеграция системы чатов",
    description:
      "Взял готовое решение и интегрировал в объектную модель low-code платформы через WebSocket. Личные и групповые чаты, отправка файлов.",
    metric: "WebSocket",
    tags: ["WebSocket", "Low-code", "Real-time"],
  },
  {
    icon: FileText,
    title: "PDF просмотрщик",
    description:
      "Разработал просмотрщик PDF для мобильных и десктопа. Решал сложности с плавным масштабированием и подгрузкой контента.",
    metric: "Mobile + Desktop",
    tags: ["PDF", "Mobile", "UX"],
  },
  {
    icon: Server,
    title: "Инфраструктурные улучшения",
    description:
      "Стабилизация инфраструктуры и предотвращение блокировок релизов.",
    metric: "~100 ч/мес экономии",
    tags: ["DevOps", "CI/CD", "Infrastructure"],
  },
];

const teamInfo = [
  {
    icon: Users,
    text: "UI/UX флагманских продуктов (Персонал, Бизкуб, КС)",
  },
  {
    icon: GitBranch,
    text: "Инфраструктура тестов — стабильность и масштабирование",
  },
  {
    icon: BarChart3,
    text: "Мессенджер на клиенте — UI/UX, интеграция, объектная модель",
  },
];

export function WorkExperience() {
  return (
    <section id="experience" className="py-24 sm:py-32 px-6">
      <div className="max-w-5xl mx-auto">
        <FadeIn>
          <p className="text-primary font-mono text-sm tracking-wider uppercase mb-3">
            Опыт работы
          </p>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight mb-4">
            Team Lead
          </h2>
          <p className="text-muted-foreground text-lg mb-12 max-w-2xl">
            Low-code технологическая компания
          </p>
        </FadeIn>

        {/* Team management */}
        <FadeIn delay={0.1}>
          <div className="grid sm:grid-cols-3 gap-4 mb-12">
            {teamInfo.map((item) => (
              <div
                key={item.text}
                className="flex items-start gap-3 p-4 rounded-lg bg-secondary/50"
              >
                <item.icon className="size-5 text-primary shrink-0 mt-0.5" />
                <p className="text-sm text-foreground">{item.text}</p>
              </div>
            ))}
          </div>
        </FadeIn>

        <Separator className="mb-12" />

        {/* Achievements */}
        <FadeIn delay={0.15}>
          <h3 className="text-xl font-semibold mb-8">Ключевые достижения</h3>
        </FadeIn>

        <StaggerContainer className="grid md:grid-cols-2 gap-6">
          {achievements.map((item) => (
            <StaggerItem key={item.title}>
              <Card className="h-full hover:border-primary/30 transition-colors">
                <CardHeader>
                  <div className="flex items-center justify-between">
                    <item.icon className="size-5 text-primary" />
                    <Badge variant="outline" className="font-mono text-xs">
                      {item.metric}
                    </Badge>
                  </div>
                  <CardTitle className="text-lg">{item.title}</CardTitle>
                  <CardDescription>{item.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-wrap gap-1.5">
                    {item.tags.map((tag) => (
                      <Badge
                        key={tag}
                        variant="secondary"
                        className="text-xs"
                      >
                        {tag}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </StaggerItem>
          ))}
        </StaggerContainer>
      </div>
    </section>
  );
}
