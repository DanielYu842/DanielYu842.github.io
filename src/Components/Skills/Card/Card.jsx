import React from "react";
import "./Card.less";
import { Carousel } from "antd";
import PropTypes from "prop-types";

function SkillCard(props) {
  const { Img, name, colour } = props;
  return (
    <div className="skills_section__skill_card" style={{ background: colour }}>
      <Img className="skills_section__skill_card__image" />
      <span className="small_secondary_subheading_text skills_section__skill_card__name">
        {name}
      </span>
    </div>
  );
}

SkillCard.propTypes = {
  Img: PropTypes.elementType,
  name: PropTypes.string,
  colour: PropTypes.string,
};

SkillCard.defaultProps = {
  Img: PropTypes.element,
  name: "",
  colour: "",
};

function Card(props) {
  const { data } = props;

  return (
    <div className="skills_section__card">
      <span className="skills_section__card__content">
        <div className="small_subheading_text skills_section__card__header">{data.name}</div>
        <div className="skills_section__card__half_container">
          {data.mainItems.map((val) => (
            <SkillCard name={val.name} Img={val.Img} colour={val.colour} />
          ))}
        </div>
        <Carousel autoplay dots={false}>
          {data.secondaryItems.map((val) =>
            val.length === 2 ? (
              <div className="skills_section__carousel__content_container">
                <SkillCard name={val[0].name} Img={val[0].Img} colour={val[0].colour} />
                <SkillCard name={val[1].name} Img={val[1].Img} colour={val[1].colour} />
              </div>
            ) : (
              <div className="skills_section__carousel__content_container">
                <SkillCard name={val[0].name} Img={val[0].Img} colour={val[0].colour} />
              </div>
            )
          )}
        </Carousel>
      </span>
    </div>
  );
}

Card.propTypes = {
  data: PropTypes.instanceOf(Object),
};

Card.defaultProps = {
  data: {
    mainItems: [],
    secondaryItems: [],
  },
};

export default Card;
