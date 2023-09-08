
import React from "react";

import "./Laptop.css"




const Portfolio = ({ image, name }) => {



    return (

        <div className="laptop">
            <div>
                <div className="front">

                    <div className="webcamera">
                        <div className="outer"></div>
                        <div className="lens"></div>
                    </div>
                    <div className={`screen ${name}`}>
                        <img className="laptop-image" src={image} />
                    </div>

                    <div className="line"></div>
                </div>
            </div>

            <div className="bottom"></div>
        </div>


    )

};
export default Portfolio;


