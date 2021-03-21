import React from "react";
import "./Card.less";
import { Carousel } from "antd";
import PropTypes from "prop-types";

function SkillCard(props) {
  const { Img, name, colour, margin } = props;
  return (
    <div
      className="skills_section__skill_card"
      style={{ background: colour, marginRight: margin ? "0px" : "20px" }}
    >
      <img src={Img} alt={name} className="skills_section__skill_card__image" />
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
  margin: PropTypes.bool,
};

SkillCard.defaultProps = {
  Img: PropTypes.element,
  name: "",
  colour: "",
  margin: false,
};

function Card(props) {
  const { data } = props;

  return (
    <div className="skills_section__card">
      <span className="skills_section__card__content">
        <div className="small_subheading_text skills_section__card__header">{data.name}</div>
        <div className="skills_section__card__half_container">
          {data.mainItems.map((val) => (
            <SkillCard key={val.name} name={val.name} Img={val.Img} colour={val.colour} />
          ))}
        </div>
        <Carousel autoplay dots={{ className: "skills_section__card__dots" }}>
          {data.secondaryItems.map((val) =>
            val.length === 2 ? (
              <div className="skills_section__carousel__content_container" key={val[0].name}>
                <SkillCard name={val[0].name} Img={val[0].Img} colour={val[0].colour} />
                <SkillCard
                  name={val[1].name}
                  Img={val[1].Img}
                  colour={val[1].colour}
                  margin={false}
                />
              </div>
            ) : (
              <div className="skills_section__carousel__content_container" key={val[0].name}>
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
