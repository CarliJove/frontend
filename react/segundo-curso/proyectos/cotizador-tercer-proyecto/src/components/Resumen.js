import React from 'react';
import styled from '@emotion/styled';
import Proptypes from 'prop-types';

import {primerMayuscula} from '../helper';

const ContenedorResumen = styled.div`
    padding: 1rem;
    text-align: center;
    background-color: #00838F;
    color: #FFF8DC;
    margin-top: 1rem;
`;

const Resumen = ({getDatos}) => {

    const {factura, toping, adicional} = getDatos;

    if(factura === '' || toping === '' || adicional === '') return null;

    return (
        <ContenedorResumen>
            <h2>resumen cotizacion</h2>
            <ul>
                <li>Factura: {primerMayuscula(factura)}</li>
                <li>Toping: {primerMayuscula(toping)}</li>
                <li>Adicional: {primerMayuscula(adicional)}</li>
            </ul>
        </ContenedorResumen>
      );
}

Resumen.propTypes = {
    getDatos: Proptypes.object.isRequired
}

export default Resumen;