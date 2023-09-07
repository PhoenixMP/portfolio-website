import React, { useContext, useState, useEffect } from "react";
import { Route, Routes, Navigate } from "react-router-dom";
import Home from "../home/Home";
import Portfolio from "../portfolio/Portfolio";
import About from "../about/About"
import Contact from "../contact/Contact"

function MyRoutes() {

  const [bgPosition1, setBgPosition1] = useState(0);
  const [bgPosition2, setBgPosition2] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      setBgPosition1(scrollPosition * 0.8); // Adjust the multiplier as needed for the first parallax section
      setBgPosition2(scrollPosition * 0.4); // Adjust the multiplier as needed for the second parallax section
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);
  return (
    <div className="website-content">
      <div className="parallax-container">
        <div id="background-1"
          style={{ transform: `translateY(${bgPosition1}px)` }}></div>

        <Home />
      </div>
      <div className="parallax-container">
        <div id="background-2"
          style={{ transform: `translateY(${bgPosition2}px)` }}></div>

        <Portfolio />
        <About />
      </div>

      <Contact />
    </div>

  );
}

export default MyRoutes;




