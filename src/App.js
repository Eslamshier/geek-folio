import React from "react";
import "./App.css";
import Header from "./components/header/Header";
import Nav from "./components/navbar/Nav";
import About from "./components/about/About";
import Services from "./components/services/Services";
import Testimonials from "./components/testimonials/Testimonials";
import Blog from "./components/blog/Blog";
import Contact from "./components/contact/Contact";
import Footer from "./components/footer/Footer";

function App() {
  return (
    <div sx={{ position: "relative" }}>
      <Nav />
      <Header />
      <About />
      <Services />
      <Testimonials />
      <Blog />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
