import React from 'react';
import styled from '@emotion/styled';

const ResultadoDiv = styled.div`
    color: #FFF;
    font-family: Arial, Helvetica, sans-serif;
`;

const Info = styled.p`
    font-size: 18px;

    span {
        font-weight: bold;
    }
`;

const Precio = styled.p`
    font-size:30px;

    span {
        font-weight: bold;
    }
`;

const Cotizacion = ({getResultado}) => {
    if(Object.keys(getResultado).length === 0) return null; //para ver si esta vacio
    

    console.log(getResultado);
    return ( 
        <ResultadoDiv>
            <Precio>El precio es: <span>{getResultado.PRICE}</span></Precio>
            <Info>El precio mas alto del dia: <span>{getResultado.HIGHDAY}</span></Info>
            <Info>El precio mas najo del dia: <span>{getResultado.LOWDAY}</span></Info>
            <Info>Variacion ultimas 24 hs <span>{getResultado.CHANGEPCT24HOUR}</span></Info>
            <Info>ultima actualizacion <span>{getResultado.LASTUPDATE}</span></Info>

        </ResultadoDiv>
     );
}
 
export default Cotizacion;