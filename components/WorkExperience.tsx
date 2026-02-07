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
import type { LucideIcon } from "lucide-react";
import {
  TestTubeDiagonal,
  MessageCircle,
  FileText,
  Server,
  Users,
  BarChart3,
} from "lucide-react";

interface Achievement {
  icon: LucideIcon;
  title: string;
  description: string;
  metric: string;
  tags: string[];
}

interface RoleBlock {
  role: string;
  period: string;
  description: string;
  achievements: Achievement[];
}

const roles: RoleBlock[] = [
  {
    role: "Team Lead",
    period: "Январь 2025 — настоящее время",
    description:
      "Руковожу командой из 3 frontend-разработчиков. Отвечаю за процессы, качество и развитие продукта.",
    achievements: [
      {
        icon: Users,
        title: "Выстраивание процессов команды",
        description:
          "Внедрил регулярные 1-on-1, планирование через диаграммы Ганта. Синхронизация с дизайнерами и продуктовой командой через общий бэклог.",
        metric: "3 разработчика",
        tags: ["Management", "Agile", "1-on-1"],
      },
      {
        icon: BarChart3,
        title: "Продуктовый менеджмент",
        description:
          "Объединил команды дизайнеров и продукта, взял на себя роль продакт-менеджера. Внедряю продуктовые метрики (CES/NPS).",
        metric: "CES/NPS",
        tags: ["Product", "Metrics", "UX Research"],
      },
      {
        icon: Server,
        title: "Стабилизация инфраструктуры",
        description:
          "Предотвращение блокировок релизов за счёт стабилизации CI и тестовой инфраструктуры.",
        metric: "~100 ч/мес экономии",
        tags: ["CI/CD", "Infrastructure", "DevOps"],
      },
    ],
  },
  {
    role: "Frontend-разработчик",
    period: "Ноябрь 2018 — Январь 2025",
    description:
      "Разработка компонентов и фич для low-code платформы «Элемент».",
    achievements: [
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
        title: "Интеграция мессенджера",
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
    ],
  },
];

export function WorkExperience() {
  return (
    <section id="experience" className="py-24 sm:py-32 px-6">
      <div className="max-w-5xl mx-auto">
        <FadeIn>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight mb-12">
            Опыт работы
          </h2>
        </FadeIn>

        {roles.map((block, index) => (
          <div key={block.role}>
            {index > 0 && <Separator className="my-12" />}

            <FadeIn delay={0.1}>
              <div className="flex flex-wrap items-center gap-x-4 gap-y-2 mb-2">
                <h3 className="text-2xl font-semibold">{block.role}</h3>
                <Badge variant="outline" className="text-xs font-mono">
                  1С
                </Badge>
              </div>
              <p className="text-sm text-muted-foreground font-mono mb-1">
                {block.period}
              </p>
              <p className="text-muted-foreground mb-8 max-w-2xl">
                {block.description}
              </p>
            </FadeIn>


            <StaggerContainer className="grid md:grid-cols-2 gap-6">
              {block.achievements.map((item) => (
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
        ))}
      </div>
    </section>
  );
}
