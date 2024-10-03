import { useState } from "react";
import { HeroSection } from "./components/HeroSection";
import { Routes } from "react-router-dom";
import { Navbar } from "./components/Navbar";
import { WhyUs } from "./components/WhyUs";

function App() {
  return (
    <>
      <Navbar/>
      <HeroSection />
      <WhyUs/>
      <Routes></Routes>
    </>
  );
}

export default App;
