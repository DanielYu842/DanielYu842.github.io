import React from "react";
import { Button } from "antd";
import Headshot from "../../Assets/Images/Daniel.webp";
import { Github, Linkedin } from "../../Assets/Images/Icons";

import "./Hero.less";

function Hero() {
  return (
    <div className="section hero_section">
      <span className="hero_section__content">
        <div className="title_text hero_section__title">Hey, I&lsquo;m Daniel</div>
        <div className="large_secondary_text hero_section__subheading">
          I&apos;m a developer from Waterloo with a passion for software development and problem
          solving. I&apos;m currently a student at Sir John A. Macdonald S.S. pursuing a career in
          tech.
        </div>
        <span className="hero_section__actions">
          <a
            href="https://drive.google.com/file/d/1kpiwj8JdS1pyam0dD7Q3ffY0Ngoz3_sw/view?usp=sharing"
            target="_blank"
            rel="noreferrer"
          >
            <Button type="primary" className="large_button hero_section__button">
              Resume
            </Button>
          </a>
          <a href="mailto:daniel2004yu@gmail.com" target="_blank" rel="noreferrer">
            <Button type="primary" ghost className="large_button">
              Contact
            </Button>
          </a>
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
