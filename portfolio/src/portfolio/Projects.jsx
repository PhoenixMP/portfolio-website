
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
                            <div className="project-description">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.</div>
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
                                <div className="project-stack">JavaScript ~ Python</div>
                                <a className="project-link" href="https://github.com/PhoenixMP/capstone1#readme" target="_blank">
                                    <Laptop image={ProjectImage2} name="screen2" />
                                </a>

                            </div>
                        </div>
                        <div className="project-description-container">
                            <div className="project-description">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.  </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    )

};
export default Projects;





{/* <div className="projects" >
<div className="project-container project-1">
    <a href="https://github.com/PhoenixMP/Capstone-2#readme">
        <div className="project-content">
            <div className="project-text">
                <div className="project-title">Noteworthy</div>
                <div className="project-text">insert text</div>
            </div>
            <Laptop image={ProjectImage1} />
        </div>
    </a>

</div>
<div className="project-container project-2">
    <a href="https://github.com/PhoenixMP/capstone1#readme">
        <div className="project-title">Melodic</div>
        <div className="project-text">insert text</div>
        <img src={ProjectImage2} alt="Image" className="project-image" />
    </a>
</div>

</div> */}