import React from 'react';
import './cocina.css';
import Comida from './Comida';

const Cocina = ({preparacion, preparacionMorfi}) => {
    return (
    <div className="cocina">
        <h2>Vamos a lo que importa, la cocina.</h2>
        
        {preparacion.length === 0
        ? <p>Mandale mecha</p>
        : preparacion.map(comida => (
            < Comida
                key={comida.id}
                comida= {comida}
                preparacion={preparacion}
                preparacionMorfi={preparacionMorfi}
            />
        ))}
    </div>
    );
}
export default Cocina;