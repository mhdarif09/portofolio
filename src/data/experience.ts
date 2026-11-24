import type { Experience } from "@/types";

export const experiences: Experience[] = [
  {
    slug: "founder-sarang-tumbuh",
    role: "Founder & Tech Lead",
    company: "Sarang Tumbuh",
    companyNote: "now mangeaak.id",
    period: "November 2025 — Present",
    type: "Founder",
    current: true,
    summary:
      "Leading product and technical development for a productivity platform built around focused work and daily reflection.",
    bullets: [
      "Led development of a productivity platform prototype.",
      "Integrated Pomodoro functionality, Gemini API-based assistance, and daily reflection.",
      "Translated user requirements into product features.",
      "Coordinated development priorities across the team.",
    ],
    achievements: [
      "Reached the national stage of Hult Prize.",
      "Participated in Pertamuda Seed & Scale selection.",
      "Generated more than 3,500 Instagram views through digital publication.",
    ],
    relatedProjects: ["sarang-tumbuh"],
  },
  {
    slug: "independent-security-researcher",
    role: "Independent Security Researcher",
    company: "Independent",
    period: "November 2025 — Present",
    type: "Research",
    current: true,
    summary:
      "Researching web application and API security, with a focus on authorization boundaries and authentication flows.",
    bullets: [
      "Conduct web application and API security research.",
      "Analyse authorization and IDOR behaviour.",
      "Test session management and OAuth flows.",
      "Review email verification and rate-limiting behaviour.",
      "Document technical vulnerability reports for HackerOne and official reporting programs.",
    ],
    note:
      "Program outcomes vary. Some reports were closed as duplicates, and not every finding resulted in an accepted bounty payment.",
  },
  {
    slug: "man-1-palembang",
    role: "Full-Stack Developer",
    company: "MAN 1 Palembang",
    period: "October 2025 — October 2026",
    location: "Palembang, Indonesia",
    type: "Full-time",
    summary:
      "Building end-to-end digital systems for a public madrasah, from IoT attendance to teaching journals, data portals, and a digital library.",
    bullets: [
      "Developed web-based attendance applications integrated with IoT and microcontroller devices.",
      "Designed data flows between devices, backend services, and web applications.",
      "Developed AGEN, a digital teacher journal.",
      "Developed school data portals and digital library applications.",
      "Performed computer laboratory network mapping.",
    ],
    relatedProjects: [
      "agen",
      "sipadu",
      "rfid-attendance",
      "portal-ppid",
      "lab-network-mapping",
    ],
  },
  {
    slug: "freelance-kemenag",
    role: "Freelance Full-Stack Developer",
    company: "Kementerian Agama Kota Palembang",
    period: "Project-based",
    location: "Palembang, Indonesia",
    type: "Freelance",
    summary:
      "Project-based application development and technical implementation for digital public-service initiatives.",
    bullets: [
      "Built web applications for service units under Kementerian Agama Kota Palembang.",
      "Translated operational requirements into digital workflows and reporting.",
      "Worked across frontend, backend, data, and integration concerns.",
    ],
    relatedProjects: ["e-skm", "portal-ppid", "ptsp-queue"],
  },
  {
    slug: "penetration-tester-ubd",
    role: "Penetration Tester",
    company: "Universitas Bina Darma",
    period: "September 2022 — January 2025",
    location: "Palembang, Indonesia",
    type: "Security",
    summary:
      "Assessed the university's academic information system and public website, documenting valid vulnerabilities and remediation guidance.",
    bullets: [
      "Tested the SIAKAD platform and university website.",
      "Assessed academic and payment-related features.",
      "Identified and reported valid security vulnerabilities, including RCE, SQL Injection, and information disclosure.",
      "Documented technical findings and mitigation recommendations.",
    ],
  },
];

export const experiencePreview = experiences.slice(0, 3);
