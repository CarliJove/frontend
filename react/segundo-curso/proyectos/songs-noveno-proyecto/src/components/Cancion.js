import React, {Fragment} from 'react';

const Cancion = ({getLetra}) => {
    
    return(
    <Fragment>
        <h2>Letra</h2>
        <p className="letra">{getLetra}</p>
    </Fragment>
    );
};
 
export default Cancion;