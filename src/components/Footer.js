import { footWave } from "../assets/index";

const Footer = () => {
  return (
    <>
      <footer className="footer">
        <div className="container">Footer</div>
        {/* <div className="copy-rights">
        <p>
          Website made by Yakut Ahmedin © 2023. All rights reserved. Web
          development.
        </p>
      </div> */}
      </footer>
      <div className="footer-wave">
        <img src={footWave} loading="lazy" alt="" />
      </div>
    </>
  );
};

export default Footer;
