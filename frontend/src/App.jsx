import ActualizacionTareas from "./components/actualizacion";
import Busqueda from "./components/barraBusqueda";
import BtnCrear from "./components/btnCrear";
import Ingreso from "./components/inputNew";
import ListTask from "./components/listTask";

function App(){

  return(
    <>
      <div className="">
        <h1>Create New Task</h1>
        <h2>Task Name</h2>
        <Ingreso/>
        <BtnCrear/>
      </div>
      <div>
        <h1>Your Tasks</h1>
        <ActualizacionTareas/>
        <Busqueda/>
        <ListTask/>
      </div>
    </>
  )
}

















// import { useState, useEffect } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
// import './App.css'

// function App() {
//   const [data, setData] = useState([]);

//   useEffect(() => {
//     fetch('http://localhost:3000/api/tarea')
//       .then(response => response.json())
//       .then(data => setData(data));
  
//     return () => {
//       console.log('Componente desmontado');
//     };
//   }, []);

//   return (
//     <div>
//       <h1>Datos obtenidos de la API</h1>
//       <ul>
//         {data.map(item => <li key={item.id}>{item.title}</li>)}
//       </ul>
//     </div>
//   )
// }

export default App
