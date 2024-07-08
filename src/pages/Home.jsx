import React from "react";
import Banner from "../component/Banner";
import Introducing from "../component/Introducing";
import Community from "../component/Community";
import Howtobuy from "../component/Howtobuy";
import Bugsloves from "../component/Bugsloves";
import Roadmap from "../component/Roadmap";
import Tokenomics from "../component/Tokenomics";

const Home = () => {
  return (
    <>
      <Banner />
      <Introducing />
      <Community />
      <Howtobuy />
      <Bugsloves />
      <Roadmap />
      <Tokenomics />
    </>
  );
};

export default Home;
