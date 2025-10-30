import { BrowserRouter as Router, Routes, Route, useLocation } from "react-router-dom";
import Navbar from "./components/layout/Navbar";
import Footer from "./components/layout/Footer";
import Home from "./components/pages/Home";
import About from "./components/pages/About";
import Services from "./components/pages/Services";
import FAQ from "./components/pages/FAQ";
import Contact from "./components/pages/Contact";
import Cursor from "./components/ui/Cursor";
import Breadcrumb from "./components/layout/Breadcrumb";
import ScrollToTop from "./components/ui/ScrollToTop";
import SubscribeSection from "./components/layout/SubscribeSection";

function Layout() {
  const location = useLocation();
  const hideBreadcrumb = location.pathname === "/";

  return (
    <div className="flex flex-col min-h-screen relative overflow-x-hidden">
      <Cursor />
      <Navbar />
      {!hideBreadcrumb && <Breadcrumb />}
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/services" element={<Services />} />
          <Route path="/faq" element={<FAQ />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </main>

      <SubscribeSection />
      <Footer />
    </div>
  );
}


function App() {
  return (
    <Router>
      <Layout />
    </Router>
  );
}

export default App;
