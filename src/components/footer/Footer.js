import React from "react";
import { logo } from "../../assets/index";
import { footerSections, mediaLinks } from "../../constants";

const Footer = () => {
  return (
    <div className="w-full py-1 lgl:pt-20 h-auto border-b-[1px] border-b-black grid grid-cols-1 md:grid-cols-2 lgl:grid-cols-3 gap-8">
      <div className="w-full h-full flex flex-col gap-6 items-center">
        <img className="w-32" src={logo} alt="logo" />
        <div className="flex gap-4">
          {mediaLinks?.map((link) => (
            <span key={link?.href} className="bannerIcon">
              <a href={link?.href} target="_blank" rel="noopener noreferrer">
                {link?.icon}
              </a>
            </span>
          ))}
        </div>
      </div>

      {footerSections?.map((section, index) => (
        <div key={index} className="w-full h-full">
          <h3 className="text-xl uppercase text-designColor tracking-wider">
            {section?.title}
          </h3>
          <ul className="flex flex-col gap-4 font-titleFont font-medium py-6 overflow-hidden">
            {section?.links?.map((link, linkIndex) => (
              <li key={linkIndex}>
                <a
                  href={link?.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full text-lg relative hover:text-designColor duration-300 group cursor-pointer"
                >
                  {link?.title}
                  <span className="w-full h-[1px] bg-designColor inline-flex absolute left-0 -bottom-1 -translate-x-[100%] group-hover:translate-x-0 transition-transform duration-300"></span>
                </a>
              </li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
};

export default Footer;
