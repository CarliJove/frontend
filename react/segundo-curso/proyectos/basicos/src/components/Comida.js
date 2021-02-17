import React from 'react';

const Comida = ({comida, preparacion, preparacionMorfi, comidas}) => {
    
    const {nombre, horario, id} = comida

const seleccionaComida = id => {
    const comidas = preparacion.filter(comida => comida.id === id)[0];
    preparacionMorfi([
        ...preparacion,
        comida
    ]); 
}

const eliminarPreparacion = id => {
    const comidas = preparacion.filter(comida => comida.id !== id);
    preparacionMorfi(comidas)
}

    return ( 
        <div>
            <h2>{nombre}</h2>
            <p>{horario} hs</p>
                  
        { preparacion
        
        ?
            (
                <button 
                    type="button"
                    onClick= { () => seleccionaComida (id)}
                > que venga esa mata gula</button>
            )
        :
            (
                <button 
                type="button"
                onClick={() => eliminarPreparacion(id)}
                >eliminar</button> 
            )
        }
        </div>
    );
}
 
export default Comida;