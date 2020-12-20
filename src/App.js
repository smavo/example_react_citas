import React, { Fragment, useState, useEffect } from 'react';
import Form from './Components/Form';
import TareasList from './Components/Tarea';


function App() {

  let tareasFirst = JSON.parse(localStorage.getItem('tareas'));

  if (!tareasFirst) {
    tareasFirst = [];
  }

  // Arreglo  de tareas
  const [tareas, guardarTareas] = useState(tareasFirst);

  useEffect ( () => {
    let tareasFirst = JSON.parse(localStorage.getItem('tareas'));

    if (tareasFirst) {
      localStorage.setItem('tareas', JSON.stringify(tareas));
    } else {
      localStorage.setItem('tareas', JSON.stringify([]));
    }
  }, [tareas])

  // Funcion que toma las tareas y agrega nuevas tareas
  const crearTarea = (tarea) => {
    //console.log(tarea)
    guardarTareas([...tareas, tarea ])
  }

  // Función que elimina una tarea por su id
  const eliminarTarea = (id) => {
    const nuevasTareas = tareas.filter(cita => cita.id !== id);
    guardarTareas(nuevasTareas);
  }

  return (
    <Fragment>
      <h2>Administrador de Tareas</h2>
      <div className="container">
        <div className="row">
          <div className="one-half column">
            <Form
              crearTarea={crearTarea}
            />
          </div>
          <div className="one-half column">
            <h3>Lista de Tareas</h3>
            {tareas.length === 0
              ? <p>No hay Tareas registradas</p>
              : tareas.map(tarea => (
                <TareasList
                  key={tarea.id}
                  tarea={tarea}
                  eliminarTarea={eliminarTarea}
                />
              ))
            }
          </div>
        </div>
      </div>
    </Fragment>
  );
}

export default App;
