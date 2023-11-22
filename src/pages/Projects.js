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
            ref={formRef}
            animate={formAnimation}
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

// import { pkPro, blPro, ogPro, gdPro, prPro } from "../assets";
// import { motion, useAnimation } from "framer-motion";
// import { useEffect, useRef, useState } from "react";
// import { useInView } from "react-intersection-observer";
// import { Swiper, SwiperSlide } from "swiper/react";
// import "swiper/css";
// import { Pagination } from "swiper/modules";

// const projects = [
//   {
//     id: 1,
//     code: 41,
//     month: "May",
//     isHovered: false,
//     title: "My previous portfolio v.1",
//     disc: "I had planned for a simple layout yet very modern and minimalasatic to help me explain all my work and process and the result turned preety good.",
//     imgUrl: gdPro,
//   },
//   {
//     id: 2,
//     code: 42,
//     month: "May",
//     isHovered: true,
//     title: "My previous portfolio v.1",
//     disc: "I had planned for a simple layout yet very modern and minimalasatic to help me explain all my work and process and the result turned preety good.",
//     imgUrl: pkPro,
//   },
//   {
//     id: 3,
//     code: 43,
//     month: "May",
//     isHovered: false,
//     title: "My previous portfolio v.1",
//     disc: "I had planned for a simple layout yet very modern and minimalasatic to help me explain all my work and process and the result turned preety good.",
//     imgUrl: prPro,
//   },
//   {
//     id: 4,
//     code: 44,
//     month: "May",
//     isHovered: false,
//     title: "My previous portfolio v.1",
//     disc: "I had planned for a simple layout yet very modern and minimalasatic to help me explain all my work and process and the result turned preety good.",
//     imgUrl: gdPro,
//   },
//   {
//     id: 5,
//     code: 45,
//     month: "May",
//     isHovered: false,
//     title: "My previous portfolio v.1",
//     disc: "I had planned for a simple layout yet very modern and minimalasatic to help me explain all my work and process and the result turned preety good.",
//     imgUrl: pkPro,
//   },
//   {
//     id: 6,
//     code: 46,
//     month: "May",
//     isHovered: false,
//     title: "My previous portfolio v.1",
//     disc: "I had planned for a simple layout yet very modern and minimalasatic to help me explain all my work and process and the result turned preety good.",
//     imgUrl: prPro,
//   },
// ];

// const Projects = () => {
//   const [cardCount, setCardCount] = useState(3);
//   const [items, setItems] = useState(projects);
//   const processItems = [
//     {
//       ref: useInView({ threshold: 0.1 }),
//       animation: useAnimation(),
//       duration: 1,
//       opacity: 1,
//       scale: 1,
//     },
//     {
//       ref: useInView({ threshold: 0.1 }),
//       animation: useAnimation(),
//       duration: 1,
//       opacity: 1,
//       scale: 1,
//     },
//     {
//       ref: useInView({ threshold: 0.1 }),
//       animation: useAnimation(),
//       duration: 3,
//       opacity: 1,
//       scale: 1,
//     },

//     {
//       ref: useInView({ threshold: 0.1 }),
//       animation: useAnimation(),
//       duration: 1,
//       opacity: 1,
//       scale: 1,
//     },
//     {
//       ref: useInView({ threshold: 0.1 }),
//       animation: useAnimation(),
//       duration: 2,
//       opacity: 1,
//       scale: 1,
//     },
//     {
//       ref: useInView({ threshold: 0.1 }),
//       animation: useAnimation(),
//       duration: 3,
//       opacity: 1,
//       scale: 1,
//     },

//     {
//       ref: useInView({ threshold: 0.1 }),
//       animation: useAnimation(),
//       duration: 1,
//       opacity: 1,
//       scale: 1,
//     },
//     {
//       ref: useInView({ threshold: 0.1 }),
//       animation: useAnimation(),
//       duration: 2,
//       opacity: 1,
//       scale: 1,
//     },
//     {
//       ref: useInView({ threshold: 0.1 }),
//       animation: useAnimation(),
//       duration: 3,
//       opacity: 1,
//       scale: 1,
//     },
//   ];

//   const controls = useAnimation();
//   const [ref, inView] = useInView({ triggerOnce: true });
//   useEffect(() => {

//     // Define animation variants
//     const variants = {
//       hidden: { opacity: 0, x: inView ? "-100%" : "100%" },
//       visible: { opacity: 1, x: 0 },
//     };

//     // Set initial animation state based on inView
//     const initialAnimation = inView ? "visible" : "hidden";

//     // Animate the card when it comes into view
//     controls.start(initialAnimation);
//   }, []);
//   // const [scrollDirection, setScrollDirection] = useState(null);
//   // const prevY = useRef(window.pageYOffset);

//   // const handleScroll = () => {
//   //   const currentY = window.pageYOffset;
//   //   if (currentY > prevY.current) {
//   //     setScrollDirection("down");
//   //   } else if (currentY < prevY.current) {
//   //     setScrollDirection("up");
//   //   }
//   //   prevY.current = currentY;
//   // };

//   // useEffect(() => {
//   //   window.addEventListener("scroll", handleScroll);
//   //   return () => window.removeEventListener("scroll", handleScroll);
//   // }, []);

//   // useEffect(() => {
//   //   processItems.forEach(({ ref, animation, duration, opacity, scale }) => {
//   //     if (ref.inView && scrollDirection === "down") {
//   //       animation.start({
//   //         y: 0,
//   //         transition: {
//   //           type: "spring",
//   //           duration: duration,
//   //           bounce: 0.3,
//   //         },
//   //         opacity: opacity,
//   //         scale: scale,
//   //       });
//   //     }
//   //    else if (!ref.inView && scrollDirection === "up") {
//   //       animation.start({ y: "20vh" });
//   //     }
//   //   });
//   // }, [processItems]);

