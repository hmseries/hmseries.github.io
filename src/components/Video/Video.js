import React from "react";
import PropTypes from "prop-types";
import "./Video.css";

const Video = () => {
  const videoIds = [
    "SkElUUNwSps",
    "cQqzcWVCWp8",
    "BPPZMejyVPI",
    "R7DoRFeSjKQ",
    "DboggWjVxpo",
    "nBmLIY2hJh4",
    "Ik1fgSzfM_w",
    "3s6c0aCzo9k",
    "i60rnxihAoA",
    "9bCdCQd3SCU",
    "yZiEeEvpWLo",
    "rV0MBChuZ_o",
    "K1HoPIEGG4E",
    "I7iTnCYKwas",
    "QLlWt-cNPAc",
    "acWThwqbyvM",
    "I_T0vsKzP6I",
    "nRSFlcDANfw",
    "K6aglqtNfeE",
    "VtXauqdmr54",
    "Uuj32vixOwM",
    "9L7G4TA3Juk",
    "IZUKe1AW3Bo",
    "RTQ3eEcDiC4",
    "pH-pE6QrYcs",
    "1_EItGqr-9A",
    "XWc9F-fGoY8",
    "_nH67yhVLXo",
    "ScMGvnWLE1s",
    "5cx6OKq0iJI",
    "ncGF1ONZgbc",
    "drPaW8o4QzM",
    "87Mjp6atQB8",
    "74xOKok72CE",
    "3k4UdZ3OJ7E",
    "H1TbN3S5Njs",
    "2t5g2iUMjZU",
    "hn0ez3SiKIs",
    "cHeqSlQgMy4",
    "5_VP0uxPOvc",
    "S3S9LLE5GWg",
    "X_ukc-wzOAI",
    "cmXFEzxDyCQ",
    "3MgDHyGok_M",
    "6ageU1XN7eE",
    "8Tx1dPbKVXo",
    "LVAGxmejFB0",
    "QflB3TKGyXU",
    "De1wdjE15oo",
    "v-T-VDWvxT0",
    "Y9Yyc5Vwwso",
    "TokNdNozgA4",
    "D9Oz5Eq7hbM",
    "sNonwQzsGzY",
    "1W1B_f0lLOE",
    "n56p-kRV6no",
    "9Dy8sZSeviM",
    "_TvtyOS9eY0",
    "Xc9v2k_cBVI",
    "x-yAffl6HyM",
    "EGLqWSCjH8o",
  ];
  return (
    <div id="video" className="video-container">
      {videoIds.map((id, index) => (
        <div key={index} className="video">
          <iframe
            src={"https://www.youtube.com/embed/" + id}
            frameBorder="0"
            allowFullScreen
          ></iframe>
        </div>
      ))}
    </div>
  );
};

Video.propTypes = {};

Video.defaultProps = {};

export default Video;
