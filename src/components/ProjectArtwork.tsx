import {
  BadgePercent,
  Banknote,
  BriefcaseBusiness,
  Check,
  Factory,
  FileSpreadsheet,
  GraduationCap,
  HeartPulse,
  Hospital,
  Layers3,
  MessageSquareText,
  Network,
  ShoppingBag,
  Stethoscope,
  UsersRound,
  Workflow,
  type LucideIcon,
} from "lucide-react";
import type { Project } from "../data/projects";

const projectIcons: Record<string, LucideIcon> = {
  oil: Factory,
  sms: MessageSquareText,
  gst: FileSpreadsheet,
  clinical: HeartPulse,
  education: GraduationCap,
  rental: Network,
  community: UsersRound,
  service: BriefcaseBusiness,
  dental: Stethoscope,
  payroll: Banknote,
  challan: Factory,
  employee: UsersRound,
  mcp: Network,
  pos: ShoppingBag,
  commission: BadgePercent,
  shopify: ShoppingBag,
  hospital: Hospital,
};

export default function ProjectArtwork({
  project,
  number,
}: {
  project: Project;
  number: string;
}) {
  const Icon = projectIcons[project.visual];

  return (
    <div
      className={`project-art project-art-${project.visual}`}
      role="img"
      aria-label={`Illustrated project workflow: ${project.title}`}
    >
      <div className="project-art-orbit" />
      <div className="project-art-ui">
        <div className="project-art-toolbar">
          <span className="project-art-brand"><span>o</span> ODOO</span>
          <span className="project-art-version">{project.version}</span>
          <span className="project-art-window"><i /><i /><i /></span>
        </div>
        <div className="project-art-content">
          <div className="project-art-label">{project.artLabel}</div>
          <div className="project-art-title">
            <span className="project-art-icon"><Icon size={18} strokeWidth={1.7} /></span>
            <span>{project.artTitle}</span>
            <span className="project-art-status"><Check size={11} /></span>
          </div>
          <div className="project-art-features">
            {project.features.map((feature, index) => (
              <div className="project-art-feature" key={feature}>
                <span className="project-art-feature-icon">
                  {index === 0 ? <Icon size={13} /> : index === 1 ? <Layers3 size={13} /> : <Workflow size={13} />}
                </span>
                <span>{feature}</span>
                <i />
              </div>
            ))}
          </div>
          <div className="project-art-footer">
            <span><i /> PROJECT WORKFLOW</span>
            <span>OVERVIEW / {number}</span>
          </div>
        </div>
      </div>
    </div>
  );
}
