import React from 'react';
import styles from './Formulario.module.css';
import useSelect from '../hooks/useSelect';
import PropTypes from 'prop-types';

const Formulario = ({setGuardarCategoria}) => {

    //Your API key is: 87ac783dea54439e99a5b42ee9ccb1e2

    const OPCIONES = [
        {value: 'general', label:'General'},
        {value: 'entertainment', label:'Entretenimiento y chismes'},
        {value: 'business', label:'$$$$'},
        {value: 'health', label:'Salud'},
        {value: 'science', label:'No lo digo yo, lo dice la CIENCIA'},
        {value: 'technology', label:'Tecnologia'},
        {value: 'sports', label:'Corre Forest'},
    ]

    const [getCategoria, SelectNoticias] = useSelect("general", OPCIONES);


    //aca submit, pase de getCategoria a app.js
    const buscarNoticias = evento => {
        evento.preventDefault();

        setGuardarCategoria(getCategoria);
    }

    return ( 
        <div className={`${styles.buscador} row`}>
            <div className="col s12 m8 offset-m2">
                <form
                    onSubmit={buscarNoticias}
                >
                    <h2 className={styles.heading}>Neeeews</h2>

                    <SelectNoticias />

                    <div className="input-field col s12">
                        <input 
                            type="submit"
                            color= "black"
                            className={`${styles.btn_block} btn-large light-green accent-1`}
                            value="Buscar"                            
                        />
                    </div>
                </form>
            </div>
        </div>
     );
}

Formulario.propTypes = {
    setGuardarCategoria: PropTypes.func.isRequired
}

export default Formulario;