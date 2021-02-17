import React, {Fragment, useState} from 'react';
import Error from './Error';
import PropTypes from 'prop-types';


const Pregunta = ({setGuardarEnergia, setGuardarRestante, setActualizarPregunta}) => {

    //def state
    const [getCantidad, setGuardarCantidad] = useState (0);
    const [getError, setGuardarError] = useState(false);

    //leer energia de hoy
    const definirEnergia = evento => {
        setGuardarCantidad( parseInt(evento.target.value));
    }

    //submit para def energia
    const agregarEnergia = evento => {
        evento.preventDefault();

        if (getCantidad < 1 || isNaN (getCantidad)) {
            setGuardarError(true);
            return;
        }

        setGuardarError(false);
        setGuardarEnergia(getCantidad);
        setGuardarRestante(getCantidad);
        setActualizarPregunta(false);
    }

    return (  
        <Fragment>
            <h2>Cuánta energia tiene Carli hoy:</h2>

                { getError ? < Error mensaje="Cantidad de energia incorrecta, 
                hay formas mas eficaces de matarme"/> : null}

            <form
                onSubmit={agregarEnergia}
            >
                <input 
                    type="number"
                    className= "u-full-width"
                    placeholder="energia de hoy"
                    onChange={definirEnergia}
                />

                <input 
                    type="submit"
                    className= "button-primary u-full-width"
                    value="Definir energia de hoy"
                />
            </form>
        </Fragment>
    );
}

Pregunta.propTypes = {
    setGuardarEnergia: PropTypes.func.isRequired,
    setGuardarRestante:PropTypes.func.isRequired,
    setActualizarPregunta: PropTypes.func.isRequired
}
export default Pregunta;