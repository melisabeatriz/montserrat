import React, { useState, useEffect } from "react";
import "./typeTester.css";

const FAMILY_REGULAR = "Montserrat";
const FAMILY_ALTERNATES = "Montserrat Alternates";
const FAMILY_SUBRAYADA = "Montserrat Subrayada";

const TypeTester = ({ onClose }) => {
  const [fontWeight, setFontWeight] = useState(400);
  const [fontSize, setFontSize] = useState(150);
  const [fontFamily, setFontFamily] = useState(FAMILY_REGULAR);
  const [isItalic, setIsItalic] = useState(false);
  const [test, setTest] = useState("type here");

  const changeFontWeight = (e) => {
    setFontWeight(e.target.value);
  };

  const changeFontSize = (e) => {
    setFontSize(e.target.value);
  };

  const changeFamily = (e) => {
    const value = Number(e.target.value);

    if (value === 1) {
      setFontFamily(FAMILY_REGULAR);
    }
    if (value === 2) {
      setFontFamily(FAMILY_ALTERNATES);
    }
    if (value === 3) {
      setFontFamily(FAMILY_SUBRAYADA);
    }
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
          <div className="type-tester-header-controller">
            <div className="family-selector-container">
              <input
                type="radio"
                id="regular"
                name="family"
                value={1}
                defaultChecked
                onClick={(e) => changeFamily(e)}
              />
              <label className="family-selector" htmlFor="regular">
                regular
              </label>

              <input
                type="radio"
                id="alternates"
                name="family"
                value={2}
                onClick={(e) => changeFamily(e)}
              />
              <label className="family-selector" htmlFor="alternates">
                alternates
              </label>

              <input
                type="radio"
                id="subrayada"
                name="family"
                value={3}
                onClick={(e) => changeFamily(e)}
              />
              <label className="family-selector" htmlFor="subrayada">
                subrayada
              </label>
            </div>
            <button
              className="type-tester-button"
              onClick={() => setIsItalic(!isItalic)}
              style={{
                backgroundColor: isItalic ? "#eeeeee" : "#2e2e2e",
                color: isItalic ? "#2e2e2e" : "#eeeeee",
              }}
            >
              italic
            </button>
            <div className="type-tester-slider">
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
            </div>
            <div className="type-tester-slider">
              <label htmlFor="size-slider">size</label>
              <input
                type="range"
                min="10"
                max="200"
                value={fontSize}
                onChange={(e) => changeFontSize(e)}
                id="size-slider"
              />
            </div>
          </div>
          <button className="close-button" onClick={onClose}>
            <span className="material-symbols-outlined">close</span>
          </button>
        </div>
        <textarea
          className="type-tester-input"
          style={{
            fontStyle: "normal",
            opacity: isItalic ? 0 : 1,
            zIndex: isItalic ? 0 : 500,
            fontWeight: fontWeight,
            fontSize: `${fontSize}px`,
            fontFamily: fontFamily,
          }}
          onChange={(e) => setTest(e.target.value)}
          value={test}
        />
        <textarea
          className="type-tester-input"
          style={{
            fontStyle: "italic",
            opacity: isItalic ? 1 : 0,
            zIndex: isItalic ? 500 : 0,
            fontWeight: fontWeight,
            fontSize: `${fontSize}px`,
            fontFamily: fontFamily,
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
