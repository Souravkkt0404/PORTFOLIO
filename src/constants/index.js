import {
  FaLinkedinIn,
  FaReact,
  FaNodeJs,
  FaHtml5,
  FaBootstrap,
  FaFilePdf,
} from "react-icons/fa";
import { SiTailwindcss, SiGithub, SiGmail, SiNextdotjs } from "react-icons/si";

export const navLinksData = [
  { _id: 1001, title: "Home", link: "home" },
  { _id: 1002, title: "Features", link: "features" },
  { _id: 1003, title: "Projects", link: "projects" },
  { _id: 1004, title: "Resume", link: "resume" },
  { _id: 1006, title: "Contact", link: "contact" },
];

export const mediaLinks = [
  {
    href: "https://github.com/souravkkt0404",
    icon: <SiGithub />,
    title: "GitHub",
  },
  {
    href: "mailto:schatterjee.0404@gmail.com",
    icon: <SiGmail />,
    title: "Gmail",
  },
  {
    href: "https://www.linkedin.com/in/sourav--chatterjee/",
    icon: <FaLinkedinIn />,
    title: "LinkedIn",
  },
  {
    href: "https://drive.google.com/file/d/1tDWPTjETXoLTKUPwfjrTh0hnESZ7TO3V/view?usp=sharing",
    icon: <FaFilePdf />,
    title: "My Resume in Docs",
  },
];

export const webDevIcons = [
  { icon: <FaReact /> },
  { icon: <FaHtml5 /> },
  { icon: <FaBootstrap /> },
  { icon: <FaNodeJs /> },
  { icon: <SiTailwindcss /> },
  { icon: <SiNextdotjs /> },
];


export const socialLinks = [
  { href: "https://github.com/souravkkt0404", icon: <SiGithub /> },
  { href: "mailto:schatterjee.0404@gmail.com", icon: <SiGmail /> },
  {
    href: "https://www.linkedin.com/in/sourav-chatterjee-a70313208/",
    icon: <FaLinkedinIn />,
  },
  {
    href: "https://drive.google.com/file/d/1tDWPTjETXoLTKUPwfjrTh0hnESZ7TO3V/view?usp=sharing",
    icon: <FaFilePdf />,
  },
];

export const footerSections = [
  {
    title: "Quick Link",
    links: ["About", "Portfolio", "Services", "Blog", "Contact"],
  },
  {
    title: "Resources",
    links: [
      "Authentication",
      "System Status",
      "Terms of Service",
      "Pricing",
      "Over Right",
    ],
  },
  {
    title: "Developers",
    links: [
      "Documentation",
      "Authentication",
      "API Reference",
      "Support",
      "Open Source",
    ],
  },
];