import React from "react";
import { Button } from "antd";
import { ReactComponent as Jamhacks } from "../../../Assets/Images/Work/Jamhacks.svg";
import "./Card.less";

function Card() {
  return (
    <div className="work_section__card">
      <div className="work_section__card_content">
        <Jamhacks className="work_section__card_image" />
        <div className="work_section__card_content_text">
          <div className="small_subheading_text work_section__card_content_subheading">
            Jamhacks
          </div>
          <div className="small_secondary_text work_section__card_content_secondary">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
            incididunt ut labore et dolore magna aliqua. Tempor orci eu lobortis elementum nibh
            tellus molestie.
          </div>
          <Button type="primary" className="small_button">
            Learn More
          </Button>
        </div>
      </div>
    </div>
  );
}

export default Card;
