import { Routes, Route } from "react-router-dom";
import ParticlesBackground from "./components/main/ParticlesBackground";
import "./App.css"; 
import Home from "./components/index";
import Navbar from "./components/main/NavBar";

function App() {
  return (
    <div className="app-container">
    
      <div className="content-overlay z-20">
        <ParticlesBackground />     
        <Navbar/>
        <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="/about" element={<h1 className="text-4xl font-bold">Página Sobre Mí</h1>} />
        </Routes>
      </div>
    </div>
  );
}

export default App;