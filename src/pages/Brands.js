import { proDesign } from "../assets/index";
import { useRef } from "react";

const Brands = () => {
  const html = document.documentElement;
  const canvasRef = useRef(null);
  const contextRef = useRef(null);
  const frameCount = 148;

  const currentFrame = (index) =>
    `https://www.apple.com/105/media/us/airpods-pro/2019/1299e2f5_9206_4470_b28e_08307a42f19b/anim/sequence/large/01-hero-lightpass/${index
      .toString()
      .padStart(4, "0")}.jpg`;

  const preloadImages = () => {
    for (let i = 1; i < frameCount; i++) {
      const img = new Image();
      img.src = currentFrame(i);
    }
  };

  const updateImage = (index) => {
    const img = new Image();
    img.src = currentFrame(index);
    img.onload = function () {
      contextRef.current.drawImage(img, 0, 0);
    };
  };

  // useEffect(() => {
  //   const canvas = canvasRef.current;
  //   const context = canvas.getContext("2d");
  //   contextRef.current = context;

  //   const img = new Image();
  //   img.src = currentFrame(1);
  //   canvas.width = 1158;
  //   canvas.height = 770;
  //   img.onload = function () {
  //     context.drawImage(img, 0, 0);
  //   };

  //   const handleScroll = () => {
  //     const scrollTop = html.scrollTop;
  //     const maxScrollTop = html.scrollHeight - window.innerHeight;
  //     const scrollFraction = scrollTop / maxScrollTop;
  //     const frameIndex = Math.min(
  //       frameCount - 1,
  //       Math.ceil(scrollFraction * frameCount)
  //     );

  //     requestAnimationFrame(() => updateImage(frameIndex + 1));
  //   };

  //   window.addEventListener("scroll", handleScroll);

  //   // Cleanup event listener on component unmount
  //   return () => {
  //     window.removeEventListener("scroll", handleScroll);
  //   };
  // }, []);

  // // Preload images when the component mounts
  // useEffect(() => {
  //   preloadImages();
  // }, []);

  return (
    <div className="brands">
      <div className="container">
        <div className="brand-header">
          <br />
          <h2>
            Product <span>DESIGNES</span>
          </h2>
          <p>I develop the visual and functional aspects of products, ensuring they meet the needs of users and align with business goals.</p>
        </div>
        <video src={proDesign} alt="proDesign img" autoPlay loop />
        <canvas id="hero-lightpass" ref={canvasRef} />
      </div>
    </div>
  );
};

export default Brands;
