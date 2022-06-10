import React from "react";
import Contact from "./Contact";
import Footer from "./Footer";
import Header from "./Header";
import Skills from "./Skills";

const Home = () => {
  //<img src='https://i.ibb.co/hKb6943/react-mmh.gif'/>
  return (
    <div>
      <Header />
      <Skills />
      <Contact/>
      <Footer />
    </div>
  );
};

export default Home;
