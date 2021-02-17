import React, {useState} from 'react';
import styled from '@emotion/styled';
import Proptypes from 'prop-types';
import {obtenerDiferenciaToping, calcularFactura, obtenerAdicional } from '../helper';

const Campo = styled.div`
    display: flex;
    margin-bottom: 1rem;
    align-items:center;
`;

const Label = styled.label`
    flex: 0 0 100px;
`;

const Select =styled.select`
    display: block;
    width: 1oo;
    padding: 1rem;
    border: 1px solid #e1e1e1;
    -webkit-appearance: none;
`;

const InputRadio = styled.input`
    margin: 0 1rem;
`;

const Boton = styled.button`
    background-color: #00838F;
    font-size: 16px;
    width: 100%;
    padding: 1rem;
    color: #FFF8DC;
    text-transform: uppercase;
    font-weight: bold;
    border: none;
    transition: background-color .3s ease;
    margin-top: 2rem;

    &:hover {
        background-color: #48D1CC;
        cursor: pointer;
    }
`;

const Error = styled.div`
    background-color:red;
    color:white;
    padding: 1rem;
    width:100%;
    text-align: center;
    margin-bottom: 2rem;
`;

const Formulario = ({setGuardarResumen, setGuardarCargando}) => {

    const [getDatos, setGuardarDatos] = useState ({
        factura: '',
        toping: '',
        adicional: ''
    });

    const [getError, setGuardarError] = useState(false);

    //extraer valores del state
    const { factura, toping, adicional} = getDatos;

    // leer datos del form y pasarlos al state
    const obtenerInformacion = evento => {
        setGuardarDatos({
            ...getDatos,
            [evento.target.name] : evento.target.value
        })
    }

    const cotizarFactura = evento => {
        evento.preventDefault();

        if(factura.trim() === ''|| toping.trim() === '' || adicional.trim() === '') {
            setGuardarError(true);
            return;
        }

        setGuardarError(false);

        //factura precio base
        let resultado = 2;

        //obtener diferencia de toping
        const diferencia = obtenerDiferenciaToping(toping) * resultado;
        
        //por cada toping restar eñ 3%
        resultado -= ((diferencia * 3) * resultado) / 100;

        //membrillo (por cada factura  % )
        //chocolate
        //pastelera
        resultado = calcularFactura(factura) * resultado;

        //sin cafe es 20%
        //con cafe es 50%
        const incrementoAdicional = obtenerAdicional(adicional);
        resultado = parseFloat (incrementoAdicional * resultado).toFixed(2);

        setGuardarCargando(true);

        setTimeout (() => {
            setGuardarCargando(false);
            
            setGuardarResumen({
                cotizacion: Number(resultado),
                getDatos
            })
        }, 2000);
    }

    return ( 
        <form
            onSubmit= {cotizarFactura}
        >
            
            {getError ? <Error>Llena tooooodo</Error> : null}

            <Campo>
                <Label>Factura</Label>
                <Select
                    name="factura"
                    value={factura}
                    onChange={obtenerInformacion}
                >
                    <option value="">--Seleccione--</option>
                    <option value="membrillo">Membrillo</option>
                    <option value="chocolate">Chocolate</option>
                    <option value="pastelera">Pastelera</option>
                </Select>
            </Campo>

            <Campo>
                <Label>toping</Label>
                <Select
                    name="toping"
                    value={toping}
                    onChange={obtenerInformacion}
                >
                    <option value="">--Seleccione--</option>
                    <option value="chispitas">Chispitas</option>
                    <option value="chips">Chips de chocolate</option>
                    <option value="azucar">azucar impalpable</option>
                    <option value="frutos">Frutos secos</option>
                    <option value="nutella">nutella</option>
                </Select>
            </Campo>

            <Campo>
                <Label>Adicional</Label>
                <InputRadio 
                    type="radio"
                    name="adicional"
                    value="nocafe"
                    checked={adicional === "nocafe"}
                    onChange={obtenerInformacion}
                /> Sin cafe 
                
                <InputRadio
                    type="radio"
                    name="adicional"
                    value="concafe"
                    checked={adicional === "concafe"}
                    onChange={obtenerInformacion}
                /> Con cafe
            </Campo>

            <Boton type="submit">Cotizar</Boton>
        </form>
     );
}
 
Formulario.propTypes = {
    setGuardarCargando: Proptypes.func.isRequired,
    setGuardarResumen: Proptypes.func.isRequired
}

export default Formulario;