import React from 'react';

import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

const App = () => {
  return (
    <div className="App">
        <Navbar/>
        <div className="h-96"></div>
        <Footer/>
    </div>
  );
}

export default App;
