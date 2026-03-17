import { Routes, Route } from "react-router-dom";
import Login from "./components/Login";
import Register from "./components/Register";
import GeneratorPage from "./pages/GeneratorPage.tsx";

// Componente principal de la app que define las rutas
function App() {
  return (
    <Routes>
      {/* Ruta principal: pantalla de login */}
      <Route path="/" element={<Login />} />
      {/* Ruta de registro de usuarios */}
      <Route path="/register" element={<Register />} />
      {/* Ruta de la herramienta de generación de hooks */}
      <Route path="/app" element={<GeneratorPage />} />
    </Routes>
  );
}

export default App;