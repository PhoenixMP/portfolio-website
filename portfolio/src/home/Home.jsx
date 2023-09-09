
import React, { useState, useEffect, useContext } from "react";
import PageContext from "../routes-nav/PageContext";
import HomeCard from "./HomeCard";
import "./Home.css"




const Home = () => {

    const { homeRef } = useContext(PageContext);



    return (
        <div id="home" className="home-page" >
            <div className="inner-container" >
                <HomeCard homeRef={homeRef} />

            </div>


        </div>
    )

};
export default Home;


