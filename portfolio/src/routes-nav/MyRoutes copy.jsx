import React, { useContext } from "react";
import { Route, Routes, Navigate } from "react-router-dom";
import Home from "../home/Home";
import Portfolio from "../portfolio/Portfolio";
import About from "../about/About"
import Contact from "../contact/Contact"




function MyRoutes() {



  return (

    <Routes>
      <Route exact path="/" element={<Home />} />
      <Route exact path="/about" element={<About />} />
      <Route exact path="/contact" element={<Contact />} />
      <Route exact path="/portfolio" element={<Portfolio />} />

      <Route path="*" element={<Navigate replace to="/" />} />
    </Routes>

  );
}

export default MyRoutes;

