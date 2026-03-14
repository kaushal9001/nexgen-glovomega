import React from "react";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./Component/Navbar";
import HomePage from "./Page/HomePage";
import Footer from "./Component/Footer";
import { ReactLenis, useLenis } from "lenis/react";
import TermsConditions from "./Page/TermsConditions";
import PrivacyPolicy from "./Page/PrivacyPolicy";
import Services from "./Page/Services";
import BlogPage from "./Page/BlogPage";
import ContactusPage from "./Page/ContectusPage";
import ScrollToTop from "./Component/ScrollToTop";
import AboutPage from "./Page/AboutPage";

const App = () => {
  const lenis = useLenis((lenis) => {
    // called every scroll
    console.log(lenis);
  });
  return (
    <>
      <ReactLenis root />
      <div className="bg-[#f8f8f8]">
        <Router>
          <ScrollToTop />
          <Navbar />
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/terms-conditions" element={<TermsConditions />} />
            <Route path="/privacy-policy" element={<PrivacyPolicy />} />
            <Route path="/services" element={<Services />} />
            <Route path="/blogs" element={<BlogPage />} />
            <Route path="/contact-us" element={<ContactusPage />} />
            <Route path="/about-us" element={<AboutPage />} />
          </Routes>
          <Footer />
        </Router>
      </div>
    </>
  );
};

export default App;
