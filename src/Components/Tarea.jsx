import React from 'react'
import PropTypes from 'prop-types';

function TareasList({tarea,eliminarTarea}) {

    const { todo, descripcion } = tarea;

    return (
        <>
            <div className="tarea">
                <p>Tarea        : <span>{todo}</span> </p>
                <p>Descripcion  : <span>{descripcion}</span> </p>
            </div>

            <button
                className="button-primary  eliminar u-full-width"
                onClick={ () => eliminarTarea(tarea.id)  }
            >Eliminar &times;
            </button>
        </>
    )
}

TareasList.propTypes = {
    tarea: PropTypes.object.isRequired,
    eliminarTarea: PropTypes.func.isRequired
}

export default TareasList;
