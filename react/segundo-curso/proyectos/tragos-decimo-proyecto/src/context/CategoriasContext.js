import React, {createContext, useState, useEffect} from 'react';

import axios from 'axios';

//creacion del context, que es una funcion, para crear despues el provider
export const CategoriasContext = createContext();

//provider con ()=>{}, adentro el state, return (props.children) para pasar los datos al resto de componentes como values
const CategoriasProvider = (props) => {
    //state del context que va a afluir a los otros comps.
    const [getCategorias, setGuardarCategorias] = useState([]);

    useEffect(() => {
        const obtenerCategorias = async () => {
            const url = "https://www.thecocktaildb.com/api/json/v1/1/list.php?c=list";
            const getCategorias = await axios.get(url);

            setGuardarCategorias(getCategorias.data.drinks);
        }
        obtenerCategorias();
    }, []);

    return (
        <CategoriasContext.Provider
            value= {{
                getCategorias
            }} //ver que tienen doble llave
        >
            {props.children}
        </CategoriasContext.Provider> // es el CategoriasContext de arriba
    )
}

//para hacerlo exportable e importable al provider en los otros componentes
export default CategoriasProvider;
