import {
  GithubIcon,
  TwitterIcon,
  LinkedinIcon,
  InstagramIcon,
  YoutubeIcon,
  SparklesIcon,
  PencilLineIcon,
  NavigationIcon,
  Wand2Icon,
  BookmarkIcon,
} from "lucide-react";
import { BsFillEnvelopeOpenFill, BsGithub, BsLinkedin } from "react-icons/bs";
import CardWithHoverAnimation from "@/components/designs/CardWithHoverAnimation";
import ProjectCard from "@/components/designs/ProjectCard";
import Breadcrumb from "@/components/designs/Breadcrumb";

export const Profiles = {
  github: {
    title: "GitHub",
    url: "https://github.com/ozcaneren",
    icon: <GithubIcon size={16} />,
  },
  linkedin: {
    title: "LinkedIn",
    url: "https://www.linkedin.com/in/eren-ozcan/",
    icon: <LinkedinIcon size={16} />,
  },
  twitter: {
    title: "Twitter",
    url: "https://twitter.com/erenozcandev",
    icon: <TwitterIcon size={16} />,
  },
  instagram: {
    title: "Instagram",
    url: "https://www.instagram.com/erenozcan17/",
    icon: <InstagramIcon size={16} />,
  },
};

export const Links = [
  {
    href: "/",
    label: "Home",
    icon: <SparklesIcon size={16} />,
  },
  {
    href: "/cv",
    label: "CV",
    icon: <PencilLineIcon size={16} />,
  },
  {
    href: "/project",
    label: "Projects",
    icon: <NavigationIcon size={16} />,
  },
  {
    href: "/component",
    label: "Components",
    icon: <Wand2Icon size={16} />,
  },
];

export const Projects = {
  "redesigned-fullstack-app": {
    title: "Redesigned Fullstack App",
    description: "A fullstack app with a redesigned UI",
    url: "https://github.com/ozcaneren",
    techStack: "React, Tailwind, NodeJS, Express, MongoDB",
    visibility: "Public",
    id: 1,
  },
  "portfolio-site": {
    title: "Portfolio Site",
    description: "A React App",
    url: "https://github.com/ozcaneren/Portfolio-Site",
    techStack: "React, Tailwind",
    visibility: "Public",
    id: 2,
  },
  "nextjs-first-project": {
    title: "NextJS First Project",
    description: "A NextJS App",
    url: "https://github.com/ozcaneren/nextjs-first-project",
    techStack: "NextJS",
    visibility: "Public",
    id: 3,
  },
  "redesigned-recoded-portfolio-site": {
    title: "Redesigned Recoded Portfolio Site",
    description: "A NextJS App",
    url: "https://github.com/ozcaneren/redesigned-recoded-porfolio-site",
    techStack: "NextJS",
    visibility: "Public",
    id: 4,
  },

};

export const Component = {
  "card-hover": {
    component: <CardWithHoverAnimation />,
    title: "Card with hover animation",
  },
  "project-card": {
    component: <ProjectCard />,
    title: "Project Card",
  },
  breadcrumb: {
    component: <Breadcrumb />,
    title: "Breadcrumb",
  },
};

export const SITE_ROUTES = {
  home: "/",
  projects: "/projects",
};

export const MENU_OPTIONS = [
  { id: "0", name: "Introduction", url: "#intro" },
  { id: "1", name: "About", url: "#about" },
  { id: "2", name: "Projects", url: "#projects" },
];

export const SITE_STRINGS = {
  textLogo: "Eren",
};

export const SOCIAL_MEDIA = [
  {
    id: "github",
    title: "GitHub",
    url: "https://github.com/ozcaneren",
    icon: <GithubIcon size={25} />,
  },
  {
    id: "linkedin",
    title: "LinkedIn",
    url: "https://www.linkedin.com/in/eren-ozcan/",
    icon: <LinkedinIcon size={25} />,
  },
  {
    id: "mail",
    icon: <BsFillEnvelopeOpenFill />,
    title: "Send me an email",
    url: "mailto://erenozcanweb@gmail.com",
  },
  {
    id: "twitter",
    title: "Twitter",
    url: "https://twitter.com/erenozcandev",
    icon: <TwitterIcon size={25} />,
  },
  {
    id: "instagram",
    title: "Instagram",
    url: "https://www.instagram.com/erenozcan17/",
    icon: <InstagramIcon size={25} />,
  },
];
