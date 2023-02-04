import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "../components/Header";
import Footer from "../components/Footer";
import About from "../Pages/About/About";
import Products from "../Pages/Products/Products";
import Services from "../Pages/Services/Services";
import Contact from "../Pages/Services/Contact/Contact";

const MainContainer = () => {
  return (
    <>
      <Router>
        <Header />
        {/* Put something in here */}

        <Routes>
          <Route path="about" element={<About />} />
          <Route path="products" element={<Products />} />
          <Route path="services" element={<Services />} />
          <Route path="contact" element={<Contact />} />
        </Routes>

        <Footer />
      </Router>
    </>
  );
};

export default MainContainer;
