import React, { useRef, useState } from "react";
import { motion } from "framer-motion";
import { skillsLeft, skillsRight } from "../../constants";
import {
  FaReact,
  FaNodeJs,
  FaHtml5,
  FaBootstrap,
  FaPython,
  FaDatabase,
  FaGitAlt,
  FaRedhat,
} from "react-icons/fa";
import {
  SiTailwindcss,
  SiGithub,
  SiNextdotjs,
  SiRedux,
  SiGraphql,
  SiSelenium,
} from "react-icons/si";

const skillIconMap = {
  react: <FaReact className="text-blue-400" />,
  node: <FaNodeJs className="text-green-500" />,
  html: <FaHtml5 className="text-orange-500" />,
  css: <FaHtml5 className="text-blue-500" />,
  javascript: <FaHtml5 className="text-yellow-400" />,
  typescript: <FaHtml5 className="text-blue-600" />,
  python: <FaPython className="text-blue-500" />,
  sql: <FaDatabase className="text-yellow-600" />,
  nextjs: <SiNextdotjs className="text-gray-200" />,
  tailwind: <SiTailwindcss className="text-cyan-400" />,
  bootstrap: <FaBootstrap className="text-purple-600" />,
  git: <FaGitAlt className="text-white" />,
  github: <SiGithub className="text-gray-300" />,
  redux: <SiRedux className="text-purple-500" />,
  graphql: <SiGraphql className="text-pink-600" />,
  selenium: <SiSelenium className="text-white" />,
  servicenow: <FaRedhat className="text-white" />,
};

const getIconForSkill = (skillName) => {
  const lowerName = skillName.toLowerCase();
  if (lowerName.includes("react")) return skillIconMap.react;
  if (lowerName.includes("node")) return skillIconMap.node;
  if (lowerName.includes("html")) return skillIconMap.html;
  if (lowerName.includes("python")) return skillIconMap.python;
  if (lowerName.includes("sql")) return skillIconMap.sql;
  if (lowerName.includes("next")) return skillIconMap.nextjs;
  if (lowerName.includes("tailwind")) return skillIconMap.tailwind;
  if (lowerName.includes("bootstrap")) return skillIconMap.bootstrap;
  if (lowerName.includes("git")) return skillIconMap.git;
  if (lowerName.includes("github")) return skillIconMap.github;
  if (lowerName.includes("redux")) return skillIconMap.redux;
  if (lowerName.includes("graphql")) return skillIconMap.graphql;
  if (lowerName.includes("selenium")) return skillIconMap.selenium;
  if (lowerName.includes("servicenow")) return skillIconMap.servicenow;
  return skillIconMap.html;
};

const SkillItem = ({ name, percentage, isHovered, onMouseEnter, onMouseLeave }) => (
  <motion.div
    initial={{ opacity: 0, scale: 0.9 }}
    animate={{ opacity: 1, scale: 1 }}
    transition={{ duration: 0.4 }}
    onMouseEnter={onMouseEnter}
    onMouseLeave={onMouseLeave}
    className="min-w-[220px] flex-shrink-0 h-[220px] rounded-2xl border border-[#2b303b] bg-gradient-to-br from-[#0d1420] to-[#0a0f1a] p-7 shadow-[0_12px_40px_rgba(15,23,42,0.3)] hover:shadow-[0_18px_55px_rgba(15,23,42,0.5)] hover:border-white transition-all duration-300 flex flex-col items-center justify-center cursor-pointer relative"
  >
    {/* Icon (default view) */}
    <div className={`text-6xl transition-all duration-300 ${isHovered ? "opacity-0 scale-0" : "opacity-100 scale-100"}`}>
      {getIconForSkill(name)}
    </div>

    {/* Name and Percentage (hover view) */}
    <div className={`absolute text-center transition-all duration-300 ${isHovered ? "opacity-100" : "opacity-0"}`}>
      <p className="text-sm font-bold text-white mb-2">{name}</p>
      <span className="text-lg font-bold text-white">{percentage}</span>
    </div>
  </motion.div>
);

const Skills = () => {
  const [hoveredIndex, setHoveredIndex] = useState(null);
  const allSkills = [...skillsLeft, ...skillsRight];
  const scrollContainerRef = useRef(null);

  const scroll = (direction) => {
    if (scrollContainerRef.current) {
      const scrollAmount = 350;
      scrollContainerRef.current.scrollBy({
        left: direction === "left" ? -scrollAmount : scrollAmount,
        behavior: "smooth",
      });
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1, transition: { duration: 0.6 } }}
      className="w-full flex flex-col gap-8"
    >
      <div className="py-8 font-titleFont flex flex-col gap-3">
        <div className="flex items-center gap-3 text-sm uppercase tracking-[0.36em] text-designColor">
          <span className="h-[1px] w-16 bg-designColor inline-block" />
          Tech Stack
        </div>
        <h2 className="text-3xl md:text-4xl font-bold">Development Skills</h2>
      </div>

      {/* Carousel with Navigation Arrows */}
      <div className="relative group">
        <div
          ref={scrollContainerRef}
          className="flex gap-6 overflow-x-auto pb-4 pt-2 scroll-smooth scrollbar-hide"
          style={{ scrollBehavior: "smooth", WebkitOverflowScrolling: "touch" }}
        >
          {allSkills?.map((skill, index) => (
            <SkillItem
              key={index}
              name={skill.name}
              isHovered={hoveredIndex === index}
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
              percentage={skill.percentage}
            />
          ))}
        </div>

        {/* Left Arrow */}
        <button
          onClick={() => scroll("left")}
          className="absolute -left-6 top-1/2 -translate-y-1/2 z-10 w-12 h-12 rounded-full border border-[#2b303b] bg-[#0d1420] hover:bg-designColor hover:border-designColor text-gray-400 hover:text-black transition-all duration-300 flex items-center justify-center shadow-lg opacity-0 group-hover:opacity-100"
          title="Scroll left"
        >
          <svg
            className="w-5 h-5"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M15 19l-7-7 7-7"
            />
          </svg>
        </button>

        {/* Right Arrow */}
        <button
          onClick={() => scroll("right")}
          className="absolute -right-6 top-1/2 -translate-y-1/2 z-10 w-12 h-12 rounded-full border border-[#2b303b] bg-[#0d1420] hover:bg-designColor hover:border-designColor text-gray-400 hover:text-black transition-all duration-300 flex items-center justify-center shadow-lg opacity-0 group-hover:opacity-100"
          title="Scroll right"
        >
          <svg
            className="w-5 h-5"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M9 5l7 7-7 7"
            />
          </svg>
        </button>
      </div>
    </motion.div>
  );
};

export default Skills;
