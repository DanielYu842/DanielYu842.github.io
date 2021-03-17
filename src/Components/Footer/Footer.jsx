import React from "react";
import { Arrow } from "../../Assets/Images/Icons";
import "./Footer.less";

function Footer() {
  const onClick = () => {
    document.body.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <div className="section footer_section">
      {/* <div>ddd</div> */}
      <div className="footer_section__bottom ">
        <div className="small_subheading_text">Daniel Yu</div>
        <Arrow onClick={onClick} className="footer_section_arrow" />
      </div>
    </div>
  );
}

export default Footer;
