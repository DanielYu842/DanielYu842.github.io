import React from "react";

import "./About.less";

function About() {
  return (
    <div className="section about_section" data-aos="fade-down">
      <div className="large_subheading_text">About Me</div>
      <div className="large_secondary_text">
        Hello! I&lsquo;m Daniel and I have a passion for problem solving and innovation.
        <br />
        <br />
        I&lsquo;m currently a grade 12 student from the Waterloo region who&lsquo;s looking forward
        to a future career in the tech industry. I have experience utilizing a whole plethora of
        languages and technologies to satisfy my creative needs and peculiar curiosities.
        <br />
        <br />
        One of my strongest strengths is my background in mathematics and problem solving, which I
        love to use to tackle any challenges that come my way. I&lsquo;m constantly challenging
        myself to keep my mind sharp, whether it be through math contests, competitive programming,
        or a casual game of chess.
        <br />
        <br />I mainly work in the scope of full-stack web development but have recently developed
        an interest in data science and ML.
      </div>
    </div>
  );
}

export default About;
