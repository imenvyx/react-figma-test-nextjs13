"use client"
import AboutUs from "./components/AboutUs/AboutUs";
import Hero from "./components/Hero/Hero";
import Services from "./components/ServicesView/Services";
import ServicesProvider from "./contexts/ServicesProvider";

// Import Swiper styles

function App() {
  return (
    <>
      <ServicesProvider>
        <Hero />
        <Services />
        <AboutUs />
      </ServicesProvider>
    </>
  );
}

export default App;
