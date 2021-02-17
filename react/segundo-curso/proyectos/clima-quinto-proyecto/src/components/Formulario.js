import React, {useState} from 'react';
import Error from './Error';
import PropTypes from 'prop-types';


const Formulario = ({getBusqueda, setGuardarBusqueda, setGuardarConsultar}) => {

 
    const [getError, setGuardarError] = useState(false);

    const { ciudad, pais} = getBusqueda;

    const handleChange = e => {
        setGuardarBusqueda({
            ...getBusqueda,
            [e.target.name] : e.target.value
        });
    }

    const handleSubmit = e => {
        e.preventDefault();
        if (ciudad.trim() === '' || pais.trim() === '') {
            setGuardarError(true);
            return;
        }

        setGuardarError(false);

        setGuardarConsultar(true);
    }

    return ( 
        <form 
            onSubmit={handleSubmit}
        >
            {getError ? <Error mensaje="Ambos campos son obligatorios" /> : null}
            <div className="input-field col s12">
                <input 
                    type="text"
                    name="ciudad"
                    id="ciudad"
                    value={ciudad}
                    onChange={handleChange}
                />
                <label htmlFor="ciudad">Ciudad: </label>
            </div>

            <div className="input-field col s12">
                <select
                    name="pais"
                    id="pais"
                    value={pais}
                    onChange={handleChange}
                >
                    <option value="">-- Seleccione un país --</option>
                    <option value="US">Estados unidos</option>
                    <option value="MX">Mexico</option>
                    <option value="AR">Argentina</option>
                    <option value="CO">Colombia</option>
                    <option value="CR">Costa Rica</option>
                    <option value="ES">España</option>
                    <option value="PE">Peru</option>


                </select> 
                <label htmlFor="pais">País: </label>
            </div>

            <div className="input-field col s12">
                <input
                    type="submit"
                    value="Buscar Clima"
                    className="waves-effect waves-light btn-large btn-block yellow accent-4"
                />
            </div>
        </form>
     );
}

Formulario.propTypes = {
    getBusqueda: PropTypes.object.isRequired,
    setGuardarBusqueda: PropTypes.func.isRequired,
    setGuardarConsultar: PropTypes.func.isRequired,
}

export default Formulario;