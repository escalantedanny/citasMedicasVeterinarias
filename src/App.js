import React, { Fragment, useState, useEffect } from 'react';
import Formulario from './Components/Formulario';
import ListadoCitas from './Components/ListadoCitas';

function App() {

  // citas en localStorage
  let citasIniciales = JSON.parse(localStorage.getItem('citas'));
  if(!citasIniciales){
    citasIniciales = [];
  }

  // arreglo de cistas
  const [ citas, guardarCitas ] = useState(citasIniciales);

  // use el HOOK useEffect para cuando el state cambia
  useEffect( () => {
    if(citasIniciales){
      localStorage.setItem('citas', JSON.stringify(citas))
    }else {
      localStorage.setItem('citas', JSON.stringify([]))
    }
  }, [citas])

  //leer nueva cita mas la cita que llega
  const crearCita = cita => {
    guardarCitas([
      ...citas,
      cita
    ]);
  }

  const eliminarCita = id => {
    const nuevasCitas = citas.filter( cita => cita.id !== id);
    guardarCitas(nuevasCitas);
  };

  let titulo =  citas.length > 0 ? "ADMINISTRACION DE PACIENTES" : 'NO TIENE CITAS ASIGNADAS';


  return (
    <Fragment>
      
      <div className="container">
        <div className="row">
          <div className="one-half column">
            <Formulario 
              crearCita= {crearCita}
            />
          </div>
          <div className="one-half column">
              <h2>{titulo}</h2>
              { citas.map(cita => (
                  <ListadoCitas 
                    key={cita.id}
                    cita={cita}
                    eliminarCita={eliminarCita}
                  />
              ))}
          </div>     
        </div>
      </div>
    </Fragment>
  );
}

export default App;
