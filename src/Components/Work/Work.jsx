import React from "react";
import Card from "./Card/Card";
import Data from "./data";
import "./Work.less";

function Work() {
  return (
    <div className="section work_section" data-aos="fade-down">
      <div className="large_subheading_text">Work</div>
      <span className="work_section__container">
        {Data.map((val) => (
          <Card
            title={val.title}
            description={val.description}
            image={val.image}
            link={val.link}
            key={val.title}
          />
        ))}
      </span>
    </div>
  );
}

export default Work;
