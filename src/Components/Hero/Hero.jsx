import React from "react";
import { Button } from "antd";
import Headshot from "../../Assets/Images/Daniel.png";
import { Github, Linkedin } from "../../Assets/Images/Icons";

import "./Hero.less";

function Hero() {
  return (
    <div className="section hero_section">
      <span className="hero_section__content">
        <div className="title_text hero_section__title">Hey, I&lsquo;m Daniel</div>
        <div className="large_secondary_text hero_section__subheading">
          I’m a developer from Waterloo with a passion for software development and problem solving.
          I’m currently a student at Sir John A. Macdonald S.S. pursuing a career in computer
          science.
        </div>
        <span className="hero_section__actions">
          <Button type="primary" className="large_button hero_section__button">
            Resume
          </Button>
          <Button type="primary" ghost className="large_button">
            Contact
          </Button>
        </span>
        <span>
          <a href="https://github.com/DanielYu2004" target="_blank" rel="noreferrer">
            <Github className="social-icon" />
          </a>
          <a href="https://www.linkedin.com/in/danielyu2004/" target="_blank" rel="noreferrer">
            <Linkedin className="social-icon" />
          </a>
        </span>
      </span>
      <span>
        <div className="hero_section__image-container">
          <img src={Headshot} alt="headshot" className="hero_section__image" />
        </div>
      </span>
    </div>
  );
}

export default Hero;
