import React, { useState, useEffect } from "react";

import { BrowserRouter } from "react-router-dom";
import MyRoutes from './routes-nav/MyRoutes'
import MyNav from './routes-nav/MyNav'






function App() {



  return (

    <BrowserRouter>

      <MyNav />
      <MyRoutes />

    </BrowserRouter>

  );
}

export default App;
