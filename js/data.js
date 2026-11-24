/* ==========================================================
   EDIT THIS FILE ONLY.
   Everything on the website (text, projects, skills, links,
   certificates, chatbot answers) is read from here.
   Replace every "Your ..." placeholder with your real info.
   ========================================================== */

window.PORTFOLIO = {
  /* ---------- BASIC INFO ---------- */
  firstName: "ASHAR",
  lastName: "HAMIDI",
  photo: "assets/profile.jpg",          // replace the file to change the photo
  badge: "Open to work · Your Company / Status",
  roles: ["Web Developer", "Full-Stack Engineer", "Problem Solver"],
  tagline:
    "Turning ideas into fast, clean and memorable web experiences. Write one or two lines about what you build and what you care about.",
  cardTitle: "Your Name",
  cardSubtitle: "Your Field · Your College",
  chips: [
    { icon: "▲", value: "90%", label: "Your metric" },
    { icon: "◆", value: "Stack", label: "Your best skill" }
  ],
  resumeFile: "assets/resume.pdf",      // put your resume PDF here (optional)
  email: "md.asharhamidi@gmail.com",
  location: "City, Country",

  socials: {
    github: "https://github.com/asharhamidi7",
    linkedin: "https://linkedin.com/in/your-username",
    email: "mailto:you@example.com"
  },

  /* ---------- ABOUT ---------- */
  about: {
    paragraphs: [
      "Write 2–3 short paragraphs about who you are: your course or job, what you specialise in, and what you are learning right now.",
      "Mention one or two things you are proud of, such as a project, a rank, a community or an internship."
    ],
    focusTitle: "Currently focused on",
    focusHeadline: "Building things that work well",
    focusItems: [
      "Your main focus area",
      "Something you are learning",
      "A technology you enjoy",
      "Clean, readable engineering"
    ],
    facts: [
      { k: "Specialization", v: "Your field" },
      { k: "Institution", v: "Your college / company" },
      { k: "Status", v: "Open to work" }
    ],
    stats: [
      { n: 4, suffix: "+", label: "Projects" },
      { n: 3, suffix: "+", label: "Certificates" },
      { n: 1, suffix: "", label: "Internships" },
      { n: 2, suffix: "+", label: "Years coding" }
    ]
  },

  /* ---------- SKILLS ---------- */
  /* level = 0 to 100 */
  skillGroups: [
    {
      title: "Languages",
      icon: "‹/›",
      items: [
        { name: "JavaScript", level: 85, tag: "Advanced" },
        { name: "Python", level: 80, tag: "Advanced" },
        { name: "HTML / CSS", level: 90, tag: "Advanced" },
        { name: "SQL", level: 70, tag: "Intermediate" }
      ]
    },
    {
      title: "Frameworks & Tools",
      icon: "⚙",
      items: [
        { name: "React", level: 75, tag: "Core" },
        { name: "Node.js", level: 70, tag: "Core" },
        { name: "Git & GitHub", level: 85, tag: "Daily" },
        { name: "REST APIs", level: 78, tag: "Core" }
      ]
    }
  ],
  skillRings: [
    { name: "Frontend", level: 90 },
    { name: "Backend", level: 75 },
    { name: "Databases", level: 70 },
    { name: "Problem solving", level: 85 }
  ],

  /* ---------- PROJECTS (add yours later) ---------- */
  /* category: any word. It becomes a filter button automatically. */
  projects: [
    {
      category: "Full-Stack",
      kind: "Personal project",
      title: "Project One",
      description:
        "Two lines about what this project does, who it is for, and what problem it solves.",
      tags: ["HTML", "CSS", "JavaScript"],
      link: "#",
      linkLabel: "View project"
    },
    {
      category: "Web App",
      kind: "College project",
      title: "Project Two",
      description:
        "Describe your second project here. Mention the result: speed, users, accuracy, anything measurable.",
      tags: ["React", "Node.js", "MongoDB"],
      link: "#",
      linkLabel: "View project"
    },
    {
      category: "Web App",
      kind: "Internship work",
      title: "Project Three",
      description:
        "Describe your third project here. Keep it short and specific.",
      tags: ["Python", "Flask", "SQL"],
      link: "#",
      linkLabel: "View project"
    }
  ],

  /* ---------- GITHUB / ACTIVITY ---------- */
  github: {
    username: "your-username",
    stats: [
      { n: "0", label: "Public repositories" },
      { n: "0", label: "Total contributions" },
      { n: "Stack", label: "Primary focus" }
    ],
    languages: [
      { name: "JavaScript", pct: 45 },
      { name: "Python", pct: 30 },
      { name: "HTML / CSS", pct: 25 }
    ]
  },

  /* ---------- EDUCATION (newest first) ---------- */
  education: [
    {
      period: "2024 — 2028",
      title: "B.Tech in Your Course",
      place: "Your University, City",
      score: "CGPA 8.7",
      status: "Ongoing",
      tags: ["Subject one", "Subject two", "Subject three"]
    },
    {
      period: "2021 — 2023",
      title: "Senior Secondary (XII)",
      place: "Your School, City",
      score: "00%",
      status: "Completed",
      tags: ["Physics", "Chemistry", "Mathematics"]
    },
    {
      period: "2020 — 2021",
      title: "Secondary (X)",
      place: "Your School, City",
      score: "00%",
      status: "Completed",
      tags: ["Mathematics", "Science"]
    }
  ],

  /* ---------- CERTIFICATES ---------- */
  certificates: [
    {
      title: "Your Certificate Name",
      issuer: "Issuer · Year",
      badge: "Featured",
      tags: ["Skill", "Skill"],
      link: "#"
    },
    {
      title: "Another Certificate",
      issuer: "Issuer · Year",
      badge: "Professional",
      tags: ["Skill", "Skill"],
      link: "#"
    },
    {
      title: "Third Certificate",
      issuer: "Issuer · Year",
      badge: "Course",
      tags: ["Skill"],
      link: "#"
    }
  ],

  /* ---------- CONTACT ---------- */
  contact: {
    heading: "Let's build something.",
    text: "Have a project, an internship or just a question? Send a message and I will reply within a couple of days.",
    /* Optional: paste a Formspree URL (https://formspree.io) to receive
       messages by email. If left empty, the form opens the visitor's
       email app instead. */
    formEndpoint: ""
  },

  /* ---------- CHATBOT ---------- */
  assistantName: "Ask Me",
  assistantIntro:
    "Hi! Ask me about the projects, skills, education or how to get in touch.",
  suggestions: [
    "Show me the projects",
    "What are the main skills?",
    "How can I get in touch?"
  ]
};
