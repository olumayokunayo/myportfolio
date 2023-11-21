import React from "react";
import Banner from "../banner/Banner";
import About from "../about/About";
import Services from "../serviceDiv/Services";
import Skills from "../skills/Skills";
import Contact from "../contact/Contact";
import Footer from "../footer/Footer";

const Home = () => {
  return (
    <section id="home">
      <Banner />
      <About />
      <Services />
      <Skills />
      <Contact />
      <Footer />
    </section>
  );
};

export default Home;
