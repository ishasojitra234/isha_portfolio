import type { Metadata } from "next";
import { notFound } from "next/navigation";
import ProjectDetails from "./ProjectDetails";
import { projects, workProjects } from "../../../data/projects";

type ProjectPageProps = {
  params: Promise<{ slug: string }>;
};

export const dynamicParams = false;

export function generateStaticParams() {
  return projects.map(({ slug }) => ({ slug }));
}

export async function generateMetadata({ params }: ProjectPageProps): Promise<Metadata> {
  const { slug } = await params;
  const project = projects.find((item) => item.slug === slug);

  if (!project) {
    return { title: "Project not found | Isha Sojitra" };
  }

  return {
    title: `${project.title} | Isha Sojitra`,
    description: project.description,
  };
}

export default async function ProjectPage({ params }: ProjectPageProps) {
  const { slug } = await params;
  const projectIndex = workProjects.findIndex((item) => item.slug === slug);

  if (projectIndex === -1) {
    notFound();
  }

  return (
    <ProjectDetails
      project={workProjects[projectIndex]}
      projectNumber={(projectIndex + 1).toString().padStart(2, "0")}
    />
  );
}
