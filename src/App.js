import "./styles/main.scss";
import Landing from "./pages/Landing";
import Navbar from "./components/Navbar";
import { useEffect, useState } from "react";
import Entrance from "./components/Entrance";
import Footer from "./components/Footer";
import Brands from "./pages/Brands";
import Skills from "./pages/Skills";
import About from "./pages/About";
import Projects from "./pages/Projects";
import FAQs from "./pages/FAQs";

const App = () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 5000);
  }, []);

  return (
    <div className="App" id="app">
      {isLoading ? (
        <Entrance />
      ) : (
        <>
          <Navbar />
          <div className="container">
            <Landing />
          </div>
          <About />
          <Skills />
          <Projects />
          <Brands />
          <FAQs />
          <Footer />
        </>
      )}
    </div>
  );
};

export default App;
