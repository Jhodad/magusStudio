import React, { useState } from "react";
import { Container, Image, Button, Modal } from "react-bootstrap";
import "./ServCard.css";

function ServCard(params) {

    const [expanded, setExpanded] = useState(false)

    const setToggle = () => {
        setExpanded(!expanded)
    }

    return (
        <Container fluid className="servCard-cardContainer" >
            <Container fluid className="servCard-textHolder">
                <h4 className="servCard-linebreak">{JSON.parse(JSON.stringify(params.descShort))}</h4>
            </Container>
            <Container fluid className="servCard-imageContainer">
                <Image className="servCard-img" src={params.imageURL} alt="" />
            </Container>
            <Button className="servCard-btn" onClick={() => setToggle()}>Moreinfo </Button>

            {
            expanded &&
                <Container fluid className="servCard-FullDescBG">
                    <Container className="servCard-FullDesc servCard-textHolder">
                        <h4 className="servCard-linebreak">{JSON.parse(JSON.stringify(params.descFull))}</h4>
                        <Button className="servCard-btn" onClick={() => setToggle()}>Close</Button>
                    </Container>
                </Container>
            }

        </Container >
    );
}

export default ServCard;