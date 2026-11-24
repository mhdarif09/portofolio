import type { Project, ProjectCategory } from "@/types";

export const projects: Project[] = [
  {
    slug: "e-skm",
    title: "e-SKM — Digital Public Satisfaction Survey",
    shortTitle: "e-SKM",
    acronym: "e-SKM",
    category: "Public Services",
    type: "Client system",
    year: "2026",
    client: "Kementerian Agama Kota Palembang",
    role: "Full-stack development",
    summary:
      "A QR-first satisfaction survey that turns citizen feedback into a regulated IKM score, a service-quality grade, and reports that staff can act on.",
    context:
      "Public service units are required to measure citizen satisfaction regularly. At Kementerian Agama Kota Palembang, the process needed to move beyond paper questionnaires and generic forms without losing the rigour required by national regulation.",
    problem:
      "Paper surveys created friction at the service counter, weighted scoring was rebuilt by hand, and results were not separated by service type.",
    problemPoints: [
      "Paper forms added time and friction for visitors, which reduced participation.",
      "Weighted IKM scoring across nine service elements was a manual, error-prone recap.",
      "Generic questionnaires did not separate results by service, hiding which unit needed attention.",
      "Written complaints were often reviewed only at the end of a reporting period.",
    ],
    solution:
      "A responsive survey and admin workspace that validates responses, calculates weighted scores automatically, and publishes results by service and period.",
    solutionPoints: [
      "QR-code and kiosk access with no account required for respondents.",
      "A nine-element instrument aligned with Permenpan RB No. 14 of 2017.",
      "Automatic NRR, weighted NRR, IKM score, and A–D service-quality grading.",
      "Dashboards segmented by service type, demographics, and reporting period.",
      "Complaint follow-up tracking, plus PDF and Excel report exports.",
    ],
    features: [
      "QR and kiosk survey entry",
      "Nine-element Likert instrument",
      "Automated IKM calculation",
      "Service-quality grading",
      "Demographic segmentation",
      "Complaint and follow-up register",
      "Public results summary",
      "PDF and Excel exports",
    ],
    impact:
      "The system replaces a periodic paper exercise with a continuous evaluation loop. Staff no longer rebuild weighted scores by hand, and leadership can see which service elements are weak while the feedback is still fresh.",
    scope: [
      "Survey design",
      "Scoring engine",
      "Admin dashboard",
      "Reporting",
      "Public results",
    ],
    technologies: [],
    featured: true,
    cover: "skm",
    coverAlt:
      "Abstract editorial cover showing survey bars and a circular satisfaction index for e-SKM.",
    referenceUrl: "https://kodeye.net/work/skm",
  },
  {
    slug: "portal-ppid",
    title: "Portal PPID Digital — Public Information Disclosure",
    shortTitle: "Portal PPID",
    acronym: "PPID",
    category: "Public Services",
    type: "Client system",
    year: "2026",
    client: "MAN 1 Kota Palembang",
    role: "Full-stack development",
    summary:
      "A public information portal that organises disclosure documents and gives every information request a traceable digital workflow.",
    context:
      "Public bodies are required to make information accessible and to process requests within defined service windows. The school needed a single place for public documents and a disciplined way to handle requests and objections.",
    problem:
      "Documents were spread across units, requests arrived on paper, and service deadlines were difficult to monitor without a shared register.",
    problemPoints: [
      "Public documents were not grouped by the standard DIP classifications.",
      "Requesters had to submit forms in person and could not track progress independently.",
      "Staff had no early warning when a request was approaching its service deadline.",
      "Annual service reporting required rebuilding statistics from manual notes.",
    ],
    solution:
      "A structured DIP library, online request and objection forms, ticket tracking, and an SLA dashboard for PPID staff.",
    solutionPoints: [
      "DIP documents grouped into periodic, immediate, and always-available information.",
      "Online request forms with identity upload and a unique registration ticket.",
      "Public ticket tracking across verification, processing, completion, and rejection.",
      "Objection handling linked to the original request record.",
      "SLA monitoring with remaining working-day indicators.",
      "Service statistics and a satisfaction survey after completion.",
    ],
    features: [
      "DIP document library",
      "Search and year filters",
      "Online information requests",
      "Unique ticket tracking",
      "Objection submissions",
      "SLA monitoring dashboard",
      "Service statistics",
      "Post-service survey",
    ],
    impact:
      "The portal makes public information easier to find and gives requesters a visible process instead of a paper trail. For staff, a shared register and deadline view reduce the risk of requests being missed.",
    scope: [
      "DIP repository",
      "Request workflow",
      "Ticket tracking",
      "Objection handling",
      "SLA monitoring",
      "Service statistics",
    ],
    technologies: [],
    featured: true,
    cover: "ppid",
    coverAlt:
      "Abstract editorial cover showing stacked public documents and a request tracking path for Portal PPID.",
    referenceUrl: "https://kodeye.net/work/ppid",
  },
  {
    slug: "ptsp-queue",
    title: "PTSP Queue Management System",
    shortTitle: "PTSP Queue",
    acronym: "PTSP",
    category: "Public Services",
    type: "Client system",
    year: "2026",
    client: "Kementerian Agama Kota Palembang",
    role: "Full-stack development",
    summary:
      "A multi-channel queue platform for a one-stop public service desk, with priority lanes, live displays, and service-time analytics.",
    context:
      "The PTSP desk at Kementerian Agama Kota Palembang handles hajj and umrah services, madrasah education, community guidance, and general religious administration. Demand is uneven and often seasonal.",
    problem:
      "Paper tickets produced crowded waiting rooms, uncertain wait times, wrong-counter queues, and no structured priority path for vulnerable visitors.",
    problemPoints: [
      "Seasonal peaks overwhelmed the waiting area and paper ticket process.",
      "Visitors could not estimate waiting time or recover a missed paper number.",
      "Choosing the wrong counter forced visitors to restart the queue.",
      "Elderly visitors, people with disabilities, and pregnant visitors had no priority lane.",
      "Leaders lacked objective data on waiting time and counter workload.",
    ],
    solution:
      "Online and kiosk ticketing, classified service lanes, priority handling, display and voice calls, transfer and hold controls, and timestamp-based reporting.",
    solutionPoints: [
      "Online booking and on-site kiosk registration across service categories.",
      "Separate regular and priority number sequences.",
      "Requirement information shown before a visitor joins the queue.",
      "Waiting-room display with estimated wait and text-to-speech calls.",
      "Counter transfer and hold controls to recover misrouted visitors.",
      "Post-service survey and timestamped SLA reporting.",
    ],
    features: [
      "Online and kiosk ticketing",
      "Service-category routing",
      "Priority lanes",
      "Live display and voice calls",
      "Counter transfer and recall",
      "Waiting-time estimates",
      "Satisfaction survey",
      "SLA and workload reports",
    ],
    impact:
      "The design gives visitors a clearer path from arrival to service, protects a priority lane for vulnerable groups, and gives supervisors a factual record of waiting time and counter load.",
    scope: [
      "Multi-channel ticketing",
      "Queue orchestration",
      "Display interface",
      "Counter controls",
      "SLA analytics",
    ],
    technologies: [],
    featured: true,
    cover: "ptsp",
    coverAlt:
      "Abstract editorial cover showing numbered queue tickets and service counters for the PTSP queue system.",
    referenceUrl: "https://kodeye.net/work/sapa-kemenag",
  },
  {
    slug: "agen",
    title: "AGEN — Digital Teaching Journal",
    shortTitle: "AGEN",
    acronym: "AGEN",
    category: "Education",
    type: "Client system",
    year: "2026",
    client: "MAN 1 Kota Palembang",
    role: "Full-stack development",
    summary:
      "A roster-aware teaching journal that captures lesson notes, attendance, and photo evidence once, then generates e-Kinerja-ready reports.",
    context:
      "Teachers at MAN 1 Kota Palembang recorded lessons in physical journals, then copied the same information into e-Kinerja at the end of each reporting period. Curriculum leaders had no live view of whether class hours were being recorded.",
    problem:
      "The same teaching data was written twice, photo evidence was scattered, and empty class hours were discovered late.",
    problemPoints: [
      "Teachers duplicated dates, classes, topics, and teaching hours between paper and e-Kinerja.",
      "Classroom photo evidence was dispersed across phones and messaging groups.",
      "Physical journals could be lost, damaged, or mixed up between classes.",
      "Curriculum leaders could not see unrecorded class hours in real time.",
    ],
    solution:
      "A single-entry journal tied to the teaching roster, with attendance, evidence uploads, monitoring dashboards, and verifiable PDF exports.",
    solutionPoints: [
      "Active roster shown automatically by day, period, class, and subject.",
      "Lesson topic, learning objectives, and notes captured in one entry.",
      "Per-session student attendance recorded inside the journal.",
      "Classroom photo evidence and room verification attached to the record.",
      "One-click PDF containing teaching logs, total JTM, photo collage, and a verification QR code.",
      "Daily matrix for curriculum leaders and duty teachers to spot unfilled sessions.",
    ],
    features: [
      "Roster-based journal entry",
      "Per-session attendance",
      "Photo evidence upload",
      "Room verification",
      "JTM accumulation",
      "e-Kinerja PDF export",
      "Verification QR code",
      "Empty-class monitoring",
    ],
    impact:
      "AGEN reduces the administrative loop from recording to reporting. Teachers enter the lesson once, while curriculum leaders gain an earlier signal when a class session has not been documented.",
    scope: [
      "Teaching journal",
      "Attendance",
      "Evidence capture",
      "Report generation",
      "Monitoring dashboard",
    ],
    technologies: [],
    featured: true,
    cover: "agen",
    coverAlt:
      "Abstract editorial cover showing a teaching roster grid and a verified report sheet for AGEN.",
    referenceUrl: "https://kodeye.net/work/ejurnal",
  },
  {
    slug: "sipadu",
    title: "SIPADU — Integrated School Data Ecosystem",
    shortTitle: "SIPADU",
    acronym: "SIPADU",
    category: "System Integration",
    type: "Client system",
    year: "2026",
    client: "MAN 1 Kota Palembang",
    role: "Full-stack development & integration",
    summary:
      "A single source of truth for staff, student, class, and term data, connected to ARENA CBT and AGEN through SSO and master-data sync.",
    context:
      "ARENA, a computer-based testing platform, and AGEN, a teaching journal, serve different workloads. Connecting them required a shared identity and data layer without turning them into one fragile monolith.",
    problem:
      "Separate applications meant duplicate accounts, repeated imports each term, and CBT traffic that could affect daily administration.",
    problemPoints: [
      "Teachers and students needed separate credentials for each application.",
      "Operators re-imported students, classes, and staff every term.",
      "CBT traffic peaks could compete with daily administrative services.",
      "Master data drifted between systems when updates were applied unevenly.",
    ],
    solution:
      "SIPADU acts as the identity provider and master-data hub while ARENA and AGEN remain decoupled services that consume the same records.",
    solutionPoints: [
      "Central master data for teachers, staff, students, classes, and active terms.",
      "Single sign-on with role-based access mapping for connected applications.",
      "Reference-data sync so ARENA and AGEN do not require repeated imports.",
      "Decoupled services that keep CBT load away from daily journal traffic.",
      "One account for teachers and students across the connected platforms.",
    ],
    features: [
      "Central master data",
      "Identity provider",
      "Single sign-on",
      "Role-based access",
      "Term and class management",
      "Reference-data sync",
      "Decoupled service architecture",
    ],
    impact:
      "SIPADU removes repeated account and roster setup across systems. The decoupled model also keeps exam traffic isolated from the tools teachers use every day.",
    scope: [
      "Identity provider",
      "SSO",
      "Master-data sync",
      "Role mapping",
      "Service integration",
    ],
    technologies: [],
    featured: true,
    cover: "sipadu",
    coverAlt:
      "Abstract editorial cover showing a central data node connected to two independent application nodes for SIPADU.",
    referenceUrl: "https://kodeye.net/work/sipadu",
  },
  {
    slug: "rfid-attendance",
    title: "RFID Digital Attendance",
    shortTitle: "RFID Attendance",
    acronym: "RFID",
    category: "IoT",
    type: "Workplace system",
    year: "2025–2026",
    client: "MAN 1 Palembang",
    role: "Full-stack development & IoT integration",
    summary:
      "A web-based attendance system that connects RFID and microcontroller readings to a real-time student attendance record.",
    context:
      "Developed during full-stack work at MAN 1 Palembang, this project connected physical attendance devices to a web application rather than treating device data as a separate workflow.",
    problem:
      "Manual attendance consumed class time, was easy to manipulate, and left device readings disconnected from school reporting.",
    problemPoints: [
      "Manual roll calls took time away from the start of a lesson.",
      "Paper records were difficult to audit or correct consistently.",
      "Device readings had no reliable path into the school's web records.",
    ],
    solution:
      "RFID reader events flow through a backend service into a web dashboard for live attendance, history, and reporting.",
    solutionPoints: [
      "RFID and microcontroller readings translated into student attendance events.",
      "Backend endpoints that receive, validate, and store device data.",
      "A web dashboard showing attendance as it is recorded.",
      "Searchable attendance history for administrative follow-up.",
    ],
    features: [
      "RFID-based check-in",
      "Microcontroller integration",
      "Device-to-backend data flow",
      "Real-time attendance view",
      "Attendance history",
      "Administrative reporting",
    ],
    impact:
      "The system turns a physical check-in into a digital record immediately, giving the school one attendance trail instead of separate paper and device logs.",
    scope: [
      "IoT integration",
      "Device data flow",
      "Attendance dashboard",
      "Reporting",
    ],
    technologies: ["RFID", "IoT", "Microcontrollers"],
    featured: false,
    cover: "rfid",
    coverAlt:
      "Abstract editorial cover showing RFID signal arcs and a check-in event flowing into a database.",
  },
  {
    slug: "sarang-tumbuh",
    title: "Sarang Tumbuh — Productivity Platform",
    shortTitle: "Sarang Tumbuh",
    acronym: "ST",
    category: "Product",
    type: "Startup prototype",
    year: "2025–Present",
    client: "Sarang Tumbuh (now mangeaak.id)",
    role: "Founder & Tech Lead",
    summary:
      "A productivity prototype that combines Pomodoro focus sessions, Gemini-powered assistance, and daily reflection.",
    context:
      "Sarang Tumbuh began as a product experiment: a small, coherent space for focused work and honest review, rather than another collection of disconnected productivity features.",
    problem:
      "Focus timers, planning tools, and reflection prompts usually live in separate apps, so the intention behind a work session is lost before it is reviewed.",
    problemPoints: [
      "Focus sessions are rarely connected to the work they were meant to advance.",
      "Reflection is often skipped because it lives in a separate tool.",
      "Users need lightweight guidance without leaving their working context.",
    ],
    solution:
      "A single loop: plan a focus session, work with contextual assistance, then capture a short daily reflection.",
    solutionPoints: [
      "Pomodoro-based focus sessions as the core interaction.",
      "Gemini API assistance for contextual support during the workflow.",
      "Daily reflection to close the loop between intention and review.",
      "Product requirements translated into a sequenced prototype.",
    ],
    features: [
      "Pomodoro focus sessions",
      "Gemini API assistance",
      "Daily reflection",
      "Product prototype",
      "Feature prioritisation",
    ],
    impact:
      "The prototype reached the national stage of Hult Prize and participated in Pertamuda Seed & Scale. Digital publication generated more than 3,500 Instagram views.",
    scope: [
      "Product direction",
      "Prototype development",
      "AI assistance",
      "Team coordination",
    ],
    technologies: ["Gemini API"],
    featured: false,
    cover: "sarang",
    coverAlt:
      "Abstract editorial cover showing concentric focus rings and a daily reflection note for Sarang Tumbuh.",
  },
  {
    slug: "academic-chatbot",
    title: "Academic Student Care Chatbot",
    shortTitle: "Student Care Chatbot",
    acronym: "ASC",
    category: "AI",
    type: "Final project",
    year: "2025",
    client: "Universitas Bina Darma",
    role: "Developer & researcher",
    summary:
      "A natural-language student information assistant built with Dialogflow and Node.js, delivered through WhatsApp.",
    context:
      "The final project explored how conversational interfaces could handle routine academic information requests without adding another portal for students to learn.",
    problem:
      "Students repeatedly asked the same academic questions, creating avoidable load for administrative staff and inconsistent answers.",
    problemPoints: [
      "Routine academic questions were answered manually and repeatedly.",
      "Information was distributed across channels rather than available on demand.",
      "Students needed a familiar interface, not another account and dashboard.",
    ],
    solution:
      "An intent-based Dialogflow agent connected to a Node.js service and a WhatsApp channel for conversational access to academic information.",
    solutionPoints: [
      "Dialogflow intents for common academic information requests.",
      "Node.js service connecting the conversational layer to application logic.",
      "WhatsApp as the student-facing channel.",
      "Natural-language interaction instead of a form-first workflow.",
    ],
    features: [
      "Dialogflow intent model",
      "Node.js integration",
      "WhatsApp channel",
      "Student information responses",
      "Natural-language interaction",
    ],
    impact:
      "The project demonstrated a practical route for conversational self-service around routine academic information and became the basis of the final project and a published paper.",
    scope: [
      "Conversation design",
      "Intent modelling",
      "Backend integration",
      "Research writing",
    ],
    technologies: ["Dialogflow", "Node.js", "WhatsApp integration"],
    featured: false,
    cover: "chatbot",
    coverAlt:
      "Abstract editorial cover showing conversation bubbles connected to a natural-language processing node.",
  },
  {
    slug: "faculty-profile",
    title: "Faculty of Science and Technology Profile Website",
    shortTitle: "Faculty Profile",
    acronym: "FST",
    category: "Web",
    type: "Academic project",
    year: "—",
    client: "Universitas Bina Darma",
    role: "Web development",
    summary:
      "A public-facing faculty profile website presenting the Faculty of Science and Technology in a clear, structured format.",
    context:
      "An academic web project focused on presenting faculty identity and information through a structured public website.",
    problem:
      "A consistent public-facing profile was needed to present the faculty's programmes and identity in one place.",
    problemPoints: [
      "Faculty information needed a stable public presentation.",
      "Visitors needed a clearer entry point than scattered documents.",
    ],
    solution:
      "A structured informational website for the faculty profile.",
    solutionPoints: [
      "Public-facing faculty profile pages.",
      "Structured presentation of faculty information.",
      "Responsive web layout.",
    ],
    features: ["Faculty profile", "Public information pages", "Responsive layout"],
    impact:
      "The project provided a focused exercise in translating institutional information into a clear public web presence.",
    scope: ["Web design", "Front-end implementation", "Content structure"],
    technologies: [],
    featured: false,
    cover: "faculty",
    coverAlt:
      "Abstract editorial cover showing an architectural grid and a faculty monogram for the Faculty of Science and Technology profile website.",
    pendingNote:
      "Detailed scope, live link, and screenshots for this academic project are being prepared.",
  },
  {
    slug: "lab-network-mapping",
    title: "Computer Laboratory Network Mapping",
    shortTitle: "Lab Network Mapping",
    acronym: "NET",
    category: "Infrastructure",
    type: "Workplace project",
    year: "2025–2026",
    client: "MAN 1 Palembang",
    role: "Network documentation",
    summary:
      "A structured map of the computer laboratory network, documenting topology, devices, and connectivity for maintenance and planning.",
    context:
      "Computer laboratories accumulate devices and cabling changes over time. Without a current reference, troubleshooting depends on memory and repeated physical inspection.",
    problem:
      "An undocumented laboratory network makes faults slower to trace and hardware changes harder to plan.",
    problemPoints: [
      "Device and cabling relationships were not captured in one reference.",
      "Troubleshooting depended on inspecting the room physically.",
      "Network changes were difficult to plan without a current topology.",
    ],
    solution:
      "A documented topology and device inventory that gives technicians a reliable reference.",
    solutionPoints: [
      "Laboratory topology mapped and documented.",
      "Device and connectivity inventory recorded.",
      "A maintainable reference for troubleshooting and future changes.",
    ],
    features: [
      "Network topology map",
      "Device inventory",
      "Connectivity documentation",
      "Maintenance reference",
    ],
    impact:
      "The mapping gives the laboratory a maintainable reference for troubleshooting and future network changes.",
    scope: ["Network mapping", "Device inventory", "Technical documentation"],
    technologies: [],
    featured: false,
    cover: "network",
    coverAlt:
      "Abstract editorial cover showing a network topology of laboratory computers and switches.",
  },
];

export const projectCategories: Array<"All" | ProjectCategory> = [
  "All",
  "Public Services",
  "Education",
  "System Integration",
  "IoT",
  "Product",
  "AI",
  "Web",
  "Infrastructure",
];

export const featuredProjects = projects.filter((project) => project.featured);

export function getProject(slug: string) {
  return projects.find((project) => project.slug === slug);
}

export function getAdjacentProjects(slug: string) {
  const index = projects.findIndex((project) => project.slug === slug);
  if (index === -1) {
    return { previous: undefined, next: undefined };
  }

  return {
    previous: index > 0 ? projects[index - 1] : undefined,
    next: index < projects.length - 1 ? projects[index + 1] : undefined,
  };
}
