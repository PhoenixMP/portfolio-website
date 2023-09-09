
import React, { useState, useEffect, useContext } from "react";
import "./About.css"
import PageContext from "../routes-nav/PageContext";




const About = () => {
    const { aboutRef } = useContext(PageContext);



    return (
        <div className="about-page" >

            <div id="about" ref={aboutRef}>  </div>
            <div id="about-content">
                <div className="about-text">about</div>

            </div>

        </div>
    )

};
export default About;


