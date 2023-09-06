// import content
import { createElement, useEffect, useState } from "react";
import { content } from "../Content";
import styles from "./Hero.module.css";
const Hero = () => {
  const { hero } = content;

  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [scrollPosition, setScrollPosition] = useState(0);
  const [scrollDirection, setScrollDirection] = useState("none");
  const [firstTimeAnimated, setFirstTimeAnimated] = useState(false);

  const onChangeImage = (i) => {
    if (currentImageIndex === 0) {
      setCurrentImageIndex(1);
    } else {
      setCurrentImageIndex(0);
    }
    // setTimeout(() => {
    //   setHovered(false);
    // }, 2000);
  };

  const handleScroll = () => {
    const currentPosition = window.scrollY;
    setScrollDirection(currentPosition > scrollPosition ? "down" : "up");
    setScrollPosition(currentPosition);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [scrollPosition]);

  useEffect(() => {
    const scrollChangeThreshold = 50; // You can adjust this threshold as needed
    if (scrollDirection === "down" && scrollPosition > scrollChangeThreshold) {
      setCurrentImageIndex(1);
      setTimeout(() => {
        setFirstTimeAnimated(true);
      }, 1000);
    } else if (
      scrollDirection === "up" &&
      scrollPosition < scrollChangeThreshold
    ) {
      setCurrentImageIndex(0);
    }
  }, [scrollDirection, scrollPosition]);

  return (
    <section id="home" className="overflow-hidden">
      <div className="min-h-screen relative flex md:flex-row flex-col-reverse md:items-end justify-center items-center">
        <div
          data-aos="slide-left"
          data-aos-delay="1200"
          className="absolute h-full md:w-4/12 w-8/12 top-0 right-0 bg-primaryLinear bottom-0 -z-10"
        >
          <h1 className="rotate-90 absolute md:top-[40%] top-[20%] right-[-15%] text-[#EAF2FA]">
            {hero.firstName}{" "}
            <span className="text-dark_primary dark:text-dark_primary">
              {hero.LastName}
            </span>
          </h1>
        </div>
        {/* first col */}
        <div className="pb-16 px-6 pt-5" data-aos="fade-down">
          <h2>{hero.title}</h2>
          <br />
          <div className="flex justify-end">
            <button
              className="btn flex items-center gap-1 z-50"
              onClick={() => window.open(hero.cvLink, "_blank")}
            >
              {hero.btnText}
              {createElement(hero.btnIcon, { size: 24 })}
            </button>
          </div>
          <div className="flex flex-col gap-10 mt-10">
            {hero.hero_content.map((content, i) => (
              <div
                key={i}
                data-aos="fade-down"
                data-aos-delay={i * 300}
                className={`flex items-center w-80 gap-5
            ${i === 1 && " flex-row-reverse text-right"}  `}
              >
                <h3>{content.count}</h3>
                <p>{content.text}</p>
              </div>
            ))}
          </div>
        </div>
        <div className="md:h-[37rem] h-96">
          {currentImageIndex === 0 && (
            <img
              src={hero.images[0]}
              alt="..."
              data-aos={firstTimeAnimated ? "fade-up" : "slide-up"}
              className={`h-full object-cover cursor-pointer`}
            />
          )}
          {currentImageIndex === 1 && (
            <img
              src={hero.images[1]}
              alt="..."
              data-aos={firstTimeAnimated ? "fade-up" : "slide-left"}
              className={`h-full object-cover cursor-pointer`}
            />
          )}
        </div>
      </div>
    </section>
  );
};

export default Hero;
