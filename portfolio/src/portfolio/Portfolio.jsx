
import React from "react";
import Projects from "./Projects";
import "./portfolio.css"




const Portfolio = () => {



    return (
        <div className="portfolio-page" >
            <div id="portfolio"></div>
            <div className="inner-contaner">
                <Projects />
            </div>
        </div>
    )

};
export default Portfolio;


