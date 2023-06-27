import React, { useState, useEffect } from "react";
import { Navbar, Nav } from "react-bootstrap";
import "./Navbar.css";
import title from "../localAssets/Title.png";


// NAVBAR
function CustomNavbar() {

  const [isMobile, setIsMobile] = useState()
  const [windowWidth, setWindowWidth] = useState(window.innerWidth)
  const [toggle, setToggle] = useState(false)

  // Toggle drawer button
  function toggleDrawer() {
    setToggle(!toggle);
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
  }, [/*windowWidth*/])

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
        <div className="drawer-v2-bg" onClick={() => toggleDrawer()}>
          <div className="drawer-v2">

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

            </Nav>
            {/* <span fluid className="rgb-Line drawer-splitter" /> */}
            <button onClick={() => toggleDrawer()}>TOGGLE</button>

          </div >
        </div >

        : <button onClick={() => toggleDrawer()}>TOGGLE</button>

      }

    </>


  );
}

export default CustomNavbar;



