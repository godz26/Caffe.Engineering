import "./App.css";
import { Header } from "./components/Header";
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
      <Header />
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
