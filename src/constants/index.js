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

export const footerSections = [
  {
    title: "Quick Project Link",
    links: [
      { href: "https://acewebsolution.com/", title: "Ace Web Solution" },
      {
        href: "https://www.joannahfancycostumes.in/",
        title: "Joannah Fancy Costumes",
      },
      {
        href: "https://super-chaja-eefc61.netlify.app/",
        title: "TRAVEL TO EXPLORE",
      },
      {
        href: "https://www.shoolinconsultancy.org/",
        title: "Shoolin Consultancy",
      },
    ],
  },
  {
    title: "Youtube Vlogs",
    links: [
      {
        href: "https://studio.youtube.com/video/HRynORyDY2M/edit",
        title: "Rk in Bangalore",
      },
      {
        href: "https://studio.youtube.com/video/igzjQkJZAxw/edit",
        title: "Explore Adiyogi",
      },
      {
        href: "https://studio.youtube.com/video/YOYuF3yZF-0/edit",
        title: "Varanasi Tour",
      },
      {
        href: "https://www.youtube.com/channel/UChC0cB2n_-n27-STBvGP2NQ/",
        title: "Others",
      },
    ],
  },
];

export const skillsLeft = [
  { name: "C++", percentage: "85%" },
  { name: "Python", percentage: "85%" },
  { name: "HTML, CSS, JavaScript", percentage: "90%" },
  { name: "SQL", percentage: "80%" },
  { name: "Tailwind CSS / Bootstrap CSS / SASS", percentage: "80%" },
];

export const skillsRight = [
  { name: "React", percentage: "80%" },
  { name: "Next.js", percentage: "50%" },
  { name: "Node", percentage: "50%" },
  { name: "Git & GitHub", percentage: "90%" },
  {
    name: "Google OAuth, Cookies, Passport, Postman API, OpenCV",
    percentage: "80%",
  },
  { name: "Web Scraping (Selenium | BeautifulSoup)", percentage: "100%" },
];

