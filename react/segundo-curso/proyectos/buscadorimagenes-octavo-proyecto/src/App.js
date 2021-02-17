import React, {useState, useEffect} from 'react';
import Formulario from './componentes/Formulario';
import ListadoImagenes from './componentes/ListadoImagenes';

function App() {

  const [getBusqueda, setGuardarBusqueda] = useState("");
  const [getImagenes, setGuardarImagenes] = useState([]);
  const [getPaginaActual, setGuardarPaginaActual] = useState(1);
  const [getTotalPaginas, setGuardarTotalPaginas] = useState(1);

  useEffect(() => {
    const consultarAPI = async () => {
      if(getBusqueda === "") return;

      const imagenesPorPagina= 30;
      const key = "20156078-7097c10c2b214dcecdd4a1967";
      const url = `https://pixabay.com/api/?key=${key}&q=${getBusqueda}&per_page=${imagenesPorPagina}&page=${getPaginaActual}`;

      const respuesta = await fetch(url);
      const resultado = await respuesta.json(); 

      setGuardarImagenes(resultado.hits);

      const calcularTotalPaginas = Math.ceil(resultado.totalHits / imagenesPorPagina)
      setGuardarTotalPaginas(calcularTotalPaginas);
    
      const jumbotron = document.querySelector('.jumbotron');
      jumbotron.scrollIntoView({behavior: "smooth"})
    }
    consultarAPI(); 
    
  }, [getBusqueda, getPaginaActual])

  const paginaAnterior = () => {
    const nuevaPaginaActual = getPaginaActual - 1;
    if (nuevaPaginaActual === 0) return;  

    setGuardarPaginaActual(nuevaPaginaActual);    
  }

  const paginaSiguiente = () => {
    const nuevaPaginaActual = getPaginaActual + 1;

    if(nuevaPaginaActual > getTotalPaginas) return;
    
    setGuardarPaginaActual(nuevaPaginaActual);
  }

  return (
    <div className="container">
      <div className="jumbotron">
        <p className="lead text-center">
          Buscando a Nemo
        </p>

        <Formulario 
        setGuardarBusqueda={setGuardarBusqueda}
        />
      </div>

      <div className="row justify-content-center">
        <ListadoImagenes
          getImagenes={getImagenes}
        />

        { (getPaginaActual === 1) ? null : (
          <button 
            type="button"
            className="bbtn btn-info mr-1"
            onClick={paginaAnterior}
          >&laquo; Anterior</button>
        )}

        { (getPaginaActual === getTotalPaginas) ? null:(
          <button 
            type="button"
            className="bbtn btn-info"
            onClick={paginaSiguiente}
          >Siguiente &raquo;</button>
        )}
      </div>
    </div>
  );
}

export default App;
