import { useState, useEffect, useRef } from "react";
import { logo } from "../assets/index";
import { motion, useAnimation } from "framer-motion";

const Navbar = () => {
  const [showNavbar, setShowNavbar] = useState(true);
  const [prevScrollY, setPrevScrollY] = useState(0);
  const [isNavOpen, setIsNavOpen] = useState(false);

  const menuRef = useRef(null);
  const [activeIndex, setActiveIndex] = useState(null);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      if (menuRef.current !== null) {
        const menuItems = menuRef.current.querySelectorAll(".menu-item");

        menuItems.forEach((item, index) => {
          item.onmouseover = () => {
            setActiveIndex(index);
          };
        });
      }

      if (currentScrollY > 70 && currentScrollY > prevScrollY) {
        setShowNavbar(false);
      } else {
        setShowNavbar(true);
      }
      setPrevScrollY(currentScrollY);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [prevScrollY]);

  const controls = useAnimation();

  const handleScroll = () => {
    if (window.scrollY > 20) {
      controls.start({
        paddingTop: "0px",
        paddingBottom: "0px",
        backgroundColor:
          "linear-gradient(180deg, #0000007d 100%, #ffffff1a 200%)",
        borderBottom: "1px solid #9e9d9d4a",
        boxShadow: "0px 4px 24px 0px #23105e40",
        backdropFilter: "blur(22.5px)",
      });
    } else {
      controls.start({
        paddingTop: "60px",
        paddingBottom: "60px",
        backgroundColor: "initial",
        borderBottom: "none",
        boxShadow: "none",
        backdropFilter: "none",
      });
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };

    
  }, []);

  const handleShow = () => setIsNavOpen(!isNavOpen);

  return (
    <motion.nav
      initial={{ backgroundColor: "transparent" }}
      animate={controls}
      className={`navbar ${showNavbar ? "active" : ""}`}
    >
      <div className="container nav-container">
        <a href="#app" className="logo">
          <img src={logo} alt="yamhub logo" />
        </a>

        <div className="nav-links">
          <ul>
            <li>
              <a href="#about">About.</a>
            </li>
            <li>
              <a href="#work">Work.</a>
            </li>
            <li>
              <a href="#contact">Contact.</a>
            </li>
          </ul>
        </div>

        <div className="Get-in-touch">
          <button className="btn">Get in touch</button>
        </div>
      </div>

      <div className="collapse-menu">
        <button
          className={isNavOpen ? "btn nav-toggler open" : "btn nav-toggler"}
          onClick={handleShow}
        >
          <span></span>
          <span></span>
          <span></span>
          <span></span>
        </button>

        {isNavOpen ? (
          <>
            <div
              className={`open-menu-container ${
                isNavOpen ? "slide-down" : "slide-up"
              }`}
            >
              <div id="menu" ref={menuRef} data-active-index={activeIndex}>
                <div id="menu-items">
                  <div className="menu-item" onClick={handleShow}>
                    <a href="#about">About.</a>
                  </div>
                  <div className="menu-item" onClick={handleShow}>
                    <a href="#work">Work.</a>
                  </div>
                  <div className="menu-item" onClick={handleShow}>
                    <a href="#contact">Contact.</a>
                  </div>
                  <div className="menu-item" onClick={handleShow}>
                    <a href="#resume">Resume</a>
                  </div>
                </div>
                <div id="menu-background-pattern"></div>
                <div id="menu-background-image"></div>
              </div>
            </div>
          </>
        ) : (
          <></>
        )}
      </div>
    </motion.nav>
  );
};

export default Navbar;
