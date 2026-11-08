import type { Windows } from "@store/window";
import type { LocationFolder, LocationType } from "../types/finderTypes";

const navLinks = [
  {
    id: 1,
    name: "Projects",
    type: "finder",
  },
  {
    id: 3,
    name: "Contact",
    type: "contact",
  },
  {
    id: 4,
    name: "Resume",
    type: "resume",
  },
] as const;

const navIcons = [
  {
    id: 1,
    img: "/icons/wifi.svg",
  },
  {
    id: 2,
    img: "/icons/search.svg",
  },
  {
    id: 3,
    img: "/icons/user.svg",
  },
  {
    id: 4,
    img: "/icons/mode.svg",
  },
];

const dockApps = [
  {
    id: "finder",
    name: "Portfolio",
    icon: "finder.png",
    canOpen: true,
  },
  {
    id: "safari",
    name: "Tools",
    icon: "safari.png",
    canOpen: true,
  },
  {
    id: "photos",
    name: "Gallery",
    icon: "photos.png",
    canOpen: true,
  },
  {
    id: "contact",
    name: "Contact",
    icon: "contact.png",
    canOpen: true,
  },
  {
    id: "terminal",
    name: "Skills",
    icon: "terminal.png",
    canOpen: true,
  },
  {
    id: "trash",
    name: "Archive",
    icon: "trash.png",
    canOpen: true,
  },
] as const;

// Dates are each tool's public release.
const blogPosts = [
  {
    id: 1,
    date: "February 24, 2025",
    title: "Claude Code, An agentic coding tool that works right in your terminal",
    image: "/images/tools/claude-code.png",
    link: "https://claude.com/product/claude-code",
  },
  {
    id: 2,
    date: "March 14, 2023",
    title: "Claude, Anthropic's AI model for thinking, writing and coding",
    image: "/images/tools/claude.png",
    link: "https://claude.ai",
  },
  {
    id: 3,
    date: "July 19, 2022",
    title: "TanStack, Type-safe routing, data fetching and full-stack React",
    image: "/images/tools/tanstack.png",
    link: "https://tanstack.com",
  },
  {
    id: 4,
    date: "September 9, 2021",
    title: "Drizzle ORM, A lightweight, type-safe ORM for TypeScript and SQL",
    image: "/images/tools/drizzle.png",
    link: "https://orm.drizzle.team",
  },
];

const techStack = [
  {
    category: "Frontend",
    items: ["React", "TypeScript", "TanStack", "Next.js", "Astro"],
  },
  {
    category: "Styling",
    items: ["Tailwind CSS", "shadcn/ui", "GSAP"],
  },
  {
    category: "Backend",
    items: ["Node.js", "Bun", "Express", "Hono", "Zod"],
  },
  {
    category: "Database",
    items: ["PostgreSQL", "Drizzle", "SQL Server"],
  },
  {
    category: "AI",
    items: ["Claude Code", "Claude API", "Agent Skills"],
  },
  {
    category: "DevOps",
    items: ["Docker", "Cloudflare", "Railway", "Vercel"],
  },
  {
    category: "Dev Tools",
    items: ["Git", "GitHub", "Vitest"],
  },
];

const socials = [
  {
    id: 1,
    text: "Github",
    icon: "/icons/github.svg",
    bg: "#f4656b",
    link: "https://github.com/williamjusticedavis",
  },
  {
    id: 3,
    text: "Twitter/X",
    icon: "/icons/twitter.svg",
    bg: "#ff866b",
    link: "https://x.com/VogelZevi",
  },
  {
    id: 4,
    text: "LinkedIn",
    icon: "/icons/linkedin.svg",
    bg: "#05b6f6",
    link: "https://www.linkedin.com/in/yzvogel/",
  },
];

const galleryAlbums = [
  { id: "all", title: "All Photos", icon: "/icons/gicon1.svg" },
  { id: "efootball", title: "eFootball Explained", icon: "/images/folder.png" },
  { id: "gridwise", title: "Gridwise", icon: "/images/folder.png" },
  { id: "horse", title: "Horse Website", icon: "/images/folder.png" },
  { id: "portfolio", title: "MacOS Portfolio", icon: "/images/folder.png" },
] as const;

