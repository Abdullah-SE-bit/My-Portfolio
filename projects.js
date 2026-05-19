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
    bullets: [
      "Impact-focused point 1",
      "Impact-focused point 2",
    ],
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
    bullets: [
      "Developed a maritime route navigation system in C++ with SFML, rendering a real-world world map with actual global ports and real maritime routes loaded from a file-based database",
      "Modeled the port network as a weighted graph and implemented BFS, Dijkstra, and A* algorithms for optimal pathfinding using real-world cost and distance data",
      "Used queues to simulate port docking sequences and linked lists to represent multi-port voyage paths across the network",
      "Built a real-time ship movement simulation in SFML displaying vessels traversing computed routes across the rendered world map",
    ],
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
    bullets: [
      "Built a desktop public bus transport navigation app addressing the absence of any digital transit guide, eliminating commuter dependence on word-of-mouth and in-bus maps for route discovery",
      "Implemented strict 5-layer architecture (UI -> Controller -> Service -> Domain -> Repository) following GRASP and GoF design patterns with JDBC and MS SQL for persistence",
      "Developed DSA-driven map construction and pathfinding modules enabling real-time route and stop lookup across the bus network",
      "Designed role-based access for Admins (add, remove, deactivate stops; manage drivers and routes) and Drivers (view daily assigned route, log operational issues), with all activity fully logged through the portal",
    ],
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
    bullets: [
      "Engineered a full-stack enterprise disaster response MIS with a Spring Boot 3.2 REST API and a React 18 SPA, covering emergency reporting, resource logistics, rescue team deployment, hospital coordination, and financial tracking",
      "Implemented JWT-based stateless authentication with role-based access control (RBAC) across 5 roles using Spring Security and @PreAuthorize method-level authorization",
      "Designed a 13-table relational schema on MS SQL Server with database-level triggers for inventory and team status automation, views for role-scoped data abstraction, and composite indexes for query performance optimization",
      "Built approval-based workflows for resource allocation, team dispatch, and financial transactions enforcing ACID properties with rollback support, and exposed 10+ RESTful controller modules documented via Swagger UI",
    ],
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
    bullets: [
      "Built a unified university portal consolidating attendance tracking, grade viewing, course registration, timetable management, and Google Classroom-style academic workflows into a single authenticated platform",
      "Implemented role-based access for Students, Teachers, and Admins with session-based authentication, covering distinct feature sets per role including marking attendance, uploading materials, editing timetables, and managing faculty records",
      "Developed an in-built mail system enabling direct communication between students, teaching assistants, teachers, and admins, replacing fragmented external channels",
      "Automated semester-based classroom enrollment and course registration, reducing student dependence on multiple disconnected university systems",
    ],
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
