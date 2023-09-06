import { Pagination } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import { content } from "../Content";
import { useState } from "react";

const Testimonials = () => {
  const { Testimonials } = content;
  const [activeIndex, setActiveIndex] = useState(0);
  return (
    <section
      id="testimonials"
      className="bg-bg_light_primary dark:bg-dark_background"
    >
      <div className="md:container px-5 pt-14">
        <h2 className="title" data-aos="fade-down">
          {Testimonials.title}
        </h2>
        <h4 className="subtitle dark:text-gray" data-aos="fade-down">
          {Testimonials.subtitle}
        </h4>
        <br />
        <Swiper
          pagination={{
            clickable: true,
          }}
          loop
          data-aos="fade-up"
          direction="vertical"
          spaceBetween={40}
          onSlideChange={(e) => {
            setActiveIndex(e.realIndex);
          }}
          slidesPerView={1.7}
          modules={[Pagination]}
          className="md:h-96 max-h-[50rem] max-w-3xl"
        >
          {Testimonials.testimonials_content.map((content, i) => {
            return (
              <SwiperSlide key={i}>
                <div
                  className={` duration-500 bg-white dark:bg-dark_secondary mx-8 border-2 p-8 h-full rounded-2xl flex items-center gap-6 border-slate-200 select-none md:flex-row flex-col dark:border-slate-800 ${
                    activeIndex !== i && "scale-75 blur-sm"
                  }`}
                >
                  <img
                    src={content.img}
                    alt="..."
                    className="h-20 object-cover rounded-full "
                  />
                  <div>
                    <p className="sm:text-base text-sm">{content.review}</p>
                    <br />
                    <h6>{content.name}</h6>
                  </div>
                </div>
              </SwiperSlide>
            );
          })}
        </Swiper>
      </div>
    </section>
  );
};

export default Testimonials;
