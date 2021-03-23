import React from "react";
import PropTypes from "prop-types";
import { Button } from "antd";
import "./Card.less";

function Card(props) {
  const { image, title, description, link } = props;
  return (
    <div className="work_section__card">
      <div className="work_section__card_content">
        <img src={image} alt="logo" className="work_section__card_image" />
        <div className="work_section__card_content_text">
          <div className="small_subheading_text work_section__card_content_subheading">{title}</div>
          <div className="small_secondary_text work_section__card_content_secondary">
            {description}
          </div>
          <a href={link} target="_blank" rel="noreferrer">
            <Button type="primary" className="small_button">
              Learn More
            </Button>
          </a>
        </div>
      </div>
    </div>
  );
}

Card.propTypes = {
  image: PropTypes.elementType,
  title: PropTypes.string,
  description: PropTypes.string,
  link: PropTypes.string,
};

Card.defaultProps = {
  image: PropTypes.element,
  title: "",
  description: "",
  link: "",
};

export default Card;
