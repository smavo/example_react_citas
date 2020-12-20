
import React, { Fragment, useState } from 'react'
import { v4 as uuidv4 } from 'uuid';
import PropTypes from 'prop-types';

function Form({ crearTarea }) {

    // Crear Tareas
    const [tarea, actualizarTarea] = useState({
        todo: "",
        usuario: "",
        fecha: "",
        hora: "",
        descripcion: ""
    });

    const [error, actualizarError] = useState(false)

    const actualizarState = (e) => {
        actualizarTarea({
            ...tarea,
            [e.target.name]: e.target.value
        })
    }

    const { todo, usuario, fecha, hora, descripcion } = tarea;


    const submitTarea = (e) => {
        e.preventDefault();
        //console.log("enviado formulario");
        //console.log(todo);

        // Validacion de campos
        if (todo.trim() === '' || usuario.trim() === '' || fecha.trim() === '' || hora.trim() === '' || descripcion.trim() === '') {
            //console.log("Los campos estan sin completar");
            actualizarError(true);
            return;
        }

        // Quitar mensaje de error
        actualizarError(false)

        // Asignar ID
        tarea.id = uuidv4();
        //console.log(tarea);

        // Crear Tarea
        crearTarea(tarea)

        // Limpiar Formulario
        actualizarTarea({
            todo: "",
            usuario: "",
            fecha: "",
            hora: "",
            descripcion: ""
        }
        )
    }

    return (
        <Fragment>
            <h3>Crear Tarea</h3>

            <form onSubmit={submitTarea} >

                <label>Tarea</label>
                <input
                    type="text"
                    name="todo"
                    className="u-full-width"
                    placeholder="Ingrese la tarea"
                    onChange={actualizarState}
                    value={todo}
                />

                <label>Usario</label>
                <input
                    type="text"
                    name="usuario"
                    className="u-full-width"
                    placeholder="Nombre del usuario"
                    onChange={actualizarState}
                    value={usuario}
                />

                <label>Fecha</label>
                <input
                    type="date"
                    name="fecha"
                    className="u-full-width"
                    onChange={actualizarState}
                    value={fecha}
                />

                <label>Hora</label>
                <input
                    type="time"
                    name="hora"
                    className="u-full-width"
                    onChange={actualizarState}
                    value={hora}
                />

                <label>Descripcion</label>
                <textarea
                    name="descripcion"
                    className="u-full-width"
                    onChange={actualizarState}
                    value={descripcion}
                ></textarea>

                {error === true
                    ? <p className="alerta-error">Todos los campos son Obligatorios</p>
                    : null
                }

                <button type="submit"
                    className="u-full-width button-primary"
                >Agregar Tarea
                </button>
            </form>
        </Fragment>
    )
}

Form.propTypes = {
    crearTarea: PropTypes.func.isRequired
}

export default Form
