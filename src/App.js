import React, { useRef } from "react";
import "./App.css";

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
      {/* <!-- Navigation--> */}
      <nav
        className="navbar navbar-expand-lg navbar-light fixed-top py-3"
        id="mainNav"
      >
        <div className="container">
          <a className="navbar-brand js-scroll-trigger" href="#page-top">
            HM Series
          </a>
          <button
            className="navbar-toggler navbar-toggler-right"
            type="button"
            data-toggle="collapse"
            data-target="#navbarResponsive"
            aria-controls="navbarResponsive"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarResponsive">
            <ul className="navbar-nav ml-auto my-2 my-lg-0">
              <li className="nav-item">
                <a className="nav-link js-scroll-trigger" href="#portfolio">
                  Portfolio
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link js-scroll-trigger" href="#about">
                  About
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link js-scroll-trigger" href="#contact">
                  Contact
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
      {/* <!-- Masthead--> */}
      <header className="masthead">
        <div className="container h-100">
          <div className="row h-100 align-items-center justify-content-center text-center">
            <div className="col-lg-10 align-self-end">
              <h1 className="text-uppercase text-white font-family-sofia">
                Hamilton Music Production
              </h1>
              <hr className="divider my-4" />
            </div>
            <div className="col-lg-8 align-self-baseline">
              <p className="text-white-75 font-family-aladin mb-5">
                HM Series is a Music Production. We create Music. All set up we
                have to create a music environment.
              </p>
              <a
                className="btn btn-primary btn-xl js-scroll-trigger"
                href="#about"
              >
                Find Out More
              </a>
            </div>
          </div>
        </div>
      </header>
      {/* <!-- Portfolio--> */}
      <div id="portfolio">
        <div className="container-fluid p-0">
          <div className="row no-gutters">
            <div className="col-lg-4 col-sm-6">
              {youtubeResource.map((resource, i) => (
                <iframe
                  key={i}
                  className="portfolio-box"
                  title={resource.project}
                  src={resource.youtubeLink}
                  frameBorder="0"
                  allow="autoplay; encrypted-media"
                  allowFullScreen
                  scrolling="no"
                  onLoad={resizeIframe(this)}
                ></iframe>
              ))}
            </div>
          </div>
        </div>
      </div>
      {/* <!-- About--> */}
      <section className="page-section bg-primary" id="about">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-8 text-center">
              <h2 className="text-white mt-0 font-family-lobster">
                NEEL (MILTON) || FOUNDER OF HM-SERIES
              </h2>
              <hr className="divider light my-4" />
              <p className="text-white-50 mb-4 font-family-lobster">
                Neel Milton is a lyricist and founder of HM-SERIES. He is
                experienced with Good Music & had a dream of Heaven of Music.
              </p>
              <a
                className="btn btn-light btn-xl js-scroll-trigger"
                href="#services"
              >
                Get Started!
              </a>
            </div>
          </div>
        </div>
      </section>
      {/* <!-- Contact--> */}
      <section className="page-section" id="contact">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-8 text-center">
              <h2 className="mt-0">Let's Get In Touch!</h2>
              <hr className="divider my-4" />
              <p className="text-muted mb-5">
                Ready to start your next project with us? Give us a call or send
                us an email and we will get back to you as soon as possible!
              </p>
            </div>
          </div>
          <div className="row">
            <div className="col-lg-4 ml-auto text-center mb-5 mb-lg-0">
              <i className="fas fa-phone fa-3x mb-3 text-muted"></i>
              <div>+91 79087 73517</div>
            </div>
            <div className="col-lg-4 mr-auto text-center">
              <i className="fas fa-envelope fa-3x mb-3 text-muted"></i>
              {/* <!-- Make sure to change the email address in BOTH the anchor text and the link target below!--> */}
              <a className="d-block" href="mailto:contact.hmseries@gmail.com">
                contact.hmseries@gmail.com
              </a>
            </div>
          </div>
        </div>
      </section>
      {/* <!-- Footer--> */}
      <footer className="bg-light py-5">
        <div className="container">
          <div className="small text-center text-muted">
            Copyright © 2023 - Hamilton Music Production
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;
