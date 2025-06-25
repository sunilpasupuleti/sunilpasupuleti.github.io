import { Swiper, SwiperSlide } from "swiper/react";
import { content } from "../Content";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination } from "swiper";

const Projects = () => {
  const { Projects } = content;

  const onOpenDemoUrl = (url) => {
    window.open(url, "_blank");
  };

  return (
    <section
      id="projects"
      className="bg-bg_light_primary dark:bg-dark_background"
    >
      <div className="md:container px-5 pt-14 min-h-screen  flex flex-col justify-between">
        <div>
          <h2 className="title" data-aos="fade-down">
            {Projects.title}
          </h2>
          <h4 className="subtitle dark:text-gray" data-aos="fade-down">
            {Projects.subtitle}
          </h4>
          <br />
        </div>
        <div className="flex items-center lg:flex-row flex-col-reverse">
          <img
            src={Projects.image}
            alt="..."
            data-aos="fade-right"
            className="max-w-100 object-contain md:h-[80vh] md:w-[500px]"
          />
          <Swiper
            pagination={{
              clickable: true,
            }}
            loop
            data-aos="zoom-in"
            spaceBetween={20}
            modules={[Pagination]}
            className="rounded-3xl pb-16 max-w-xs md:max-w-md drop-shadow-primary dark:drop-shadow-primary self-start"
          >
            {Projects.project_content.map((content, i) => {
              let { type, url, title, description, demoUrl } = content;
              return (
                <SwiperSlide
                  key={i}
                  className="bg-white dark:bg-dark_secondary rounded-3xl p-5 border-b-8 border-[#FAF9FD] h-fit"
                >
                  {type === "image" && (
                    <img src={url} className="rounded-xl" alt="..." />
                  )}
                  {type === "video" && (
                    <video
                      loop
                      autoPlay
                      controls={false}
                      muted
                      className="rounded-xl"
                    >
                      <source src={url} type="video/mp4" />
                      Your browser does not support the video tag.
                    </video>
                  )}
                  {demoUrl && (
                    <div className="flex flex-col gap-1 mt-2">
                      <h5 className="font-bold font-Poppins ">{title}</h5>
                      {description && (
                        <p className="dark:text-slate-500 text-slate-500 mt-2 mb-2">
                          {description}
                        </p>
                      )}
                      <button
                        onClick={() => onOpenDemoUrl(demoUrl)}
                        className="font-bold text-gray dark:text-gray self-end"
                      >
                        CLICK HERE TO VIEW
                      </button>
                    </div>
                  )}
                </SwiperSlide>
              );
            })}
          </Swiper>
        </div>
      </div>
    </section>
  );
};

export default Projects;
