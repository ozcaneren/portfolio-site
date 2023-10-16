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

export const Profiles = {
  github: {
    title: "GitHub",
    url: "https://github.com/ozcaneren",
    icon: <GithubIcon size={16} />
  },
  linkedin: {
    title: "LinkedIn",
    url: "https://www.linkedin.com/in/ozcaneren",
    icon: <LinkedinIcon size={16} />
  },
  twitter: {
    title: "Twitter",
    url: "https://twitter.com/ozcaneren",
    icon: <TwitterIcon size={16} />
  },
  instagram: {
    title: "Instagram",
    url: "https://www.instagram.com/ozcaneren",
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
  }
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