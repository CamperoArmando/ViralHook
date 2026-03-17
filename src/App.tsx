import { Routes, Route } from "react-router-dom";
import Login from "./components/Login";
import Register from "./components/Register";
import GeneratorPage from "./pages/GeneratorPage.tsx";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Login />} />
      <Route path="/register" element={<Register />} />
      <Route path="/app" element={<GeneratorPage />} />
    </Routes>
  );
}

export default App;