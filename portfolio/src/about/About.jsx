
import React, { useState, useEffect, useContext } from "react";
import "./About.css"
import PageContext from "../routes-nav/PageContext";




const About = () => {
    const { aboutRef } = useContext(PageContext);



    return (
        <div className="about-page" >

            <div id="about" ref={aboutRef}>  </div>
            <div id="about-content">
                <div className="about-text">I am a software engineer actively seeking opportunities to apply my technical expertise. Recently, I completed Springboard's software engineering program, dedicating over 800 hours to coursework in HTML, CSS, JavaScript, Python, and more. I developed two innovative full-stack projects—a complex game pushing technological boundaries and a musical melody jamming application for creative expression. My previous background as a mechanical engineer at Hargis Engineers has equipped me with strong problem-solving abilities developed over five years. I'm determined to broaden my proficiency and integrate my STEM foundation to tackle intricate challenges.
                    <p>In addition to my technical prowess, I am a community-oriented leader, having established and managed a vibrant meetup group focused on empowering women. My dedication to meaningful engagement extends to my role as the founding communications officer for the Engineers Without Borders chapter during my tenure at Washington State University.</p><p>With a solid foundation in software engineering and a passion for addressing real-world challenges, I am ready to contribute my unique blend of technical expertise and strong interpersonal skills to impactful projects.</p>
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


