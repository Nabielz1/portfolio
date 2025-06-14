import React, { useState, useEffect } from "react";
import Loading from "./components/Loading";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Projects from "./components/Projects";
import Skills from "./components/Skills";
import Resume from "./components/Resume";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import "./App.css"; // Import Tailwind CSS

function App() {
  const [loading, setLoading] = useState(true);
  const [fadeOut, setFadeOut] = useState(false);
  const [fadeIn, setFadeIn] = useState(false);

  useEffect(() => {
    // Simulasi loading selama 3 detik
    setTimeout(() => {
      setFadeOut(true); // Aktifkan fade-out pada spinner setelah 3 detik
    }, 3000);

    // Setelah fade-out selesai, set loading menjadi false dan aktifkan fade-in pada konten
    setTimeout(() => {
      setLoading(false); // Konten utama tampil setelah loading selesai
      setFadeIn(true);    // Aktifkan fade-in pada konten utama
    }, 1000); // Delay sedikit setelah fade-out selesai
  }, []);

  return (
    <div>
      {loading ? (
        <div className={`fade-out ${fadeOut ? "opacity-0" : ""}`}>
          <Loading />
        </div>
      ) : (
        <div className={`fade-in ${fadeIn ? "opacity-100" : "opacity-0"}`}>
          <Navbar />
          <Hero />
          <About />
          <Resume />
          <Skills />
          <Projects />
          <Contact />
          <Footer />
        </div>
      )}
    </div>
  );
}

export default App;