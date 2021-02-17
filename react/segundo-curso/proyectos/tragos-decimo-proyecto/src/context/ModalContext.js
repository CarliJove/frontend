import React, {createContext, useEffect, useState} from 'react';

import axios from 'axios';

export const ModalContext = createContext();

const ModalProvider = (props) => {

    const [getIdReceta, setGuardarIdReceta] = useState(null);
    const [getReceta, setGuardarReceta] = useState({});

    useEffect (() => {
        const obtenerReceta = async () => {
            if (!getIdReceta) return;

            const url = `https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=${getIdReceta}`;
            const resultado = await axios.get(url);

            setGuardarReceta(resultado.data.drinks[0]);
        }
        obtenerReceta();
    }, [getIdReceta]);

    return ( 
        <ModalContext.Provider
            value= {{
                getReceta,
                setGuardarIdReceta,
                setGuardarReceta
            }}
        >
            {props.children}
        </ModalContext.Provider>
     );
}
 
export default ModalProvider;
