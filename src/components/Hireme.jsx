import { content } from "../Content";

const Hireme = () => {
  const { Hireme } = content;
  return (
    <section id="hireme">
      <div className="md:container px-5 pt-14">
        <h2 className="title" data-aos="fade-down">
          {Hireme.title}
        </h2>
        <h4 className="subtitle dark:text-gray" data-aos="fade-down">
          {Hireme.subtitle}
        </h4>
        <br />
        <div className="flex gap-5 items-center md:flex-row  flex-col-reverse">
          <img
            src={Hireme.image1}
            alt="..."
            data-aos="fade-right"
            className="max-w-sm md:block hidden"
          />
          <img
            src={Hireme.image2}
            data-aos="fade-up"
            alt="..."
            className="max-w-sm md:hidden block"
          />

          <div
            data-aos="zoom-in"
            className="border-2 border-dark_primary dark:border-slate-500 max-w-md p-6 shadow-sm rounded-xl rounded-br-[8rem] sm:min-w-[22rem]"
          >
            <p className="leading-7">{Hireme.para}</p>
            <br />
            <button
              className="btn bg-dark_primary text-white"
              onClick={() => window.open("mailto:sunil@webwizard.in", "_blank")}
            >
              {Hireme.btnText}
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hireme;
