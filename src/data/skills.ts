import type { SkillGroup } from "@/types";

export const skillGroups: SkillGroup[] = [
  {
    title: "Frontend",
    label: "01",
    description:
      "Interfaces that stay clear when the workflow gets complicated.",
    icon: "frontend",
    skills: ["React", "JavaScript", "HTML", "CSS"],
  },
  {
    title: "Backend & API",
    label: "02",
    description:
      "Application logic and REST interfaces designed around real data flows.",
    icon: "backend",
    skills: ["Node.js", "Laravel", "REST API"],
  },
  {
    title: "Database",
    label: "03",
    description:
      "Relational and document stores, plus managed application backends.",
    icon: "database",
    skills: ["MariaDB", "MongoDB", "Firebase", "Supabase"],
  },
  {
    title: "System Integration",
    label: "04",
    description:
      "Connecting devices, services, and data so the system behaves as one.",
    icon: "integration",
    skills: [
      "IoT",
      "Microcontrollers",
      "Backend integration",
      "Data-driven applications",
    ],
  },
  {
    title: "Security & Testing",
    label: "05",
    description:
      "Functional testing, vulnerability assessment, and a working knowledge of common attack surfaces.",
    icon: "security",
    skills: [
      "Functional Testing",
      "Vulnerability Assessment",
      "OWASP Top 10",
      "Burp Suite",
      "Nmap",
      "Nuclei",
      "Wireshark",
      "Kali Linux",
    ],
  },
];
