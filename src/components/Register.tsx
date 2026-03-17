import { useState } from "react";
import { supabase } from "../lib/supabase";

export default function Register() {

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleRegister = async () => {
    const { error } = await supabase.auth.signUp({
      email,
      password,
    });

    if (error) {
      alert(error.message);
    } else {
      alert("Usuario registrado");
    }
  };

  return (
    <div className="min-h-screen bg-gray-100">

      <header className="bg-gradient-to-r from-blue-600 to-blue-500 text-white py-8 text-center">
        <h1 className="text-3xl font-bold">⚡ ViralHook</h1>
        <p className="text-sm opacity-90">
          Genera ganchos irresistibles para tus videos
        </p>
      </header>

      <div className="flex justify-center mt-16">
        <div className="w-[420px]">

          <h2 className="text-2xl text-center mb-8">Regístrate</h2>

          <div className="mb-6">
            <label className="block mb-2 text-sm">Correo Electrónico</label>
            <input
              type="email"
              className="w-full border border-gray-400 p-2"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>

          <div className="mb-6">
            <label className="block mb-2 text-sm">Contraseña</label>
            <input
              type="password"
              className="w-full border border-gray-400 p-2"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>

          <div className="flex items-center gap-2 mb-8 text-sm">
            <input type="checkbox" />
            <span>Acepto Términos y Condiciones</span>
          </div>

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