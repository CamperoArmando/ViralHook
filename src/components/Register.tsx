// Importa el hook useState para manejar estado local
import { useState } from "react";

// Importa la configuración de Supabase para autenticación
import { supabase } from "../lib/supabase";

// Componente de registro de usuario
export default function Register() {

  // Estados locales para input de email y contraseña
  const [email, setEmail] = useState("");       // Guarda el correo ingresado
  const [password, setPassword] = useState(""); // Guarda la contraseña ingresada

  // Función que maneja el registro con Supabase
  const handleRegister = async () => {

    // Llama a Supabase para registrar un nuevo usuario
    const { error } = await supabase.auth.signUp({
      email,
      password,
    });

    // Si ocurre un error durante el registro
    if (error) {
      // Mostrar mensaje de error al usuario
      alert(error.message);
    } else {
      // Confirmación de registro exitoso
      alert("Usuario registrado");
    }
  };

  return (
    // Contenedor principal con altura mínima de pantalla
    <div className="min-h-screen bg-gray-100">

      {/* Encabezado visual */}
      <header className="bg-gradient-to-r from-blue-600 to-blue-500 text-white py-8 text-center">
        
        {/* Título principal */}
        <h1 className="text-3xl font-bold">⚡ ViralHook</h1>

        {/* Subtítulo */}
        <p className="text-sm opacity-90">
          Genera ganchos irresistibles para tus videos
        </p>
      </header>

      {/* Contenedor centrado del formulario */}
      <div className="flex justify-center mt-16">
        <div className="w-[420px]">

          {/* Título del formulario */}
          <h2 className="text-2xl text-center mb-8">Regístrate</h2>

          {/* Campo de correo electrónico */}
          <div className="mb-6">
            <label className="block mb-2 text-sm">Correo Electrónico</label>
            <input
              type="email" // Validación básica del navegador
              className="w-full border border-gray-400 p-2"
              value={email} // Valor controlado
              onChange={(e) => setEmail(e.target.value)} // Actualiza el estado
            />
          </div>

          {/* Campo de contraseña */}
          <div className="mb-6">
            <label className="block mb-2 text-sm">Contraseña</label>
            <input
              type="password" // Oculta el texto ingresado
              className="w-full border border-gray-400 p-2"
              value={password} // Valor controlado
              onChange={(e) => setPassword(e.target.value)} // Actualiza el estado
            />
          </div>

          {/* Checkbox de términos y condiciones */}
          <div className="flex items-center gap-2 mb-8 text-sm">
            <input type="checkbox" />
            <span>Acepto Términos y Condiciones</span>
          </div>

          {/* Botón de registro */}
          <button
            onClick={handleRegister} // Ejecuta la función de registro
            className="w-full bg-blue-600 text-white py-3 font-semibold"
          >
            Registrarse
          </button>

        </div>
      </div>
    </div>
  );
}