import React, { useState, useEffect } from "react";
import 'react-awesome-slider/dist/styles.css';
import "./Home.css";
import InfoCard from "./objects/InfoCard.jsx"
import servicesInfo from "./docs/servicesInfo.json"
import magusHat from "../localAssets/MS_APNG_STATIC_1024_60.png"
import magusText from "../localAssets/Title.png"
import magusCard from "../localAssets/bgTest.png"
import magusGif from "../localAssets/cropped.png"
import reactLogo from "../localAssets/logo512.png"
import softDev from "../localAssets/softDev.png"
import cssImg from "../localAssets/css.png"
import cloud from "../localAssets/cloud.png"
import linkedIn from "../localAssets/linkedin.png"
import email from "../localAssets/email.png"
import bgFront from "../localAssets/bgFront.png"
import bgBack from "../localAssets/bgBack.png"
import { Parallax, Background } from 'react-parallax';

function Home() {

  const [isMobile, setIsMobile] = useState()
  const [windowWidth, setWindowWidth] = useState(window.innerWidth)
  const [toggle, setToggle] = useState(false)
  const [contact, setContact] = useState(false)

  // Toggle contact button
  function toggleContact() {
    setContact(!contact);
  }

  // Check if mobile
  function reportWindowSize() {
    setWindowWidth(window.innerWidth)
    if (window.innerWidth < 768) {
      console.log(window.innerHeight, window.innerWidth)
      setIsMobile(true)
    } else {
      setIsMobile(false)
    }
  }

  useEffect(() => {
    if (!isMobile) {
      setToggle(false)
    }
    reportWindowSize();
    // Trigger this function on resize
    window.addEventListener('resize', reportWindowSize)
    //  Cleanup for componentWillUnmount
    return () => window.removeEventListener('resize', reportWindowSize)
  }, [windowWidth])


  return (

    <div>

      {/* If NOT COLLAPSED */}
      {
        !isMobile && <div></div>
      }

      {
        isMobile && <div></div>
      }


      <div className="page-header">
        <img

          className="page-header-img"
          src={magusGif}
          alt="HEADER"
        />
      </div>


      <div className="page-holder-modules">
        <div className="welcome">
          <h1>Welcome to Magus Studio</h1>
          <h3><br></br>
            We offer a vast assortment of computer services ranging from PC maintenance to custom websites and software.
          </h3>
        </div>
      </div>


      {/* <div className="body-splitter-lg" /> */}

      <Parallax
        renderLayer={percentage => (
          <div
            style={{
              background: `rgba(10, 10, 10, ${0.8 - percentage})`,
              filter: "blur(10rem)",               
              left: '50%',
              top: '50%',
              width: "100vw",
              height: "60vh"
            }}
          />
        )}
      >
      </Parallax>


      <div className="page-holder-full">

        <div className="grid-container">
          <div className="grid-row">
            <InfoCard
              title="Software Development"
              image={reactLogo}
              // `${props.image}?${new Date().getTime()}`
              body="Our developers build rich web and mobile products in collaboration with technical and non-technical teams. We work in agile teams & use coding best practices."
              id="1"
            />
            <InfoCard
              title="Software Development"
              image={softDev}
              body="Our developers build rich web and mobile products in collaboration with technical and non-technical teams. We work in agile teams & use coding best practices."
              id="2"
            />
            <InfoCard
              title="Software Development"
              image={cloud}
              body="Our in collaboration with technical and non-technical teams. We work in agile  in collaboration with technical and non-technical teams. We work in agile in collaboration with technical and non-technical teams. We work in agile in collaboration with technical and non-technical teams. We work in agile in collaboration with technical and non-technical teams. We work in agile in collaboration with technical and non-technical teams. We work in agile in collaboration with technical and non-technical teams. We work in agile in collaboration with technical and non-technical teams. We work in agile in collaboration with technical and non-technical teams. We work in agile teams & use coding best practices."
              id="5"
            />
            <InfoCard
              title="Software Development"
              image={cssImg}
              body="Our developers build rich web and mobile products in collaboration with technical and non-technical teams. We work in agile teams & use coding best practices."
              id="3"
            />
            <InfoCard
              title="Software Development"
              image={reactLogo}
              body="Our developers build rich web and mobile products in collaboration with technical and non-technical teams. We work in agile teams & use coding best practices."
              id="4"
            />
            <InfoCard
              title="Software Development"
              image={cssImg}
              body="Our in collaboration with technical and non-technical teams. We work in agile  in collaboration with technical and non-technical teams. We work in agile in collaboration with technical and non-technical teams. We work in agile in collaboration with technical and non-technical teams. We work in agile in collaboration with technical and non-technical teams. We work in agile in collaboration with technical and non-technical teams. We work in agile in collaboration with technical and non-technical teams. We work in agile in collaboration with technical and non-technical teams. We work in agile in collaboration with technical and non-technical teams. We work in agile teams & use coding best practices."
              id="5"
            />


          </div>

        </div>

      </div>


      {/* <div className="body-splitter-sm" />
      <div className="body-splitter-lg" /> */}

  <Parallax
    renderLayer={percentage => (
      <div
        style={{
          background: `rgba(10, 10, 10, ${percentage * .7})`,
          left: '50%',
          top: '50%',
          width: "100vw",
          height: "60vh"
        }}
      />
    )}
  >
  </Parallax>

  {/* ======================== */ }
  {/*          FOOTER          */ }
  {/* ======================== */ }
  <div className="page-footer">

    <div className="footer-container">
      <div className="grid-row-space">
        <div className="footer-card-col">
          <img className="logo" src={magusHat} />
          <img className="logo-text" src={magusText} />
          <div className="logo-desc">
            <h3>Custom Web, Software, Mobile Design & Development</h3>
          </div>
        </div>

        <div className="footer-card-col">
          <h1>Our Services</h1>
          <p>Website Development</p>
          <p>Cusutom Software Development</p>
          <p>Mobile Apps Development</p>
          <p>IOT Solutions</p>
          <p>Interactive Scenes & Games</p>
        </div>

        <div className="footer-card-col">
          <div className="footer-card-row">
            <div>
              <h1>Contact Us</h1>
            </div>
          </div>

          <div className="footer-card-row">
            <a className="social-link" href="https://www.linkedin.com/in/jhogom/" target="_blank" rel="noreferrer">
              <img className="social-left" src={linkedIn} />
            </a>
            <img className="social-right" src={email} onClick={() => toggleContact()} />

            {
              contact &&
              <div>
                <div className="modal-contact-bg" onClick={() => toggleContact()}>
                </div>

                <div className="modal-contact grid-col">

                  <h2>Tell us about what your project</h2>

                  <div className="grid-row-space">
                    <h3 className="modal-label">Name</h3>
                    <input className="modal-input" type="text" />
                  </div>

                  <div className="grid-row-space">
                    <h3 className="modal-label">Email</h3>
                    <input className="modal-input" type="text" />
                  </div>

                  <div className="grid-row-space">
                    <h3 className="modal-label">Phone</h3>
                    <input className="modal-input" type="text" />
                  </div>

                  <div className="grid-row-space">
                    <h3 className="modal-label">Company</h3>
                    <input className="modal-input" type="text" />
                  </div>

                  <div className="grid-row-space">
                    <h3 className="modal-label">Subject</h3>
                    <input className="modal-input" type="text" />
                  </div>

                  <div className="grid-row-space">
                    <h3 className="modal-label">Message</h3>
                    <textarea className="modal-input-lg" />
                  </div>


                  <div className="modal-row modal-control">
                    <button className="modal-buttons" onClick={() => toggleContact()}> Cancel</button>
                    <button className="modal-buttons" onClick={() => console.log("test")}>Send</button>
                  </div>
                </div>

              </div>
            }
          </div>
        </div>


        <div className="footer-card-col"></div>


      </div>
    </div>

    <div className="signature-bar">
      <div className="bg">
      </div>
      <div className="signature-left">
        <h4 className="signature-text">Privacy Policy</h4>
        <h4 className="signature-text">Cookies Policy</h4>
      </div>
      <div className="signature-right">
        <h4 className="signature-text">
          Magus Studio. CDMX, Mexico 2023</h4>
      </div>
    </div>

  </div>


    </div >






  );
}

export default Home;
