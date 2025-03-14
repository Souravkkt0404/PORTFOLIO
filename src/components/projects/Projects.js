import React from 'react'
import Title from '../layouts/Title'
import { projectOne, projectThree, projectFour, projectFive, projectSix,projectExtra } from "../../assets/index";
import ProjectsCard from './ProjectsCard';

const Projects = () => {
  return (
    <section
      id="projects"
      className="w-full py-20 border-b-[1px] border-b-black"
    >
      <div className="flex justify-center items-center text-center">
        <Title
          title="Check these out on my github"
          des="My Projects"
        />
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 xl:gap-14">
        <ProjectsCard
          title="Ace Web Solution Website"
          des=" A Dynamic website project using React Js with Tailwind CSS and email JS."
          src={projectOne}
          githubLink="https://github.com/mihirc0111/IPL-Predictor-Mihir"
          websiteLink="https://acewebsolution.com/"
        />
      
        <ProjectsCard
          title="Altorum Leren Website"
          des=" This is a website for posting secrets anonymously with an authentication system ."
          src={projectThree}
          githubLink="https://github.com/mihirc0111/Secrets"
          websiteLink="https://www.altorumleren.com/"
        />
        <ProjectsCard
          title="Shooline Consultancy Website"
          des=" This is a website Our accomplished team of lawyers brings extensive expertise to various legal domains, including Criminal Law, check bounce cases, and Matrimonial/Divorce cases."
          src={projectExtra}
          githubLink="https://github.com/mihirc0111/Secrets"
          websiteLink="https://shooline-consultancy.vercel.app/"
        />
        <ProjectsCard
          title="After School Diaries"
          des=" To create a website which plays Cartoon/Show songs' audio when user clicks on a particular cartoon image. Using HTML,CSS,JS,Bootstrap to bundle the songs we loved during our childhood!"
          src={projectFour}
          githubLink="https://github.com/mihirc0111/AfterSchoolDiaries-HTML-CSS-JS-BootStrap-Website"
          websiteLink="https://mihirc0111.github.io/AfterSchoolDiaries-HTML-CSS-JS-BootStrap-Website/"
        />
        <ProjectsCard
          title="Weather Website"
          des=" This is a weather website created using HTML,CSS,Bootstrap,Node.js,Express.js and OpenWeather API ."
          src={projectFive}
          githubLink="https://github.com/mihirc0111/Weather-Website-UsingAPI--node.js--express.js"
          websiteLink="https://mihirs-weather-website.onrender.com/"
        />
        <ProjectsCard
          title="Face Detection"
          des=" This project uses various libraries like to detect human face from a given image, detect a face from a live -webcam video and to create an attendance system."
          src={projectSix}
          githubLink="https://github.com/mihirc0111/Face-Detection-ML-Project-Python.git"
          websiteLink=""
        />
      </div>
    </section>
  );
}

export default Projects
