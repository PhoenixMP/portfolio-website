
import React from "react";
import Laptop from "./Laptop.jsx"
import ProjectImage1 from "../images/noteworthy.png"
import ProjectImage2 from "../images/melodic.png"


const Projects = () => {



    return (



        <div className="projects" >

            <div className=" project1-container" >
                <div className=" project-border1" >
                    <div className=" project-content" >
                        <div className="project-top-container">
                            <div className="project-top-content">
                                <div className="project-title">NoteWorthy</div>
                                <div className="project-stack">React ~ Express</div>
                                <a className="project-link" href="https://github.com/PhoenixMP/Capstone-2#readme" target="_blank">
                                    <Laptop image={ProjectImage1} name="screen1" />
                                </a>
                            </div>
                        </div>
                        <div className="project-description-container">
                            <div className="project-description">NoteWorthy is a web-based desktop game inspired by Guitar Hero, reimagined with a virtual piano in place of the guitar. Players must hit corresponding keyboard keys as musical notes descend, earning scores based on the accuracy of their keypresses. The game offers secure user login for score-saving and competition on leaderboards. NoteWorthy interfaces with a custom API that accesses a database of currated note data for 38 songs.
                                <p>Developed with React, Express.js, and Node.js.</p>
                                <p> <a className="project-link" href="https://github.com/PhoenixMP/Capstone-2#readme" target="_blank" style={{ color: "white" }}> Learn more</a></p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className=" project2-container" >
                <div className=" project-border2" >
                    <div className=" project-content" >
                        <div className="project-top-container">
                            <div className="project-top-content">
                                <div className="project-title">Melodic</div>
                                <div className="project-stack">JavaScript ~ Flask</div>
                                <a className="project-link" href="https://github.com/PhoenixMP/Capstone-1#readme" target="_blank">
                                    <Laptop image={ProjectImage2} name="screen2" />
                                </a>

                            </div>
                        </div>
                        <div className="project-description-container">
                            <div className="project-description">Melodic is a desktop web application designed for users to jam along to Spotify tracks or create melodies using their computer keyboard. Secure user login enables the saving and sharing of melodies and the favoriting of Spotify tracks. The app fetches and filters Spotify tracks by integrating the Spotify API.
                                <p>Developed with HTML, CSS, JavaScript, Python, Flask, and PostgreSQL.</p>
                                <p> <a className="project-link" href="https://github.com/PhoenixMP/Capstone-1#readme" target="_blank" style={{ color: "white" }}> Learn more</a></p></div>
                        </div>
                    </div>
                </div>
            </div>
        </div >

    )

};
export default Projects;



