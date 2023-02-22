import React from 'react';
import Tarea from './Tarea';


// La lista va a ser el contenedor
const ListaTareas = ({ tareas, cambiarTareas, mostrarCompletadas }) => {
    const toggleCompletada = (id) => {
        cambiarTareas(tareas.map((tarea) => {
            // ejecutamos codigo por cada tarea
            // si el id de tarea es igual al id que ingresamos entonces
            if (tarea.id === id) {
                // retornamos tarea, con todas sus propiedas pero queremos modificar completada
                // donde completada sera igual (igual se escribe con dos puntos :)
                // sera igual a distinto de !tarea.completada 
                // al usar ! si es true pasara a false, si es false pasara a true
                return { ...tarea, completada: !tarea.completada }
            }
            return tarea;
        }));
    }
    const editarTarea = (id, nuevoTexto) => {
        cambiarTareas(tareas.map((tarea) => {
            if (tarea.id === id) {

                return { ...tarea, texto: nuevoTexto }
            }
            return tarea;
        }));
    }

    const borrarTarea = (id) => {
        // con filter podemos usarlo para borrar datos
        cambiarTareas(tareas.filter((tarea) => {
            // si tarea es diferente, entonces
            if (tarea.id !== id) {
                // retornamos tarea
                return tarea;
            }
            // si no, nada
            return false;
        }));
    }
    return (
        // se le agrega la clase para poder editarlo con css
        <ul className='lista-tareas'>
            {/* de tareas se usa .map para que recorra todas las tareas*/}

            { // asi se revisa, si tareas es mayor a 0 entonces mostrara la lista de tareas
                tareas.length > 0 ? tareas.map((tarea) => {
                    if (mostrarCompletadas) {
                        /* debe retornar algo, en este caso seria un li, con el, dato tarea que esta en app y de esa 
                         funcion extraemos el texto Para que no de error, debe tener un id cada linea de tarea, 
                         asi que se extrae el id asi: tarea.id*/
                        // Retornamos el componente tarea, el cual tendra almacenada las tareas
                        return <Tarea
                            key={tarea.id}
                            //le damos la propiedad tarea para que se pueda usar en el componente Tarea
                            tarea={tarea}
                            toggleCompletada={toggleCompletada}
                            editarTarea={editarTarea}
                            borrarTarea={borrarTarea}
                        />
                        // si tarea.completada es falso entonces
                        // si la tarea no esta completada, la devolvemos
                    }else if(!tarea.completada){
                        return <Tarea
                            key={tarea.id}
                    
                            tarea={tarea}
                            toggleCompletada={toggleCompletada}
                            editarTarea={editarTarea}
                            borrarTarea={borrarTarea}
                        />
                    }
                    // si ya esta completada, no la devolvemos
                    return false;

                })
                    :
                    // si es menor a 0 entonces mostrara el siguiente mensaje
                    <div className='lista-tareas__mensaje'>No hay tareas agregadas</div>

            }
        </ul>
    );
}

export default ListaTareas;