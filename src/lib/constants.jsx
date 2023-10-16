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
import CardWithHoverAnimation from "@/components/designs/CardWithHoverAnimation";
import ProjectCard from "@/components/designs/ProjectCard";
import Breadcrumb from "@/components/designs/Breadcrumb";


export const Profiles = {
  github: {
    title: "GitHub",
    url: "https://github.com/ozcaneren",
    icon: <GithubIcon size={16} />
  },
  linkedin: {
    title: "LinkedIn",
    url: "https://www.linkedin.com/in/eren-ozcan/",
    icon: <LinkedinIcon size={16} />
  },
  twitter: {
    title: "Twitter",
    url: "https://twitter.com/erenozcandev",
    icon: <TwitterIcon size={16} />
  },
  instagram: {
    title: "Instagram",
    url: "https://www.instagram.com/erenozcan17/",
    icon: <InstagramIcon size={16} />
  },
};

export const Links = [
  {
    href: '/',
    label: 'Home',
    icon: <SparklesIcon size={16} />
  },
  {
    href: '/cv',
    label: 'CV',
    icon: <PencilLineIcon size={16} />
  },
  {
    href: '/project',
    label: 'Projects',
    icon: <NavigationIcon size={16} />
  },
  {
    href: '/component',
    label: 'Components',
    icon: <Wand2Icon size={16} />
  },
];

export const Projects = {
  "nextjs-blog": {
    title: "Next.js Blog",
    description: "A blog built with Next.js",
    url: "https://github.com/ozcaneren",
    techStack: "Next.js",
    visibility: "Public",

  },
  "redesigned-fullstack-app": {
    title: "Redesigned Fullstack App",
    description: "A fullstack app with a redesigned UI",
    url: "https://github.com/ozcaneren",
    techStack: "React",
    visibility: "Public",
  },
  "react-native-app": {
    title: "React Native App",
    description: "A React Native app",
    url: "https://github.com/ozcaneren",
    techStack: "React Native",
    visibility: "Private",
  },
  "react-app": {
    title: "React App",
    description: "A React app",
    url: "https://github.com/ozcaneren",
    techStack: "React",
    visibility: "Private",
  },
  "nodejs-app": {
    title: "Node.js App",
    description: "A Node.js app",
    url: "https://github.com/ozcaneren",
    techStack: "Node.js",
    visibility: "Public",
  },
  "express-app": {
    title: "Express App",
    description: "An Express app",
    url: "https://github.com/ozcaneren",
    techStack: "Express",
    visibility: "Private",
  },
}

export const Component = {
  "card-hover": {
    component: <CardWithHoverAnimation />,
    title: "Card with hover animation",
  },
  "project-card": {
    component: <ProjectCard />,
    title: "Project Card",
  },
  "breadcrumb": {
    component: <Breadcrumb />,
    title: "Breadcrumb",
  },
}