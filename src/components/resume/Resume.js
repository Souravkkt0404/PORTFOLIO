import React, { useState } from "react";
import Title from "../layouts/Title";
import Education from "./Education";
import Skills from "./Skills";
import Achievement from "./Achievement";
import Experience from "./Experience";

const Resume = () => {
  const [educationData, setEducationData] = useState(true);
  const [skillData, setSkillData] = useState(false);
  const [experienceData, setExperienceData] = useState(false);
  const [achievementData, setAchievementData] = useState(false);
  return (
    <section
      id="resume"
      className="w-full py-2 border-transparent border-b-[1px] border-b-black"
    >
      <div className="flex justify-center items-center text-center">
        <Title title="" des="My Resume" />
      </div>
      <div>
        <ul className="w-full grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3">
          <li className="resumeLi">
            <button
              onClick={() => {
                setEducationData(true);
                setSkillData(false);
                setExperienceData(false);
                setAchievementData(false);
              }}
              className={`w-full py-2 border-transparent ${
                educationData
                  ? "border-designColor rounded-lg"
                  : "border-transparent"
              }`}
            >
              Education
            </button>
          </li>
          <li className="resumeLi">
            <button
              onClick={() => {
                setEducationData(false);
                setSkillData(true);
                setExperienceData(false);
                setAchievementData(false);
              }}
              className={`w-full py-2 border-transparent${
                skillData
                  ? "border-designColor rounded-lg"
                  : "border-transparent"
              }`}
            >
              Professional Skills
            </button>
          </li>
          <li className="resumeLi">
            <button
              onClick={() => {
                setEducationData(false);
                setSkillData(false);
                setExperienceData(true);
                setAchievementData(false);
              }}
              className={`w-full py-2 border-transparent${
                experienceData
                  ? "border-designColor rounded-lg"
                  : "border-transparent"
              }`}
            >
              Experience
            </button>
          </li>
        </ul>
      </div>
      {educationData && <Education />}
      {skillData && <Skills />}
      {achievementData && <Achievement />}
      {experienceData && <Experience />}
    </section>
  );
};

export default Resume;
