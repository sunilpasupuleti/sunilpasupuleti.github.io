import { content } from "../Content";

const Services = () => {
  const { services } = content;
  return (
    <section id="services">
      <div className="md:container px-5 py-14">
        <h2 className="title" data-aos="fade-down">
          {services.title}
        </h2>
        <h4 className="subtitle dark:text-gray" data-aos="fade-down">
          {services.subtitle}
        </h4>
        <br />
        <div className="flex gap-5 justify-between flex-wrap group">
          {services.service_content.map((content, i) => {
            //  group-hover:blur-sm hover:!blur-none duration-500
            return (
              <div
                key={i}
                data-aos="fade-up"
                data-aos-delay={i * 100}
                className="min-w-[14rem]  cursor-pointer border-2 border-slate-200 dark:border-slate-800 rounded-xl text-center bg-bg_light_primary dark:bg-dark_background p-6 flex-1 group
                group-hover:blur-sm group-hover:scale-95 hover:!blur-none hover:!scale-110  duration-100
                "
              >
                <img src={content.logo} alt="..." className="mx-auto w-20" />
                <h6 className="my-3">{content.title}</h6>
                <p className="leading-7">{content.para}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Services;
