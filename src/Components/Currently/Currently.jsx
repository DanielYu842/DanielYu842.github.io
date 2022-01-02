import React from "react";
import { Sera4 } from "../../Assets/Images/Work";

import "./Currently.less";

function Currently() {
  return (
    <div className="section currently_section" data-aos="fade-down">
      <div className="large_subheading_text">Currently</div>
      <div className="currently_section__content">
        <div>
          <img src={Sera4} alt="logo" className="currently_section__image" />
        </div>
        <div style={{ midWidth: "300px" }}>
          <div className="medium_subheading_text currently_section__title_text">
            Software Engineering Intern
          </div>
          <div className="large_secondary_text">
            Developing key product features and enhancements for Teleporte® software
            <br />
            <br />
            June - September 2021 : Full-time <br /> September 2021 - Current : Part-time
          </div>
        </div>
      </div>
    </div>
  );
}

export default Currently;
