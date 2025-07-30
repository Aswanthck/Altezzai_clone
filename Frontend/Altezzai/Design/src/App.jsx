import React from "react";
import Navbar from "./Component/Navbar/Navbar";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "../src/Pages/Home/Home";
import Abouts from "./Pages/About/Abouts";
import Services from "./Pages/Services/Services";
import Work from "./Pages/Work/Work";
import Team from "./Pages/Team/Team";
import Product from "./Pages/Product/Product";
import Contact from "./Pages/Contact/Contact";
import Footer from "./Component/Footer/Footer";
import whatsapp from "../src/Component/Assets/whatsapp.svg";
import "../src/app.css"

const App = () => {
  return (
    <div>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="about" element={<Abouts />} />
          <Route path="services" element={<Services />} />
          <Route path="work" element={<Work />} />
          <Route path="team" element={<Team />} />
          <Route path="product" element={<Product />} />
          <Route path="contact" element={<Contact />} />
        </Routes>
        <div className="what">
          <img src={whatsapp} alt="" />
        </div>
        <Footer />
      </BrowserRouter>
    </div>
  );
};

export default App;
