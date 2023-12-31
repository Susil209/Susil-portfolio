import React from "react";
import { About, Footer, Header, Skills, Testimonial, Work } from "./containers";

import "./App.scss";
import { Navbar } from "./components/Index";


const App = () => {
  return (
    <div className="app">
      <Navbar />
      <Header />
      <About />
      <Work />
      <Skills />
      <Testimonial />
      <Footer />
    </div>
  );
};

export default App;
