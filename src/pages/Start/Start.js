import React from "react";
import { useEffect, useState } from "react";
import "./start.css";

const Start = () => {
  const [letter, setLetter] = useState("");
  const alphabet = [..."abcdefghijklm"];

  const prueba = () => {
    setTimeout(function () {
      setLetter("o");
    }, 1000);
    setTimeout(function () {
      setLetter("on");
    }, 1100);
    setTimeout(function () {
      setLetter("ont");
    }, 1200);
    setTimeout(function () {
      setLetter("onts");
    }, 1300);
    setTimeout(function () {
      setLetter("ontse");
    }, 1400);
    setTimeout(function () {
      setLetter("ontser");
    }, 1500);
    setTimeout(function () {
      setLetter("ontserr");
    }, 1600);
    setTimeout(function () {
      setLetter("ontserra");
    }, 1700);
    setTimeout(function () {
      setLetter("ontserrat");
    }, 1800);
  };

  useEffect(() => {
    prueba();
  }, []);
  return (
    <div className="start">
      <div className="start-title">
        <div className="first-letter-container">
          <ul>
            {alphabet.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </div>
        <div className="font-name-container">
          <span>{letter}</span>
        </div>
      </div>
    </div>
  );
};

export default Start;
