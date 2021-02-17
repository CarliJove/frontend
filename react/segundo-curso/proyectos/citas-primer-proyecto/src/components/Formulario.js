import React, {Fragment, useState} from 'react';
import uuid from 'react-uuid';

const Formulario = ({crearCita}) => {

    //crear el state
    const [getCita, setCita] = useState ({
        mascota:'',
        humanx:'',
        fecha:'',
        hora:'',
        rascacion:''
    });

    const [getError, setError] = useState(false)

    //cuando se escribe en el input
    const actualizarState = evento => {
        setCita({
            ...getCita,
            [evento.target.name]: evento.target.value
        })
    }

    const {mascota, humanx, fecha, hora, rascacion} = getCita;

    const submitCita = evento => {
        evento.preventDefault();

        //validacion
        if(mascota.trim() === ''|| humanx.trim() === ''|| 
        fecha.trim() === ''|| hora.trim() === ''|| rascacion.trim() === '') {
            setError(true);
            return;
        }

        //eliminar mensaje de error si pasa validacion
        setError(false);

        //asiganr ID
        getCita.id = uuid();

        //crear la cita
        crearCita(getCita);
        // reiniciar el formulario
        setCita({
            mascota:'',
            humanx:'',
            fecha:'',
            hora:'',
            rascacion:''
        })
    }

    return (  
        <Fragment>
            <h2>Conejito a darle amor</h2>

            { getError ? <p className='alerta-error'>Completa todo lcdtm</p>: null}

            <form
                onSubmit={submitCita}
            >
                <label>Nombre de tu orejon</label>
                < input
                    type="text"
                    name="mascota"
                    className="u-full-width"
                    placeholder="Nombre del bunny"
                    onChange={actualizarState}
                    value={mascota}
                />

                <label>Nombre de su humanx</label>
                < input
                    type="text"
                    name="humanx"
                    className="u-full-width"
                    placeholder="Tu nombre"
                    onChange={actualizarState}
                    value={humanx}
                />

                <label>Fecha</label>
                < input
                    type="date"
                    name="fecha"
                    className="u-full-width"
                    onChange={actualizarState}
                    value={fecha}
                />

                <label>Hora</label>
                < input
                    type="time"
                    name="hora"
                    className="u-full-width"
                    onChange={actualizarState}
                    value={hora}
                />

                <label>Lugares a rascar</label>
                <textarea
                    className="u-full-width"
                    name="rascacion"
                    placeholder="lugar a rascar"
                    onChange={actualizarState}
                    value={rascacion}
               ></textarea>
            
                <button
                    type="submit"
                    className="u-full-width button-primary"
                >Agregar cita</button>
            </form>
        </Fragment>
    );
}
 
export default Formulario;