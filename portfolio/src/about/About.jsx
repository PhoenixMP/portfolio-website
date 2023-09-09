
import React, { useState, useEffect, useContext } from "react";
import "./About.css"
import PageContext from "../routes-nav/PageContext";




const About = () => {
    const { aboutRef } = useContext(PageContext);



    return (
        <div className="about-page" >

            <div id="about" ref={aboutRef}>  </div>
            <div id="about-content">
                <div className="about-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.  </div>


            </div>

        </div >
    )

};
export default About;


