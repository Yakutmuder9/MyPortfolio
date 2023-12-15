import { useEffect, useLayoutEffect, useRef, useState } from "react";
import { useInView } from "react-intersection-observer";
import { motion, useAnimation } from "framer-motion";
import Spline from "@splinetool/react-spline";
import { spots } from "../assets/index";
import {
  proDesign,
  carcommet,
  bookstore,
  schoolPortfolio,
  nodebucket,
  zilla,
} from "../assets/index";
import { gsap } from "gsap/gsap-core";
import SplitType from "split-type";

const Landing = () => {
  const titleRef = useRef(null);
  const textToType = "Transforming Concepts\ninto Realities".split("");
  let delay = 0;

  useEffect(() => {
    const observer = observeElements();
    type();

    return () => {
      observer.disconnect(); // Disconnect the observer on component unmount
    };
  }, []);

  function type() {
    const char = document.createElement("span");
    const nextChar = textToType.shift();
    if (nextChar === "\n") {
      // If the character is a newline, create a line break element
      const lineBreak = document.createElement("br");
      titleRef.current.appendChild(lineBreak);
    } else {
      char.innerText = nextChar;
      titleRef.current.appendChild(char);
    }

    if (textToType.length > 1) {
      setTimeout(() => {
        type();
      }, 50);
    }
  }

  function observeElements() {
    let options = {
      rootMargin: "0px",
      threshold: 0.75,
    };
    let observer = new IntersectionObserver(callback, options);
    const elementsObserved = document.getElementsByClassName("observed");
    for (var i = 0; i < elementsObserved.length; i++) {
      observer.observe(elementsObserved[i]);
    }
    return observer;
  }

  const callback = (entries, observer) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("visible");
      }
    });
  };

  useEffect(() => {
    const carouselList = document.querySelector(".carousel__list");
    const carouselItems = document.querySelectorAll(".carousel__item");
    const elems = Array.from(carouselItems);
    let intervalId;
    carouselList.addEventListener("click", function (event) {
      var newActive = event.target;
      var isItem = newActive.closest(".carousel__item");

      if (!isItem || newActive.classList.contains("carousel__item_active")) {
        return;
      }
      update(newActive);
      resetInterval();
    });

    function update(newActive) {
      const newActivePos = newActive.dataset.pos;

      const current = elems.find(function (elem) {
        return elem.dataset.pos == 0;
      });
      const prev = elems.find(function (elem) {
        return elem.dataset.pos == -1;
      });
      const next = elems.find(function (elem) {
        return elem.dataset.pos == 1;
      });
      const first = elems.find(function (elem) {
        return elem.dataset.pos == -2;
      });
      const last = elems.find(function (elem) {
        return elem.dataset.pos == 2;
      });

      current.classList.remove("carousel__item_active");

      [current, prev, next, first, last].forEach(function (item) {
        var itemPos = item.dataset.pos;

        item.dataset.pos = getPos(itemPos, newActivePos);
      });
    }

    function getPos(current, active) {
      const diff = current - active;

      if (Math.abs(current - active) > 2) {
        return -current;
      }
      return diff;
    }
    function resetInterval() {
      clearInterval(intervalId);
      intervalId = setInterval(autoChangeSlide, 5000);
    }
    function autoChangeSlide() {
      const current = elems.find(function (elem) {
        return elem.dataset.pos == 0;
      });
      const next = elems.find(function (elem) {
        return elem.dataset.pos == 1;
      });
      if (next) {
        update(next);
      } else {
        update(elems[0]);
      }
    }
    function handleKeyDown(event) {
      if (event.key === "ArrowLeft") {
        const current = elems.find(function (elem) {
          return elem.dataset.pos == 0;
        });
        const prev = elems.find(function (elem) {
          return elem.dataset.pos == -1;
        });
        if (prev) {
          update(prev);
          resetInterval();
        }
      } else if (event.key === "ArrowRight") {
        const current = elems.find(function (elem) {
          return elem.dataset.pos == 0;
        });
        const next = elems.find(function (elem) {
          return elem.dataset.pos == 1;
        });
        if (next) {
          update(next);
          resetInterval();
        }
      }
    }
    document.addEventListener("keydown", handleKeyDown);
    resetInterval();
  }, []);

  useEffect(() => {
    const growingPaths = document.querySelectorAll(".growing-path");

    growingPaths.forEach((path) => {
      const length = path.getTotalLength();
      path.style.strokeDasharray = length;
      path.style.strokeDashoffset = length;

      path.style.animation = "grow 5s ease-in-out forwards infinite";

      // Remove animation after it completes
      path.addEventListener("animationend", () => {
        path.style.animation = "none";
      });
    });
  }, []);

  // State to manage carousel images
  const [carouselImages, setCarouselImages] = useState([
    carcommet,
    zilla,
    nodebucket,
    schoolPortfolio,
    bookstore,
  ]);

  // Update carousel images after a certain time or event
  useEffect(() => {
    const intervalId = setInterval(() => {
      // Rotate images, for example
      const rotatedImages = [...carouselImages.slice(1), carouselImages[0]];
      setCarouselImages(rotatedImages);
    }, 5000);

    // Clean up interval on component unmount
    return () => clearInterval(intervalId);
  }, [carouselImages]);

  return (
    <div className="landing" id="landing">
      <div className="container">
        <img className="bg-video" src={spots} />
        <div className="center-ellipse-line">
          <div className="ellipse-line"></div>
        </div>
        <div className="ellipse-shadow"></div>

        <div className="notice">
          <p>Hi! I'm Yakut Ahmedin.</p>
        </div>

        <div className="hero-txt">
          <h1 ref={titleRef} className="title"></h1>

          <p id="hero-disc">
            Ready to take your project to the next level? I'd love to hear from
            you! Feel free to reach out through my contact page to discuss how
            we can work together to achieve your goals.
          </p>
        </div>

        <div className="curve-lines">
          <div className="svg-container">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="203"
              height="354"
              viewBox="0 0 203 354"
              fill="none"
            >
              <path
                className="growing-path"
                d="M3.60787 353.667C3.60787 353.667 -11.3922 237.081 64.1078 200.733C139.608 164.385 200.608 1.84991 200.608 1.84991"
                stroke="url(#paint0_linear_245_617)"
                strokeWidth="5"
              />
              <defs>
                <linearGradient
                  id="paint0_linear_245_617"
                  x1="10.6078"
                  y1="273.428"
                  x2="268.125"
                  y2="108.576"
                  gradientUnits="userSpaceOnUse"
                >
                  <stop stopColor="#34C8E8" />
                  <stop offset="1" stopColor="#34C8E8" stopOpacity="0" />
                </linearGradient>
              </defs>
            </svg>

            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="203"
              height="354"
              viewBox="0 0 203 354"
              fill="none"
            >
              <path
                className="growing-path"
                d="M199.287 353.667C199.287 353.667 214.287 237.081 138.787 200.733C63.2872 164.385 2.28718 1.84991 2.28718 1.84991"
                stroke="url(#paint0_linear_245_618)"
                strokeWidth="5"
              />
              <defs>
                <linearGradient
                  id="paint0_linear_245_618"
                  x1="192.287"
                  y1="273.428"
                  x2="-65.2298"
                  y2="108.576"
                  gradientUnits="userSpaceOnUse"
                >
                  <stop stopColor="#34C8E8" />
                  <stop offset="1" stopColor="#34C8E8" stopOpacity="0" />
                </linearGradient>
              </defs>
            </svg>
          </div>
        </div>

        <p className="scroll-txt">
          <small>Scroll to explore more</small>
        </p>

        <div className="project-cover-promo-card">
          <section class="section">
            <div class="desktop-wrapper">
              <div class="carousel reflect">
                <ul
                  class="carousel__list"
                  data-aos="fade-up"
                  data-aos-duration="1000"
                  data-aos-easing="ease"
                >
                  {/* <li class="carousel__item" data-pos="-2" style={{ backgroundImage: 'url("https://fiverr-res.cloudinary.com/images/q_auto,f_auto/gigs2/310861512/original/52f4fe82d910b61d54052c24e92c605495bb9353/create-personal-portfolio-website-in-24-hours.jpg")' }}></li>
                  <li class="carousel__item" data-pos="-1"></li>
                  <li class="carousel__item" data-pos="0"></li>
                  <li class="carousel__item" data-pos="1"></li>
                  <li class="carousel__item" data-pos="2"></li> */}

                  {carouselImages.map((image, index) => (
                    <li
                      key={index}
                      className="carousel__item"
                      data-pos={index - 2}
                      style={{ backgroundImage: `url("${image}")` }}
                    ></li>
                  ))}
                </ul>
              </div>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
};

export default Landing;