export type GalleryAlbumId = (typeof galleryAlbums)[number]["id"];

const gallery: readonly {
  id: number;
  album: Exclude<GalleryAlbumId, "all">;
  name: string;
  caption: string;
  img: string;
}[] = [
  {
    id: 1,
    album: "efootball",
    name: "efootball-home.png",
    caption: "Home page",
    img: "/images/project-efootball.png",
  },
  {
    id: 2,
    album: "efootball",
    name: "efootball-players.jpg",
    caption: "Every player card",
    img: "/images/gallery/efb-players.jpg",
  },
  {
    id: 3,
    album: "efootball",
    name: "efootball-finishing.jpg",
    caption: "Stat page: Finishing",
    img: "/images/gallery/efb-stat.jpg",
  },
  {
    id: 4,
    album: "gridwise",
    name: "gridwise-solver.png",
    caption: "Solver, one hint in",
    img: "/images/project-gridwise.png",
  },
  {
    id: 5,
    album: "gridwise",
    name: "gridwise-learn.jpg",
    caption: "Learn: 28 techniques",
    img: "/images/gallery/grid-learn.jpg",
  },
  {
    id: 6,
    album: "gridwise",
    name: "gridwise-naked-pair.jpg",
    caption: "Lesson: Naked Pair",
    img: "/images/gallery/grid-lesson.jpg",
  },
  {
    id: 9,
    album: "horse",
    name: "horse-home.jpg",
    caption: "Our horses",
    img: "/images/project-horse.jpg",
  },
  {
    id: 10,
    album: "horse",
    name: "horse-riding-skills.jpg",
    caption: "Riding skills",
    img: "/images/gallery/horse-skills.jpg",
  },
  {
    id: 11,
    album: "horse",
    name: "horse-therapy.jpg",
    caption: "Therapeutic riding",
    img: "/images/gallery/horse-therapy.jpg",
  },
  {
    id: 7,
    album: "portfolio",
    name: "portfolio-desktop.jpg",
    caption: "Desktop and Finder",
    img: "/images/project-portfolio.jpg",
  },
  {
    id: 8,
    album: "portfolio",
    name: "portfolio-windows.jpg",
    caption: "Skills and Tools",
    img: "/images/gallery/portfolio-windows.jpg",
  },
];

export {
  navLinks,
  navIcons,
  dockApps,
  blogPosts,
  techStack,
  socials,
  galleryAlbums,
  gallery,
};

