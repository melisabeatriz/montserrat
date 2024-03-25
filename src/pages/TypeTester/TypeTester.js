import React, { useState, useEffect } from "react";
import "./typeTester.css";

const TypeTester = ({ onClose }) => {
  const [fontWeight, setFontWeight] = useState(400);
  const [fontSize, setFontSize] = useState(150);
  const [isItalic, setIsItalic] = useState(false);
  const [test, setTest] = useState("type here");

  const changeFontWeight = (e) => {
    setFontWeight(e.target.value);
  };

  const changeFontSize = (e) => {
    setFontSize(e.target.value);
  };

  useEffect(() => {
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = "scroll";
    };
  }, []);

  return (
    <div className="type-tester-container">
      <div className="type-tester">
        <div className="type-tester-header">
          <button
            className="type-tester-button"
            onClick={() => setIsItalic(!isItalic)}
          >
            italic
          </button>
          <label htmlFor="weight-slider">weight</label>
          <input
            type="range"
            min="100"
            max="900"
            step="100"
            value={fontWeight}
            id="weight-slider"
            onChange={(e) => changeFontWeight(e)}
          />
          <label htmlFor="size-slider">size</label>
          <input
            type="range"
            min="10"
            max="200"
            value={fontSize}
            onChange={(e) => changeFontSize(e)}
            id="size-slider"
          />
          <span className="material-symbols-outlined" onClick={onClose}>
            cancel
          </span>
        </div>
        <input
          className="type-tester-input"
          style={{
            fontStyle: "normal",
            opacity: isItalic ? 0 : 1,
            zIndex: isItalic ? 0 : 500,
            fontWeight: fontWeight,
            fontSize: `${fontSize}px`,
          }}
          onChange={(e) => setTest(e.target.value)}
          value={test}
        />
        <input
          className="type-tester-input"
          style={{
            fontStyle: "italic",
            opacity: isItalic ? 1 : 0,
            zIndex: isItalic ? 500 : 0,
            fontWeight: fontWeight,
            fontSize: `${fontSize}px`,
          }}
          onChange={(e) => setTest(e.target.value)}
          value={test}
        />
      </div>
    </div>
  );
};

const TypeTesterDisplay = () => {
  const [showTypeTester, setShowTypeTester] = useState(false);

  return (
    <div className="type-tester-display-container">
      <div className="type-tester-display">
        <h2>
          TRY IT OUT<span className="underscore">_</span>
        </h2>
        <button onClick={() => setShowTypeTester(true)}>
          <span className="material-symbols-outlined">open_in_full</span>
        </button>
      </div>
      {showTypeTester && (
        <TypeTester onClose={() => setShowTypeTester(false)} />
      )}
    </div>
  );
};

export default TypeTesterDisplay;
