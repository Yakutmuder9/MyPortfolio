import { proDesign } from "../assets/index";

const Brands = () => {
  return (
    <div className="brands">
      {/* <img src={proDesign} alt="proDesign img" /> */}
      <div className="container">
        <video src={proDesign} alt="proDesign img" autoPlay loop />
      </div>
    </div>
  );
};

export default Brands;
