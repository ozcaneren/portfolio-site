import {
  GithubIcon,
  TwitterIcon,
  LinkedinIcon,
  InstagramIcon,
} from "lucide-react";
import { GoNorthStar } from "react-icons/go";
import { FiLink } from "react-icons/fi";
import { MdTitle } from "react-icons/md";
import { FaCode, FaRegCopyright } from "react-icons/fa";
import { MdMenu } from "react-icons/md";
import { FaStore } from "react-icons/fa6";
import { IoShareSocialOutline } from "react-icons/io5";
import { VscLayoutCentered } from "react-icons/vsc";
import { TfiAnchor } from "react-icons/tfi";
import { HiOutlineDocumentText } from "react-icons/hi2";


export const Links = [
  {
    id: "github",
    title: "GitHub",
    url: "https://github.com/ozcaneren",
    icon: <GithubIcon size={16} />,
  },
  {
    id: "linkedin",
    title: "LinkedIn",
    url: "https://www.linkedin.com/in/eren-ozcan/",
    icon: <LinkedinIcon size={16} />,
  },
  {
    id: "twitter",
    title: "Twitter",
    url: "https://twitter.com/erenozcandev",
    icon: <TwitterIcon size={16} />,
  },
  {
    id: "instagram",
    title: "Instagram",
    url: "https://www.instagram.com/erenozcan17/",
    icon: <InstagramIcon size={16} />,
  },
];

export const Projects = [
  {
    title: "Rick and Morty Wiki",
    description: "A wiki for Rick and Morty",
    techStack: "NextJS, Tailwind, rickandmortyapi",
    image: "https://i.hizliresim.com/ns28a6n.png",
    repoVisibility: "Public",
    repoUrl: "https://github.com/ozcaneren/rick-and-morty-wiki",
    demoActive: true,
    demoUrl: "https://nextjs-first-project-teal.vercel.app/",
    id: 0,
  },
  {
    title: "Dashboard Template",
    description: "A dashboard template for a any website",
    techStack: "React, Tailwind",
    image: "https://i.hizliresim.com/6845278.png",
    repoVisibility: "Public",
    repoUrl: "https://github.com/ozcaneren/dashboard-template",
    demoActive: true,
    demoUrl: "https://dashboard-template-sand-six.vercel.app/",
    id: 1,
  },
  {
    title: "Fullstack Hotel App",
    description: "A fullstack app for a hotel",
    techStack: "React, Tailwind, NodeJS, Express, MongoDB",
    image: "https://i.hizliresim.com/b5q84k1.png",
    repoVisibility: "Public",
    repoUrl: "https://github.com/ozcaneren/redesigned-fullstack-app",
    demoActive: false,
    demoUrl: "",
    id: 2,
  },
  {
    title: "Archived Portfolio Site",
    description: "A React App",
    techStack: "React, Tailwind",
    image: "https://i.hizliresim.com/lbnb73u.png",
    repoVisibility: "Public",
    repoUrl: "https://github.com/ozcaneren/Archived-Portfolio-Site",
    demoActive: true,
    demoUrl: "https://profound-churros-7dc115.netlify.app/",
    id: 3,
  },
  {
    title: "Hotel Website Demo",
    description: "Clone of a https://loryma.com/",
    techStack: "NextJS, Tailwind",
    image: "https://i.hizliresim.com/22w24cd.png",
    repoVisibility: "Public",
    repoUrl: "https://github.com/ozcaneren/hotel-website-demo",
    demoActive: true,
    demoUrl: "https://demo-hotel-website-erenozcan.vercel.app",
    id: 4,
  },
  {
    title: "E-Commerce App",
    description: "E-commerce with Carousel template",
    techStack: "NextJS, Tailwind, React-Slick,",
    image: "https://i.hizliresim.com/7f1t58a.png",
    repoVisibility: "Private",
    repoUrl: "",
    demoActive: true,
    demoUrl: "https://effective-fiesta-two.vercel.app/",
    id: 5,
  },
  {
    title: "Modernist To-Do App",
    description: "A modern to-do app with Clerk authentication and MongoDB database.",
    techStack: "NextJS, Tailwind, Clerk, MongoDB",
    image: "https://i.hizliresim.com/ndczxp9.png",
    repoVisibility: "Private",
    repoUrl: "",
    demoActive: true,
    demoUrl: "https://modernist-todo-app.vercel.app/",
    id: 6,
  },
];

export const SITE_ROUTES = {
  home: "/",
  projects: "/projects",
};

export const Shortcuts = [
  {
    href: "/",
    label: "Home",
    icon: <TfiAnchor size={16} />,
  },
  {
    href: "/projects",
    label: "Projects",
    icon: <FaCode size={16} />,
  },
  {
    href: "/cv",
    label: "CV",
    icon: <HiOutlineDocumentText size={16} />,
  }
];