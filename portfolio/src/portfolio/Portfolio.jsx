
import React, { useEffect, useContext } from "react";
import Projects from "./Projects";
import "./portfolio.css"
import PageContext from "../routes-nav/PageContext";




const Portfolio = () => {
    const { portfolioRef } = useContext(PageContext);


    return (
        <div className="portfolio-page" >
            <div id="portfolio" ref={portfolioRef}></div>
            <div className="inner-contaner">
                <Projects />
            </div>
        </div>
    )

};
export default Portfolio;


