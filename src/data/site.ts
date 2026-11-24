import type { NavItem, SocialLink } from "@/types";

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? "https://muhammadarif.dev";

export const site = {
  url: siteUrl,
  name: "Muhammad Arif Rahmad S.",
  shortName: "Muhammad Arif",
  monogram: "MAR",
  title: "Full-Stack Developer",
  titleLong: "Full-Stack Developer & Software Engineer",
  description:
    "Full-stack developer in Palembang, Indonesia, building web applications, integrated systems, and security-conscious digital services for education and government.",
  location: "Palembang, South Sumatra, Indonesia",
  locationShort: "Palembang, ID",
  timezone: "WIB · UTC+7",
  email: "mhmmdarifrahmads@gmail.com",
  phoneDisplay: "+62 831-7390-8515",
  whatsapp: "https://wa.me/6283173908515",
  availability: "Open to full-stack engineering work",
  positioning: [
    "Full-Stack Developer",
    "Software Engineer",
    "Application Security Enthusiast",
    "System Integration Developer",
  ],
  focus: [
    "End-to-end web applications",
    "REST APIs & data modelling",
    "IoT and system integration",
    "Application security review",
  ],
  socials: [
    {
      label: "GitHub",
      href: "https://github.com/mhdarif09",
      handle: "@mhdarif09",
    },
    {
      label: "LinkedIn",
      href: "https://linkedin.com/in/muhammad-arif-rahmad-syahputra",
      handle: "muhammad-arif-rahmad-syahputra",
    },
    {
      label: "Email",
      href: "mailto:mhmmdarifrahmads@gmail.com",
      handle: "mhmmdarifrahmads@gmail.com",
    },
    {
      label: "WhatsApp",
      href: "https://wa.me/6283173908515",
      handle: "+62 831-7390-8515",
    },
  ] satisfies SocialLink[],
} as const;

export const navigation: NavItem[] = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Projects", href: "/projects" },
  { label: "Experience", href: "/experience" },
  { label: "Contact", href: "/contact" },
];
