import { createElement } from "react";
import { content } from "../Content";

const Skills = () => {
  const { skills } = content;
  return (
    <section
      id="skills"
      className="min-h-fit bg-bg_light_primary dark:bg-dark_background"
    >
      <div className="md:container px-5 py-14">
        <h2 className="title" data-aos="fade-down">
          {skills.title}
        </h2>
        <h4 className="subtitle  dark:text-gray" data-aos="fade-down">
          {skills.subtitle}
        </h4>
        <br />
        <div className="flex flex-wrap gap-4 justify-center">
          {skills.skills_content.map((skill, i) => {
            return (
              <div
                key={i}
                data-aos="fade-up"
                data-aos-delay={i * 100}
                className="bg-white dark:bg-dark_secondary relative group w-full flex items-center gap-5 p-5 max-w-xs rounded-md border-2 border-slate-200 sm:cursor-pointer dark:border-slate-800"
              >
                <div>
                  <img
                    src={skill.logo}
                    alt="..."
                    className="w-10 group-hover:scale-125 duration-300"
                  />
                </div>
                <div>
                  <h6>{skill.name}</h6>
                  <div className="text-xl absolute top-3 right-3">
                    {createElement(skills.icon, {
                      color: "#0E9F6E",
                    })}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Skills;
