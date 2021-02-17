import React, { Fragment} from 'react';
import {revisarEnergia} from '../helpers';
import PropTypes from 'prop-types';

const ControlEnergia = ({getEnergia, getRestante}) => {
    return (  
        <Fragment>
            <div className="alert alert-primary">
                Energia: {getEnergia}
            </div>
            <div className={revisarEnergia(getEnergia, getRestante)}>
                Restante: {getRestante}
            </div>
        </Fragment>
    );
}

ControlEnergia.propTypes = {
    getEnergia: PropTypes.number.isRequired,
    getRestante: PropTypes.number.isRequired
}
 
export default ControlEnergia;