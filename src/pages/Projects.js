import { pkPro, blPro, ogPro, gdPro, prPro } from "../assets";
import { motion, useAnimation } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import { useInView } from "react-intersection-observer";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { Pagination } from "swiper/modules";

const projects = [
  {
    id: 1,
    code: 41,
    month: "May",
    isHovered: false,
    title: "CarCommet car shop v.1",
    disc: "I had planned for a simple layout yet very modern and minimalasatic to help me explain all my work and process and the result turned preety good.",
    imgUrl: gdPro,
    Url: "https://carcomet.netlify.app/#",
  },
  {
    id: 2,
    code: 42,
    month: "May",
    isHovered: true,
    title: "Go Furniture store v.1",
    disc: "I had planned for a simple layout yet very modern and minimalasatic to help me explain all my work and process and the result turned preety good.",
    imgUrl: pkPro,
    Url: "https://go-furniture.netlify.app/",
  },
  {
    id: 3,
    code: 43,
    month: "May",
    isHovered: false,
    title: "EM Architect  v.1",
    disc: "I had planned for a simple layout yet very modern and minimalasatic to help me explain all my work and process and the result turned preety good.",
    imgUrl: prPro,
    Url: "https://archemu.netlify.app/",
  },
  {
    id: 4,
    code: 44,
    month: "May",
    isHovered: false,
    title: "My previous portfolio v.1",
    disc: "I had planned for a simple layout yet very modern and minimalasatic to help me explain all my work and process and the result turned preety good.",
    imgUrl: gdPro,
    Url: "https://carcomet.netlify.app/#",
  },
  {
    id: 5,
    code: 45,
    month: "May",
    isHovered: false,
    title: "My previous portfolio v.1",
    disc: "I had planned for a simple layout yet very modern and minimalasatic to help me explain all my work and process and the result turned preety good.",
    imgUrl: pkPro,
    Url: "https://go-furniture.netlify.app/",
  },
  {
    id: 6,
    code: 46,
    month: "May",
    isHovered: false,
    title: "EM Architect  v.1",
    disc: "I had planned for a simple layout yet very modern and minimalasatic to help me explain all my work and process and the result turned preety good.",
    imgUrl: prPro,
    Url: "https://archemu.netlify.app/",
  },
];

const Projects = () => {
  const [cardCount, setCardCount] = useState(3);
  const [items, setItems] = useState(projects);

  const { ref: sideTextRef, inView: sideTextInView } = useInView({
    threshold: 0.2,
  });
  const { ref: formRef, inView: formInView } = useInView({
    threshold: 0.2,
  });
  const sideTextAnimation = useAnimation();
  const formAnimation = useAnimation();

  useEffect(() => {
    if (sideTextInView || formInView) {
      sideTextAnimation.start({
        x: 0,
        transition: {
          type: "spring",
          duration: 1,
          bounce: 0.2,
        },
        opacity: 1,
      });
      formAnimation.start({
        x: 0,
        transition: {
          type: "spring",
          duration: 1,
          bounce: 0.1,
        },
        opacity: 1,
      });
    } else {
      sideTextAnimation.start({ x: "-10vw", opacity: 0 });
      formAnimation.start({ x: "20vw", opacity: 0 });
    }
  }, [sideTextInView]);

  useEffect(() => {
    function handleResize() {
      if (window.innerWidth < 576) {
        setCardCount(1);
      } else if (window.innerWidth >= 576 && window.innerWidth < 768) {
        setCardCount(2);
      } else {
        setCardCount(3);
      }
    }

    handleResize();

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <div className="works" id="work">
      <div className="container">
        <div className="dollar-img">
          <img src="" alt="" />
          <img src="" alt="" />
        </div>

        <motion.div className="work-header">
          <h2>
            Some of my previous <span>WORK </span>
          </h2>
          <p>
            I create every project as my personal project. I put my blood and
            sweat into every project I do and always try to make every project
            amazing.
          </p>
        </motion.div>

        <div className="work-cards-container">
          <motion.div
            className="work-card"
            ref={sideTextRef}
            animate={sideTextAnimation}
          >
            <a
              href="https://ahmedin-nodebucket.onrender.com/#/"
              target="_blank"
            >
              <img src={blPro} alt="" />
              <div className="work-card-text-cont">
                <h3>My School portfolio v.1 </h3>
                <p>
                  I had planned for a simple layout yet very modern and
                  minimalasatic to help me explain all my work and process and
                  the result turned preety good.
                </p>
              </div>
            </a>
          </motion.div>
          <motion.div
            className="work-card"
            ref={formRef}
            animate={formAnimation}
          >
            <a
              href="https://yakutmuder9.github.io/Personal-Portfolio/index.html"
              target="_blank"
            >
              <img src={ogPro} alt="" />
              <div className="work-card-text-cont">
                <h3>My previous portfolio v.1 </h3>
                <p>
                  I had planned for a simple layout yet very modern and
                  minimalasatic to help me explain all my work and process and
                  the result turned preety good.
                </p>
              </div>
            </a>
          </motion.div>
        </div>

        <div className="slide-work-container">
          <Swiper
            slidesPerView={cardCount}
            spaceBetween={30}
            freeMode={true}
            pagination={{
              clickable: true,
            }}
            modules={[Pagination]}
            className="mySwiper"
          >
            {items.map((item, index) => {
              const nextIndex = index + 3;

              return (
                <SwiperSlide className="swiper-slide" key={item.id}>
                  <motion.div
                    className="slide-card"
                    // ref={processItems[index].ref.ref}
                    // animate={processItems[index].animation}
                  >
                    <a href={item.Url} target="_blank">
                      <img src={item.imgUrl} alt="" />
                      <div className="work-card-text-cont">
                        <h4>{item.title} </h4>
                        <p>{item.disc}</p>
                      </div>
                    </a>
                  </motion.div>
                </SwiperSlide>
              );
            })}
          </Swiper>
          <h3>
            {"<"} - - - Swipe - - - {">"}
          </h3>
        </div>
      </div>
    </div>
  );
};

export default Projects;

