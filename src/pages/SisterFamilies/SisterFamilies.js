import React, { useContext } from "react";
import { ScrollContext } from "../../App";
import "./sisterFamilies.css";

const SisterFamilies = () => {
  const y = useContext(ScrollContext);

  return (
    <div className="sister-families">
      <h2>sister families</h2>
      <div className="families-display">
        <p className="alternates">ALTERNATES</p>
        <p className="subrayada">SUBRAYADA</p>
      </div>
    </div>
  );
};

export default SisterFamilies;
