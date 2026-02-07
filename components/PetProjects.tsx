"use client";

import { useState } from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { FadeIn, StaggerContainer, StaggerItem } from "@/components/motion";
import { ExternalLink } from "lucide-react";
import type { Project } from "@/lib/projects";

const statusLabels: Record<string, string> = {
  "in-progress": "В разработке",
  completed: "Завершён",
  closed: "Закрыт",
};

const statusColors: Record<string, string> = {
  "in-progress": "bg-yellow-500/10 text-yellow-400 border-yellow-500/20",
  completed: "bg-green-500/10 text-green-400 border-green-500/20",
  closed: "bg-muted text-muted-foreground border-border",
};

interface PetProjectsProps {
  projects: Project[];
}

export function PetProjects({ projects }: PetProjectsProps) {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  if (projects.length === 0) return null;

  return (
    <section id="projects" className="py-24 sm:py-32 px-6">
      <div className="max-w-5xl mx-auto">
        <FadeIn>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight mb-4">
            Пет-проекты
          </h2>
          <p className="text-muted-foreground text-lg mb-12 max-w-2xl">
            Проекты, которые делаю в свободное время для прокачки навыков и
            проверки идей.
          </p>
        </FadeIn>

        <StaggerContainer className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project) => (
            <StaggerItem key={project.slug}>
              <Card
                className="h-full cursor-pointer hover:border-primary/30 transition-colors group"
                onClick={() => setSelectedProject(project)}
              >
                <CardHeader>
                  <div className="flex items-center justify-between">
                    <CardTitle className="text-lg group-hover:text-primary transition-colors">
                      {project.title}
                    </CardTitle>
                    <Badge
                      variant="outline"
                      className={`text-xs ${statusColors[project.status] ?? ""}`}
                    >
                      {statusLabels[project.status] ?? project.status}
                    </Badge>
                  </div>
                  <CardDescription className="line-clamp-3">
                    {project.description}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-wrap gap-1.5">
                    {project.tags.slice(0, 4).map((tag) => (
                      <Badge
                        key={tag}
                        variant="secondary"
                        className="text-xs"
                      >
                        {tag}
                      </Badge>
                    ))}
                    {project.tags.length > 4 && (
                      <Badge variant="secondary" className="text-xs">
                        +{project.tags.length - 4}
                      </Badge>
                    )}
                  </div>
                </CardContent>
              </Card>
            </StaggerItem>
          ))}
        </StaggerContainer>

        {/* Project detail dialog */}
        <Dialog
          open={!!selectedProject}
          onOpenChange={(open) => {
            if (!open) setSelectedProject(null);
          }}
        >
          {selectedProject && (
            <DialogContent className="max-w-lg max-h-[80vh] overflow-y-auto">
              <DialogHeader>
                <div className="flex items-center gap-3">
                  <DialogTitle className="text-xl">
                    {selectedProject.title}
                  </DialogTitle>
                  <Badge
                    variant="outline"
                    className={`text-xs ${statusColors[selectedProject.status] ?? ""}`}
                  >
                    {statusLabels[selectedProject.status] ??
                      selectedProject.status}
                  </Badge>
                </div>
                <DialogDescription>
                  {selectedProject.description}
                </DialogDescription>
              </DialogHeader>

              <div className="space-y-4">
                <div className="flex flex-wrap gap-1.5">
                  {selectedProject.tags.map((tag) => (
                    <Badge key={tag} variant="secondary" className="text-xs">
                      {tag}
                    </Badge>
                  ))}
                </div>

                {selectedProject.content && (
                  <div className="prose prose-invert prose-sm max-w-none text-muted-foreground">
                    {selectedProject.content
                      .split("\n")
                      .filter((line) => line.trim())
                      .map((line, i) => {
                        if (line.startsWith("## ")) {
                          return (
                            <h3
                              key={i}
                              className="text-foreground text-base font-semibold mt-4 mb-2"
                            >
                              {line.replace("## ", "")}
                            </h3>
                          );
                        }
                        if (line.startsWith("- **")) {
                          const match = line.match(
                            /^- \*\*(.+?)\*\*\s*[—–-]\s*(.+)$/
                          );
                          if (match) {
                            return (
                              <p key={i} className="ml-4 text-sm">
                                <strong className="text-foreground">
                                  {match[1]}
                                </strong>{" "}
                                — {match[2]}
                              </p>
                            );
                          }
                        }
                        if (line.startsWith("- ")) {
                          return (
                            <p key={i} className="ml-4 text-sm">
                              &bull; {line.replace("- ", "")}
                            </p>
                          );
                        }
                        return (
                          <p key={i} className="text-sm">
                            {line}
                          </p>
                        );
                      })}
                  </div>
                )}

                {selectedProject.link && (
                  <Button variant="outline" size="sm" asChild>
                    <a
                      href={selectedProject.link}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Открыть проект
                      <ExternalLink className="size-3.5" />
                    </a>
                  </Button>
                )}
              </div>
            </DialogContent>
          )}
        </Dialog>
      </div>
    </section>
  );
}
