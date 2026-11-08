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
    canOpen: false,
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
    canOpen: false,
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
    link: "https://www.linkedin.com/in/yehuda-ze-ev-vogel-728968360/",
  },
];

const photosLinks = [
  {
    id: 1,
    icon: "/icons/gicon1.svg",
    title: "Library",
  },
  {
    id: 2,
    icon: "/icons/gicon2.svg",
    title: "Memories",
  },
  {
    id: 3,
    icon: "/icons/file.svg",
    title: "Places",
  },
  {
    id: 4,
    icon: "/icons/gicon4.svg",
    title: "People",
  },
  {
    id: 5,
    icon: "/icons/gicon5.svg",
    title: "Favorites",
  },
];

const gallery = [
  {
    id: 1,
    img: "/images/gal1.png",
  },
  {
    id: 2,
    img: "/images/gal2.png",
  },
  {
    id: 3,
    img: "/images/gal3.png",
  },
  {
    id: 4,
    img: "/images/gal4.png",
  },
];

export {
  navLinks,
  navIcons,
  dockApps,
  blogPosts,
  techStack,
  socials,
  photosLinks,
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
      id: 7,
      name: "MacOS Portfolio",
      icon: "/images/folder.png",
      kind: "folder",
      position: "top-10 left-80",
      windowPosition: "top-[33vh] left-7",
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
        "Hey! I’m William 👋, a fullstack web developer who enjoys building sleek, interactive websites that actually work well.",
        "I specialize in React and Node.js — and I love making things feel smooth and fast.",
        "I’m big on clean UI, good UX, and writing code that doesn’t need a search party to debug.",
        "Outside of work, you'll find me gaming, reading, listening to metal music or checking out the latest tech trends.",
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

const TRASH_LOCATION = {
  id: 4,
  type: "trash",
  name: "Trash",
  icon: "/icons/trash.svg",
  kind: "folder",
  children: [
    {
      id: 1,
      name: "trash1.png",
      icon: "/images/image.png",
      kind: "file",
      fileType: "img",
      position: "top-10 left-10",
      imageUrl: "/images/trash-1.png",
    },
    {
      id: 2,
      name: "trash2.png",
      icon: "/images/image.png",
      kind: "file",
      fileType: "img",
      position: "top-40 left-80",
      imageUrl: "/images/trash-2.png",
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
