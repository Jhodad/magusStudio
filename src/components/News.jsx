import React, { Component } from "react";
import "./News.css";
import { Container, Row, Col, Image } from "react-bootstrap";

export default class News extends Component {
  render() {
    return (
      <div>
        <Image src="assets/nc2.png" className="header-image" />
        <Container>
          <h2> News </h2>
          <Row>
            <Col xs={12} sm={8} className="main-section">
              <p> Text </p>
              <p> Text </p>
              <p> Text </p>
              <p> Text </p>
              <p> Text </p>
            </Col>

            <Col xs={12} sm={4} className="sidebar-section">
              <Image src="assets/nc.jpg" />
              <p> Text </p>
              <p> Text </p>
              <p> Text </p>
              <p> Text </p>
              <p> Text </p>
            </Col>
          </Row>
        </Container>
      </div>
    );
  }
}
