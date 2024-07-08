import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Navbar } from "./component/Navbar";
import Home from "./pages/Home";
import { useEffect } from "react";
import Footer from "./component/Footer";
import AOS from "aos";
import "aos/dist/aos.css";
import Buybugs from "./pages/Buybugs";
import { PageNotFound } from "./pages/PageNotFound";

function App() {
  useEffect(() => {
    AOS.init({
      once: true,
    });
  }, []);
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/buy-bugs" element={<Buybugs />} />
        <Route path="*" element={<PageNotFound />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
