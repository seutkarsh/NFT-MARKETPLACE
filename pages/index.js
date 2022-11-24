import React from "react";

//INTERNAL IMPORTS
import Style from "../styles/index.module.css";
import { HeroSection, Service } from "../components/componentIndex";

const Home = () => {
  return (
    <div className={Style.homepage}>
      <HeroSection />
      <Service />
    </div>
  );
};

export default Home;
