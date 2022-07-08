import { Route, Routes, useLocation,Navigate } from "react-router-dom";
import "./App.css";
import About from "./components/about/index";
import Home from "./components/home/index";
import Navbar from "./components/navbar/index";
import { AnimatePresence } from "framer-motion";
import Projects from "./components/projects";


const Animated = () => {
  const location = useLocation();
  return (
    <AnimatePresence exitBeforeEnter>
      <Routes location={location} key={location.pathname}>
        <Route path="/" element={<Home />} />

        <Route path="/about" element={<About/>} />

        <Route path="/projects" element={<Projects />} />

        <Route path="/contact" element={<Home />} />
        <Route
        path="/portfolio"
        element={<Navigate to="/" replace />}
    />
      </Routes>
    </AnimatePresence>
  );
};

function App() {
  return (
    <div>
      <Navbar />
      <Animated />
    </div>
  );
}

export default App;
