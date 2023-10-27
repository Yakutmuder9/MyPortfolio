import { useEffect, useLayoutEffect, useRef } from "react";
import { useInView } from "react-intersection-observer";
import { motion, useAnimation } from "framer-motion";
import Spline from "@splinetool/react-spline";
import { spots } from "../assets/index";
import { proDesign } from "../assets/index";
import { gsap } from "gsap/gsap-core";
// import { SplitText } from "gsap/SplitText"
import SplitType from "split-type";

const Landing = () => {
  const herotxtRef = useRef(null);
  const heroDiscRef = useRef(null);

  useEffect(() => {
    const herotxt = new SplitType(herotxtRef.current);
    const heroDisc = new SplitType(heroDiscRef.current, { charClass: "char2" });
    let t1 = gsap.timeline({ defaults: { ease: "Expo.easeInOut" } });

    t1.from(".char", {
      y: -100,
      stagger: 0.05,
      delay: 1,
    })
      .from(".char2", {
        y: -100,
        stagger: 0.05,
        duration: 0.6,
      })
      .to(
        herotxt,
        heroDisc,
        {
          y: -100,
          stagger: 0.05,
          duration: 0.6,
        },
        "-=1.2"
      );
  }, []);

  return (
    <div className="landing">
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
          <h1 ref={herotxtRef}>
            Transforming Concepts <br />
            into Realities
          </h1>

          <p ref={heroDiscRef}>
            Ready to take your project to the next level? I'd love to hear from
            you! Feel free to reach out through my contact page to discuss how
            we can work together to achieve your goals.
          </p>
        </div>

        <div className="curve-lines">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="203"
            height="354"
            viewBox="0 0 203 354"
            fill="none"
          >
            <path
              d="M3.60787 353.667C3.60787 353.667 -11.3922 237.081 64.1078 200.733C139.608 164.385 200.608 1.84991 200.608 1.84991"
              stroke="url(#paint0_linear_245_617)"
              stroke-width="5"
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
                <stop stop-color="#34C8E8" />
                <stop offset="1" stop-color="#34C8E8" stop-opacity="0" />
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
              d="M199.287 353.667C199.287 353.667 214.287 237.081 138.787 200.733C63.2872 164.385 2.28718 1.84991 2.28718 1.84991"
              stroke="url(#paint0_linear_245_618)"
              stroke-width="5"
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
                <stop stop-color="#34C8E8" />
                <stop offset="1" stop-color="#34C8E8" stop-opacity="0" />
              </linearGradient>
            </defs>
          </svg>
        </div>

        <p className="scroll-txt">
          {" "}
          <small>Scroll to explore more</small>{" "}
        </p>
        <div className="card-with-two-gradient">
          <div className="green-gradient"></div>
          <div className="red-gradient"></div>
        </div>
        <div className="project-cover-promo-card">
          <video src={proDesign} alt="proDesign img" autoPlay loop />
        </div>
      </div>
    </div>
  );
};

export default Landing;
