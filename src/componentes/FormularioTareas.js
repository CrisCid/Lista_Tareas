import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlusSquare } from '@fortawesome/free-solid-svg-icons';
import { v4 as uuidv4 } from 'uuid';

const FormularioTareas = ({ tareas, cambiarTareas }) => {
    const [inputTarea, cambiarInputTarea] = useState('');

    // funcion para que al momento de escribir vaya tomando letra por letra
    const handleInput = (e) => {
        cambiarInputTarea(e.target.value);
    }

    // aca al hacer click en el boton, manda lo que esta dentro de la funcion
    const handleSubmit = (e) => {
        e.preventDefault();
        cambiarTareas(
            [
                ...tareas,
                {
                    id: uuidv4(),
                    texto: inputTarea,
                    completada: false
                }
            ]
        );
        cambiarInputTarea('');
    }

    return (
        <form action='' className='formulario-tareas' onSubmit={handleSubmit}>
            <input
                // si es imput siempre debera ser tipo texto
                type='text'
                // para css
                className='formulario-tareas__input'
                // para que se vea gris el texto
                placeholder='Escribe una tarea'
                // asignarle un valor
                value={inputTarea}
                // ejecutar una funcion

                onChange={(e) => handleInput(e)}
            />
            <button
                type='submit'
                className='formulario-tareas__btn'
            >
                <FontAwesomeIcon
                    icon={faPlusSquare}
                    className='formulario-tareas__icono-btn'
                />
            </button>
        </form>
    );
}

export default FormularioTareas;