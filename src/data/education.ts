import type {
  Achievement,
  Education,
  Publication,
} from "@/types";

export const education: Education = {
  institution: "Universitas Bina Darma",
  degree: "Bachelor of Informatics Engineering (S.Kom.)",
  field: "Informatics Engineering",
  gpa: "3.78",
  graduation: "Graduation assessment: 27 October 2026",
  location: "Palembang, Indonesia",
  exchange: "Student exchange programme — INTI University, Malaysia (2025)",
  finalProject:
    "Academic Student Care chatbot using Dialogflow and Node.js, integrated with WhatsApp.",
  highlights: [
    "GPA 3.78",
    "Student exchange at INTI University, Malaysia",
    "Final project: Academic Student Care chatbot",
  ],
};

export const publications: Publication[] = [
  {
    title:
      "Development of an Academic Chatbot Based on Natural Language Processing for Student Information Services at Universitas Bina Darma",
    topic: "Natural language processing · Student services",
  },
  {
    title:
      "Prototype of IoT-Based Automatic Gate System for Wanted Persons (DPO)",
    topic: "IoT · Public safety",
  },
  {
    title:
      "Design of a Student Learning Process Monitoring Application Interface at Madrasah Aliyah Negeri 1 Palembang",
    topic: "Interface design · Education",
  },
];

export const achievements: Achievement[] = [
  {
    title: "Top 39 National",
    detail: "Hult Prize Startup Competition",
  },
  {
    title: "Top 10",
    detail: "BRINATHON, Indonesia Research and Innovation Fair",
  },
  {
    title: "Top 200",
    detail: "Startup Indonesia Digital Tribe",
  },
  {
    title: "Second Place",
    detail: "Digital Innovation Competition, Generasi Digital Intelektual",
  },
  {
    title: "Finalist",
    detail: "ICT Olympiad, PGRI",
  },
  {
    title: "Mentor",
    detail:
      "Mentored students who achieved a bronze medal in the Informatics Olympiad and second place in the city-level Cyber Security LKS.",
  },
];
