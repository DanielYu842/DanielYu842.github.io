import React from "react";
import Table from "./Table/Table";

import "./Achievements.less";

function Achievements() {
  return (
    <div className="section achievements_section" data-aos="fade-down">
      <div className="large_subheading_text">Achievements</div>
      <Table />
    </div>
  );
}

export default Achievements;
