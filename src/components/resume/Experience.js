import React from "react";
import { motion } from "framer-motion"
import ResumeCard from "./ResumeCard";

const Experience = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1, transition: { duration: 0.5 } }}
      className="py-12 font-titleFont flex flex-col gap-20 md:flex-row"
    >
      <div>
        <div className="flex flex-col gap-4">
          <p className="text-sm text-designColor tracking-[4px]">2023 - 20XX</p>
          <h2 className="text-4xl font-bold">Job Experience</h2>
        </div>
        <div className="mt-14 w-full h-[1000px] border-l-[6px] border-l-black border-opacity-30 flex flex-col gap-10">
          <ResumeCard
            title="Front-End Developer"
            subTitle="ACE WEB SOLUTION (July,2023 - Present)"
            result="Bangalore,India"
            des="• Involved in and responsible for implementing user interfaces using React Js, ensuring they are visually appealing,
            responsive, and user-friendly.
            Collaborate with designers and back-end developers to create a cohesive and efficient overall system.
            Involve and assist junior developers, helping them grow their skills and understanding."
          />
          <ResumeCard
            title="Software Developer"
            subTitle="Ennoventure Technology Pvt. Ltd. - (Oct,2022 - june,2023)"
            result="Bangalore,India"
            des="Responsible for setting up the backend system of the application.
          Implementing UI changes using React JS on the Enovation Project.
          Developing and fixing bugs in the React Micro site code."
          />
          <ResumeCard
            title="Front-End Developer-Intern"
            subTitle="Altorum Leren Pvt. Ltd. (Jan,2022 - Sept,2022)  [9 months]"
            result="Bangalore,India"
            des="Collaborated with fellow team members to develop 2 new websites.
            Assisted in constructing 100% self-contained, reusable, and testable modules and components for future
            utilization.
            Ensured the technical feasibility of implementing 50+ UI/UX designs.
             Created custom directives and components.
            "
          />
        </div>
        {/* <ResumeCard
          title="Student Intern, Bangalore"
          subTitle="AiRobosoft Product and Service Ltd [ Mar,2020 - Sept,2020] "
          result="Bangalore,India"
          des="Learned and implemented Machine Learning and Artificial Intelligence.
             Developed project on Personal assistant using python. 
            "
        /> */}
    
    </div>
      {/* <div>
        <div className="flex flex-col gap-4">
          <p className="text-sm text-designColor tracking-[4px]">20XX - 20XX</p>
          <h2 className="text-4xl font-bold">Trainer Experience</h2>
        </div>
        <div className="mt-14 w-full h-[1000px] border-l-[6px] border-l-black border-opacity-30 flex flex-col gap-10">
          <ResumeCard
            title="ML Instructor"
            subTitle="ABC Platform (20XX - 20XX)"
            result="UK"
            des="Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora itaque accusamus corporis dolor debitis natus sapiente, voluptates possimus minima totam!"
          />
          <ResumeCard
            title="Web Developer and Instructor"
            subTitle="ABC King's College (20XX - 20XX)"
            result="CANADA"
            des="Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora itaque accusamus corporis dolor debitis natus sapiente, voluptates possimus minima totam!"
          />
          <ResumeCard
            title="App Developer"
            subTitle="ABC Company (20XX - 20XX)"
            result="India"
            des="Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora itaque accusamus corporis dolor debitis natus sapiente, voluptates possimus minima totam!"
          />
        </div>
      </div> */}
    </motion.div >
  );
};

export default Experience;
