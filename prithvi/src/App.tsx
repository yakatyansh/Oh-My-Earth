import React from 'react';

import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import PageRouter from "./utils/pageRounter";
import Socialwidget from "./sections/socialwidget";

const App = () => {
  return (
    <div className="App">
        <Navbar/>
        <Socialwidget/>
        <PageRouter/>
        <Footer/>
    </div>
  );
}

export default App;
