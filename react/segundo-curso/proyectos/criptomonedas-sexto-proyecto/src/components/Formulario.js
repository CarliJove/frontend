import React, {useEffect, useState} from 'react';
import styled from '@emotion/styled';
import Error from './Error';
import useMoneda from '../hooks/useMoneda';
import useCriptomoneda from '../hooks/useCriptomoneda';
import axios from 'axios';

const Boton = styled.input`
    margin-top: 20px;
    font-weight: bold;
    font-size: 20px;
    padding: 10px;
    background-color: #66a2fe;
    border: none;
    width: 100%;
    border-radius: 10px;
    color: #FFF;
    transition: background-color .2s ease;

    &:hover {
        background-color: #326AC0;
        cursor: pointer;
    }
`;

const Formulario = ({setGuardarMoneda, setGuardarCriptomoneda}) => {

    const [getListaCripto, setGuardarCriptomonedas] = useState([]);

    const MONEDAS = [
        { codigo: 'JPY', nombre: 'yen'},
        { codigo: 'ARS', nombre: 'peso argentino'},
        { codigo: 'CRC', nombre: 'colon de Costa Rica'},
        { codigo: 'USD', nombre: 'dolar estadounidense'},
        { codigo: 'EUR', nombre: 'euro'}
    ]

    const [moneda, SelectMonedas] = useMoneda("Elige tu moneda", "", MONEDAS);

    //utilizar criptomoneda

    const [criptomoneda, SelectCripto] = useCriptomoneda("Elige tu cripto", "", getListaCripto)
    const [getError, setGuardarError] = useState(false);
    //llamado a la API
    useEffect (() => {
        const consultarAPI = async () => {
            const url = "https://min-api.cryptocompare.com/data/top/mktcapfull?limit=10&tsym=USD";
        
            const resultado = await axios.get(url);

            setGuardarCriptomonedas(resultado.data.Data);
        }
        consultarAPI();
    }, []);

    const cotizarMoneda = evento => {
        evento.preventDefault();

        //para error:
        if(moneda === "" || criptomoneda === "") {
            setGuardarError(true);
            return;
        }

        //pasar datos al componente principal
        setGuardarError(false);
        setGuardarMoneda(moneda);
        setGuardarCriptomoneda(criptomoneda);

    }

    return ( 
        <form
            onSubmit= {cotizarMoneda}
        >

            {getError ? <Error mensaje="Errooooooooor, llena todo" /> : null}

            <SelectMonedas />

            <SelectCripto />

            <Boton
                type="submit"
                value="Calcular"
            />
        </form>

     );
}
 
export default Formulario;