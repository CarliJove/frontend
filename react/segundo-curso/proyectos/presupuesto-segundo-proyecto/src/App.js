import React, { useState, useEffect } from 'react';
import Pregunta from './components/Pregunta';
import Formulario from './components/Formulario';
import Listado from './components/Listado';
import ControlEnergia from './components/ControlEnergia';


function App() {

  //state
  const [ getEnergia, setGuardarEnergia] = useState (0);
  const [getRestante, setGuardarRestante] = useState(0);
  const [ getMostrarPregunta, setActualizarPregunta] = useState (true);
  const [getGastos, setGuadarGastos] = useState([]);
  const [getGasto, setGuardarGasto] = useState({});
  const [getCrearGasto, setCrearGasto] = useState(false);
  
  //useEffect que actualiza el restante
  useEffect(() => {
    if(getCrearGasto){

        //agrega nueva cant de energia
        setGuadarGastos([
          ...getGastos,
          getGasto
        ])

        //resta energia de la actual
        const energiaRestante = getRestante - getGasto.getCantidad;
        setGuardarRestante(energiaRestante);
        
        //resetear a false
        setCrearGasto(false);
    }    
  }, [getGasto, getCrearGasto, getGastos,getRestante]);

  return (
    <div className="container">
      <header>
        <h1>Energia de Carli</h1>

        <div className="contenido-principal contenido">
          { getMostrarPregunta ? 
            <Pregunta 
              setGuardarEnergia={setGuardarEnergia}
              setGuardarRestante={setGuardarRestante}
              setActualizarPregunta={setActualizarPregunta}
            />
             : 
            
            <div className="row">
              <div className="one-half column">
                <Formulario 
                  setGuardarGasto={setGuardarGasto}
                  setCrearGasto={setCrearGasto}
                />
              </div>
            
              <div className="one-half column">
                < Listado 
                  getGastos={getGastos}
                />

                < ControlEnergia
                  getEnergia= {getEnergia}
                  getRestante= {getRestante}
                />
              </div>
            </div>
            }
          
        </div>
      </header>
    </div>
  );
}

export default App;
