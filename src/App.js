import "./styles/main.scss";
import Landing from "./pages/Landing";
import Navbar from "./components/Navbar";
import { useEffect, useState } from "react";
import Entrance from "./components/Entrance";
import Footer from "./components/Footer";
import Brands from "./pages/Brands";
import Skills from "./pages/Skills";
import About from "./pages/About";
import Projects from "./pages/Projects";

const App = () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 5000);
  }, []);

  return (
    <div className="App" id="app">
      {isLoading ? (
        <Entrance />

      ) : (
        <>
          <Navbar />
          <div className="container">
            <Landing />
          </div>
          <About />
          <Skills />
          <Projects />
          <Brands />
          <Footer />
        </>
      )}
    </div>
  );
};

export default App;

{
  /* <div className="App" id="app">
      <Navbar />
      <div data-w-id="a02d2e49-9e04-98c8-af2d-e2921d0abecf" class="loader">
        <img
          src="./VoetsDesign2_files/60464f6e1c3ebfcfaa8d85c2_logo.svg"
          loading="lazy"
          data-w-id="dc19cc07-2baa-ffea-b176-cc2d7b4a4080"
          alt=""
          class="logo"
        />
      </div>
      <div data-w-id="46093aab-ba86-b323-ea3f-17f659215e76" class="navigation">
        <div class="navcontainer w-container">
          <a
            href="https://www.voetsdesign.com/#Intro"
            class="logocontainer w-inline-block"
          >
            <img
              src="./VoetsDesign2_files/60464f6e1c3ebfcfaa8d85c2_logo.svg"
              loading="lazy"
              alt=""
              class="logo"
            />
          </a>
          <div class="navlinkcontainer">
            <a href="https://www.voetsdesign.com/#Work" class="navlink">
              Work.
            </a>
            <a href="https://www.voetsdesign.com/#About-Roles" class="navlink">
              About.
            </a>
            <a href="https://www.voetsdesign.com/#ContactMe" class="navlink">
              Contact.
            </a>
          </div>
        </div>
      </div>
      <div id="Intro" class="headersection">
        <img
          src="./VoetsDesign2_files/604650b7c35d494201b61d43_Swoosh_01.svg"
          loading="lazy"
          alt=""
          class="image-5"
        />
        <div
          data-w-id="e4bd6623-c06b-67fb-5d79-38f08dd44420"
          class="introcontainer"
        >
          <h1
            data-w-id="9d596b23-57e8-0f39-9b78-14e531fa0737"
            class="introtitle"
          >
            I’m Rob — digital product &amp; UX designer.
          </h1>
          <h3
            data-w-id="480a1839-9a80-5bd0-4dec-75ae28a5db7f"
            class="subheader"
          >
            I break down complex user experience problems to create integrity
            focussed solutions that connect billions of people.
            <br />
          </h3>
        </div>
      </div>
      <div
        class="contentsection"
        data-w-id="b295f1cf-2583-9db6-77b0-351a8d8c5d65"
      >
        <div id="Work" class="sectionheader">
          <h2 class="sectiontitle">Current roles and (side) projects</h2>
          <h4 class="description">
            After time in Rotterdam and New York, my latest adventure has landed
            me in London, where I'm focussing on the following challenges.
          </h4>
          <div class="divider"></div>
        </div>
        <div class="contentcontainer">
          <div class="card">
            <img
              src="./VoetsDesign2_files/60465a2b04ac71e162282157_MSGR Header.png"
              loading="lazy"
              sizes="(max-width: 479px) 100vw, (max-width: 767px) 95vw, 30vw"
              srcset="
              https://uploads-ssl.webflow.com/5d0612b585f49bec2da61fb2/60465a2b04ac71e162282157_MSGR%20Header-p-500.png 500w,
              https://uploads-ssl.webflow.com/5d0612b585f49bec2da61fb2/60465a2b04ac71e162282157_MSGR%20Header-p-800.png 800w,
              https://uploads-ssl.webflow.com/5d0612b585f49bec2da61fb2/60465a2b04ac71e162282157_MSGR%20Header.png       996w
            "
              alt=""
              class="cardimage"
            />
            <div class="cardcontentcontainer">
              <h4 class="cardtitle">Messenger Privacy</h4>
              <div class="cardcontent emp">2020</div>
              <div class="cardcontent">
                Leading multiple product streams to transform Messenger and
                Instagram&nbsp;Direct into more safe and private messaging
                experiences.
              </div>
            </div>
          </div>
          
          <div class="card">
            <img
              src="./VoetsDesign2_files/62847791faa08a54254d2329_Frame 59.png"
              loading="lazy"
              sizes="(max-width: 479px) 100vw, (max-width: 767px) 95vw, 30vw"
              srcset="
              https://uploads-ssl.webflow.com/5d0612b585f49bec2da61fb2/62847791faa08a54254d2329_Frame%2059-p-500.png 500w,
              https://uploads-ssl.webflow.com/5d0612b585f49bec2da61fb2/62847791faa08a54254d2329_Frame%2059-p-800.png 800w,
              https://uploads-ssl.webflow.com/5d0612b585f49bec2da61fb2/62847791faa08a54254d2329_Frame%2059.png       996w
            "
              alt=""
              class="cardimage"
            />
            <div class="cardcontentcontainer">
              <h4 class="cardtitle">WorkHard-App</h4>
              <div class="cardcontent emp">2022&nbsp;</div>
              <div class="cardcontent">
                Delivering a human fitness tracking experience — helping you to
                document every step throughout your fitness journey.
                <a href="https://www.workhard-app.com/" class="link-4">
                  Download Now
                </a>
              </div>
            </div>
          </div>
          <div class="card">
            <img
              src="./VoetsDesign2_files/6047579969e3fc70589877e5_Group 17.png"
              loading="lazy"
              sizes="(max-width: 479px) 100vw, (max-width: 767px) 95vw, 30vw"
              srcset="
              https://uploads-ssl.webflow.com/5d0612b585f49bec2da61fb2/6047579969e3fc70589877e5_Group%2017-p-500.png 500w,
              https://uploads-ssl.webflow.com/5d0612b585f49bec2da61fb2/6047579969e3fc70589877e5_Group%2017-p-800.png 800w,
              https://uploads-ssl.webflow.com/5d0612b585f49bec2da61fb2/6047579969e3fc70589877e5_Group%2017.png       996w
            "
              alt=""
              class="cardimage"
            />
            <div class="cardcontentcontainer">
              <h4 class="cardtitle">Story Thyme</h4>
              <div class="cardcontent emp">2020 — 2021</div>
              <div class="cardcontent">
                Rethinking the way people consume news articles by creating a
                simple and snack-able reader experience.
              </div>
            </div>
          </div>
        </div>
        <div id="Highlights" class="sectionheader">
          <h2 class="sectiontitle">Project highlights</h2>
          <h4 class="description">
            Over the last decade I've worked on a number of interesting
            projects. Below is a small selection of those that have made
            significant impact on me as a designer. You can
            <a href="https://www.voetsdesign.com/#ContactMe" class="link-3">
              contact me
            </a>
            for more detailed projects and case studies.
          </h4>
          <div class="divider"></div>
        </div>
        <div class="contentcontainer">
          <div class="card hidden">
            <img
              src="./VoetsDesign2_files/6046a8b5cb06a557b0c7d529_IVP.png"
              loading="lazy"
              sizes="100vw"
              srcset="
              https://uploads-ssl.webflow.com/5d0612b585f49bec2da61fb2/6046a8b5cb06a557b0c7d529_IVP-p-500.png 500w,
              https://uploads-ssl.webflow.com/5d0612b585f49bec2da61fb2/6046a8b5cb06a557b0c7d529_IVP-p-800.png 800w,
              https://uploads-ssl.webflow.com/5d0612b585f49bec2da61fb2/6046a8b5cb06a557b0c7d529_IVP.png       996w
            "
              alt=""
              class="cardimage project"
            />
            <div class="cardcontentcontainer link">
              <h4 class="cardtitle">Verification Platform</h4>
              <div class="cardcontent emp facebook">FACEBOOK ·&nbsp;2020</div>
              <div class="cardcontent">
                I drove a product vision that empowered people to verify their
                authentic identity across our family-of-apps — allowing them
                unrestricted product access and increased account security.
              </div>
              <a
                data-w-id="bd8ff4b9-10cc-8aef-a24b-44f75c7c34bd"
                href="https://about.fb.com/news/2020/05/id-verification-high-reach-profiles/"
                class="cardlink w-inline-block"
              >
                <div class="cardcontent link">MORE&nbsp;DETAILS</div>
                <img
                  src="./VoetsDesign2_files/60465ed13b07caf0905e4d0b_Arrow.svg"
                  loading="lazy"
                  alt=""
                  class="image-8"
                />
              </a>
            </div>
          </div>
          <div class="card">
            <div class="cardimagecontainer">
              <img
                src="./VoetsDesign2_files/604f66c0b69939b50dca93b2_FBa.png"
                loading="lazy"
                sizes="(max-width: 479px) 100vw, (max-width: 767px) 95vw, 30vw"
                srcset="
                https://uploads-ssl.webflow.com/5d0612b585f49bec2da61fb2/604f66c0b69939b50dca93b2_FBa-p-500.png 500w,
                https://uploads-ssl.webflow.com/5d0612b585f49bec2da61fb2/604f66c0b69939b50dca93b2_FBa-p-800.png 800w,
                https://uploads-ssl.webflow.com/5d0612b585f49bec2da61fb2/604f66c0b69939b50dca93b2_FBa.png       996w
              "
                alt=""
                class="cardimage project"
              />
            </div>
            <div class="cardcontentcontainer link">
              <h4 class="cardtitle">Authenticity Platform</h4>
              <div class="cardcontent emp facebook">FACEBOOK ·&nbsp;2019</div>
              <div class="cardcontent">
                The Authenticity Platform is a company-wide product effort to
                drive greater accountability — allowing people to be more
                confident that they know who’s behind the content they’re
                seeing.
              </div>
              <a
                data-w-id="b4c96d3c-b2a3-edce-df64-256caeff9078"
                href="https://about.fb.com/news/2020/05/id-verification-high-reach-profiles/"
                target="_blank"
                class="cardlink w-inline-block"
              >
                <div class="cardcontent link">LEARN&nbsp;MORE</div>
                <img
                  src="./VoetsDesign2_files/60465ed13b07caf0905e4d0b_Arrow.svg"
                  loading="lazy"
                  alt=""
                  class="image-8"
                />
              </a>
            </div>
          </div>
          <div class="card">
            <img
              src="./VoetsDesign2_files/60497360fb5c141006388fee_BIP.png"
              loading="lazy"
              sizes="(max-width: 479px) 100vw, (max-width: 767px) 95vw, 30vw"
              srcset="
              https://uploads-ssl.webflow.com/5d0612b585f49bec2da61fb2/60497360fb5c141006388fee_BIP-p-500.png 500w,
              https://uploads-ssl.webflow.com/5d0612b585f49bec2da61fb2/60497360fb5c141006388fee_BIP-p-800.png 800w,
              https://uploads-ssl.webflow.com/5d0612b585f49bec2da61fb2/60497360fb5c141006388fee_BIP.png       996w
            "
              alt=""
              class="cardimage project"
            />
            <div class="cardcontentcontainer link">
              <h4 class="cardtitle">BiP&nbsp;Messenger</h4>
              <div class="cardcontent emp turkcell">TURKCELL ·&nbsp;2017</div>
              <div class="cardcontent">
                BiP is a messaging platform that connects people and brands. Our
                renewed BiP messaging experience helped transform their product
                to cater for a growth to 20 million users by 2018.
              </div>
              <a
                href="https://www.voetsdesign.com/#"
                data-w-id="df165366-c319-2aa0-30c9-49409e173cb1"
                class="cardlink w-inline-block w-lightbox"
                aria-label="open lightbox"
                aria-haspopup="dialog"
              >
                <div class="cardcontent link">WATCH&nbsp;PRODUCT&nbsp;REEL</div>
                <img
                  src="./VoetsDesign2_files/60465ed13b07caf0905e4d0b_Arrow.svg"
                  loading="lazy"
                  alt=""
                  class="image-8"
                />
              </a>
            </div>
          </div>
          <div class="card">
            <img
              src="./VoetsDesign2_files/60494b5087f8d21fd74e3bdb_NIKE.png"
              loading="lazy"
              sizes="(max-width: 479px) 100vw, (max-width: 767px) 95vw, 30vw"
              srcset="
              https://uploads-ssl.webflow.com/5d0612b585f49bec2da61fb2/60494b5087f8d21fd74e3bdb_NIKE-p-500.png 500w,
              https://uploads-ssl.webflow.com/5d0612b585f49bec2da61fb2/60494b5087f8d21fd74e3bdb_NIKE-p-800.png 800w,
              https://uploads-ssl.webflow.com/5d0612b585f49bec2da61fb2/60494b5087f8d21fd74e3bdb_NIKE.png       996w
            "
              alt=""
              class="cardimage project"
            />
            <div class="cardcontentcontainer link">
              <h4 class="cardtitle">Team Challenge</h4>
              <div class="cardcontent emp nike">NIKE · 2015</div>
              <div class="cardcontent">
                The Nike Team Challenge was a product vision that changed the
                way Nike approached user activation — focussing on the
                quantified self to improve team sport performance.
              </div>
              <a
                data-w-id="d6745710-9f0f-4463-b3ba-bfd756a2cae9"
                href="https://uploads-ssl.webflow.com/5d0612b585f49bec2da61fb2/6050ce994c66eb4e51dff0b1_BSc%20Thesis_2014.pdf"
                target="_blank"
                class="cardlink w-inline-block"
              >
                <div class="cardcontent link">READ&nbsp;THESIS</div>
                <img
                  src="./VoetsDesign2_files/60465ed13b07caf0905e4d0b_Arrow.svg"
                  loading="lazy"
                  alt=""
                  class="image-8"
                />
              </a>
            </div>
          </div>
        </div>
        <div id="About-Roles" class="sectionheader">
          <h2 class="sectiontitle">Previous&nbsp;roles</h2>
          <h4 class="description hidden">
            Over the last decade I've worked for several companies that helped
            me build, reflect and grow my experiences — while giving me the
            opportunity to work on some amazingly challenging projects (that may
            or may not have honoured me with some awards)
          </h4>
          <div class="divider"></div>
        </div>
        <div class="contentcontainer">
          <div class="card previous">
            <img
              src="./VoetsDesign2_files/60467980a85fd26f6c5b57a6_FB.svg"
              loading="lazy"
              alt=""
              class="cardimage logo"
            />
            <div class="cardcontentcontainer previous">
              <h4 class="cardtitle">Facebook</h4>
              <div class="cardcontent emp">2017 — 2020</div>
              <div class="cardcontent">
                Throughout my time on the Central Integrity team, I led projects
                that focussed improving account security, and increasing user
                accountability, while simultaneously kickstarting the
                authenticity product space.
              </div>
            </div>
          </div>
          <div class="card previous">
            <img
              src="./VoetsDesign2_files/60467980fe99858603c2ca21_RGA.svg"
              loading="lazy"
              alt=""
              class="cardimage logo"
            />
            <div class="cardcontentcontainer previous">
              <h4 class="cardtitle">R/GA</h4>
              <div class="cardcontent emp">2014 — 2017</div>
              <div class="cardcontent">
                At R/GA&nbsp;I worked on crafting interactive experiences and
                concepts for high-profile clients such as Turkcell, Nike and
                Samsung — while also helping aspiring startups with their first
                product experiences.
              </div>
            </div>
          </div>
          <div class="card previous">
            <img
              src="./VoetsDesign2_files/60467980501972a16bc0a91e_YIPYIP.svg"
              loading="lazy"
              alt=""
              class="cardimage logo"
            />
            <div class="cardcontentcontainer previous">
              <h4 class="cardtitle">YipYip</h4>
              <div class="cardcontent emp">2012 — 2014</div>
              <div class="cardcontent">
                At YipYip I helped startups, cultural institutions and early
                stage companies reimagine their digital presence
                —&nbsp;focussing on simple, scalable and user friendly product
                experiences.
              </div>
            </div>
          </div>
        </div>
        <div id="Clients" class="sectionheader">
          <h2 class="cardtitle">Client experience</h2>
          <h4 class="description">
            I’ve also had the pleasure to work with a wide variety of clients
            ranging from (small) startups to fortune 500 companies, such as:
          </h4>
        </div>
        <div class="contentcontainer logos">
          <h4
            id="w-node-_28e9e8f9-2c33-60e5-f2f5-9e6e049fe322-efa61fb3"
            class="cardtitle brands"
          >
            I’ve also had the pleasure to work with clients ranging from (small)
            startups to fortune 500 companies, such as:
          </h4>
          <img
            src="./VoetsDesign2_files/6046af2749a9f56b766fa4ea_Frame 2.png"
            loading="lazy"
            alt=""
            class="brandlogo"
          />
          <img
            src="./VoetsDesign2_files/6046af58529aef2dd2985ea9_Frame 2-1.png"
            loading="lazy"
            alt=""
            class="brandlogo"
          />
          <img
            src="./VoetsDesign2_files/6046adf0a1bf2701282398d5_Group 2-3.png"
            loading="lazy"
            alt=""
            class="brandlogo"
          />
          <img
            src="./VoetsDesign2_files/6046af580c6b80360f69d999_Frame 2-2.png"
            loading="lazy"
            alt=""
            class="brandlogo"
          />
          <img
            src="./VoetsDesign2_files/6046af5841077d3926cb3829_Frame 2-3.png"
            loading="lazy"
            alt=""
            class="brandlogo"
          />
          <div
            id="w-node-_80d61523-75ed-ddab-1d58-02843045be37-efa61fb3"
            class="cardcontent emp brands"
          >
            AND&nbsp;MANY&nbsp;MORE
          </div>
        </div>
        <div id="ContactMe" class="footercontainer">
          <h1 class="introtitle">Fancy a chat?</h1>
          <h3 class="subheader">
            I'd love to connect&nbsp;— let's have a cup of coffee, whether it’s
            for your exciting new project, an upcoming talk or just for fun.
            <br />
            Feel free to send me an
            <a
              href="mailto:rob@voetsdesign.com?subject=Let%27s%20Chat!"
              data-event-label="Email"
              data-event-category="Leads"
              class="email ga-event"
            >
              email
            </a>
            or
            <a
              href="https://www.linkedin.com/in/rob-voets/"
              data-event-label="Reach out"
              data-event-category="Leads"
              target="_blank"
              class="email ga-event"
            >
              reach out
            </a>
          </h3>
        </div>
        <img
          src="./VoetsDesign2_files/604652feaf6bb48ab6a4ae60_Swoosh_02.svg"
          loading="lazy"
          data-w-id="d2d2bf54-8cf8-2a3e-bb25-984c05f23728"
          alt=""
          class="bgleft"
        />
        <img
          src="./VoetsDesign2_files/60468723ec6c851adeefd91a_Swoosh_04.svg"
          loading="lazy"
          alt=""
          class="bgright"
        />
        <img
          src="./VoetsDesign2_files/6046866fc20b1343eb3d3410_Swoosh_03.svg"
          loading="lazy"
          alt=""
          class="bgbottom"
        />
        <div class="footer">
          <div class="navcontainer w-container">
            <a
              href="https://www.voetsdesign.com/#Intro"
              class="logocontainer w-inline-block"
            >
              <img
                src="./VoetsDesign2_files/60464f6e1c3ebfcfaa8d85c2_logo.svg"
                loading="lazy"
                alt=""
                class="logo"
              />
            </a>
          </div>
        </div>
      </div> 
    </div>*/
}
