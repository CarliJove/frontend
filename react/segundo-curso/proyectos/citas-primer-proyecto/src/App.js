import React, {Fragment, useState, useEffect} from 'react';
import Formulario from './components/Formulario';
import Cita from './components/Cita';
import PropTypes from 'prop-types';


function App() {


  //citas en local storage
  let citasIniciales = JSON.parse(localStorage.getItem('getCitas'));
  if(!citasIniciales) {
  citasIniciales = [];
}

  //arreglar citas

  const [getCitas, setGuardarCitas] = useState (citasIniciales);

  useEffect(() => {
    if(citasIniciales) {
      localStorage.setItem('getCitas', JSON.stringify(getCitas))
      } else {
        localStorage.setItem('getCitas', JSON.stringify([]));
      }
  }, [getCitas, citasIniciales]);

  // modifica citas actuales y agrega nueva
  const crearCita = getCita => {
    setGuardarCitas([
      ...getCitas,
      getCita
    ]);
  }

  //elimina citas por id
  const eliminarCita = id => {
    const nuevasCitas = getCitas.filter(cita => cita.id !== id);
    setGuardarCitas(nuevasCitas);
  }

  //mensaje condicional de citas
  const titulo = getCitas.length === 0 ? 'No hay cariñitos' : 'Aqui tengo tu cariñito';

  return (
    <Fragment>
    <h1>Caricias para conejitos</h1>

    <div className= "container">
      <div className="row">
        <div className="one-half column">
          <Formulario
          crearCita={crearCita}
          />
        </div>
        <div className="one-half column">
          <h2>{titulo}</h2>
          {getCitas.map(cita => (
            <Cita 
              key={cita.id}
              cita={cita}
              eliminarCita={eliminarCita}
            />
          ))}
        </div>
      </div>
    </div>
    </Fragment>
  );
}

Formulario.propTypes = {
  crearCita: PropTypes.func.isRequired
}

export default App;
