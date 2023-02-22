import './App.css';
import FormularioTareas from './componentes/FormularioTareas';
import Header from './componentes/header';
import React, { useState, useEffect } from 'react';
import ListaTareas from './componentes/ListaTareas';

const App = () => {
  // queremos acceder a localstorage, al item 'tareas' 
  const tareasGuardadas =
    localStorage.getItem('tareas') ?
      JSON.parse(localStorage.getItem('tareas')) //si hay algun elemento entonces sera igual a localstorage y lo transformamos a arreglo 
      : []; //si no hay  algun elemento entonces retorna nada
  // Accedemos a localstorage y copmprobamos si mostrarCompletadas es null
  let configMostrarCompletadas = '';
  if (localStorage.getItem('mostrarCompletadas') === null){
    configMostrarCompletadas= true;
  }else{
    configMostrarCompletadas= localStorage.getItem('mostrarCompletadas') ==='true';
  }


  const [tareas, cambiarTareas] = useState(tareasGuardadas);



  useEffect(() => {
    // Codigo
    localStorage.setItem('tareas', JSON.stringify(tareas));
  }, [tareas]);
  // primero mostrar o no las tardes, segundo campo para cambiar el mostrar las tareas completadas
  const [mostrarCompletadas, cambiarMostarCompletadas] = useState(configMostrarCompletadas);

  useEffect(() => {
    // Codigo
    localStorage.setItem('mostrarCompletadas', mostrarCompletadas.toString());
  }, [mostrarCompletadas]);
  // useEffect(()=>{
  //   localStorage.setItem('mostrarCompletadas',mostrarCompletadas.toString())
  // },[mostrarCompletadas]);

  console.log(tareas);

  return (
    <div className='contenedor'>
      <Header
        mostrarCompletadas={mostrarCompletadas}
        cambiarMostarCompletadas={cambiarMostarCompletadas}
      />
      <FormularioTareas tareas={tareas} cambiarTareas={cambiarTareas} />
      {/* se le agrega la propiedad tareas para poder usar la lista de arriba en el componente listatareas */}
      <ListaTareas
        tareas={tareas}
        cambiarTareas={cambiarTareas}
        mostrarCompletadas={mostrarCompletadas}
      />
    </div>
  );
}

export default App;
