import React from "react";

import "./Homepage.css";
import HeroSection from "./HeroSection/HeroSection";
import ServicesSection from "./ServicesSection/ServicesSection";
import PortfolioSection from "./PortfolioSection/PortfolioSection";
import ContactUsSection from "./ContactUsSection/ContactUsSection";
import Layout from "./../Layout";

const Homepage = () => {

  return (

  <Layout>
    <main className="homepage">
      <section id="heroSection">
        <HeroSection />  
      </section>
      <section id="servicesSection">
        <ServicesSection />     
      </section>
      <section id="portfolioSection">
        <PortfolioSection />
      </section>
      <section id="contactUsSection">
        <ContactUsSection />
      </section>  
    </main>
    </Layout>
  );
};

export default Homepage;
