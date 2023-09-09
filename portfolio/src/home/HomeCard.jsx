
import React, { useState, useEffect, useContext } from "react";
import { Link as ScrollLink } from 'react-scroll';
import ProfileImage from "../images/profile.png"
import githubIcon from "../images/github-logo.png"
import linkedinIcon from "../images/linkedin-logo.png"
import emailIcon from "../images/email.png"




const HomeCard = ({ homeRef }) => {



    return (
        <div className="card-container" >
            <div className="card" ref={homeRef}>
                <img src={ProfileImage} alt="Image" className="card-image" />
                <div className="card-text-container">
                    <div className="card-text-1">
                        <div className="card-text-1-content">
                            <p className="card-name"><b>Phoenix Petterson</b>  </p>
                            <p className="card-title">  Developer & Engineer </p>
                        </div>
                    </div>
                    <div className="card-text-2">
                        <div className="card-contact">    <img src={linkedinIcon} /><a href="https://www.linkedin.com/in/phoenixpetterson/" className="card-icon" target="_blank">
                            linkedin.com/in/phoenixpetterson
                        </a>
                        </div>
                        <div className="card-contact">  <img src={githubIcon} />
                            <a href="https:/github.com/PhoenixMP" className="card-icon" target="_blank">
                                github.com/PhoenixMP
                            </a>
                        </div>

                        <div className="card-contact">       <img src={emailIcon} />  <a href="mailto:phoenix.petterson@gmail.com" alt="Email" className="card-icon" >
                            phoenix.petterson@gmail.com
                        </a>
                        </div>

                    </div>
                </div>
            </div>

        </div >

    )

};
export default HomeCard;


