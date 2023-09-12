
import React, { useState, useEffect, useContext } from "react";
import "./About.css"
import PageContext from "../routes-nav/PageContext";




const About = () => {
    const { aboutRef } = useContext(PageContext);



    return (
        <div className="about-page" >

            <div id="about" ref={aboutRef}>  </div>
            <div id="about-content">
                <div className="about-text">I am a passionate and versatile individual with a deep appreciation for effective communication in all its forms. Whether it's fostering technical education, building interpersonal connections, or expressing creativity through activities like dance and music, I thrive on engaging with diverse interests. My journey began as a mechanical engineer at Hargis Engineers, an HVAC consulting firm, where I spent five years honing my problem-solving skills. I am proud to have recently graduated from Springboard's software engineering program, where I acquired extensive knowledge in HTML, CSS, JavaScript, Python, and more, completing over 800 hours of software engineering curriculum. I'm committed to expanding my skill set and integrating my STEM background to tackle complex challenges.
                    <p>Beyond the technical realm, I'm a community-driven leader, founding and organizing a thriving meetup group for women seeking enriching experiences. During my time at Washington State University, I also played a crucial role as the founding communications officer for the Engineers Without Borders chapter. </p> <p>With my strong foundation in software engineering and a passion for solving real-world problems, I am excited to embark on a career as a software engineer, ready to contribute my unique blend of technical and interpersonal skills to meaningful projects.</p>

                </div>

                <div className="about-skills">
                    <div className="about-resume-container"><a className="about-resume" style={{ textDecoration: 'none', color: "rgb(187, 187, 187)" }} href='http://phoenixpetterson.com/phoenixpetterson-resume.pdf' target="_blank" download='/phoenixpetterson-resume.pdf'> Download Resume
                    </a> </div>
                    <h3>My Skills:</h3><ul className="about-skills-list">
                        <li className="html skill">HTML</li>
                        <li className="css skill">CSS</li>
                        <li className="python skill">Python</li>
                        <li className="flask skill">Flask</li>
                        <li className="js skill">Javascript</li>
                        <li className="node skill">Node</li>
                        <li className="express skill">Express</li>
                        <li className="react skill">React</li>
                        <li className="postgresql skill">PostgreSQL</li>
                    </ul>
                </div>
                <footer>
                    <p>&copy; 2023 Phoenix Petterson. All rights reserved.</p>
                </footer>
            </div>


        </div >
    )

};
export default About;


