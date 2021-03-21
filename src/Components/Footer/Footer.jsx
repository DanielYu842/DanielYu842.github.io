import React from "react";
import { Arrow, Github, Linkedin } from "../../Assets/Images/Icons";
import "./Footer.less";

function Footer() {
  const onClick = () => {
    document.body.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <div className="section footer_section">
      <div className="footer_section__bottom ">
        <div className="small_subheading_text">Daniel Yu</div>
        <Arrow onClick={onClick} className="footer_section_arrow" />
      </div>
      <span>
        <a href="https://github.com/DanielYu2004" target="_blank" rel="noreferrer">
          <Github className="social-icon" />
        </a>
        <a href="https://www.linkedin.com/in/danielyu2004/" target="_blank" rel="noreferrer">
          <Linkedin className="social-icon" />
        </a>
      </span>
    </div>
  );
}

export default Footer;
