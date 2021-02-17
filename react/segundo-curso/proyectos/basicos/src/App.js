import React, {Fragment, useState} from 'react'
import Header from './components/Header';
import Footer from './components/Footer';
import Comida from './components/Comida';
import Cocina from './components/Cocina';



function App() {

  const [ comidas, setComidas] = useState ([
    {id: 1, nombre: "desayuno", horario: 9},
    {id: 2, nombre: "almuerzo", horario: 12},
    {id: 3, nombre: "merienda", horario: 17},
    {id: 4, nombre: "cena", horario: 21},

  ])

  //segundo state
const [preparacion, preparacionMorfi] = useState ([]);

  const fecha = new Date().getFullYear();
  
  return (
    <Fragment>
      < Header 
        titulo= "Cuándo se come en esta casa, TENGO HAMBRE"/>
      
      <h1>El morfi viene asi gente:</h1>
      {comidas.map(comida => (
          <Comida 
              key = {comida.id}
              comida={comida}
              comidas={comidas}
              preparacion={preparacion}
              preparacionMorfi={preparacionMorfi}
          />
      ))}

      < Cocina 
        preparacion= {preparacion}
        preparacionMorfi={preparacionMorfi}
      />

      < Footer 
        fecha={fecha}/>
    </Fragment>
  );
}

export default App;
