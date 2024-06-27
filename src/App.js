import Navbar from "./components/Navbar";
import Intro from "./components/Intro";
import Skill from "./components/Skill";
import Work from "./components/Work";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import { Route, Routes } from "react-router-dom";
function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/" element={<Intro />} />
        <Route path="/home" element={<Intro/>}/>
        <Route path="/about" element={<Skill />} />
        <Route path="/portfolio" element={<Work />} />
        <Route path="/client" element={<Contact />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
