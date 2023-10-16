import { footWave, logo } from "../assets/index";

const Footer = () => {
  return (
    <>
      <footer className="footer">
        <div className="container">
          <div className="foot-left">
            <div className="foot-logo">
              <img src={logo} alt="yamhub logo" />
            </div>
            <div className="copy-rights">
              <p>
                We ara a lorem ipsum dolor sit amet, consectetur adipiscing
                elit, sed do eiusmod tempor incididunt ut labore et dolore magna
                aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                ullamco laboris nisi ut aliquip ex ea commodo consequat... Read
                More Website made by Yakut Ahmedin © 2023. All rights reserved.
                Web development.
              </p>
            </div>
            <div className="">
              <div className="foot-pho">
                <div className="pho-ico"></div>
                <div className="pho-txt">
                  <p>Have a question?</p>
                  <h5>445-591-3269</h5>
                </div>
              </div>
              <div className="foot-em">
                <div className="mail-ico"></div>
                <div className="mail-txt">
                  <p>Contact me at</p>
                  <h5>yakutmuder9@gmail.com</h5>
                </div>
              </div>
            </div>
            <div className="foot-nav-links">
              <ul>
                <li>
                  <a href="">About</a>
                </li>
                <li>
                  <a href="">Contact</a>
                </li>
                <li>
                  <a href="">Privacy Policy</a>
                </li>
                <li>
                  <a href="">Sitemap</a>
                </li>
                <li>
                  <a href="">Terms of Use</a>
                </li>
              </ul>
            </div>
          </div>

          <div className="foot-right">
            <h5>Newsltter</h5>
            <p>
              Be the first one to know about discounts, offers and events.
              Unsubscribe whenever you like.
            </p>
            <div className="email-inp-filed">
              <input type="text" placeholder="Enter your email" />
              <button>Submit</button>
            </div>
            <div className="footer-socials-links">
              <div className="github-link"></div>
              <div className="discord-link"></div>
              <div className="fb-link"></div>
              <div className="slack-link"></div>
            </div>
            <p>© 2023, All Rights Reserved</p>
          </div>
        </div>
      </footer>

      <div className="footer-wave">
        <img src={footWave} loading="lazy" alt="" />
      </div>
    </>
  );
};

export default Footer;
