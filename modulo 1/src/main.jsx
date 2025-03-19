
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'

//createRoot es una funcion a la que le pasamos el Elemento del DOM donde queremos renderizar nuestra aplicacion

createRoot(
  document.getElementById('root')
).render(

  <App />

)
