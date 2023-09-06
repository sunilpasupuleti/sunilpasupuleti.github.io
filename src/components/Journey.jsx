import { Tabs } from "flowbite-react";
import { content } from "../Content";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import { createElement, useState } from "react";

const defaultVisibleItems = 5;

const Journey = ({ darkMode }) => {
  const { journey } = content;
  const [visibleItems, setVisibleItems] = useState(defaultVisibleItems);
  return (
    <section id="works" className="min-h-screen">
      <div className="md:container px-5 py-14">
        <h2 className="title" data-aos="fade-down">
          {journey.title}
        </h2>
        <h4 className="subtitle  dark:text-gray" data-aos="fade-down">
          {journey.subtitle}
        </h4>

        <div className="mt-10 ">
          <Tabs.Group
            style="fullWidth"
            onActiveTabChange={() => setVisibleItems(defaultVisibleItems)}
          >
            {Object.values(journey.content).map((value, i) => {
              return (
                <Tabs.Item key={i} icon={value.icon} title={value.title}>
                  <div className="mt-10">
                    <VerticalTimeline lineColor="#D2E0F1">
                      {value.content
                        .slice(0, visibleItems)
                        .map((content, i) => {
                          return (
                            <VerticalTimelineElement
                              key={i}
                              contentStyle={{
                                background: darkMode ? "#14191F" : "#F5F9FD",
                                color: "#fff",
                                borderRadius: 10,
                                borderWidth: 2,
                                borderColor: darkMode
                                  ? "rgba(20,25,30,0.8)"
                                  : "rgb(245,249,253)",
                                boxShadow:
                                  "0 0.25em 0.5em 0 rgba(0,0,0,0), 0 0.4em 1.25em 0 rgba(0,0,0,0.1)",
                              }}
                              date={content.period}
                              iconStyle={{
                                background: darkMode ? "#14191E" : "#A5F3FC",
                                color: darkMode ? "#fff" : "#0991B1",
                              }}
                              icon={createElement(content.icon)}
                            >
                              <h6 className="my-2 text-lg">{content.title}</h6>
                              <p className="leading-7 text-slate-500 dark:text-slate-500 border-slate-200">
                                {content.para}
                              </p>
                            </VerticalTimelineElement>
                          );
                        })}
                      {value.content.length > visibleItems && (
                        <VerticalTimelineElement
                          key={"show_more"}
                          iconStyle={{
                            background: "#E81F62",
                            color: "#fff",
                          }}
                          date="SHOW MORE"
                          iconOnClick={() => setVisibleItems(visibleItems + 2)}
                          className="cursor-pointer"
                          icon={createElement(journey.showMoreIcon)}
                        />
                      )}
                    </VerticalTimeline>
                  </div>
                </Tabs.Item>
              );
            })}
          </Tabs.Group>
        </div>
      </div>
    </section>
  );
};

export default Journey;
