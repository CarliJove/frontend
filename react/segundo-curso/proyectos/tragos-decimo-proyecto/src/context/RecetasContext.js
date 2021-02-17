import React, {createContext, useState, useEffect} from 'react';
import axios from 'axios';

export const RecetasContext = createContext();

const RecetasProvider = (props) => {

    const [getRecetas, setGuardarRecetas] = useState([]);
    const [getBusqueda, setBuscarRecetas] = useState ({
        nombre:'',
        categoria:''
    });

    const [getConsultar, setGuardarConsultar] = useState(false);

    const {nombre, categoria} = getBusqueda;

    useEffect(() => {
        if(getConsultar) {
            const obtenerRecetas = async () => {
                const url = `https://www.thecocktaildb.com/api/json/v1/1/filter.php?i=${nombre}&c=${categoria}`

                const resultado = await axios.get(url);
                setGuardarRecetas(resultado.data.drinks);
            }
            obtenerRecetas();
        }
    }, [getBusqueda]);

    return ( 
        <RecetasContext.Provider
            value={{
                getRecetas,
                setBuscarRecetas,
                setGuardarConsultar
            }}
        >
            {props.children}
        </RecetasContext.Provider>
     );
}
 
export default RecetasProvider;