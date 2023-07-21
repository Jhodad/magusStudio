import React from "react";
import "./InfoCard.css";

function InfoCard(props) {
    return (

        <div className="infoCard-cardContainer">

            {/* <div fluid className="infoCard-imageContainer">
                <img className="infoCard-img" src={props.imageURL} alt="" />
            </div> */}

            <div className="infoCard-cardContent">
                <div className="infoCard-cardTitle">
                    <h2>{props.title}</h2>
                </div>

                <div className="infoCard-cardBody">
                    <p>{props.body}</p>
                </div>
            </div>

            <div className="infoCard-cardFooter">
                {/* <button className="infoCard-cardBtn">
                        Learn more
                    </button> */}
                <div fluid className="infoCard-imageContainer">
                    <svg className="circles">
                        <defs>
                            <radialGradient id="gradient" x2="0.35" y2="1">
                                <stop offset="0%" stop-color="var(--color-stop)" />
                                <stop offset="40%" stop-color="var(--color-stop)" />
                                <stop offset="100%" stop-color="var(--color-bot)" />
                            </radialGradient>
                            <pattern id={props.id} height="100%" width="100%"
                                patternContentUnits="objectBoundingBox">
                                <image href={props.image} preserveAspectRatio="none"
                                    width="1" height="1" />
                            </pattern>
                        </defs>
                        <circle className="circle-big" cx="50%" cy="50%" r="30%" fill={`url(#${props.id})`} />
                        <image className="infoCard-img" href={props.imageURL} alt="" />
                        <circle className="circle-small" cx="25%" cy="25%" r="5%" />
                        <circle className="circle-small2" cx="25%" cy="25%" r="5%" />
                    </svg>

                </div>
            </div>


        </div >

    )
}

export default InfoCard;
