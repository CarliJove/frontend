import React, {Fragment, useState} from 'react';
import styled from '@emotion/styled';

const Label =styled.label`
    font-family: "Bebas Neue", cursive;
    color: #FFF;
    text-transform: uppercase;
    font-weight: bold;
    font-size: 2.4rem;
    margin-top: 2rem;
    display: block;
`;

const Select = styled.select`
    width: 100%;
    display:block;
    padding: 1rem;
    -webkit-appearance: none;
    border-radius: 10px;
    border: none;
    font-size: 1.2rem;
`;

const useCriptomoneda = (label, stateInicial, opciones) => {

    console.log(opciones);

    //state del hook
    const [getState, setActualizarState] = useState(stateInicial);

    const SelectCripto = () => (
        <Fragment>
            <Label>{label}</Label>
            <Select
                onChange= {evento => setActualizarState(evento.target.value)}
                value= {getState}
            >
                <option value="">- Seleccione -</option>
                {opciones.map(opcion => (
                    <option key={opcion.CoinInfo.Id} value={opcion.CoinInfo.Name}>{opcion.CoinInfo.FullName}</option>
                ))}
            </Select>
        </Fragment>
    );

    //retorno del state, de la funcion y de setState
    return [getState, SelectCripto, setActualizarState];

}

export default useCriptomoneda;