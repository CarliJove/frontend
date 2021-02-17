import React, {Fragment, useState, useEffect} from 'react';
import Header from './components/Header';
import Formulario from './components/Formulario';
import ListadoNoticias from './components/ListadoNoticias';

function App() {

  const [getCategoria, setGuardarCategoria] = useState("");
  const [getNoticias, setGuardarNoticias] = useState([]);


  useEffect(()=> {
      const consultarAPI = async () => {
        const url = `http://newsapi.org/v2/top-headlines?country=ar&category=${getCategoria}&apiKey=87ac783dea54439e99a5b42ee9ccb1e2`;

        const respuesta = await fetch(url);
        const noticias = await respuesta.json();

        setGuardarNoticias(noticias.articles);
      }
      consultarAPI();
  }, [getCategoria]);

  return (
    <Fragment>
      <Header 
        titulo="HEY HEY HEY HEY HEY"
      />

    <div className="container white">
      <Formulario 
        setGuardarCategoria= {setGuardarCategoria}
      />        

      <ListadoNoticias
        getNoticias={getNoticias}
      />
    </div>
    </Fragment>
  );
}

export default App;
