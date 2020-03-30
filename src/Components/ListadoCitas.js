import React, {Fragment} from 'react';

const ListadoCitas = ({cita, eliminarCita}) => {

    return ( 
        <Fragment>
            <div className="cita">
                <p>Mascota: <span>{cita.mascota}</span></p>
                <p>Propietario: <span>{cita.propietario}</span></p>
                <p>Fecha: <span>{cita.fecha}</span></p>
                <p>Hora: <span>{cita.hora}</span></p>
                <p>Sintomas: <span>{cita.sintomas}</span></p>
                <button
                    className="button eliminar u-full-width"
                    onClick={ () => eliminarCita(cita.id)}
                >Eliminar</button>
            </div>
        </Fragment>
     );
}
 
export default ListadoCitas;