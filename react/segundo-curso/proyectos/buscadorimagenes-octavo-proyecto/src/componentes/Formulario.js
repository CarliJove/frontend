import React, {useState} from 'react';
import Error from './Error';

const Formulario = ({setGuardarBusqueda}) => {

    const [getTermino, setGuardarTermino] = useState("");
    const [getError, setGuardarError] = useState(false);

    const buscarImagen = evento => {
        evento.preventDefault();
        if(getTermino.trim() === "") {
            setGuardarError(true);
            return;
        }

        //envia la busqueda a app.js
        setGuardarError(false);
        setGuardarBusqueda(getTermino);
    }

    return (  
        <form 
            onSubmit={buscarImagen}
        >
            <div className="row">
                <div className="form-group col-md-8">
                    <input 
                        type="text"
                        className="form-control form-control-lg"
                        placeholder="Busca lo que te guste"
                        onChange= {evento => setGuardarTermino(evento.target.value)}
                    />
                </div>

                <div className="form-group col-md-4">
                    <input 
                        type="submit"
                        className="btn btn-lg btn-danger btn-block"
                        value="Buscar"
                    />
                </div>
                
            </div>

            {getError ? <Error mensaje="una cosa se te pidio... UNA. Solo una. Hace las cosas bien por favor." /> : null}
        </form>
    );
}
 
export default Formulario;