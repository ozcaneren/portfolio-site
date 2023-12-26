import {
  GithubIcon,
  TwitterIcon,
  LinkedinIcon,
  InstagramIcon,
} from "lucide-react";
import { BsFillEnvelopeOpenFill } from "react-icons/bs";


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

export const Projects = {
  "rick-and-morty-wiki": {
    title: "Rick and Morty Wiki",
    description: "A wiki for Rick and Morty",
    url: "https://github.com/ozcaneren/nextjs-first-project",
    techStack: "NextJS, Tailwind, rickandmortyapi",
    visibility: "Public",
    id: 1,
  },
  "basic-dashboard": {
    title: "Hotel Website with Dashboard",
    description: "Basic hotel website with dashboard",
    url: "https://github.com/ozcaneren/fullstack-site-with-dashboard",
    techStack: "React, Express, MongoDB, Tailwind",
    visibility: "Public",
    id: 2,
  },
  "redesigned-fullstack-app": {
    title: "Fullstack Hotel App",
    description: "A fullstack app for a hotel",
    url: "https://github.com/ozcaneren/redesigned-fullstack-app",
    techStack: "React, Tailwind, NodeJS, Express, MongoDB",
    visibility: "Public",
    id: 3,
  },
  "archived-portfolio-site": {
    title: "Archived Portfolio Site",
    description: "A React App",
    url: "https://profound-churros-7dc115.netlify.app/",
    techStack: "React, Tailwind",
    visibility: "Public",
    id: 4,
  },
  "hotel-website-demo": {
    title: "Hotel Website Demo",
    description: "Clone of a https://loryma.com/",
    url: "https://github.com/ozcaneren/hotel-website-demo",
    techStack: "NextJS, Tailwind",
    visibility: "Public",
    id: 5,
  },
  "dashboard-template": {
    title: "Dashboard Template",
    description: "A dashboard template for a any website",
    url: "https://dashboard-template-sand-six.vercel.app/",
    techStack: "React, Tailwind",
    visibility: "Public",
    id: 6,
  },
  "custom-ecommerce": {
    title: "Custom E-commerce",
    description: "E-commerce with Carousel template",
    url: "https://effective-fiesta-two.vercel.app/",
    techStack: "NextJS, Tailwind, React-Slick,",
    visibility: "Private",
    id: 7,
  },
};

export const SITE_ROUTES = {
  home: "/",
  projects: "/projects",
};
