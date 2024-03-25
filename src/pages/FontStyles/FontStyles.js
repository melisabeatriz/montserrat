import React from "react";
import { useState, useEffect, useContext } from "react";
import { ScrollContext } from "../../App";
import "./fontStyles.css";

const FontStyleDisplay = ({ weight, styleName, showOnY }) => {
  const y = useContext(ScrollContext);

  const findLetterSpacing = () => {
    if (y < 1000) return "0";
    if (y > 1800) return "0";
    return `${(y - 1000) / 2}px`;
  };
  return (
    <div
      className={`font-style-display ${y < showOnY ? "hidden" : "not-hidden"}`}
    >
      <p className="font-style-weight-specification">
        {styleName} {weight}
      </p>
      <div>
        <p style={{ fontWeight: weight, letterSpacing: findLetterSpacing() }}>
          Buenos Aires
        </p>
        <p
          style={{ fontWeight: weight, letterSpacing: findLetterSpacing() }}
          className="italic"
        >
          Argentina
        </p>
      </div>
    </div>
  );
};

const FontStyles = () => {
  const y = useContext(ScrollContext);
  const fontStylesAvailable = [
    { weight: 100, styleName: "thin", showOnY: 350 },
    { weight: 200, styleName: "extra light", showOnY: 390 },
    { weight: 300, styleName: "light", showOnY: 430 },
    { weight: 400, styleName: "regular", showOnY: 470 },
    { weight: 500, styleName: "medium", showOnY: 510 },
    { weight: 600, styleName: "semi bold", showOnY: 550 },
    { weight: 700, styleName: "bold", showOnY: 590 },
    { weight: 800, styleName: "extra bold", showOnY: 630 },
    { weight: 900, styleName: "black", showOnY: 670 },
  ];

  return (
    <div className="font-styles">
      {fontStylesAvailable.map(({ weight, styleName, showOnY }) => (
        <FontStyleDisplay
          weight={weight}
          styleName={styleName}
          key={styleName}
          showOnY={showOnY}
        />
      ))}
      <p className="whereony">y: {y}</p>
    </div>
  );
};

export default FontStyles;
