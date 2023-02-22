import React, { useState } from 'react';
// importamos las librerias de los iconos
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// aca agregamos el icono que elegiremos
import { faCheckSquare, faEdit, faTimes,faSquare } from '@fortawesome/free-solid-svg-icons';

// aca accedemos a tarea de ListaTarea que a la vez esta en app
const Tarea = ({ tarea,toggleCompletada,editarTarea,borrarTarea }) => {
    const [editandoTarea, cambiarEditandoTareas] = useState(false);
    const [nuevaTarea,cambiarNuevaTarea] = useState(tarea.texto);
    
    // es una funcion que se ejecuta cuando se presiona el boton de actualizar
    // o se presioina enter
    const handleSubmit = (e) =>{
        e.preventDefault();
        editarTarea(tarea.id, nuevaTarea);
        cambiarEditandoTareas(false);

    }
    
    return (

        <li className='lista-tareas__tarea'>
            {/* llamamos la funcion de iconos*/}
            <FontAwesomeIcon
                //icon sera igual al icono que elegimos con anterioridad
                icon={tarea.completada ? faCheckSquare : faSquare}
                // aca se le agrega el estilo css
                className='lista-tareas__icono lista-tareas__icono-check'
                // al hacer click ejecutara la funcion toggleCompletada la cuale esta
                // en el componente ListaTareas.js
                onClick={() =>toggleCompletada(tarea.id)}
            />
            <div className='lista-tareas__texto'>
                {editandoTarea ?
                    <form action='' className='formulario-editar-tarea' onSubmit={handleSubmit}>
                        <input
                            type="text"
                            className='formulario-editar-tarea__input'
                            value={nuevaTarea}
                            onChange={(e)=>cambiarNuevaTarea(e.target.value)}
                        />
                        <button
                            type='submit'
                            className='formulario-editar-tarea__btn'
                        >
                            Actualizar
                        </button>

                    </form>
                    : tarea.texto
                }

            </div>
            <div className='lista-tareas__contenedor-botones'>
                <FontAwesomeIcon
                    icon={faEdit}
                    className='lista-tareas__icono lista-tareas__icono-accion'
                    onClick={()=>cambiarEditandoTareas(!editandoTarea)}
                />
                <FontAwesomeIcon
                    icon={faTimes}
                    className='lista-tareas__icono lista-tareas__icono-accion'
                    onClick={()=>borrarTarea(tarea.id)}
                />
            </div>

        </li>
    );
}

export default Tarea;