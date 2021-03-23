import React from "react";
import Card from "./Card/Card";
import { frontend, backend, other } from "./data";
import "./Skills.less";

function Skills() {
  return (
    <div className="section skills_section" data-aos="fade-down">
      <div className="large_subheading_text">Skills</div>
      <span className="skills_section__container">
        <Card data={frontend} />
        <Card data={backend} />
        <Card data={other} />
      </span>
    </div>
  );
}

export default Skills;
