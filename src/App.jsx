import React from "react"
import LogoReact from './assets/react.svg';
import TareaFormulario from "./componentes/TareaFormulario";
import Tarea from "./componentes/Tarea";
import ListaDeTareas from "./componentes/ListaDeTareas";

function App() {

  return (
    <>
      <div >
        <div className="container">
          <div className="row"></div>
          <div className="row">
            <div className="col">
              <div className="d-flex flex-column align-items-center mt-5">
                <img src={LogoReact} alt="" width='100px' />
                <h1 className="mt-4">lista de tareas</h1>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="row">
        <ListaDeTareas/>
      </div>

    </>
  )
}

export default App
