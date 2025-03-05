import React, { useState, useEffect } from "react";
import { Link } from "react-scroll";
import { FiMenu } from "react-icons/fi";
import { MdClose } from "react-icons/md";
import { logo } from "../../assets/";
import { mediaLinks, navLinksData } from "../../constants";

const Navbar = () => {
  const [showMenu, setShowMenu] = useState(false);

  useEffect(() => {
    if (showMenu) {
      document.body.classList.add("overflow-hidden");
    } else {
      document.body.classList.remove("overflow-hidden");
    }
    return () => {
      document.body.classList.remove("overflow-hidden");
    };
  }, [showMenu]);

  return (
    <div className="w-full h-24 sticky top-0 z-50 bg-bodyColor mx-auto flex justify-between items-center font-titleFont border-b-[1px] border-b-gray-600 sm:-z-999">
      <div>
        <img
          src={logo}
          alt="logo"
          style={{ width: "24%", marginLeft: "5px" }}
        />
      </div>
      <div>
        <ul className="hidden mdl:inline-flex items-center gap-6 lg:gap-10">
          {navLinksData?.map(({ _id, title, link }) => (
            <li
              className="text-base text-white font-semibold tracking-wide cursor-pointer hover:text-designColor duration-300"
              key={_id}
            >
              <Link
                activeClass="active"
                to={link}
                spy={true}
                smooth={true}
                offset={-70}
                duration={500}
              >
                {title}
              </Link>
            </li>
          ))}
        </ul>
        <button
          onClick={() => setShowMenu(!showMenu)}
          className="text-xl mdl:hidden bg-black w-10 h-10 inline-flex items-center justify-center rounded-full text-designColor cursor-pointer"
          aria-label="open menu"
        >
          <FiMenu />
        </button>
        {showMenu && (
          <div className="w-[80%] h-screen absolute top-0 left-0 bg-gray-900 p-4 overflow-y-auto">
            <div className="flex flex-col gap-8 py-2 relative">
              <div>
                <img
                  className="w-32 rounded-full shadow-shadowOne"
                  src={logo}
                  alt="logo"
                />
              </div>
              <ul className="flex flex-col gap-4">
                {navLinksData?.map((item) => (
                  <li
                    key={item._id}
                    className="text-base font-normal text-gray-400 tracking-wide cursor-pointer hover:text-designColor duration-300"
                  >
                    <Link
                      onClick={() => setShowMenu(false)}
                      activeClass="active"
                      to={item.link}
                      spy={true}
                      smooth={true}
                      offset={-70}
                      duration={500}
                    >
                      {item.title}
                    </Link>
                  </li>
                ))}
              </ul>
              <div className="flex flex-col gap-4">
                <h2 className="text-base uppercase font-titleFont mb-4">
                  Find me in
                </h2>
                <div className="flex gap-4">
                  {mediaLinks?.map(({ href, icon, title, id }) => (
                    <span key={id} className="bannerIcon">
                      <a
                        href={href}
                        title={title}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        {icon}
                      </a>
                    </span>
                  ))}
                </div>
              </div>
              <button
                onClick={() => setShowMenu(false)}
                className="absolute top-4 right-4 text-gray-400 hover:text-designColor duration-300 text-2xl cursor-pointer"
                aria-label="Close menu"
              >
                <MdClose />
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Navbar;
