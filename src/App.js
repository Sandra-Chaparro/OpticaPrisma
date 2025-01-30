import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import Header from "./Components/Header/Header";
import Homepage from "./HomePage/Homepage";
import Footer from "./Components/Footer/Footer";
import ScrollToTop from "./ScrollToTop";
import LentesGraduados from "./Pages/LentesGraduados/LentesGraduados";
import LentesContacto from "./Pages/LentesContacto/LentesContacto";
import LentesDeSol from "./Pages/LentesDeSol/LentesDeSol";
import LentesDeNinos from "./Pages/LentesDeNinos/LentesDeNinos";

function App() {
  return (
    <Router>
      <ScrollToTop /> {/* This ensures scrolling to the top when the route changes */}
      <Header />
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/lentes-graduados" element={<LentesGraduados />}/>
        <Route path="/lentes-de-contacto" element={<LentesContacto />}/>
        <Route path="/lentes-de-sol" element={<LentesDeSol />}/>
        <Route path="/lentes-de-ninos" element={<LentesDeNinos />}/>
      </Routes>
      
      <Footer />
    </Router>
  );
}

export default App;
