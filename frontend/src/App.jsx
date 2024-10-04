import { useState, useEffect } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch('http://localhost:3000/api/tarea')
      .then(response => response.json())
      .then(data => setData(data));
  
    return () => {
      console.log('Componente desmontado');
    };
  }, []);

  return (
    <div>
      <h1>Datos obtenidos de la API</h1>
      <ul>
        {data}
      </ul>
    </div>
  )
}

export default App
