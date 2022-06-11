import React from "react";

const PercentBar = ({ percent }) => {
  return (
    <div className="percentBarContainer">
      <div className="greyBar">
        <div
          className={percent < 100 ? "blueBar" : "greenBar"}
          style={{ width: `${percent}%` }}
        ></div>
      </div>
      <div>{percent}%</div>
    </div>
  );
};

export default PercentBar;
