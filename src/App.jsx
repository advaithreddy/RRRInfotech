import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Footer from "./components/Footer";
// import Header from "./components/Header";
import pages from "./pages/pages";
import ScrollToTop from "./components/ScrollToTop";
import ScrollToTopButton from "./components/ScrollToTopButton";

const { Team, About, Home, Services, Industries, PandP, Contact } = pages;

function App() {
  return (
    <Router>
      {/* <Header /> */}
      <ScrollToTop/>
      <Routes>
        <Route path="/" element={<Home />} /> 
        <Route path="/home" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/team" element={<Team />} />
        <Route path="/services" element={<Services />} />
        <Route path="/industries" element={<Industries />} />
        <Route path="/privacyandpolicy" element={<PandP />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
      <Footer />
      <ScrollToTopButton/>
    </Router>
  );
}

export default App;