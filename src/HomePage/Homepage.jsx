import React from "react";

import "./Homepage.css";
import HeroSection from "./HeroSection/HeroSection";
import ServicesSection from "./ServicesSection/ServicesSection";
import ReviewsSection from "./ReviewsSection/ReviewsSection";
import ContactUsSection from "./BrandsSection/BrandsSection";

const Homepage = () => {

  return (
    <main className="homepage">
      <section id="heroSection">
        <HeroSection />  
      </section>
      <section id="servicesSection">
        <ServicesSection />     
      </section>
      <section id="reviewsSection">
        <ReviewsSection />
      </section>
      <section id="brandsSection">
        <ContactUsSection />
      </section>  
    </main>

  );
};

export default Homepage;
