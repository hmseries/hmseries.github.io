import React from "react";
import "./App.css";
import Navbar from "./components/Navbar/Navbar";
import Carousel from "./components/Carousel/Carousel";
import About from "./components/About/About";
import Contact from "./components/Contact/Contact";
import Video from "./components/Video/Video";

function App() {
  return (
    <div id="app">
      <Navbar />
      <div id="home">
        <Carousel />
      </div>
      <Video />
      <About />
      <Contact />
    </div>
  );
}

export default App;
