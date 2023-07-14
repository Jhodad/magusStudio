import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Carousel, div, Row, Col, Image, Button } from "react-bootstrap";
import { Parallax } from "react-parallax";
import AwesomeSlider from 'react-awesome-slider';
import 'react-awesome-slider/dist/styles.css';
import "./Home.css";
import InfoCard from "./objects/InfoCard.jsx"
import ServCard from "./objects/ServCard.jsx";
import servicesInfo from "./docs/servicesInfo.json"

import img_header from "../localAssets/YoutubeBanner.png";
import img_fb from "../localAssets/nc.jpg";
import img_logo from "../localAssets/logo512.png";
import img_test from "../localAssets/Title Art Blue Hues Damaged Background.png";
import magusHat from "../localAssets/MS_APNG_STATIC_1024_60.png"
import magusCard from "../localAssets/bgTest.png"
import magusGif from "../localAssets/Cropped.gif"
import reactLogo from "../localAssets/logo512.png"


function Home() {

  const [isMobile, setIsMobile] = useState()
  const [windowWidth, setWindowWidth] = useState(window.innerWidth)
  const [toggle, setToggle] = useState(false)
  const [isClosing, setIsClosing] = useState()
  const [data, setData] = useState(servicesInfo.services)
  const [currentService, setCurrentService] = useState()

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
        <Image

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


      <div className="body-splitter-lg" />


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
              image={magusCard}
              body="Our developers build rich web and mobile products in collaboration with technical and non-technical teams. We work in agile teams & use coding best practices."
              id="2"
            />
            <InfoCard
              title="Software Development"
              image={magusCard}
              body="Our developers build rich web and mobile products in collaboration with technical and non-technical teams. We work in agile teams & use coding best practices."
              id="3"
            />
            <InfoCard
              title="Software Development"
              image={magusCard}
              body="Our developers build rich web and mobile products in collaboration with technical and non-technical teams. We work in agile teams & use coding best practices."
              id="4"
            />
            <InfoCard
              title="Software Development"
              image={magusCard}
              body="Our developers build rich web and mobile products in collaboration with technical and non-technical teams. We work in agile teams & use coding best practices."
              id="5"
            />

          </div>

        </div>

      </div>


      <div className="body-splitter-sm" />






      <div className="body-splitter-lg" />

      {/* ======================== */}
      {/*          FOOTER          */}
      {/* ======================== */}
      {/* <div className="page-footer">


        <Row className="show-grid text-center centered-flex">
          <div className="btn-secondary-flex">
            <Link to="/contact">
              <Button className="btn-secondary">Contact</Button>
            </Link>
          </div>
          <h5>Mexico City</h5>
        </Row>
      </div> */}

      {/* <div

        className="text-center centered-flex contact-div"
      >
        <div className="social-media-div">
          <h1></h1>
          <Row className="show-grid text-center">
            <Col xs={12} sm={4}>
              <Image src={img_fb} circle className="social-media-logo" />
            </Col>

            <Col xs={12} sm={4}>
              <Image src={magusHat} circle className="social-media-logo" />
            </Col>

            <Col xs={12} sm={4}>
              <Image src={img_logo} circle className="social-media-logo" />
            </Col>
          </Row>
        </div>

      </div> */}

    </div>
  );
}

export default Home;
