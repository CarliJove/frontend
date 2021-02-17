import React from 'react';
import PropTypes from 'prop-types';

const Gasto = ({gasto}) => (
    <li className="gastos">
        <p>
            {gasto.getNombre}

            <span className="gasto">{gasto.getCantidad}</span>
        </p>
    </li>
);

Gasto.propTypes = {
    getGasto: PropTypes.object.isRequired
}

export default Gasto;