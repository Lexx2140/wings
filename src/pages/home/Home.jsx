import React from "react";

import Welcome from "./welcome/Welcome";
import About from "./about/About";
import Projects from "./projects/Projects";
import Help from "./help/Help";
import Support from "../../components/support/Support";
import News from "./news/News";


const HomePage = (props) => {
  return (
    <>
      <Welcome />
      <About />
      <Projects />
      <Help />
      <Support></Support>
      <News></News>
    </>
  );
};

export default HomePage;
