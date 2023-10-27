import React, { useState, useEffect, useRef } from "react";

const Animation = () => {
  const [percent, setPercent] = useState(0);
  const cntRef = useRef(null);
  const waterRef = useRef(null);

  useEffect(() => {
    let interval;
    interval = setInterval(() => {
      setPercent((prevPercent) => {
        const newPercent = prevPercent + 1;
        if (cntRef.current) {
          cntRef.current.innerHTML = newPercent;
        }
        if (waterRef.current) {
          waterRef.current.style.transform = `translate(0, ${
            100 - newPercent
          }%)`;
        }
        if (newPercent === 100) {
          clearInterval(interval);
        }
        return newPercent;
      });
    }, 50);

    return () => clearInterval(interval);
  }, []);

  return (
    // <div classNameName="animation-container">
    //   <div className="animation01">
    //     <div className="rhombus_small">
    //       <div className="rhombus">
    //         <div className="border_box">
    //           <span className="line line01"></span>
    //           <span className="line line02"></span>
    //           <span className="line line03"></span>
    //           <span className="line line04"></span>
    //           <span className="circle circle01"></span>
    //           <span className="circle circle02"></span>
    //           <span className="circle circle03"></span>
    //           <span className="circle circle04"></span>
    //           <span className="animation_line animation_line01"></span>
    //           <span className="animation_line_wrapper animation_line02_wrapper">
    //             <span className="animation_line animation_line02"></span>
    //           </span>
    //           <span className="animation_line animation_line03"></span>
    //           <span className="animation_line_wrapper animation_line04_wrapper">
    //             <span className="animation_line animation_line04"></span>
    //           </span>
    //           <span className="animation_line animation_line05"></span>
    //           <span className="animation_line_wrapper animation_line06_wrapper">
    //             <span className="animation_line animation_line06"></span>
    //           </span>
    //           <span className="animation_line animation_line07"></span>
    //           <span className="animation_line_wrapper animation_line08_wrapper">
    //             <span className="animation_line animation_line08"></span>
    //           </span>
    //         </div>
    //         <div className="wave">
    //           <div className="wave_wrapper">
    //             <div className="wave_box"></div>
    //           </div>
    //         </div>
    //       </div>
    //     </div>
    //   </div>
    // </div>
    <>
      <svg
        version="1.1"
        xmlns="http://www.w3.org/2000/svg"
        // xmlns:xlink="http://www.w3.org/1999/xlink"
        x="0px"
        y="0px"
        // style="display: none;"
      >
        <symbol id="wave">
          <path d="M420,20c21.5-0.4,38.8-2.5,51.1-4.5c13.4-2.2,26.5-5.2,27.3-5.4C514,6.5,518,4.7,528.5,2.7c7.1-1.3,17.9-2.8,31.5-2.7c0,0,0,0,0,0v20H420z"></path>
          <path d="M420,20c-21.5-0.4-38.8-2.5-51.1-4.5c-13.4-2.2-26.5-5.2-27.3-5.4C326,6.5,322,4.7,311.5,2.7C304.3,1.4,293.6-0.1,280,0c0,0,0,0,0,0v20H420z"></path>
          <path d="M140,20c21.5-0.4,38.8-2.5,51.1-4.5c13.4-2.2,26.5-5.2,27.3-5.4C234,6.5,238,4.7,248.5,2.7c7.1-1.3,17.9-2.8,31.5-2.7c0,0,0,0,0,0v20H140z"></path>
          <path d="M140,20c-21.5-0.4-38.8-2.5-51.1-4.5c-13.4-2.2-26.5-5.2-27.3-5.4C46,6.5,42,4.7,31.5,2.7C24.3,1.4,13.6-0.1,0,0c0,0,0,0,0,0l0,20H140z"></path>
        </symbol>
      </svg>
      <div className="box">
        <div className="percent">
          <div className="percentNum" id="count" ref={cntRef}>
            0
          </div>
          <div className="percentB">%</div>
        </div>
        <div id="water" className="water" ref={waterRef}>
          <svg viewBox="0 0 560 20" className="water_wave water_wave_back">
            {/* <use xlink:href="#wave"></use> */}
          </svg>
          <svg viewBox="0 0 560 20" className="water_wave water_wave_front">
            {/* <use xlink:href="#wave"></use> */}
          </svg>
        </div>
      </div>
    </>
  );
};

export default Animation;
