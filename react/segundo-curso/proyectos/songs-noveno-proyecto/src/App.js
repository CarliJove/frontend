import React, {Fragment, useState, useEffect} from 'react';
import Formulario from './components/Formulario';
import Cancion from './components/Cancion';
import Info from './components/Info';

import axios from 'axios';

function App() {

  const [getBusquedaLetra, setGuardarBusquedaLetra] = useState({});
  const [getLetra, setGuardarLetra] = useState("");
  const [getInfo, setGuardarInfo] = useState({});

  useEffect(() => {
    if(Object.keys(getBusquedaLetra).length === 0) return;

    const consultarApiLetra = async () => {
      const {artista, cancion} = getBusquedaLetra;
      const url = `https://api.lyrics.ovh/v1/${artista}/${cancion}`;
      const url2 = `https://www.theaudiodb.com/api/v1/json/1/search.php?s=${artista}`;

      const [getLetra, informacion] = await Promise.all([
        await axios(url),
        await axios(url2)
      ]);      

      setGuardarLetra(getLetra.data.lyrics);
      setGuardarInfo(informacion.data.artists[0]);
    }
    consultarApiLetra();
  }, [getBusquedaLetra, getInfo])

  return (
    <Fragment>
      <Formulario 
        setGuardarBusquedaLetra={setGuardarBusquedaLetra}
      />

      <div className="container mt-5">
        <div className="row">
          <div className="col-md-6">
            <Info 
              getInfo={getInfo}
            />
          </div>
          <div className="col-md-6">
            <Cancion 
              getLetra={getLetra}
            />
          </div>
        </div>
      </div>
    </Fragment>
  );
}

export default App;
