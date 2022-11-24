import React from 'react';

import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import PageRouter from "./utils/pageRounter";

const App = () => {
  return (
    <div className="App">
        <Navbar/>
        <PageRouter/>
        <Footer/>
    </div>
  );
}

export default App;
