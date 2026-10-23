import { useEffect } from "react";
import { Routes, Route, useLocation } from "react-router-dom";
import Home from "../pages/home";
import About from "../pages/about";
import Contact from "../pages/contactpage";
import Services from "../pages/servicepage";
import WhatsAppFloat from "../components/WhatsAppFloat";

// Reset scroll on route change (but let #hash links handle themselves).
const ScrollToTop = () => {
  const { pathname, hash } = useLocation();
  useEffect(() => {
    if (!hash) window.scrollTo(0, 0);
  }, [pathname, hash]);
  return null;
};

const Routing = () => (
  <>
    <ScrollToTop />
    <WhatsAppFloat />
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="/services" element={<Services />} />
    </Routes>
  </>
);

export default Routing;
