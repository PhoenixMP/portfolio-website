
import React, { useState, useEffect, useContext } from "react";
import { Link as ScrollLink } from 'react-scroll';
import ProfileImage from "../images/profile.png"





const HomeCard = () => {



    return (
        <div className="card-container">
            <div className="card">
                <img src={ProfileImage} alt="Image" className="card-image" />
                <div className="card-text">

                    <p className="card-name"><b>Phoenix Petterson</b></p>
                    <p className="card-title">Developer & Engineer</p>
                </div>
            </div>

        </div>
    )

};
export default HomeCard;


