import React from "react";
import { mediaLinks, webDevIcons } from "../../constants";

const Media = () => (
  <div className="flex flex-col xl:flex-col gap-6 lgl:gap-0 justify-evenly">
    <div>
      <h2 className="text-base uppercase font-titleFont mb-4">Find me on</h2>

      <div className="flex gap-4 mb-4">
        {mediaLinks?.map((links, index) => (
          <a
            key={index}
            href={links?.href}
            target={links?.href?.includes("mailto") ? "_self" : "_blank"}
            rel={links?.href?.includes("mailto") ? "" : "noopener noreferrer"}
            className="bannerIcon"
            title={links?.title}
          >
            {links?.icon}
          </a>
        ))}
      </div>
    </div>
    <div>
      <h2 className="text-base uppercase font-titleFont mb-4">
        For Web Development
      </h2>
      <div className="flex gap-4">
        {webDevIcons?.map((devIcon, index) => (
          <span className="bannerIcon" key={index}>
            {devIcon?.icon}
          </span>
        ))}
      </div>
    </div>
  </div>
);

export default Media;
