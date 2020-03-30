import React, { Fragment, useState} from 'react';
import { v4 as uuidv4 } from 'uuid';

const Formulario = ({crearCita}) => {

    const [cita, actualizarCita] = useState({
        mascota: '',
        propietario: '',
        fecha: '',
        hora: '',
        sintomas: '',
        mostrar: false
    });

    const [ error, actualizarError] = useState(false);

    const actualizarState = e => {
        actualizarCita({
            ...cita,
            [e.target.name] : e.target.value
        });            
    }

    //extraemos los valores del objeto
    const { mascota, propietario, fecha, hora, sintomas } = cita;

    //cuando el usuario preciona click al botn de guardar cita
    const guardarCita = e => {
        e.preventDefault();

        //validar form
        if( mascota.trim() == '' || propietario.trim() == '' || fecha.trim() == '' || hora.trim() == '' || sintomas.trim() == '' ){
            actualizarError(true);
            return;
        }

        //eliminamos mensaje de errores
        actualizarError(false);

        //asignar idd
        cita.id = uuidv4();

        //guardando cita
        crearCita(cita);

        // limpiando los campos
        actualizarCita({
            mascota: '',
            propietario: '',
            fecha: '',
            hora: '',
            sintomas: '',
            mostrar: false
        });
        
    }
    
    return ( 
        <Fragment>
            <h1>Crear Cita</h1>

            { error ? <p className="alerta-error">Todos los campos son obligatorios</p> : null}

            <form
                onSubmit={guardarCita}
            >
                <label>Nombre de la Mascota</label>
                <input 
                    type="text"
                    name="mascota"
                    className="u-full-width"
                    placeholder="Nombre Mascota"
                    onChange={actualizarState}
                    value={mascota}
                />
                <label>Nombre del Dueño</label>
                <input 
                    type="text"
                    name="propietario"
                    className="u-full-width"
                    placeholder="Nombre Dueño Mascota"
                    onChange={actualizarState}
                    value={propietario}
                />
                <label>Fecha Consulta</label>
                <input 
                    type="date"
                    name="fecha"
                    className="u-full-width"
                    onChange={actualizarState}
                    value={fecha}
                />
                <label>Hora Consulta</label>
                <input 
                    type="time"
                    name="hora"
                    className="u-full-width"
                    onChange={actualizarState}
                    value={hora}
                />
                <label>Sintomas Consulta</label>
                <textarea
                    name="sintomas"
                    className="u-full-width"
                    onChange={actualizarState}
                    value={sintomas}
                ></textarea>

                <button
                    type="submit"
                    className="u-full-width button-primary"
                >Agregar Cita</button>
            </form>
        </Fragment>
     );
}
 
export default Formulario;