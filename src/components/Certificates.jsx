import { Swiper, SwiperSlide } from "swiper/react";
import { content } from "../Content";
import { Pagination } from "swiper";
import { Button, Card, Modal } from "flowbite-react";
import { createElement, useState } from "react";

const Certificates = ({ darkMode }) => {
  const { certificates } = content;
  const [activeIndex, setActiveIndex] = useState(0);
  const [modalOpen, setModalOpen] = useState(false);
  const [modalData, setModalData] = useState(null);

  const onView = (data) => {
    setModalOpen(true);
    setModalData(data);
  };

  const onClose = () => {
    setModalOpen(false);
    setModalData(null);
  };

  return (
    <section
      id="certificates"
      className="bg-bg_light_primary dark:bg-dark_background"
    >
      <div className="md:container min-h-screen px-5 pt-14 pb-28">
        <h2 className="title" data-aos="fade-down">
          {certificates.title}
        </h2>
        <h4 className="subtitle dark:text-gray text-3xl" data-aos="fade-down">
          {certificates.subtitle}
        </h4>
        <br />

        <Swiper
          pagination={{
            clickable: true,
          }}
          loop
          data-aos="fade-right"
          direction="horizontal"
          spaceBetween={20}
          onSlideChange={(e) => {
            setActiveIndex(e.realIndex);
          }}
          breakpoints={{
            900: {
              slidesPerView: 1,
            },
            1024: {
              slidesPerView: 2.3,
            },
          }}
          modules={[Pagination]}
          className="mt-14"
        >
          {certificates.certificates_content.map((item, i) => {
            return (
              <SwiperSlide key={i} className="mb-20">
                <Card
                  className={`select-none shadow-xl dark:shadow-md shadow-slate-200 dark:shadow-slate-800 md:hover:scale-105 duration-500 cursor-pointer md:scale-95
                  ${
                    i >= activeIndex && i < activeIndex + 2
                      ? "blur-0"
                      : "scale-90 md:blur-sm"
                  } md:min-h-[450px] ${i === activeIndex && "md:scale-100"}`}
                  renderImage={() => {
                    return (
                      <img
                        className="h-[300px] object-cover mt-2 object-top border-b-2 border-slate-200"
                        src={item.image}
                      />
                    );
                  }}
                >
                  <div className="grid grid-cols-1 md:grid-cols-2  gap-3">
                    {item.content.map((content, i) => {
                      return (
                        <div className="flex items-center gap-2" key={i}>
                          {createElement(content.logo, {
                            size: 24,
                            color: "#aaa",
                          })}
                          <h4 className="text-base text-slate-700">
                            {content.title}
                          </h4>
                        </div>
                      );
                    })}
                  </div>
                  <button
                    onClick={() => onView(item)}
                    className="bg-[#24AEEF] absolute top-3 left-3 p-3 w-10 rounded-full flex justify-center"
                  >
                    {createElement(certificates.viewIcon, { color: "#fff" })}
                  </button>
                </Card>
              </SwiperSlide>
            );
          })}
        </Swiper>

        <Modal
          dismissible
          show={modalOpen}
          onClose={onClose}
          position={"center"}
        >
          <Modal.Header>
            {modalData?.content?.map((content, i) => {
              let text = content.title;
              if (modalData.content.length - 1 !== i) {
                text += " - ";
              }
              return (
                <span key={i} className="text-base">
                  {text}
                </span>
              );
            })}
          </Modal.Header>
          <Modal.Body>
            <div className="bg-transparent">
              <img
                alt="..."
                className="w-[100%] max-h-[350px] md:max-h-max object-contain md:object-cover"
                src={modalData?.image}
              />
            </div>
          </Modal.Body>
          <Modal.Footer className="justify-end">
            <button className="btn" onClick={onClose}>
              Close
            </button>
          </Modal.Footer>
        </Modal>
      </div>
    </section>
  );
};

export default Certificates;