const WORK_LOCATION = {
  id: 1,
  type: "work",
  name: "Work",
  icon: "/icons/work.svg",
  kind: "folder",
  children: [
    {
      id: 5,
      name: "eFootball Explained",
      icon: "/images/folder.png",
      kind: "folder",
      position: "top-10 left-5",
      windowPosition: "top-[5vh] left-5",
      children: [
        {
          id: 1,
          name: "eFootball Explained.txt",
          icon: "/images/txt.png",
          kind: "file",
          fileType: "txt",
          position: "top-5 left-10",
          description: [
            "A fan-made reference site that explains what every eFootball stat, skill and playing style does during a match, in plain language.",
            "A \"Show the maths\" toggle reveals the exact numbers behind each explanation, and anything not yet confirmed is clearly marked.",
            "Covers 37,000+ player cards with stats, skills and boosters, a progression-points builder and side-by-side comparison, refreshed every week as the game updates.",
            "Built with Astro on Cloudflare Pages, with a D1 database for issue reports and a Python pipeline that turns each weekly game update into fresh player data.",
          ],
        },
        {
          id: 2,
          name: "efootballexplained.com",
          icon: "/images/safari.png",
          kind: "file",
          fileType: "url",
          href: "https://efootballexplained.com",
          position: "top-10 right-20",
        },
        {
          id: 4,
          name: "efootball-explained.png",
          icon: "/images/image.png",
          kind: "file",
          fileType: "img",
          position: "top-52 right-80",
          imageUrl: "/images/project-efootball.png",
        },
      ],
    },
    {
      id: 6,
      name: "Gridwise (Sudoku)",
      icon: "/images/folder.png",
      kind: "folder",
      position: "top-52 right-80",
      windowPosition: "top-[20vh] left-7",
      children: [
        {
          id: 1,
          name: "Gridwise.txt",
          icon: "/images/txt.png",
          kind: "file",
          fileType: "txt",
          position: "top-5 right-10",
          description: [
            "A sudoku solver that shows its working: instead of handing back a finished grid, it names every move (\"Skyscraper on 4\", \"Naked Triple in box 6\") and walks through the reasoning step by step.",
            "No brute force: the engine only plays moves a person could find and name, across 28 techniques.",
            "Each technique has its own lesson in the Learn section, with a worked example and practice puzzles.",
            "Type, paste or photograph a puzzle; photos are read with image preprocessing and Tesseract OCR.",
            "pnpm monorepo: a framework-free TypeScript engine that runs in the browser, a TanStack Start + React frontend, an Express API and Postgres with Drizzle. Deployed on Railway.",
          ],
        },
        {
          id: 2,
          name: "gridwise.app",
          icon: "/images/safari.png",
          kind: "file",
          fileType: "url",
          href: "https://sudoku-site-production.up.railway.app",
          position: "top-20 left-20",
        },
        {
          id: 3,
          name: "gridwise-github.com",
          icon: "/images/safari.png",
          kind: "file",
          fileType: "url",
          href: "https://github.com/williamjusticedavis/sudoku-site",
          position: "top-52 left-10",
        },
        {
          id: 4,
          name: "gridwise.png",
          icon: "/images/image.png",
          kind: "file",
          fileType: "img",
          position: "top-52 left-80",
          imageUrl: "/images/project-gridwise.png",
        },
      ],
    },
    {
      id: 12,
      name: "Horse Website",
      icon: "/images/folder.png",
      kind: "folder",
      position: "top-52 right-5",
      windowPosition: "top-[33vh] left-7",
      children: [
        {
          id: 1,
          name: "Horse Website.txt",
          icon: "/images/txt.png",
          kind: "file",
          fileType: "txt",
          position: "top-5 left-10",
          description: [
            "A Hebrew, right-to-left website for horse enthusiasts and riding instructors.",
            "Three sections: profiles of the horses with photos and tags, an overview of therapeutic riding with cards matched to each child's needs, and a riding-skills reference that instructors can browse by category, difficulty and prerequisite chain.",
            "Accounts and an admin panel for managing users and content, with photo uploads.",
            "Built on my fullstack templates: React 19 with TanStack Router and Query and Tailwind CSS v4, plus an Express 5 API with Drizzle on PostgreSQL, JWT auth and OpenAPI docs. Deployed on Render.",
          ],
        },
        {
          id: 2,
          name: "horse-website.com",
          icon: "/images/safari.png",
          kind: "file",
          fileType: "url",
          href: "https://horse-3llf.onrender.com",
          position: "top-10 right-20",
        },
        {
          id: 3,
          name: "horse-github.com",
          icon: "/images/safari.png",
          kind: "file",
          fileType: "url",
          href: "https://github.com/williamjusticedavis/horse-frontend",
          position: "top-52 left-10",
        },
        {
          id: 4,
          name: "horse-website.png",
          icon: "/images/image.png",
          kind: "file",
          fileType: "img",
          position: "top-52 right-20",
          imageUrl: "/images/project-horse.jpg",
        },
      ],
    },
    {
      id: 7,
      name: "MacOS Portfolio",
      icon: "/images/folder.png",
      kind: "folder",
      position: "top-10 left-80",
      windowPosition: "top-[46vh] left-7",
      children: [
        {
          id: 1,
          name: "MacOS Portfolio.txt",
          icon: "/images/txt.png",
          kind: "file",
          fileType: "txt",
          position: "top-5 left-10",
          description: [
            "Modern portfolio showcasing work and skills with clean design and smooth animations.",
            "Responsive layouts that work seamlessly across all devices.",
            "Built with React, GSAP, and Tailwind CSS for visual appeal and functionality.",
            "Was originally taken from a JSMastery tutorial, but has since been completely rebuilt in typescript",
          ],
        },
        {
          id: 2,
          name: "macos-portfolio.com",
          icon: "/images/safari.png",
          kind: "file",
          fileType: "url",
          href: "https://github.com/williamjusticedavis/MacOS_Portfolio",
          position: "top-10 right-20",
        },
        {
          id: 4,
          name: "macos-portfolio.png",
          icon: "/images/image.png",
          kind: "file",
          fileType: "img",
          position: "top-52 right-80",
          imageUrl: "/images/project-portfolio.jpg",
        },
      ],
    },
  ],
} as const;

