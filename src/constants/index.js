import {
  FaLinkedinIn,
  FaReact,
  FaNodeJs,
  FaHtml5,
  FaBootstrap,
  FaFilePdf,
  FaDatabase,
  FaPython,
  FaGoogle,
  FaPaintBrush,
  FaProjectDiagram,
} from "react-icons/fa";
import {
  SiTailwindcss,
  SiGithub,
  SiGmail,
  SiNextdotjs,
  SiHtml5,
  SiCss3,
  SiJavascript,
  SiTypescript,
  SiSass,
  SiRedux,
  SiGraphql,
  SiSelenium,
  SiFigma,
  SiJira,
} from "react-icons/si";
import { AiOutlineApi } from "react-icons/ai";

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
        href: "https://www.youtube.com/watch?v=HRynORyDY2M",
        title: "Rk in Bangalore",
      },
      {
        href: "https://www.youtube.com/video/igzjQkJZAxw",
        title: "Explore Adiyogi",
      },
      {
        href: "https://www.youtube.com/video/YOYuF3yZF-0",
        title: "Varanasi Tour",
      },
      {
        href: "https://www.youtube.com/channel/UChC0cB2n_-n27-STBvGP2NQ/",
        title: "Others",
      },
    ],
  },
];

export const skillset = [
  { name: "SQL", percentage: "80%", icon: <FaDatabase className="text-designColor" /> },
  { name: "Python", percentage: "85%", icon: <FaPython className="text-blue-500" /> },
  { name: "HTML", percentage: "100%", icon: <SiHtml5 className="text-orange-500" /> },
  { name: "CSS", percentage: "100%", icon: <SiCss3 className="text-sky-400" /> },
  { name: "JavaScript", percentage: "90%", icon: <SiJavascript className="text-yellow-400" /> },
  { name: "TypeScript", percentage: "80%", icon: <SiTypescript className="text-sky-600" /> },
  { name: "RESTful APIs", percentage: "85%", icon: <AiOutlineApi className="text-teal-400" /> },
  { name: "Tailwind CSS", percentage: "80%", icon: <SiTailwindcss className="text-cyan-400" /> },
  { name: "Bootstrap CSS", percentage: "90%", icon: <FaBootstrap className="text-purple-600" /> },
  { name: "SASS", percentage: "80%", icon: <SiSass className="text-pink-500" /> },
  { name: "Google OAuth, Cookies, Session / Local Storage", percentage: "80%", icon: <FaGoogle className="text-red-500" /> },
  { name: "ServiceNow Developer", percentage: "85%", icon: <FaProjectDiagram className="text-white" /> },
  { name: "Figma, Adobe Photoshop, Adobe Illustrator", percentage: "80%", icon: <SiFigma className="text-pink-500" /> },
  { name: "Agile Methodology, Scrum, Jira, Trello", percentage: "80%", icon: <SiJira className="text-blue-500" /> },
  { name: "React", percentage: "80%", icon: <FaReact className="text-blue-400" /> },
  { name: "Next.js", percentage: "50%", icon: <SiNextdotjs className="text-gray-200" /> },
  { name: "Node", percentage: "50%", icon: <FaNodeJs className="text-green-500" /> },
  { name: "Modern UI", percentage: "80%", icon: <FaPaintBrush className="text-white" /> },
  { name: "Git & GitHub", percentage: "90%", icon: <SiGithub className="text-gray-300" /> },
  { name: "Redux", percentage: "75%", icon: <SiRedux className="text-purple-500" /> },
  { name: "GraphQL", percentage: "70%", icon: <SiGraphql className="text-pink-600" /> },
  { name: "Passport, Postman API, OpenCV", percentage: "80%", icon: <AiOutlineApi className="text-teal-400" /> },
  { name: "Web Scraping (Selenium | BeautifulSoup)", percentage: "100%", icon: <SiSelenium className="text-white" /> },
];
