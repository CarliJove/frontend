import React, {Fragment, useState, useEffect} from 'react';
import Header from './components/Header';
import Formulario from './components/Formulario';
import Clima from './components/Clima';
import Error from './components/Error';

function App() {

  const [getBusqueda, setGuardarBusqueda] = useState({
    ciudad: "",
    pais: "",
  });

  const [getConsultar, setGuardarConsultar] = useState(false);

  const [getResultado, setGuardarResultado] = useState({});
  
  const [getError, setGuardarError] = useState(false);

  const {ciudad, pais} = getBusqueda;

  useEffect(() => {
    
    const consultarAPI = async () => {

        if (getConsultar) {

          const appId= 'a67210343f38022f12e7080f8f5cea2f';
          const url = `http://api.openweathermap.org/data/2.5/weather?q=${ciudad},${pais}&appid=${appId}`;

          const respuesta = await fetch(url);
          const resultado = await respuesta.json();

          setGuardarResultado(resultado);
          setGuardarConsultar(false);

          if(resultado.cod === "404") {
            setGuardarError(true);
          } else {
            setGuardarError(false);
          }
        }
    };
    consultarAPI();
  }, [getConsultar]);

  let componente;
  if(getError) {
    componente = <Error mensaje="no hay resultados" />
  } else {
    componente = <Clima
                  resultado={getResultado}
                  />
  }

  return (
    <Fragment>
      <Header 
        titulo='Climatronico'
      />

      <div className="contenedor-form">
        <div className="container">
          <div className="row">
            <div className="col m6 s12">
              <Formulario 
                getBusqueda={getBusqueda}
                setGuardarBusqueda={setGuardarBusqueda}
                setGuardarConsultar={setGuardarConsultar}
              />
            </div>
            <div className="col m6 s12">
              {componente}
            </div>
          </div>
        </div>
      </div>

    </Fragment>
    
  );
}

export default App;
