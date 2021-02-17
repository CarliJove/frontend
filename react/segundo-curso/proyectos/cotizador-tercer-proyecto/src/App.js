import React, {useState} from 'react';
import Header from './components/Header';
import Formulario from './components/Formulario';
import Resumen from './components/Resumen';
import Resultado from './components/Resultado';
import Spinner from './components/Spinner';



import styled from '@emotion/styled';

const Contenedor = styled.div`
  max-width: 600px;
  margin: 0 auto;
`;

const ContenedorFormulario = styled.div`
  background-color: #FFF;
  padding: 3rem;
`

function App() {

  const [ getResumen, setGuardarResumen] = useState({
    cotizacion: 0,
    getDatos: {
      factura:'',
      toping:'',
      adicional:'',
    }
  });

const [ getCargando, setGuardarCargando] = useState(false);

const { cotizacion, getDatos } = getResumen;

  return (
    <Contenedor>
      <Header 
      titulo='Cotizador de facturitas'
    />

    <ContenedorFormulario>
      <Formulario 
        setGuardarResumen={setGuardarResumen}
        setGuardarCargando={setGuardarCargando}
      />

      { getCargando ? <Spinner/> : null} 

      <Resumen 
        getDatos={getDatos}
      />

      { !getCargando ?
        <Resultado 
          cotizacion= {cotizacion}
        />
        : null
      }

    </ContenedorFormulario>
    </Contenedor>
  );
}

export default App;
