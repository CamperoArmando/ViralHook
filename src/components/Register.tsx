import { useState } from "react";
import { supabase } from "../lib/supabase";

// Componente de registro de usuario
export default function Register() {

  // Estados locales para input de email y contraseña
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  // Función que maneja el registro con Supabase
  const handleRegister = async () => {
    const { error } = await supabase.auth.signUp({
      email,
      password,
    });

    if (error) {
      // Mostrar alerta al usuario si hay error al registrar
      alert(error.message);
    } else {
      // Confirmación de registro exitoso
      alert("Usuario registrado");
    }
  };

  return (
    <div className="min-h-screen bg-gray-100">

      {/* Encabezado visual */}
      <header className="bg-gradient-to-r from-blue-600 to-blue-500 text-white py-8 text-center">
        <h1 className="text-3xl font-bold">⚡ ViralHook</h1>
        <p className="text-sm opacity-90">
          Genera ganchos irresistibles para tus videos
        </p>
      </header>

      <div className="flex justify-center mt-16">
        <div className="w-[420px]">

          <h2 className="text-2xl text-center mb-8">Regístrate</h2>

          {/* Campo de correo electrónico */}
          <div className="mb-6">
            <label className="block mb-2 text-sm">Correo Electrónico</label>
            <input
              type="email"
              className="w-full border border-gray-400 p-2"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>

          {/* Campo de contraseña */}
          <div className="mb-6">
            <label className="block mb-2 text-sm">Contraseña</label>
            <input
              type="password"
              className="w-full border border-gray-400 p-2"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>

          {/* Checkbox de términos */}
          <div className="flex items-center gap-2 mb-8 text-sm">
            <input type="checkbox" />
            <span>Acepto Términos y Condiciones</span>
          </div>

          {/* Botón de registro */}
          <button
            onClick={handleRegister}
            className="w-full bg-blue-600 text-white py-3 font-semibold"
          >
            Registrarse
          </button>

        </div>
      </div>
    </div>
  );
}