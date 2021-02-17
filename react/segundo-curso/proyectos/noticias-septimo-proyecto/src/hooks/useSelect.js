import React, {useState} from 'react';


const useSelect = (stateInicial, opciones) => {

    const [state, setActualizarState] = useState(stateInicial);

    const SelectNoticias = () => (
        <select
            className="browser-default"
            value={state}
            onChange= {evento => setActualizarState(evento.target.value)}
        >
            {opciones.map(opcion => (
                <option key={opcion.value} value={opcion.value}>{opcion.label}</option>
            ))}
        </select>
    )

    return [state, SelectNoticias];
}
 
export default useSelect;