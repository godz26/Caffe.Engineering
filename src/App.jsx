import "./App.css";
import { Navbar } from "./components/Navbar";
import { Home } from "./components/Home";
import { AboutUs } from "./components/AboutUs";
import { Services } from "./components/Services";
import { Projects } from "./components/Projects";
import { QuickApply } from "./components/QuickApply";
import { Footer } from "./components/Footer";

export const App = () => {
  return (
    <div>
      <Navbar />
      <Home />
      <AboutUs />
      <Services />
      <Projects />
      <QuickApply />
      <Footer />
    </div>
  );
};