const ABOUT_LOCATION = {
  id: 2,
  type: "about",
  name: "About me",
  icon: "/icons/info.svg",
  kind: "folder",
  children: [
    {
      id: 4,
      name: "about-me.txt",
      icon: "/images/txt.png",
      kind: "file",
      fileType: "txt",
      position: "top-60 left-5",
      subtitle: "Meet the Developer Behind the Code",
      image: "/images/Rolling_Eyes_Emoji_Icon.jpg",
      description: [
        "Hey! I’m William 👋, a full-stack developer who builds web apps with React, TypeScript and Node.js.",
        "I spent 2024–2025 as a full-stack developer in the Israeli Air Force, building internal web apps, and since then finished a practical software engineering program at Handesaim with a 95+ average.",
        "I work with Claude Code every day. It takes care of a lot of the typing, so more of my time goes into design, architecture and making sure things actually work.",
        "Lately that’s meant a sudoku solver that explains every move it makes, and a site that digs into what eFootball’s stats really do.",
        "I’m big on clean UI, good UX, and writing code that doesn’t need a search party to debug.",
        "Outside of work, you'll find me gaming (eFootball, obviously), reading, or listening to metal.",
      ],
    },
  ],
} as const;

const RESUME_LOCATION = {
  id: 3,
  type: "resume",
  name: "Resume",
  icon: "/icons/file.svg",
  kind: "folder",
  children: [
    {
      id: 1,
      name: "Resume.pdf",
      icon: "/images/pdf.png",
      kind: "file",
      fileType: "pdf",
      // you can add `href` if you want to open a hosted resume
      // href: "/your/resume/path.pdf",
    },
  ],
} as const;

