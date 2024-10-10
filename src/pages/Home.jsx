import React, { useEffect } from "react";
import { HeroSection } from "../components/HeroSection";
import { WhyUs } from "../components/WhyUs";
import { Testimonial } from "../components/Testimonial";
import { Newsletter } from "../components/Newsletter";
import { TrendingCars } from "../components/TrendingCars";

export const Home = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div>
      <HeroSection />
      <WhyUs />
      <TrendingCars />
      <Newsletter />
      <Testimonial />
    </div>
  );
};
