import React from 'react'
import { FaLinkedinIn, FaReact, FaNodeJs, FaHtml5, FaBootstrap, FaPython,FaFilePdf } from "react-icons/fa";
import { SiTailwindcss, SiGithub, SiGmail } from "react-icons/si";
const Media = () => {
  return (
    <div className="flex flex-col xl:flex-col gap-6 lgl:gap-0 justify-evenly">
      <div>
        <h2 className="text-base uppercase font-titleFont mb-4">
          Find me on
        </h2>
        <div className="flex gap-4 mb-4">
          <span className="bannerIcon">
            <a href="https://github.com/souravkkt0404" target="_blank" rel="noopener noreferrer">
              <SiGithub /></a>
          </span>
          <span className="bannerIcon">
            <a href="mailto:schatterjee.0404@gmail.com">
              <SiGmail /></a>
          </span>
          <span className="bannerIcon">
            <a
              href="https://www.linkedin.com/in/sourav-chatterjee-front-end-developer-a70313208/"
              target="_blank"
              rel="noopener noreferrer">
              <FaLinkedinIn />
            </a>
          </span>
          <span className="bannerIcon" title='My Resume in Docs'>
            <a href='https://drive.google.com/file/d/1tDWPTjETXoLTKUPwfjrTh0hnESZ7TO3V/view?usp=sharing'>
              <FaFilePdf />
            </a>
          </span>
        </div>
      </div>
      <div>
        <h2 className="text-base uppercase font-titleFont mb-4">
          For Web Development
        </h2>

        <div className="flex gap-4">
          <span className="bannerIcon">
            {/* <SiMongodb /> */}
            <FaReact />
          </span>
          <span className="bannerIcon">
            {/* <SiExpress /> */}
            <FaHtml5 />
          </span>
          <span className="bannerIcon">
            <FaBootstrap />
          </span>
          <span className="bannerIcon">
            <FaNodeJs />
          </span>
          <span className="bannerIcon">
            <SiTailwindcss />
          </span>
          <span className="bannerIcon">
            <FaPython />
          </span>

        </div>
      </div>
    </div>
  )
}

export default Media