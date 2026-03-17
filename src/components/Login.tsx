// Importa el hook useState para manejar estado local en el componente
import { useState } from "react";

// Importa Link (para navegación declarativa) y useNavigate (para navegación programática)
import { Link, useNavigate } from "react-router-dom";

// Importa la configuración de Supabase para autenticación
import { supabase } from "../lib/supabase";

// Componente de pantalla de login
export default function Login() {

  // Estados locales para almacenar los valores del formulario
  const [email, setEmail] = useState("");       // Guarda el correo ingresado
  const [password, setPassword] = useState(""); // Guarda la contraseña ingresada

  // Hook de navegación de react-router-dom para redireccionar tras login
  const navigate = useNavigate();

  // Maneja el evento de iniciar sesión
  const handleLogin = async () => {

    // Llamada a Supabase para autenticación con email/contraseña
    const { error } = await supabase.auth.signInWithPassword({
      email,
      password,
    });

    // Si ocurre un error durante la autenticación
    if (error) {
      // Mostrar mensaje de error al usuario
      alert(error.message);
    } else {
      // Redirige a la ruta principal de la aplicación si el login fue exitoso
      navigate("/app");
    }
  };

  return (
    // Contenedor principal con altura mínima de pantalla y fondo gris
    <div className="min-h-screen bg-gray-100">

      {/* Encabezado visual de la aplicación */}
      <header className="bg-gradient-to-r from-blue-600 to-blue-500 text-white py-8 text-center">
        
        {/* Título principal con ícono */}
        <h1 className="text-3xl font-bold flex justify-center items-center gap-2">
          ⚡ ViralHook
        </h1>

        {/* Subtítulo */}
        <p className="text-sm opacity-90">
          Genera ganchos irresistibles para tus videos
        </p>
      </header>

      {/* Contenedor centrado del formulario */}
      <div className="flex justify-center mt-16">
        <div className="w-[420px]">

          {/* Título del formulario */}
          <h2 className="text-2xl text-center mb-8">Iniciar sesión</h2>

          {/* Input de email */}
          <div className="mb-6">
            <label className="block mb-2 text-sm">Correo Electrónico</label>
            <input
              type="email" // Tipo email para validación básica del navegador
              className="w-full border border-gray-400 p-2"
              value={email} // Valor controlado
              onChange={(e) => setEmail(e.target.value)} // Actualiza el estado al escribir
            />
          </div>

          {/* Input de contraseña */}
          <div className="mb-6">
            <label className="block mb-2 text-sm">Contraseña</label>
            <input
              type="password" // Oculta el texto ingresado
              className="w-full border border-gray-400 p-2"
              value={password} // Valor controlado
              onChange={(e) => setPassword(e.target.value)} // Actualiza el estado
            />
          </div>

          {/* Enlace a la pantalla de registro */}
          <p className="text-center text-sm mb-8">
            ¿No tienes cuenta?{" "}
            <Link to="/register" className="text-blue-600">
              Click Aquí
            </Link>
          </p>

          {/* Botón para enviar el formulario */}
          <button
            onClick={handleLogin} // Ejecuta la función de login
            className="w-full bg-blue-600 text-white py-3 font-semibold"
          >
            Iniciar Sesión
          </button>

        </div>
      </div>
    </div>
  );
}