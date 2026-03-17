import ReactDOM from 'react-dom/client'
import App from './App'
import { BrowserRouter } from 'react-router-dom'
import './index.css'

// Punto de entrada de la aplicación
// Inicializa React en el div con id 'root' de index.html
ReactDOM.createRoot(document.getElementById('root')!).render(
  // Envolvemos la App en BrowserRouter para habilitar routing
  <BrowserRouter>
    <App />
  </BrowserRouter>
)