import type { Hackathon, Project } from "@/types/content";

export const workProjects: Project[] = [
  {
    id: "dancefloor",
    title: "Dancefloor",
    tagline: "A social platform for the global dance community",
    url: "https://dancefloor.social",
    role: "Software Engineer · current focus",
    year: "2024 — present",
    tech: ["Next.js", "TypeScript", "Auth", "Postgres", "Tailwind"],
    media: { kind: "image", src: "/images/dancefloor.png", alt: "Dancefloor screenshot" },
    description: [
      "My main project right now — building product features that connect dancers, organizers, and venues into a single social network.",
      "Currently in private beta — full description coming soon.",
    ],
  },
  {
    id: "openhousing",
    title: "OpenHousing",
    tagline: "Real-estate data transparency platform for Vancouver",
    url: "https://openhousing.ca",
    role: "Software Engineer",
    year: "2024 — present",
    tech: ["Next.js", "TypeScript", "AI / ML", "Mapping", "Data Pipelines", "Postgres"],
    media: { kind: "image", src: "/images/openhousing.png", alt: "OpenHousing screenshot" },
    description: [
      "An AI-driven housing-market intelligence platform — detects market anomalies, reveals ownership structures, and flags property risk for governments, financial institutions, and real-estate professionals.",
      "Live dashboard mapping Vancouver's short-term rental density, price outliers, and ownership transparency, sourced from land titles searches and the Land Owner Transparency Registry.",
      "I work across data pipelines, model integration, and the customer-facing dashboard.",
    ],
  },
];

export const personalProjects: Project[] = [
  {
    id: "trust-me-im-an-ai",
    title: "Trust Me, I'm an AI",
    tagline: "An interactive dark comedy about surviving your AI assistant",
    url: "https://lenore8963.itch.io/trust-me-im-an-ai",
    year: "2025",
    tech: ["Next.js", "TypeScript", "OpenAI", "itch.io"],
    media: {
      kind: "itch",
      src: "/images/trust-me-im-an-ai.png",
      alt: "Trust Me, I'm an AI cover art",
    },
    description: [
      "An educational narrative experience based on real AI mishaps. Users navigate scenarios managing an AI assistant named ARIA — and a rising disaster counter.",
      "Built to use humor to illustrate the everyday pitfalls of generative-AI interaction. Live on itch.io — click the cover to launch.",
    ],
  },
  {
    id: "red-threads-osint",
    title: "Red Threads OSINT",
    tagline: "Mapping Canada–China university connections",
    url: "https://red-threads-viz.vercel.app",
    year: "2025",
    tech: ["Next.js", "TypeScript", "D3.js", "Graph Visualization"],
    media: { kind: "image", src: "/images/red-threads.png", alt: "Red Threads OSINT screenshot" },
    description: [
      "An open-source-intelligence visualization tool that surfaces and maps institutional ties between Canadian and Chinese universities.",
      "Interactive force-directed graph lets researchers and journalists drill into individual relationships and provenance.",
    ],
  },
  {
    id: "justice-journeys",
    title: "Justice Journeys",
    tagline: "Nature-inspired legal education for marginalized communities",
    url: "https://justice-journey.vercel.app",
    year: "2025",
    tech: ["Next.js", "TypeScript", "OpenAI", "Educational Design"],
    media: { kind: "image", src: "/images/justice-journeys.png", alt: "Justice Journeys screenshot" },
    description: [
      "Teaches Canadian legal concepts through narrative learning — users select real legal cases and work with AI animal guides to complete knowledge quizzes and reflections.",
      "Doubles as a research instrument: compares three different AI teaching personalities (rendered as wolves) to identify the most effective educational approach.",
    ],
  },
];

export const schoolProjects: Project[] = [
  {
    id: "doggo-mingo",
    title: "Doggo Mingo",
    tagline: "A social network for pet lovers",
    year: "2024",
    role: "Sole developer",
    tech: ["React", "Tailwind", "Node.js", "Express", "MongoDB", "AWS S3", "OpenAI", "JWT", "GitHub Actions", "Heroku"],
    media: { kind: "youtube", videoId: "NZmzCv6e5Qw" },
    description: [
      "A social platform connecting pet lovers through user profiles, dog showcases, and interactive posts. Designed and built end-to-end as the sole developer.",
      "OpenAI-powered intelligent search, AWS S3 image storage, JWT auth, and a CI/CD pipeline using GitHub Actions and Heroku.",
    ],
  },
  {
    id: "vancouver-real-estate",
    title: "Vancouver Real Estate Prices",
    tagline: "Decision-tree regression model + Streamlit web app",
    year: "2024",
    role: "Team lead",
    tech: ["Python", "scikit-learn", "Pandas", "Matplotlib", "Seaborn", "Streamlit"],
    media: { kind: "image", src: "/images/decision-tree.gif", alt: "Decision tree visualization" },
    description: [
      "Led a team building a Decision Tree regression model in Python to predict Vancouver real-estate prices. Achieved an R² of 0.88.",
      "Wrapped the model in a Streamlit web app for real-time predictions from arbitrary property inputs.",
    ],
  },
  {
    id: "pawlog",
    title: "Pawlog",
    tagline: "React Native app for daily dog-care routines",
    year: "2023",
    tech: ["React Native", "Expo", "Firebase", "Maps"],
    media: { kind: "youtube", videoId: "5aj6d29A3ys" },
    description: [
      "Mobile app for tracking daily dog-care activities, capturing photos, and visualizing walking routes on an interactive map.",
      "Notification system fosters community engagement through timely reminders and updates.",
    ],
  },
];

export const hackathons: Hackathon[] = [
  {
    title: "Hackathon 4 Good Champion",
    bullets: [
      "Led a team to first place by developing an innovative solution to enhance BC United Way's ability to distribute essential health products.",
      "Designed and implemented a logistics-optimization algorithm, reducing distribution time by 120%.",
    ],
  },
  {
    title: "Spexi Geospatial Hackathon Winner",
    bullets: [
      "Developed a technology-business hybrid solution for a drone computer-vision company, securing first place.",
      "Integrated real-time image processing with market-analysis tools to create a comprehensive business solution.",
    ],
  },
];
