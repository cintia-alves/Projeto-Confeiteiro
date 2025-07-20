import { Routes, Route } from "react-router-dom";
import Home from "./Componentes/Home/Home.jsx";
import App from "./App.jsx";

export default function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/app" element={<App />} />
    </Routes>
  );
}
