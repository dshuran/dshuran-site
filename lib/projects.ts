import fs from "fs";
import path from "path";
import matter from "gray-matter";

export interface Project {
  slug: string;
  title: string;
  description: string;
  tags: string[];
  link?: string;
  status: "in-progress" | "completed" | "closed";
  featured: boolean;
  type: "work" | "pet";
  content: string;
}

const projectsDirectory = path.join(process.cwd(), "content/projects");

export function getProjects(): Project[] {
  if (!fs.existsSync(projectsDirectory)) {
    return [];
  }

  const fileNames = fs.readdirSync(projectsDirectory);
  const projects = fileNames
    .filter((fileName) => fileName.endsWith(".md"))
    .map((fileName) => {
      const slug = fileName.replace(/\.md$/, "");
      const fullPath = path.join(projectsDirectory, fileName);
      const fileContents = fs.readFileSync(fullPath, "utf8");
      const { data, content } = matter(fileContents);

      return {
        slug,
        title: data.title ?? "",
        description: data.description ?? "",
        tags: data.tags ?? [],
        link: data.link,
        status: data.status ?? "completed",
        featured: data.featured ?? false,
        type: data.type ?? "pet",
        content,
      } as Project;
    });

  return projects;
}

export function getProjectsByType(type: "work" | "pet"): Project[] {
  return getProjects().filter((project) => project.type === type);
}
