import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Carousel, Container, Row, Col, Image, Button } from "react-bootstrap";
import { Parallax } from "react-parallax";
import AwesomeSlider from 'react-awesome-slider';
import 'react-awesome-slider/dist/styles.css';
import "./Home.css";
import InfoCard from "./objects/InfoCard.jsx";
import ServCard from "./objects/ServCard.jsx";
import servicesInfo from "./docs/servicesInfo.json"

import img_header from "../localAssets/YoutubeBanner.png";
import img_fb from "../localAssets/nc.jpg";
import img_logo from "../localAssets/logo512.png";
import img_test from "../localAssets/Title Art Blue Hues Damaged Background.png";
import magusHat from "../localAssets/MS_APNG_STATIC_1024_60.png"
import magusCard from "../localAssets/bgTest.png"
import magusGif from "../localAssets/Cropped.gif"


function Home() {

  //Do stuff on load
  useEffect(() => {
    selectInfoText('')
  }, [])

  const [data, setData] = useState(servicesInfo.services);
  const [currentService, setCurrentService] = useState();

  const [verified, setVerified] = useState(false)
  const setToggle = () => {
    setVerified(!verified)
  }

  // One way to get data on demand into an array
  /*
  const data = [];
    function getData() {
      servicesInfo.services.map(({ id, serviceName, descFull, descShort }) => {
        data.push({ id, serviceName, descFull, descShort });
      })
      console.log(data)
    }
  */

  function selectInfoText(serv) {
    switch (serv) {
      case 'websites':
        return setCurrentService(<ServCard fluid descShort={data[0].descShort} descFull={data[0].descFull} />)

      case 'serv1':
        return setCurrentService(<ServCard fluid descShort={data[1].descShort} descFull={data[1].descFull} />)

      case 'serv2':
        return setCurrentService(<ServCard fluid descShort={data[2].descShort} descFull={data[2].descFull} />)

      default:
        return setCurrentService(<ServCard fluid descShort={data[0].descShort} descFull={data[0].descFull} />)
    }
  }

  return (

    <div>
      <Container fluid className="page-header">
        <Image
          fluid
          className="page-header-img"
          src={magusGif}
          alt="HEADER"
        />
      </Container>


      <Container fluid className="page-holder-modules">
        <Container fluid className="welcome-body welcome-text welcome">
          <h1>Welcome to Magus Studio</h1>
          <h3><br></br>
            We offer a vast assortment of computer services ranging from PC maintenance to custom websites and software.
          </h3>
        </Container>
      </Container>


      <Container className="body-splitter-sm">  </Container>


      <Container fluid className="page-holder-full">
        <Container fluid className="text-centered">

        </Container>

        <Container fluid className="full-1">

          <svg />

          <Container fluid className="gridHolder">

            <Col fluid>
              <Row fluid className="row-home">
                <Container fluid className="services-left">
                  <Container fluid className="services-infoHolder">
                    {currentService}

                  </Container>
                </Container>

                <Container className="services-right">
                  <Button className="services-btn" onClick={() => selectInfoText('websites')}> <h1>Custom Websites</h1> </Button>
                  <Button className="services-btn" onClick={() => selectInfoText('serv1')}> <h1>Serv1</h1> </Button>
                  <Button className="services-btn" onClick={() => selectInfoText('serv2')}> <h1>Serv2</h1> </Button>
                  <Button className="services-btn" onClick={() => selectInfoText('serv3')}> <h1>Serv2</h1> </Button>
                  <Button className="services-btn"> <h1>Custom Websites</h1> </Button>
                  <Button className="services-btn"> <h1>Custom Websites</h1> </Button>
                  <Button className="services-btn"> <h1>Custom Websites</h1> </Button>
                  <Button className="services-btn"> <h1>Custom Websites</h1> </Button>
                  <Button className="services-btn"> <h1>Custom Websites</h1> </Button>
                  <Button className="services-btn"> <h1>Custom Websites</h1> </Button>
                </Container>
              </Row>
            </Col>

          </Container>
        </Container>

        <Container fluid className="full-2">
          <Container fluid className="gridHolder">

            <Col fluid>
              <Row fluid className="row-home">
                <InfoCard title="Custom Websites" imageURL={img_logo} body="Small description of what we offer in custom websites Small description of what we offer in custom websites Small description of what we offer in custom websites Small description of what we offer in custom websites Small description of what we offer in custom websites Small description of what we offer in custom websites Small description of what we offer in custom websites" />
                <InfoCard title="Custom Websites" imageURL={img_logo} body="Small description of what we offer in custom websites Small description of what we offer in custom websites Small description of what we offer in custom websites Small description of what we offer in custom websites Small description of what we offer in custom websites Small description of what we offer in custom websites Small description of what we offer in custom websites" />
                <InfoCard title="Custom Websites" imageURL={img_logo} body="Small description of what we aaaaaaaaaaa aaaaaaaaaaaaa aaaaaaaaaaa aaaaaaaaaaaa aaaaaaaaaa aaaaaaaaa aaaaaaaaa aaaaaaaaa aaaaaaaaa aaaaaaaaa aaaaaaaaa aaaaaaaaa aaaaaaaaa aaaaaaaaa aaaaaaaaa aaaaaaaaa aaaaaaaaa aaaaaaaaa aaaaaaaaa aaaaaaaaa aaaaaaaaa aaaaaaaaa aaaaaaaaa aaaaaaaaa aaaaaaaaa aaaaaaaaa aaaaaaaaa aaaaaaaaa aaaaaaaaa aaaaaaaaa aaaaaaaaa aaaaaaaaa aaaaaaaaa aaaaaaaaa aaaaaaaaa aaaaaaaaa aaaaaaaaa aaaaaaaaa aaaaaaaaa aaaaaaaaaaaaaaaaaaaaaa aaaaaaaaaaaaaaaaaaa aaaaaaaaaaaaaaaaaaaaaaaaa aaaaaaaaaaa aaaaaaaaaaa aaaaaaaaaaa aaaaaaaaaoffer in custom websites Small description of what we offer in custom websites Small description of what we offer in custom websites Small description of what we offer in custom websites Small description of what we offer in custtes" />
                <InfoCard title="Custom Websites" imageURL={img_logo} body="Small description of what we offer in custom websites Small description of what we offer in custom websites Small description of what we offer in custom websites Small description of what we offer in custom websites Small description of what we offer in custom websites Small description of what we offer in custom websites Small description of what we offer in custom websites" />
                <InfoCard title="Custom Websites" imageURL={img_logo} body="Small description of what we offer in custom websites Small description of what we offer in custom websites Small description of what we offer in custom websites Small description of what we offer in custom websites Small description of what we offer in custtes" />
                <InfoCard title="Custom Websites" imageURL={img_logo} body="Small description of what we offer in custom websites Small description of what we offer in custom websites Small description of what we offer in custom websites Small description of what we offer in custom websites Small description of what we offer in custom websites Small description of what we offer in custom websites Small description of what we offer in custom websites" />
                <InfoCard title="Custom Websites" imageURL={img_logo} body="Small description of what we offer in custom websites Small description of what we offer in custom websites Small description of what we offer in custom websites Small description of what we offer in custom websites Small description of what we offer in custtes" />
                <InfoCard title="Custom Websites" imageURL={img_logo} body="Small description of what we offer in custom websites Small description of what we offer in custom websites Small description of what we offer in custom websites Small description of what we offer in custom websites Small description of what we offer in custom websites Small description of what we offer in custom websites Small description of what we offer in custom websites" />
                <InfoCard title="Custom Websites" imageURL={img_logo} body="Small description of what we offer in custom websites Small description of what we offer in custom websites Small description of what we offer in custom websites Small description of what we offer in custom websites Small description of what we offer in custtes" />
                <InfoCard title="Custom Websites" imageURL={img_logo} body="Small description of what we offer in custom websites Small description of what we offer in custom websites Small description of what we offer in custom websites Small description of what we offer in custom websites Small description of what we offer in custom websites Small description of what we offer in custom websites Small description of what we offer in custom websies" />
              </Row>
            </Col>

            <Button>
              All services
            </Button>

          </Container>
        </Container>


      </Container>

      {/* ======================== */}
      {/*     CLIENTS CAROUSEL     */}
      {/* ======================== */}
      <Container fluid className="page-holder-full">


        <AwesomeSlider>
          <div data-src="/path/to/image-0.png" />
          <div data-src="/path/to/image-1.png" />
          <div data-src="/path/to/image-2.jpg" />
        </AwesomeSlider>



        <Container fluid className="full-1">
          <Container fluid className="gridHolder">

            <Col fluid>
              <Row fluid className="row-home">


                <Container className="carousel-left">
                  <Container fluid className="services-infoHolder">
                    <h1 className="centered-text">aspodalksdpaos iudpaois dpoai sdpoipoasidp aispod apsodi aposid paoisd </h1>
                  </Container>



                </Container>

                <Container fluid className="carousel-right">
                  <Container className="carousel-custom-r">
                    <Carousel>

                      <Carousel.Item className="carousel-item">
                        <Image
                          className="carousel-img"
                          src={img_header}
                          alt="FIRST slide"
                        />
                        <Carousel.Caption>
                          <h3>stuff for website</h3>
                          <p>
                            Nulla vitae elit libero, a pharetra augue mollis interdum.
                          </p>
                        </Carousel.Caption>
                      </Carousel.Item>

                      <Carousel.Item>
                        <Image
                          className="carousel-img"
                          src={img_header}
                          alt="SECOND slide"
                        />
                        <Carousel.Caption>
                          <h3>stuff for digital design</h3>
                          <p>
                            Nulla vitae elit libero, a pharetra augue mollis interdum.
                          </p>
                        </Carousel.Caption>
                      </Carousel.Item>

                      <Carousel.Item>
                        <Image
                          className="carousel-img"
                          src={img_logo}
                          alt="Third slide"
                        />
                        <Carousel.Caption>
                          <h3>sstuff for noise collision</h3>
                          <p>
                            Nulla vitae elit libero, a pharetra augue mollis interdum.
                          </p>
                        </Carousel.Caption>
                      </Carousel.Item>

                    </Carousel>
                  </Container>

                </Container>

              </Row>
            </Col>

          </Container>
        </Container>



      </Container>


      <Container fluid className="body-splitter-sm">  </Container>

      <Container fluid className="page-holder-full">

      </Container>



      <Parallax
        blur={1}
        strength={-800}
        fluid
        bgImage={img_test}
        className="body-splitter-parallax centered-flex centered-text"
      ></Parallax>

      {/* SECOND BANNER */}
      {/*
        <Container fluid className="page-holder-full">
          <Row className="show-grid text-center">
            <Col xs={12} sm={4} className="person-wrapper">
              <Image src={img_padoru1} circle className="profile-pic" />
              <h3>Padoru!</h3>
              <p>Text that goes blah blah!</p>
            </Col>

            <Col xs={12} sm={4} className="person-wrapper">
              <Image src={img_padoru2} circle className="profile-pic" />
              <h3>Padoru!</h3>
              <p>Text that goes blah blah!</p>
            </Col>

            <Col xs={12} sm={4} className="person-wrapper">
              <Image src={img_padoru3} circle className="profile-pic" />
              <h3>Padoru!</h3>
              <p>Text that goes blah blah!</p>
            </Col>
          </Row>
        </Container>
*/}

      <Container fluid className="body-splitter-lg"></Container>



      <Container fluid className="body-splitter-lg"></Container>

      {/* ======================== */}
      {/*          FOOTER          */}
      {/* ======================== */}
      <Container fluid className="page-footer">


        <Row className="show-grid text-center centered-flex">
          <div className="btn-secondary-flex">
            <Link to="/contact">
              <Button className="btn-secondary">Contact</Button>
            </Link>
          </div>
          <h5>Mexico City</h5>
        </Row>
      </Container>

      <Container
        fluid
        className="text-center centered-flex contact-container"
      >
        <Container className="social-media-container">
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
        </Container>

      </Container>
    </div>
  );
}

export default Home;
