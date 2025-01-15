import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import Header from "./Components/Header/Header";
import Homepage from "./HomePage/Homepage";
import Footer from "./Components/Footer/Footer";
import ServicesPage from "./Pages/Services/ServicesPage";
import ScrollToTop from "./ScrollToTop";

function App() {
  return (
    <Router>
      <ScrollToTop /> {/* This ensures scrolling to the top when the route changes */}
      <Header />
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/Services" element={<ServicesPage />}/>
      </Routes>
      
      <Footer />
    </Router>
  );
}

export default App;
