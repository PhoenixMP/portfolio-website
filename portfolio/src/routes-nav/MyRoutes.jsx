import React, { useContext, useState, useEffect } from "react";
import { Route, Routes, Navigate } from "react-router-dom";
import Home from "../home/Home";
import Portfolio from "../portfolio/Portfolio";
import About from "../about/About"
import Contact from "../contact/Contact"
import PageContext from "./PageContext";

function MyRoutes() {
  const [viewportHeight, setViewportHeight] = useState(window.innerHeight);
  const [viewportWidth, setViewportWidth] = useState(window.innerWidth);

  const [bgPosition1, setBgPosition1] = useState(0);
  const [bgPosition2, setBgPosition2] = useState(0);


  // Function to update the state with the current viewport height
  const updateViewport = () => {
    setViewportHeight(window.innerHeight);
    setViewportWidth(window.innerWidth);

  };

  // Attach an event listener to the window's resize event
  useEffect(() => {
    window.addEventListener('resize', updateViewport);

    // Clean up the event listener when the component unmounts
    return () => {
      window.removeEventListener('resize', updateViewport);
    };
  }, []);


  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      setBgPosition1(scrollPosition * -0.4); // Adjust the multiplier as needed for the first parallax section
      if (viewportWidth > 900) {
        setBgPosition2((scrollPosition - viewportHeight) * 0.7); // Adjust the multiplier as needed for the second parallax section
      } else {
        setBgPosition2((scrollPosition * .65));
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div className="website-content">
      <div className="parallax-container parallax-1">
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


    </div>

  );
}

export default MyRoutes;




