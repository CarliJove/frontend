import React, {useState} from 'react';
import Error from './Error';
import shortid from 'shortid';
import PropTypes from 'prop-types';


const Formulario = ({setGuardarGasto, setCrearGasto}) => {

    const [getNombre, setGuardarNombre] = useState('');
    const [getCantidad, setGuardarCantidad] = useState(0);
    const [getError, setGuardarError] = useState(false);
    
    const agregarGasto = evento => {
        evento.preventDefault();

        //validacion
        if (getCantidad < 1 || isNaN (getCantidad) || getNombre.trim() === '') {
            setGuardarError(true);
            return;
        }
        setGuardarError(false);

        //construir gasto
        const gasto = {
            getNombre,
            getCantidad,
            id: shortid.generate()
        }

        console.log(gasto);

        //pasar gasto al componente principal
        setGuardarGasto(gasto);
        setCrearGasto(true);

        //resetear el form
        setGuardarNombre('');
        setGuardarCantidad(0);
    }

    return (  
        <form
            onSubmit={agregarGasto}
        >
            <h2>Agrega el gasto de energia aqui</h2>
        
            { getError ? <Error mensaje="Llena todo queride, y si los llenaste, lo hiciste mal, como 100pre. Salu2." /> : null}

            <div className="campo">
                <label>Nombre de actividad</label>
                <input 
                    type="text"
                    className="u-full-width"
                    placeholder="ej. despertarse"
                    value={getNombre}
                    onChange= { evento => setGuardarNombre(evento.target.value) }
                />
            </div>

            <div className="campo">
                <label>Gasto de actividad</label>
                <input 
                    type="number"
                    className="u-full-width"
                    placeholder="ej. 300"
                    value={getCantidad}
                    onChange= { evento => setGuardarCantidad ( parseInt (evento.target.value))}
                />
            </div>

            <input 
                type="submit"
                className="button-primary u-full-width"
                value="Agregar gasto energetico" 
            />
        
        </form>
    );
}

Formulario.propTypes = {
    setGuardarGasto: PropTypes.func.isRequired,
    setCrearGasto:PropTypes.func.isRequired
}

export default Formulario;