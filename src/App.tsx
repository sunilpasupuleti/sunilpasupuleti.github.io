// import components
import Hero from "./components/Hero";
import Skills from "./components/Skills";
import Service from "./components/Services";
import Projects from "./components/Projects";
import Testimonials from "./components/Testimonials";
import Hireme from "./components/Hireme";
import Contact from "./components/Contact";
import { useEffect, useState } from "react";
import { MdDarkMode, MdWbSunny } from "react-icons/md";
import Switch from "react-switch";
import { Tooltip } from "flowbite-react";
import Featured from "./components/Featured";
import { Toaster } from "react-hot-toast";
import Navbar from "./Layouts/Navbar";
import Aos from "aos";
import "aos/dist/aos.css";
import Journey from "./components/Journey";
import "react-vertical-timeline-component/style.min.css";
import React from "react";

import type { CustomFlowbiteTheme } from "flowbite-react";
import { Flowbite } from "flowbite-react";
import Experiences from "./components/Certificates";

const customTheme: CustomFlowbiteTheme = {
  tab: {
    tablist: {
      styles: {
        fullWidth: "divider-none",
      },
      tabitem: {
        styles: {
          fullWidth: {
            base: "rounded-sm w-full focus:ring-0 ",
            active: {
              on: "bg-bg_light_primary dark:bg-dark_background border-2 border-slate-300 dark:border-slate-700",
              off: "bg-transparent border-b-2 border-slate-300 dark:border-slate-700",
            },
          },
        },
      },
    },
  },
  card: {
    root: {
      base: "flex rounded-lg border border-slate-300 bg-white dark:border-slate-800 dark:bg-dark_secondary rounded-2xl",
      children: "flex h-full flex-col justify-center gap-4 p-6",
      horizontal: {
        off: "flex-col",
        on: "flex-col md:max-w-xl md:flex-row",
      },
    },
  },
  modal: {
    root: {
      base: "z-[999]",
      show: {
        on: "flex bg-[rgba(0,0,0,0.3)] dark:bg-[rgba(0,0,0,0.7)] backdrop-blur-sm",
        off: "hidden",
      },
    },
    content: {
      inner: "bg-white dark:bg-dark_secondary",
    },
    header: {
      base: "flex items-start justify-between rounded-t border-slate-300 dark:border-slate-500 border-b p-5",
    },
    footer: {
      base: "flex items-center space-x-2 rounded-b border-slate-300 dark:border-slate-500 p-6",
    },
  },
};

const App = () => {
  const [darkMode, setDarkMode] = useState(false);
  useEffect(() => {
    if (darkMode) {
      document.body.classList.add("dark");
      document.body.style.backgroundColor = "#1a202c";
    } else {
      document.body.classList.remove("dark");
      document.body.style.backgroundColor = "";
    }
  }, [darkMode]);

  useEffect(() => {
    Aos.init({
      duration: 1800,
      offset: 100,
    });
  }, []);

  return (
    <Flowbite theme={{ theme: customTheme }}>
      <div className="fixed z-50 top-10 right-3 md:right-5 ">
        <Tooltip
          content={darkMode ? "Diable Dark Mode" : "Enable Dark Mode"}
          style={darkMode ? "dark" : "light"}
          className="w-40"
        >
          <label>
            <Switch
              offColor={"#25AFEF"}
              onColor="#F3C036"
              checkedIcon={
                <MdWbSunny color="#fff" size={23} className="mx-1 pt-1" />
              }
              uncheckedIcon={
                <MdDarkMode color="#fff" size={23} className="mx-1 pt-1" />
              }
              onChange={() => setDarkMode(!darkMode)}
              checked={darkMode}
            />
          </label>
        </Tooltip>
      </div>
      <Navbar />
      <Hero />
      <Skills />
      <Journey darkMode={darkMode} />
      <Experiences darkMode={darkMode} />
      <Service />
      <Projects />
      <Featured />
      <Testimonials />
      <Hireme />
      <Contact />

      {/* notification */}
      <Toaster />

      <footer className=" py-3 text-center">
        <h6 className="mb-3">SUNIL KUMAR</h6>
        <p>
          webwizard &#169; All CopyRights Reserved {new Date().getFullYear()}
        </p>
      </footer>
    </Flowbite>
  );
};

export default App;
