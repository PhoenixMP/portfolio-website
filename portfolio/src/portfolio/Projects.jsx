
import React from "react";


import ProjectImage1 from "../images/noteworthy.jpg"
import ProjectImage2 from "../images/melodic.png"


const Projects = () => {



    return (
        <div className="projects" >
            <div className="project-container project-1">
                <a href="https://github.com/PhoenixMP/Capstone-2#readme">
                    <div className="project-title">Noteworthy</div>
                    <img src={ProjectImage1} alt="Image" className="project-image" />
                    <div className="project-text">insert text</div>
                </a>

            </div>
            <div className="project-container project-2">
                <a href="https://github.com/PhoenixMP/capstone1#readme">
                    <div className="project-title">Melodic</div>
                    <div className="project-text">insert text</div>
                    <img src={ProjectImage2} alt="Image" className="project-image" />
                </a>
            </div>

        </div>
    )

};
export default Projects;


