import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Footer from "./components/Footer";
import Header from "./components/Header";
import pages from "./pages/pages";
const { Team, About, Home, Services, Industries, PandP } = pages;

function App() {
  return (
    <Router>
      {/* <Header /> */}
      <Routes>
        <Route path="/home" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/team" element={<Team />} />
        <Route path="/services" element={<Services />} />
        <Route path="/industries" element={<Industries />} />
        <Route path="/privacyandpolicy" element={<PandP />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;