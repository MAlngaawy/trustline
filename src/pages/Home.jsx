import react from "react";
import Clients from "../components/Clients";
import Hero from "../components/Hero";
import Navbar from "../components/Navbar";
import Services from "../components/Services";
import Team from "../components/Team";
import WhyUs from "../components/WhyUS";
import News from "../components/News";
import Footer from "../components/Footer";
import dark from "../components/assets/dark-hero.png";

export const Home = () => {
  return (
    <div className="home">
      <div
        className="top-section relative"
        style={{ backgroundImage: `url(${dark})` }}
      >
        <div className="absolute top-0 left-0 h-full w-full bg-black opacity-60 md:opacity-80"></div>
        <Navbar />
        <Hero />
      </div>
      <WhyUs />
      <Services />
      <Team />
      <Clients />
      <News />
      <Footer />
    </div>
  );
};
