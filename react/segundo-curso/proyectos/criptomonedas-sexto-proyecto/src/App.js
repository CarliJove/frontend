import React, {useState, useEffect} from 'react';
import styled from '@emotion/styled';
import imagen from './cryptomonedas.png';
import Formulario from './components/Formulario';
import Cotizacion from './components/Cotizacion';
import Spinner from './components/Spinner';


import axios from 'axios';

const Contenedor = styled.div`
  max-width: 900px;
  margin: 0 auto;
  @media (min-width:992px) {
    display:grid;
    grid-template-columns: repeat(2, 1fr);
    column-gap: 2rem;
  }
`;

const Imagen = styled.img`
  max-width: 100%;
  margin-top: 5rem;
  
`;

const Heading = styled.h1`
  font-family: 'Bebas Neue', cursive;
  color: #FFF;
  text-align: left;
  font-weight: 700;
  font-size: 50px;
  margin-bottom: 50px;
  margin-top: 80px;

  &::after {
    content: "";
    width: 100px;
    height: 6px;
    background-color: #66A2FE;
    display:block;
  }
`;

function App() {

  const [getMoneda, setGuardarMoneda] = useState("");
  const [getCriptomoneda, setGuardarCriptomoneda] = useState("");
  const [getResultado, setGuardarResultado] = useState({});
  const [getCargando, setGuardarCargando] = useState(false);

  useEffect(() => {
    const cotizarCriptomoneda = async () => {
      if (getMoneda === "") return;

      const url = `https://min-api.cryptocompare.com/data/pricemultifull?fsyms=${getCriptomoneda}&tsyms=${getMoneda}`;
      
      const resultado = await axios.get(url);

      setGuardarCargando(true);

      setTimeout(() => {

        setGuardarCargando(false);
        setGuardarResultado(resultado.data.DISPLAY[getCriptomoneda][getMoneda]);
      }, 2000);
  
    }
    cotizarCriptomoneda();
  }, [getMoneda, getCriptomoneda]);

  const componente = (getCargando) ? <Spinner /> : <Cotizacion getResultado={getResultado} />


  return (
    <Contenedor>
      <div>
        <Imagen 
          src={imagen}
          alt="imagen cripto"
        />
      </div>

      <div>
        <Heading>Venga la cripto</Heading>

        <Formulario 
          setGuardarMoneda={setGuardarMoneda}
          setGuardarCriptomoneda={setGuardarCriptomoneda}
        />

        {componente}
      </div>
    </Contenedor>
  );
}

export default App;
