// Importa la configuración base recomendada de ESLint para JavaScript
import js from '@eslint/js';

// Importa variables globales predefinidas (por ejemplo, window, document, etc.)
import globals from 'globals';

// Importa el plugin para validar las reglas de los hooks de React
import reactHooks from 'eslint-plugin-react-hooks';

// Importa el plugin para soportar React Fast Refresh (recarga en caliente)
import reactRefresh from 'eslint-plugin-react-refresh';

// Importa utilidades de ESLint para trabajar con TypeScript
import tseslint from 'typescript-eslint';

// Exporta la configuración de ESLint utilizando la función config de typescript-eslint
export default tseslint.config(

  // Configuración global: carpetas o archivos que se ignorarán
  { 
    ignores: ['dist'] // Ignora la carpeta de build (archivos compilados)
  },

  {
    // Extiende configuraciones recomendadas
    extends: [
      js.configs.recommended,            // Reglas recomendadas para JavaScript
      ...tseslint.configs.recommended    // Reglas recomendadas para TypeScript
    ],

    // Define a qué archivos se aplicará esta configuración
    files: ['**/*.{ts,tsx}'], // Solo archivos TypeScript y TSX (React)

    // Opciones del lenguaje
    languageOptions: {
      ecmaVersion: 2020,      // Versión de ECMAScript (JS moderno)
      globals: globals.browser, // Variables globales del navegador (window, document, etc.)
    },

    // Plugins adicionales que se usarán
    plugins: {
      'react-hooks': reactHooks,     // Plugin para reglas de hooks de React
      'react-refresh': reactRefresh, // Plugin para Fast Refresh
    },

    // Reglas personalizadas
    rules: {
      // Incluye las reglas recomendadas del plugin de React Hooks
      ...reactHooks.configs.recommended.rules,

      // Regla para asegurar que solo se exporten componentes válidos para Fast Refresh
      'react-refresh/only-export-components': [
        'warn', // Muestra una advertencia (no error)
        { 
          allowConstantExport: true // Permite exportar constantes además de componentes
        },
      ],
    },
  }
);