//   // useEffect(() => {
//   //   processItems.forEach(
//   //     ({ ref, animation, duration, opacity, scale }, index) => {
//   //       if (ref.inView && scrollDirection === "down") {
//   //         animation.start({
//   //           y: 0,
//   //           transition: {
//   //             type: "spring",
//   //             duration: duration,
//   //             bounce: 0.3,
//   //           },
//   //           opacity: opacity,
//   //           scale: scale,
//   //         });
//   //       } else if (scrollDirection === "up" || index < 3) {
//   //         animation.start({ y: 0, opacity: 1, scale: 1 });
//   //       } else {
//   //         animation.start({ y: "20vh" });
//   //       }
//   //     }
//   //   );
//   // }, [scrollDirection]);

//   useEffect(() => {
//     function handleResize() {
//       if (window.innerWidth < 576) {
//         setCardCount(1);
//       } else if (window.innerWidth >= 576 && window.innerWidth < 768) {
//         setCardCount(2);
//       } else {
//         setCardCount(3);
//       }
//     }

//     handleResize();

//     window.addEventListener("resize", handleResize);

//     return () => {
//       window.removeEventListener("resize", handleResize);
//     };
//   }, []);

//   useEffect(() => {
//     let index = 0,
//       interval = 1000;

//     const rand = (min, max) =>
//       Math.floor(Math.random() * (max - min + 1)) + min;

//     const animate = (star) => {
//       star.style.setProperty("--star-left", `${rand(-10, 100)}%`);
//       star.style.setProperty("--star-top", `${rand(-40, 80)}%`);
//       star.style.animation = "none";
//     };

//     document.querySelectorAll(".magic-star").forEach((star, index) => {
//       setTimeout(() => {
//         animate(star);
//         setInterval(() => animate(star), 1000);
//       }, index * (interval / 3));
//     });
//   }, []);

//   return (
//     <div className="works" id="work">
//       <div className="container">
//         <div className="dollar-img">
//           <img src="" alt="" />
//           <img src="" alt="" />
//         </div>

//         <motion.div
//           className="work-header"
//           ref={processItems[0].ref.ref}
//           animate={processItems[0].animation}
//         >
//           <h2>
//             Some of my previous{" "}
//             <span className="magic">
//               {[...Array(3)].map((_, index) => (
//                 <span className="magic-star" key={index}>
//                   <svg viewBox="0 0 512 512">
//                     <path d="M512 255.1c0 11.34-7.406 20.86-18.44 23.64l-171.3 42.78l-42.78 171.1C276.7 504.6 267.2 512 255.9 512s-20.84-7.406-23.62-18.44l-42.66-171.2L18.47 279.6C7.406 276.8 0 267.3 0 255.1c0-11.34 7.406-20.83 18.44-23.61l171.2-42.78l42.78-171.1C235.2 7.406 244.7 0 256 0s20.84 7.406 23.62 18.44l42.78 171.2l171.2 42.78C504.6 235.2 512 244.6 512 255.1z" />
//                   </svg>
//                 </span>
//               ))}
//               <span className="magic-text">WORK </span>
//             </span>
//           </h2>
//           <p>
//             I create every project as my personal project. I put my blood and
//             sweat into every project I do and always try to make every project
//             amazing.
//           </p>
//         </motion.div>

//         <div className="work-cards-container">
//           <motion.div
//             className="work-card"
//             ref={processItems[1].ref.ref}
//             animate={processItems[1].animation}
//           >
//             <img src={blPro} alt="" />
//             <div className="work-card-text-cont">
//               <h3>My previous portfolio v.1 </h3>
//               <p>
//                 I had planned for a simple layout yet very modern and
//                 minimalasatic to help me explain all my work and process and the
//                 result turned preety good.
//               </p>
//             </div>
//           </motion.div>
//           <motion.div
//             className="work-card"
//             ref={processItems[2].ref.ref}
//             animate={processItems[2].animation}
//           >
//             <img src={ogPro} alt="" />
//             <div className="work-card-text-cont">
//               <h3>My previous portfolio v.1 </h3>
//               <p>
//                 I had planned for a simple layout yet very modern and
//                 minimalasatic to help me explain all my work and process and the
//                 result turned preety good.
//               </p>
//             </div>
//           </motion.div>
//         </div>

//         <div className="slide-work-container">
//           <Swiper
//             slidesPerView={cardCount}
//             spaceBetween={30}
//             freeMode={true}
//             pagination={{
//               clickable: true,
//             }}
//             modules={[Pagination]}
//             className="mySwiper"
//           >
//             {items.map((item, index) => {
//               const nextIndex = index + 3;

//               return (
//                 <SwiperSlide className="swiper-slide" key={item.id}>
//                   <motion.div
//                     className="slide-card"
//                     // ref={processItems[index].ref.ref}
//                     // animate={processItems[index].animation}
//                   >
//                     <img src={item.imgUrl} alt="" />
//                     <div className="work-card-text-cont">
//                       <h4>{item.title} </h4>
//                       <p>{item.disc}</p>
//                     </div>
//                   </motion.div>
//                 </SwiperSlide>
//               );
//             })}
//           </Swiper>
//           <h3>
//             {"<"} - - - Swipe - - - {">"}
//           </h3>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Projects;
