import React from "react";
import { motion } from "framer-motion";
import ResumeCard from "./ResumeCard";
import Surana from "../../assets/images/surana.jpeg";
import DIATM from "../../assets/images/DIATM.jpg";
import DSSSV from "../../assets/images/DSSSV.jpg";
import RRMHS from "../../assets/images/RRMHS.avif";

const educationData = [
  {
    title: "Master of Computer Applications (MCA)",
    subTitle: "Surana College Institute | Aug 2019 - Dec 2021",
    result: "8.2 CGPA",
    // percentage: "82%",
    des: "Pursued MCA with advanced coursework in OS, DBMS, OOPS, Web Development, AI, DSA, and Compiler Design.",
    image: Surana,
  },
  {
    title: "Bachelor of Computer Applications (BCA)",
    subTitle: "Management Institute of Durgapur (MID) | 2016 - 2019",
    result: "8 CGPA",
    // percentage: "80%",
    des: "Completed BCA with subjects including C/C++, OS, DBMS, OOPs, and Data Structures & Algorithms.",
    image: DIATM,
  },
  {
    title: "Higher Secondary School Education",
    subTitle: "Dubrajpur Sree Sree Sarada Vidyapith | 2014 - 2016",
    // result: "74.17%",
    percentage: "74.17%",
    des: "Studied HSC with Mathematics, English, Physics, Chemistry, and Biology.",
    image: DSSSV,
  },
  {
    title: "Primary & Secondary School Education",
    subTitle: "Ramakrishna Mission Ashram Ramharipur | 2007 - 2014",
    // result: "77.17%",
    percentage: "77.17%",
    des: "Completed SSC with English, Bengali-Hindi, Maths, Science, and Social Sciences.",
    image: RRMHS,
  },
];

const Education = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1, transition: { duration: 0.5 } }}
      className="w-full flex flex-col gap-10"
    >
      <div className="py-6 lgl:py-12 font-titleFont flex flex-col gap-4">
        <p className="text-sm text-designColor tracking-[4px]">2007 - 2021</p>
        <h2 className="text-3xl md:text-4xl font-bold">Educational Qualification</h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-stretch">
        {educationData.map((item, index) => (
          <ResumeCard
            key={index}
            title={item.title}
            subTitle={item.subTitle}
            result={item.result}
            percentage={item.percentage}
            des={item.des}
            image={item.image}
          />
        ))}
      </div>
    </motion.div>
  );
};

export default Education;
