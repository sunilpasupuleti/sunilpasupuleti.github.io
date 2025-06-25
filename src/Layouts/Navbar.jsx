import { createElement, useEffect, useState } from "react";
import { content } from "../Content";
import { HiMenuAlt2 } from "react-icons/hi";
import logo from "../assets/images/logo.png";
const Navbar = () => {
  const { nav } = content;
  const [active, setActive] = useState(0);
  const [showMenu, setShowMenu] = useState(false);

  return (
    <div className="w-full flex justify-center">
      <div className="cursor-pointer fixed top-5 left-0 md:left-5 z-[999] flex flex-col md:flex-row items-center ">
        <div
          onClick={() => setShowMenu(!showMenu)}
          className="rounded-lg bg-white/40 p-2 hover:scale-125 duration-300"
        >
          <HiMenuAlt2 size={34} className="dark:text-white" />
        </div>
        <img
          src={logo}
          alt="..."
          className="h-[100px] object-cover hidden md:block"
        />
      </div>

      <nav
        className={`fixed z-[999] flex items-center gap-5 bg-slate-200/60 px-6 py-3 backdrop-blur-md rounded-full text-dark_primary duration-300 ${
          showMenu ? "bottom-10" : "bottom-[-100%]"
        }`}
      >
        {nav.map((item, i) => {
          return (
            <a
              key={i}
              onClick={() => setActive(i)}
              href={item.link}
              className={`text-xl p-1 md:p-2.5 rounded-full sm:cursor-pointer ${
                i === active && "bg-dark_primary text-white "
              } flex flex-col items-center gap-1`}
            >
              {createElement(item.icon)}
            </a>
          );
        })}
      </nav>
    </div>
  );
};

export default Navbar;
