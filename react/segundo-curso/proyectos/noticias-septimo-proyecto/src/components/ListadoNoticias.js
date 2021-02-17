import React from 'react';
import Noticia from './Noticia';
import PropTypes from 'prop-types';


const ListadoNoticias = ({getNoticias}) => (
    <div className="row">
        {getNoticias.map(noticia => (
            <Noticia 
                key={noticia.url}
                noticia={noticia}
            />
        ))}
    </div>
)


ListadoNoticias.propTypes = {
    getNoticias: PropTypes.array.isRequired
}

export default ListadoNoticias;