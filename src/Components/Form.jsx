
import React, { Fragment } from 'react'

function Form() {
    return (
        <Fragment>
            <h3>Crear Tarea</h3>
            <form>
                <label>Tarea</label>
                <input
                    type="text"
                    name="tarea"
                    className="u-full-width"
                    placeholder="Ingrese la tarea"
                />
                <label>Usario</label>
                <input
                    type="text"
                    name="usuario"
                    className="u-full-width"
                    placeholder="Nombre del usuario"
                />
                <label>Fecha</label>
                <input
                    type="date"
                    name="fecha"
                    className="u-full-width"
                />
                <label>Hora</label>
                <input
                    type="time"
                    name="hora"
                    className="u-full-width"
                />
                <label>Descripcion</label>
                <textarea
                    name="descripcion"
                    className="u-full-width"
                >
                </textarea>
                <button type="submit"
                className="u-full-width button-primary"
                >Agregar Tarea
                </button>
            </form>
        </Fragment>
    )
}

export default Form
