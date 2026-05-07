// ╔════════════════════════════════════════════════════════════════════╗
// ║                     📁  PROJECT DATA FILE                        ║
// ║                                                                  ║
// ║  Add / remove / edit your projects here.                         ║
// ║  The website reads this array and renders cards automatically.   ║
// ║  Just copy the TEMPLATE object, paste it into the array,         ║
// ║  and fill in your details — that's it!                           ║
// ╠════════════════════════════════════════════════════════════════════╣
// ║  ICON REFERENCE  (use these in techStack ▸ icon)                 ║
// ║                                                                  ║
// ║  Languages:                                                      ║
// ║    "devicon-java-plain"          — Java                          ║
// ║    "devicon-cplusplus-plain"     — C++                           ║
// ║    "devicon-c-plain"             — C                             ║
// ║    "devicon-csharp-plain"        — C#                            ║
// ║    "devicon-python-plain"        — Python                        ║
// ║    "devicon-javascript-plain"    — JavaScript                    ║
// ║    "devicon-typescript-plain"    — TypeScript                    ║
// ║                                                                  ║
// ║  Frameworks / Libraries:                                         ║
// ║    "devicon-spring-original"     — Spring Boot                   ║
// ║    "devicon-react-original"      — React                         ║
// ║    "devicon-dot-net-plain"       — .NET                          ║
// ║    "devicon-flask-original"      — Flask                         ║
// ║    "devicon-nextjs-original"     — Next.js                       ║
// ║    "devicon-nodejs-plain"        — Node.js                       ║
// ║                                                                  ║
// ║  Databases:                                                      ║
// ║    "devicon-microsoftsqlserver-plain" — MS SQL Server            ║
// ║    "devicon-postgresql-plain"    — PostgreSQL                    ║
// ║    "devicon-mongodb-plain"       — MongoDB                       ║
// ║    "devicon-mysql-plain"         — MySQL                         ║
// ║                                                                  ║
// ║  Tools:                                                          ║
// ║    "devicon-git-plain"           — Git                           ║
// ║    "devicon-github-original"     — GitHub                        ║
// ║    "devicon-docker-plain"        — Docker                        ║
// ║    "devicon-linux-plain"         — Linux                         ║
// ║                                                                  ║
// ║  Set icon to null for items without a devicon (a text            ║
// ║  badge will be shown instead).                                   ║
// ╚════════════════════════════════════════════════════════════════════╝

/*  ── TEMPLATE ──  (copy this, paste into the array, fill it in)

  {
    title:       "Project Name",
    subtitle:    "A short one-liner",
    description: "Longer description of what the project does …",
    techStack: [
      { name: "Java",      icon: "devicon-java-plain" },
      { name: "Custom",    icon: null },            // shows text badge
    ],
    images:     ["assets/projects/screenshot.png"],  // array of paths
    video:       null,                               // path or null
    github:      "https://github.com/you/repo",      // or null
    live:        null,                               // live demo URL or null
    highlights: ["Feature 1", "Feature 2"],
  },

*/

const PROJECTS = [
  // ── 1 ─────────────────────────────────────────────────────────
  {
    title:       "Ocean Route Navigation",
    subtitle:    "Maritime Navigation System — C++ & SFML",
    description:
      "A maritime navigation application that finds optimal sea routes " +
      "using advanced graph algorithms. Built entirely in C++ with SFML " +
      "for real-time visualization, it implements core data structures — " +
      "graphs, trees, linked lists, queues — and pathfinding algorithms " +
      "including BFS, DFS, Dijkstra, and A*.",
    techStack: [
      { name: "C++",   icon: "devicon-cplusplus-plain" },
      { name: "SFML",  icon: null },
      { name: "DSA",   icon: null },
    ],
    images:     [],
    video:       null,
    github:      "https://github.com/Abdullah-SE-bit",
    live:        null,
    highlights: [
      "Graph Algorithms",
      "A* Pathfinding",
      "BFS / DFS",
      "Dijkstra",
      "Real-time Visualization",
    ],
  },

  // ── 2 ─────────────────────────────────────────────────────────
  {
    title:       "BOGO — Smart Transit Platform",
    subtitle:    "Public Bus Transport System — Java & JavaFX",
    description:
      "A smart public-bus transport system inspired by Ocean Route Nav " +
      "but scaled up with a full database backend and proper software " +
      "architecture. Features real-time route simulation, admin panels, " +
      "driver & passenger dashboards — all built with GRASP and GoF " +
      "design patterns on a layered architecture.",
    techStack: [
      { name: "Java",           icon: "devicon-java-plain" },
      { name: "JavaFX",         icon: null },
      { name: "MS SQL Server",  icon: "devicon-microsoftsqlserver-plain" },
      { name: "Layered Arch",   icon: null },
    ],
    images:     [],
    video:       null,
    github:      "https://github.com/Abdullah-SE-bit",
    live:        null,
    highlights: [
      "Layered Architecture",
      "GRASP Patterns",
      "GoF Design Patterns",
      "Real-time Simulation",
      "Multi-role Dashboards",
    ],
  },

  // ── 3 ─────────────────────────────────────────────────────────
  {
    title:       "SDR_MIS",
    subtitle:    "Disaster Management Information System",
    description:
      "A full-stack Disaster Management Information System with a React " +
      "front-end and Spring Boot back-end, backed by MS SQL Server. " +
      "This is a database-heavy project that leverages advanced SQL " +
      "Server features and follows a layered architecture to manage " +
      "disaster response services at scale.",
    techStack: [
      { name: "React",          icon: "devicon-react-original" },
      { name: "Spring Boot",    icon: "devicon-spring-original" },
      { name: "MS SQL Server",  icon: "devicon-microsoftsqlserver-plain" },
      { name: "JavaScript",     icon: "devicon-javascript-plain" },
    ],
    images:     [],
    video:       null,
    github:      "https://github.com/Abdullah-SE-bit",
    live:        null,
    highlights: [
      "Full-Stack",
      "REST API",
      "Layered Architecture",
      "DB-Heavy Design",
      "Disaster Response",
    ],
  },

  // ── 4 ─────────────────────────────────────────────────────────
  {
    title:       "FLAKE",
    subtitle:    "Student Portal — Python Flask & SQLite",
    description:
      "A comprehensive student portal built with Python Flask on the " +
      "back-end and HTML / CSS / JavaScript on the front-end, backed " +
      "by a seeded SQLite database. The system supports two roles — " +
      "Admin and Student — and mirrors Google Classroom functionality " +
      "with modules for marks entry & viewing, attendance tracking, " +
      "class management, and a full financial module for fee records " +
      "and payment history.",
    techStack: [
      { name: "Python",      icon: "devicon-python-plain" },
      { name: "Flask",       icon: "devicon-flask-original" },
      { name: "JavaScript",  icon: "devicon-javascript-plain" },
      { name: "SQLite",      icon: "devicon-sqlite-plain" },
      { name: "HTML / CSS",  icon: "devicon-html5-plain" },
    ],
    images:     [],
    video:       null,
    github:      "https://github.com/Abdullah-SE-bit",
    live:        null,
    highlights: [
      "Admin & Student Roles",
      "Marks Management",
      "Attendance Tracking",
      "Financial Module",
      "Google Classroom Features",
      "Seeded Database",
    ],
  },
];
