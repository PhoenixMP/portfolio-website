
import React, { useState, useEffect, useContext } from "react";
import ProfileImage from "../images/profile.png"
import { Link as ScrollLink } from 'react-scroll';




const HomeCard = () => {



    return (
        <div className="card-container">
            <div className="card">
                <img src={ProfileImage} alt="Image" className="card-image" />
                <div className="card-text">

                    <p className="card-name">Phoenix Petterson</p>
                    <p className="card-title">Engineer</p>
                    <p className="card-link link">
                        <ScrollLink
                            to="portfolio"
                            smooth={true}
                            duration={500}>
                            <u>Portfolio</u>
                        </ScrollLink></p>
                </div>
            </div>
        </div>
    )

};
export default HomeCard;


