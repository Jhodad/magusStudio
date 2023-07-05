import React, { useState, useEffect } from "react";
import { Navbar, Nav } from "react-bootstrap";
import "./Navbar.css";
import title from "../localAssets/Title.png";
import navbarButton from "../localAssets/navigation.png"
import { timeout } from "./objects/Tools";


// NAVBAR
function CustomNavbar() {

  const [isMobile, setIsMobile] = useState()
  const [windowWidth, setWindowWidth] = useState(window.innerWidth)
  const [toggle, setToggle] = useState(false)
  const [isClosing, setIsClosing] = useState()

  // Toggle drawer button
  function toggleDrawer() {
    setToggle(true);
  }

  async function closeDrawer() {
    setIsClosing(true)
    console.log("i clicked " + isClosing)
    await timeout(250); //for 1 sec delay  
    setIsClosing(false)
    setToggle(false)
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
    <>
      {/* If NOT COLLAPSED */}
      {
        !isMobile &&
        <div className="navContainer">
          <Navbar className="navBar" >
            <Navbar.Collapse className="navbar-notCollapsed" fluid>
              <Nav fluid className="centered-flex">
                <Nav.Link className="navLink-Container " href="/about">
                  <p className="text-style">About</p>
                </Nav.Link>

                <Nav.Link className="navLink-Container" href="/samples">
                  <p className="text-style">Samples</p>
                </Nav.Link>

                <Nav.Link className="home" href="/">
                  <img src={title} className="brand-logo" />
                </Nav.Link>

                <Nav.Link className="navLink-Container" href="/offers">
                  <p className="text-style">Offers</p>
                </Nav.Link>

                <Nav.Link className="navLink-Container" href="/contact">
                  <p className="text-style">Contact</p>
                </Nav.Link>
              </Nav>
              <span fluid className="rgb-Line" />
            </Navbar.Collapse>
          </Navbar>

        </div >
      }

      {/* If COLLAPSED */}
      {isMobile && toggle
        ?
        <div>
          <div className="drawer-v2-bg" onClick={() => closeDrawer()} />
          <div className="drawer-col">
            <div className={!isClosing ? "drawer-v2 drawerIn" : "drawer-v2 drawerOut"}>

              {/* Drawer Header */}
              <div
                className="drawer-header">
                <Nav.Link className="drawer-title" href="/">
                  <img src={title} />
                </Nav.Link>
                <span fluid className="rgb-Line drawer-splitter" />

                {/* Drawer Body */}
              </div>
              <Nav className="drawer-body">

                <Nav.Link className="drawer-rows" href="/about">
                  <h1 className="drawer-text-style">About</h1>
                </Nav.Link>

                <Nav.Link className="drawer-rows" href="/samples">
                  <h1 className="drawer-text-style">Samples</h1>
                </Nav.Link>

                <Nav.Link className="drawer-rows" href="/offers">
                  <h1 className="drawer-text-style">Offers</h1>
                </Nav.Link>

                <Nav.Link className="drawer-rows" href="/contact">
                  <h1 className="drawer-text-style">Contact</h1>
                </Nav.Link>
                {/* <button onClick={() => toggleDrawer()}>TOGGLE</button> */}
              </Nav>
              {/* <span fluid className="rgb-Line drawer-splitter" /> */}
            </div >
            <div
              className={!isClosing ? "drawer-toggle drawerIn" : "drawer-toggle drawerOut"}
              onClick={() => closeDrawer()} >
              <img
                src={navbarButton}
                className="drawer-toggle-icon"
              />
            </div>
          </div>
        </div >

        : isMobile && !toggle
          ? <img
            src={navbarButton}
            className={"drawer-toggle-sticky"}
            onClick={() => toggleDrawer()} />
          : <div />

      }

    </>


  );
}

export default CustomNavbar;



