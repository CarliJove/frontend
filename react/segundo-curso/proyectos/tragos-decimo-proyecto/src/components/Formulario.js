import React, {useContext, useState} from 'react';
import {CategoriasContext} from '../context/CategoriasContext';
import {RecetasContext} from '../context/RecetasContext';

const Formulario = () => {

    const [getBusqueda, setGuardarBusqueda] = useState({
        nombre: '',
        categoria: ''
    })

    const {getCategorias} = useContext(CategoriasContext);
    const {setBuscarRecetas, setGuardarConsultar} = useContext(RecetasContext);

    const obtenerDatosReceta = evento => {
        setGuardarBusqueda({
            ...getBusqueda,
            [evento.target.name] : evento.target.value
        })
    }

    return ( 
        <form
            className="col-12"
            onSubmit={ evento => {
                evento.preventDefault();
                setBuscarRecetas(getBusqueda);
                setGuardarConsultar(true); 
            }}               
        >
            <fieldset className="text-center">
                <legend>Ya llego por quien llorabas babyyyy, aqui busca tus bebdidas por categoria e ingredientes</legend>
            </fieldset>

            <div className="row mt-4">
                <div className="col-md-5">
                    <input
                        name="nombre"
                        className="form-control"
                        type="text"
                        placeholder="azucar/flores/muchos colores..o lo que quieras en tu trago"
                        onChange={obtenerDatosReceta}
                    />
                </div>
                <div className="col-md-3">
                    <select
                        className="form-control"
                        name="categoria"
                        onChange={obtenerDatosReceta}
                    >
                        <option value="">-- Selecciona categoria --</option>
                        {getCategorias.map(categoria => (
                            <option
                                key={categoria.strCategory}
                                value={categoria.strCategory}
                            >{categoria.strCategory}</option>
                        ))}
                    </select>
                </div>

                <div className="col-md-4">
                    <input
                        type="submit"
                        className="btn btn-block btn-primary"
                        value="Busca lo que tu corazon quiera"
                    />
                </div>
            </div>
        </form>
        );
}
 
export default Formulario;