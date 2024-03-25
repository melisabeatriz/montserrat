import React from "react";
import { useState, useEffect, useContext } from "react";
import { ScrollContext } from "../../App";
import "./history.css";
import buenosAiresImage from "../../img/buenos_aires.jpeg";

const History = () => {
  const y = useContext(ScrollContext);
  const findOpacity = () => {
    if (y < 800) return 0;
    return y / 1000 / 2;
  };

  const findFontSize = () => {
    if (y < 2149) return "224.5px";
    if (y > 2150 && y < 2400) return `${(2600 - y) / 2}px`;
    return "101.5px";
  };

  return (
    <div className="history">
      <div className="image-container">
        <img style={{ opacity: findOpacity() }} src={buenosAiresImage} />
      </div>
      <div className="about-container">
        <h2 style={{ fontSize: findFontSize() }}>about</h2>
        <p className={`intro ${y < 2450 ? "hidden" : "not-hidden"}`}>
          Julieta Ulanovsky began The Montserrat Font Project in 2010 while a
          post-graduate student of typeface design at the FADU, University of
          Buenos Aires. She launched it as a Kickstarter project in 2011, in
          order to complete the first public release and share it with the world
          through Google Fonts.
        </p>
        <div className={`quote ${y < 2650 ? "hidden" : "not-hidden"}`}>
          <p>
            The old posters and signs in the traditional neighborhood of Buenos
            Aires called Montserrat inspired me to design a typeface that
            rescues the beauty of urban typography from the first half of the
            twentieth century. The goal is to rescue what is in Montserrat and
            set it free, under a free, libre and open source license, the SIL
            Open Font License.
          </p>
          <p className={y < 2850 ? "hidden" : "not-hidden"}>
            As urban development changes this place, it will never return to its
            original form and loses forever the designs that are so special and
            unique. To draw the letters, I rely on examples of lettering in the
            urban space. Each selected example produces its own variants in
            length, width and height proportions, each adding to the Montserrat
            family. The old typographies and canopies are irretrievable when
            they are replaced.
          </p>
          <p className={y < 3150 ? "hidden" : "not-hidden"}>
            There are other revivals, but those do not stay close to the
            originals. The letters that inspired this project have work,
            dedication, care, color, contrast, light and life, day and night!
            These are the types that make the city look so beautiful.
          </p>
        </div>
      </div>
    </div>
  );
};

export default History;
