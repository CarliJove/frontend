import React from 'react';

const Info = ({getInfo}) => {

    if(Object.keys(getInfo).length === 0) return null;

    const {strArtistThumb, strGenre, strBiographyES} = getInfo;
    
    return ( 
        <div className="card border-light">
            <div className="card-header bg-primary text-light font-weight-bold">
                Info artista
            </div>
            <div className="card-body">
                <img src={strArtistThumb} alt="Logo artirsta" />
                <p className="card-text">Género: {strGenre}</p>
                <h2 className="card-text">Biografia:</h2>
                <p className="card-text">{strBiographyES}</p>
                <p className="card-text">
                    <a href={`https://${getInfo.strFacebook}`} target="_blank" rel="noopener noreferrer">
                    <i className="fab fa-facebook"></i>
                    </a>
                    <a href={`https://${getInfo.strTwitter}`} target="_blank" rel="noopener noreferrer">
                        <i className="fab fa-twitter"></i>
                    </a>
                    <a href={`${getInfo.strLastFMChart}`} target="_blank" rel="noopener noreferrer">
                        <i className="fab fa-lastfm"></i>
                    </a>
                </p>
            </div>
        </div>
     );
}
 
export default Info;