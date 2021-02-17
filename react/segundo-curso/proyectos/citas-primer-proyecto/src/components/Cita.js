import React from 'react';
import PropTypes from 'prop-types';


const  Cita= ({cita, eliminarCita}) => (
    <div className="cita">
        <p>Bunny: <span>{cita.mascota}</span></p>
        <p>Humanx: <span>{cita.humanx}</span></p>
        <p>Fecha: <span>{cita.fecha}</span></p>
        <p>Hora: <span>{cita.hora}</span></p>
        <p>Rascacion: <span>{cita.rascacion}</span></p>
    
    <button
        className="button eliminar u-full-width"
        onClick={ () => eliminarCita(cita.id)}
    >Eliminar &times;</button>
    </div>
);
 
Cita.propTypes = {
    cita: PropTypes.object.isRequired,
    eliminarCita: PropTypes.func.isRequired
}

export default Cita;