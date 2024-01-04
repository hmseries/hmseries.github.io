import React, { lazy, Suspense } from "react";
import "./App.css";
import Navbar from "./components/Navbar/Navbar";
import Carousel from "./components/Carousel/Carousel";
import About from "./components/About/About";
import Contact from "./components/Contact/Contact";
import RecentHighlight from "./components/RecentHighlight/RecentHighlight";
const Video = lazy(() => import("./components/Video/Video"));

function App() {
  return (
    <div id="app">
      <Navbar />
      <div id="home">
        <Carousel />
      </div>
      <RecentHighlight />
      <Suspense fallback={<div>Loading...</div>}>
        <Video />
      </Suspense>
      <About />
      <Contact />
    </div>
  );
}

export default App;
