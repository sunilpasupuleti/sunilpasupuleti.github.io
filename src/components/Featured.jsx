import { Swiper, SwiperSlide } from "swiper/react";
import { content } from "../Content";

const Featured = () => {
  const { Featured } = content;

  const onOpenUrl = (url) => {
    window.open(url, "_blank");
  };

  return (
    <section id="featured" className="overflow-hidden">
      <div className="relative flex flex-col md:grid md:grid-cols-3">
        {/* first col */}

        <div
          data-aos="fade-right"
          className="flex items-center lg:flex-row flex-col-reverse col-span-2"
        >
          <div className="md:container px-5 py-14 flex flex-col justify-between">
            <div>
              <h2 className="title" data-aos="fade-down">
                {Featured.title}
              </h2>
              <h4 className="subtitle dark:text-gray" data-aos="fade-down">
                {Featured.subtitle}
              </h4>
              <br />
            </div>
            <div>
              <h4 className="w-[80%] text-[#AC9DD3] dark:text-[#AC9DD3] font-Poppins md:text-[25px] text-[20px]">
                {Featured.content.description}
              </h4>
              <br />
              <br />
            </div>

            <div className="flex flex-wrap gap-10">
              <button
                onClick={() => onOpenUrl(Featured.content.btnUrl)}
                className="btn md:w-[200px] w-[150px] md:h-[70px] h-[50px] border-none   bg-[#AA9CD3]  text-white hover:bg-white hover:text-[#7A2BBE] hover:border-[#AA9CD3] transition-all duration-500 hover:scale-105 text-sm md:text-[18px]"
              >
                {Featured.content.btnText}
              </button>
              {Featured.content.buttons.map((item, index) => {
                return (
                  <button
                    className="hover:scale-125 transition-all duration-500"
                    key={index}
                    onClick={() => onOpenUrl(item.url)}
                  >
                    <img
                      src={item.icon}
                      alt="..."
                      className="md:w-[60px] w-[50px]"
                    />
                  </button>
                );
              })}
            </div>
          </div>
        </div>

        <div
          data-aos="zoom-in"
          className="bg-primaryLinear -z-10 flex flex-col md:gap-14 items-center justify-center py-14"
        >
          <h1 className="md:rotate-90 mt-20  text-[#EAF2FA]">
            {Featured.firstName} <br />
            <span className="text-dark_primary  dark:text-dark_primary">
              {Featured.lastName}
            </span>
          </h1>
          <br />
          <img
            src={Featured.image}
            alt="..."
            data-aos="fade-up"
            className="w-20 h-20 md:w-32 md:h-32 rounded-[100px]"
          />
        </div>
      </div>
    </section>
  );
};

export default Featured;
