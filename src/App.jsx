import React from "react";
import AOS from "aos";

import { Hero, About, Skills, Work, Achievements, Footer } from "./Components";

import "./styles.less";
import "./App.less";
import "aos/dist/aos.css";

AOS.init();

function App() {
  React.useEffect(() => {
    AOS.init();
    AOS.refresh();
  }, []);
  return (
    <div className="App">
      <Hero />
      <About />
      <Skills />
      <Work />
      <Achievements />
      <Footer />
      {/* <div className="title_text">Hey, I&lsquo;m Daniel</div>
      <Button type="primary" className="large_button">
        Resume
      </Button>
      <Button type="primary" ghost className="large_button">
        Contact
      </Button>
      <div className="large_secondary_text">
        I’m a developer from Waterloo with a passion for software development and problem solving.
        I’m currently a student at Sir John A. Macdonald S.S. pursuing a career in computer science.
      </div>
      <div className="large_subheading_text">About Me</div>
      <div className="small_subheading_text">Visionary Fellowship</div>
      <div className="small_secondary_subheading_text">HTML</div>
      <div className="small_secondary_text">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
        labore et dolore magna aliqua. Tempor orci eu lobortis elementum nibh tellus molestie.
      </div>
      <Button type="primary" className="small_button">
        Learn More
      </Button> */}
    </div>
  );
}

export default App;
