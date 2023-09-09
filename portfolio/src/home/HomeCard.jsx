
import React, { useState, useEffect, useContext } from "react";
import { Link as ScrollLink } from 'react-scroll';
import ProfileImage from "../images/profile.png"





const HomeCard = ({ homeRef }) => {



    return (
        <div className="card-container" >
            <div className="card" ref={homeRef}>
                <img src={ProfileImage} alt="Image" className="card-image" />
                <div className="card-text">

                    <p className="card-name"><b>Phoenix Petterson</b><span id="home-line"> | </span>
                        <span className="card-title">  Developer & Engineer </span></p>
                </div>

            </div>
        </div>
    )

};
export default HomeCard;


