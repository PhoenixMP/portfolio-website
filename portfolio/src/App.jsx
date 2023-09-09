import React, { useState, useEffect, useRef } from "react";
import PageContext from "./routes-nav/PageContext";
import { BrowserRouter } from "react-router-dom";
import MyRoutes from './routes-nav/MyRoutes'
import MyNav from './routes-nav/MyNav'






function App() {

  const [currentPage, setCurrentPage] = useState(null)
  const homeRef = useRef(null);
  const portfolioRef = useRef(null);
  const aboutRef = useRef(null);


  const calculateSectionPositions = () => {
    // Calculate the positions of your section elements
    const homePos = homeRef.current.getBoundingClientRect();
    const portfolioPos = portfolioRef.current.getBoundingClientRect();
    const aboutPos = aboutRef.current.getBoundingClientRect();


    // Determine which section is currently in or near the viewport
    // Update the activeSection state accordingly
    if (homePos.top >= 0 && homePos.bottom <= window.innerHeight) {
      setCurrentPage('home');
    } else if (portfolioPos.top >= 0 && portfolioPos.bottom <= window.innerHeight) {
      setCurrentPage('portfolio');
    } else if (aboutPos.top >= 0 && aboutPos.bottom <= window.innerHeight) {
      setCurrentPage('about');
    }
  };


  useEffect(() => {
    const handleScroll = () => {
      calculateSectionPositions();
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);


  return (



    < BrowserRouter >
      <PageContext.Provider value={{ currentPage, setCurrentPage, homeRef, portfolioRef, aboutRef }}>
        <MyNav />
        <MyRoutes />
      </PageContext.Provider>
    </BrowserRouter >

  );
}

export default App;
