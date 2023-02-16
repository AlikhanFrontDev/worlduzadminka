import { Routes, Route } from "react-router-dom";
import "./App.css";
import Navbar from "./components/navbar";
import Sidebar from "./components/sidebar";
import Countries from "./pages/Countries";
import Fields from "./pages/Fields";
import Universities from "./pages/Universities";

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Countries />} />
        <Route path="/universities" element={<Universities />} />
        <Route path="/fields" element={<Fields />} />
      </Routes>
    </div>
  );
}

export default App;
