import "./App.css";
import Clients from "./components/Clients";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import Services from "./components/Services";
import Team from "./components/Team";
import WhyUs from "./components/WhyUS";
import News from "./components/News";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="App font-tajwal">
      <Navbar />
      <Hero />
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
