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
    title: "My previous portfolio v.1",
    disc: "I had planned for a simple layout yet very modern and minimalasatic to help me explain all my work and process and the result turned preety good.",
    imgUrl: gdPro,
  },
  {
    id: 2,
    code: 42,
    month: "May",
    isHovered: true,
    title: "My previous portfolio v.1",
    disc: "I had planned for a simple layout yet very modern and minimalasatic to help me explain all my work and process and the result turned preety good.",
    imgUrl: pkPro,
  },
  {
    id: 3,
    code: 43,
    month: "May",
    isHovered: false,
    title: "My previous portfolio v.1",
    disc: "I had planned for a simple layout yet very modern and minimalasatic to help me explain all my work and process and the result turned preety good.",
    imgUrl: prPro,
  },
  {
    id: 4,
    code: 44,
    month: "May",
    isHovered: false,
    title: "My previous portfolio v.1",
    disc: "I had planned for a simple layout yet very modern and minimalasatic to help me explain all my work and process and the result turned preety good.",
    imgUrl: gdPro,
  },
  {
    id: 5,
    code: 45,
    month: "May",
    isHovered: false,
    title: "My previous portfolio v.1",
    disc: "I had planned for a simple layout yet very modern and minimalasatic to help me explain all my work and process and the result turned preety good.",
    imgUrl: pkPro,
  },
  {
    id: 6,
    code: 46,
    month: "May",
    isHovered: false,
    title: "My previous portfolio v.1",
    disc: "I had planned for a simple layout yet very modern and minimalasatic to help me explain all my work and process and the result turned preety good.",
    imgUrl: prPro,
  },
];

const Projects = () => {
  const [cardCount, setCardCount] = useState(3);
  const [items, setItems] = useState(projects);
  const processItems = [
    {
      ref: useInView({ threshold: 0.1 }),
      animation: useAnimation(),
      duration: 1,
      opacity: 1,
      scale: 1,
    },
    {
      ref: useInView({ threshold: 0.1 }),
      animation: useAnimation(),
      duration: 1,
      opacity: 1,
      scale: 1,
    },
    {
      ref: useInView({ threshold: 0.1 }),
      animation: useAnimation(),
      duration: 3,
      opacity: 1,
      scale: 1,
    },

    {
      ref: useInView({ threshold: 0.1 }),
      animation: useAnimation(),
      duration: 1,
      opacity: 1,
      scale: 1,
    },
    {
      ref: useInView({ threshold: 0.1 }),
      animation: useAnimation(),
      duration: 2,
      opacity: 1,
      scale: 1,
    },
    {
      ref: useInView({ threshold: 0.1 }),
      animation: useAnimation(),
      duration: 3,
      opacity: 1,
      scale: 1,
    },

    {
      ref: useInView({ threshold: 0.1 }),
      animation: useAnimation(),
      duration: 1,
      opacity: 1,
      scale: 1,
    },
    {
      ref: useInView({ threshold: 0.1 }),
      animation: useAnimation(),
      duration: 2,
      opacity: 1,
      scale: 1,
    },
    {
      ref: useInView({ threshold: 0.1 }),
      animation: useAnimation(),
      duration: 3,
      opacity: 1,
      scale: 1,
    },
  ];

  const [scrollDirection, setScrollDirection] = useState(null);
  const prevY = useRef(window.pageYOffset);

  const handleScroll = () => {
    const currentY = window.pageYOffset;
    if (currentY > prevY.current) {
      setScrollDirection("down");
    } else if (currentY < prevY.current) {
      setScrollDirection("up");
    }
    prevY.current = currentY;
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  //   useEffect(() => {
  //     processItems.forEach(({ ref, animation, duration, opacity, scale }) => {
  //       if (ref.inView && scrollDirection === "down") {
  //         animation.start({
  //           y: 0,
  //           transition: {
  //             type: "spring",
  //             duration: duration,
  //             bounce: 0.3,
  //           },
  //           opacity: opacity,
  //           scale: scale,
  //         });
  //       }
  // 	   else if (!ref.inView && scrollDirection === "up") {
  //         animation.start({ y: "20vh" });
  //       }
  //     });
  //   }, [processItems]);

  useEffect(() => {
    processItems.forEach(
      ({ ref, animation, duration, opacity, scale }, index) => {
        if (ref.inView && scrollDirection === "down") {
          animation.start({
            y: 0,
            transition: {
              type: "spring",
              duration: duration,
              bounce: 0.3,
            },
            opacity: opacity,
            scale: scale,
          });
        } else if (scrollDirection === "up" || index < 3) {
          animation.start({ y: 0, opacity: 1, scale: 1 });
        } else {
          animation.start({ y: "20vh" });
        }
      }
    );
  }, [scrollDirection]);

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
    <div className="works" id="project">
      <div className="container">
        <div className="dollar-img">
          <img src="" alt="" />
          <img src="" alt="" />
        </div>

        <motion.div
          className="work-header"
          ref={processItems[0].ref.ref}
          animate={processItems[0].animation}
        >
          <h2>Some of my previous work</h2>
          <p>
            I create every project as my personal project. I put my blood and
            sweat into every project I do and always try to make every project
            amazing.
          </p>
        </motion.div>

        <div className="work-cards-container">
          <motion.div
            className="work-card"
            ref={processItems[1].ref.ref}
            animate={processItems[1].animation}
          >
            <img src={blPro} alt="" />
            <div className="work-card-text-cont">
              <h3>My previous portfolio v.1 </h3>
              <p>
                I had planned for a simple layout yet very modern and
                minimalasatic to help me explain all my work and process and the
                result turned preety good.
              </p>
            </div>
          </motion.div>
          <motion.div
            className="work-card"
            ref={processItems[2].ref.ref}
            animate={processItems[2].animation}
          >
            <img src={ogPro} alt="" />
            <div className="work-card-text-cont">
              <h3>My previous portfolio v.1 </h3>
              <p>
                I had planned for a simple layout yet very modern and
                minimalasatic to help me explain all my work and process and the
                result turned preety good.
              </p>
            </div>
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
                  <a href="#">
                    <motion.div
                      className="slide-card"
                      // ref={processItems[index].ref.ref}
                      // animate={processItems[index].animation}
                    >
                      <img src={item.imgUrl} alt="" />
                      <div className="work-card-text-cont">
                        <h4>{item.title} </h4>
                        <p>{item.disc}</p>
                      </div>
                    </motion.div>
                  </a>
                </SwiperSlide>
              );
            })}
          </Swiper>
			<h3> --- Swipe --- </h3>
        </div>
      </div>
    </div>
  );
};

export default Projects;
