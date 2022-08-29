import "./App.css";
import Clients from "./components/Clients";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import Services from "./components/Services";
import Team from "./components/Team";
import WhyUs from "./components/WhyUS";
import News from "./components/News";
import Footer from "./components/Footer";
import dark from "./components/assets/dark-hero.png";

function App() {
  return (
    <div className="App font-tajwal">
      <div
        className="top-section relative"
        style={{ backgroundImage: `url(${dark})` }}
      >
        <div className="absolute top-0 left-0 h-full w-full bg-black opacity-90"></div>
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
}

export default App;
