import React from "react";
import Card from "./Card/Card";
import Data from "./data";
import "./Work.less";

function Work() {
  return (
    <div className="section work_section">
      <div className="large_subheading_text">Work</div>
      <span className="work_section__container">
        {Data.map(() => (
          <Card />
        ))}
      </span>
    </div>
  );
}

export default Work;
