import { useEffect, useRef } from "react";
import { useInView } from "react-intersection-observer";
import { motion, useAnimation } from "framer-motion";
import Spline from "@splinetool/react-spline";
import { landing } from "../assets/index";

const Landing = () => {
  const headlineRef = useRef();
  const myText2Ref = useRef();

  const { ref: landingtxt, inView: landingtxtInView } = useInView();
  const landingTxtAniamtion = useAnimation();

  useEffect(() => {
    if (landingtxtInView) {
      landingTxtAniamtion.start({
        y: 0,
        transition: {
          type: "spring",
        },
      });
    } else {
      landingTxtAniamtion.start({ y: "30vh" });
    }
  }, [landingtxtInView]);

  return (
    <div className="landing" ref={landingtxt}>
      <img src={landing} alt="landing img" />
    </div>
  );
};

export default Landing;
