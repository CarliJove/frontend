import React from 'react';
import Gasto from './Gasto';
import PropTypes from 'prop-types';

const Listado = ({getGastos}) => (
    <div className="gastos-realizados">
        <h2>Listado</h2>
        {getGastos.map(gasto => (
            <Gasto
                key={gasto.id}
                gasto={gasto}
            />
        ))}
    </div>
);
 

Listado.propTypes = {
    getGastos: PropTypes.array.isRequired
}

export default Listado;