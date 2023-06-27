import React, { Component } from "react";
import { Container, Image, Button, Row, Col } from "react-bootstrap";
import "./InfoCard.css";

export default class InfoCard extends Component {
    render() {
        return (

            <Container className="infoCard-cardContainer">

                <Container fluid className="infoCard-imageContainer">
                    <Image className="infoCard-img" src={this.props.imageURL} alt="" />
                </Container>

                <Container className="infoCard-cardContent">
                    <Container className="infoCard-cardTitle">
                        <h2>{this.props.title}</h2>
                    </Container>

                    <Container className="infoCard-cardBody">
                        <p>{this.props.body}</p>
                    </Container>
                </Container>

                <Container className="infoCard-cardFooter">
                    <Button className="infoCard-cardBtn">
                        Learn more
                    </Button>
                </Container>


            </Container >

        )
    }
}
