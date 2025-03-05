import React from "react";
import { useTypewriter, Cursor } from "react-simple-typewriter";
import Media from "./Media";

const LeftBanner = () => {
  const [text] = useTypewriter({
    words: [
      "Professional Coder.",
      "Full Stack Developer.",
      "UI Developer",
      "React Developer",
      "Frontend Developer",
      "Youtube Vlogger",
      "Next Js Developer",
      "Content Creator",
      "Video Editor",
    ],
    loop: true,
    typeSpeed: 20,
    deleteSpeed: 10,
    delaySpeed: 2000,
  });
  return (
    <div className="w-full lgl:w-1/2 flex flex-col gap-20">
      <div className="flex flex-col gap-5">
        <h4 className=" text-lg font-normal">Hello there, Friends 👀🙋‍♂️ </h4>
        <h1 className="text-6xl font-bold text-white">
          Hi, I'm <span className="text-designColor capitalize">Sourav</span>
        </h1>
        <h2 className="text-4xl font-bold text-white w-full h-20 xl:h-12">
          a <span>{text}</span>
          <Cursor
            cursorBlinking="false"
            cursorStyle="|"
            cursorColor="#ff014f"
          />
        </h2>
        <p className="t,ext-base font-bodyFont leading-6 tracking-wide">
          I am Passionate front-end developer and technology enthusiast with a
          strong foundation in web development and a keen eye for detail. I
          specialize in crafting innovative, high-performance web solutions that
          blend cutting-edge technology with seamless user experiences.
        </p>
      </div>
      {/* Media */}
      <div>
        <Media />
      </div>
    </div>
  );
};

export default LeftBanner;