// Retired projects. Folder ids 8-11 avoid the Work folders (5-7, 12)
// so the Finder sidebar highlight never matches two items.
const TRASH_LOCATION = {
  id: 4,
  type: "trash",
  name: "Archive",
  icon: "/icons/trash.svg",
  kind: "folder",
  children: [
    {
      id: 8,
      name: "Fullstack templates",
      icon: "/images/folder.png",
      kind: "folder",
      position: "top-10 left-5",
      children: [
        {
          id: 1,
          name: "Fullstack templates.txt",
          icon: "/images/txt.png",
          kind: "file",
          fileType: "txt",
          position: "top-5 left-10",
          description: [
            "A matching pair of production-ready starters: a React frontend and a Node.js API built to work together.",
            "Frontend: React 19, TanStack Router and Query, Tailwind CSS v4, Radix UI and Sonner, built with Vite and Bun.",
            "Backend: Express 5 in strict TypeScript, Drizzle ORM on PostgreSQL, Zod validation, JWT auth with refresh tokens, Pino logging and generated OpenAPI docs.",
            "February 2026.",
          ],
        },
        {
          id: 2,
          name: "frontend-template.com",
          icon: "/images/safari.png",
          kind: "file",
          fileType: "url",
          href: "https://github.com/williamjusticedavis/frontend-template",
          position: "top-10 right-20",
        },
        {
          id: 3,
          name: "backend-template.com",
          icon: "/images/safari.png",
          kind: "file",
          fileType: "url",
          href: "https://github.com/williamjusticedavis/backend-template",
          position: "top-52 left-10",
        },
        {
          id: 4,
          name: "frontend-template.png",
          icon: "/images/image.png",
          kind: "file",
          fileType: "img",
          position: "top-52 right-20",
          imageUrl: "/images/archive/templates.jpg",
        },
      ],
    },
    {
      id: 9,
      name: "AI Code Compass",
      icon: "/images/folder.png",
      kind: "folder",
      position: "top-10 left-72",
      children: [
        {
          id: 1,
          name: "AI Code Compass.txt",
          icon: "/images/txt.png",
          kind: "file",
          fileType: "txt",
          position: "top-5 right-10",
          description: [
            "An AI-powered onboarding tool that helps developers understand unfamiliar codebases.",
            "Connect a GitHub repo to get AI-written architecture explanations, semantic search across the code, dependency graphs and onboarding guides.",
            "Built with React, Express and Drizzle on PostgreSQL with pgvector, using the Claude API, Bun and Docker.",
            "Paused partway through: authentication and project ingestion are done, the AI analysis phases are not.",
          ],
        },
        {
          id: 2,
          name: "ai-code-compass.com",
          icon: "/images/safari.png",
          kind: "file",
          fileType: "url",
          href: "https://github.com/williamjusticedavis/codecompass",
          position: "top-20 left-20",
        },
        {
          id: 4,
          name: "ai-code-compass.png",
          icon: "/images/image.png",
          kind: "file",
          fileType: "img",
          position: "top-52 left-80",
          imageUrl: "/images/archive/codecompass.jpg",
        },
      ],
    },
    {
      id: 10,
      name: "Sudoku v1",
      icon: "/images/folder.png",
      kind: "folder",
      position: "top-52 left-5",
      children: [
        {
          id: 1,
          name: "Sudoku v1.txt",
          icon: "/images/txt.png",
          kind: "file",
          fileType: "txt",
          position: "top-5 left-10",
          description: [
            "My first take on a sudoku site, two years before Gridwise.",
            "Daily puzzles generated on the server, with sign-up and login.",
            "React and React Router on the frontend; Express, MongoDB (Mongoose) and JWT auth with bcrypt on the backend.",
            "October 2024.",
          ],
        },
      ],
    },
    {
      id: 11,
      name: "C++ Video Processing",
      icon: "/images/folder.png",
      kind: "folder",
      position: "top-52 left-72",
      children: [
        {
          id: 1,
          name: "C++ Video Processing.txt",
          icon: "/images/txt.png",
          kind: "file",
          fileType: "txt",
          position: "top-5 left-10",
          description: [
            "A C++ console app for editing video from the command line.",
            "Converts between .avi, .mp4 and .mov, and can resize, trim, rotate, add text overlays and apply grayscale or blur filters.",
            "Built with OpenCV and CMake. September 2024.",
          ],
        },
        {
          id: 2,
          name: "cpp-video-processing.com",
          icon: "/images/safari.png",
          kind: "file",
          fileType: "url",
          href: "https://github.com/williamjusticedavis/CPP-video-manipulation-project",
          position: "top-10 right-20",
        },
      ],
    },
  ],
} as const;

export const locations = {
  work: WORK_LOCATION,
  about: ABOUT_LOCATION,
  resume: RESUME_LOCATION,
  trash: TRASH_LOCATION,
} satisfies Record<LocationType, LocationFolder>;

const INITIAL_Z_INDEX = 1000;

const WINDOW_CONFIG: Windows = {
  finder: { isOpen: false, zIndex: INITIAL_Z_INDEX, data: null },
  contact: { isOpen: false, zIndex: INITIAL_Z_INDEX, data: null },
  resume: { isOpen: false, zIndex: INITIAL_Z_INDEX, data: null },
  safari: { isOpen: false, zIndex: INITIAL_Z_INDEX, data: null },
  photos: { isOpen: false, zIndex: INITIAL_Z_INDEX, data: null },
  terminal: { isOpen: false, zIndex: INITIAL_Z_INDEX, data: null },
  txtfile: { isOpen: false, zIndex: INITIAL_Z_INDEX, data: null },
  imgfile: { isOpen: false, zIndex: INITIAL_Z_INDEX, data: null },
};

export { INITIAL_Z_INDEX, WINDOW_CONFIG };
