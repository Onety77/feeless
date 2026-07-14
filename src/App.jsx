import React, { useEffect } from "react";
import { Routes, Route, useLocation } from "react-router-dom";
import Nav from "./components/Nav.jsx";
import Footer from "./components/Footer.jsx";
import Confetti from "./components/Confetti.jsx";
import Home from "./pages/Home.jsx";
import Lore from "./pages/Lore.jsx";

function ScrollToTop() {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
}

export default function App() {
  return (
    <div className="feeless-app">
      <ScrollToTop />
      <Nav />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/lore" element={<Lore />} />
      </Routes>
      <Footer />
      <Confetti />
    </div>
  );
}
