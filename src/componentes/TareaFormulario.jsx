import React, { useState } from 'react'


function TareaFormulario() {

  const[input, setInput] = useState('');

  function manejarCambio(e) {
    console.log(e.target.value)
    setInput()
  }

  function manejarEnvio(e) {
    e.preventDefault();
    console.log('Enviando información')
    const tareaNueva = {
      id: '1',
      texto: input
    }
  }

  return (
    <>
    <div className="col-12">
        <form
        className="d-flex"
        onSubmit={manejarEnvio}
        >
            <input 
            className='form-control' 
            type="text" 
            placeholder='Escribe una tarea'
            onChange={manejarCambio} />
            <button className='btn btn-warning'>Agregar</button>
        </form>
    </div>
    </>
  )
}
 
export default TareaFormulario
