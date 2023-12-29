import React, { useRef } from "react";
import "./App.css";
import Navbar from "./components/Navbar/Navbar";
import Carousel from "./components/Carousel/Carousel";
import About from "./components/About/About";
import Contact from "./components/Contact/Contact";
import Video from "./components/Video/Video";

function App() {
  const iframeRef = useRef(null);
  function resizeIframe(obj) {
    if (iframeRef.current) {
      const contentHeight =
        iframeRef.current.contentWindow.document.body.scrollHeight;
      iframeRef.current.style.height = `${contentHeight}px`;
    }
  }
  const youtubeResource = [
    {
      category: "Bengali Video Song",
      project: "Ayna Tui Kache",
      youtubeLink: "https://www.youtube.com/embed/QflB3TKGyXU",
    },
    {
      category: "Bengali Video Song",
      project: "Veja Veja Chokh",
      youtubeLink: "https://www.youtube.com/embed?v=De1wdjE15oo",
    },
    {
      category: "Bengali Video Song",
      project: "Veja Ghas Baro Mas",
      youtubeLink: "https://www.youtube.com/embed/Y9Yyc5Vwwso",
    },
    {
      category: "Bengali Video Song",
      project: "Bosonta Ese Geche",
      youtubeLink: "https://www.youtube.com/embed/TokNdNozgA4",
    },
    {
      category: "Bengali Video Song",
      project: "Pather Dhulo",
      youtubeLink: "https://www.youtube.com/embed/D9Oz5Eq7hbM",
    },
    {
      category: "Bengali Video Song",
      project: "Jodi Toke Ake Mon",
      youtubeLink: "https://www.youtube.com/embed/sNonwQzsGzY",
    },
    {
      category: "Bengali Video Song",
      project: "Tui Ki Amar Hobi Bol",
      youtubeLink: "https://www.youtube.com/embed/n56p-kRV6no",
    },
    {
      category: "Recitation",
      project: "Seo Ki Amar Motoi Kade",
      youtubeLink: "https://www.youtube.com/embed/9Dy8sZSeviM",
    },
    {
      category: "Bengali Video Song",
      project: "Veja Ghas Baro Mas",
      youtubeLink: "https://www.youtube.com/embed/_TvtyOS9eY0",
    },
    {
      category: "Bengali Video Song",
      project: "Nil Ghuri",
      youtubeLink: "https://www.youtube.com/embed/Xc9v2k_cBVI",
    },
    {
      category: "Bengali Video Song",
      project: "Sukher Ghor",
      youtubeLink: "https://www.youtube.com/embed/x-yAffl6HyM",
    },
    {
      category: "Hindi Video Song",
      project: "Zindegi Hume Bula Le",
      youtubeLink: "https://www.youtube.com/embed/EGLqWSCjH8o",
    },
  ];
  const data = {
    message: "Hello Vue!",
    portfolioPath: "assets/img/portfolio/thumbnails",
  };

  return (
    <div id="app">
      <header>
        <Navbar />
      </header>
      <div id="home" className="home">
        <Carousel />
      </div>
      <Video />
      <About />
      <Contact />
    </div>
  );
}

export default App;
