import React, {useState} from 'react';

const Formulario = ({setGuardarBusquedaLetra}) => {

    const [getBusqueda, setGuardarBusqueda] = useState({
        artista:"",
        cancion:""
    })

    const [getError, setGuardarError] = useState(false);

    const {artista, cancion} = getBusqueda;

    const actualizarState = evento => {
        setGuardarBusqueda({
            ...getBusqueda,
            [evento.target.name] : evento.target.value
        })
    }

    const buscarInformacion = evento => {
        evento.preventDefault();
        if(artista.trim() === "" || cancion.trim() === "") {
            setGuardarError(true);
            return;
        }

        setGuardarError(false);

        setGuardarBusquedaLetra(getBusqueda);
    }

    return ( 
        <div className="bg-info">
            {getError ? <p className="alert alert-danger text-center p-2">Por queeee eres asi. LLENA TODO.</p> : null}

            <div className="container">
                <div className="row">
                    <form
                        onSubmit={buscarInformacion}
                        className="col card text-white bg-transparent mb-5 pt-5 pb-2"
                    >
                        <fieldset>
                            <legend className="text-center">Quien busca encuentra</legend>
                        
                            <div className="row">
                                <div className="col-md-6">
                                    <div className="form-group">
                                        <label>Artista</label>
                                        <input  
                                            type="text"
                                            className="form-control"
                                            name="artista"
                                            placeholder="A quien buscaaaas?"
                                            onChange={actualizarState}
                                            value={artista}
                                        />
                                    </div>
                                    
                                </div>
                                <div className="col-md-6">
                                    <div className="form-group">
                                        <label>Cancion</label>
                                        <input  
                                            type="text"
                                            className="form-control"
                                            name="cancion"
                                            placeholder="y que buscaaaas?"
                                            onChange={actualizarState}
                                            value={cancion}
                                        />
                                    </div>
                                </div>
                            </div>

                            <button
                                type="submit"
                                className="btn btn-primary float-right"
                            >Finding Dory</button>
                        </fieldset>

                    </form>
                </div>
            </div>
        </div>
    );
}
 
export default Formulario;