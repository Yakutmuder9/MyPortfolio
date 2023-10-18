import { footWave, logo } from "../assets/index";
import { FiPhoneForwarded, FiMail } from "react-icons/fi";

const Footer = () => {
  return (
    <>
      <footer className="footer">
        <div className="container">
          <div className="foot-left">
            <div className="footer-socials-link">
              <h4>CONTACT</h4>
              <div className="footer-socials-link-txt">
                <ul className="git-link-Drib">
                  <li>
                    <a href="https://www.linkedin.com/in/yakut-ahmedin" target="_blank">Linkedln</a>
                  </li>
                  <li>
                    <a href="https://github.com/Yakutmuder9"  target="_blank">Github</a>
                  </li>
                  <li>
                    <a href="https://dribbble.com/yakut9/about?utm_source=Clipboard_%22clipboard_about%22&utm_campaign=%22yakut9%22&utm_content=%22About%20yakut9%22&utm_medium=Social_Share"  target="_blank">
                      Dribbble
                    </a>
                  </li>
                </ul>
                <ul className="sla-dis-team">
                  <li>
                    <a href="https://discord.gg/jEjGzsD6"  target="_blank">Discord</a>
                  </li>
                  <li>
                    <a href="https://join.slack.com/t/yamhub/shared_invite/zt-250tej6na-aBwbHkPf_jj2ky3PBCXRag"  target="_blank">Slack</a>
                  </li>
                  <li>
                    <a href="https://www.figma.com/file/q8lPXTdsRIFzjkd1ZHur9b/My-Projects?type=design&node-id=0%3A1&mode=design&t=r6ZcqtThJDg4TRuH-1"  target="_blank">Figma</a>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          <div className="foot-right">
            <a href="tel:4455913269">
              <div className="foot-pho">
                <div className="pho-ico">
                  <FiPhoneForwarded />
                </div>
                <div className="pho-txt">
                  <small>Have a question?</small>
                  <h5>445-591-3269</h5>
                </div>
              </div>
            </a>
            <a href="mailto:yakutmuder9@gmail.com">
              <div className="foot-em">
                <div className="mail-ico">
                  <FiMail />
                </div>
                <div className="mail-txt">
                  <small>Contact me at</small>
                  <h5>yakutmuder9@gmail.com</h5>
                </div>
              </div>
            </a>
          </div>
          <div className="move-top">
            <button>
              Move to <span> top</span>
            </button>
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
