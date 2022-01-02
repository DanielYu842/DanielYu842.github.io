import React, { Suspense, lazy } from "react";
import AOS from "aos";

// import { Hero, About, Skills, Work, Achievements, Footer } from "./Components";
import { Loading } from "./Components";

import "./styles.less";
import "./App.less";
import "aos/dist/aos.css";

const Hero = lazy(() => import("./Components/Hero/Hero"));
const About = lazy(() => import("./Components/About/About"));
const Currently = lazy(() => import("./Components/Currently/Currently"));
const Skills = lazy(() => import("./Components/Skills/Skills"));
const Work = lazy(() => import("./Components/Work/Work"));
const Achievements = lazy(() => import("./Components/Achievements/Achievements"));
const Footer = lazy(() => import("./Components/Footer/Footer"));

AOS.init();

function App() {
  React.useEffect(() => {
    AOS.init();
    AOS.refresh();
  }, []);
  return (
    <div className="App">
      <Suspense fallback={<Loading />}>
        <Hero />
        <About />
        <Currently />
        <Skills />
        <Work />
        <Achievements />
        <Footer />
      </Suspense>
    </div>
  );
}

export default App;
