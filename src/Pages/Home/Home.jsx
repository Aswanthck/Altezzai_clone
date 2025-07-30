import React from "react";
import "../../Component/Contacthero/Contacthero.css";
import Hero from "../../Component/Hero/Hero";
import Serv from "../../Component/Serv/Serv";
import Contacthero from "../../Component/Contacthero/Contacthero";
import Teamhero from "../../Component/Teamhero/Teamhero";
import Workhero from "../../Component/Workhero/Workhero";

const Home = () => {
  return (
    <div>
      <Hero />
      <Serv />
      <Teamhero />
      <Workhero />
      <Contacthero />
      
    </div>
  );
};

export default Home;
