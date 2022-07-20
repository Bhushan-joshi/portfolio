import { Route, Routes, useLocation, Navigate } from "react-router-dom";
import "./App.css";
import About from "./components/about/index";
import Home from "./components/home/index";
import Navbar from "./components/navbar/index";
import { AnimatePresence } from "framer-motion";
import { Suspense } from "react";
import React from "react";
import Contact from "./components/contact";
import PageNotFound from "./components/404/PageNotFound";
import Loader from "./components/loader";
const Projects = React.lazy(() =>import("./components/projects"));

const Animated = () => {
  const location = useLocation();
  return (
    <AnimatePresence exitBeforeEnter>
      <Routes location={location} key={location.pathname}>
        <Route path="/" element={<Home />} />

        <Route path="/about" element={<About />} />

        <Route
          path="/projects"
          element={
            <Suspense
              fallback={<Loader/>}
            >
              <Projects />
            </Suspense>
          }
        />

        <Route path="/contact" element={<Contact />} />
        <Route path="/portfolio" element={<Navigate to="/" replace />} />
        <Route path="*" element={<PageNotFound />} />
      </Routes>
    </AnimatePresence>
  );
};

function App() {
  return (
    <div className="h-screen w-screen">
      <Navbar />
      <Animated />
    </div>
  );
}

export default App;
