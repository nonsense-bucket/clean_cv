import ConsultlyLogo from "../images/logos/consultly.svg";
import AmbitLogo from "../images/logos/ambit.png";
import BarepapersLogo from "../images/logos/barepapers.svg";
import BimLogo from "../images/logos/bim.png";
import CDGOLogo from "../images/logos/cdgo.png";
import ClevertechLogo from "../images/logos/clevertech.png";
import EvercastLogo from "../images/logos/evercast.svg";
import Howdy from "../images/logos/howdy.png";
import JarockiMeLogo from "../images/logos/jarocki.svg";
import JojoMobileLogo from "../images/logos/jojomobile.png";
import MonitoLogo from "../images/logos/monito.svg";
import MobileVikingsLogo from "../images/logos/mv.png";
import NSNLogo from "../images/logos/nsn.svg";
import ParabolLogo from "../images/logos/parabol.svg";
import TastyCloudLogo from "../images/logos/tastycloud.png";
import YearProgressLogo from "../images/logos/yearprogress.svg";
import Minimal from "../images/logos/minimal.svg";
import { GitHubIcon } from "@/components/icons/GitHubIcon";
import { LinkedInIcon } from "@/components/icons/LinkedInIcon";
import { XIcon } from "@/components/icons/XIcon";
import PeterChenAvatar from "../images/logos/peter_chen_avatar.png"

export const RESUME_DATA = {
  name: "Peter Chen",
  initials: "PC",
  location: "Vancouver, Canada",
  locationLink: "https://www.google.com/maps/place/Vancouver",
  about:
    "Front-End Developer focused on building exceptional user experiences.",
  summary:
    "A mechanical engineer turned front-end developer with a robust background in problem-solving, critical thinking, and team collabration. Highly adept at both independent and group projects, with an emphasis on website development and enhancing user experience in web applications.",
  avatarUrl: "https://avatars.githubusercontent.com/u/111414765?s=400&u=297e6f8792adceb4d76d107e05b9bf732474908d&v=4",
  personalWebsiteUrl: "https://jarocki.me",
  contact: {
    email: "35woodstreet@gmail.com",
    tel: "+17788685978",
    social: [
      {
        name: "GitHub",
        url: "https://github.com/nonsense-bucket",
        icon: GitHubIcon,
      },
      {
        name: "LinkedIn",
        url: "https://www.linkedin.com/in/zhiyuan-peter-chen-3b20a892/",
        icon: LinkedInIcon,
      },
      {
        name: "X",
        url: "https://twitter.com/pet_che11/",
        icon: XIcon,
      },
    ],
  },
  education: [
    {
      school: "Pennsylvania State University",
      degree: "Master of Mechanical Engineering",
      start: "2014",
      end: "2016",
    },
  ],
  work: [
    {
      company: "Stealth Mode Startup",
      link: "https://github.com/nonsense-bucket",
      badges: ["Remote"],
      title: "Front-End Developer",
      logo: ParabolLogo,
      start: "2023",
      end: "2024",
      description:
        "With over two years in front-end development, I am currently contributing to a stealth mode startup, focusing on an advanced AI chatbot leveraging state-of-the-art Large Language Models (LLM) technology.",
    },
    {
      company: "TeamPickle",
      link: "https://peter-chen-portfolio.netlify.app/",
      badges: ["Remote"],
      title: "Front-End Developer",
      logo: ClevertechLogo,
      start: "2021",
      end: "2024",
      description:
        "As a dedicated freelance web developer, I successfully delivered over 10 projects within 24 months.",
    },
    {
      company: "Salas O'Brien",
      link: "https://salasobrien.com/",
      badges: [],
      title: "Mechanical Engineer",
      logo: JojoMobileLogo,
      start: "2016",
      end: "2024",
      description:
        "Experienced in load calculations, energy modeling, client project execution, and working on commercial and residential projects",
    },
  ],
  skills: [
    "JavaScript",
    "TypeScript",
    "React/Next.js",
    "Node.js",
    "MongoDB",
    "MySQL",
  ],
  projects: [
    {
      title: "AI Chatbot (Ongoing)",
      techStack: [
        "TypeScript",
        "Next.js",
        "React",
        "Tailwind",
        "AWS S3",
      ],
      description: "An AI-driven chatbot utilizing cutting-edge Large Language Models (LLM) technology.",
      logo: ConsultlyLogo,
      link: {
        label: "Peter Chen Portfolio",
        href: "https://peter-chen-portfolio.netlify.app/",
      },
    },
    {
      title: "E-Commerce Dashboard (Ongoing)",
      techStack: ["TypeScript", "Next.js", "Tailwind", "Prisma", "MySQL"],
      description:
        "A feature-rich E-Commerce platform and Admin Dashboard using Next.js 13, ensuring seamless navigation and an exceptional user experience.",
      logo: MonitoLogo,
      link: {
        label: "Peter Chen Portfolio",
        href: "https://peter-chen-portfolio.netlify.app/",
      },
    },
    {
      title: "My Own Portfolio",
      techStack: ["React", "Next", "Tailwind", "Netlify"],
      description:
        "A really good practice with React, Next.js and Tailwind.",
      logo: JarockiMeLogo,
      link: {
        label: "Portfolio",
        href: "https://peter-chen-portfolio.netlify.app/",
      },
    },
    {
      title: "'Craving' - Recipe for Tonight",
      techStack: ["React", "API"],
      description:
      "A food recipe application utilizing a recipe API to fetch and display recipe data in an elegant card-based system. This project showcases my expertise as a frontend developer in creating interactive and visually appealing user interfaces for culinary enthusiasts.",
      logo: JarockiMeLogo,
      link: {
      label: "Craving",
      href: "https://teampickle-react-recipe-app.netlify.app/",
      },
    },
    {
      title: "Calculator with React",
      techStack: ["React"],
      description:
        "A web-based calculator utilizing React during the initial stages of my learning journey. This project represents my commitment to expanding my skills as a front-end developer and demonstrates my ability to apply React concepts in practical applications.",
      logo: BarepapersLogo,
      link: {
        label: "calculator",
        href: "https://team-pickle-calculator.netlify.app/",
      },
    },
    {
      title: "Pokemon Wiki",
      techStack: ["React", "API"],
      description: "A comprehensive Pokemon encyclopedia utilizing the Pokemon API and React.js framework.",
      logo: YearProgressLogo,
      link: {
        label: "Pokemon",
        href: "https://team-pickle-pokemonwiki.netlify.app/",
      },
    },
    {
      title: "Advanced To-do List",
      techStack: ["React"],
      description:
        "A robust todo list application with comprehensive features such as adding, deleting, and changing the status of items. It comes with a filtering mechanism to efficiently organize tasks based on their status.",
      logo: ParabolLogo,
      link: {
        label: "to-do list",
        href: "https://team-pickle-better-to-do.netlify.app/",
      },
    },
  ],
} as const;
